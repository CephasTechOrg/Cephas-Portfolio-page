/* ------------------------------------------------------------------ */
/* Data — projects, skills, experience, spotlight, links              */
/* ------------------------------------------------------------------ */

const links = {
  email:     "cephas.bonsuosei@gmail.com",
  linkedin:  "https://www.linkedin.com/in/cephas-osei-bonsu-911731326/",
  github:    "https://github.com/CephasTechOrg",
  resume:    "public/resume/Cephas_Osei_Bonsu_Resume.pdf",
};

const skillsRow1 = [
  { name: "Python",       icon: "python" },
  { name: "FastAPI",      icon: "fastapi" },
  { name: "Next.js",      icon: "nextjs" },
  { name: "React",        icon: "react" },
  { name: "TypeScript",   icon: "typescript" },
  { name: "Tailwind CSS", icon: "tailwind" },
  { name: "PostgreSQL",   icon: "postgres" },
  { name: "Redis",        icon: "redis" },
  { name: "Celery",       icon: "celery" },
  { name: "Docker",       icon: "docker" },
];

const skillsRow2 = [
  { name: "Supabase",      icon: "supabase" },
  { name: "WebSockets",    icon: "websocket" },
  { name: "ESP32",         icon: "chip" },
  { name: "IoT",           icon: "iot" },
  { name: "GitHub",        icon: "github" },
  { name: "Flutter",       icon: "flutter" },
  { name: "AI APIs",       icon: "ai" },
  { name: "Data Science",  icon: "data" },
  { name: "System Design", icon: "system" },
  { name: "Healthcare AI", icon: "heart" },
];

const projects = [
  {
    id: 1,
    title: "Vital-Go",
    primaryUrl: "https://health.vital-go.org/",
    tagline: "AI-powered remote patient monitoring connecting wearables, doctors, and patients in real time.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "ESP32-C3", "Supabase", "AI APIs"],
    highlight: "100+ REST/WebSocket endpoints, 4 Celery workers, <2s device-to-dashboard updates. Real-time vitals, abnormal-health alerts, doctor & patient dashboards, AI clinical insights, and medical report generation.",
    role: "Founder & Software Engineer",
    year: "2025 — Present",
    featured: true,
    links: [
      { label: "Website",    url: "https://health.vital-go.org/",            kind: "site"   },
      { label: "GitHub",     url: "https://github.com/Vital-Go-Technologies", kind: "github" },
      { label: "Case Study", soon: true,                                      kind: "case"   },
    ],
  },
  {
    id: 2,
    title: "Interview Prep AI",
    primaryUrl: "https://interviq-frontend.onrender.com",
    tagline: "AI-powered interview preparation for SWE, PM, cybersecurity, internships, and tech opportunities.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "AI APIs"],
    highlight: "Built for hundreds of users with realistic interview flows, role-aware follow-ups, scoring, and feedback.",
    year: "2025",
    links: [
      { label: "Website", url: "https://interviq-frontend.onrender.com",                    kind: "site"   },
      { label: "GitHub",  url: "https://github.com/CephasTechOrg/INTERVIEWPREP-APP",        kind: "github" },
    ],
  },
  {
    id: 3,
    title: "SikaBoafo — Ghana Merchant OS",
    tagline: "Ghana-focused business platform for sales, inventory, customers, mobile-money links, WhatsApp receipts, debt tracking, and profit analytics.",
    stack: ["FastAPI", "Flutter", "PostgreSQL", "Paystack", "Mobile Money"],
    highlight: "Designed for Ghanaian merchants who need simple tools, direct payment settlement, and practical offline-friendly workflows.",
    year: "2025 — Present",
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/SikaBoafo", kind: "github" },
      { label: "Demo",   soon: true,                                         kind: "demo"   },
    ],
  },
  {
    id: 4,
    title: "LC Connect",
    tagline: "Student-only campus connection platform for Livingstone College — find friends, study partners, language exchanges, and campus activities.",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Supabase Realtime", "Supabase Storage", "JWT"],
    highlight: "Profile cards, matching, mutual connections, real-time messaging, and an activity board — safe campus connections, not a dating app.",
    year: "2026",
    links: [
      { label: "GitHub",     soon: true, kind: "github" },
      { label: "Case Study", soon: true, kind: "case"   },
    ],
  },
  {
    id: 5,
    title: "AI GPU Scheduling Simulator",
    tagline: "Research simulator for AI-driven dynamic GPU and resource scheduling in multi-tenant ML clusters.",
    stack: ["FastAPI", "Next.js", "Scheduling Algorithms", "Simulation Systems"],
    highlight: "Benchmarks FIFO against constraint-aware job packing across workload patterns and queue distributions, with live dashboards for queue depth, utilization, and wait time.",
    year: "Feb — Apr 2026 · UR²PhD Research",
    links: [
      { label: "GitHub",     url: "https://github.com/CephasTechOrg/AI-Driven-GPU-Scheduling-Simulator", kind: "github" },
      { label: "Case Study", soon: true,                                                                 kind: "case"   },
    ],
  },
  {
    id: 6,
    title: "LC Campus Shuttle Tracking",
    tagline: "Real-time shuttle tracking for off-campus students, powered by driver phone GPS and predefined routes.",
    stack: ["FastAPI", "Flutter", "PostgreSQL", "Redis", "Live GPS"],
    highlight: "Next-stop override, live ETA, and delay/cancellation push updates — built around the way students actually wait for the shuttle.",
    year: "2026",
    links: [
      { label: "GitHub",     url: "https://github.com/CephasTechOrg/LC-CAMPUS-SHUTTLE-SYSTEM", kind: "github" },
      { label: "Case Study", soon: true,                                                       kind: "case"   },
    ],
  },
];

const experience = [
  {
    date: "2025 — Present",
    pill: "Now",
    role: "Founder & Software Engineer",
    org:  "Vital-Go",
    body: "Architected an IoT health platform connecting ESP32-C3 devices, FastAPI/Postgres/Redis services, and Next.js dashboards.",
    bullets: [
      "100+ REST/WebSocket endpoints across 8 API domains, 25+ production migrations.",
      "Per-device JWT auth, secret rotation, Redis vitals cache, 20 req/min ingestion limits.",
      "4 Celery workers for alerts, rolling aggregates, AI risk scoring, and clinical summaries.",
      "MVP validated with 7 real users · <2s device-to-dashboard updates · zero support tickets.",
    ],
  },
  {
    date: "Feb — Apr 2026",
    role: "Undergraduate Researcher · UR²PhD",
    org:  "AI-Driven GPU Scheduling Optimization",
    body: "Researching multi-tenant ML cluster scheduling to improve GPU utilization, queue latency, and fairness.",
    bullets: [
      "Built FastAPI/Next.js simulator comparing FIFO against constraint-aware job packing.",
      "Live dashboards for queue depth, GPU allocation, utilization, wait time, and per-GPU placement.",
    ],
  },
  {
    date: "2025",
    role: "Software Engineer · 404 Sentinel",
    org:  "MS-CC / ESIIL Cybersecurity & Environmental Data Hackathon",
    body: "Led a 24-hour build of a cybersecurity platform that produced explainable 0–100 sensor trust scores for PurpleAir air-quality networks.",
    bullets: [
      "8-layer anomaly detection across correlation, z-score, drift, temporal, clustering, and pattern checks.",
      "Open-sourced at github.com/CephasTechOrg/404-Sentinels.",
    ],
  },
  {
    date: "Apr 2026 — Present",
    role: "Founding President",
    org:  "ColorStack at Livingstone College",
    body: "Founded a 50+ member technical community supporting mentorship, workshops, and internship readiness.",
    bullets: [
      "Secured $2K+ in early support for programming, outreach, and member growth.",
    ],
  },
  {
    date: "Jun 2026",
    role: "Full-Scholarship Scholar",
    org:  "HBCU Entrepreneurship Empowerment Summit",
    body: "Selected as the only Livingstone College student awarded a full scholarship to the national summit, representing campus within the $16.8M PNC entrepreneurship center serving 101+ HBCUs.",
    bullets: [],
  },
];

const spotlight = [
  {
    tag: "Currently building",
    when: "This week",
    title: "Vital-Go — real-time vitals + AI clinical summaries",
    body:  "Doctor dashboard for abnormal-vitals alerts and post-visit summaries from rolling 24h aggregates.",
    more:  "health.vital-go.org",
    href:  "https://health.vital-go.org/",
    span:  "s-8",
    now:   true,
  },
  {
    tag: "Research",
    when: "In progress",
    title: "AI GPU scheduling",
    body:  "Constraint-aware job packing vs. FIFO across workload mixes.",
    more:  "GitHub",
    href:  "https://github.com/CephasTechOrg/AI-Driven-GPU-Scheduling-Simulator",
    span:  "s-4",
  },
  {
    tag: "Community",
    when: "Ongoing",
    title: "Founding ColorStack at Livingstone College",
    body:  "50+ student technical community. $2K+ raised for mentorship and workshops.",
    more:  "Join",
    span:  "s-6",
  },
  {
    tag: "Recent win",
    when: "2025",
    title: "404 Sentinel — hackathon winner",
    body:  "8-layer anomaly detection for PurpleAir air-quality sensor trust scoring.",
    more:  "GitHub",
    href:  "https://github.com/CephasTechOrg/404-Sentinels",
    span:  "s-6",
  },
];

Object.assign(window, { CEPHAS_DATA: {
  links, skillsRow1, skillsRow2, projects, experience, spotlight,
}});
