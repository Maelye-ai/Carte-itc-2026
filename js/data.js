/**
 * DONNÉES GÉOLOGIQUES & PÉDAGOGIQUES
 * LAGUNES EXPLORATION AFRIQUE (LEA) - PROJET ITC 2026
 */

const LEA_DATA = {
  company: {
    name: "LAGUNES EXPLORATION AFRIQUE",
    acronym: "LEA",
    tagline: "L'exploration minière responsable, transparente et au service du développement",
    headquarters: "Abidjan, Côte d'Ivoire",
    website: "https://lagunes-exploration.ci",
    focus: ["Or (Au)", "Lithium (Li)", "Bauxite (Al)", "Manganèse (Mn)"]
  },

  // Sites miniers suivis
  sites: [
    {
      id: "bongouanou",
      name: "Bongouanou",
      district: "District des Lacs",
      region: "Région du Moronou",
      commune: "Bongouanou / Andé",
      lat: 6.6167,
      lon: -4.2000,
      status: "wip",
      statusLabel: "Forages carottés en cours",
      progress: 55,
      minerals: ["Or (Au)", "Bauxite (Al)"],
      mineralPrimary: "Or (Au)",
      permitNumber: "PR-084/MIM-LEA",
      permitAreaKm2: 280,
      targetDepthMeters: 300,
      drilledMeters: 1850,
      samplesAnalyzed: 420,
      startDate: "Mars 2024",
      estimatedCompletion: "Fin 2026",
      headline: "Campagne de sondages profonds pour évaluer l'extension du gisement birimien",
      summary: "Ce site fait l'objet de forages carottés diamantés pour vérifier la continuité en profondeur des veines de quartz aurifères repérées en surface. L'objectif est d'estimer les volumes et la concentration d'or avec une rigueur scientifique absolue.",
      workCompleted: [
        "Cartographie géologique détaillée du socle sur 280 km²",
        "Campagne géochimique de sol avec 1 200 échantillons prélevés en surface",
        "Levé géophysique au sol (magnétométrie et résistivité)",
        "12 sondages carottés profonds réalisés (1 850 mètres cumulés)"
      ],
      nextSteps: [
        "Analyses spectrales et pyro-analyses en laboratoire certifié",
        "Modélisation géologique 3D numérique du corridor minéralisé",
        "Restitution publique des résultats aux autorités et chefferies du Moronou"
      ],
      rseAndEnvironment: [
        "100% des plateformes de forage rebouchées et revégétalisées",
        "Forages à l'eau claire sans aucun adjuvant chimique toxique",
        "Création de 22 emplois locaux temporaires pour les jeunes de la région",
        "Accord de concertation permanent signé avec 4 chefferies villageoises"
      ],
      coreSample: [
        { depth: "0m - 5m", title: "Terre végétale & cuirasse latéritique", desc: "Couche superficielle rougeoyante riche en fer, formée par l'érosion tropicale.", color: "#8B4513", hasGold: false },
        { depth: "5m - 24m", title: "Saprolite (roche altérée)", desc: "Roche intermédiaire décomposée par l'eau mais conservant la texture originelle.", color: "#CD853F", hasGold: false },
        { depth: "24m - 68m", title: "Schistes volcanosédimentaires birimiens", desc: "Roche saine très ancienne (~2,1 milliards d'années) constituant le socle ouest-africain.", color: "#4A5568", hasGold: false },
        { depth: "68m - 76m", title: "Veine de quartz hydrothermale minéralisée", desc: "Fissure où l'eau chaude venue des profondeurs a cristallisé du quartz et des micro-paillettes d'or visibles.", color: "#ECC94B", hasGold: true, grade: "3,8 g/t d'or" },
        { depth: "76m - 140m", title: "Granodiorite massive", desc: "Roche plutonique dure et stable servant de mur rocheux à la minéralisation.", color: "#718096", hasGold: false }
      ]
    },
    {
      id: "beoumi",
      name: "Béoumi",
      district: "District de la Vallée du Bandama",
      region: "Région du Gbêkê",
      commune: "Béoumi / Bodokro",
      lat: 7.6667,
      lon: -5.5667,
      status: "todo",
      statusLabel: "Prospection & Télédétection à démarrer",
      progress: 15,
      minerals: ["Or (Au)", "Lithium (Li)"],
      mineralPrimary: "Lithium & Or",
      permitNumber: "PR-112/MIM-LEA",
      permitAreaKm2: 340,
      targetDepthMeters: 200,
      drilledMeters: 0,
      samplesAnalyzed: 85,
      startDate: "Janvier 2026",
      estimatedCompletion: "2027",
      headline: "Études préliminaires non intrusives et cartographie structurale par satellite",
      summary: "Ce permis explore des pegmatites susceptibles de contenir du lithium (métal stratégique de la transition énergétique) et des structures aurifères. Les travaux sont actuellement au stade préliminaire de laboratoire et de géomatique.",
      workCompleted: [
        "Traitement d'images radar et optiques satellitaires Sentinel-2",
        "Reconnaissance pédestre préliminaire le long des axes routiers",
        "Prélèvements alluvionnaires de reconnaissance (méthode de la batée)"
      ],
      nextSteps: [
        "Campagne de géophysique aéroportée par drone (sans émission de CO₂)",
        "Carroyage géochimique de surface sur les cibles prioritaires",
        "Réunion d'information communautaire avec les préfectures locales"
      ],
      rseAndEnvironment: [
        "Impact environnemental nul : aucune tranchée ni machine lourde à ce stade",
        "Étude préalable sur les corridors fauniques du Bandama",
        "Protocole de respect strict des zones sacrées et agricoles"
      ],
      coreSample: [
        { depth: "0m - 3m", title: "Sols alluvionnaires et limons", desc: "Couche sableuse liée à la proximité du bassin du Bandama.", color: "#A0522D", hasGold: false },
        { depth: "3m - 18m", title: "Altérite sableuse", desc: "Décomposition des roches feldspathiques sous climat soudano-guinéen.", color: "#D2B48C", hasGold: false },
        { depth: "18m - 60m", title: "Faisceau de pegmatites à spodumène", desc: "Roche magmatique blanche à gros cristaux où se concentre le lithium minéral.", color: "#CBD5E0", hasGold: false, isLithium: true, grade: "1,2% Li₂O" },
        { depth: "60m - 110m", title: "Gneiss encaissant rubané", desc: "Roche métamorphique rubanée constituant le socle géologique profond.", color: "#4A5568", hasGold: false }
      ]
    },
    {
      id: "gagnoa",
      name: "Gagnoa",
      district: "District du Gôh-Djiboua",
      region: "Région du Gôh",
      commune: "Gagnoa / Ouragahio",
      lat: 6.1319,
      lon: -5.9506,
      status: "ok",
      statusLabel: "Campagne géophysique validée (Phase 1 terminée)",
      progress: 100,
      minerals: ["Or (Au)"],
      mineralPrimary: "Or (Au)",
      permitNumber: "PR-095/MIM-LEA",
      permitAreaKm2: 210,
      targetDepthMeters: 250,
      drilledMeters: 920,
      samplesAnalyzed: 1450,
      startDate: "Juin 2023",
      estimatedCompletion: "Phase 1 achevée",
      headline: "Anomalie aurifère majeure confirmée sur un corridor de 3,5 km",
      summary: "La première phase d'investigation est achevée avec un succès remarquable. Les analyses de sol et la géophysique ont cartographié avec précision un couloir minéralisé continu. Le rapport géotechnique est validé auprès du Ministère des Mines.",
      workCompleted: [
        "Campagne géochimique intégrale de 1 450 échantillons",
        "Levé magnétique au sol haute définition ayant révélé un axe de faille majeur",
        "Campagne pilote de forages destructifs à percussion (RC) sur 920 m",
        "Dépôt du rapport officiel de fin de phase auprès de la Direction des Mines"
      ],
      nextSteps: [
        "Lancement de la phase 2 : forages de resserrement (maille 50m x 50m)",
        "Étude d'évaluation des ressources selon le standard international JORC",
        "Étude d'impact environnemental et social approfondie (EIES)"
      ],
      rseAndEnvironment: [
        "100% des sites d'échantillonnage remis en état initial",
        "Financement d'un point d'eau potable réhabilité dans un village riverain",
        "Dialogue transparent avec le comité villageois de développement"
      ],
      coreSample: [
        { depth: "0m - 4m", title: "Sol brun argileux & latérite", desc: "Horizon végétal riche avec débris de quartz disséminés.", color: "#8B4513", hasGold: false },
        { depth: "4m - 20m", title: "Argiles d'altération", desc: "Saprolite silteuse typique de la région du Gôh.", color: "#CD853F", hasGold: false },
        { depth: "20m - 55m", title: "Métasédiments birimiens foliés", desc: "Roches plissées lors de l'orogenèse éburnéenne il y a 2 milliards d'années.", color: "#4A5568", hasGold: false },
        { depth: "55m - 65m", title: "Corridor hydrothermal à pyrite & or", desc: "Zone hautement minéralisée avec sulfures et or disséminé dans la roche.", color: "#F6E05E", hasGold: true, grade: "4,2 g/t d'or" },
        { depth: "65m - 120m", title: "Amphibolite basique", desc: "Roche verte métamorphique très résistante.", color: "#2D3748", hasGold: false }
      ]
    },
    {
      id: "tiassale",
      name: "Tiassalé (Projet Lagunes)",
      district: "District des Lagunes",
      region: "Région de l'Agnéby-Tiassa",
      commune: "Tiassalé / N'Douci",
      lat: 5.8983,
      lon: -4.8228,
      status: "wip",
      statusLabel: "Reconnaissance géochimique & RSE",
      progress: 40,
      minerals: ["Or (Au)", "Manganèse (Mn)"],
      mineralPrimary: "Or & Manganèse",
      permitNumber: "PR-130/MIM-LEA",
      permitAreaKm2: 310,
      targetDepthMeters: 180,
      drilledMeters: 450,
      samplesAnalyzed: 620,
      startDate: "Octobre 2024",
      estimatedCompletion: "2027",
      headline: "Ancrage historique de LEA le long de la faille géologique du fleuve Bandama",
      summary: "Ce permis situé au cœur du District des Lagunes explore le contact géologique entre les bassins sédimentaires côtiers et les formations birimiennes de l'intérieur.",
      workCompleted: [
        "Cartographie géologique régionale au 1/25 000",
        "Prélèvements de sédiments de ruisseau (Stream sediments)",
        "6 forages préliminaires de reconnaissance géologique"
      ],
      nextSteps: [
        "Campagne d'échantillonnage de sol à maille serrée",
        "Modélisation des structures de contact géologique",
        "Partenariats de formation avec les universités ivoiriennes"
      ],
      rseAndEnvironment: [
        "Respect scrupuleux du bassin versant du fleuve Bandama",
        "Soutien aux coopératives agricoles locales par des conventions d'accès partagé",
        "Recrutement de guides locaux et sensibilisation communautaire"
      ],
      coreSample: [
        { depth: "0m - 6m", title: "Alluvions et sables continentaux", desc: "Dépôts récents du système hydrographique du fleuve.", color: "#D2B48C", hasGold: false },
        { depth: "6m - 30m", title: "Niveaux manganésifères et argiles", desc: "Couches riches en oxydes de manganèse noirs et bruns.", color: "#4A5568", hasGold: false },
        { depth: "30m - 75m", title: "Volcanites calco-alcalines birimiennes", desc: "Socle volcanique ancien traversé de veinules de quartz.", color: "#2D3748", hasGold: true, grade: "2,1 g/t d'or" },
        { depth: "75m - 120m", title: "Gneiss basique", desc: "Socle géologique cristallin profond.", color: "#1A202C", hasGold: false }
      ]
    }
  ],

  // Cycle didactique de l'exploration minière en 5 étapes pour le public non-expert
  explorationCycle: [
    {
      step: 1,
      name: "Prospection préliminaire & Télédétection",
      metaphor: "Le travail d'enquêteur à la loupe et par satellite",
      objective: "Identifier les zones géographiques prometteuses sans toucher au sous-sol.",
      howItWorks: "Les géologues étudient des cartes géologiques, des images satellites radar et parcourent le terrain à pied. Ils prélèvent de petits échantillons de roches de surface et pratiquent la batée au bord des cours d'eau pour chercher des indices de minéralisation.",
      tools: ["Images satellites (Sentinel, Landsat)", "Boussole & GPS", "Marteau de géologue", "Batée de prospection"],
      environmentalImpact: "Impact écologique nul. Aucune excavation, respect des plantations et de la flore.",
      duration: "6 à 12 mois",
      icon: "satellite"
    },
    {
      step: 2,
      name: "Géophysique & Géochimie de surface",
      metaphor: "La 'radiographie médicale' du sol sans creuser",
      objective: "Détecter les anomalies invisibles à l'œil nu cachées sous plusieurs mètres de terre.",
      howItWorks: "Des capteurs mesurent le magnétisme, la densité et la conductivité électrique des roches (par avion, drone ou à pied). En parallèle, des prélèvements de terre de la taille d'une tasse de café sont analysés en laboratoire pour cartographier les concentrations anormales de métaux.",
      tools: ["Magnétomètres haute précision", "Résistivimètre / Polarisation provoquée", "Drones de cartographie", "Analyses ICP-MS"],
      environmentalImpact: "Prélèvements minimes à la tarière manuelle, trous immédiatement rebouchés.",
      duration: "6 à 18 mois",
      icon: "radar"
    },
    {
      step: 3,
      name: "Forages d'exploration (Sondages profonds)",
      metaphor: "La biopsie géologique millimétrée",
      objective: "Vérifier si le minerai existe réellement en profondeur, sur quelle épaisseur et jusqu'à quelle profondeur.",
      howItWorks: "Une foreuse spécialisée extrait des cylindres continus de roche (appelés 'carottes') jusqu'à 200m ou 400m de profondeur. Chaque carotte est soigneusement rangée dans des boîtes en bois, mesurée, photographiée et décrite centimètre par centimètre par un géologue.",
      tools: ["Sondeuse carottière diamantée (DD)", "Foreuse à circulation inverse (RC)", "Boîtes à carottes", "Loupe binoculaire"],
      environmentalImpact: "Chantier très localisé (30 m² par forage). Eau recyclée en circuit fermé, plateformes nivelées et reboisées à la fin de la campagne.",
      duration: "12 à 24 mois",
      icon: "drill"
    },
    {
      step: 4,
      name: "Analyses de laboratoire & Estimation des réserves",
      metaphor: "La balance de précision scientifique",
      objective: "Calculer scientifiquement le tonnage de roche et la quantité exacte de métal par tonne.",
      howItWorks: "Les carottes sont sciées en deux moitiés égales : une moitié est conservée comme preuve archivée, l'autre moitié est broyée et dosée en laboratoire certifié. Si un gisement contient par exemple 3 grammes d'or par tonne de roche, les ingénieurs modélisent en 3D la rentabilité économique du projet.",
      tools: ["Spectromètres de masse", "Pyro-analyse au feu (Fire Assay)", "Logiciels de modélisation 3D géologique (Datamine, Micromine)"],
      environmentalImpact: "Analyses réalisées en laboratoire chimique accrédité avec traitement des effluents selon les normes ISO 17025.",
      duration: "6 à 12 mois",
      icon: "flask"
    },
    {
      step: 5,
      name: "Étude d'Impact (EIES) & Concertation communautaire",
      metaphor: "Le passeport environnemental, social et légal",
      objective: "Décider en accord avec l'État et les communautés locales si le projet peut passer à la phase de construction.",
      howItWorks: "Des experts indépendants évaluent l'impact sur la biodiversité, les cours d'eau, l'agriculture et les villages. Des audiences publiques ont lieu avec les chefferies. Si le projet est jugé viable et approuvé par décret gouvernemental, un Permis d'Exploitation (minier) peut être octroyé. Dans le cas contraire, le site est intégralement restitué à la nature.",
      tools: ["Audits de biodiversité", "Enquêtes socio-économiques", "Plans de gestion environnementale", "Comités de concertation locale"],
      environmentalImpact: "Garantie que toute future activité industrielle respectera les critères les plus stricts de préservation de la nature.",
      duration: "12 à 24 mois",
      icon: "shield-check"
    }
  ],

  // Distinction essentielle pour le grand public
  comparison: {
    title: "Exploration vs Exploitation : Ne confondez plus !",
    exploration: {
      title: "Exploration Minière (Ce que fait LEA)",
      status: "Recherche scientifique préliminaire",
      activities: [
        "Cartographie géologique et photos satellites",
        "Prélèvements de terre à la main et forages discrets",
        "Analyses en laboratoire et modélisation par ordinateur",
        "Aucune extraction commerciale de roche",
        "Impact temporaire et réhabilitation immédiate des sols"
      ],
      goal: "Découvrir si un trésor géologique existe dans le respect des lois et des populations."
    },
    exploitation: {
      title: "Exploitation Minière (Phase industrielle future)",
      status: "Production et extraction à grande échelle",
      activities: [
        "Construction d'usines de traitement et d'infrastructures",
        "Mines à ciel ouvert ou galeries souterraines",
        "Extraction quotidienne de milliers de tonnes de minerai",
        "Retombées fiscales majeures pour l'État et les communes",
        "Soumis à un décret présidentiel et à des garanties financières de réhabilitation"
      ],
      goal: "Produire les métaux indispensables aux batteries, à la haute technologie et à l'économie nationale."
    }
  },

  // Lexique simplifié pour non-experts
  glossary: [
    {
      term: "Permis de Recherche (PR)",
      definition: "Autorisation accordée par le gouvernement à une entreprise pour chercher des minerais sur une superficie définie, pendant une durée limitée (généralement 3 à 4 ans renouvelables). Il ne donne PAS le droit d'extraire ou de vendre du minerai."
    },
    {
      term: "Carotte de forage",
      definition: "Cylindre continu de roche solide extrait du sous-sol par un carottier diamanté. C'est l'unique moyen d'observer directement la roche telle qu'elle est à des centaines de mètres de profondeur."
    },
    {
      term: "Anomalie géochimique",
      definition: "Zone du sol où la présence d'un métal dépasse très nettement la moyenne naturelle de la région, indiquant la présence potentielle d'un gisement à proximité."
    },
    {
      term: "Teneur (en g/t)",
      definition: "Quantité de métal pur contenue dans une tonne de roche. Pour l'or, une roche contenant 2 à 4 grammes d'or par tonne est déjà considérée comme très intéressante !"
    },
    {
      term: "Roches Birimiennes",
      definition: "Formations géologiques très anciennes datant de plus de 2 milliards d'années, caractéristiques de l'Afrique de l'Ouest (Côte d'Ivoire, Ghana, Mali, Burkina Faso), mondialement réputées pour leur grande richesse en or et minerais critiques."
    },
    {
      term: "RSE (Responsabilité Sociétale des Entreprises)",
      definition: "Ensemble des engagements d'une entreprise minière envers les habitants des zones d'exploration : recrutement local prioritaire, dialogue avec les chefs traditionnels, respect des coutumes et protection des sources d'eau."
    },
    {
      term: "Lithium (Li)",
      definition: "Métal blanc argenté ultra-léger, ingrédient indispensable à la fabrication des batteries des smartphones, des ordinateurs et des voitures électriques de nouvelle génération."
    }
  ],

  // Contour approximatif simplifié de la Côte d'Ivoire (repères géographiques)
  ivoryCoastBounds: {
    center: [7.54, -5.55],
    zoom: 7,
    polygon: [
      [-2.85, 5.05], [-2.70, 6.00], [-3.15, 7.30], [-2.75, 8.50],
      [-3.00, 9.50], [-4.20, 10.45], [-5.60, 10.70], [-7.00, 10.30],
      [-8.20, 10.50], [-8.60, 9.50], [-8.45, 8.00], [-8.55, 7.30],
      [-7.50, 6.00], [-7.50, 4.35], [-6.00, 4.75], [-4.50, 5.15],
      [-3.50, 5.10], [-2.85, 5.05]
    ]
  }
};

// Export global pour utilisation dans le navigateur
if (typeof window !== "undefined") {
  window.LEA_DATA = LEA_DATA;
}
