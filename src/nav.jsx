/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  { id: "home",       label: "Home" },
  { id: "work",       label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "spotlight",  label: "Spotlight" },
  { id: "contact",    label: "Contact" },
];

const Nav = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive]     = React.useState("home");
  const [open, setOpen]         = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      // active section detection
      let cur = "home";
      for (const it of NAV_ITEMS) {
        const el = document.getElementById(it.id);
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.top <= window.innerHeight * 0.4) cur = it.id;
      }
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={"nav " + (scrolled ? "scrolled" : "")}>
        <a href="#home" className="nav-brand" aria-label="Cephas Osei-Bonsu — home">
          <span className="mark">C</span>
          <span>Cephas Osei-Bonsu</span>
          <GHUSFlags />
        </a>

        <div className="nav-links" role="navigation">
          {NAV_ITEMS.map(it => (
            <a
              key={it.id}
              href={"#" + it.id}
              className={active === it.id ? "active" : ""}
            >
              {it.label}
            </a>
          ))}
        </div>

        <a
          className="nav-cta"
          href={window.CEPHAS_DATA.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Download Cephas's resume (PDF)"
        >
          Resume <ArrowDown />
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          Menu
          <span className="bars" aria-hidden="true">
            <span></span><span></span>
          </span>
        </button>
      </nav>

      <div className={"nav-sheet " + (open ? "open" : "")} aria-hidden={!open}>
        <button className="close" onClick={() => setOpen(false)}>Close ✕</button>
        {NAV_ITEMS.map((it, i) => (
          <a key={it.id} href={"#" + it.id} onClick={() => setOpen(false)}>
            {it.label}
            <span className="idx">0{i + 1}</span>
          </a>
        ))}
        <a
          href={window.CEPHAS_DATA.links.resume}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Download Resume
          <span className="idx">PDF</span>
        </a>
      </div>
    </>
  );
};

window.Nav = Nav;
