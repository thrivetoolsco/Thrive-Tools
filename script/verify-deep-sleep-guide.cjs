const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/deep-sleep-longevity-guide";
const brief = fs.readFileSync("attached_assets/Pasted-share-this-in-as-blog-post-in-the-blog-page-Title-Deep-_1794501980445.txt", "utf8");
const source = brief.slice(brief.indexOf("\n# ") + 1).split("\nLooking for tools that support healthy aging")[0].trim();
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote|figcaption)>/g, " ")
  .replace(/<[^>]*>/g, "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
const markdown = (s) => normalize(s.replace(/^#{1,6}\s+|^>\s+|^-\s+|^\d+\.\s+|^---$/gm, "")
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*/g, ""));
const faqs = source.split("## FAQ")[1].split("## Sources")[0].trim().split(/\n\s*\n/)
  .map((block) => {
    const [q, ...answer] = block.split("\n");
    return { q: q.replace(/\*/g, ""), a: normalize(answer.join(" ")) };
  });

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: route`);
  }
  assert.equal(blogPosts.filter((p) => p.href === route).length, 1);
  assert.equal(blogPosts.length, 187);
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((value) => value.toString()).join("\n");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), source.split("\n")[0].slice(2));
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), brief.match(/^Meta title: (.+)$/m)[1]);
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  assert.equal(plain(head.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)[1]), brief.match(/^Meta description: (.+)$/m)[1]);
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  const withoutFigures = article.replace(/<figure\b[\s\S]*?<\/figure>/g, "");
  assert.equal(plain(withoutFigures), markdown(source.split("\n").slice(1).join("\n")), "Exact supplied article copy, excluding captions and shared closing");
  assert.equal((article.match(/<li\b/g) || []).length, (source.match(/^-\s|^\d+\.\s/gm) || []).length);
  const links = [...article.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => m[1]);
  assert.deepEqual(links, [...source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]));
  for (const link of links) assert(SSR_ROUTE_COMPONENTS[link], link);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  assert.equal(faqs.length, 7);
  const faqSchema = schemas.filter((s) => s["@type"] === "FAQPage");
  assert.equal(faqSchema.length, 1);
  assert.deepEqual(faqSchema[0].mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
  for (const faq of faqs) assert(plain(article).includes(`${faq.q} ${faq.a}`));
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  for (const [name, ext, alt, caption] of [
    ["IMG_1730_1794501993314", "webp", "Woman with long dark curly hair sleeping peacefully on her side in a dark bedroom, moonlight through the window", "Deep sleep does the heavy lifting — and most of it happens in the first half of the night."],
    ["IMG_1731_1794501993314", "png", "Chart showing sleep duration and mortality risk forming a U-shape, with the lowest risk at 7 to 8 hours per night", "Sleep and mortality follow a U-shaped curve, not a straight line. Illustrative dose-response based on Yin et al. 2017 (Journal of the American Heart Association)."],
    ["IMG_1732_1794501993314", "png", "Hypnogram of a typical night showing deep sleep concentrated in the first half of the night and REM sleep later", "A typical night: deep sleep happens mostly in the first half. A short night cuts deep sleep first."],
  ]) {
    const image = images.find((img) => img.includes(name));
    assert(image?.includes(`alt="${alt}"`), `${name}: exact alt`);
    const asset = image.match(/src="([^"]+)"/)[1];
    assert.deepEqual(fs.readFileSync(path.join("dist/public", asset)), fs.readFileSync(`attached_assets/${name}.${ext}`));
    assert(plain(html).includes(caption), `${name}: caption`);
  }
  assert(head.match(/property="og:image"[^>]*content="[^"]*IMG_1730/));
  assert.equal((html.match(/data-testid="article-closing-note"/g) || []).length, 1);
  for (const listingRoute of ["/blog", "/product-reviews"]) {
    const { html: listing } = await render(listingRoute);
    assert.equal(listing.match(/data-testid="card-post-([^"]+)"/)[1], "deep-sleep-longevity-guide");
    assert.equal((listing.match(/data-testid="card-post-deep-sleep-longevity-guide"/g) || []).length, 1);
  }
  console.log("PASS deep sleep: exact copy/SEO, all route registrations, 187 entries, newest on both listings, three uploaded images/captions, working links, seven matching FAQs, and shared closing.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
