/* ------------------------------------------------------------------ */
/* Contact + footer                                                    */
/* ------------------------------------------------------------------ */

const Contact = () => {
  const { links } = window.CEPHAS_DATA;
  const channels = [
    { label: "Email",    value: links.email,             href: "mailto:" + links.email },
    { label: "LinkedIn", value: "cephas-osei-bonsu",     href: links.linkedin },
    { label: "GitHub",   value: "CephasTechOrg",         href: links.github },
    { label: "Resume",   value: "PDF, one page",         href: links.resume },
  ];
  return (
    <section id="contact" className="section contact">
      <div className="wrap contact-grid">
        <div className="reveal">
          <p className="section-label">
            <span className="section-index">05</span>
            <span>Contact</span>
          </p>
          <h2 className="contact-title">Open to the right opportunity.</h2>
          <p className="section-lede">
            Engineering internships, research, fellowships, founder programs and healthcare AI
            partnerships.
          </p>
          <a className="btn btn-primary btn-lg" href={"mailto:" + links.email}>
            Email me <ArrowRight />
          </a>
        </div>

        <ul className="channels reveal" style={{ "--reveal-delay": "80ms" }}>
          {channels.map((c) => {
            const external = !c.href.startsWith("mailto:");
            return (
              <li key={c.label}>
                <a
                  className="channel"
                  href={c.href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="channel-label">{c.label}</span>
                  <span className="channel-value">{c.value}</span>
                  <ArrowUR className="channel-arrow" />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer-inner">
      <span>© {new Date().getFullYear()} Cephas Osei-Bonsu</span>
      <span>Designed and built by Cephas</span>
    </div>
  </footer>
);

Object.assign(window, { Contact, Footer });
