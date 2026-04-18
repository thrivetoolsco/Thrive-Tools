import type { Express } from "express";
import { type Server } from "http";
import rateLimit from "express-rate-limit";
import { blogPosts, staticRoutes, eventRoutes, SITE_URL } from "../shared/site-routes";

const contactRateLimit = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

const newsletterRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 3,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: "Too many requests, please try again later." },
});

function sanitizeText(input: string): string {
  return String(input)
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && email.length <= 254;
}

const WATERDROP_SSR_HTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Waterdrop vs AquaTru vs RKIN: Zero-Install RO Review</title>
  <meta name="description" content="Waterdrop K19-H beats AquaTru and RKIN for zero installation reverse osmosis. Real-world look at UV sterilization, PFAS removal, and instant hot water. Shop with code KAWTHARLARAKI." />
  <link rel="canonical" href="https://thrivetools.co/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review" />
  <meta property="og:type" content="article" />
  <meta property="og:title" content="Waterdrop vs AquaTru vs RKIN: Zero-Install RO Review" />
  <meta property="og:description" content="Waterdrop K19-H beats AquaTru and RKIN for zero installation reverse osmosis. Real-world look at UV sterilization, PFAS removal, and instant hot water." />
  <meta property="og:url" content="https://thrivetools.co/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review" />
  <meta property="og:site_name" content="Thrive Tools" />
  <meta property="og:image" content="https://thrivetools.co/images/waterdrop/k19h-product.jpg" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Waterdrop vs AquaTru vs RKIN: Zero-Install RO Review" />
  <meta name="twitter:description" content="Waterdrop K19-H beats AquaTru and RKIN for zero installation reverse osmosis. UV sterilization, PFAS removal, no plumbing required." />
  <meta name="twitter:image" content="https://thrivetools.co/images/waterdrop/k19h-product.jpg" />
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Waterdrop vs. AquaTru vs. RKIN: The Truth About Zero Installation Reverse Osmosis",
    "datePublished": "2025-09-24",
    "dateModified": "2025-09-24",
    "author": { "@type": "Person", "name": "Eden Laraki" },
    "publisher": { "@type": "Organization", "name": "Thrive Tools", "url": "https://thrivetools.co" },
    "image": "https://thrivetools.co/images/waterdrop/k19h-product.jpg",
    "url": "https://thrivetools.co/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review"
  }
  </script>
  <link rel="icon" type="image/png" href="/favicon.png" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet" />
  <style>
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    :root {
      --bg: #fdf8f3;
      --fg: #3d1a28;
      --accent: #c4622d;
      --accent-dark: #8b3a1a;
      --muted: #7a5c62;
      --card: #fffaf6;
      --border: #e8ddd5;
      --radius: 1rem;
    }
    body {
      font-family: 'Montserrat', sans-serif;
      background: var(--bg);
      color: var(--fg);
      line-height: 1.75;
      font-size: 16px;
    }
    a { color: var(--accent-dark); text-decoration: underline; }
    a:hover { color: var(--accent); }
    nav {
      background: rgba(253,248,243,0.95);
      border-bottom: 1px solid var(--border);
      padding: 0 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 64px;
      position: sticky;
      top: 0;
      z-index: 50;
      backdrop-filter: blur(8px);
    }
    .nav-logo {
      font-family: 'Playfair Display', serif;
      font-size: 1.25rem;
      font-weight: 700;
      color: var(--fg);
      text-decoration: none;
    }
    .nav-links { display: flex; gap: 1.5rem; }
    .nav-links a { font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; color: var(--muted); text-decoration: none; }
    .nav-links a:hover { color: var(--accent); }
    main { max-width: 780px; margin: 0 auto; padding: 2.5rem 1.5rem 5rem; }
    .breadcrumb { font-size: 0.75rem; color: var(--muted); margin-bottom: 2rem; display: flex; gap: 0.4rem; align-items: center; }
    .breadcrumb a { color: var(--muted); text-decoration: none; }
    .breadcrumb a:hover { color: var(--accent); }
    .badge {
      display: inline-block;
      background: rgba(196,98,45,0.12);
      color: var(--accent-dark);
      border: 1px solid rgba(196,98,45,0.22);
      border-radius: 999px;
      padding: 0.2em 0.85em;
      font-size: 0.72rem;
      font-weight: 700;
      letter-spacing: 0.07em;
      text-transform: uppercase;
      margin-bottom: 1.2rem;
    }
    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.75rem, 5vw, 2.6rem);
      font-weight: 700;
      color: var(--fg);
      line-height: 1.25;
      margin-bottom: 1.2rem;
    }
    .subtitle {
      font-size: 1.05rem;
      color: var(--muted);
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }
    .hero-img {
      border-radius: var(--radius);
      overflow: hidden;
      margin-bottom: 2.5rem;
      background: var(--card);
      border: 1px solid var(--border);
    }
    .hero-img img { width: 100%; height: auto; display: block; }
    article { display: flex; flex-direction: column; gap: 2.5rem; }
    h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.25rem, 3.5vw, 1.65rem);
      font-weight: 700;
      color: var(--fg);
      margin-bottom: 0.75rem;
      padding-top: 0.5rem;
    }
    h3 {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.05rem;
      font-weight: 700;
      color: var(--accent-dark);
      margin-bottom: 0.6rem;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
    p { margin-bottom: 1rem; color: var(--fg); }
    section { display: flex; flex-direction: column; gap: 0; }
    .card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      padding: 1.5rem 2rem;
    }
    .img-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: var(--radius);
      overflow: hidden;
    }
    .img-card img { width: 100%; height: auto; display: block; }
    .img-card figcaption {
      font-size: 0.78rem;
      color: var(--muted);
      text-align: center;
      padding: 0.6rem 1rem;
    }
    .comparison-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
      margin-top: 1rem;
    }
    @media (max-width: 600px) { .comparison-grid { grid-template-columns: 1fr; } }
    .comparison-card {
      background: var(--card);
      border: 1px solid var(--border);
      border-radius: calc(var(--radius) * 0.75);
      padding: 1.25rem;
    }
    .comparison-card h3 { font-size: 0.85rem; margin-bottom: 0.5rem; }
    .comparison-card p { font-size: 0.9rem; margin-bottom: 0; }
    ul.feature-list {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      margin-top: 0.75rem;
    }
    ul.feature-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.6rem;
      font-size: 0.95rem;
    }
    ul.feature-list li::before {
      content: '';
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--accent);
      flex-shrink: 0;
      margin-top: 0.5em;
    }
    .discount-box {
      background: linear-gradient(135deg, #fff8f3 0%, #fef0e8 100%);
      border: 1px solid rgba(196,98,45,0.25);
      border-radius: var(--radius);
      padding: 2.5rem 2rem;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1.25rem;
    }
    .discount-label { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.12em; font-weight: 700; color: var(--muted); }
    .code-row {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(255,255,255,0.7);
      border: 1px solid rgba(196,98,45,0.18);
      border-radius: 0.75rem;
      padding: 0.6rem 1.2rem;
    }
    .code-text {
      font-family: 'Courier New', monospace;
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--accent);
      letter-spacing: 0.12em;
    }
    .copy-btn {
      background: none;
      border: none;
      cursor: pointer;
      padding: 0.4rem;
      border-radius: 0.4rem;
      color: var(--muted);
      transition: color 0.2s, background 0.2s;
      display: flex;
      align-items: center;
    }
    .copy-btn:hover { background: rgba(0,0,0,0.05); color: var(--fg); }
    .copy-btn svg { width: 18px; height: 18px; }
    .copy-confirm { font-size: 0.8rem; color: #16a34a; font-weight: 600; min-height: 1.2em; }
    .shop-btn {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      background: linear-gradient(135deg, #c4622d, #a84e22);
      color: #fff;
      font-family: 'Montserrat', sans-serif;
      font-weight: 700;
      font-size: 0.82rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      padding: 1rem 2.5rem;
      border-radius: 999px;
      text-decoration: none;
      transition: opacity 0.2s;
    }
    .shop-btn:hover { opacity: 0.9; color: #fff; }
    .shop-btn svg { width: 16px; height: 16px; }
    .affiliate-note { font-size: 0.8rem; color: var(--muted); max-width: 480px; line-height: 1.6; }
    footer {
      background: var(--fg);
      color: rgba(255,255,255,0.6);
      text-align: center;
      padding: 2rem 1.5rem;
      font-size: 0.8rem;
    }
    footer a { color: rgba(255,255,255,0.75); }
    .external-ref {
      font-size: 0.82rem;
      color: var(--muted);
    }
  </style>
</head>
<body>
  <nav aria-label="Main navigation">
    <a class="nav-logo" href="/">Thrive Tools</a>
    <div class="nav-links">
      <a href="/blog">Blog</a>
      <a href="/discount-codes">Discounts</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  </nav>

  <main>
    <div class="breadcrumb" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span aria-hidden="true">&rsaquo;</span>
      <a href="/blog">Blog</a>
      <span aria-hidden="true">&rsaquo;</span>
      <span>Waterdrop K19.H Review</span>
    </div>

    <div class="badge">Product Review</div>

    <h1>Waterdrop vs. AquaTru vs. RKIN: The Truth About Zero Installation Reverse Osmosis</h1>
    <p class="subtitle">A real.world breakdown of the only three countertop RO systems worth considering. UV sterilization, PFAS removal, and why I finally cleared counter space for the Waterdrop K19.H.</p>

    <div class="hero-img">
      <img
        src="/images/waterdrop/k19h-product.jpg"
        alt="Waterdrop K19-H countertop reverse osmosis water filter with instant hot water dispenser showing digital temperature display at 185 degrees Fahrenheit"
        width="800"
        loading="eager"
        decoding="async"
      />
    </div>

    <article>

      <section>
        <p>If you are still using a $30 pitcher and thinking your water is clean, we need to have a real talk about what is actually in your tap. Between the PFAS (forever chemicals), microplastics, and fluoride, a basic charcoal filter is basically just trying to stop a flood with a screen door. Research published on <a href="https://pubmed.ncbi.nlm.nih.gov/33719381/" target="_blank" rel="noopener noreferrer">PubMed confirms that PFAS exposure</a> is linked to serious long.term health consequences, including immune suppression and hormonal disruption.</p>

        <p>I have been down the rabbit hole of high performance wellness for years, and for me, Reverse Osmosis (RO) is the only baseline that makes sense. But the pro systems have always been a headache. Either they cost a fortune, require a plumber to drill holes in your rental, or they turn into a moldy science experiment after six months.</p>

        <p>I spent the last year looking at the big three: AquaTru, RKIN, and Waterdrop. Here is the genuine, no BS breakdown of why I finally cleared my counter for the Waterdrop K19.H.</p>
      </section>

      <section>
        <h2>The "Swamp" Problem: Why UV Is a Dealbreaker</h2>

        <p>This is the part most companies gloss over. When you strip chlorine out of water (which RO does in the first stage), you are left with "naked" water. Without that disinfectant, bacteria and mold spores, which are everywhere in your kitchen air, can start colonizing the internal lines of your filter. Studies on <a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7068500/" target="_blank" rel="noopener noreferrer">NIH regarding microplastics and water contamination</a> underscore just how many invisible threats exist even in filtered water systems.</p>

        <div class="comparison-grid">
          <div class="comparison-card">
            <h3>AquaTru &amp; RKIN</h3>
            <p>These are high.purity systems, but they are passive. If you are not a fanatic about scrubbing the tanks every week and running manual vinegar flushes, you are eventually going to be drinking from a system with a hidden biofilm layer.</p>
          </div>
          <div class="comparison-card">
            <h3>Waterdrop K19.H</h3>
            <p>The K19.H has a built.in UV.C LED kill switch. It cycles automatically to scramble the DNA of anything trying to grow in the reservoir. That biological insurance is the reason it wins. No janitor duties required.</p>
          </div>
        </div>

        <figure class="img-card" style="margin-top:1.25rem;">
          <img
            src="/images/waterdrop/k19h-filtration.jpg"
            alt="Waterdrop K19-H six-stage deep filtration diagram showing PP cotton, activated carbon fiber, scale inhibitor layer, RO membrane at 0.0001 microns, activated carbon layer, and UV LED function removing rust, chlorine, lead, TDS, and PFAS"
            width="800"
            loading="lazy"
            decoding="async"
          />
          <figcaption>The 6.stage filtration system: PP cotton, activated carbon fiber, RO membrane (0.0001 microns), and UV.C LED protection.</figcaption>
        </figure>
      </section>

      <section>
        <h2>Purity vs. "Dead" Water</h2>

        <p>I get asked a lot if RO water is "dead" because it has zero minerals. Look: I would rather have a blank slate than a mineral.rich cocktail of lead and nitrates. The RO membrane in the Waterdrop is 0.0001 microns. That is a physical wall. It rejects things at a molecular level.</p>

        <p>My strategy: I use the Waterdrop to get the junk out, then I restructure my water with a pinch of Celtic sea salt or trace mineral drops. That way, I am choosing my mineral intake instead of letting the city pipes decide for me.</p>

        <p>If you are interested in the broader conversation on water quality and longevity optimization, our deep dive into <a href="/blog/hydrogen-water-benefits-science-review">hydrogen water benefits and the science behind it</a> is worth your time as a companion read.</p>

        <figure class="img-card">
          <img
            src="/images/waterdrop/k19h-purification.jpg"
            alt="Waterdrop K19-H countertop RO water purifier shown dispensing purified water into a glass, with product callouts: no installation required, 0.0001 micron RO filtration, flash heat technology, and 170oz large water tank"
            width="800"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Zero installation. 0.0001 micron RO filtration. Flash.heat technology. 170oz tank.</figcaption>
        </figure>
      </section>

      <section>
        <h2>Why It Actually Sticks on My Counter</h2>

        <p>The best health tool is the one you actually use. Here is what makes the K19.H a keeper in practice, not just on spec sheets.</p>

        <ul class="feature-list">
          <li><strong>Zero Installation:</strong> I rent, and I move. I do not want to drill into pipes. You literally just plug this in and fill it at the tap. That alone removes the biggest barrier to upgrading your water.</li>
          <li><strong>The 3:1 Efficiency Ratio:</strong> Most RO systems waste a ton of water. This one is super efficient, wasting about 75% less than the old school under.sink units.</li>
          <li><strong>The 3 Second Heat:</strong> The K19.H gives me 203 degree Fahrenheit water almost instantly. For my morning lemon water or coffee, it replaced my kettle entirely. One less appliance on the counter.</li>
        </ul>

        <figure class="img-card" style="margin-top:1.25rem;">
          <img
            src="/images/waterdrop/k19h-display.jpg"
            alt="Waterdrop K19-H smart touch display panel showing real-time temperature data at 203 degrees Fahrenheit, with easy control custom settings for filter status, pump, volume, and temperature"
            width="800"
            loading="lazy"
            decoding="async"
          />
          <figcaption>Smart display showing real.time temperature data and easy touch controls for filter, pump, volume, and heat settings.</figcaption>
        </figure>
      </section>

      <section>
        <h2>The Bottom Line</h2>

        <p>If you want the most set.it.and.forget.it way to get lab grade water without the mold anxiety or the plumbing bill, the Waterdrop is the move. It is the first time a high performance wellness tool has actually made my life easier instead of just adding another chore to the list.</p>

        <p>Clean water is not a biohack. It is the foundation everything else is built on. Magnesium absorption, supplement efficacy, cellular hydration. All of it depends on what is actually in your glass. For more on building a foundational health stack, see our <a href="/blog/magnesium-deficiency-supplement-guide">complete guide to magnesium</a>, the mineral most people are deficient in without knowing it.</p>

        <p>For more exclusive discount codes on the tools I personally use and recommend, visit the <a href="/discount-codes">Thrive Tools discount codes page</a>. I keep it updated as new partnerships come in.</p>
      </section>

      <section>
        <h3>Clean Up Your Water Stack</h3>

        <p>I spent the hours digging into the technical manuals so you do not have to. If this research helps you level up your health stack, using the link below keeps this site independent and fueled by real data. Clean water is the non.negotiable baseline. No excuses.</p>

        <div class="discount-box">
          <p class="discount-label">Exclusive Discount Code</p>
          <div class="code-row">
            <span class="code-text" id="discount-code">KAWTHARLARAKI</span>
            <button class="copy-btn" onclick="copyCode()" aria-label="Copy discount code KAWTHARLARAKI" data-testid="button-copy-code">
              <svg id="copy-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.8" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
              </svg>
              <svg id="check-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#16a34a" style="display:none;">
                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            </button>
          </div>
          <p class="copy-confirm" id="copy-confirm" aria-live="polite"></p>
          <a class="shop-btn" href="https://www.waterdropfilter.ca/?ref=ozpbpmdp" target="_blank" rel="noopener noreferrer" data-testid="link-affiliate-waterdrop">
            Shop Waterdrop K19.H
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </a>
          <p class="affiliate-note">Use code <strong>KAWTHARLARAKI</strong> at checkout on waterdropfilter.ca. Affiliate disclosure: if you purchase through this link, this site earns a small commission at no extra cost to you. It keeps this research independent and free.</p>
        </div>
      </section>

    </article>
  </main>

  <footer>
    <p>&copy; 2025 Thrive Tools &mdash; <a href="/">thrivetools.co</a> &mdash; Evidence.based wellness and biohacking resources.</p>
  </footer>

  <script>
    function copyCode() {
      var code = document.getElementById('discount-code').innerText;
      navigator.clipboard.writeText(code).then(function() {
        document.getElementById('copy-icon').style.display = 'none';
        document.getElementById('check-icon').style.display = 'block';
        document.getElementById('copy-confirm').innerText = 'Copied to clipboard.';
        setTimeout(function() {
          document.getElementById('copy-icon').style.display = 'block';
          document.getElementById('check-icon').style.display = 'none';
          document.getElementById('copy-confirm').innerText = '';
        }, 2500);
      }).catch(function() {
        document.getElementById('copy-confirm').innerText = 'Please copy manually: KAWTHARLARAKI';
      });
    }
  </script>
</body>
</html>`;

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  app.get("/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review", (_req, res) => {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(WATERDROP_SSR_HTML);
  });

  app.get("/sitemap.xml", (_req, res) => {
    const today = new Date().toISOString().split("T")[0];

    const staticEntries = staticRoutes.map((r) => `
  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${r.lastmod ?? today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`).join("");

    const eventEntries = eventRoutes.map((r) => `
  <url>
    <loc>${SITE_URL}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`).join("");

    const blogEntries = blogPosts.map((p) => `
  <url>
    <loc>${SITE_URL}${p.canonical}</loc>
    <lastmod>${p.lastmod}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>`).join("");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${staticEntries}
${eventEntries}
${blogEntries}
</urlset>`;

    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(xml);
  });

  app.post("/api/contact", contactRateLimit, async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const safeName = sanitizeText(name);
    const safeEmail = sanitizeText(email);
    const safeSubject = sanitizeText(subject);
    const safeMessage = sanitizeText(message);

    if (!safeName || !safeSubject || !safeMessage) {
      return res.status(400).json({ error: "Invalid input" });
    }

    const mailtoBody = `Name: ${safeName}\nEmail: ${safeEmail}\nSubject: ${safeSubject}\n\nMessage:\n${safeMessage}`;

    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: "Thrivetools.co@gmail.com",
        replyTo: safeEmail,
        subject: `[ThriveTools Contact] ${safeSubject}`,
        text: mailtoBody,
      });

      res.json({ success: true });
    } catch (err) {
      console.error("Contact form email failed:", err);
      res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
  });

  app.post("/api/newsletter", newsletterRateLimit, async (req, res) => {
    const { email } = req.body;

    if (!email) {
      return res.status(400).json({ error: "Email is required" });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    const safeEmail = sanitizeText(email);

    try {
      const nodemailer = await import("nodemailer");
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: "Thrivetools.co@gmail.com",
        subject: "[ThriveTools] New Newsletter Subscriber",
        text: `New newsletter subscription request:\n\nEmail: ${safeEmail}`,
      });

      res.json({ success: true });
    } catch (err) {
      console.log("Newsletter subscription (email failed, logged safely)");
      res.json({ success: true });
    }
  });

  return httpServer;
}
