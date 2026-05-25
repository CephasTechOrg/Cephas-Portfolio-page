/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

const Experience = () => {
  const { experience } = window.CEPHAS_DATA;
  return (
    <section className="section experience" id="experience" data-screen-label="04 Experience">
      <div className="container">
        <div className="reveal">
          <span className="section-label">Trajectory</span>
          <h2 className="section-title">
            A founder, researcher, and community builder — <em>compounding</em>.
          </h2>
        </div>

        <div className="exp-list">
          {experience.map((e, i) => {
            const dirs = ["from-l", "from-r"];
            return (
            <div key={i} className={"exp-item reveal " + dirs[i % 2]} style={{ ['--reveal-delay']: (i*70) + 'ms' }}>
              <div className="exp-date">
                <span>{e.date}</span>
                {e.pill && <span className="pill">{e.pill}</span>}
              </div>
              <div className="exp-body">
                <h3>{e.role}</h3>
                <div className="org">{e.org}</div>
                <p>{e.body}</p>
                {e.bullets.length > 0 && (
                  <ul>
                    {e.bullets.map((b,bi) => <li key={bi}>{b}</li>)}
                  </ul>
                )}
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

window.Experience = Experience;
