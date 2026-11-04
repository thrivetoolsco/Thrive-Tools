const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const brief = fs.readFileSync("attached_assets/Pasted--Weekly-search-intent-posts-2026-11-04-2-Replit-ready-p_1793819825207.txt", "utf8");
const sources = brief.split("### ARTICLE BODY (render as written, H1/H2s as marked)").slice(1)
  .map((s) => s.split("## PROMPT 2")[0].replace(/\n---\s*$/, "").trim());
const decode = (s) => s.replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const plain = (s) => normalize(decode(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|div|section|aside)>/g, " ").replace(/<[^>]*>/g, "")));
const markdownText = (s) => normalize(s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/^#{1,6}\s+|^-\s+|^\d+\.\s+|^---$/gm, "").replace(/\*/g, ""));
const posts = [
  { slug: "intrinsic-prism-discount-code-faq", title: "Intrinsic Prism Discount Code FAQ (Verified 2026)",
    category: "Discount Codes", hero: "IMG_1665_1793820476137",
    imageFile: "attached_assets/IMG_1665_1793820476137.webp", faqCount: 11,
    keywords: ["Intrinsic Prism discount code", "THRIVETOOLS", "10% off", "verified"] },
  { slug: "contrast-therapy-at-home-guide", title: "Contrast Therapy at Home: Sauna + Cold Plunge Guide",
    category: "Wellness Tech", hero: "contrast-therapy-at-home-hero", faqCount: 7,
    keywords: ["contrast therapy", "sauna", "cold plunge", "at home"] },
];
const app = fs.readFileSync("client/src/App.tsx", "utf8");
const directory = fs.readFileSync("client/src/pages/Discounts.tsx", "utf8");

(async () => {
  for (const [index, post] of posts.entries()) {
    const source = sources[index];
    const route = `/blog/${post.slug}`;
    for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
      assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route`);
    }
    assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
    const { html, helmet } = await render(route);
    const head = Object.values(helmet).map((item) => item.toString()).join("\n");
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), source.split("\n")[0].slice(2));
    assert.equal(plain(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), post.title);
    assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
    const description = decode(head.match(/name="description" content="([^"]+)"/)[1]);
    post.keywords.forEach((word) => assert(description.includes(word), `Missing meta keyword: ${word}`));
    assert(plain(html).includes(post.category));
    if (index === 0) {
      const relatedRoute = "/blog/best-longevity-supplements-2026";
      assert(html.includes(`href="${relatedRoute}"`) && app.includes(`path="${relatedRoute}"`) && SSR_ROUTE_COMPONENTS[relatedRoute]);
    }
    const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(article);
    assert.equal(plain(article), markdownText(source.split("\n").slice(1).join("\n")),
      `${post.slug}: entire supplied text must remain unchanged`);
    assert.deepEqual([...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plain(m[1])),
      [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1]));
    const expectedLinks = [...source.matchAll(/\[([^\]]+)\]\(([^)]+)\)/g)].map((m) => [m[1], m[2]]);
    const actualLinks = [...article.matchAll(/<a\b([^>]*href="([^"]+)"[^>]*)>([\s\S]*?)<\/a>/g)]
      .map((m) => {
        if (m[2].startsWith("/")) {
          assert(app.includes(`path="${m[2]}"`) && SSR_ROUTE_COMPONENTS[m[2]], `Broken internal link ${m[2]}`);
        } else {
          assert(/rel="[^"]*sponsored/.test(m[1]), "Partner links should be sponsored");
          assert(directory.includes(decode(m[2])), "Partner URL must match the discount directory");
        }
        return [plain(m[3]), decode(m[2])];
      });
    assert.deepEqual(actualLinks, expectedLinks);
    const faqSource = source.slice(source.indexOf("\n### "));
    const faqs = [...faqSource.matchAll(/### (.+)\n+([\s\S]*?)(?=\n### |\n## |$)/g)]
      .map((m) => ({ q: m[1], a: markdownText(m[2]) }));
    assert.equal(faqs.length, post.faqCount);
    const schema = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .map((m) => JSON.parse(m[1])).filter((s) => s["@type"] === "FAQPage");
    assert.equal(schema.length, 1);
    assert.deepEqual(schema[0].mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
    const visible = [...article.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)]
      .map((m) => ({ q: plain(m[1]), a: plain(m[2]) }));
    assert.deepEqual(visible, faqs);
    const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((tag) => tag.includes(post.hero));
    assert(image?.match(/alt="[^"]+"/));
    const src = image.match(/src="([^"]+)"/)[1];
    assert.deepEqual(fs.readFileSync(path.join("dist/public", src)),
      fs.readFileSync(post.imageFile || `attached_assets/generated_images/${post.hero}.jpg`));
    assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src));
    console.log(`PASS ${post.slug}: exact article, headings, meta, ${expectedLinks.length} verified links, ${post.faqCount} matching FAQs/schema, correct hero/OG and all routes.`);
  }
  assert(directory.includes('code: "THRIVETOOLS"'));
  assert(directory.includes('code: "thrive35 to get $250 Discount"'));
  assert(!markdownText(sources[1]).includes("$250"), "No BlueCube discount amount in guide");
  const listing = (await render("/blog")).html;
  posts.forEach((post) => assert.equal((listing.match(new RegExp(`data-testid="card-post-${post.slug}"`, "g")) || []).length, 1));
})().catch((error) => { console.error(error); process.exitCode = 1; });
