const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render } = require("../dist/entry-server.cjs");
const decode = (text) => text.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&#x27;|&#39;/g, "'").replace(/&quot;/g, '"');
const configs = [
  { route: "/blog/im8-daily-ultimate-longevity-guide", heading: "IM8 Daily Ultimate Longevity: The 10-Compound Formula Targeting All 12 Hallmarks of Aging", seo: "IM8 Daily Ultimate Longevity: Formula, Price & Guide", image: "IMG_1535_1791940169274", faqs: 6, sections: ["Quick answer", "Product details", "What is IM8 Daily Ultimate Longevity?", "The 12 hallmarks of aging, in plain terms", "Longevity vs. Essentials Pro: what's the difference?", "Who it's for", "How to buy it for less", "Verdict", "FAQ"] },
  { route: "/blog/im8-beckham-stack-explained", heading: "The Beckham Stack Explained: IM8's Essentials + Longevity Bundle, Priced Honestly", seo: "The Beckham Stack: IM8 Bundle, Price & First-Order Kit", image: "IMG_1536_1791940169274", faqs: 5, sections: ["Quick answer", "What's in the stack", "The price math, honestly", "Stack, single product, or neither?", "How to buy", "Verdict", "FAQ"] },
];
(async () => {
  const listing = (await render("/blog")).html;
  const registries = ["client/src/App.tsx", "client/src/entry-server.tsx", "client/src/ssr-routes.ts", "shared/site-routes.ts", "server/vite.ts"];
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  for (const config of configs) {
    for (const file of registries) assert(fs.readFileSync(file, "utf8").includes(`"${config.route}"`), `${file}: missing route`);
    const { html, helmet } = await render(config.route);
    const head = Object.values(helmet).map((item) => item.toString()).join("\n");
    const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(article);
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal(decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), config.heading);
    assert.equal(decode(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), config.seo);
    assert(config.seo.length <= 60);
    assert(head.includes(`rel="canonical" href="https://thrivetools.co${config.route}"`) && !head.includes("noindex"));
    assert(head.includes('name="description"') && head.includes('property="og:type" content="article"'));
    assert.equal((listing.match(new RegExp(`href="${config.route}"`, "g")) || []).length, 1);
    const sectionNames = [...article.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((match) => decode(match[1]));
    assert.deepEqual(sectionNames, config.sections);
    assert(article.includes("Brand Guides") && article.includes("Disclosure:") && html.includes("By Eden Laraki"));
    assert(!article.includes("PASTE NOTES") && !article.includes("Slug suggestion") && !article.includes("Meta description:"));
    const src = article.match(/<img[^>]*src="([^"]+)"/)[1];
    assert(src.includes(config.image) && fs.existsSync(path.join("dist/public", src)));
    assert(article.includes("h-auto object-contain") && article.includes("IM8 product photo supplied by the site owner"));
    assert(head.includes(`property="og:image" content="https://thrivetools.co${src}"`));
    const links = [...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)];
    const partnerLinks = links.filter((match) => /^https?:/.test(match[1]));
    assert(partnerLinks.length >= 3);
    partnerLinks.forEach((match) => {
      assert.equal(match[1], "https://www.im8health.com/THRIVE10");
      assert(match[0].includes("sponsored"));
    });
    assert(article.includes("THRIVE10"));
    for (const [, href] of links.filter((match) => match[1].startsWith("/"))) assert(app.includes(`"${href}"`), `Missing internal route: ${href}`);
    const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
    const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
    assert.equal(faq?.mainEntity.length, config.faqs);
    const visible = [...article.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3><p[^>]*>([\s\S]*?)<\/p>/g)];
    assert.equal(visible.length, config.faqs);
    faq.mainEntity.forEach((item, index) => {
      assert.equal(decode(visible[index][1]), item.name);
      assert.equal(decode(visible[index][2]), item.acceptedAnswer.text);
    });
    if (config.faqs === 6) {
      assert(article.includes("10 compounds") && article.includes("12 hallmarks"));
      assert(article.includes("$104/month") && article.includes("$3.47"));
      assert.equal((article.match(/<table\b/g) || []).length, 1);
    } else {
      for (const value of ["$78", "$104", "$182", "$183", "$97", "$12", "$6.09", "$6.10", "not</em> a monthly discount", "5 bonus sachets", "Essentials Box", "Longevity Box", "Luxe Edition Mixer", "Shaker Bottle"]) assert(article.includes(value), `Missing price/kit detail: ${value}`);
      assert.equal((article.match(/<thead>/g) || []).length, 1);
    }
    console.log(`PASS ${config.route}: full sections, pricing tables, supplied hero/OG, affiliate code/link, ${config.faqs} matching FAQs, SEO, routes and one blog card.`);
  }
})().catch((error) => { console.error(error); process.exitCode = 1; });
