const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const { render } = require("../dist/entry-server.cjs");

const posts = [
  {
    route: "/blog/black-friday-supplement-deals-2026",
    title: "Best Black Friday Supplement Deals 2026: 10 Verified Offers",
    h1: "Best Black Friday Supplement Deals 2026",
    hero: "hero-black-friday-supplements",
    brands: ["IM8", "Bioptimizers", "Timeline Mitopure", "Equip Foods", "Justthrivehealth", "EnergyBits Chlorella & Spirulina", "Organika", "HyperionHerbs", "AquaOmega", "Goli"],
  },
  {
    route: "/blog/black-friday-red-light-therapy-deals-2026",
    title: "Best Black Friday Red Light Therapy Deals 2026",
    h1: "Best Black Friday Red Light Therapy Deals 2026",
    hero: "hero-black-friday-red-light",
    brands: ["Joovv", "Mito Red Light", "Lumebox", "RedTherapy", "VieLight Neuro"],
  },
  {
    route: "/blog/black-friday-wellness-tech-deals-2026",
    title: "Best Black Friday Wellness Tech Deals 2026",
    h1: "Best Black Friday Wellness Tech Deals 2026",
    hero: "hero-black-friday-wellness-tech",
    brands: ["BlueCubeBaths", "EMR-TEK", "Muse Headband", "Neurosity", "NeuroVizr", "Aires Tech", "Havn by Lambs"],
  },
];
const registryFiles = ["client/src/App.tsx", "client/src/entry-server.tsx", "client/src/ssr-routes.ts", "shared/site-routes.ts", "server/vite.ts"];
const registry = registryFiles.map((file) => fs.readFileSync(file, "utf8"));
const decode = (text) => text.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const escape = (text) => text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
const offers = new Map();
const source = ts.createSourceFile("Discounts.tsx", fs.readFileSync("client/src/pages/Discounts.tsx", "utf8"), ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
function visit(node) {
  if (ts.isObjectLiteralExpression(node)) {
    const fields = {};
    for (const prop of node.properties) {
      if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name) && ts.isStringLiteral(prop.initializer)) fields[prop.name.text] = prop.initializer.text;
    }
    if (fields.name && fields.url) offers.set(fields.name, fields);
  }
  ts.forEachChild(node, visit);
}
visit(source);

(async () => {
  const listing = (await render("/blog")).html;
  const heroImages = new Set();
  for (const post of posts) {
    registry.forEach((text, index) => assert(text.includes(`"${post.route}"`), `${registryFiles[index]}: missing route`));
    const result = await render(post.route);
    const head = Object.values(result.helmet).map((item) => item.toString()).join("\n");
    const article = result.html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(article, `${post.route}: article missing`);
    assert.equal((result.html.match(/<h1\b/g) || []).length, 1);
    assert.equal(decode(result.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? ""), post.h1);
    assert.equal(decode(head.match(/<title[^>]*>(.*?)<\/title>/)?.[1] ?? ""), post.title);
    assert(post.title.length <= 60);
    assert(head.includes(`rel="canonical" href="https://thrivetools.co${post.route}"`));
    assert(!/noindex/i.test(head));
    assert(article.includes(">Deals<") && article.includes("Last verified: October 13, 2026"));
    assert(article.includes("November 27, 2026") && article.includes("November 30, 2026"));
    assert(article.includes("not tested in merchant checkouts") && article.includes("Re-verify"));
    assert(article.includes("Disclosure:") && article.includes("14 years of personal research"));
    assert.equal((article.match(/href="\/discount-codes"/g) || []).length, 1);
    assert.equal((listing.match(new RegExp(`href="${post.route}"`, "g")) || []).length, 1);
    const cards = [...article.matchAll(/<section\b[^>]*data-deal-brand="([^"]+)"[^>]*>([\s\S]*?)<\/section>/g)];
    assert.deepEqual(cards.map((match) => decode(match[1])), post.brands);
    for (const [, brand, card] of cards) {
      const offer = offers.get(decode(brand));
      assert(offer, `Unlisted partner: ${brand}`);
      assert(card.includes(`href="${escape(offer.url)}"`), `${brand}: referral URL changed`);
      assert(card.includes(escape(offer.code)), `${brand}: source code/offer changed`);
      assert(card.includes("sponsored") && card.includes("not a confirmed Black Friday sale"));
      if (/^follow\b/i.test(offer.code)) assert(card.includes("No checkout code is listed"));
      for (const [, href] of card.matchAll(/href="(\/[^"]+)"/g)) {
        for (const index of [0, 1, 3]) assert(registry[index].includes(`"${href}"`), `${brand}: guide ${href} absent from ${registryFiles[index]}`);
      }
    }
    assert(!article.includes("Apollo") && !article.includes("Vellgus"));
    const images = [...article.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*>/g)];
    assert.equal(images.length, 1);
    const image = images[0][1];
    assert(image.includes(post.hero) && fs.existsSync(path.join("dist/public", image)));
    assert(head.includes(`property="og:image" content="https://thrivetools.co${image}"`));
    assert(images[0][0].includes("aspect-video"));
    heroImages.add(image);
    const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
    assert.equal(faq?.mainEntity.length, 5);
    const faqSection = article.match(/<h2[^>]*>FAQ<\/h2>([\s\S]*)/)?.[1];
    const visibleFaqs = [...faqSection.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3><p[^>]*>([\s\S]*?)<\/p>/g)];
    assert.equal(visibleFaqs.length, 5);
    faq.mainEntity.forEach((item, index) => {
      assert.equal(decode(visibleFaqs[index][1]), item.name);
      assert.equal(decode(visibleFaqs[index][2]), item.acceptedAnswer.text);
    });
    if (post.hero.endsWith("wellness-tech")) {
      assert(article.includes("https://neurosity.co/thrivetools") && article.includes("Visitor check on October 13, 2026"));
      for (const group of ["Recovery &amp; sleep tech", "Brain &amp; neurotech", "EMF protection"]) assert(article.includes(group));
    }
    console.log(`PASS ${post.route}: ${cards.length} source-matched partners, guide links, five matching FAQs, Deals category, seasonal caveats, hero, SEO and blog listing.`);
  }
  assert.equal(heroImages.size, 3);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
