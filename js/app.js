/**
 * CONTRÔLEUR GÉNÉRAL DE L'APPLICATION
 * LAGUNES EXPLORATION AFRIQUE (LEA) - STYLE GOOGLE MAPS 3D
 */

class LEAApp {
  constructor() {
    this.currentView = "3d"; // "3d" ou "2d"
    this.activeSite = null;
    this.activeFilter = "all";
    this.searchQuery = "";
    this.isTourRunning = false;

    this.init();
  }

  init() {
    // 1. Initialisation des moteurs
    this.education = new LEAEducation();

    this.globe3d = new LEAGlobe3D("globe-3d-container", {
      onSiteSelect: (site) => this.selectSite(site, "3d")
    });

    this.map2d = new LEAMap2D("map-2d-container", {
      onSiteSelect: (site) => this.selectSite(site, "2d")
    });

    // 2. Rendu de l'interface
    this.renderBottomCarousel();
    this.setupEventListeners();

    // 3. Préparer le premier site actif
    if (window.LEA_DATA && window.LEA_DATA.sites.length > 0) {
      this.activeSite = window.LEA_DATA.sites[0];
    }

    // Exposer l'instance globale
    window.LEAUi = this;
  }

  setupEventListeners() {
    // Bascule de Vue 3D / 2D
    const btn3d = document.getElementById("btn-view-3d");
    const btn2d = document.getElementById("btn-view-2d");
    const viewport3d = document.getElementById("globe-3d-container");
    const viewport2d = document.getElementById("map-2d-container");

    btn3d.addEventListener("click", () => {
      this.currentView = "3d";
      btn3d.classList.add("active");
      btn2d.classList.remove("active");
      viewport3d.classList.add("active");
      viewport2d.classList.remove("active");
      if (this.activeSite) {
        this.globe3d.flyToSite(this.activeSite, 1400);
      }
    });

    btn2d.addEventListener("click", () => {
      this.currentView = "2d";
      btn2d.classList.add("active");
      btn3d.classList.remove("active");
      viewport2d.classList.add("active");
      viewport3d.classList.remove("active");
      setTimeout(() => {
        this.map2d.invalidateSize();
        if (this.activeSite) {
          this.map2d.flyToSite(this.activeSite, 10);
        } else {
          this.map2d.fitBoundsAll();
        }
      }, 200);
    });

    // Recherche temps réel
    const searchInput = document.getElementById("global-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", (e) => {
        this.searchQuery = e.target.value.toLowerCase();
        this.filterAndRenderCarousel();
      });
    }

    // Filtres par chips (Tous, Or, Lithium, En cours...)
    const filterChips = document.querySelectorAll(".filter-chip");
    filterChips.forEach(chip => {
      chip.addEventListener("click", () => {
        filterChips.forEach(c => c.classList.remove("active"));
        chip.classList.add("active");
        this.activeFilter = chip.getAttribute("data-filter");
        this.filterAndRenderCarousel();
      });
    });

    // Boutons de navigation (Zoom, Home, Boussole)
    const zoomInBtn = document.getElementById("nav-zoom-in");
    const zoomOutBtn = document.getElementById("nav-zoom-out");
    const homeBtn = document.getElementById("nav-home-btn");
    const compassBtn = document.getElementById("nav-compass-btn");

    if (zoomInBtn) {
      zoomInBtn.addEventListener("click", () => {
        if (this.currentView === "3d") {
          this.globe3d.camera.position.z = Math.max(11.5, this.globe3d.camera.position.z - 2.5);
        } else {
          this.map2d.map.zoomIn();
        }
      });
    }

    if (zoomOutBtn) {
      zoomOutBtn.addEventListener("click", () => {
        if (this.currentView === "3d") {
          this.globe3d.camera.position.z = Math.min(42, this.globe3d.camera.position.z + 3);
        } else {
          this.map2d.map.zoomOut();
        }
      });
    }

    if (homeBtn) {
      homeBtn.addEventListener("click", () => {
        if (this.currentView === "3d") {
          this.globe3d.focusOnIvoryCoast(true);
        } else {
          this.map2d.fitBoundsAll();
        }
      });
    }

    if (compassBtn) {
      compassBtn.addEventListener("click", () => {
        if (this.currentView === "3d") {
          this.globe3d.focusOnIvoryCoast(true);
        } else {
          this.map2d.map.setBearing ? this.map2d.map.setBearing(0) : this.map2d.fitBoundsAll();
        }
      });
    }

    // Bouton Visite Guidée (Tour 3D)
    const tourBtn = document.getElementById("btn-start-tour");
    if (tourBtn) {
      tourBtn.addEventListener("click", () => this.toggleGuidedTour());
    }

    // Bouton Espace Pédagogique
    const eduBtn = document.getElementById("btn-open-edu");
    if (eduBtn) {
      eduBtn.addEventListener("click", () => this.openEducationModal());
    }

    // Fermeture du Drawer
    const closeDrawerBtn = document.getElementById("drawer-close-btn");
    if (closeDrawerBtn) {
      closeDrawerBtn.addEventListener("click", () => this.closeSiteDrawer());
    }

    // Fermeture de la Modale Pédagogique
    const closeEduBtn = document.getElementById("modal-edu-close");
    const modalOverlay = document.getElementById("modal-edu-overlay");
    if (closeEduBtn) {
      closeEduBtn.addEventListener("click", () => this.closeEducationModal());
    }
    if (modalOverlay) {
      modalOverlay.addEventListener("click", (e) => {
        if (e.target === modalOverlay) this.closeEducationModal();
      });
    }

    // Onglets de la Modale Pédagogique
    const tabBtns = document.querySelectorAll(".modal-tab-btn");
    tabBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        tabBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        const tabKey = btn.getAttribute("data-tab");
        this.switchEduTab(tabKey);
      });
    });

    // Partage WhatsApp global
    const waGlobalBtn = document.getElementById("btn-share-wa");
    if (waGlobalBtn) {
      waGlobalBtn.addEventListener("click", () => this.shareOnWhatsApp());
    }
  }

  // Rendu du carrousel de cartes de sites en bas
  renderBottomCarousel() {
    const container = document.getElementById("bottom-carousel");
    if (!container || !window.LEA_DATA) return;

    const sites = this.getFilteredSites();
    container.innerHTML = "";

    if (sites.length === 0) {
      container.innerHTML = `
        <div style="background:var(--panel-bg); padding:12px 20px; border-radius:12px; color:var(--text-muted); font-size:0.85rem;">
          Aucun site minier ne correspond aux critères sélectionnés.
        </div>
      `;
      return;
    }

    sites.forEach(site => {
      const card = document.createElement("div");
      card.className = `carousel-site-card ${this.activeSite && this.activeSite.id === site.id ? 'active' : ''}`;
      card.id = `card-site-${site.id}`;

      const statusClass = `badge-${site.status}`;
      const fillCol = site.status === 'ok' ? '#10b981' : site.status === 'wip' ? '#d4af37' : '#38bdf8';

      card.innerHTML = `
        <div class="card-top-row">
          <div class="card-site-name">${site.name}</div>
          <span class="card-badge ${statusClass}">${site.statusLabel.split(' ')[0]}</span>
        </div>
        <div class="card-site-region">${site.region} • ${site.mineralPrimary}</div>
        <div class="card-progress-section">
          <div class="card-progress-track">
            <div class="card-progress-fill" style="width: ${site.progress}%; background: ${fillCol};"></div>
          </div>
          <div class="card-progress-text">${site.progress}%</div>
        </div>
      `;

      card.addEventListener("click", () => {
        this.selectSite(site);
      });

      container.appendChild(card);
    });
  }

  getFilteredSites() {
    let sites = window.LEA_DATA ? window.LEA_DATA.sites : [];

    if (this.activeFilter !== "all") {
      sites = sites.filter(s => {
        if (this.activeFilter === "wip") return s.status === "wip";
        if (this.activeFilter === "ok") return s.status === "ok";
        if (this.activeFilter === "todo") return s.status === "todo";
        if (this.activeFilter === "gold") return s.minerals.some(m => m.includes("Or"));
        if (this.activeFilter === "lithium") return s.minerals.some(m => m.includes("Lithium"));
        if (this.activeFilter === "bauxite") return s.minerals.some(m => m.includes("Bauxite"));
        return true;
      });
    }

    if (this.searchQuery) {
      sites = sites.filter(s =>
        s.name.toLowerCase().includes(this.searchQuery) ||
        s.region.toLowerCase().includes(this.searchQuery) ||
        s.commune.toLowerCase().includes(this.searchQuery) ||
        s.minerals.join(" ").toLowerCase().includes(this.searchQuery) ||
        s.permitNumber.toLowerCase().includes(this.searchQuery)
      );
    }

    return sites;
  }

  filterAndRenderCarousel() {
    this.renderBottomCarousel();
  }

  // Sélection d'un site
  selectSite(site, sourceView = null) {
    this.activeSite = site;

    // Mise à jour visuelle des cartes du carrousel
    document.querySelectorAll(".carousel-site-card").forEach(c => c.classList.remove("active"));
    const activeCard = document.getElementById(`card-site-${site.id}`);
    if (activeCard) {
      activeCard.classList.add("active");
      activeCard.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }

    // Animation Caméra 3D
    if (this.currentView === "3d") {
      this.globe3d.flyToSite(site);
    } else {
      this.map2d.flyToSite(site, 11);
    }

    // Ouvrir le panneau latéral détaillé
    this.openSiteDrawer(site.id);
  }

  // Ouverture et remplissage du Drawer
  openSiteDrawer(siteId) {
    const site = window.LEA_DATA.sites.find(s => s.id === siteId) || this.activeSite;
    if (!site) return;

    this.activeSite = site;
    const drawer = document.getElementById("site-drawer");

    // Remplir les données
    document.getElementById("drawer-site-title").textContent = site.name;
    document.getElementById("drawer-site-region").textContent = `${site.region} — ${site.commune}`;

    const badgeEl = document.getElementById("drawer-site-badge");
    badgeEl.textContent = site.statusLabel;
    badgeEl.className = `card-badge badge-${site.status}`;

    document.getElementById("stat-permit").textContent = site.permitNumber;
    document.getElementById("stat-area").textContent = `${site.permitAreaKm2} km²`;
    document.getElementById("stat-drilled").textContent = `${site.drilledMeters} m`;
    document.getElementById("stat-samples").textContent = site.samplesAnalyzed;

    document.getElementById("drawer-site-summary").textContent = site.summary;

    // Travaux réalisés
    const workListEl = document.getElementById("drawer-work-list");
    workListEl.innerHTML = site.workCompleted.map(w => `<li>${w}</li>`).join("");

    // RSE et écologie
    const rseListEl = document.getElementById("drawer-rse-list");
    rseListEl.innerHTML = site.rseAndEnvironment.map(r => `<li>${r}</li>`).join("");

    // Bouton inspecter carotte
    const inspectCoreBtn = document.getElementById("btn-inspect-core-drawer");
    if (inspectCoreBtn) {
      inspectCoreBtn.onclick = () => {
        this.openEducationModal("core", site.id);
      };
    }

    // Bouton partage WhatsApp spécifique à ce site
    const waSiteBtn = document.getElementById("drawer-wa-btn");
    if (waSiteBtn) {
      const msg = `Découvrez les travaux d'exploration minière de LAGUNES EXPLORATION AFRIQUE (LEA) sur le site de ${site.name} (${site.region}) : ${site.statusLabel} avec ${site.drilledMeters}m de carottages réalisés ! ${window.location.href}`;
      waSiteBtn.href = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    }

    drawer.classList.add("open");
  }

  closeSiteDrawer() {
    const drawer = document.getElementById("site-drawer");
    if (drawer) drawer.classList.remove("open");
  }

  // Visite guidée 3D
  toggleGuidedTour() {
    const tourBtn = document.getElementById("btn-start-tour");
    const tourBanner = document.getElementById("tour-indicator-banner");

    if (this.isTourRunning) {
      this.isTourRunning = false;
      this.globe3d.stopGuidedTour();
      tourBtn.innerHTML = "▶ Visite Guidée 3D";
      tourBtn.classList.remove("running");
      if (tourBanner) tourBanner.style.display = "none";
    } else {
      this.isTourRunning = true;
      if (this.currentView !== "3d") {
        document.getElementById("btn-view-3d").click();
      }
      tourBtn.innerHTML = "⏹ Arrêter le Tour";
      tourBtn.classList.add("running");
      if (tourBanner) tourBanner.style.display = "flex";

      this.globe3d.startGuidedTour((site, index, total) => {
        this.selectSite(site);
        const tourTitle = document.getElementById("tour-banner-title");
        if (tourTitle) {
          tourTitle.textContent = `Étape ${index + 1}/${total} : ${site.name} (${site.mineralPrimary})`;
        }
      });
    }
  }

  // Modale Pédagogique
  openEducationModal(initialTab = "steps", siteId = null) {
    const modal = document.getElementById("modal-edu-overlay");
    if (!modal) return;

    modal.classList.add("open");
    this.switchEduTab(initialTab, siteId);
  }

  closeEducationModal() {
    const modal = document.getElementById("modal-edu-overlay");
    if (modal) modal.classList.remove("open");
  }

  switchEduTab(tabKey, siteId = null) {
    // Boutons d'onglets
    document.querySelectorAll(".modal-tab-btn").forEach(btn => {
      btn.classList.toggle("active", btn.getAttribute("data-tab") === tabKey);
    });

    // Contenus
    document.querySelectorAll(".modal-tab-content").forEach(content => {
      content.classList.remove("active");
    });

    const activeContent = document.getElementById(`tab-content-${tabKey}`);
    if (activeContent) activeContent.classList.add("active");

    // Rendu dynamique du contenu selon l'onglet
    if (tabKey === "steps") {
      this.education.renderExplorationSteps("tab-steps-container");
    } else if (tabKey === "comparison") {
      this.education.renderComparison("tab-comp-container");
    } else if (tabKey === "core") {
      const targetSiteId = siteId || (this.activeSite ? this.activeSite.id : "bongouanou");
      this.education.renderCoreSampleInspector("tab-core-container", targetSiteId);
    } else if (tabKey === "glossary") {
      this.education.renderGlossary("tab-glossary-container");
    }
  }

  // Partage global sur WhatsApp
  shareOnWhatsApp() {
    const title = "Portail 3D d'Exploration Minière — Lagunes Exploration Afrique (LEA)";
    const desc = "Explorez la cartographie interactive 3D des permis miniers de LEA en Côte d'Ivoire (Bongouanou, Béoumi, Gagnoa) et comprenez le travail d'exploration scientifique et responsable !";
    const url = window.location.href;
    const msg = `${title}\n\n${desc}\n\n👉 Accéder à la carte 3D : ${url}`;
    const waUrl = `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(waUrl, "_blank");
  }
}

// Initialisation au chargement du DOM
document.addEventListener("DOMContentLoaded", () => {
  window.app = new LEAApp();
});
