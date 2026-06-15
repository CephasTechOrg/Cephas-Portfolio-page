/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

const Hero = () => {
  const bgRef = React.useRef(null);

  // Very subtle parallax on scroll + mouse
  React.useEffect(() => {
    let raf = null;
    let mx = 0, my = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const y = window.scrollY * 0.06;
        if (bgRef.current) {
          bgRef.current.style.transform = `translate3d(${mx}px, ${-y + my}px, 0)`;
        }
        raf = null;
      });
    };
    const onMove = (e) => {
      const w = window.innerWidth, h = window.innerHeight;
      mx = (e.clientX / w - 0.5) * 14;
      my = (e.clientY / h - 0.5) * 8;
      onScroll();
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section id="home" className="hero" data-screen-label="01 Hero">
      <div className="hero-bg">
        <img
          ref={bgRef}
          className="hero-bg-img"
          src="public/images/world-network.png"
          alt=""
          aria-hidden="true"
          loading="eager"
        />
      </div>

      <div className="container hero-grid">
        <div className="hero-text">
          <div className="reveal in">
            <span className="hero-eyebrow">
              <span className="dot" />
              Available for engineering &amp; founder opportunities
            </span>
          </div>

          <h1 className="hero-name reveal" style={{ ['--reveal-delay']: '120ms' }}>
            <span className="first">Cephas</span>
            <span className="last">Osei-Bonsu.</span>
          </h1>

          <div className="hero-role reveal" style={{ ['--reveal-delay']: '260ms' }}>
            <span>Software Engineer</span>
            <span className="sep">·</span>
            <span>Founder <span className="accent">@ Vital-Go</span></span>
            <span className="sep">·</span>
            <span>Livingstone College, CS &amp; Math</span>
          </div>

          <p className="hero-bio reveal" style={{ ['--reveal-delay']: '380ms' }}>
            I build AI-powered healthcare systems, real-time platforms, and full-stack
            products that turn practical problems into reliable software.
          </p>

          <div className="hero-actions reveal" style={{ ['--reveal-delay']: '500ms' }}>
            <a href="#work" className="btn primary">
              View Work <ArrowUR />
            </a>
            <a
              href={window.CEPHAS_DATA.links.github}
              target="_blank" rel="noopener noreferrer"
              className="btn" aria-label="GitHub profile"
            >
              GitHub <ArrowUR />
            </a>
            <a
              href={window.CEPHAS_DATA.links.linkedin}
              target="_blank" rel="noopener noreferrer"
              className="btn" aria-label="LinkedIn profile"
            >
              LinkedIn <ArrowUR />
            </a>
          </div>

          <div className="hero-stats reveal" style={{ ['--reveal-delay']: '640ms' }}>
            <div className="stat">
              <div className="v">4.0<em>/4.0</em></div>
              <div className="l">GPA · Pres. Scholar</div>
            </div>
            <div className="stat">
              <div className="v"><em>1</em> Hackathon</div>
              <div className="l">404 Sentinel · Winner</div>
            </div>
            <div className="stat">
              <div className="v">300<em>+</em></div>
              <div className="l">Users shipped to</div>
            </div>
          </div>
        </div>

        <div className="portrait reveal" style={{ ['--reveal-delay']: '300ms' }}>
          <div className="portrait-stage">
            {/* atmospheric network field behind */}
            <div className="portrait-atmosphere" aria-hidden="true">
              <img src="public/images/world-network.png" alt="" />
            </div>

            {/* orbital concentric rings */}
            <svg className="portrait-orbits" viewBox="0 0 600 720" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
              <defs>
                <radialGradient id="orbFade" cx="50%" cy="58%" r="50%">
                  <stop offset="0%"  stopColor="rgba(125,211,252,0.55)"/>
                  <stop offset="60%" stopColor="rgba(125,211,252,0.18)"/>
                  <stop offset="100%" stopColor="rgba(125,211,252,0)"/>
                </radialGradient>
                <linearGradient id="ringStroke" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%"  stopColor="rgba(125,211,252,0.45)"/>
                  <stop offset="50%" stopColor="rgba(125,211,252,0.08)"/>
                  <stop offset="100%" stopColor="rgba(125,211,252,0.45)"/>
                </linearGradient>
              </defs>
              <circle cx="300" cy="420" r="240" fill="url(#orbFade)" opacity="0.55"/>
              <circle cx="300" cy="420" r="180" fill="none" stroke="url(#ringStroke)" strokeWidth="0.6"/>
              <circle cx="300" cy="420" r="230" fill="none" stroke="rgba(125,211,252,0.18)" strokeWidth="0.5" strokeDasharray="2 6"/>
              <circle cx="300" cy="420" r="290" fill="none" stroke="rgba(125,211,252,0.10)" strokeWidth="0.5"/>
              {/* faint network nodes */}
              {[
                [120,260],[480,260],[160,540],[460,560],
                [220,180],[400,200],[100,420],[510,400],
              ].map(([x,y],i) => (
                <g key={i}>
                  <circle cx={x} cy={y} r="2" fill="rgba(125,211,252,0.85)"/>
                  <circle cx={x} cy={y} r="6" fill="rgba(125,211,252,0.18)"/>
                </g>
              ))}
            </svg>

            {/* rim-light silhouette glow */}
            <div className="portrait-rim" aria-hidden="true"></div>

            {/* the transparent cutout */}
            <img
              className="portrait-cutout"
              src="public/images/profile.png"
              alt="Portrait of Cephas Osei-Bonsu"
            />

            {/* bottom vignette so the figure dissolves into the page */}
            <div className="portrait-vignette" aria-hidden="true"></div>

            {/* HUD ticks */}
            <div className="portrait-hud" aria-hidden="true">
              <span className="hud-corner tl"></span>
              <span className="hud-corner tr"></span>
              <span className="hud-corner bl"></span>
              <span className="hud-corner br"></span>
              <span className="hud-tick top">N 35.67°</span>
              <span className="hud-tick right">— Salisbury, NC</span>
              <span className="hud-tick bottom">
                <span className="live-dot"></span> live · founder mode
              </span>
              <span className="hud-tick left">W 80.47°</span>
            </div>
          </div>

          <div className="portrait-tags">
            <span className="tag"><FlagGH /> Ghana-born</span>
            <span className="tag"><FlagUS /> U.S.-based</span>
            <span className="tag">CS · Math · Livingstone College</span>
          </div>
        </div>
      </div>

      <div className="scroll-hint" aria-hidden="true">
        <span>Scroll</span>
        <span className="line"></span>
      </div>
    </section>
  );
};

window.Hero = Hero;
