/* ------------------------------------------------------------------ */
/* About: approach, principles, and what I'm doing now                 */
/* ------------------------------------------------------------------ */

const About = () => {
  const { principles, now, nowUpdated } = window.CEPHAS_DATA;
  return (
    <section id="about" className="section section-alt">
      <div className="wrap">
        <div className="about-grid">
          <p className="section-label reveal">
            <span className="section-index">04</span>
            <span>About</span>
          </p>
          <div className="reveal">
            <p className="about-statement">
              I build practical technology that moves from prototype to real use.{" "}
              <span className="text-muted">
                Ghana-born and studying in North Carolina, I work where healthcare, AI, backend
                infrastructure and IoT meet: systems that stay calm under failure and honest about
                what they know.
              </span>
            </p>
          </div>
        </div>

        <ol className="principles reveal">
          {principles.map((p, i) => (
            <li key={p.title} className="principle">
              <span className="principle-index">{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </li>
          ))}
        </ol>

        <div className="now reveal">
          <div className="now-head">
            <h3 className="sub-title">Now</h3>
            <p className="meta">Updated {nowUpdated}</p>
          </div>
          <ul className="rows rows-tight">
            {now.map((item) => (
              <li key={item.label} className="row">
                <p className="row-aside meta">{item.label}</p>
                <p className="row-main row-title">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

window.About = About;
