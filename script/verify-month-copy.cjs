const assert = require("node:assert/strict");
require("tsx/cjs");
const {
  currentMonthCopy, currentCopyMonth, monthCopyHtml, nextCopyMonthAt, isMonthCopyPage,
} = require("../shared/month-copy.ts");
const { render, SSR_ROUTE_COMPONENTS } = require("../dist/entry-server.cjs");
const RealDate = Date;

async function verifyOpenTabRollover() {
  const { startMonthCopy } = require("../client/src/lib/month-copy.ts");
  const saved = Object.fromEntries(["window", "document", "NodeFilter", "MutationObserver", "setTimeout", "clearTimeout"].map((key) => [key, global[key]]));
  let time = "2026-12-01T06:59:59Z";
  let scheduled;
  let observe;
  const text = { data: "Active October 2026", parentElement: { closest: () => null } };
  const attributes = new Map([["content", "October offer"]]);
  const element = { getAttribute: (key) => attributes.get(key) ?? null, setAttribute: (key, value) => attributes.set(key, value) };
  const events = new Map();
  const listen = (key, callback) => events.set(key, callback);
  let stopped = false;
  try {
    global.Date = class extends RealDate {
      constructor(...args) { super(...(args.length ? args : [time])); }
    };
    global.NodeFilter = { SHOW_TEXT: 4 };
    global.window = { location: { pathname: "/discount-codes" }, addEventListener: listen, removeEventListener() {} };
    global.document = {
      documentElement: {},
      createTreeWalker: () => { let read = false; return { nextNode: () => read ? null : (read = true, text) }; },
      querySelectorAll: () => [element],
      addEventListener: listen, removeEventListener() {},
    };
    global.MutationObserver = class {
      constructor(callback) { observe = callback; }
      observe() {}
      disconnect() { stopped = true; }
    };
    global.setTimeout = (callback, delay) => { scheduled = { callback, delay }; return 1; };
    global.clearTimeout = () => {};
    const cleanup = startMonthCopy();
    assert.equal(text.data, "Active November 2026");
    assert.equal(attributes.get("content"), "November offer");
    assert.equal(scheduled.delay, 1000);
    time = "2026-12-01T07:00:00Z";
    scheduled.callback();
    assert.equal(text.data, "Active December 2026", "Existing tab must advance without reloading");
    assert.equal(attributes.get("content"), "December offer");
    assert(scheduled.delay <= 86_400_000);
    text.data = "New October article"; // A new React render or expanded section.
    observe();
    await Promise.resolve();
    assert.equal(text.data, "New December article");
    time = "2027-01-01T07:00:00Z";
    events.get("focus")();
    assert.equal(text.data, "New January article", "Suspended tabs must catch up on focus");
    global.window.location.pathname = "/about";
    text.data = "October outside requested pages";
    observe();
    await Promise.resolve();
    assert.equal(text.data, "October outside requested pages");
    cleanup();
    assert(stopped);
  } finally {
    global.Date = RealDate;
    for (const [key, value] of Object.entries(saved)) {
      if (value === undefined) delete global[key]; else global[key] = value;
    }
  }
}

(async () => {
  const before = new Date("2026-12-01T06:59:59Z");
  const after = new Date("2026-12-01T07:00:00Z");
  assert.equal(currentCopyMonth(before), "November");
  assert.equal(currentCopyMonth(after), "December");
  assert.equal(currentMonthCopy("Active October 2026", before), "Active November 2026");
  assert.equal(currentMonthCopy("Active October 2026", after), "Active December 2026");
  assert.equal(nextCopyMonthAt(before), after.getTime());
  assert.equal(nextCopyMonthAt(new Date("2026-12-31T20:00:00Z")), Date.parse("2027-01-01T07:00:00Z"));
  assert.equal(currentCopyMonth(new Date("2027-01-01T07:00:00Z")), "January");
  for (let month = 0; month < 12; month++) {
    const now = new Date(Date.UTC(2027, month, 15, 12));
    assert.equal(currentMonthCopy("October", now), currentCopyMonth(now));
  }
  const html = '<time datetime="2026-10-13">October 13, 2026</time>' +
    '<a href="/October-guide" title="October guide">October</a>' +
    '<meta content="October guide"/><img src="/October.webp" alt="October image"/>' +
    '<script>const month = "October";</script><style>.October { color: red; }</style>' +
    '<script type="application/ld+json">{"text":"October 13","url":"https://example.com/October"}</script>';
  const changed = monthCopyHtml(html, after);
  assert(changed.includes('datetime="2026-10-13">December 13, 2026'));
  assert(changed.includes('href="/October-guide" title="December guide">December'));
  assert(changed.includes('src="/October.webp" alt="December image"'));
  assert(changed.includes('content="December guide"'));
  assert(changed.includes('const month = "October"'));
  assert(changed.includes('.October {'));
  assert(changed.includes('"text":"December 13","url":"https://example.com/October"'));
  for (const route of ["/blog", "/blog/red-light-therapy-science-benefits-devices", "/product-reviews", "/discount-codes", "/lumebox-discount-code", "/biohacking-discount-codes"]) {
    assert(isMonthCopyPage(route));
  }
  for (const route of ["/", "/about", "/api/contact"]) assert(!isMonthCopyPage(route));

  // A long-running server must use the request date, not the module-load date.
  for (const [time, month] of [["2026-11-08T12:00:00Z", "November"], ["2026-12-01T07:00:00Z", "December"], ["2027-01-01T07:00:00Z", "January"]]) {
    global.Date = class extends RealDate {
      constructor(...args) { super(...(args.length ? args : [time])); }
      static now() { return RealDate.parse(time); }
    };
    const discounts = (await render("/discount-codes")).html;
    assert(discounts.includes(`Discount Codes — Active ${month} 2026`));
    const zentein = await render("/blog/zentein-discount-code");
    assert(zentein.html.includes(`${month} 13, 2027`), "Owner-approved expiration copy follows month");
    const head = Object.values(zentein.helmet).map((item) => item.toString()).join("");
    assert(!/\bOctober\b/.test(head));
    const schema = [...head.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)].map((m) => JSON.parse(m[1]));
    assert(schema.some((item) => item["@type"] === "FAQPage"));
    const blog = (await render("/blog")).html;
    assert(blog.includes(`${month} 28, 2026`));
    assert.equal(blog.match(/data-testid="card-post-([^"]+)"/)[1], "does-leela-quantum-tech-work");
  }
  global.Date = RealDate;
  let checked = 0;
  for (const route of Object.keys(SSR_ROUTE_COMPONENTS).filter(isMonthCopyPage)) {
    const { html, helmet } = await render(route);
    const head = Object.values(helmet).map((item) => item.toString()).join("");
    assert(!/\bOctober\b/.test(html.replace(/<[^>]+>/g, "")), `October text remains: ${route}`);
    assert(!/\bOctober\b/.test(head), `October metadata remains: ${route}`);
    checked++;
  }
  await verifyOpenTabRollover();
  console.log(`PASS monthly copy: ${checked} scoped routes, all 12 months, Creston midnight rollover, year boundary, open-tab/React-update/focus rollover, historical/expiration copy, FAQ metadata, unchanged URLs/assets/machine dates and blog order.`);
})().catch((error) => { global.Date = RealDate; console.error(error); process.exitCode = 1; });
