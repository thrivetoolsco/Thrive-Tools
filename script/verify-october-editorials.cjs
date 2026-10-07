const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const ts = require("typescript");
const { render } = require("../dist/entry-server.cjs");

const routes = [
  ["/blog/emr-tek-discount-code", "EMR-TEK Discount Code (EDEN17306): Verified 2026", "EMR-TEK Discount Code: EDEN17306 (Verified 2026)", 4, "EMR-TEK"],
  ["/blog/lumebox-discount-code", "Lumebox Discount Code (ThriveTools): Verified 2026", "Lumebox Discount Code: ThriveTools (Verified 2026)", 3, "Lumebox"],
  ["/blog/silver-fern-brand-guide", "Silver Fern Brand Guide: Probiotics & Gut Health 2026", "Silver Fern, Explained: A Gut-Health Brand Guide", 4],
  ["/blog/infrared-sauna-vs-traditional-sauna", "Infrared Sauna vs Traditional Sauna: Which Is Better?", "Infrared Sauna vs Traditional Sauna: An Honest Comparison", 4, "Therasage"],
  ["/blog/how-prebiotics-and-probiotics-work", "How Prebiotics and Probiotics Work Together (2026)", "How Prebiotics and Probiotics Work Together", 4],
  ["/blog/lumebox-discount-code-faq", "Lumebox Discount Code FAQ: Verified Code & Answers 2026", "Lumebox Discount Code FAQ (Verified 2026)", 6, "Lumebox"],
  ["/blog/therasage-discount-code-faq", "Therasage Discount Code FAQ: Verified Code & Answers 2026", "Therasage Discount Code FAQ (Verified 2026)", 6, "Therasage"],
];
const registryFiles = [
  "client/src/App.tsx",
  "client/src/entry-server.tsx",
  "client/src/ssr-routes.ts",
  "shared/site-routes.ts",
  "server/vite.ts",
];

function escapeHtml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}

function sourceOffers() {
  const offers = new Map();
  const text = fs.readFileSync("client/src/pages/Discounts.tsx", "utf8");
  const source = ts.createSourceFile("Discounts.tsx", text, ts.ScriptTarget.Latest, true, ts.ScriptKind.TSX);
  function visit(node) {
    if (ts.isObjectLiteralExpression(node)) {
      const fields = {};
      for (const prop of node.properties) {
        if (ts.isPropertyAssignment(prop) && ts.isIdentifier(prop.name) && ts.isStringLiteral(prop.initializer)) {
          fields[prop.name.text] = prop.initializer.text;
        }
      }
      if (fields.name && fields.url) offers.set(fields.name, fields);
    }
    ts.forEachChild(node, visit);
  }
  visit(source);
  return offers;
}

async function main() {
  const offers = sourceOffers();
  const images = new Set();
  for (const [route, title, h1, faqCount, brand] of routes) {
    for (const file of registryFiles) {
      assert(fs.readFileSync(file, "utf8").includes(`"${route}"`), `${route} missing from ${file}`);
    }
    const result = await render(route);
    const article = result.html.match(/<article\b[^>]*>(.*?)<\/article>/s)?.[1];
    assert(article, `${route}: article body missing`);
    const head = Object.values(result.helmet).map((tag) => tag.toString()).join("\n");
    assert(head.includes(`>${escapeHtml(title)}</title>`), `${route}: wrong title`);
    assert(title.length <= 60, `${route}: title exceeds 60 characters`);
    assert.equal((result.html.match(/<h1\b/g) || []).length, 1, `${route}: must have one H1`);
    assert(result.html.includes(escapeHtml(h1)), `${route}: wrong H1`);
    assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`), `${route}: canonical missing`);
    assert(!/noindex/i.test(head), `${route}: must be indexable`);
    assert.equal((article.match(/href="\/discount-codes"/g) || []).length, 1, `${route}: expected one directory link in the article`);
    assert(result.html.includes("October 2026"), `${route}: wrong display month`);
    const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>(.*?)<\/script>/gs)].map((m) => JSON.parse(m[1]));
    const posting = schemas.find((s) => s["@type"] === "BlogPosting");
    const weeklyFaq = route === "/blog/lumebox-discount-code-faq" || route === "/blog/therasage-discount-code-faq";
    assert.equal(posting?.datePublished, weeklyFaq ? "2026-10-07" : "2026-10-01", `${route}: wrong publication date`);
    const faq = schemas.find((s) => s["@type"] === "FAQPage");
    assert.equal(faq.mainEntity.length, faqCount, `${route}: wrong FAQ count`);
    const visibleFaqs = [...article.matchAll(/<h3\b[^>]*>(.*?)<\/h3>\s*<p\b[^>]*>(.*?)<\/p>/gs)]
      .map((m) => ({ q: m[1].replace(/<[^>]*>/g, ""), a: m[2].replace(/<[^>]*>/g, "") }));
    for (const question of faq.mainEntity) {
      const visible = visibleFaqs.find((entry) => entry.q === escapeHtml(question.name));
      assert(visible, `${route}: FAQ question not visible`);
      assert.equal(visible.a, escapeHtml(question.acceptedAnswer.text), `${route}: visible FAQ answer differs from schema`);
    }
    if (weeklyFaq) {
      assert(!/\d+(?:\.\d+)?\s*%|\$\s*\d/.test(article), `${route}: unverified savings or program terms published`);
      assert(article.includes(`href="${route.replace(/-faq$/, "")}"`), `${route}: companion guide link missing`);
    }
    const image = head.match(/property="og:image" content="([^"]+)"/)?.[1];
    const uploadedHeroes = {
      "/blog/lumebox-discount-code-faq": "IMG_1510_1791408438077",
      "/blog/therasage-discount-code-faq": "IMG_1465_1791408567098",
    };
    const imagePrefix = uploadedHeroes[route] ?? "hero-";
    assert(image?.startsWith(`https://thrivetools.co/assets/${imagePrefix}`), `${route}: featured image missing`);
    const asset = image.replace("https://thrivetools.co/", "");
    assert(fs.existsSync(path.join("dist/public", asset)), `${route}: featured asset not built`);
    assert(result.html.includes(`src="/${asset}"`), `${route}: image not visible in article`);
    images.add(image);
    if (brand) {
      const offer = offers.get(brand);
      assert(offer?.code && offer?.url, `${route}: source offer absent`);
      assert(result.html.includes(escapeHtml(offer.code)), `${route}: code differs from source`);
      assert(result.html.includes(`href="${escapeHtml(offer.url)}"`), `${route}: URL differs from source`);
    }
    if (route.includes("silver-fern")) {
      const silver = [...offers.values()].find((item) => /^silver[\s-]*fern(?: brand)?$/i.test(item.name));
      if (!silver) {
        assert(article.includes("silver-fern-referral-pending"), "Silver Fern must show pending referral state until its source offer exists");
        assert(!/href="https?:\/\/[^"]*silverfern/i.test(article), "No guessed Silver Fern referral URL");
      } else {
        assert(article.includes(escapeHtml(silver.code)) && article.includes(`href="${escapeHtml(silver.url)}"`), "Silver Fern must use its source-listed offer");
      }
    }
    if (route.includes("prebiotics")) {
      assert(result.html.includes("24.1%") && result.html.includes("33.4-fold"), "Verified study figures missing");
      assert(result.html.includes("did not test prebiotics or probiotics"), "Study limitation missing");
      assert(result.html.includes("published September 30"), "Original publication date missing");
    }
    console.log(`PASS ${route}: SSR, SEO, FAQ, hero and source offers`);
  }
  assert.equal(images.size, routes.length, "Each post must have its own featured image");
  console.log(`All ${routes.length} editorial posts passed production-render checks.`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});