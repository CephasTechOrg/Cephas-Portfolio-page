/* ------------------------------------------------------------------ */
/* Data — projects, skills, experience, recognition, links             */
/* ------------------------------------------------------------------ */
/* NOTE: each fact lives in one section only. Work = what was built,   */
/* Experience = roles, Recognition = awards. Numbers come from the     */
/* resume or the project repos; keep it that way.                      */

const links = {
  email:     "cephas.bonsuosei@gmail.com",
  linkedin:  "https://www.linkedin.com/in/cephas-osei-bonsu-911731326/",
  github:    "https://github.com/CephasTechOrg",
  resume:    "public/Cephas-Osei-Bonsu-Resume.pdf",
};

/* Skills are grouped by what they are used for, and every group points
   at the shipped projects that prove it ("proof" ids match project slugs). */
const languages = [
  { name: "Python",     icon: "python" },
  { name: "TypeScript", icon: "typescript" },
  { name: "JavaScript", icon: "code" },
  { name: "SQL",        icon: "postgres" },
  { name: "C++",        icon: "code" },
  { name: "Java",       icon: "code" },
];

const skillGroups = [
  {
    title:   "Backend & systems",
    summary: "APIs, background workers and real-time pipelines built for production load.",
    skills: [
      { name: "FastAPI",    icon: "fastapi" },
      { name: "PostgreSQL", icon: "postgres" },
      { name: "Redis",      icon: "redis" },
      { name: "Celery",     icon: "celery" },
      { name: "WebSockets", icon: "websocket" },
      { name: "JWT auth",   icon: "lock" },
      { name: "Docker",     icon: "docker" },
      { name: "Node.js",    icon: "code" },
    ],
    proof: [
      { slug: "vital-go",  note: "100+ endpoints · 4 Celery workers" },
      { slug: "sikaboafo", note: "50 endpoints · 13 modules" },
    ],
  },
  {
    title:   "AI & machine learning",
    summary: "LLM products with retrieval, scoring and structured output, plus models trained from scratch.",
    skills: [
      { name: "LLM APIs",          icon: "ai" },
      { name: "RAG",               icon: "search" },
      { name: "Embeddings",        icon: "vector" },
      { name: "NLP scoring",       icon: "data" },
      { name: "OCR",               icon: "scan" },
      { name: "PyTorch",           icon: "flame" },
      { name: "Transformers",      icon: "layers" },
    ],
    proof: [
      { slug: "orra",    note: "AI interviewer · 300+ users" },
      { slug: "tinygpt", note: "Transformer from scratch" },
    ],
  },
  {
    title:   "Frontend & mobile",
    summary: "Dashboards and mobile apps that people open every day.",
    skills: [
      { name: "Next.js",      icon: "nextjs" },
      { name: "React",        icon: "react" },
      { name: "Tailwind CSS", icon: "tailwind" },
      { name: "Flutter",      icon: "flutter" },
      { name: "React Native", icon: "mobile" },
      { name: "Expo",         icon: "mobile" },
    ],
    proof: [
      { slug: "vital-go",  note: "Doctor & patient dashboards" },
      { slug: "sikaboafo", note: "21 Flutter screens" },
    ],
  },
  {
    title:   "IoT, data & cloud",
    summary: "From hardware on the body to cloud storage, payments and anomaly detection.",
    skills: [
      { name: "ESP32-C3",           icon: "chip" },
      { name: "Supabase",           icon: "supabase" },
      { name: "AWS",                icon: "cloud" },
      { name: "Paystack",           icon: "card" },
      { name: "Mobile money",       icon: "card" },
      { name: "Anomaly detection",  icon: "iot" },
    ],
    proof: [
      { slug: "vital-go",     note: "ESP32-C3 wearables" },
      { slug: "404-sentinel", note: "8-layer anomaly detection" },
    ],
  },
];

const projects = [
  {
    slug: "vital-go",
    title: "Vital-Go",
    primaryUrl: "https://health.vital-go.org/",
    tagline: "AI-powered remote patient monitoring connecting wearables, doctors, and patients in real time.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "Redis", "Celery", "ESP32-C3", "Supabase"],
    metrics: [
      { value: "100", unit: "+",  label: "API endpoints" },
      { value: "<2",  unit: "s",  label: "Device to dashboard" },
      { value: "7",   unit: "",   label: "Real users, 0 tickets" },
    ],
    highlight: "Wearables stream vitals through a Redis cache to 4 Celery workers that run abnormal-vitals alerts, rolling aggregates, AI risk scoring and clinical summaries.",
    role: "Founder & Software Engineer",
    year: "2025 — Present",
    featured: true,
    links: [
      { label: "Website", url: "https://health.vital-go.org/",             kind: "site"   },
      { label: "GitHub",  url: "https://github.com/Vital-Go-Technologies", kind: "github" },
    ],
  },
  {
    slug: "orra",
    title: "Orra · Interview Prep AI",
    primaryUrl: "https://www.orrai.app",
    tagline: "Voice-led AI mock interviews for SWE, PM, cybersecurity, and internship roles.",
    stack: ["FastAPI", "Next.js", "PostgreSQL", "RAG", "LLMs", "ElevenLabs"],
    metrics: [
      { value: "300",  unit: "+", label: "Users" },
      { value: "78.6", unit: "%", label: "Session completion" },
      { value: "4.64", unit: "",  label: "Questions / session" },
    ],
    highlight: "Role-based question tracks, an interviewer that follows up on what the candidate actually says, and a scored report after every session.",
    year: "2025 — Present",
    links: [
      { label: "Website", url: "https://www.orrai.app",                               kind: "site"   },
      { label: "GitHub",  url: "https://github.com/CephasTechOrg/INTERVIEWPREP-APP", kind: "github" },
    ],
  },
  {
    slug: "sikaboafo",
    title: "SikaBoafo · Merchant OS",
    tagline: "Finance and inventory system for Ghanaian microbusinesses: sales, stock, debts, and mobile-money payments.",
    stack: ["FastAPI", "Flutter", "PostgreSQL", "Redis", "Paystack"],
    metrics: [
      { value: "43", unit: "", label: "Test users" },
      { value: "50", unit: "", label: "API endpoints" },
      { value: "21", unit: "", label: "App screens" },
    ],
    highlight: "Offline-first SQLite layer (14 tables, 16 migrations) with device-keyed sync, plus QR, mobile-money and payment-link flows for patchy connectivity.",
    year: "2025 — Present",
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/SikaBoafo", kind: "github" },
    ],
  },
  {
    slug: "404-sentinel",
    title: "404 Sentinel",
    tagline: "Cybersecurity platform producing explainable 0–100 trust scores for PurpleAir air-quality sensors.",
    stack: ["Python", "Anomaly Detection", "Data Analysis"],
    metrics: [
      { value: "1",  unit: "st", label: "Place · hackathon" },
      { value: "8",  unit: "",   label: "Detection layers" },
      { value: "24", unit: "h",  label: "Build time" },
    ],
    highlight: "Correlation, z-score, drift, temporal, clustering and pattern checks across 6 Sarajevo sensors, with attack simulation and blind CSV analysis.",
    role: "Team lead · MS-CC / ESIIL Hackathon",
    year: "2025",
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/404-Sentinels", kind: "github" },
    ],
  },
  {
    slug: "gpu-scheduling",
    title: "AI GPU Scheduling Simulator",
    tagline: "Research simulator for AI-driven GPU scheduling in multi-tenant ML clusters.",
    stack: ["FastAPI", "Next.js", "Scheduling Algorithms", "Simulation"],
    highlight: "Benchmarks FIFO against constraint-aware job packing across workload patterns, with live dashboards for queue depth, GPU allocation, utilization and wait time.",
    year: "Feb — Apr 2026 · UR²PhD Research",
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/AI-Driven-GPU-Scheduling-Simulator", kind: "github" },
    ],
  },
  {
    slug: "tinygpt",
    title: "TinyGPT",
    tagline: "A GPT-style, decoder-only transformer built from scratch to learn the full training pipeline.",
    stack: ["Python", "PyTorch", "Transformers"],
    highlight: "Own tokenizer, dataset, causal self-attention, training and evaluation loops, checkpoints and CLI chat. Configs scale from a laptop CPU to cloud GPUs.",
    year: "2026",
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/TinyGPT", kind: "github" },
    ],
  },
  {
    slug: "clinic-copilot",
    title: "Clinic Co-Pilot",
    tagline: "AI clinical intake and decision support connecting patient, nurse, and doctor in one flow.",
    stack: ["FastAPI", "SQLite", "LLM Structured Output", "Gemini"],
    highlight: "Doctors receive a structured brief with red flags and next questions. It supports clinical judgment and never diagnoses; clinical text translates for multilingual care.",
    year: "2026",
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/Clinic-Copilot", kind: "github" },
    ],
  },
  {
    slug: "lc-connect",
    title: "LC Connect",
    tagline: "Student-only campus network for Livingstone College: friends, study partners, and language exchange.",
    stack: ["Flutter", "FastAPI", "PostgreSQL", "Supabase Realtime", "JWT"],
    highlight: "Profile cards, matching, mutual connections, real-time messaging, and an activity board. Safe campus connections, not a dating app.",
    year: "2026",
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/LC-CONNECT", kind: "github" },
    ],
  },
];

// Smaller builds, listed in one line under the main projects.
const moreProjects = [
  { label: "LC Campus Shuttle", url: "https://github.com/CephasTechOrg/LC-CAMPUS-SHUTTLE-SYSTEM" },
  { label: "ApplyPilot",        url: "https://github.com/CephasTechOrg/APPLY-PILOT" },
  { label: "PDERAX",            url: "https://github.com/CephasTechOrg/PDERAX-AI-DOCUMENT-ANALYZER" },
];

const experience = [
  {
    date: "2025 — Present",
    pill: "Now",
    role: "Founder & Software Engineer",
    org:  "Vital-Go",
    body: "Leading product and engineering for an IoT remote patient monitoring platform.",
    bullets: [
      "Architected the platform end to end: ESP32-C3 devices, FastAPI/Postgres/Redis services, and Next.js dashboards.",
      "8 API domains and 25+ production migrations.",
      "Per-device JWT auth, secret rotation, and 20 req/min ingestion limits per device.",
    ],
  },
  {
    date: "Feb — Apr 2026",
    role: "Undergraduate Researcher · UR²PhD",
    org:  "AI-Driven GPU Scheduling Optimization",
    body: "Researched multi-tenant ML cluster scheduling to improve GPU utilization, queue latency, and fairness.",
    bullets: [],
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
];

const recognition = [
  {
    tag:   "Hackathon winner",
    when:  "2025",
    title: "1st place · MS-CC / ESIIL Cybersecurity & Environmental Data Hackathon",
    body:  "Led the 404 Sentinel team through a 24-hour build.",
    more:  "Project",
    href:  "#project-404-sentinel",
    span:  "s-8",
    now:   true,
  },
  {
    tag:   "Scholarship",
    when:  "Jun 2026",
    title: "Full scholarship · HBCU Entrepreneurship Empowerment Summit",
    body:  "The only Livingstone College student selected, within the $16.8M PNC center serving 101+ HBCUs.",
    span:  "s-4",
  },
  {
    tag:   "Academic",
    when:  "Ongoing",
    title: "Presidential Scholar · Livingstone College",
    body:  "Computer Science & Mathematics. Coursework in data structures, OOP, AI, ML, and calculus.",
    span:  "s-6",
  },
  {
    tag:   "Open source",
    when:  "CephasTechOrg",
    title: "Built in public on GitHub",
    body:  "35+ public repositories, from production platforms to research and learning builds.",
    more:  "GitHub",
    href:  "https://github.com/CephasTechOrg",
    span:  "s-6",
  },
];

Object.assign(window, { CEPHAS_DATA: {
  links, languages, skillGroups, projects, moreProjects, experience, recognition,
}});
