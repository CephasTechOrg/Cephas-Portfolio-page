/* ------------------------------------------------------------------ */
/* Shared building blocks: every section opens with SectionHeader.     */
/* ------------------------------------------------------------------ */

const SectionHeader = ({ index, label, title, lede }) => (
  <div className="section-header reveal">
    <p className="section-label">
      <span className="section-index">{index}</span>
      <span>{label}</span>
    </p>
    <h2 className="section-title">{title}</h2>
    {lede && <p className="section-lede">{lede}</p>}
  </div>
);

const ExternalLinks = ({ items, name }) => (
  <div className="link-row">
    {items.map((link) => (
      <a
        key={link.label}
        className="link-arrow"
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${name}: ${link.label}`}
      >
        {link.label} <ArrowUR />
      </a>
    ))}
  </div>
);

const StackList = ({ items }) => (
  <ul className="stack" aria-label="Tech stack">
    {items.map((item) => <li key={item}>{item}</li>)}
  </ul>
);

Object.assign(window, { SectionHeader, ExternalLinks, StackList });
