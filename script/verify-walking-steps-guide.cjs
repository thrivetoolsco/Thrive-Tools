const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/how-many-steps-a-day-longevity-guide";
const brief = fs.readFileSync("attached_assets/Pasted-share-this-in-as-blog-post-in-the-blog-page-Title-How-M_1794592052301.txt", "utf8");
const source = brief.slice(brief.indexOf("\n# ") + 1).split("\nLooking for tools that support healthy aging")[0].trim();
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote|figcaption)>/g, " ")
  .replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
const markdown = (s) => normalize(s.replace(/^#{1,6}\s+|^>\s+|^-\s+|^---$/gm, "")
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*/g, ""));
const faqs = source.split("## FAQ")[1].split("## Sources")[0].trim().split(/\n\s*\n/)
  .map((block) => {
    const [q, ...answer] = block.split("\n");
    return { q: q.replace(/\*/g, ""), a: markdown(answer.join(" ")) };
  });

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: route`);
  }
  assert.equal(blogPosts.filter((p) => p.href === route).length, 1);
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((v) => v.toString()).join("\n");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), brief.match(/^Title: (.+)$/m)[1]);
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), brief.match(/^Meta title: (.+)$/m)[1]);
  assert.equal(plain(head.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)[1]), brief.match(/^Meta description: (.+)$/m)[1]);
  assert(head.includes(`https://thrivetools.co${route}`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)[1];
  const actualText = plain(article.replace(/<figure\b[\s\S]*?<\/figure>/g, ""));
  const expectedText = markdown(source.split("\n").slice(1).join("\n"));
  const mismatch = [...expectedText].findIndex((_, i) => actualText[i] !== expectedText[i]);
  assert(actualText === expectedText, `Article text mismatch near ${mismatch}: actual ${actualText.slice(mismatch - 70, mismatch + 150)}; expected ${expectedText.slice(mismatch - 70, mismatch + 150)}`);
  assert.equal((article.match(/<li\b/g) || []).length, (source.match(/^-\s/gm) || []).length);
  const links = [...article.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(links, [...source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]));
  links.forEach((href) => assert(SSR_ROUTE_COMPONENTS[href], href));
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  assert.equal(faqs.length, 7);
  assert.deepEqual(schemas.find((s) => s["@type"] === "FAQPage").mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
  const imageAlts = [...brief.matchAll(/Alt text: "([^"]+)"/g)].map((m) => m[1]);
  const captions = [...brief.matchAll(/Caption: "([^"]+)"/g)].map((m) => m[1]);
  const names = ["IMG_1770_1794592060465.webp", "IMG_1771_1794592060465.png", "IMG_1772_1794592060465.webp"];
  names.forEach((name, i) => {
    const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((img) => img.includes(name.split(".")[0]));
    assert(image?.includes(`alt="${imageAlts[i]}"`), name);
    assert(plain(html).includes(captions[i]));
    assert.deepEqual(fs.readFileSync(path.join("dist/public", image.match(/src="([^"]+)"/)[1])), fs.readFileSync(`attached_assets/${name}`));
  });
  assert(head.match(/property="og:image"[^>]*content="[^"]*IMG_1770/));
  assert.equal((html.match(/data-testid="article-closing-note"/g) || []).length, 1);
  for (const listing of ["/blog", "/product-reviews"]) {
    const result = await render(listing);
    assert.equal((result.html.match(/data-testid="card-post-how-many-steps-a-day-longevity-guide"/g) || []).length, 1);
  }
  console.log("PASS walking guide: exact copy and SEO, all routes, seven matching FAQs, three uploaded images and captions, working links, single listing, shared closing.");
})().catch((e) => { console.error(e); process.exitCode = 1; });
