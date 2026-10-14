const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render } = require("../dist/entry-server.cjs");

const route = "/blog/zentein-discount-code";
const title = "Zentein Discount Code: 30% Off with EDEN30 (2026)";
const h1 = "Zentein Discount Code: Get 30% Off with EDEN30 (2026)";
const decode = (text) => text.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/entry-server.tsx", "client/src/ssr-routes.ts", "server/vite.ts", "shared/site-routes.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `${file}: missing route registration`);
  }
  const result = await render(route);
  const head = Object.values(result.helmet).map((item) => item.toString()).join("\n");
  const article = result.html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article, "Article must render on the server");
  assert.equal((result.html.match(/<h1\b/g) || []).length, 1);
  assert.equal(decode(result.html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? ""), h1);
  assert.equal(decode(head.match(/<title[^>]*>(.*?)<\/title>/)?.[1] ?? ""), title);
  assert(title.length < 60);
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  assert(!/noindex/i.test(head));
  assert(!/PASTE NOTES|Slug suggestion|Hero image:|Meta description:/i.test(result.html));
  assert(article.includes("EDEN30") && article.includes("30% off") && article.includes("October 13, 2027"));
  assert(article.includes('href="https://zentein.ca/?ref=THRIVETOOLSCO"'));
  assert(article.includes("sponsored") && article.includes("Disclosure:"));
  assert(article.includes("<table") && article.includes("<ol"));
  assert(article.includes('href="/discount-codes"'));
  assert(article.includes('href="/blog/best-supplement-discount-codes"'));
  for (const file of ["client/src/App.tsx", "client/src/entry-server.tsx", "client/src/ssr-routes.ts", "shared/site-routes.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes("/blog/best-supplement-discount-codes"), `${file}: required internal destination missing`);
  }
  const sourceOffer = fs.readFileSync("client/src/pages/Discounts.tsx", "utf8").match(/name: "Zentein",([\s\S]*?)\n\s*},/)?.[1];
  assert(sourceOffer?.includes('code: "EDEN30"') && sourceOffer.includes('url: "https://zentein.ca/?ref=THRIVETOOLSCO"'), "Code and referral URL must match the source directory");
  for (const [, href] of article.matchAll(/href="(https?:\/\/[^"]+)"/g)) {
    if (new URL(href).hostname === "zentein.ca") assert.equal(href, "https://zentein.ca/?ref=THRIVETOOLSCO");
  }
  assert(decode(article).includes("it's the largest single discount available for the Canadian clean-protein brand"));
  for (const section of ["Quick answer", "Code details", "What is Zentein?", "What does Zentein sell?", "How to redeem the EDEN30 code", "Which Zentein product should you try first?", "Verdict", "FAQ"]) {
    assert(decode(article).includes(section), `Missing section: ${section}`);
  }
  const images = [...article.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*>/g)];
  assert.equal(images.length, 3, "All three supplied images must appear");
  for (const filename of ["IMG_1534_1791933613410", "IMG_1533_1791933613410", "IMG_1532_1791933613410"]) {
    const image = images.find((match) => match[1].includes(filename));
    assert(image, `Missing supplied image: ${filename}`);
    assert(fs.existsSync(path.join("dist/public", image[1])));
    assert(/alt="[^"]+"/.test(image[0]));
  }
  const ogImage = head.match(/property="og:image" content="([^"]+)"/)?.[1];
  assert(ogImage?.includes("IMG_1534_1791933613410"), "Supplied product photo must be the social image");
  assert.equal((article.match(/Open full-size image:/g) || []).length, 2, "Both labels must open at full size");
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
  const faq = schemas.find((schema) => schema["@type"] === "FAQPage");
  const post = schemas.find((schema) => schema["@type"] === "BlogPosting");
  assert.equal(faq?.mainEntity.length, 8);
  assert(post?.datePublished.startsWith("2026-10-13"));
  const faqSection = article.match(/<h2[^>]*>FAQ<\/h2>([\s\S]*)/)?.[1];
  assert(faqSection, "Visible FAQ section must exist");
  const visibleFaqs = [...faqSection.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3><p[^>]*>([\s\S]*?)<\/p>/g)];
  assert.equal(visibleFaqs.length, 8);
  faq.mainEntity.forEach((item, index) => {
    assert.equal(decode(visibleFaqs[index][1]), item.name);
    assert.equal(decode(visibleFaqs[index][2]), item.acceptedAnswer.text);
  });
  const directory = await render("/discount-codes");
  assert(directory.html.includes(`href="${route}"`), "Existing discount card must link to the article");
  const listing = await render("/blog");
  assert(listing.html.includes(`href="${route}"`), "New article must appear on the blog listing");
  console.log("PASS Zentein article: routes, SEO, source offer, full content, three uploaded images, eight matching FAQs, directory link and blog listing.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
