const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");

const posts = [
  {
    route: "/blog/cold-plunge-at-home-guide",
    brief: "attached_assets/Pasted--PROMPT-Cold-Plunge-at-Home-AEO-guide-post-TASK-Create-_1793250288735.txt",
    title: "Cold Plunge at Home: Beginner Temperature, Time & Benefits",
    category: "Wellness Tech",
    hero: "cold-plunge-at-home-hero",
    keywords: ["cold plunge", "BlueCubeBaths", "thrive35", "verified"],
    brand: "BlueCubeBaths",
    code: "thrive35",
    url: "https://bluecubebaths.com/?ref=CM-ZEsM_ayIJbh",
  },
  {
    route: "/blog/do-grounding-sheets-work",
    brief: "attached_assets/Pasted--PROMPT-Do-Grounding-Sheets-Work-AEO-question-post-TASK_1793250309620.txt",
    title: "Do Grounding Sheets Work? What the Earthing Studies Show",
    category: "Sleep & Recovery",
    hero: "grounding-sheets-hero",
    keywords: ["grounding sheets", "Earthing Harmony", "THRIVENOW", "verified"],
    brand: "Earthing Harmony",
    code: "THRIVENOW",
    url: "https://earthingharmony.com/?ref=hxaqgkso",
  },
];
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const plainHtml = (html) => normalize(decode(html.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote)>/g, " ").replace(/<[^>]*>/g, "")));
const plainMarkdown = (markdown) => normalize(markdown.replace(/^#{1,6} /gm, "")
  .replace(/^- /gm, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*/g, ""));
const disclosure = "Affiliate disclosure: This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.";
const app = fs.readFileSync("client/src/App.tsx", "utf8");
const directory = fs.readFileSync("client/src/pages/Discounts.tsx", "utf8");

(async () => {
  const listing = (await render("/blog")).html;
  for (const post of posts) {
    const source = fs.readFileSync(post.brief, "utf8").split("### ARTICLE BODY (render as written, H1/H2s as marked)")[1]
      .split("**Final report:**")[0].trim();
    const h1 = source.split("\n")[0].slice(2);
    const body = plainMarkdown(source.split("\n").slice(1).join("\n"));
    for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
      assert(fs.readFileSync(file, "utf8").includes(post.route), `${file}: ${post.route} missing`);
    }
    assert(app.indexOf(`path="${post.route}"`) < app.indexOf("<Route component={NotFound}"));
    const { html, helmet } = await render(post.route);
    const head = Object.values(helmet).map((item) => item.toString()).join("\n");
    assert.equal((html.match(/<h1\b/g) || []).length, 1);
    assert.equal(plainHtml(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), h1);
    assert.equal(plainHtml(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), post.title);
    assert(head.includes(`rel="canonical" href="https://thrivetools.co${post.route}"`));
    const description = decode(head.match(/name="description" content="([^"]+)"/)[1]);
    post.keywords.forEach((word) => assert(description.includes(word), `Missing meta keyword: ${word}`));
    const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
    assert(article, "Missing article");
    const text = plainHtml(article);
    assert(text.includes(disclosure), "Must reuse existing affiliate disclosure");
    assert(text.indexOf(disclosure) < text.indexOf("What "), "Disclosure must be near top");
    const intro = "I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal research.";
    assert.equal(text.slice(text.indexOf(intro)), body, "Full article must match supplied wording and order");
    assert(plainHtml(html).includes(post.category));
    assert.deepEqual(
      [...article.matchAll(/<h2\b[^>]*>([\s\S]*?)<\/h2>/g)].map((m) => plainHtml(m[1])),
      [...source.matchAll(/^## (.+)$/gm)].map((m) => m[1]),
    );
    const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
      .map((m) => JSON.parse(m[1])).filter((item) => item["@type"] === "FAQPage");
    assert.equal(schemas.length, 1);
    const suppliedFaqs = [...source.split("## FAQ\n")[1].matchAll(/\*\*([^\n]+)\*\*\n([\s\S]*?)(?=\n\*\*|$)/g)];
    const visibleFaqs = [...article.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3>\s*<p[^>]*>([\s\S]*?)<\/p>/g)];
    assert.equal(suppliedFaqs.length, 5);
    assert.equal(visibleFaqs.length, 5);
    assert.equal(schemas[0].mainEntity.length, 5);
    schemas[0].mainEntity.forEach((faq, i) => {
      assert.equal(faq.name, suppliedFaqs[i][1]);
      assert.equal(faq.acceptedAnswer.text, plainMarkdown(suppliedFaqs[i][2]));
      assert.equal(plainHtml(visibleFaqs[i][1]), faq.name);
      assert.equal(plainHtml(visibleFaqs[i][2]), faq.acceptedAnswer.text);
    });
    const internalLinks = [...source.matchAll(/\]\((\/[^)]+)\)/g)].map((m) => m[1]);
    for (const href of new Set(internalLinks)) {
      assert(article.includes(`href="${href}"`), `Missing supplied link ${href}`);
      assert(app.includes(`path="${href}"`), `Missing client route ${href}`);
      assert(SSR_ROUTE_COMPONENTS[href], `Missing server route ${href}`);
    }
    const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((tag) => tag.includes(post.hero));
    assert(image?.match(/alt="[^"]+"/), "Hero must have alt text");
    const src = image.match(/src="([^"]+)"/)[1];
    assert(fs.existsSync(path.join("dist/public", src)));
    assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src), "Hero and OG must match");
    assert(listing.includes(`href="${post.route}"`), "Must appear in blog listing");
    const offer = directory.match(new RegExp(`name: "${post.brand}",([\\s\\S]*?)\\n\\s*},`))[1];
    assert(offer.includes(`url: "${post.url}"`));
    assert(offer.includes(`code: "${post.code}`));
    assert(!text.includes("$") && !text.match(/\d+%\s*off/), "No partner discount amount in article");
    console.log(`PASS ${post.route}: exact copy, headings, metadata, category, 5 visible/schema FAQs, hero/OG, partner facts, routes and internal links.`);
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
