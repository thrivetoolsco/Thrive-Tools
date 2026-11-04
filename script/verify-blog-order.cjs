const assert = require("node:assert/strict");
const { render } = require("../dist/entry-server.cjs");

(async () => {
  for (const route of ["/blog", "/product-reviews"]) {
    const { html } = await render(route);
    const cards = [...html.matchAll(/data-testid="card-post-([^"]+)"([\s\S]*?)(?=data-testid="card-post-|$)/g)];
    assert(cards.length > 100, "All existing articles must remain listed");
    assert.deepEqual(cards.slice(0, 3).map((card) => card[1]), [
      "intrinsic-prism-discount-code-faq", "contrast-therapy-at-home-guide", "novos-stamina-vascular-trial",
    ], "Latest shared pair must precede older same-day articles");
    assert.equal(cards[3][1], "cold-bh2-longevity-study");
    assert.equal(cards[4][1], "what-is-hrv-how-to-improve-it");
    assert.deepEqual(new Set(cards.slice(5, 7).map((card) => card[1])),
      new Set(["cold-plunge-at-home-guide", "do-grounding-sheets-work"]));
    const dates = cards.map((card) => {
      const date = card[2].match(/\b(?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}, \d{4}\b/);
      assert(date, `Missing display date: ${card[1]}`);
      const timestamp = Date.parse(date[0]);
      assert(Number.isFinite(timestamp), `Invalid date: ${card[1]}`);
      return timestamp;
    });
    dates.forEach((date, i) => {
      if (i) assert(dates[i - 1] >= date, `Out of order: ${cards[i][1]}`);
    });
    assert.equal(new Set(cards.map((card) => card[1])).size, cards.length, "No duplicate cards");
    console.log(`PASS ${route}: ${cards.length} articles newest-first; latest weekly pair ahead of STAMINA, BH2, HRV and older guides.`);
  }
  const source = require("node:fs").readFileSync("client/src/pages/ProductReviews.tsx", "utf8");
  assert(source.includes("? newestPosts.filter(") && source.includes(": newestPosts;"),
    "Search results must preserve the same newest-first order");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
