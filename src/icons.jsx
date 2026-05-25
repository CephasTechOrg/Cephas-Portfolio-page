/* ------------------------------------------------------------------ */
/* Inline SVG icons                                                    */
/* ------------------------------------------------------------------ */

// Simple geometric/abstract icons in mono stroke style — calm, technical.
const SkillIcon = ({ kind }) => {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (kind) {
    case "python": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M9 4h6a3 3 0 0 1 3 3v4H9V9H6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h3v-2h6a3 3 0 0 0 3-3v-5"/><circle cx="9" cy="7" r=".7" fill="currentColor" stroke="none"/><circle cx="15" cy="17" r=".7" fill="currentColor" stroke="none"/></svg>
    );
    case "fastapi": return (
      <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M13 5l-4 8h4l-2 6 5-9h-4z" fill="currentColor" stroke="none"/></svg>
    );
    case "nextjs": return (
      <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M8 8v8M8 8l8 10"/></svg>
    );
    case "react": return (
      <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none"/><ellipse cx="12" cy="12" rx="9" ry="3.5"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(120 12 12)"/></svg>
    );
    case "typescript": return (
      <svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M10 11H7m1.5 0v7m4-1.5c.5 1 1.6 1.6 2.7 1.6 1.4 0 2.3-.7 2.3-1.7 0-2.2-4.5-1.5-4.5-3.7 0-1 1-1.7 2.3-1.7 1 0 2 .4 2.5 1.2"/></svg>
    );
    case "tailwind": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M3 12c1.5-3 3.5-4.5 6-4.5 3.7 0 4.5 3 6.7 3 1.5 0 2.5-.7 3.3-2.2-1.5 3-3.5 4.5-6 4.5-3.7 0-4.5-3-6.7-3-1.5 0-2.5.7-3.3 1.7zM3 18c1.5-3 3.5-4.5 6-4.5 3.7 0 4.5 3 6.7 3 1.5 0 2.5-.7 3.3-2.2"/></svg>
    );
    case "postgres": return (
      <svg viewBox="0 0 24 24" {...s}><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>
    );
    case "redis": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M3 7l9-3 9 3-9 3z"/><path d="M3 12l9 3 9-3"/><path d="M3 17l9 3 9-3"/></svg>
    );
    case "celery": return (
      <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1"/></svg>
    );
    case "docker": return (
      <svg viewBox="0 0 24 24" {...s}><rect x="3" y="11" width="3" height="3"/><rect x="7" y="11" width="3" height="3"/><rect x="11" y="11" width="3" height="3"/><rect x="7" y="7" width="3" height="3"/><rect x="11" y="7" width="3" height="3"/><rect x="11" y="3" width="3" height="3"/><path d="M2 14c0 4 4 6 9 6s11-2 11-7c-1 .5-2 .5-3 0"/></svg>
    );
    case "supabase": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M13 3v9h7l-9 9v-9H4l9-9z"/></svg>
    );
    case "websocket": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M3 7l5 5-5 5M21 7l-5 5 5 5M9 17l3-10M14 17l3-10"/></svg>
    );
    case "chip": return (
      <svg viewBox="0 0 24 24" {...s}><rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v4M12 3v4M15 3v4M9 17v4M12 17v4M15 17v4M3 9h4M3 12h4M3 15h4M17 9h4M17 12h4M17 15h4"/></svg>
    );
    case "iot": return (
      <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="2"/><path d="M8 8a5 5 0 0 1 8 0M5 5a9 9 0 0 1 14 0M8 16a5 5 0 0 0 8 0M5 19a9 9 0 0 0 14 0"/></svg>
    );
    case "github": return (
      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.99 1.03-2.69-.1-.26-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.66.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2z"/></svg>
    );
    case "flutter": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M14 3L4 13l3 3 13-13zM10 17l4 4h6l-7-7zM10 17l4-4 4 4-4 4z"/></svg>
    );
    case "ai": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M4 14V8a2 2 0 0 1 2-2h2"/><path d="M20 10v6a2 2 0 0 1-2 2h-2"/><circle cx="12" cy="12" r="3"/><path d="M12 5v2M12 17v2M5 12h2M17 12h2"/></svg>
    );
    case "data": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M4 20V10M9 20V4M14 20v-8M19 20v-4"/></svg>
    );
    case "system": return (
      <svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><path d="M10 6.5h4M10 17.5h4M6.5 10v4M17.5 10v4"/></svg>
    );
    case "heart": return (
      <svg viewBox="0 0 24 24" {...s}><path d="M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.5-7 10-7 10z"/><path d="M7 12h3l1-2 1 4 1-2h4"/></svg>
    );
    default: return null;
  }
};

const ArrowUR = (p) => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
    <path d="M4 10L10 4M5 4h5v5"/>
  </svg>
);

const ArrowDown = (p) => (
  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...p}>
    <path d="M7 3v8M3 8l4 4 4-4"/>
  </svg>
);

const FlagGH = (p) => (
  <svg viewBox="0 0 18 12" width="18" height="12" {...p}>
    <rect width="18" height="4" y="0" fill="#ce1126"/>
    <rect width="18" height="4" y="4" fill="#fcd116"/>
    <rect width="18" height="4" y="8" fill="#006b3f"/>
    <path d="M9 6.4l-1.2.8.5-1.4-1.2-.9h1.5L9 3.5l.4 1.4h1.5l-1.2.9.5 1.4z" fill="#000"/>
  </svg>
);

const FlagUS = (p) => (
  <svg viewBox="0 0 18 12" width="18" height="12" {...p}>
    <rect width="18" height="12" fill="#bf0a30"/>
    {[1,3,5,7,9].map(y => <rect key={y} width="18" height="0.92" y={y} fill="#fff"/>)}
    <rect width="8" height="6" fill="#002868"/>
  </svg>
);

const GHUSFlags = () => (
  <span className="nav-flags" title="Ghana-born · U.S.-based">
    <FlagGH />
    <FlagUS />
    <span>GH&nbsp;→&nbsp;US</span>
  </span>
);

Object.assign(window, { SkillIcon, ArrowUR, ArrowDown, FlagGH, FlagUS, GHUSFlags });
