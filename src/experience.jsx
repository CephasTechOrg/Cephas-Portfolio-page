/* ------------------------------------------------------------------ */
/* Experience + recognition                                            */
/* ------------------------------------------------------------------ */

const Experience = () => {
  const { experience, recognition } = window.CEPHAS_DATA;
  return (
    <section id="experience" className="section section-alt">
      <div className="wrap">
        <SectionHeader
          index="02"
          label="Experience"
          title="Founder, researcher and community builder."
        />

        <ol className="rows">
          {experience.map((e) => (
            <li key={e.org} className="row reveal">
              <p className="row-aside meta">{e.years}</p>
              <div className="row-main">
                <h3 className="row-title">{e.role}</h3>
                <p className="row-sub">{e.org}</p>
                <ul className="points">
                  {e.points.map((point) => <li key={point}>{point}</li>)}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <div className="recognition reveal">
          <h3 className="sub-title">Recognition</h3>
          <ul className="rows rows-tight">
            {recognition.map((r) => (
              <li key={r.title} className="row">
                <p className="row-aside meta">{r.year}</p>
                <div className="row-main">
                  <p className="row-title">{r.title}</p>
                  <p className="row-sub">{r.detail}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

window.Experience = Experience;
