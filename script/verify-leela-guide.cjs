const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/leela-quantum-tech-guide";
const source = fs.readFileSync("attached_assets/Pasted-Done-the-Leela-article-is-written-in-full-with-a-hero-i_1793845562138.txt", "utf8")
  .split("ARTICLE TEXT (place exactly as written):")[1].split("And here's the hero image")[0].trim();
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const markdownText = (s) => normalize(s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/^#{1,6}\s+|^-\s+|^---$/gm, "").replace(/\*/g, ""));
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|div|section|aside)>/g, " ").replace(/<[^>]*>/g, "")
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
  assert.equal(plain(article), markdownText(source.split("\n").slice(1).join("\n")),
    "Full supplied article must remain unchanged, including disclosure and FAQ placement");
  assert.deepEqual([...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plain(m[1])),
    [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1]));
  assert.equal((article.match(/<li\b/g) || []).length, 8);
  assert.deepEqual([...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)]
    .map((m) => [plain(m[2]), m[1]]), [
    ["Leela Quantum Tech (LeelaQ)", "https://leelaq.com/?ref=ThriveTools"],
    ["INFINITY Bloc", "https://leelaq.com/?ref=ThriveTools"],
    ["H.E.A.L.360 Advanced Petite Capsule", "https://leelaq.com/?ref=ThriveTools"],
    ["what HRV is and how to improve it", "/blog/what-is-hrv-how-to-improve-it"],
    ["current pricing on LeelaQ's site", "https://leelaq.com/?ref=ThriveTools"],
    ["Leela Quantum Tech", "https://leelaq.com/?ref=ThriveTools"],
    ["discount codes page", "https://thrivetools.co/discount-codes"],
  ]);
  const affiliateLinks = [...article.matchAll(/<a\b[^>]*href="https:\/\/leelaq.com\/\?ref=ThriveTools"[^>]*>/g)];
  assert.equal(affiliateLinks.length, 5);
  for (const [tag] of affiliateLinks) {
    assert(tag.includes('rel="sponsored noopener noreferrer"'), "Every affiliate link must be labeled sponsored");
  }
  for (const href of ["/blog/what-is-hrv-how-to-improve-it", "/discount-codes"]) {
    assert(app.includes(`path="${href}"`) && SSR_ROUTE_COMPONENTS[href]);
  }
  const faqs = [...source.split("## Frequently Asked Questions")[1]
    .matchAll(/### (.+)\n+([\s\S]*?)(?=\n### |$)/g)]
    .map((m) => ({ q: m[1], a: markdownText(m[2]) }));
  assert.equal(faqs.length, 6);
  const schema = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1])).filter((s) => s["@type"] === "FAQPage");
  assert.equal(schema.length, 1);
  assert.deepEqual(schema[0].mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
  const visibleFaqs = [...article.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)]
    .map((m) => ({ q: plain(m[1]), a: plain(m[2]) }));
  assert.deepEqual(visibleFaqs, faqs);
  const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0])
    .find((tag) => tag.includes("0_IMG_1668_1793845838466"));
  assert(image?.match(/alt="[^"]+"/));
  const src = image.match(/src="([^"]+)"/)[1];
  assert.deepEqual(fs.readFileSync(path.join("dist/public", src)),
    fs.readFileSync("attached_assets/0_IMG_1668_1793845838466.jpeg"));
  assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src));
  const secondImage = [...article.matchAll(/<img\b[^>]*>/g)].map((m) => m[0])
    .find((tag) => tag.includes("IMG_1667_1793845848037"));
  assert(secondImage?.includes('alt="Leela Quantum Tech Bloc on a wooden table in a living room"'));
  const secondSrc = secondImage.match(/src="([^"]+)"/)[1];
  assert.deepEqual(fs.readFileSync(path.join("dist/public", secondSrc)),
    fs.readFileSync("attached_assets/IMG_1667_1793845848037.jpeg"));
  const listing = (await render("/blog")).html;
  assert.equal(listing.match(/data-testid="card-post-([^"]+)"/)[1], "leela-quantum-tech-guide");
  assert.equal((listing.match(/data-testid="card-post-leela-quantum-tech-guide"/g) || []).length, 1);
  assert(!fs.readFileSync("client/src/pages/Discounts.tsx", "utf8").match(/leela/i), "No Leela discount card");
  assert(!(await render("/discount-codes")).html.includes("Leela Quantum Tech"), "No Leela discount card in UI");
  console.log("PASS Leela: exact full article, 5 sponsored affiliate links, 6 matching visible/schema FAQs, original hero/OG, second uploaded image, routes, first blog card and no discount card.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
