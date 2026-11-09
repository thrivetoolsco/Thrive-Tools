const assert = require("node:assert/strict");
const { render } = require("../dist/entry-server.cjs");
require("tsx/cjs");
const { blogPosts } = require("../shared/site-routes.ts");
const originalDates = new Map(blogPosts.map((post) => [post.id, Date.parse(post.date)]));

(async () => {
  for (const route of ["/blog", "/product-reviews"]) {
    const { html } = await render(route);
    const cards = [...html.matchAll(/data-testid="card-post-([^"]+)"([\s\S]*?)(?=data-testid="card-post-|$)/g)];
    assert(cards.length > 100, "All existing articles must remain listed");
    assert.deepEqual(cards.slice(0, 7).map((card) => card[1]), [
      "aged-garlic-s1pc-muscle-aging-study", "vanadyl-sulfate-senolytic-study", "bone-loading-piezo1-lifespan-study", "leela-quantum-tech-guide", "intrinsic-prism-discount-code-faq", "contrast-therapy-at-home-guide", "novos-stamina-vascular-trial",
    ], "Latest shared aged garlic article must precede older articles");
    assert.equal(cards[7][1], "cold-bh2-longevity-study");
    assert.equal(cards[8][1], "what-is-hrv-how-to-improve-it");
    assert.deepEqual(new Set(cards.slice(9, 11).map((card) => card[1])),
      new Set(["cold-plunge-at-home-guide", "do-grounding-sheets-work"]));
    const dates = cards.map((card) => {
      const timestamp = originalDates.get(card[1]);
      assert(Number.isFinite(timestamp), `Invalid date: ${card[1]}`);
      return timestamp;
    });
    dates.forEach((date, i) => {
      if (i) assert(dates[i - 1] >= date, `Out of order: ${cards[i][1]}`);
    });
    assert.equal(new Set(cards.map((card) => card[1])).size, cards.length, "No duplicate cards");
    console.log(`PASS ${route}: ${cards.length} articles newest-first; aged garlic study ahead of older guides.`);
  }
  const source = require("node:fs").readFileSync("client/src/pages/ProductReviews.tsx", "utf8");
  assert(source.includes("? newestPosts.filter(") && source.includes(": newestPosts;"),
    "Search results must preserve the same newest-first order");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
