const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/strength-training-longevity-muscle-guide";
const brief = fs.readFileSync("attached_assets/Pasted-share-this-in-as-blog-post-in-the-blog-page-Title-Your-_1794420152199.txt", "utf8");
const source = brief.slice(brief.indexOf("\n# ") + 1).split("\nLooking for tools that support healthy aging")[0].trim();
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote|figcaption)>/g, " ")
  .replace(/<[^>]*>/g, "")
  .replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'")
  .replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
const markdown = (s) => normalize(s.replace(/^#{1,6}\s+|^>\s+|^-\s+|^\d+\.\s+|^---$/gm, "")
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*/g, ""));
const faqs = source.split("### FAQ")[1].split("### Sources")[0].trim().split(/\n\s*\n/)
  .map((block) => {
    const [q, ...answer] = block.split("\n");
    return { q: q.replace(/\*/g, ""), a: normalize(answer.join(" ")) };
  });

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: route`);
  }
  assert.equal(blogPosts.filter((p) => p.href === route).length, 1);
  assert.equal(blogPosts.length, 186);
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((value) => value.toString()).join("\n");
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), source.split("\n")[0].slice(2));
  assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]),
    "Strength Training for Longevity: 30–60 Minutes a Week, Grip Strength & the Evidence (2026)");
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const meta = brief.match(/^Meta description: (.+)$/m)[1];
  assert.equal(plain(head.match(/<meta[^>]*name="description"[^>]*content="([^"]*)"/)[1]), meta);
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  const withoutFigures = article.replace(/<figure\b[\s\S]*?<\/figure>/g, "");
  assert.equal(plain(withoutFigures), markdown(source.split("\n").slice(1).join("\n")), "Exact supplied article copy, excluding image captions and shared closing");
  assert.equal((article.match(/<li\b/g) || []).length, (source.match(/^-\s|^\d+\.\s/gm) || []).length);
  const links = [...article.matchAll(/<a\b[^>]*href="([^"]+)"/g)].map((m) => m[1]);
  const sourceLinks = [...source.matchAll(/\[[^\]]+\]\(([^)]+)\)/g)].map((m) => m[1]);
  assert.deepEqual(links, sourceLinks);
  for (const link of links) assert(SSR_ROUTE_COMPONENTS[link], link);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  assert.equal(faqs.length, 6);
  const faqSchema = schemas.filter((s) => s["@type"] === "FAQPage");
  assert.equal(faqSchema.length, 1);
  assert.deepEqual(faqSchema[0].mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
  for (const faq of faqs) assert(plain(article).includes(`${faq.q} ${faq.a}`));
  const images = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  for (const [name, alt, caption] of [
    ["IMG_1697_1794420147267", "Eden doing a dumbbell deadlift in a bright home gym", "The hinge — a dumbbell deadlift. Two sessions a week, five movements, is the whole protocol."],
    ["IMG_1699_1794420147267", "J-shaped dose-response curve: mortality risk lowest at 30 to 60 minutes of muscle-strengthening per week (Momma et al., 2022)", "The J-shaped curve from Momma et al. (2022): risk falls steeply from zero, bottoms out at 30–60 minutes a week, then flattens. More was not clearly better."],
  ]) {
    const image = images.find((img) => img.includes(name));
    assert(image?.includes(`alt="${alt}"`), `${name}: exact alt`);
    const asset = image.match(/src="([^"]+)"/)[1];
    assert.deepEqual(fs.readFileSync(path.join("dist/public", asset)), fs.readFileSync(`attached_assets/${name}.webp`));
    assert(plain(html).includes(caption), `${name}: caption`);
  }
  assert(head.match(/property="og:image"[^>]*content="[^"]*IMG_1697/));
  assert.equal((html.match(/data-testid="article-closing-note"/g) || []).length, 1);
  for (const listingRoute of ["/blog", "/product-reviews"]) {
    const { html: listing } = await render(listingRoute);
    assert.equal(listing.match(/data-testid="card-post-([^"]+)"/)[1], "strength-training-longevity-muscle-guide");
    assert.equal((listing.match(/data-testid="card-post-strength-training-longevity-muscle-guide"/g) || []).length, 1);
  }
  console.log("PASS strength guide: exact copy/SEO, all route registrations, 186 entries, newest on both listings, two uploaded images/captions, working links, six matching FAQs, and shared closing.");
})().catch((error) => { console.error(error); process.exitCode = 1; });
