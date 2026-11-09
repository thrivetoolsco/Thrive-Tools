const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render } = require("../dist/entry-server.cjs");
const route = "/blog/aged-garlic-s1pc-muscle-aging-study";
const source = fs.readFileSync("attached_assets/Pasted-Today-s-article-is-ready-Aged-Garlic-s-S1PC-Compound-Im_1794243460239.txt", "utf8")
  .split("ARTICLE TEXT (place exactly as written):")[1].split("And here's the hero image")[0].trim();
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const markdown = (s) => normalize(s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/^#{1,6}\s+|^-\s+|^---$/gm, "").replace(/\*/g, ""));
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside)>/g, " ").replace(/<[^>]*>/g, "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">"));

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route`);
  }
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((entry) => entry.toString()).join("\n");
  const title = source.split("\n")[0].slice(2);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), title);
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), title);
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  assert.equal(plain(article), markdown(source.split("\n").slice(1).join("\n")), "Entire supplied article must remain unchanged");
  assert.deepEqual([...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plain(m[1])),
    [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1]));
  assert.equal((article.match(/<li\b/g) || []).length, 15);
  assert.deepEqual([...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => [plain(m[2]), m[1]]), [["discount codes page", "https://thrivetools.co/discount-codes"]]);
  const faqs = [...source.split("## FAQ")[1].split("## The Bottom Line")[0]
    .matchAll(/### (.+)\n+([\s\S]*?)(?=\n### |$)/g)].map((m) => ({ q: m[1], a: markdown(m[2]) }));
  assert.equal(faqs.length, 7);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1])).filter((s) => s["@type"] === "FAQPage");
  assert.equal(schemas.length, 1);
  assert.deepEqual(schemas[0].mainEntity.map((faq) => ({ q: faq.name, a: faq.acceptedAnswer.text })), faqs);
  assert.deepEqual([...article.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => ({ q: plain(m[1]), a: plain(m[2]) })), faqs);
  const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((tag) => tag.includes("IMG_1688_1794243477573"));
  assert(image?.match(/alt="[^"]+"/));
  const src = image.match(/src="([^"]+)"/)[1];
  assert.deepEqual(fs.readFileSync(path.join("dist/public", src)), fs.readFileSync("attached_assets/IMG_1688_1794243477573.webp"));
  assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src));
  const listing = (await render("/blog")).html;
  assert.equal(listing.match(/data-testid="card-post-([^"]+)"/)[1], "aged-garlic-s1pc-muscle-aging-study");
  assert.equal((listing.match(/data-testid="card-post-aged-garlic-s1pc-muscle-aging-study"/g) || []).length, 1);
  console.log("PASS aged garlic: exact full article, 15 list items, original link, 7 matching visible/schema FAQs, original uploaded hero/OG, all routes and first blog card.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
