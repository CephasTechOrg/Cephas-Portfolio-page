/* ------------------------------------------------------------------ */
/* Contact + Footer                                                    */
/* ------------------------------------------------------------------ */

const Contact = () => {
  const { links } = window.CEPHAS_DATA;
  return (
    <section className="contact" id="contact" data-screen-label="06 Contact">
      <div className="container contact-inner">
        <div className="reveal">
          <span className="contact-greeting">Let's build something</span>
        </div>
        <h2 className="contact-title reveal" style={{ ['--reveal-delay']: '120ms' }}>
          Open to the right <em>opportunity</em>.
        </h2>
        <p className="contact-sub reveal" style={{ ['--reveal-delay']: '240ms' }}>
          Engineering roles, founder programs, fellowships, research collaborations,
          or healthcare-AI partnerships — let's talk.
        </p>

        <div className="contact-actions reveal" style={{ ['--reveal-delay']: '360ms' }}>
          <a
            className="btn primary"
            href={"mailto:" + links.email}
            aria-label="Email Cephas Osei-Bonsu"
          >
            {links.email} <ArrowUR />
          </a>
        </div>

        <div className="contact-channels reveal" style={{ ['--reveal-delay']: '480ms' }}>
          <a className="channel reveal from-tl" href={"mailto:" + links.email} aria-label="Send an email">
            <span className="l">Email</span>
            <span className="v">{links.email} <ArrowUR /></span>
          </a>
          <a
            className="channel reveal from-tr"
            style={{ ['--reveal-delay']: '100ms' }}
            href={links.linkedin}
            target="_blank" rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <span className="l">LinkedIn</span>
            <span className="v">cephas-osei-bonsu <ArrowUR /></span>
          </a>
          <a
            className="channel reveal from-bl"
            style={{ ['--reveal-delay']: '200ms' }}
            href={links.github}
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <span className="l">GitHub</span>
            <span className="v">CephasTechOrg <ArrowUR /></span>
          </a>
          <a
            className="channel reveal from-br"
            style={{ ['--reveal-delay']: '300ms' }}
            href={links.github}
            target="_blank" rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <span className="l">GitHub</span>
            <span className="v">CephasTechOrg <ArrowUR /></span>
          </a>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  const { links } = window.CEPHAS_DATA;
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="n">Cephas Osei-Bonsu</div>
            <div className="r">Software Engineer · Founder @ Vital-Go</div>
            <div className="r" style={{marginTop: '16px'}}>
              <GHUSFlags />
            </div>
          </div>

          <div className="footer-col">
            <h5>Sitemap</h5>
            <a href="#home">Home</a>
            <a href="#work">Work</a>
            <a href="#experience">Experience</a>
            <a href="#spotlight">Spotlight</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-col">
            <h5>Connect</h5>
            <a href={"mailto:" + links.email}>Email</a>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn ↗</a>
            <a href={links.github}   target="_blank" rel="noopener noreferrer">GitHub ↗</a>
          </div>

          <div className="footer-col">
            <h5>Now</h5>
            <a href="#" style={{color:'var(--text-2)'}}>Building Vital-Go</a>
            <a href="#" style={{color:'var(--text-2)'}}>Researching GPU scheduling</a>
            <a href="#" style={{color:'var(--text-2)'}}>Leading ColorStack @ LC</a>
          </div>
        </div>

        <div className="footer-base">
          <span>© {new Date().getFullYear()} Cephas Osei-Bonsu</span>
          <span className="right">
            <span>Salisbury, NC · Open to relocate</span>
            <span>·</span>
            <span>Designed &amp; built by Cephas</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

Object.assign(window, { Contact, Footer });
