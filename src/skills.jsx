/* ------------------------------------------------------------------ */
/* Skills — grouped by what they're used for, each backed by proof     */
/* ------------------------------------------------------------------ */

const SkillPill = ({ skill }) => (
  <span className="skill-pill">
    <span className="icon"><SkillIcon kind={skill.icon} /></span>
    {skill.name}
  </span>
);

const Skills = () => {
  const { languages, skillGroups, projects } = window.CEPHAS_DATA;
  const titleOf = (slug) => (projects.find(p => p.slug === slug) || {}).title || slug;
  const total = languages.length + skillGroups.reduce((n, g) => n + g.skills.length, 0);

  return (
    <section className="skills" id="skills" aria-label="Technical skills">
      <div className="container">
        <div className="skills-head">
          <div className="reveal">
            <span className="section-label">Stack · The toolbelt</span>
            <h2 className="section-title">
              The tools I use to ship, and the projects that <em>prove it</em>.
            </h2>
          </div>
          <span className="right reveal">{total} tools · grouped by what I build with them</span>
        </div>

        <div className="skills-langs reveal">
          <span className="skills-langs-label">Languages</span>
          <div className="skills-pills">
            {languages.map(s => <SkillPill key={s.name} skill={s} />)}
          </div>
        </div>

        <div className="skills-grid">
          {skillGroups.map((g, i) => (
            <article
              key={g.title}
              className={"skill-card reveal " + (i % 2 ? "from-r" : "from-l")}
              style={{ ['--reveal-delay']: (i * 80) + 'ms' }}
            >
              <div className="skill-card-head">
                <span className="n">{String(i + 1).padStart(2, "0")} · {g.title}</span>
                <span>{String(g.skills.length).padStart(2, "0")} tools</span>
              </div>
              <p className="skill-card-summary">{g.summary}</p>
              <div className="skills-pills">
                {g.skills.map(s => <SkillPill key={s.name} skill={s} />)}
              </div>
              <div className="skill-proof">
                <span className="skill-proof-label">Proven in</span>
                {g.proof.map(pr => (
                  <a key={pr.slug} className="skill-proof-item" href={"#project-" + pr.slug}>
                    <span className="t">{titleOf(pr.slug)}</span>
                    <span className="d">{pr.note}</span>
                  </a>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

window.Skills = Skills;
