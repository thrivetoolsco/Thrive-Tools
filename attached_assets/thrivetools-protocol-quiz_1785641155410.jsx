import React, { useState } from 'react';
import { Zap, Moon, Leaf, Flame, Wind, Droplet, ArrowRight, RotateCcw, ExternalLink, BookOpen } from 'lucide-react';

const CONCERNS = [
  { id: 'energy', label: 'Fog & fatigue', sub: "Can't think straight, dragging by 2pm", Icon: Zap },
  { id: 'sleep', label: 'Broken sleep', sub: 'Wired at night, groggy in the morning', Icon: Moon },
  { id: 'gut', label: 'Gut & digestion', sub: 'Bloating, irregularity, low absorption', Icon: Leaf },
  { id: 'recovery', label: 'Inflammation & recovery', sub: 'Aches, slow healing, poor circulation', Icon: Flame },
  { id: 'stress', label: 'Stress & nervous system', sub: "Always \"on,\" can't downshift", Icon: Wind },
  { id: 'load', label: 'Toxin load', sub: 'Water, air, EMF — the invisible stuff', Icon: Droplet },
];

const PROTOCOLS = {
  energy: {
    diagnosis: "Fog and fatigue are rarely a caffeine problem — they're a mitochondrial and micronutrient one. This protocol targets cellular energy production, not another jolt.",
    picks: [
      { name: 'IM8', reason: 'Full-spectrum vitamins, probiotics, adaptogens & CoQ10 in one scoop — covers the baseline most people are missing.', code: 'THRIVE10', url: 'https://www.im8health.com/THRIVE10', review: 'https://thrivetools.co/product-reviews/im8-health-review' },
      { name: 'EnergyBits', reason: "Low-heat dried chlorella & spirulina — enzymes intact, real cellular fuel instead of synthetic stimulation.", code: 'THRIVE25', url: 'https://energybits.com/discount/THRIVE25?rfsn=9026872.b2b124&utm_source=refersion&utm_medium=affiliate&utm_campaign=9026872.b2b124', review: 'https://thrivetools.co/product-reviews/energybits-spirulina-chlorella-review' },
      { name: 'Neurosity', reason: 'EEG-powered focus device — real-time brainwave data so you can actually see when the fog lifts.', code: 'thrivetools', url: 'https://neurosity.co/thrivetools', review: null },
    ],
  },
  sleep: {
    diagnosis: 'Most sleep issues are a nervous-system regulation problem wearing an insomnia costume. This protocol works the mineral and breath side, not another sedative.',
    picks: [
      { name: 'BiOptimizers Magnesium Breakthrough', reason: 'Seven bioavailable forms of magnesium covering every cellular function — the single most under-dosed mineral for sleep.', code: 'THRIVETOOLS', url: 'https://bioptimizers.com/shop/products/magnesium-breakthrough', review: 'https://thrivetools.co/product-reviews/magnesium-deficiency-supplement-guide' },
      { name: 'Oxygen Advantage', reason: 'The most evidence-based breathwork courses available — a direct lever out of sympathetic overdrive before bed.', code: 'THRIVETOOLS', url: 'https://oxygenadvantage.com/?ref=159', review: 'https://thrivetools.co/product-reviews/breathwork-beginners-guide' },
      { name: 'Earthing Harmony', reason: 'Grounding sheets for direct-contact grounding — supports parasympathetic downshift overnight.', code: 'THRIVENOW', url: 'https://earthingharmony.com/?ref=hxaqgkso', review: null },
    ],
  },
  gut: {
    diagnosis: "If your probiotic dies in stomach acid, you're not treating anything. This protocol is built around strains and oils that actually survive digestion.",
    picks: [
      { name: 'Just Thrive', reason: 'Spore-based probiotics engineered to survive stomach acid and reach the gut intact — the most researched strains for real microbiome shift.', code: 'THRIVETOOLS', url: 'https://justthrivehealth.com/THRIVETOOLS', review: 'https://thrivetools.co/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide' },
      { name: 'The Blessed Seed', reason: 'Cold-pressed, undiluted black seed oil — centuries of traditional use for gut inflammation and immune support.', code: null, url: 'https://theblessedseed.de/ref/370/', review: 'https://thrivetools.co/blog/black-seed-oil-benefits-nigella-sativa-guide' },
      { name: 'HyperionHerbs', reason: 'Dual-extracted, fruiting-body-only tonic herbs — Reishi and Cordyceps for gut-immune terrain, not filler mycelium.', code: 'EDEN10', url: 'http://www.hyperionherbs.com/discount/eden10', review: 'https://thrivetools.co/product-reviews/hyperion-herbs' },
    ],
  },
  recovery: {
    diagnosis: "Chronic low-grade inflammation is the common thread under \"I just feel achy all the time.\" This protocol targets circulation, cellular repair, and the raw materials for recovery.",
    picks: [
      { name: 'Joovv', reason: 'Clinical-grade red light therapy — the most trusted name in photobiomodulation for tissue repair and circulation.', code: 'THRIVETOOLS', url: 'https://joovv.com', review: 'https://thrivetools.co/product-reviews/joovv-review' },
      { name: 'BiOptimizers Magnesium Breakthrough', reason: 'Magnesium is required for muscle repair and inflammation regulation — most people are chronically short on it.', code: 'THRIVETOOLS', url: 'https://bioptimizers.com/shop/products/magnesium-breakthrough', review: 'https://thrivetools.co/product-reviews/magnesium-deficiency-supplement-guide' },
      { name: 'BlueCubeBaths', reason: 'Cold therapy tubs built for serious recovery and nervous system training — not a gimmick, a protocol.', code: 'thrive35', url: 'https://bluecubebaths.com/?ref=CM-ZEsM_ayIJbh', review: null },
    ],
  },
  stress: {
    diagnosis: 'You don\'t need another mindset tip. You need your nervous system to have a way out of "on." This protocol works the body first.',
    picks: [
      { name: 'Oxygen Advantage', reason: 'The most evidence-based breathwork courses available — a direct lever on the vagus nerve.', code: 'THRIVETOOLS', url: 'https://oxygenadvantage.com/?ref=159', review: 'https://thrivetools.co/product-reviews/breathwork-beginners-guide' },
      { name: 'Muse Headband', reason: 'Real-time EEG neurofeedback — trains your nervous system to recognize and hold a calm state.', code: 'THRIVE25', url: 'https://choosemuse.com/thrive25', review: 'https://thrivetools.co/blog/muse-headband-review-eeg-neurofeedback' },
      { name: 'Koracao Ceremonial Cacao', reason: 'Ceremonial-grade cacao — heart-opening ritual and mood support, a sacred plant medicine hiding in plain sight.', code: 'EDENKAWTHARLARAKI123', url: 'https://koracao.com/THRIVE33', review: 'https://thrivetools.co/blog/ceremonial-cacao-benefits-science-review' },
    ],
  },
  load: {
    diagnosis: "You can't out-supplement a constant toxin load. This protocol cuts exposure at the source — water, cookware, EMF.",
    picks: [
      { name: 'WaterDropFilter', reason: 'Reverse osmosis + UV sterilization, countertop, no installation — the highest-leverage single change for water quality.', code: 'KAWTHARLARAKI', url: 'https://www.waterdropfilter.ca/?ref=ozpbpmdp', review: 'https://thrivetools.co/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review' },
      { name: '360 Cookware', reason: 'Stainless steel, free from PFAS and chemical coatings — cooking is a daily exposure most people never audit.', code: 'THRIVETOOLS', url: 'https://www.360cookware.com/THRIVETOOLS', review: null },
      { name: 'Aires Tech', reason: "Proven EMF protection — for the invisible load that's harder to see but easy to reduce.", code: 'THRIVE25', url: 'https://airestech.com/thrive25', review: null },
    ],
  },
};

export default function ProtocolQuiz() {
  const [step, setStep] = useState('intro');
  const [concernId, setConcernId] = useState(null);

  const pick = (id) => {
    setConcernId(id);
    setStep('result');
  };

  const reset = () => {
    setConcernId(null);
    setStep('intro');
  };

  const concern = CONCERNS.find((c) => c.id === concernId);
  const protocol = concernId ? PROTOCOLS[concernId] : null;

  return (
    <div className="tt-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,340;0,9..144,480;0,9..144,600;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap');

        .tt-root {
          --ink: #1c211b;
          --paper: #e6e1d2;
          --paper-2: #dbd5c1;
          --card: #f1eee2;
          --moss: #3f5d48;
          --moss-dark: #263b2c;
          --ochre: #b1802c;
          --ochre-light: #d7a34f;
          --muted: #6d6a58;
          --line: rgba(28,33,27,0.14);
          background: var(--paper);
          color: var(--ink);
          font-family: 'Inter', sans-serif;
          min-height: 100vh;
          width: 100%;
          box-sizing: border-box;
          padding: 0;
        }
        .tt-root *, .tt-root *::before, .tt-root *::after { box-sizing: border-box; }
        @media (prefers-reduced-motion: reduce) {
          .tt-root * { animation: none !important; transition: none !important; }
        }

        .tt-shell { max-width: 760px; margin: 0 auto; padding: 28px 20px 64px; }

        .tt-eyebrow {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--moss);
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 18px;
        }
        .tt-eyebrow::before {
          content: '';
          width: 7px; height: 7px;
          background: var(--ochre);
          border-radius: 50%;
          flex-shrink: 0;
        }

        .tt-h1 {
          font-family: 'Fraunces', serif;
          font-weight: 480;
          font-size: clamp(28px, 6vw, 42px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          margin: 0 0 12px;
        }
        .tt-h1 em { font-style: italic; font-weight: 500; color: var(--moss); }

        .tt-lede {
          font-size: 15.5px;
          line-height: 1.6;
          color: var(--muted);
          max-width: 52ch;
          margin: 0 0 32px;
        }

        .tt-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        @media (min-width: 620px) {
          .tt-grid { grid-template-columns: repeat(3, 1fr); gap: 14px; }
        }

        .tt-card-btn {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 3px;
          padding: 18px 16px;
          text-align: left;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 10px;
          transition: border-color 0.15s ease, transform 0.15s ease, background 0.15s ease;
          font-family: inherit;
        }
        .tt-card-btn:hover { border-color: var(--moss); transform: translateY(-2px); }
        .tt-card-btn:focus-visible { outline: 2px solid var(--moss); outline-offset: 2px; }
        .tt-card-icon {
          width: 34px; height: 34px;
          border-radius: 50%;
          background: var(--moss-dark);
          display: flex; align-items: center; justify-content: center;
          color: var(--paper);
          flex-shrink: 0;
        }
        .tt-card-label {
          font-family: 'Fraunces', serif;
          font-weight: 500;
          font-size: 16.5px;
          line-height: 1.2;
        }
        .tt-card-sub {
          font-size: 12.5px;
          color: var(--muted);
          line-height: 1.4;
        }

        /* Result screen */
        .tt-result-head { margin-bottom: 8px; }
        .tt-tag {
          display: inline-flex; align-items: center; gap: 7px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px; letter-spacing: 0.08em; text-transform: uppercase;
          color: var(--moss-dark);
          background: rgba(63,93,72,0.12);
          border: 1px solid rgba(63,93,72,0.25);
          padding: 5px 10px;
          border-radius: 2px;
          margin-bottom: 16px;
        }
        .tt-diagnosis {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-weight: 480;
          font-size: clamp(19px, 3.6vw, 23px);
          line-height: 1.38;
          color: var(--ink);
          margin: 0 0 34px;
          border-left: 2px solid var(--ochre);
          padding-left: 18px;
        }

        .tt-picks { display: flex; flex-direction: column; gap: 14px; margin-bottom: 30px; }

        .tt-pick {
          background: var(--card);
          border: 1px solid var(--line);
          border-radius: 3px;
          padding: 20px 20px 18px;
          position: relative;
          animation: tt-rise 0.5s ease both;
        }
        .tt-pick:nth-child(1) { animation-delay: 0.05s; }
        .tt-pick:nth-child(2) { animation-delay: 0.18s; }
        .tt-pick:nth-child(3) { animation-delay: 0.31s; }
        @keyframes tt-rise {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .tt-pick-index {
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          color: var(--ochre);
          letter-spacing: 0.08em;
          margin-bottom: 6px;
          display: block;
        }
        .tt-pick-name {
          font-family: 'Fraunces', serif;
          font-weight: 560;
          font-size: 19px;
          margin: 0 0 8px;
        }
        .tt-pick-reason {
          font-size: 14px;
          line-height: 1.55;
          color: var(--muted);
          margin: 0 0 16px;
          max-width: 56ch;
        }

        .tt-pick-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
        }
        .tt-code-chip {
          font-family: 'JetBrains Mono', monospace;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.03em;
          background: var(--moss-dark);
          color: #f1eee2;
          padding: 8px 12px;
          border-radius: 2px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .tt-code-chip::before { content: '›'; color: var(--ochre-light); }

        .tt-btn {
          font-family: 'Inter', sans-serif;
          font-size: 13px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          border-radius: 2px;
          text-decoration: none;
          border: 1px solid transparent;
          cursor: pointer;
        }
        .tt-btn-primary { background: var(--ochre); color: #fff; }
        .tt-btn-primary:hover { background: var(--ochre-light); }
        .tt-btn-ghost { background: transparent; color: var(--moss-dark); border-color: var(--line); }
        .tt-btn-ghost:hover { border-color: var(--moss); }

        .tt-footer-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          border-top: 1px solid var(--line);
          padding-top: 20px;
        }
        .tt-retake {
          display: inline-flex; align-items: center; gap: 6px;
          background: none; border: none; cursor: pointer;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px; letter-spacing: 0.05em; text-transform: uppercase;
          color: var(--muted);
        }
        .tt-retake:hover { color: var(--ink); }
        .tt-signoff {
          font-size: 12.5px;
          color: var(--muted);
        }
      `}</style>

      <div className="tt-shell">
        {step === 'intro' && (
          <>
            <div className="tt-eyebrow">Thrive Tools — Protocol Finder</div>
            <h1 className="tt-h1">Still foggy? Still tired?<br /><em>Tell me where it's coming from.</em></h1>
            <p className="tt-lede">
              90% of wellness is noise. Pick what's actually going on and I'll hand you the three things
              from my list worth trying first — with the discount codes built in.
            </p>
            <div className="tt-grid">
              {CONCERNS.map(({ id, label, sub, Icon }) => (
                <button key={id} className="tt-card-btn" onClick={() => pick(id)}>
                  <span className="tt-card-icon"><Icon size={16} strokeWidth={2} /></span>
                  <span className="tt-card-label">{label}</span>
                  <span className="tt-card-sub">{sub}</span>
                </button>
              ))}
            </div>
          </>
        )}

        {step === 'result' && protocol && (
          <>
            <div className="tt-result-head">
              <div className="tt-tag">
                {concern.Icon ? <concern.Icon size={12} /> : null}
                {concern.label}
              </div>
            </div>
            <p className="tt-diagnosis">{protocol.diagnosis}</p>

            <div className="tt-picks">
              {protocol.picks.map((p, i) => (
                <div className="tt-pick" key={p.name}>
                  <span className="tt-pick-index">{String(i + 1).padStart(2, '0')} / PROTOCOL</span>
                  <h3 className="tt-pick-name">{p.name}</h3>
                  <p className="tt-pick-reason">{p.reason}</p>
                  <div className="tt-pick-actions">
                    {p.code && <span className="tt-code-chip">{p.code}</span>}
                    <a className="tt-btn tt-btn-primary" href={p.url} target="_blank" rel="noopener noreferrer">
                      Visit <ExternalLink size={13} />
                    </a>
                    {p.review && (
                      <a className="tt-btn tt-btn-ghost" href={p.review} target="_blank" rel="noopener noreferrer">
                        <BookOpen size={13} /> Why I trust it
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="tt-footer-row">
              <button className="tt-retake" onClick={reset}>
                <RotateCcw size={13} /> Start over
              </button>
              <span className="tt-signoff">— Eden</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
