const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render } = require("../dist/entry-server.cjs");

const route = "/blog/achedaway-cupper-guide";
const affiliateUrl = "https://achedaway.com/?ref=THRIVETOOLS";
const source = fs.readFileSync("attached_assets/Pasted--Achedaway-Cupper-Review-Smart-Cupping-Therapy-With-Red_1792598380070.txt", "utf8");
const decode = (text) => text.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
const normalize = (text) => text.replace(/\s+/g, " ").trim();
const plainHtml = (html) => normalize(decode(html.replace(/<!--[\s\S]*?-->/g, "").replace(/<\/(?:p|h[1-6]|li|th|td|tr|section|div|table)>/g, " ").replace(/<[^>]*>/g, "")));
const plainMarkdown = (markdown) => normalize(markdown
  .replace(/^\|[-| ]+\|\s*$/gm, "")
  .replace(/^#{1,6} /gm, "")
  .replace(/^(?:- |\d+\. )/gm, "")
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
  .replace(/\*/g, "")
  .replace(/\|/g, " "));

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route`);
  }
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
  const result = await render(route);
  const head = Object.values(result.helmet).map((item) => item.toString()).join("\n");
  const article = result.html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article, "Server-rendered article required");
  assert.equal((result.html.match(/<h1\b/g) || []).length, 1);
  assert.equal(plainHtml(result.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? ""), source.split("\n")[0].slice(2));
  assert.equal(plainHtml(article), plainMarkdown(source.split("\n").slice(1).join("\n")), "Every article word and section must match the supplied source in order");
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const faqSchemas = schemas.filter((schema) => schema["@type"] === "FAQPage");
  assert.equal(faqSchemas.length, 1);
  const suppliedFaqs = [...source.split("## Achedaway Cupper FAQ\n")[1].split("## Bottom line")[0].matchAll(/### (.+)\n([\s\S]*?)(?=\n### |$)/g)];
  const visibleFaqs = [...article.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3><p[^>]*>([\s\S]*?)<\/p>/g)];
  assert.equal(suppliedFaqs.length, 8);
  assert.equal(visibleFaqs.length, 8);
  assert.equal(faqSchemas[0].mainEntity.length, 8);
  faqSchemas[0].mainEntity.forEach((item, index) => {
    assert.equal(item.name, suppliedFaqs[index][1]);
    assert.equal(item.acceptedAnswer.text, suppliedFaqs[index][2].trim());
    assert.equal(plainHtml(visibleFaqs[index][1]), item.name);
    assert.equal(plainHtml(visibleFaqs[index][2]), item.acceptedAnswer.text);
  });
  assert(article.includes("<table"));
  assert.equal((article.match(/<tr\b/g) || []).length, 7);
  const links = [...article.matchAll(/<a\b[^>]*href="([^"]+)"[^>]*>/g)];
  const suppliedLinks = [...source.matchAll(/\[[^\]]+\]\((https?:\/\/[^)]+)\)/g)];
  assert.equal(links.length, suppliedLinks.length);
  links.forEach(([tag, href]) => {
    assert.equal(href, affiliateUrl);
    assert(tag.includes('rel="noopener noreferrer sponsored"'));
  });
  const heroTag = [...result.html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).find((tag) => tag.includes("0_IMG_1577_1792601729628"));
  assert(heroTag);
  assert(heroTag.includes('alt="Achedaway Cupper — The Smart Cupping Therapy Massager"'));
  const hero = heroTag.match(/src="([^"]+)"/)[1];
  assert(fs.existsSync(path.join("dist/public", hero)));
  assert(head.match(/property="og:image" content="([^"]+)"/)?.[1].endsWith(hero));
  assert((await render("/blog")).html.includes(`href="${route}"`));
  const discounts = await render("/discount-codes");
  assert(!/achedaway|cupper/i.test(discounts.html), "No Achedaway directory card may be added");
  assert(!/achedaway|cupper/i.test(fs.readFileSync("client/src/pages/Discounts.tsx", "utf8")));
  console.log("PASS Achedaway guide: complete source text, all headings/lists/table, eight matching FAQ answers and schema, supplied hero + OG, exact affiliate links, routing/listing and no discount-directory entry.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
