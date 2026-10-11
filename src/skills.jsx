/* ------------------------------------------------------------------ */
/* Skills: grouped rows, not a marquee, so a reader can actually scan. */
/* ------------------------------------------------------------------ */

const Skills = () => {
  const { skills } = window.CEPHAS_DATA;
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <SectionHeader
          index="03"
          label="Skills"
          title="The tools behind the work above."
        />
        <dl className="rows">
          {skills.map((s) => (
            <div key={s.group} className="row reveal">
              <dt className="row-aside row-title">{s.group}</dt>
              <dd className="row-main">
                <ul className="skill-list">
                  {s.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

window.Skills = Skills;
