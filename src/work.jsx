/* ------------------------------------------------------------------ */
/* Work                                                                */
/* ------------------------------------------------------------------ */

const WorkLinkIcon = ({ kind }) => {
  const s = { fill: "none", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "round", strokeLinejoin: "round" };
  if (kind === "github") return (
    <svg viewBox="0 0 14 14" {...s}>
      <path d="M7 1a6 6 0 0 0-1.9 11.7c.3 0 .4-.1.4-.3v-1c-1.7.4-2-.8-2-.8-.3-.7-.7-.9-.7-.9-.5-.4 0-.4 0-.4.6 0 .9.6.9.6.5.9 1.4.6 1.8.5 0-.4.2-.7.4-.8-1.4-.2-2.8-.7-2.8-3a2.4 2.4 0 0 1 .6-1.7c-.1-.2-.3-.8.1-1.6 0 0 .5-.2 1.7.6a5.8 5.8 0 0 1 3 0c1.2-.8 1.7-.6 1.7-.6.4.8.2 1.4.1 1.6.4.4.6 1 .6 1.7 0 2.3-1.4 2.8-2.8 3 .2.2.4.6.4 1.1V12.4c0 .2.1.3.4.3A6 6 0 0 0 7 1z"/>
    </svg>
  );
  if (kind === "demo" || kind === "site") return (
    <svg viewBox="0 0 14 14" {...s}>
      <circle cx="7" cy="7" r="5"/><path d="M2 7h10M7 2c1.5 1.5 2.2 3.3 2.2 5S8.5 10.5 7 12c-1.5-1.5-2.2-3.3-2.2-5S5.5 3.5 7 2z"/>
    </svg>
  );
  if (kind === "case") return (
    <svg viewBox="0 0 14 14" {...s}>
      <rect x="2.5" y="3" width="9" height="8" rx="1"/><path d="M4 5.5h6M4 7.5h6M4 9.5h4"/>
    </svg>
  );
  return <ArrowUR />;
};

const Work = () => {
  const { projects } = window.CEPHAS_DATA;
  return (
    <section className="section" id="work" data-screen-label="03 Work">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Selected work · 2024 — 2026</span>
          <h2 className="section-title">
            Six projects sitting at the intersection of <em>AI, health, and real-time systems</em>.
          </h2>
        </div>

        <div className="work-list">
          {projects.map((p, i) => {
            const dirs = ["from-l", "from-r"];
            const dirClass = dirs[i % 2];
            return (
            <article
              key={p.id}
              className={"work-row reveal " + dirClass + " " + (p.featured ? "featured" : "")}
              style={{ ['--reveal-delay']: (i * 60) + 'ms' }}
            >
              <div className="num">{String(p.id).padStart(2, "0")}</div>

              <div>
                {p.primaryUrl ? (
                  <a
                    className="work-title"
                    href={p.primaryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${p.title} website`}
                  >
                    {p.title}
                    <span className="arrow"><ArrowUR /></span>
                  </a>
                ) : (
                  <span className="work-title is-static">{p.title}</span>
                )}
                {p.role && <div className="work-role">{p.role}</div>}
                <p className="work-desc">{p.tagline}</p>
                <div className="work-links">
                  {p.links.map((l, idx) => l.soon ? (
                    <span key={idx} className="work-link disabled" aria-disabled="true">
                      {l.label} <span style={{opacity:.5}}>· coming soon</span>
                    </span>
                  ) : (
                    <a
                      key={idx}
                      className="work-link"
                      href={l.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.title} — ${l.label}`}
                    >
                      {l.label} <WorkLinkIcon kind={l.kind} />
                    </a>
                  ))}
                </div>
              </div>

              <div className="work-meta">
                <div className="stack-row">
                  {p.stack.map((t,idx) => <span key={idx} className="chip">{t}</span>)}
                </div>
                <p className="work-highlight">
                  <strong>{p.year}</strong>
                  <br />
                  {p.highlight}
                </p>
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Work = Work;
