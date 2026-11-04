const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");

const route = "/blog/novos-stamina-vascular-trial";
const brief = fs.readFileSync("attached_assets/Pasted-Today-s-daily-article-is-ready-It-covers-the-STAMINA-tr_1793819781553.txt", "utf8");
const source = brief.split("ARTICLE TEXT (place exactly as written):")[1]
  .split("And here's the hero image")[0].trim();
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const markdownText = (s) => normalize(s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/^#{1,6}\s+|^-\s+|^---$/gm, "").replace(/\*/g, ""));
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|div|section|blockquote)>/g, " ")
  .replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route`);
  }
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((item) => item.toString()).join("\n");
  const title = source.split("\n")[0].replace(/^# /, "");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), title);
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), title);
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  assert.equal(plain(article), markdownText(source.split("\n").slice(1).join("\n")),
    "Entire supplied article must remain unchanged without prompt or added claims");
  const expectedHeadings = [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1]);
  assert.deepEqual([...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plain(m[1])), expectedHeadings);
  assert.equal((article.match(/<li\b/g) || []).length, 8);
  const links = [...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => [plain(m[2]), m[1]]);
  assert.deepEqual(links, [
    ["what HRV is and how to improve it", "/blog/what-is-hrv-how-to-improve-it"],
    ["discount codes page", "https://thrivetools.co/discount-codes"],
  ]);
  assert(SSR_ROUTE_COMPONENTS["/blog/what-is-hrv-how-to-improve-it"]);
  assert(SSR_ROUTE_COMPONENTS["/discount-codes"]);
  const schema = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1])).filter((s) => s["@type"] === "FAQPage");
  assert.equal(schema.length, 1);
  const faqs = [...source.split("## FAQ")[1].split("## The Bottom Line")[0]
    .matchAll(/### (.+)\n+([\s\S]*?)(?=\n### |$)/g)]
    .map((m) => ({ q: markdownText(m[1]), a: markdownText(m[2]) }));
  assert.equal(faqs.length, 5);
  assert.deepEqual(schema[0].mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
  const visible = [...article.split("<h2>FAQ</h2>")[1].split("<h2>The Bottom Line</h2>")[0]
    .matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => ({ q: plain(m[1]), a: plain(m[2]) }));
  assert.deepEqual(visible, faqs);
  const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0])
    .find((tag) => tag.includes("IMG_1663_1793819777331"));
  assert(image?.match(/alt="[^"]+"/));
  const src = image.match(/src="([^"]+)"/)[1];
  assert.deepEqual(fs.readFileSync(path.join("dist/public", src)), fs.readFileSync("attached_assets/IMG_1663_1793819777331.webp"));
  assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src));
  const listing = (await render("/blog")).html;
  assert(listing.includes('data-testid="card-post-novos-stamina-vascular-trial"'));
  assert.equal((listing.match(/data-testid="card-post-novos-stamina-vascular-trial"/g) || []).length, 1);
  console.log("PASS STAMINA: unchanged full article, headings, 8 list items, exact links, 5 matching FAQs/schema, original hero/OG, all routes and blog card.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
