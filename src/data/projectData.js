export const PROJECT_INFO = {
  name: "SUNRISE RESIDENCY",
  location: "Ahmedabad, Gujarat",
  details: "Ahmedabad · 3 Towers · 18 Floors",
  towersCount: 3,
  floorsCount: 18,
  healthScore: 82,
  phase: "Phase 2: Superstructure In Progress",
  targetCompletion: "Nov 2027",
  daysToHandover: 142,
  workforceOnSite: 248,
  weather: {
    temp: "34°C",
    condition: "Clear & Dry",
    wind: "12 km/h NW",
    humidity: "41%"
  },
  budget: {
    allocated: "₹68.4 Cr",
    utilized: "₹41.2 Cr",
    variance: "-1.4% (Within Contingency)",
    status: "healthy"
  },
  lastUpdate: "Logged 2 hours ago (Site Update #24)"
};

export const CRITICAL_ISSUES = [
  {
    id: "01",
    code: "ISSUE-STR-409",
    title: "STEEL DELIVERY DELAY",
    location: "Tower A · Procurement",
    priority: "HIGH PRIORITY",
    priorityLevel: "critical",
    tag: "Procurement Risk",
    impact: "+4 days on column pouring cycle",
    costRisk: "₹1.8L demurrage & idle labor",
    recommendation: "Activate alternate local vendor (Gujarat Rebar Ltd) for 40MT Fe550D.",
    questionQuery: "Why is Tower A delayed?"
  },
  {
    id: "02",
    code: "ISSUE-MAT-218",
    title: "CEMENT INVENTORY",
    location: "Basement B2 · Materials",
    priority: "MEDIUM",
    priorityLevel: "warning",
    tag: "Stock Critical",
    impact: "Silo 2 capacity at 18% (2 days buffer remaining)",
    costRisk: "Batching plant shutdown if dispatch unfulfilled",
    recommendation: "Issue emergency replenishment purchase order for 60MT OPC 53 grade.",
    questionQuery: "What is the cement inventory status?"
  },
  {
    id: "03",
    code: "ISSUE-MEP-104",
    title: "ELECTRICAL WORK",
    location: "Tower B · Schedule",
    priority: "MONITORING",
    priorityLevel: "monitoring",
    tag: "Conduit Conduit Inspection",
    impact: "Floor 7 sleeve layout pending architect MEP sign-off",
    costRisk: "Negligible if approved by 17:00 IST today",
    recommendation: "Expedite RFI-204 review with MEP Lead Consultant.",
    questionQuery: "What is the status of electrical conduits on Tower B?"
  }
];

export const TOWER_STATUS = [
  {
    tower: "Tower A",
    currentFloor: "12th Floor Slab Cast",
    targetFloor: 18,
    completionRate: 68,
    workforce: 94,
    health: 76,
    status: "Delayed (+4d)",
    statusType: "critical",
    criticalPath: "Fe550D Steel Delivery"
  },
  {
    tower: "Tower B",
    currentFloor: "14th Floor Column Shuttering",
    targetFloor: 18,
    completionRate: 81,
    workforce: 82,
    health: 88,
    status: "On Schedule",
    statusType: "success",
    criticalPath: "MEP Conduit Verification"
  },
  {
    tower: "Tower C",
    currentFloor: "9th Floor De-shuttering",
    targetFloor: 18,
    completionRate: 56,
    workforce: 72,
    health: 84,
    status: "On Schedule",
    statusType: "success",
    criticalPath: "Curing Phase (Day 6)"
  }
];

export const SUGGESTED_QUESTIONS = [
  {
    id: "q-tower-a-delay",
    category: "Schedule & Procurement",
    question: "Why is Tower A delayed?",
    preview: "Analysis of 4-day critical path slippage on 12th floor column preparation."
  },
  {
    id: "q-cement-inventory",
    category: "Materials & Supply Chain",
    question: "What is the cement inventory status?",
    preview: "OPC 53 stock telemetry, silo levels, and consumption burn rate."
  },
  {
    id: "q-tower-c-pour",
    category: "Structural & Pouring",
    question: "What is the concrete pouring schedule for Tower C?",
    preview: "M35 grade RMC dispatch schedule for 10th floor slab pour."
  },
  {
    id: "q-supplier-risk",
    category: "Procurement & Vendors",
    question: "Assess supplier risk for Q3 steel rebar",
    preview: "Evaluation of Jindal Steel vs. alternate mill delivery lead times."
  },
  {
    id: "q-cost-variance",
    category: "Cost & Commercials",
    question: "What is the cost variance across Phase 2?",
    preview: "BOQ line-item audit for Civil, MEP, and Formwork packages."
  }
];

export const INTELLIGENCE_REPORTS = {
  "Why is Tower A delayed?": {
    question: "Why is Tower A delayed?",
    category: "Schedule Impact Analysis",
    dateGenerated: "20 Sept 2026 · 11:42 IST",
    reportNumber: "PI-MEMO-2026-089",
    rootCause: "Steel delivery delayed by 4 days due to logistics bottleneck at Hazira transit depot.",
    impactedActivities: [
      "Foundation reinforcement & tie beam checks",
      "Column preparation (Level 12 to 13)",
      "Slab preparation & electrical conduit placement"
    ],
    scheduleImpact: "+4 days",
    scheduleDetails: "Pushes 12th floor structural de-shuttering milestone from 24 Sept to 28 Sept.",
    estimatedCostImpact: "₹1.8L",
    costBreakdown: "Demurrage charges: ₹45,000 | Bar bender idle overtime allowance: ₹1,35,000",
    recommendedAction: "Activate alternate supplier (Gujarat Rebar Ltd) for urgent 40MT supply to resume column fabrication tomorrow morning.",
    actionSteps: [
      "Issue emergency spot PO-2026-441 with pre-approved rates",
      "Divert secondary reinforcement team to Tower B to eliminate workforce downtime",
      "Schedule dual-shift concrete pouring on Friday to compress lost turnaround"
    ],
    sources: [
      { name: "Site Update #24 (20 Sept 2026)", type: "Site Daily Log" },
      { name: "Steel Purchase Order #PO-2026-382", type: "Procurement Contract" },
      { name: "Tower A Baseline Master Schedule v3.2", type: "Primavera Baseline" },
      { name: "Quality Rebar Mill Certificate #TC-8891", type: "Metallurgy Audit" }
    ]
  },
  "What is the cement inventory status?": {
    question: "What is the cement inventory status?",
    category: "Material Inventory & Supply Chain",
    dateGenerated: "20 Sept 2026 · 10:15 IST",
    reportNumber: "PI-MEMO-2026-090",
    rootCause: "Consumption spike over the weekend due to continuous basement raft blinding coupled with supplier weekend turnaround holiday.",
    impactedActivities: [
      "Batching Plant Mixer 1 continuous operation",
      "Tower B 14th Floor Column casting",
      "Basement B2 perimeter water-retaining wall"
    ],
    scheduleImpact: "0 days (Buffer intact for 48 hours)",
    scheduleDetails: "Risk of critical delay if replenishment not received before 22 Sept, 08:00 IST.",
    estimatedCostImpact: "₹0 (Potential ₹3.4L penalty if batching stalls)",
    costBreakdown: "Current buffer prevents monetary penalty if PO dispatched today.",
    recommendedAction: "Issue emergency replenishment purchase order for 60MT OPC 53 grade from UltraTech Kalol depot.",
    actionSteps: [
      "Trigger auto-dispatch for 2 tankers (30MT each) scheduled for night transit",
      "Reserve Silo 1 exclusively for M35 mix testing upon arrival",
      "Update batching plant supervisor on revised delivery window"
    ],
    sources: [
      { name: "Silo Telemetry Log #SILO-2-0920", type: "IoT Sensor Feed" },
      { name: "Daily Material Reconciliation Log #DM-112", type: "Inventory Ledger" },
      { name: "UltraTech Bulk Carrier SLA #AGR-401", type: "Vendor Contract" }
    ]
  },
  "What is the concrete pouring schedule for Tower C?": {
    question: "What is the concrete pouring schedule for Tower C?",
    category: "Pouring Schedule & Quality",
    dateGenerated: "20 Sept 2026 · 09:30 IST",
    reportNumber: "PI-MEMO-2026-091",
    rootCause: "Curing protocol requirement (IS 456:2000) mandates 7-day wet hessian curing for 9th floor slab prior to heavy load staging.",
    impactedActivities: [
      "10th Floor Formwork staging & prop alignment",
      "RMC Transit mixer staging on Western Access Ring",
      "Concrete pump line extension to 32 meters"
    ],
    scheduleImpact: "On Schedule (0 days variance)",
    scheduleDetails: "Slump test scheduled for 22 Sept at 06:00 IST; Pouring commences 07:30 IST.",
    estimatedCostImpact: "₹4.6L (Included in allocated monthly civil budget)",
    costBreakdown: "92 m³ M35 grade RMC @ ₹5,000/m³ including boom placer charges.",
    recommendedAction: "Clear Western internal perimeter road for 6 transit mixer staging slots starting 05:30 IST on 22 Sept.",
    actionSteps: [
      "Notify Ahmedabad Traffic Police regarding morning batching vehicle transit",
      "Conduct pre-pour cube testing calibration on site laboratory",
      "Inspect safety netting and edge protection at 10th floor perimeter"
    ],
    sources: [
      { name: "Pour Plan Approval #PP-TOWERC-10", type: "Structural Consultant" },
      { name: "Concrete Mix Design Dossier #M35-REV2", type: "Quality Manual" },
      { name: "Site Equipment Readiness Report #EQ-88", type: "Plant & Machinery" }
    ]
  },
  "Assess supplier risk for Q3 steel rebar": {
    question: "Assess supplier risk for Q3 steel rebar",
    category: "Procurement Risk Assessment",
    dateGenerated: "20 Sept 2026 · 08:45 IST",
    reportNumber: "PI-MEMO-2026-092",
    rootCause: "Primary mill operating at 94% order book capacity with regional rail freight congestion impacting delivery schedules.",
    impactedActivities: [
      "Tower A Floors 13-16 rebar procurement",
      "Tower B Floors 15-18 structural frame reinforcement",
      "Clubhouse basement slab fabrication"
    ],
    scheduleImpact: "+2 to +6 days potential vulnerability",
    scheduleDetails: "Lead time has increased from 7 days to 13 days across Western region hubs.",
    estimatedCostImpact: "₹3.2L hedging variance",
    costBreakdown: "Price variance of ₹1,400/MT between secondary and tier-1 mills.",
    recommendedAction: "Adopt dual-vendor procurement strategy: 60% Jindal Steel & Power, 40% Tata Tiscon or local secondary mill.",
    actionSteps: [
      "Execute secondary vendor rate-contract framework",
      "Increase minimum yard inventory safety stock from 30MT to 55MT",
      "Mandate third-party tensile and bend test certifications for all local lots"
    ],
    sources: [
      { name: "Procurement Market Intelligence Q3", type: "Commercial Bulletin" },
      { name: "Vendor Performance Scorecard 2026", type: "Supply Chain Audit" },
      { name: "Rebar Safety Stock Protocol v1.4", type: "Standard Operating Procedure" }
    ]
  },
  "What is the cost variance across Phase 2?": {
    question: "What is the cost variance across Phase 2?",
    category: "Commercial & Cost Audit",
    dateGenerated: "20 Sept 2026 · 08:15 IST",
    reportNumber: "PI-MEMO-2026-093",
    rootCause: "Favorable concrete aggregate bulk purchase (-2.8%) offset by slight diesel generator fuel escalation (+4.1%) during power grid transfer.",
    impactedActivities: [
      "Civil Shell Construction Packages",
      "Site Power Utilities and Crane Sub-stations",
      "Formwork Aluminium Shuttering Rental"
    ],
    scheduleImpact: "No impact on schedule",
    scheduleDetails: "Commercial billing cycle on track with 15-day contractor rolling audits.",
    estimatedCostImpact: "-₹12.4L net favorable variance",
    costBreakdown: "Material savings: -₹18.6L | Plant & Fuel: +₹4.8L | Testing: +₹1.4L",
    recommendedAction: "Reallocate ₹8L of net savings into the Monsoon Structural Protection Reserve.",
    actionSteps: [
      "Submit Q2 cost reconciliation to Project Director",
      "Close pending contractor escalation claims under Clause 14.3",
      "Finalize waterproofing tender package before October"
    ],
    sources: [
      { name: "Phase 2 BOQ Reconciliation Master #BOQ-PH2-R4", type: "Billing Audit" },
      { name: "Chartered Quantity Surveyor Monthly Certificate", type: "Third-Party Audit" },
      { name: "ERP SAP Cost Center Report #CC-SUNRISE-01", type: "Financial Database" }
    ]
  }
};

export const SITE_UPDATES = [
  {
    id: 24,
    date: "20 Sept 2026",
    time: "09:30 AM",
    title: "Tower A Slab Prep & Tower B Column Concreting",
    engineer: "Er. Rajesh Varma (Site In-Charge)",
    weather: "34°C · Clear Sky · Dry",
    workforceTotal: 248,
    workforceDistribution: {
      barBenders: 72,
      carpenters: 64,
      masons: 48,
      mepTechnicians: 34,
      safetyMarshals: 12,
      craneOperators: 18
    },
    workSummary: "Tower A rebar tying for column C1-C14 halted due to 40MT shipment transit delay. Labor redirected to Tower B shuttering inspection. Tower B poured 48 m³ M35 concrete in columns 7 to 12. Tower C curing under standard hessian cover at Day 6.",
    safetyIncidents: "Zero incidents reported. Morning toolbox talk on working at heights (>40m) conducted for 84 workers.",
    equipmentStatus: [
      { name: "Tower Crane 01 (Tower A)", status: "Operational", uptime: "98%" },
      { name: "Tower Crane 02 (Tower B)", status: "Active in Pour", uptime: "100%" },
      { name: "Concrete Boom Placer", status: "Operational", uptime: "92%" },
      { name: "Batching Plant 45 m³/h", status: "Normal", uptime: "95%" }
    ],
    photos: [
      { title: "Tower B Column Pour Inspection", location: "Tower B · Level 14", notes: "Slump test: 125mm. Cube samples taken." },
      { title: "Tower A Reinforcement Staging", location: "Tower A · Level 12", notes: "Awaiting 40MT Fe550D rebar bundle." },
      { title: "Basement B2 Drainage Sump", location: "Basement B2", notes: "Waterproofing membrane tested under hydrostatic head." }
    ]
  },
  {
    id: 23,
    date: "19 Sept 2026",
    time: "06:00 PM",
    title: "Tower C 9th Floor Slab De-shuttering & MEP Conduit Laying",
    engineer: "Er. Anita Desai (Quality & Safety Lead)",
    weather: "33°C · Sunny",
    workforceTotal: 242,
    workforceDistribution: {
      barBenders: 70,
      carpenters: 68,
      masons: 44,
      mepTechnicians: 36,
      safetyMarshals: 10,
      craneOperators: 14
    },
    workSummary: "Tower C 9th floor soffit formwork struck successfully after 14-day cycle. Honeycombing inspection conducted with zero major defects. Tower B completed conduit boxing on 14th floor slab.",
    safetyIncidents: "Zero lost-time injuries. Edge guardrail reinforced on Tower C terrace staging.",
    equipmentStatus: [
      { name: "Tower Crane 01", status: "Operational", uptime: "96%" },
      { name: "Tower Crane 02", status: "Operational", uptime: "99%" },
      { name: "Batching Plant", status: "Preventive Maintenance", uptime: "88%" }
    ],
    photos: [
      { title: "Tower C Soffit Finish Inspection", location: "Tower C · Level 9", notes: "Exposed concrete finish meets IS 456 Class F2 specs." },
      { title: "MEP Junction Box Layout", location: "Tower B · Level 14", notes: "Conduit spacing verified against CAD layout Rev 4." }
    ]
  },
  {
    id: 22,
    date: "18 Sept 2026",
    time: "06:15 PM",
    title: "Basement B2 Waterproofing & Tower A Formwork Lift",
    engineer: "Er. Rajesh Varma",
    weather: "32°C · Partly Cloudy",
    workforceTotal: 239,
    workforceDistribution: {
      barBenders: 68,
      carpenters: 65,
      masons: 50,
      mepTechnicians: 32,
      safetyMarshals: 10,
      craneOperators: 14
    },
    workSummary: "Basement B2 external tanking completed with torch-on SBS membrane. Protection board installed prior to backfilling. Tower A climb formwork shifted to 13th level.",
    safetyIncidents: "Near miss: Minor loose clamp recovered from safety catchment net. Warning issued to scaffolding subcontractor.",
    equipmentStatus: [
      { name: "Tower Crane 01", status: "Operational", uptime: "97%" },
      { name: "Tower Crane 02", status: "Operational", uptime: "95%" }
    ],
    photos: [
      { title: "SBS Membrane Lap Weld Testing", location: "Basement B2 Exterior", notes: "Air lance test verified all lap joints intact." }
    ]
  }
];

export const PROJECT_TASKS = [
  {
    id: "TSK-101",
    title: "Procure 40MT Fe550D Rebar via Alternate Mill",
    tower: "Tower A",
    trade: "Procurement",
    assignee: "S. Mehta (Purchase)",
    deadline: "21 Sept 2026",
    priority: "High",
    status: "In Progress",
    blocker: "PO Authorization"
  },
  {
    id: "TSK-102",
    title: "Replenish 60MT OPC 53 Grade Bulk Cement",
    tower: "Central Batching",
    trade: "Materials",
    assignee: "K. Patel (Stores)",
    deadline: "21 Sept 2026",
    priority: "High",
    status: "Pending",
    blocker: "Vendor Tanker Allocation"
  },
  {
    id: "TSK-103",
    title: "Approve RFI-204 for Tower B Floor 7 Electrical Sleeves",
    tower: "Tower B",
    trade: "MEP Engineering",
    assignee: "Er. N. Rao (Consultant)",
    deadline: "20 Sept 2026",
    priority: "Medium",
    status: "Review Required",
    blocker: "Consultant Sign-off"
  },
  {
    id: "TSK-104",
    title: "10th Floor Slab Shuttering Alignment & Quality Signoff",
    tower: "Tower C",
    trade: "Civil / Formwork",
    assignee: "Er. Anita Desai (QA)",
    deadline: "22 Sept 2026",
    priority: "Medium",
    status: "In Progress",
    blocker: "None"
  },
  {
    id: "TSK-105",
    title: "Basement B2 Perimeter Backfilling with Granular Soil",
    tower: "Infrastructure",
    trade: "Earthworks",
    assignee: "M. Solanki (Contractor)",
    deadline: "24 Sept 2026",
    priority: "Low",
    status: "Planned",
    blocker: "Waterproofing Test Clearance"
  },
  {
    id: "TSK-106",
    title: "Firefighting Dry Riser Pressure Testing (Floors 1-10)",
    tower: "Tower A & B",
    trade: "Fire Safety",
    assignee: "Agni Safe Solutions",
    deadline: "27 Sept 2026",
    priority: "Medium",
    status: "Planned",
    blocker: "Flange installation"
  }
];

export const PROJECT_RISKS = [
  {
    id: "RSK-01",
    category: "Supply Chain",
    title: "Transit Freight Delay on TMT Reinforcement",
    probability: "High (85%)",
    impact: "Moderate (₹1.8L / +4 Days)",
    level: "High",
    owner: "Head of Procurement",
    mitigation: "Establish dual sourcing agreements with local rolling mills in Sanand & Kalol.",
    status: "Active Mitigation"
  },
  {
    id: "RSK-02",
    category: "Weather & Environment",
    title: "Unseasonal Post-Monsoon Flash Inflow in Basement Sump",
    probability: "Medium (35%)",
    impact: "Low (₹50K / +1 Day)",
    level: "Medium",
    owner: "Site Drainage In-Charge",
    mitigation: "Dual diesel dewatering pumps installed on auto-float switches with dedicated backup fuel.",
    status: "Controlled"
  },
  {
    id: "RSK-03",
    category: "Quality Compliance",
    title: "Concrete Slump Loss during High Temperature Transit",
    probability: "Medium (40%)",
    impact: "High (Batch Rejection)",
    level: "Medium",
    owner: "Lead QA Engineer",
    mitigation: "Incorporate PCE-based retarder admixtures; mandate night pouring for structural members >50m³.",
    status: "Active Protocol"
  },
  {
    id: "RSK-04",
    category: "Labor & Safety",
    title: "Scaffolding Modification by Unauthorized Gangs",
    probability: "Low (15%)",
    impact: "Critical (Safety Shutdown)",
    level: "High",
    owner: "HSE Director",
    mitigation: "Mandatory Scafftag green permit system; physical lockouts and daily 08:00 marshal audits.",
    status: "Strictly Monitored"
  }
];

export const PROJECT_DATA_SPECS = {
  structuralSpecs: [
    { label: "Building Typology", value: "High-Rise Residential (RERA Approved)" },
    { label: "Total Built-Up Area", value: "4,82,000 sq.ft." },
    { label: "Foundation System", value: "Bored Cast-in-situ RCC Piles (1200mm dia) + Raft Slab" },
    { label: "Structural Framing", value: "RCC Shear Wall + Moment Resisting Frame" },
    { label: "Concrete Grades", value: "M35 (Columns & Shear Walls), M30 (Slabs & Beams)" },
    { label: "Steel Reinforcement", value: "Fe550D TMT Corrosion Resistant Rebar" },
    { label: "Formwork Technology", value: "Aluminium MIVAN Monolithic System + Peri Props" },
    { label: "Seismic Zone", value: "Zone III (Ahmedabad Region compliant to IS 1893:2016)" }
  ],
  boqSummary: [
    { item: "Civil & Superstructure RCC", budget: "₹32.4 Cr", committed: "₹24.8 Cr", balance: "₹7.6 Cr", variance: "-0.8%" },
    { item: "Formwork & Scaffolding", budget: "₹6.8 Cr", committed: "₹4.9 Cr", balance: "₹1.9 Cr", variance: "+1.2%" },
    { item: "Reinforcement Steel (Fe550D)", budget: "₹14.2 Cr", committed: "₹10.5 Cr", balance: "₹3.7 Cr", variance: "+2.1%" },
    { item: "MEP & Electrical Infrastructure", budget: "₹8.6 Cr", committed: "₹4.2 Cr", balance: "₹4.4 Cr", variance: "-1.5%" },
    { item: "Finishes, Façade & Waterproofing", budget: "₹6.4 Cr", committed: "₹1.8 Cr", balance: "₹4.6 Cr", variance: "0.0%" }
  ],
  contractors: [
    { name: "Gujarat Infra Structures Pvt Ltd", scope: "Civil Superstructure & Shell", workers: 145, rating: "4.8/5" },
    { name: "Apex Electrical & MEP Services", scope: "Conduits, Cabling, Transformers", workers: 42, rating: "4.6/5" },
    { name: "UltraTech Concrete Solutions", scope: "Ready Mix Concrete (M30/M35)", workers: 16, rating: "4.9/5" },
    { name: "AquaShield Waterproofing Co", scope: "Basement & Podium Tanking", workers: 22, rating: "4.7/5" }
  ]
};
