/* ------------------------------------------------------------------ */
/* Philosophy / About                                                  */
/* ------------------------------------------------------------------ */

const Philosophy = () => (
  <section className="philosophy section" id="about" data-screen-label="02 Philosophy">
    <div className="container">
      <div className="philosophy-grid">
        <div className="reveal">
          <span className="section-label">Approach</span>
        </div>
        <div className="reveal" style={{ ['--reveal-delay']: '120ms' }}>
          <p className="philosophy-body">
            I build practical technology that moves from prototype <em>to real use</em>.
            <span className="muted"> My work sits at the intersection of healthcare, AI,
            backend infrastructure, and IoT — systems that have to stay calm under
            failure, stay honest about what they know, and stay accessible to the
            people who actually depend on them.</span>
          </p>
        </div>
      </div>

      <div className="philosophy-pillars">
        <div className="pillar reveal from-l">
          <div className="n">01</div>
          <h4>Reliable by default</h4>
          <p>Per-device auth, rate limits, cache layers, and rolling aggregates so the boring failure modes don't break the experience.</p>
        </div>
        <div className="pillar reveal from-down" style={{ ['--reveal-delay']: '120ms' }}>
          <div className="n">02</div>
          <h4>Honest with users</h4>
          <p>Explainable scoring, surfaced confidence, and clinical-grade language — never a black box that costs someone their judgement.</p>
        </div>
        <div className="pillar reveal from-r" style={{ ['--reveal-delay']: '240ms' }}>
          <div className="n">03</div>
          <h4>Made for real people</h4>
          <p>Offline-first flows, mobile-money settlement, low-bandwidth UI — designed for clinicians, merchants, and students, not demo videos.</p>
        </div>
      </div>
    </div>
  </section>
);

window.Philosophy = Philosophy;
