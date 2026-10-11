/* ------------------------------------------------------------------ */
/* Data: everything the page says lives here, so updates are one edit. */
/* WHY: every number below comes from the resume or the project repo.  */
/* Keep it that way; an unverifiable claim costs more than it earns.   */
/* ------------------------------------------------------------------ */

const links = {
  email:    "cephas.bonsuosei@gmail.com",
  linkedin: "https://www.linkedin.com/in/cephas-osei-bonsu-911731326/",
  github:   "https://github.com/CephasTechOrg",
  resume:   "public/Cephas-Osei-Bonsu-Resume.pdf",
};

const availability = "Open to SWE internships, research and founder programs";

// Headline proof, read left to right in the ledger under the hero.
const proof = [
  { value: "300+", label: "Users on Orra, my AI interview platform" },
  { value: "100+", label: "Production API endpoints at Vital-Go" },
  { value: "4.0",  label: "GPA in CS and Math, Presidential Scholar" },
  { value: "50+",  label: "Members in the ColorStack chapter I founded" },
];

// The flagship gets its own block: metrics, pipeline and stack.
const flagship = {
  title:   "Vital-Go",
  role:    "Founder and software engineer",
  years:   "2025 – present",
  summary: "AI-powered remote patient monitoring. Wearable ESP32-C3 devices stream vitals to doctors and patients in real time, with abnormal-vitals alerts, AI risk scoring and clinical summaries.",
  metrics: [
    { value: "100+", label: "REST and WebSocket endpoints" },
    { value: "8",    label: "API domains" },
    { value: "25+",  label: "Production migrations" },
    { value: "4",    label: "Celery workers" },
    { value: "<2s",  label: "Device to dashboard" },
    { value: "7",    label: "Real users, zero support tickets" },
  ],
  pipeline: [
    { name: "ESP32-C3 device",    note: "Per-device JWT, secret rotation" },
    { name: "FastAPI ingestion",  note: "20 req/min per device" },
    { name: "Redis cache",        note: "Latest vitals, rolling windows" },
    { name: "Celery workers",     note: "Alerts, aggregates, AI risk scores" },
    { name: "Next.js dashboards", note: "Doctor and patient views" },
  ],
  stack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Next.js", "Supabase", "ESP32-C3", "LLM APIs"],
  links: [
    { label: "Live site", url: "https://health.vital-go.org/" },
    { label: "GitHub",    url: "https://github.com/Vital-Go-Technologies" },
  ],
};

const projects = [
  {
    title:   "Orra",
    kind:    "AI interview prep",
    years:   "2025 – present",
    summary: "Voice-led mock interviews for SWE, PM, cybersecurity and internship roles. Role-based questions, live follow-ups on what the candidate actually says, and a scored report after every session.",
    metrics: [
      { value: "300+",  label: "Users" },
      { value: "78.6%", label: "Session completion" },
      { value: "4.64",  label: "Questions per session" },
    ],
    stack: ["FastAPI", "Next.js", "PostgreSQL", "RAG", "LLMs", "ElevenLabs"],
    links: [
      { label: "Live site", url: "https://www.orrai.app" },
      { label: "GitHub",    url: "https://github.com/CephasTechOrg/INTERVIEWPREP-APP" },
    ],
  },
  {
    title:   "SikaBoafo",
    kind:    "Merchant OS for Ghana",
    years:   "2025 – present",
    summary: "Finance and inventory system for Ghanaian microbusinesses: sales, stock, debt tracking, QR and mobile-money payment links. Built offline-first for patchy connectivity.",
    metrics: [
      { value: "43", label: "Test users" },
      { value: "50", label: "Endpoints across 13 modules" },
      { value: "14", label: "Offline tables, device-keyed sync" },
    ],
    stack: ["FastAPI", "PostgreSQL", "Redis", "Flutter", "Paystack"],
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/SikaBoafo" },
    ],
  },
  {
    title:   "404 Sentinel",
    kind:    "Hackathon winner",
    years:   "2025",
    summary: "Led a 24-hour build that won the MS-CC / ESIIL Cybersecurity and Environmental Data Hackathon. Explainable 0 to 100 trust scores for PurpleAir air-quality sensors, with attack simulation and blind CSV analysis.",
    metrics: [
      { value: "1st", label: "Place" },
      { value: "8",   label: "Anomaly detection layers" },
      { value: "24h", label: "Build time" },
    ],
    stack: ["Python", "Anomaly detection", "Data analysis"],
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/404-Sentinels" },
    ],
  },
  {
    title:   "GPU scheduling simulator",
    kind:    "UR²PhD research",
    years:   "Feb – Apr 2026",
    summary: "Simulator for multi-tenant ML clusters that benchmarks FIFO against constraint-aware job packing, with live dashboards for queue depth, GPU allocation, utilization and wait time.",
    metrics: [],
    stack: ["FastAPI", "Next.js", "Scheduling algorithms", "Simulation"],
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/AI-Driven-GPU-Scheduling-Simulator" },
    ],
  },
  {
    title:   "TinyGPT",
    kind:    "Transformer from scratch",
    years:   "2026",
    summary: "A decoder-only, GPT-style transformer written from first principles: tokenizer, dataset, causal self-attention, training and evaluation loops, checkpoints and a CLI chat. Configs scale from a laptop CPU to cloud GPUs.",
    metrics: [],
    stack: ["Python", "PyTorch", "Transformers"],
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/TinyGPT" },
    ],
  },
  {
    title:   "Clinic Co-Pilot",
    kind:    "Clinical intake assistant",
    years:   "2026",
    summary: "One continuous flow for patient, nurse and doctor. Patients describe symptoms in plain language, nurses add vitals, and doctors get a structured brief with red flags and next questions. It supports judgment and never diagnoses.",
    metrics: [],
    stack: ["FastAPI", "SQLite", "LLM structured output", "Gemini translation"],
    links: [
      { label: "GitHub", url: "https://github.com/CephasTechOrg/Clinic-Copilot" },
    ],
  },
];

// Smaller builds: one line each, so the main list stays focused.
const alsoBuilt = [
  { title: "LC Connect",        detail: "Student-only campus network with matching and real-time messaging", stack: "Flutter · FastAPI · Supabase", url: "https://github.com/CephasTechOrg/LC-CONNECT" },
  { title: "LC Campus Shuttle", detail: "Live shuttle tracking from driver GPS, with ETAs and delay alerts",  stack: "Flutter · FastAPI · Redis",    url: "https://github.com/CephasTechOrg/LC-CAMPUS-SHUTTLE-SYSTEM" },
  { title: "ApplyPilot",        detail: "Job application tracker with resume tailoring and email parsing",    stack: "Next.js · FastAPI · PostgreSQL", url: "https://github.com/CephasTechOrg/APPLY-PILOT" },
  { title: "PDERAX",            detail: "AI document analyzer that summarizes uploads and exports reports",   stack: "FastAPI · Next.js · DeepSeek", url: "https://github.com/CephasTechOrg/PDERAX-AI-DOCUMENT-ANALYZER" },
];

const experience = [
  {
    years: "2025 – present",
    role:  "Founder and software engineer",
    org:   "Vital-Go",
    points: [
      "Architected the platform end to end: ESP32-C3 devices, FastAPI, PostgreSQL, Redis and Next.js dashboards.",
      "Built 100+ REST and WebSocket endpoints across 8 API domains, with 25+ production migrations.",
      "Added per-device JWT auth, secret rotation, a Redis vitals cache and 20 req/min ingestion limits.",
      "Validated the MVP with 7 real users: under 2s device to dashboard, zero support tickets.",
    ],
  },
  {
    years: "Feb – Apr 2026",
    role:  "Undergraduate researcher",
    org:   "UR²PhD · AI-driven GPU scheduling",
    points: [
      "Studied multi-tenant ML cluster scheduling to improve GPU utilization, queue latency and fairness.",
      "Built a FastAPI and Next.js simulator comparing FIFO with constraint-aware job packing.",
    ],
  },
  {
    years: "Apr 2026 – present",
    role:  "Founding president",
    org:   "ColorStack at Livingstone College",
    points: [
      "Founded a 50+ member technical community for mentorship, workshops and internship readiness.",
      "Secured $2K+ in early support for programming, outreach and member growth.",
    ],
  },
];

const recognition = [
  { year: "2026", title: "Full scholarship, HBCU Entrepreneurship Empowerment Summit", detail: "The only Livingstone College student selected, within the $16.8M PNC center serving 101+ HBCUs" },
  { year: "2025", title: "Winner, MS-CC / ESIIL Cybersecurity and Environmental Data Hackathon", detail: "Led the 404 Sentinel team through a 24-hour build" },
  { year: "Now",  title: "Presidential Scholar, Livingstone College", detail: "4.0 GPA in Computer Science and Mathematics" },
];

const skills = [
  { group: "Languages",           items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "Java"] },
  { group: "Backend and systems", items: ["FastAPI", "Node.js", "PostgreSQL", "Redis", "Celery", "WebSockets", "JWT", "Docker"] },
  { group: "Frontend and mobile", items: ["React", "Next.js", "React Native", "Flutter", "Expo", "Tailwind CSS"] },
  { group: "AI, data and IoT",    items: ["RAG", "LLM APIs", "Embeddings", "OCR", "PyTorch", "AWS", "Supabase", "ESP32-C3"] },
];

const principles = [
  { title: "Reliable by default",  body: "Per-device auth, rate limits, caches and rolling aggregates, so the boring failure modes never reach the user." },
  { title: "Honest with users",    body: "Explainable scores and clear limits. Software that supports a clinician's or candidate's judgment instead of hiding it." },
  { title: "Made for real people", body: "Offline-first flows, mobile-money settlement and low-bandwidth screens for clinicians, merchants and students." },
];

// NOTE: update `nowUpdated` whenever this list changes; a stale "now" reads worse than none.
const nowUpdated = "October 2026";
const now = [
  { label: "Building", text: "Vital-Go: real-time vitals and AI clinical summaries" },
  { label: "Growing",  text: "Orra and SikaBoafo with real users" },
  { label: "Leading",  text: "ColorStack at Livingstone College" },
];

Object.assign(window, { CEPHAS_DATA: {
  links, availability, proof, flagship, projects, alsoBuilt,
  experience, recognition, skills, principles, now, nowUpdated,
}});
