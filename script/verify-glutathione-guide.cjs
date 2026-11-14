const assert = require("node:assert/strict");
const fs = require("node:fs");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/glutathione-supplements-evidence-guide";
const affiliate = "https://shop.cymbiotika.com/SFVM9DY9";
const source = fs.readFileSync("client/src/content/glutathione-supplements-evidence-guide.md", "utf8");
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote|figcaption)>/g, " ")
  .replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
const body = source.split("\nLooking for tools")[0].split("\n").slice(1).join("\n");
const faqs = source.split("## Frequently asked questions\n")[1].split("\n## Sources")[0]
  .split(/\n### /).filter((s) => s.trim()).map((block) => {
    const [q, ...a] = block.trim().replace(/^### /, "").split("\n");
    return { q, a: normalize(a.join(" ")) };
  });

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: route`);
  }
  assert.equal(blogPosts.filter((p) => p.href === route).length, 1);
  const metadata = blogPosts.find((p) => p.href === route);
  assert.equal(metadata.lastmod, "2026-11-14");
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((v) => v.toString()).join("\n");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  const title = source.match(/^# (.+)$/m)[1];
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), title);
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), title);
  assert(head.includes(`https://thrivetools.co${route}`));
  assert(head.match(/<meta[^>]*name="description"[^>]*content="[^"]+"/));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)[1];
  const actual = plain(article.replace(/<figure\b[\s\S]*?<\/figure>/g, ""));
  const expected = normalize(body.replace(/^#{1,6}\s+|^\d+\.\s+/gm, ""));
  const mismatch = [...expected].findIndex((_, i) => actual[i] !== expected[i]);
  assert.equal(actual, expected, `Article copy mismatch near ${mismatch}: ${actual.slice(mismatch - 50, mismatch + 150)}`);
  assert.equal((article.match(/<li\b/g) || []).length, 8);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  assert.equal(faqs.length, 7);
  assert.deepEqual(schemas.find((s) => s["@type"] === "FAQPage").mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
  const links = [...article.matchAll(/<a\b[^>]*>/g)].map((m) => m[0]);
  const affiliates = links.filter((tag) => tag.includes(`href="${affiliate}"`));
  assert.equal(affiliates.length, 3);
  affiliates.forEach((tag) => assert(tag.includes("sponsored") && tag.includes("noopener") && tag.includes("noreferrer")));
  for (const href of ["/blog/deep-sleep-longevity-guide", "/blog/vo2-max-zone-2-cardio-longevity-guide"]) {
    assert(SSR_ROUTE_COMPONENTS[href]);
    assert(links.some((tag) => tag.includes(`href="${href}"`)));
  }
  assert.equal((html.match(/data-testid="article-closing-note"/g) || []).length, 1);
  const tsx = fs.readFileSync("client/src/pages/reviews/GlutathioneSupplementsEvidenceGuide.tsx", "utf8");
  assert(!tsx.includes("glutathione-building-blocks.webp"));
  assert(tsx.indexOf('<ArticleImage filename="glutathione-absorption.webp"') > tsx.indexOf("Liposomal glutathione: the idea is sound"));
  assert(/on the product page\.\s*<\/p>\s*<ArticleImage filename="glutathione-facts\.webp" \/>/.test(tsx));
  for (const name of ["glutathione-hero.webp", "glutathione-absorption.webp", "glutathione-facts.webp"]) {
    assert(tsx.includes(name), `Pending image reference: ${name}`);
    if (!fs.existsSync(`attached_assets/${name}`)) assert(!html.includes(`src="${name}"`), "No broken image references");
  }
  for (const listing of ["/blog", "/product-reviews"]) {
    const result = await render(listing);
    assert.equal(result.html.match(/data-testid="card-post-([^"]+)"/)[1], route.slice(6));
    assert.equal((result.html.match(/data-testid="card-post-glutathione-supplements-evidence-guide"/g) || []).length, 1);
  }
  console.log("PASS glutathione guide: complete supplied copy, SEO and routes, eight sources, seven matching FAQs, three sponsored links, internal links, pending image references, newest-first listing, shared closing.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
