const assert = require("node:assert/strict");
const fs = require("node:fs");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const route = "/blog/vo2-max-zone-2-cardio-longevity-guide";
const source = fs.readFileSync("client/src/content/vo2-max-zone-2-cardio-longevity-guide.md", "utf8").trim();
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const markdown = (s) => normalize(s.replace(/^#{1,6}\s+|^-\s+|^\d+\.\s+/gm, ""));
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside)>/g, " ").replace(/<[^>]*>/g, "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
const faqs = source.split("## FAQ")[1].split("## Sources")[0].trim().split(/\n\s*\n/)
  .map((block) => {
    const [q, ...answer] = block.split("\n");
    return { q, a: normalize(answer.join(" ")) };
  });
const links = [
  "/blog/what-is-hrv-how-to-improve-it",
  "/blog/cold-plunge-at-home-guide",
  "/blog/contrast-therapy-at-home-guide",
  "/blog/vagus-nerve-vagal-tone-wellness-practices",
  "/discount-codes",
];

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route`);
  }
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
  const entry = blogPosts.filter((post) => post.href === route);
  assert.equal(entry.length, 1);
  assert.equal(blogPosts.length, 185);
  assert.equal(entry[0].badge, "Guides / Longevity & Fitness");
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((value) => value.toString()).join("\n");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), source.split("\n")[0].slice(2));
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]),
    "VO2 Max & Zone 2 Cardio for Longevity: What the Evidence Actually Says (2026)");
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const description = head.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)?.[1];
  assert.equal(plain(description || ""), "VO2 max is one of the strongest predictors of longevity — and it's trainable. What a 122,000-person study found, what Zone 2 actually is, and a beginner 150-minute weekly protocol.");
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  assert.equal(plain(article), markdown(source.split("\n").slice(1).join("\n")), "Full article copy must match the saved source");
  assert.deepEqual([...article.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plain(m[1])),
    [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1]));
  assert.equal((article.match(/<li\b/g) || []).length, (source.match(/^-\s|^\d+\.\s/gm) || []).length);
  assert.deepEqual([...article.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => m[1]), links);
  for (const link of links) assert(SSR_ROUTE_COMPONENTS[link], `Internal destination missing: ${link}`);
  assert.equal(faqs.length, 5);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const faqSchema = schemas.filter((schema) => schema["@type"] === "FAQPage");
  assert.equal(faqSchema.length, 1);
  assert.deepEqual(faqSchema[0].mainEntity.map((faq) => ({ q: faq.name, a: faq.acceptedAnswer.text })), faqs);
  for (const faq of faqs) assert(plain(article).includes(`${faq.q} ${faq.a}`));
  assert(!/<img\b/.test(article), "Do not add missing or invented article images");
  for (const listingRoute of ["/blog", "/product-reviews"]) {
    const listing = (await render(listingRoute)).html;
    assert.equal(listing.match(/data-testid="card-post-([^"]+)"/)[1], "vo2-max-zone-2-cardio-longevity-guide");
    assert.equal((listing.match(/data-testid="card-post-vo2-max-zone-2-cardio-longevity-guide"/g) || []).length, 1);
  }
  console.log("PASS VO2 max: exact article and SEO, all routes, 185 entries, first card on both listings, 5 working internal links, 5 matching FAQs, no missing image references.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
