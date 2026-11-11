const assert = require("node:assert/strict");
const { render } = require("../dist/entry-server.cjs");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const { appendArticleClosing } = require("../shared/article-closing.ts");
const fs = require("node:fs");
const serverSource = fs.readFileSync("server/routes.ts", "utf8");
const staticArticles = new Map([
  ["/blog/miso-myth-biologically-dead-fermented-foods", "MISO_SSR_HTML"],
  ["/blog/kratom-replacing-alcohol-cannabis-social-pivot-2026", "KRATOM_SSR_HTML"],
  ["/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review", "WATERDROP_SSR_HTML"],
]);

const plain = (html) => html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
const expected = [
  "Looking for tools that support healthy aging and recovery? Browse the current offers on our",
  "discount codes page",
  "This article is for general information only and is not medical advice. It reports on a published study and does not recommend any supplement, dose, or treatment.",
];

(async () => {
  for (const post of blogPosts) {
    const template = staticArticles.get(post.href);
    let html;
    if (template) {
      assert(serverSource.includes(`res.send(appendArticleClosing(${template}))`));
      const raw = serverSource.match(new RegExp("const " + template + " = `([\\s\\S]*?)`;"))?.[1];
      assert(raw, template);
      html = appendArticleClosing(raw);
    } else {
      ({ html } = await render(post.href));
    }
    assert.equal((html.match(/data-testid="article-closing-note"/g) || []).length, 1, post.href);
    const note = html.match(/<aside[^>]*data-testid="article-closing-note"[^>]*>([\s\S]*?)<\/aside>/)?.[1];
    assert(note, post.href);
    for (const text of expected) assert(plain(note).includes(text), `${post.href}: ${text}`);
    assert(note.includes('href="https://thrivetools.co/discount-codes"'), post.href);
    assert(!note.includes("S1PC"), post.href);
    assert(html.indexOf('data-testid="article-closing-note"') < html.indexOf("<footer"), post.href);
    const lastArticleEnd = html.lastIndexOf("</article>");
    if (lastArticleEnd !== -1) {
      assert(lastArticleEnd < html.indexOf('data-testid="article-closing-note"'), post.href);
    }
  }
  for (const route of ["/", "/blog", "/product-reviews", "/discount-codes", "/about"]) {
    const { html } = await render(route);
    assert(!html.includes('data-testid="article-closing-note"'), route);
  }
  console.log(`PASS: exact linked closing note on all ${blogPosts.length} blog posts; excluded from other pages.`);
})().catch((error) => { console.error(error); process.exitCode = 1; });
