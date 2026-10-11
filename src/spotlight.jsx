/* ------------------------------------------------------------------ */
/* Spotlight                                                           */
/* ------------------------------------------------------------------ */

const Spotlight = () => {
  const { spotlight } = window.CEPHAS_DATA;
  return (
    <section className="section" id="spotlight" data-screen-label="05 Spotlight">
      <div className="container">
        <div className="spotlight-head">
          <div className="reveal">
            <span className="section-label">Live signal</span>
            <h2 className="section-title">
              Spotlight — what I'm <em>currently</em> building, researching, and learning.
            </h2>
          </div>
          <span className="right reveal">
            <span className="ping"></span>
            Last update · this week
          </span>
        </div>

        <div className="spotlight-grid">
          {spotlight.map((s, i) => {
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
                <span>0{i+1} / 0{spotlight.length}</span>
                {s.href ? (
                  <a className="more" href={s.href} target="_blank" rel="noopener noreferrer">
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

window.Spotlight = Spotlight;
