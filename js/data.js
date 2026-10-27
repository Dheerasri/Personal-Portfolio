// Portfolio Data Store: Architecture, Spatial Systems, Digital Lab & Human Dimension
window.PORTFOLIO_DATA = {
  profile: {
    name: "Alex Thorne",
    title: "Multi-Disciplinary Architect & Spatial Technologist",
    subtitle: "Investigating the intersections between physical architecture, socio-spatial systems, bodily endurance, and computational mediums.",
    location: "London / Berlin / Available Globally",
    status: "Open for architectural commissions, urban research & creative technology collaborations",
    bio: [
      "I operate across the thresholds of physical space, societal structures, and digital systems. Trained as an architect, my practice expands into urban sociometrics, computational prototyping, and endurance athletics.",
      "To me, architecture is not merely static form—it is a live choreography between human bodies, urban infrastructure, and temporal cycles. Running through metropolises at dawn provides the kinesthetic research; code allows rapid spatial experimentation; and deep interpersonal soft skills turn visionary concepts into inhabited realities."
    ],
    stats: [
      { label: "Built & Spatial Projects", value: "14+" },
      { label: "Urban Kilometers Logged", value: "6,400+" },
      { label: "Web Experiments & Repos", value: "28+" },
      { label: "Years Cross-Disciplinary Practice", value: "7+" }
    ],
    socials: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      instagram: "https://instagram.com",
      strava: "https://strava.com",
      email: "alex.thorne.spatial@gmail.com"
    }
  },

  // 1. Curated Architecture & Spatial Systems Projects
  projects: [
    {
      id: "porous-commons",
      title: "The Porous Commons",
      subtitle: "Collective Housing & Civic Threshold Typology",
      category: "Architecture",
      subCategory: "Social Housing & Urban Ecology",
      year: "2025",
      location: "Rotterdam, Netherlands",
      status: "Competition Finalist / Exhibition",
      scale: "8,400 m²",
      featured: true,
      coverImage: "porous_commons.svg",
      summary: "A high-density residential collective dismantling the traditional dichotomy between private domesticity and public urban life through graduated spatial porosities.",
      narrative: {
        brief: "Addressing the acute housing shortage and urban loneliness index in post-industrial harbor docks, this proposal rethinks the perimeter block into a permeable urban continuum.",
        concept: "Rather than monolithic walls, the perimeter is broken down into tiered micro-neighborhoods. Ground levels are surrendered to public craft workshops, civic laundry co-ops, and rainwater swales.",
        spatialImpact: "Fosters spontaneous sociability, reduces resident isolation by 42% through shared micro-hubs, and achieves Net-Zero operational carbon through passive solar massing and cross-ventilation.",
        materials: ["Mass Timber (CLT)", "Recycled Roman Brick", "Low-Carbon Lime Mortar", "Galvanized Steel Grates"]
      },
      softSkillsHighlight: "Facilitated 8 stakeholder consensus workshops with local neighborhood associations, municipal zoning regulators, and housing cooperative boards.",
      metrics: [
        { label: "Residential Units", value: "76 Units" },
        { label: "Shared Commons Ratio", value: "34% of GFA" },
        { label: "Embodied Carbon", value: "280 kg CO₂e/m²" }
      ],
      drawings: [
        { label: "Axonometric Porosity Diagram", type: "Axonometric" },
        { label: "Ground Floor Public Permeability Plan", type: "Plan 1:200" },
        { label: "Bio-Climatic Thermal Section", type: "Section 1:100" }
      ]
    },
    {
      id: "kinetic-threshold",
      title: "Liminal Pavilion: Kinetic Wind & Motion",
      subtitle: "Adaptive Micro-Climate Architecture",
      category: "Spatial Systems",
      subCategory: "Computational Pavilions",
      year: "2024",
      location: "Kyoto / Venice Biennale Special Mention",
      status: "Completed Prototype",
      scale: "180 m²",
      featured: true,
      coverImage: "kinetic_pavilion.svg",
      summary: "A responsive spatial installation engineered from steam-bent larch timber and tensile membranes, breathing in response to human crowd density and pedestrian thermal currents.",
      narrative: {
        brief: "Exploring how architecture can shed its static rigidity and mirror the kinetic adaptability of natural organisms and running athletes.",
        concept: "The structure utilizes mechanical counterweights and shape-memory micro-actuators. As visitors gather beneath the canopy, localized microclimates trigger aperture dilation to ventilate heat and daylight.",
        spatialImpact: "Transforms passive observers into active spatial choreography participants. Tested across 40,000 visitors during summer heatwaves.",
        materials: ["Japanese Larch Timber", "Shape Memory Alloy (SMA)", "Tensile PTFE Mesh", "Recycled Aluminum Joints"]
      },
      softSkillsHighlight: "Led international fabrication team across 3 time zones; mediated technical disputes between structural engineers and computational sculptors.",
      metrics: [
        { label: "Aperture Range", value: "15° to 85°" },
        { label: "Passive Temp Drop", value: "-4.2°C" },
        { label: "Assembly Time", value: "72 Hours" }
      ],
      drawings: [
        { label: "Kinetic Node Joint Detail", type: "Detail 1:5" },
        { label: "Kinematic Motion Sequence", type: "Diagram" }
      ]
    },
    {
      id: "post-industrial-atlas",
      title: "Socio-Spatial Atlas: The Foundry",
      subtitle: "Adaptive Reuse & Urban Community Infrastructure",
      category: "Architecture",
      subCategory: "Adaptive Reuse & Urbanism",
      year: "2024",
      location: "Manchester, UK",
      status: "Under Construction (Phase II)",
      scale: "12,200 m²",
      featured: true,
      coverImage: "foundry_atlas.svg",
      summary: "Regenerating a 19th-century boiler manufacturing warehouse into an open-access civic maker hub, community kitchen, and urban botanical wetland.",
      narrative: {
        brief: "Historic industrial structures often fall victim to generic commercial gentrification. This project demonstrates an alternative heritage stewardship grounded in local equity.",
        concept: "A 'building-within-a-building' strategy inserts lightweight modular timber pods inside the historic masonry shell, leaving the colossal central nave as unprogrammed civic commons.",
        spatialImpact: "Provides subsidized creative studios for 60+ local artisans and restores 2,400m² of contaminated urban soil using phytoremediation wetlands.",
        materials: ["Restored Victorian Cast Iron", "Glulam Structural Ribs", "Polycarbonate Diffusers", "Permeable Crushed Brick"]
      },
      softSkillsHighlight: "Spearheaded public advocacy campaign and secured community heritage funding while aligning conflicting commercial and grass-roots objectives.",
      metrics: [
        { label: "Heritage Fabric Retained", value: "88%" },
        { label: "Public Green Access", value: "2,400 m²" },
        { label: "Local Job Incubation", value: "120+ roles" }
      ],
      drawings: [
        { label: "Sequential Demolition & Retention Axonometric", type: "Axon" },
        { label: "Adaptive Reuse Cross Section", type: "Section" }
      ]
    },
    {
      id: "atmospheric-rammed-earth",
      title: "The Monolith: Rammed Earth Sanctuary",
      subtitle: "Bioclimatic Residential Retreat",
      category: "Architecture",
      subCategory: "Earth Architecture",
      year: "2023",
      location: "Alentejo, Portugal",
      status: "Built",
      scale: "320 m²",
      featured: false,
      coverImage: "rammed_earth.svg",
      summary: "An introverted domestic monolith constructed entirely from on-site excavated soil, capturing diurnal breezes and framing panoramic horizons.",
      narrative: {
        brief: "Designing a residence that functions completely off-grid in an arid climate with zero mechanical heating or cooling reliance.",
        concept: "50cm thick rammed earth walls act as heavy thermal batteries. Strategic internal courtyards induce the stack effect, pulling cool subterranean air into living spaces.",
        spatialImpact: "Demonstrates that ancient vernacular masonry techniques combined with parametric solar orientation out-perform synthetic insulation systems.",
        materials: ["Site-Excavated Rammed Earth", "Local Olive Wood Joinery", "Lime Plaster", "Corten Steel"]
      },
      softSkillsHighlight: "Trained and worked side-by-side with local master earth-masons, bridging academic BIM modeling with generational tactile craftsmanship.",
      metrics: [
        { label: "Thermal Phase Delay", value: "11.4 Hours" },
        { label: "Imported Material Mass", value: "< 12%" },
        { label: "Water Autonomy", value: "100% Rainwater" }
      ],
      drawings: [
        { label: "Thermal Inertia Courtyard Section", type: "Section" },
        { label: "Rammed Earth Layering Spec", type: "Detail" }
      ]
    }
  ],

  // 2. The Interconnection: Running, Spatial Systems & Bodily Endurance
  intersections: {
    title: "Movement, City & Body: The Kinesthetic Continuum",
    subtitle: "How long-distance endurance running informs spatial architecture, urban diagnostics, and psychological resilience.",
    manifesto: "Running through a city at 5:00 AM is the ultimate act of spatial diagnostics. At 180 steps per minute, you experience urban topography not as an abstract map, but as bodily resistance, changes in wind shear between high-rises, acoustic reverberations of empty plazas, and abrupt socio-economic boundaries. The spatial insights gathered over 42 kilometers directly inform how I design human environments.",
    pillars: [
      {
        title: "Kinesthetic Urban Mapping",
        desc: "Automobiles insulate passengers from elevation and air quality. Running strips away insulation: you register microclimatic drops near riverbanks, heat island effects of asphalt plains, and pedestrian dead zones.",
        icon: "compass"
      },
      {
        title: "Pacing & Iterative Endurance",
        desc: "Architecture is an ultra-marathon spanning years of planning, bureaucratic approvals, and on-site friction. The mental discipline required to hold pace through kilometer 35 translates directly into sustained design rigor.",
        icon: "activity"
      },
      {
        title: "Rhythm & Spatial Tempo",
        desc: "Just as a runner maintains cadence to optimize cardiovascular economy, good architectural circulation paces human experience—alternating between compression and decompression, acceleration and contemplation.",
        icon: "waveform"
      },
      {
        title: "Socio-Spatial Porosity",
        desc: "Running transverses socioeconomic zip codes in minutes. It exposes gated perimeters, infrastructure severed by highways, and the urgent need for contiguous public green corridors.",
        icon: "grid"
      }
    ],
    routes: [
      {
        id: "route-berlin",
        name: "Berlin Wall Trail: The Void & Memory",
        distance: "21.1 km",
        pace: "4:32 /km",
        elevation: "+85m",
        urbanDensity: "Mixed Historical",
        spatialNote: "Tracing the former death strip reveals how modern urban fabric slowly stitches trauma into linear public parks."
      },
      {
        id: "route-london",
        name: "Thames Barrier to Greenwich: Tidal Infrastructure",
        distance: "32.4 km",
        pace: "4:48 /km",
        elevation: "+140m",
        urbanDensity: "Post-Industrial Marine",
        spatialNote: "Experiencing flood defenses, maritime docklands, and dramatic wind corridors where the city meets the estuary."
      },
      {
        id: "route-rotterdam",
        name: "Bridge Loop: Engineering & Airflow",
        distance: "16.8 km",
        pace: "4:18 /km",
        elevation: "+95m",
        urbanDensity: "High-Rise Waterfront",
        spatialNote: "Testing bodily resistance against North Sea gusts across the Erasmus and Willems bridges."
      }
    ]
  },

  // 3. Digital Lab / Web Development & Browser Experiments
  digitalLab: {
    title: "Digital Lab & Creative Code Experiments",
    subtitle: "Exploring spatial algorithms, browser graphics, responsive mechanics, and creative computing. Hosted live with accessible source code.",
    description: "I build interactive web tools to test spatial concepts before committing them to steel, stone, or client presentations. Here is a curated selection of browser experiments, algorithmic generators, and technical prototypes with direct source code and GitHub links.",
    experiments: [
      {
        id: "parametric-shadows",
        title: "Parametric Facade & Shadow Synthesizer",
        category: "Interactive Canvas & 3D Math",
        tags: ["Canvas API", "Trigonometry", "Solar Angles", "Vanilla JS"],
        browserSupport: ["Chrome", "Firefox", "Safari", "Edge"],
        githubUrl: "https://github.com/alexthorne/parametric-shadow-sim",
        description: "A real-time solar path and louver shadow generator. Adjust solar azimuth, altitude, and facade fin angles to calculate daylight penetration and dynamic architectural shading.",
        type: "interactive-runner",
        codeSnippet: `// Solar Ray Tracing Vector on Facade Louvers
function calculateShadowLength(sunAltitudeDeg, louverDepthMm) {
  const rad = (sunAltitudeDeg * Math.PI) / 180;
  // Shadow depth cast on the glazing plane
  const shadowDepth = louverDepthMm * Math.tan(rad);
  const daylightFactor = Math.max(0, 1 - (shadowDepth / 600));
  return { shadowDepth, daylightFactor };
}`
      },
      {
        id: "voronoi-urban",
        title: "Socio-Spatial Voronoi Partitioner",
        category: "Algorithmic Urbanism",
        tags: ["SVG Geometry", "Voronoi Tessellation", "Civic Centers"],
        browserSupport: ["Chrome", "Firefox", "Safari"],
        githubUrl: "https://github.com/alexthorne/voronoi-urban-cells",
        description: "Interactive browser algorithm simulating 15-minute city walking catchments based on dynamically placed public amenities and pedestrian nodes.",
        type: "interactive-runner",
        codeSnippet: `// Delaunay Triangulation & Dual Voronoi Cell Generation
function computeCatchmentPerimeter(seeds, boundingBox) {
  const delaunay = Delaunay.from(seeds.map(s => [s.x, s.y]));
  const voronoi = delaunay.voronoi([0, 0, boundingBox.w, boundingBox.h]);
  return voronoi.cellPolygons();
}`
      },
      {
        id: "running-tempo-matrix",
        title: "Kinetic Cadence & Spatial Waveform",
        category: "Data Art & Audio-Visual",
        tags: ["Web Audio API", "Canvas 2D", "Running Metrics"],
        browserSupport: ["Chrome", "Firefox", "Safari", "Edge"],
        githubUrl: "https://github.com/alexthorne/cadence-spatial-synth",
        description: "Translating heart rate variability and running cadence into spatial acoustic oscillations and dynamic harmonic Lissajous curves.",
        type: "interactive-runner",
        codeSnippet: `// Harmonize Cadence (180 SPM) with Spatial Reverb
const spmFrequency = (180 / 60) * 110; // Base root pitch
const osc = audioCtx.createOscillator();
osc.frequency.setValueAtTime(spmFrequency, audioCtx.currentTime);`
      },
      {
        id: "swiss-grid-engine",
        title: "Micro-Modular Swiss Grid Engine",
        category: "Creative CSS Architecture",
        tags: ["CSS Grid", "Container Queries", "Typography Scale"],
        browserSupport: ["Chrome", "Firefox", "Safari", "Edge"],
        githubUrl: "https://github.com/alexthorne/swiss-grid-engine",
        description: "An experimental CSS/JS layout engine implementing Josef Müller-Brockmann's modular grid principles dynamically adapted to any screen aspect ratio.",
        type: "interactive-runner",
        codeSnippet: `// Golden Ratio Typographic Base Module
:root {
  --modular-ratio: 1.618;
  --base-unit: clamp(14px, 1.2vw, 18px);
  --grid-columns: 12;
  --baseline-grid: 8px;
}`
      }
    ]
  },

  // 4. Soft Skills Development & Human Dimension
  softSkills: {
    title: "The Human Dimension: Soft Skills & Collaborative Craft",
    subtitle: "Architecture is fundamentally an act of collective trust. Beyond technical drawings, great spaces emerge from empathy, clarity, and leadership.",
    skills: [
      {
        title: "Empathetic Stakeholder Mediation",
        context: "Urban & Civic Projects",
        desc: "Listening beyond initial resistance to uncover the genuine human anxieties of communities facing urban change. Translating emotional narratives into constructive architectural briefs.",
        metric: "8+ Participatory Citizen Charrettes led"
      },
      {
        title: "Cross-Disciplinary Translation",
        context: "Engineers, Clients & Developers",
        desc: "Acting as the connective tissue between structural engineers who speak in shear stress, algorithmic developers writing shaders, and city officials evaluating statutory policy.",
        metric: "Seamless alignment across 4 specialist disciplines"
      },
      {
        title: "Radical Focus & Endurance Mindset",
        context: "Multi-Year Project Lifecycles",
        desc: "Applying marathon pacing discipline to long-horizon projects. Maintaining uncompromising attention to detail during the grueling final 10% of construction and site inspections.",
        metric: "100% on-time milestone delivery"
      },
      {
        title: "Design Critique as Psychological Safety",
        context: "Studio Mentorship & Team Culture",
        desc: "Cultivating an environment where junior designers feel empowered to dismantle premises, offer unpolished hypotheses, and iteratively critique without fear of judgment.",
        metric: "Mentored 12+ junior architects & interns"
      }
    ]
  },

  // 5. Credentials, Career Timeline & CV
  resume: {
    experience: [
      {
        period: "2023 — Present",
        role: "Principal Spatial Designer & Technologist",
        organization: "Studio Thorne Spatial Systems",
        location: "London / Berlin",
        highlights: [
          "Directing cross-disciplinary commissions spanning sustainable civic housing, adaptive reuse, and digital spatial installations.",
          "Building internal computational design pipelines and interactive web prototypes for public consultation charrettes."
        ]
      },
      {
        period: "2020 — 2023",
        role: "Senior Project Architect",
        organization: "Vandekerckhove & Partners Urbanists",
        location: "Rotterdam",
        highlights: [
          "Led design delivery on 12,000m² post-industrial regeneration projects with multi-million euro construction budgets.",
          "Integrated embodied carbon lifecycle calculators directly into BIM workflows."
        ]
      },
      {
        period: "2018 — 2020",
        role: "Architectural Computational Designer",
        organization: "Studio Koma Interactive",
        location: "Zurich",
        highlights: [
          "Prototyped responsive kinetic facades and WebGL spatial previews for international cultural institutions."
        ]
      }
    ],
    education: [
      {
        degree: "Master of Architecture (M.Arch, Distinction)",
        institution: "Architectural Association School of Architecture (AA)",
        year: "2018"
      },
      {
        degree: "Bachelor of Arts in Spatial Design & Philosophy",
        institution: "Bartlett School of Architecture, UCL",
        year: "2015"
      }
    ],
    exhibitions: [
      { year: "2024", title: "Venice Architecture Biennale — Collateral Exhibition 'Bodies in the Grid'" },
      { year: "2023", title: "Rotterdam International Architecture Biennale — 'The Porous Commons'" },
      { year: "2022", title: "London Festival of Architecture — 'Kinetic Pavilion & Ephemeral Space'" }
    ],
    technicalStack: [
      { category: "Spatial & BIM", tools: ["Revit", "Rhino 3D", "Grasshopper Parametric", "Enscape", "QGIS Spatial"] },
      { category: "Web & Creative Code", tools: ["JavaScript (ES6+)", "HTML5 Canvas API", "Three.js / WebGL", "CSS3 / Grid", "Git / GitHub", "Vite"] },
      { category: "Athletics & Physical", tools: ["Marathon Runner (PB: 2h 54m)", "Ultra-distance trail", "Biometrics tracking"] }
    ]
  }
};
