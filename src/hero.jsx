/* ------------------------------------------------------------------ */
/* Hero + proof ledger                                                 */
/* ------------------------------------------------------------------ */

const Hero = () => {
  const { links, availability, proof } = window.CEPHAS_DATA;
  return (
    <section id="top" className="hero" aria-labelledby="hero-title">
      <div className="wrap hero-grid">
        <div className="hero-text">
          <p className="eyebrow reveal">Software engineer · Founder of Vital-Go</p>
          <h1 id="hero-title" className="hero-title reveal" style={{ "--reveal-delay": "60ms" }}>
            Cephas Osei-Bonsu
          </h1>
          <p className="hero-lede reveal" style={{ "--reveal-delay": "120ms" }}>
            I build AI and real-time systems that people use, from IoT health monitoring
            to voice-led interview practice. CS and Math at Livingstone College.
          </p>

          <div className="hero-actions reveal" style={{ "--reveal-delay": "180ms" }}>
            <a href="#work" className="btn btn-primary">View work</a>
            <a href={links.resume} className="btn btn-outline" target="_blank" rel="noopener noreferrer">
              Resume <DownloadIcon />
            </a>
            <span className="hero-socials">
              <a className="link-arrow" href={links.github} target="_blank" rel="noopener noreferrer">GitHub <ArrowUR /></a>
              <a className="link-arrow" href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn <ArrowUR /></a>
            </span>
          </div>

          <p className="status reveal" style={{ "--reveal-delay": "240ms" }}>
            <span className="status-dot" aria-hidden="true" />
            {availability}
          </p>
        </div>

        <figure className="portrait reveal" style={{ "--reveal-delay": "120ms" }}>
          <img
            src="public/images/portrait.webp"
            alt="Portrait of Cephas Osei-Bonsu"
            width="960"
            height="1197"
            fetchpriority="high"
          />
          <figcaption>Salisbury, NC · Open to relocate</figcaption>
        </figure>
      </div>

      <div className="wrap">
        <dl className="ledger reveal">
          {proof.map((item) => (
            <div key={item.label} className="ledger-item">
              <dt>{item.label}</dt>
              <dd>{item.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

window.Hero = Hero;
