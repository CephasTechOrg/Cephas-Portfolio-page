/* ------------------------------------------------------------------ */
/* App shell — assembles sections + reveal observer                    */
/* ------------------------------------------------------------------ */

const App = () => {
  React.useEffect(() => {
    // One-shot reveal on enter, with tight rootMargin for senior-feel timing
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.12 });
    els.forEach(el => io.observe(el));

    // Scroll progress bar
    const bar = document.getElementById("scrollProgressBar");
    const onScroll = () => {
      const max = (document.documentElement.scrollHeight - window.innerHeight);
      const p = max > 0 ? (window.scrollY / max) * 100 : 0;
      if (bar) bar.style.setProperty("--p", p + "%");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress" aria-hidden="true">
        <span id="scrollProgressBar"></span>
      </div>
      <Nav />
      <Hero />
      <Skills />
      <Philosophy />
      <Work />
      <Experience />
      <Spotlight />
      <Contact />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
