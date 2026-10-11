/* ------------------------------------------------------------------ */
/* Work: flagship block, project rows, and a compact "also built" list */
/* ------------------------------------------------------------------ */

const Metrics = ({ items, className = "" }) => (
  <dl className={"metrics " + className}>
    {items.map((m) => (
      <div key={m.label} className="metric">
        <dt>{m.label}</dt>
        <dd>{m.value}</dd>
      </div>
    ))}
  </dl>
);

const Flagship = () => {
  const { flagship: f } = window.CEPHAS_DATA;
  return (
    <article className="flagship reveal" aria-labelledby="flagship-title">
      <div className="flagship-head">
        <div>
          <p className="meta">Flagship · {f.role} · {f.years}</p>
          <h3 id="flagship-title" className="flagship-title">{f.title}</h3>
          <p className="flagship-summary">{f.summary}</p>
          <ExternalLinks items={f.links} name={f.title} />
        </div>
        <Metrics items={f.metrics} className="metrics-grid" />
      </div>

      <div className="pipeline-block">
        <p className="meta">How data moves</p>
        <ol className="pipeline">
          {f.pipeline.map((step, i) => (
            <li key={step.name} className="pipeline-step">
              <span className="pipeline-index">{i + 1}</span>
              <span className="pipeline-name">{step.name}</span>
              <span className="pipeline-note">{step.note}</span>
            </li>
          ))}
        </ol>
      </div>

      <StackList items={f.stack} />
    </article>
  );
};

const ProjectRow = ({ project, index }) => (
  <li className="project reveal">
    <span className="project-index">{String(index).padStart(2, "0")}</span>
    <div className="project-main">
      <h3 className="project-title">
        {project.title}
        <span className="project-kind">{project.kind}</span>
      </h3>
      <p className="project-summary">{project.summary}</p>
      <StackList items={project.stack} />
    </div>
    <div className="project-side">
      <p className="meta">{project.years}</p>
      {project.metrics.length > 0 && <Metrics items={project.metrics} className="metrics-inline" />}
      <ExternalLinks items={project.links} name={project.title} />
    </div>
  </li>
);

const Work = () => {
  const { projects, alsoBuilt } = window.CEPHAS_DATA;
  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionHeader
          index="01"
          label="Selected work"
          title="Products in production, research, and a hackathon win."
          lede="Each one shipped to real users or answered a real question. The numbers are measured, not projected."
        />

        <Flagship />

        <ol className="projects">
          {projects.map((p, i) => <ProjectRow key={p.title} project={p} index={i + 2} />)}
        </ol>

        <div className="also reveal">
          <h3 className="sub-title">Also built</h3>
          <ul className="also-list">
            {alsoBuilt.map((item) => (
              <li key={item.title}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="also-row">
                  <span className="also-title">{item.title}</span>
                  <span className="also-detail">{item.detail}</span>
                  <span className="also-stack">{item.stack}</span>
                  <ArrowUR className="also-arrow" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

window.Work = Work;
