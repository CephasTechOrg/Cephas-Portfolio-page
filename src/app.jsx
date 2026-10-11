/* ------------------------------------------------------------------ */
/* App shell: assembles sections and runs the one-shot reveal.         */
/* ------------------------------------------------------------------ */

const App = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    // WHY: without IntersectionObserver (or with reduced motion) show everything at once
    // rather than leaving content stuck at opacity 0.
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || !("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("is-in"));
      return undefined;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: "0px 0px -6% 0px", threshold: 0.08 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a className="skip-link" href="#work">Skip to work</a>
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <Skills />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
