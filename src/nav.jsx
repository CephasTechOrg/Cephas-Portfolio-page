/* ------------------------------------------------------------------ */
/* Nav                                                                 */
/* ------------------------------------------------------------------ */

const NAV_ITEMS = [
  { id: "work",       label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "skills",     label: "Skills" },
  { id: "about",      label: "About" },
  { id: "contact",    label: "Contact" },
];

const Nav = () => {
  const { links } = window.CEPHAS_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  const [active, setActive]     = React.useState("");
  const [open, setOpen]         = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 16);
      let current = "";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight * 0.35) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className={"nav" + (scrolled ? " is-scrolled" : "")}>
      <div className="nav-inner wrap">
        <a href="#top" className="nav-brand" aria-label="Cephas Osei-Bonsu, back to top">
          <span className="nav-mark" aria-hidden="true">C</span>
          <span>Cephas Osei-Bonsu</span>
        </a>

        <nav className="nav-links" aria-label="Sections">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={"#" + item.id} className={active === item.id ? "is-active" : ""}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="btn btn-outline btn-sm nav-resume" href={links.resume} target="_blank" rel="noopener noreferrer">
          Resume
        </a>

        <button
          className="nav-toggle"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="nav-sheet"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <div id="nav-sheet" className={"nav-sheet" + (open ? " is-open" : "")} hidden={!open}>
        {NAV_ITEMS.map((item) => (
          <a key={item.id} href={"#" + item.id} onClick={() => setOpen(false)}>{item.label}</a>
        ))}
        <a href={links.resume} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>Resume</a>
      </div>
    </header>
  );
};

window.Nav = Nav;
