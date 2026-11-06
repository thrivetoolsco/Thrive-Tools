const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/bone-loading-piezo1-lifespan-study";
const source = fs.readFileSync("attached_assets/Pasted-Today-s-article-is-ready-a-longevity-beat-story-sourced_1793988196246.txt", "utf8")
  .split("ARTICLE TEXT (place exactly as written):")[1].split("Here's the hero image")[0].trim();
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const markdown = (text) => normalize(text.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/^#{1,6}\s+|^-\s+|^---$/gm, "").replace(/\*/g, ""));
const plain = (text) => normalize(text.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside)>/g, " ").replace(/<[^>]*>/g, "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">"));

(async () => {
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route`);
  }
  assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((item) => item.toString()).join("\n");
  const title = source.split("\n")[0].slice(2);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), title);
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), title);
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  assert(head.match(/name="description" content="[^"]+"/));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  assert.equal(plain(article), markdown(source.split("\n").slice(1).join("\n")),
    "Exact full article must remain unchanged, without prompt text or added claims");
  assert.deepEqual([...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plain(m[1])),
    [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1]));
  assert.equal((article.match(/<li\b/g) || []).length, 10);
  assert.deepEqual([...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => [plain(m[2]), m[1]]), [
    ["best recovery tech of 2026", "/blog/best-recovery-tech-2026"],
    ["discount codes page", "https://thrivetools.co/discount-codes"],
  ]);
  for (const href of ["/blog/best-recovery-tech-2026", "/discount-codes"]) {
    assert(app.includes(`path="${href}"`) && SSR_ROUTE_COMPONENTS[href]);
  }
  const faqs = [...source.split("## FAQ")[1].split("## The Bottom Line")[0]
    .matchAll(/### (.+)\n+([\s\S]*?)(?=\n### |$)/g)]
    .map((m) => ({ q: m[1], a: markdown(m[2]) }));
  assert.equal(faqs.length, 6);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1])).filter((item) => item["@type"] === "FAQPage");
  assert.equal(schemas.length, 1);
  assert.deepEqual(schemas[0].mainEntity.map((faq) => ({ q: faq.name, a: faq.acceptedAnswer.text })), faqs);
  assert.deepEqual([...article.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => ({ q: plain(m[1]), a: plain(m[2]) })), faqs);
  const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0])
    .find((tag) => tag.includes("0_IMG_1675_1793989448292"));
  assert(image?.match(/alt="[^"]+"/));
  const src = image.match(/src="([^"]+)"/)[1];
  assert.deepEqual(fs.readFileSync(path.join("dist/public", src)),
    fs.readFileSync("attached_assets/0_IMG_1675_1793989448292.webp"));
  assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src));
  const listing = (await render("/blog")).html;
  assert.equal(listing.match(/data-testid="card-post-([^"]+)"/)[1], "bone-loading-piezo1-lifespan-study");
  assert.equal((listing.match(/data-testid="card-post-bone-loading-piezo1-lifespan-study"/g) || []).length, 1);
  console.log("PASS bone loading: exact article, 10 list items, 2 links, 6 matching visible/schema FAQs, uploaded hero/OG, routes and first blog card.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
