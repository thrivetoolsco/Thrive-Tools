import { currentMonthCopy, isMonthCopyPage, nextCopyMonthAt } from "@shared/month-copy";

type CopyRecord = { original: string; applied: string };

export function startMonthCopy(): () => void {
  const textRecords = new WeakMap<Text, CopyRecord>();
  const attributeRecords = new WeakMap<Element, Map<string, CopyRecord>>();
  let stopped = false;
  let queued = false;
  let timer: ReturnType<typeof setTimeout>;

  function applyText(node: Text, now: Date) {
    const value = node.data;
    let record = textRecords.get(node);
    if (!record || value !== record.applied) {
      record = { original: value, applied: value };
      textRecords.set(node, record);
    }
    const next = currentMonthCopy(record.original, now);
    if (value !== next) node.data = next;
    record.applied = next;
  }

  function refresh() {
    if (stopped || !isMonthCopyPage(window.location.pathname)) return;
    const now = new Date();
    const walker = document.createTreeWalker(document.documentElement, NodeFilter.SHOW_TEXT);
    let node: Node | null;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest("style, noscript, textarea")) continue;
      if (parent.closest("script") && !parent.matches('script[type="application/ld+json"]')) continue;
      applyText(node as Text, now);
    }
    for (const element of Array.from(document.querySelectorAll("[content], [title], [alt], [aria-label]"))) {
      let records = attributeRecords.get(element);
      if (!records) attributeRecords.set(element, records = new Map());
      for (const name of ["content", "title", "alt", "aria-label"]) {
        const value = element.getAttribute(name);
        if (value === null) continue;
        let record = records.get(name);
        if (!record || value !== record.applied) {
          record = { original: value, applied: value };
          records.set(name, record);
        }
        const next = currentMonthCopy(record.original, now);
        if (value !== next) element.setAttribute(name, next);
        record.applied = next;
      }
    }
  }

  function queueRefresh() {
    if (queued || stopped) return;
    queued = true;
    queueMicrotask(() => { queued = false; refresh(); });
  }

  function armTimer() {
    clearTimeout(timer);
    const now = new Date();
    // Long months exceed setTimeout's maximum; check daily until the boundary.
    timer = setTimeout(() => {
      refresh();
      armTimer();
    }, Math.min(86_400_000, Math.max(1, nextCopyMonthAt(now) - now.getTime())));
  }

  const observer = new MutationObserver(queueRefresh);
  observer.observe(document.documentElement, {
    subtree: true, childList: true, characterData: true, attributes: true,
    attributeFilter: ["content", "title", "alt", "aria-label"],
  });
  const onVisibility = () => { refresh(); armTimer(); };
  window.addEventListener("popstate", queueRefresh);
  window.addEventListener("focus", onVisibility);
  document.addEventListener("visibilitychange", onVisibility);
  refresh();
  armTimer();
  return () => {
    stopped = true;
    observer.disconnect();
    clearTimeout(timer);
    window.removeEventListener("popstate", queueRefresh);
    window.removeEventListener("focus", onVisibility);
    document.removeEventListener("visibilitychange", onVisibility);
  };
}
