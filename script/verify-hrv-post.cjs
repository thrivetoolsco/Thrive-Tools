const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");

const route = "/blog/what-is-hrv-how-to-improve-it";
const brief = fs.readFileSync("attached_assets/Pasted-And-here-s-the-full-Replit-prompt-to-paste-in-exactly-a_1793647345736.txt", "utf8");
const source = brief.split("ARTICLE TEXT (place exactly as written):")[1].trim();
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const plainHtml = (html) => normalize(decode(html.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|aside|blockquote)>/g, " ").replace(/<[^>]*>/g, "")));
const plainMarkdown = (markdown) => normalize(markdown.replace(/^#{1,6} /gm, "")
  .replace(/^- /gm, "").replace(/^---$/gm, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*/g, ""));

(async () => {
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing HRV route`);
  }
  assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((item) => item.toString()).join("\n");
  const title = "What Is HRV and How to Improve It";
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plainHtml(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), title);
  assert.equal(plainHtml(head.match(/<title[^>]*>(.*?)<\/title>/)[1]), title);
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article, "Article must render");
  assert.equal(plainHtml(article), plainMarkdown(source.split("\n").slice(1).join("\n")),
    "Entire body must match supplied article, with no extra prose or omitted words");
  for (const level of [2, 3]) {
    const actual = [...article.matchAll(new RegExp(`<h${level}\\b[^>]*>([\\s\\S]*?)<\\/h${level}>`, "g"))].map((m) => plainHtml(m[1]));
    const expected = [...source.matchAll(new RegExp(`^${"#".repeat(level)} (.+)$`, "gm"))].map((m) => m[1]);
    assert.deepEqual(actual, expected, `H${level} headings must match`);
  }
  const expectedLinks = [...source.matchAll(/\[([^\]]+)\]\((\/[^)]+)\)/g)].map((m) => ({ text: m[1], href: m[2] }));
  const actualLinks = [...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g)].map((m) => ({ text: plainHtml(m[2]), href: decode(m[1]) }));
  assert.equal(expectedLinks.length, 3);
  assert.deepEqual(actualLinks, expectedLinks);
  for (const { href } of expectedLinks) {
    assert(app.includes(`path="${href}"`), `Missing browser route ${href}`);
    assert(SSR_ROUTE_COMPONENTS[href], `Missing server route ${href}`);
  }
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .map((m) => JSON.parse(m[1])).filter((item) => item["@type"] === "FAQPage");
  assert.equal(schemas.length, 1);
  const sourceFaqs = [...source.split("## Frequently Asked Questions")[1].split("## The Bottom Line")[0]
    .matchAll(/### (.+)\n([\s\S]*?)(?=\n### |$)/g)];
  assert.equal(schemas[0].mainEntity.length, 4);
  schemas[0].mainEntity.forEach((faq, i) => {
    assert.equal(faq.name, sourceFaqs[i][1]);
    assert.equal(faq.acceptedAnswer.text, plainMarkdown(sourceFaqs[i][2]));
  });
  assert(article.includes("<hr"), "Keep supplied horizontal rule");
  assert.equal((article.match(/<em>/g) || []).length, 2, "Keep both final italic paragraphs");
  const image = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((tag) => tag.includes("IMG_1651_1793647366679"));
  assert(image?.match(/alt="[^"]+"/), "Use uploaded hero with descriptive alt");
  const src = image.match(/src="([^"]+)"/)[1];
  assert(fs.existsSync(path.join("dist/public", src)));
  assert.deepEqual(fs.readFileSync(path.join("dist/public", src)), fs.readFileSync("attached_assets/IMG_1651_1793647366679.webp"),
    "Uploaded hero must not be replaced or altered");
  assert(head.match(/property="og:image" content="([^"]+)"/)[1].endsWith(src));
  assert((await render("/blog")).html.includes(`href="${route}"`));
  console.log("PASS HRV: unchanged full article, exact headings and three links, medical disclaimer, uploaded hero/OG, four FAQs/schema, routes and blog listing.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
