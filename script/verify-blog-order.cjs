const assert = require("node:assert/strict");
const { render } = require("../dist/entry-server.cjs");

(async () => {
  for (const route of ["/blog", "/product-reviews"]) {
    const { html } = await render(route);
    const cards = [...html.matchAll(/data-testid="card-post-([^"]+)"([\s\S]*?)(?=data-testid="card-post-|$)/g)];
    assert(cards.length > 100, "All existing articles must remain listed");
    assert.equal(cards[0][1], "cold-bh2-longevity-study", "Latest shared BH2 article must be first");
    assert.equal(cards[1][1], "what-is-hrv-how-to-improve-it");
    assert.deepEqual(new Set(cards.slice(2, 4).map((card) => card[1])),
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
    console.log(`PASS ${route}: ${cards.length} articles newest-first; BH2 first, then HRV and the two recent guides.`);
  }
  const source = require("node:fs").readFileSync("client/src/pages/ProductReviews.tsx", "utf8");
  assert(source.includes("? newestPosts.filter(") && source.includes(": newestPosts;"),
    "Search results must preserve the same newest-first order");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
