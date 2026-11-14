const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/shield-your-body-emf-protection-review";
const affiliate = "https://www.awin1.com/cread.php?awinmid=31986&awinaffid=2813108";
const brief = fs.readFileSync("attached_assets/Pasted-share-this-in-as-blog-post-in-the-blog-page-Title-Shiel_1794615645450.txt", "utf8");
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote|figcaption)>/g, " ")
  .replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: route`);
  }
  assert.equal(blogPosts.filter((p) => p.href === route).length, 1);
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((v) => v.toString()).join("\n");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), brief.match(/^Title: (.+)$/m)[1]);
  assert.equal(plain(head.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)[1]), brief.match(/^Meta description: (.+)$/m)[1]);
  assert(head.includes(`https://thrivetools.co${route}`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)[1];
  const text = plain(article);
  const source = brief.slice(brief.indexOf("Affiliate disclosure:")).split("\nLooking for tools")[0];
  const expectedBlocks = source.replace(/\[(?:Image|Hero image):[^\]]*\]\nAlt text: [^\n]*\nCaption: [^\n]*/g, "")
    .split(/\n\s*\n/).map((s) => normalize(s.replace(/^#{1,6}\s+|^-\s+/gm, ""))).filter(Boolean);
  for (const block of expectedBlocks) assert(text.includes(block), `Missing supplied copy: ${block.slice(0, 180)}`);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const faqs = schemas.find((s) => s["@type"] === "FAQPage").mainEntity;
  assert.equal(faqs.length, 6);
  faqs.forEach((faq) => {
    assert(text.includes(faq.name));
    assert(text.includes(faq.acceptedAnswer.text));
  });
  const affiliateLinks = [...article.matchAll(/<a\b[^>]*>/g)].map((m) => m[0]).filter((tag) => plain(tag.match(/href="([^"]*)"/)?.[1] || "") === affiliate);
  assert.equal(affiliateLinks.length, 4);
  affiliateLinks.forEach((tag) => assert(tag.includes("sponsored") && tag.includes("noopener") && tag.includes("noreferrer")));
  assert(SSR_ROUTE_COMPONENTS["/blog/best-emf-protection-2026"]);
  assert(article.includes('href="/blog/best-emf-protection-2026"'));
  for (const name of ["IMG_1777_1794615641209.jpeg", "IMG_1778_1794615641209.jpeg"]) {
    const images = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).filter((img) => img.includes(name.split(".")[0]));
    assert.equal(images.length, 1);
    assert(images[0].match(/alt="[^"]+"/));
    assert.deepEqual(fs.readFileSync(path.join("dist/public", images[0].match(/src="([^"]+)"/)[1])), fs.readFileSync(`attached_assets/${name}`));
  }
  assert(head.match(/property="og:image"[^>]*content="[^"]*IMG_1777/));
  assert.equal((html.match(/data-testid="article-closing-note"/g) || []).length, 1);
  assert(!text.includes("Illustration, not a product photo."));
  for (const listing of ["/blog", "/product-reviews"]) {
    const result = await render(listing);
    assert.equal((result.html.match(/data-testid="card-post-shield-your-body-emf-protection-review"/g) || []).length, 1);
  }
  console.log("PASS SYB review: supplied prose, SEO, five route registrations, six matching FAQs, four affiliate links, two original uploaded images, single listing, shared closing.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
