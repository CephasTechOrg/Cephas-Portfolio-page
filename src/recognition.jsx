/* ------------------------------------------------------------------ */
/* Recognition — awards, scholarships, proof of work                  */
/* ------------------------------------------------------------------ */

const Recognition = () => {
  const { recognition } = window.CEPHAS_DATA;
  return (
    <section className="section" id="recognition" data-screen-label="05 Recognition">
      <div className="container">
        <div className="spotlight-head">
          <div className="reveal">
            <span className="section-label">Recognition</span>
            <h2 className="section-title">
              Awards, scholarships, and <em>proof of work</em>.
            </h2>
          </div>
          <span className="right reveal">
            2025 — 2026
          </span>
        </div>

        <div className="spotlight-grid">
          {recognition.map((s, i) => {
            const dirs = ["from-tl", "from-tr", "from-bl", "from-br"];
            return (
            <article
              key={i}
              className={"spot reveal " + dirs[i % dirs.length] + " " + s.span + (s.now ? " now" : "")}
              style={{ ['--reveal-delay']: (i*80) + 'ms' }}
            >
              <div className="spot-head">
                <span className="tag">{s.tag}</span>
                <span className="when">{s.when}</span>
              </div>
              <h3 className="spot-title">{s.title}</h3>
              <p className="spot-body">{s.body}</p>
              <div className="spot-foot">
                <span>0{i+1} / 0{recognition.length}</span>
                {s.href ? (
                  <a className="more" href={s.href} {...(s.href.startsWith("#") ? {} : { target: "_blank", rel: "noopener noreferrer" })}>
                    {s.more} <ArrowUR />
                  </a>
                ) : (
                  <span className="more" style={{ color: 'var(--text-3)' }}>
                    {s.more}
                  </span>
                )}
              </div>
            </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Recognition = Recognition;
