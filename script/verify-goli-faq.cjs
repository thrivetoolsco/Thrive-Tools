const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { render } = require("../dist/entry-server.cjs");

const route = "/blog/goli-discount-code-faq";
const decode = (text) => text.replace(/<[^>]*>/g, "").replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#x27;|&#39;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">");

(async () => {
  for (const file of ["client/src/App.tsx", "client/src/ssr-routes.ts", "client/src/entry-server.tsx", "shared/site-routes.ts", "server/vite.ts"]) {
    assert(fs.readFileSync(file, "utf8").includes(route), `Missing route: ${file}`);
  }
  const app = fs.readFileSync("client/src/App.tsx", "utf8");
  assert(app.indexOf(`path="${route}"`) < app.indexOf("<Route component={NotFound}"));
  const offer = fs.readFileSync("client/src/pages/Discounts.tsx", "utf8").match(/name: "Goli",([\s\S]*?)\n\s*},/)?.[1];
  assert(offer?.includes('code: "g-745207ab6b"'));
  assert(offer.includes('url: "https://go.goli.com/g-745207ab6b"'));
  assert(offer.includes("10% off"));
  const { html, helmet } = await render(route);
  const head = Object.values(helmet).map((item) => item.toString()).join("\n");
  const title = decode(head.match(/<title[^>]*>(.*?)<\/title>/)?.[1] ?? "");
  assert.equal(title, "Goli Discount Code FAQ: Verified Code & Answers 2026");
  assert(title.length < 60);
  assert.equal((html.match(/<h1\b/g) || []).length, 1);
  assert.equal(decode(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? ""), "Goli Discount Code FAQ (Verified 2026)");
  const description = head.match(/name="description" content="([^"]+)"/)?.[1] ?? "";
  for (const phrase of ["Goli discount code", "g-745207ab6b", "10% off", "verified"]) assert(description.includes(phrase));
  assert(head.includes(`rel="canonical" href="https://thrivetools.co${route}"`));
  const article = html.match(/<article\b[^>]*>([\s\S]*?)<\/article>/)?.[1];
  assert(article);
  assert(article.includes("Discount Codes"));
  assert(article.includes("14 years of personal research"));
  assert(decode(article).includes("ThriveTools is a Goli affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you."));
  assert(article.includes('href="https://go.goli.com/g-745207ab6b"') && article.includes("sponsored"));
  assert(!/verify the slug|PROMPT|signup completed|dashboard vs|commission rates/i.test(article));
  const hero = article.match(/<img\b[^>]*src="([^"]+)"[^>]*>/)?.[1];
  const og = head.match(/property="og:image" content="([^"]+)"/)?.[1];
  assert(hero?.includes("goli-discount-code-faq-hero"));
  assert(og?.endsWith(hero), "Hero and OG must use the same image");
  assert(fs.existsSync(path.join("dist/public", hero)));
  const schemas = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
  const faqs = schemas.filter((s) => s["@type"] === "FAQPage");
  assert.equal(faqs.length, 1);
  assert.equal(faqs[0].mainEntity.length, 8);
  const section = article.match(/<h2[^>]*>FAQ<\/h2>([\s\S]*)/)?.[1] ?? "";
  const visible = [...section.matchAll(/<h3[^>]*>([\s\S]*?)<\/h3><p[^>]*>([\s\S]*?)<\/p>/g)];
  assert.equal(visible.length, 8);
  const brief = fs.readFileSync("attached_assets/Pasted--Goli-Discount-Code-FAQ-save-only-Replit-prompt-built-2_1792595258008.txt", "utf8");
  const supplied = [...brief.split("## FAQ\n")[1].split("**Final report:**")[0].matchAll(/\*\*([^*\n]+\?)\*\*\n([\s\S]*?)(?=\n\n\*\*|$)/g)];
  assert.equal(supplied.length, 8);
  faqs[0].mainEntity.forEach((item, i) => {
    assert.equal(decode(visible[i][1]), item.name);
    assert.equal(decode(visible[i][2]), item.acceptedAnswer.text);
    assert.equal(item.name, supplied[i][1]);
    const expected = supplied[i][2].trim().replace(/\*\*/g, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(" (verify the slug in the route files and use the real one)", "");
    assert.equal(item.acceptedAnswer.text, expected, `Answer ${i + 1} must match the supplied copy`);
  });
  for (const target of ["/discount-codes", "/goli-discount-code"]) {
    assert(article.includes(`href="${target}"`));
    const destination = await render(target);
    assert(!destination.html.includes("404 Page Not Found"));
  }
  assert((await render("/blog")).html.includes(`href="${route}"`));
  console.log("PASS Goli FAQ: all route registrations, source offer, SEO, hero + OG, eight exact supplied/visible/schema answers, disclosure, internal links and blog listing.");
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
