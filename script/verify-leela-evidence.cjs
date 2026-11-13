const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const { currentMonthCopy } = require("../shared/month-copy.ts");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const route = "/blog/does-leela-quantum-tech-work";
const brief = fs.readFileSync("attached_assets/Pasted-share-this-in-as-blog-post-in-the-blog-page-Does-Leela-_1794507636594.txt", "utf8");
const normalize = (s) => s.replace(/\s+/g, " ").trim();
const plain = (s) => normalize(s.replace(/<!--[\s\S]*?-->/g, "")
  .replace(/<\/(?:p|h[1-6]|li|section|div|td|th|tr)>/g, " ")
  .replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
  .replace(/&#x27;|&#39;|&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">"));
const markdown = (s) => normalize(s.replace(/^#{1,6}\s+/gm, "")
  .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*/g, ""));

(async () => {
  assert.equal(blogPosts.filter((p) => p.href === route).length, 1);
  assert(SSR_ROUTE_COMPONENTS[route]);
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), file);
  }
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((v) => v.toString()).join("\n");
  assert.equal(plain(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)[1]), brief.match(/^# (.+)$/m)[1]);
  assert(head.includes(`https://thrivetools.co${route}`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)[1];
  const text = plain(article);
  const body = brief.slice(brief.indexOf("\n**The short answer:") + 1).split("\n---")[0];
  for (const block of body.split(/\n\s*\n/)) {
    if (block.startsWith("[Image:")) continue;
    const parts = block.startsWith("|")
      ? block.split("\n").filter((line) => !/^\|[-|]+\|$/.test(line)).flatMap((line) => line.split("|").slice(1, -1))
      : [block];
    for (const part of parts) {
      const expected = currentMonthCopy(markdown(part));
      assert(text.includes(expected), `Missing or changed supplied text: ${expected}`);
    }
  }
  const faqs = body.split("## Frequently asked questions")[1].trim().split(/\n### /)
    .map((block) => {
      const [q, ...a] = block.replace(/^### /, "").split("\n");
      return { q, a: normalize(a.join(" ")) };
    });
  assert.equal(faqs.length, 9);
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const faq = schemas.find((s) => s["@type"] === "FAQPage");
  assert.deepEqual(faq.mainEntity.map((f) => ({ q: f.name, a: f.acceptedAnswer.text })), faqs);
  const image = html.match(/<img[^>]*src="([^"]*IMG_1738[^"]*)"[^>]*>/)[0];
  assert(image.includes('alt="Gold Leela Quantum Bloc on a table beside a phone and flowers"'));
  assert.deepEqual(fs.readFileSync(path.join("dist/public", image.match(/src="([^"]+)"/)[1])), fs.readFileSync("attached_assets/IMG_1738_1794507643476.jpeg"));
  assert.equal((html.match(/<img\b[^>]*IMG_1738/g) || []).length, 1);
  assert.equal((article.match(/<tbody\b[^>]*>[\s\S]*?<\/tbody>/)[0].match(/<tr\b/g) || []).length, 4);
  assert(article.includes('href="/blog/leela-quantum-tech-guide"'));
  const affiliates = [...article.matchAll(/<a\b[^>]*href="https:\/\/leelaq\.com\/\?ref=ThriveTools"[^>]*>/g)];
  assert(affiliates.length >= 3);
  affiliates.forEach(([a]) => assert(a.includes('rel="sponsored noopener noreferrer"')));
  assert.equal((html.match(/data-testid="article-closing-note"/g) || []).length, 1);
  assert(!text.includes("[Image:"));
  for (const listing of ["/blog", "/product-reviews"]) {
    const result = await render(listing);
    assert.equal((result.html.match(/data-testid="card-post-does-leela-quantum-tech-work"/g) || []).length, 1);
  }
  console.log("PASS Leela evidence article: exact supplied prose/table, nine matching FAQs, uploaded hero, affiliate links, all routes, listed once, standard closing.");
})().catch((e) => { console.error(e); process.exitCode = 1; });
