/* ------------------------------------------------------------------ */
/* Skills marquee                                                      */
/* ------------------------------------------------------------------ */

const SkillRow = ({ items, reverse, slow }) => {
  const doubled = [...items, ...items];
  return (
    <div className={"marquee " + (reverse ? "reverse " : "") + (slow ? "slow" : "")}>
      <div className="marquee-track">
        {doubled.map((it, i) => (
          <span key={i} className="skill-pill">
            <span className="icon"><SkillIcon kind={it.icon} /></span>
            {it.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const { skillsRow1, skillsRow2 } = window.CEPHAS_DATA;
  // Row 3 = an interleaved subset to keep variety
  const row3 = [
    ...skillsRow1.filter((_,i) => i % 2 === 0),
    ...skillsRow2.filter((_,i) => i % 2 === 1),
  ];

  return (
    <section className="skills" aria-label="Technical skills">
      <div className="container">
        <div className="skills-head">
          <div className="reveal">
            <span className="section-label">Stack · The toolbelt</span>
            <h2 className="section-title">
              Languages, infrastructure, and AI tools I reach for to ship <em>reliable software</em>.
            </h2>
          </div>
          <span className="right reveal">20 / Production-tested</span>
        </div>
      </div>

      <div className="reveal">
        <SkillRow items={skillsRow1} />
      </div>
      <div className="reveal" style={{ ['--reveal-delay']: '120ms' }}>
        <SkillRow items={skillsRow2} reverse />
      </div>
      <div className="reveal" style={{ ['--reveal-delay']: '240ms' }}>
        <SkillRow items={row3} slow />
      </div>
    </section>
  );
};

window.Skills = Skills;
