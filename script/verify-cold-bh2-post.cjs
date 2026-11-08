const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
require("tsx/cjs");
const { currentMonthCopy } = require("../shared/month-copy.ts");

const route = "/blog/cold-bh2-longevity-study";
const brief = fs.readFileSync("attached_assets/Pasted-Today-s-daily-article-is-ready-the-first-news-driven-on_1793732309037.txt", "utf8");
const source = brief.split("ARTICLE TEXT (place exactly as written):")[1]
  .split("And here's the hero image")[0].replace(/\uFFFC/g, "").trim();
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const normalize = (text) => currentMonthCopy(text.replace(/\s+/g, " ").trim());
const plainHtml = (html) => normalize(decode(html.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote)>/g, " ").replace(/<[^>]*>/g, "")));

(async () => {
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route`);
  }
  assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((item) => item.toString()).join("\n");
  const title = source.split("\n")[0];
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plainHtml(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), title);
  assert.equal(plainHtml(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), title);
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  assert.equal(plainHtml(article), normalize(source.split("\n").slice(1).join("\n").replace(/^•\s*/gm, "")),
    "Full supplied article must remain unchanged; no extra claims or prompt text");
  const headings = [
    "What the Researchers Actually Did", "Why Protein Clumping Matters",
    "The Most Surprising Twist: Cold Might Not Be Required", "What This Does Not Prove",
    "What It Means for Your Cold Practice", "Why This Study Matters Anyway",
    "Frequently Asked Questions", "The Bottom Line",
  ];
  assert.deepEqual([...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plainHtml(m[1])), headings);
  assert.equal((article.match(/<li\b/g) || []).length, 4);
  const expectedLinks = [
    ["cold plunge at home guide", "/blog/cold-plunge-at-home-guide"],
    ["guide on what HRV is and how to improve it", "/blog/what-is-hrv-how-to-improve-it"],
    ["discount codes page", "/discount-codes"],
  ];
  const links = [...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => [plainHtml(m[2]), decode(m[1])]);
  assert.deepEqual(links, expectedLinks);
  for (const [, href] of expectedLinks) {
    assert(app.includes(`path="${href}"`) && SSR_ROUTE_COMPONENTS[href]);
  }
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1])).filter((item) => item["@type"] === "FAQPage");
  assert.equal(schemas.length, 1);
  const faqLines = source.split("Frequently Asked Questions\n")[1].split("The Bottom Line\n")[0].trim().split("\n");
  assert.equal(faqLines.length, 10);
  const visibleFaqs = [...article.split("<h2>Frequently Asked Questions</h2>")[1]
    .split("<h2>The Bottom Line</h2>")[0].matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)];
  assert.equal(schemas[0].mainEntity.length, 5);
  assert.equal(visibleFaqs.length, 5);
  schemas[0].mainEntity.forEach((faq, i) => {
    assert.equal(faq.name, faqLines[i * 2]);
    assert.equal(faq.acceptedAnswer.text, faqLines[i * 2 + 1]);
    assert.equal(plainHtml(visibleFaqs[i][1]), faq.name);
    assert.equal(plainHtml(visibleFaqs[i][2]), faq.acceptedAnswer.text);
  });
  const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((tag) => tag.includes("IMG_1661_1793732296832"));
  assert(image?.match(/alt="[^"]+"/));
  const src = image.match(/src="([^"]+)"/)[1];
  assert.deepEqual(fs.readFileSync(path.join("dist/public", src)), fs.readFileSync("attached_assets/IMG_1661_1793732296832.webp"));
  assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src));
  const listing = (await render("/blog")).html;
  assert(listing.includes('data-testid="card-post-cold-bh2-longevity-study"'));
  assert.equal((listing.match(/data-testid="card-post-cold-bh2-longevity-study"/g) || []).length, 1);
  console.log("PASS BH2: unchanged article, heading/list structure, 3 internal links, 5 exact visible/schema FAQs, uploaded hero/OG, routes and blog card.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
