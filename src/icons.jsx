/* ------------------------------------------------------------------ */
/* Inline SVG icons: only the few that speed up scanning.              */
/* ------------------------------------------------------------------ */

const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };

const ArrowUR = (p) => (
  <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" {...stroke} {...p}>
    <path d="M4 10L10 4M5 4h5v5" />
  </svg>
);

const ArrowRight = (p) => (
  <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" {...stroke} {...p}>
    <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5" />
  </svg>
);

const DownloadIcon = (p) => (
  <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" {...stroke} {...p}>
    <path d="M7 2v7M4 6.5L7 9.5l3-3M2.5 12h9" />
  </svg>
);

Object.assign(window, { ArrowUR, ArrowRight, DownloadIcon });
