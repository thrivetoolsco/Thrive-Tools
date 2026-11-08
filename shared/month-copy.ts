// Owner-approved display policy: every written "October" on blog/offer pages
// follows the current month. Keep source dates intact for ordering and URLs.
export const MONTH_COPY_TIME_ZONE = "America/Creston";

export function currentCopyMonth(now = new Date()): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    timeZone: MONTH_COPY_TIME_ZONE,
  }).format(now);
}

export function isMonthCopyPage(path: string): boolean {
  const pathname = path.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  return pathname === "/blog" || pathname.startsWith("/blog/") ||
    pathname === "/product-reviews" || pathname.includes("discount-code");
}

export function currentMonthCopy(text: string, now = new Date()): string {
  const month = currentCopyMonth(now);
  return text.replace(/https?:\/\/[^\s"'<>]+|\bOctober\b/g,
    (match) => match === "October" ? month : match);
}

// Creston stays on UTC-7 throughout the year.
export function nextCopyMonthAt(now = new Date()): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    year: "numeric", month: "numeric", timeZone: MONTH_COPY_TIME_ZONE,
  }).formatToParts(now);
  const year = Number(parts.find((part) => part.type === "year")!.value);
  const month = Number(parts.find((part) => part.type === "month")!.value);
  return Date.UTC(year, month, 1, 7);
}

export function monthCopyHtml(html: string, now = new Date()): string {
  // Limit replacements to text and human-readable attributes. Never rewrite
  // links, assets, IDs, machine dates, styles, or executable scripts.
  return html.replace(
    /<!--[\s\S]*?-->|<script\b[^>]*>[\s\S]*?<\/script\s*>|<style\b[^>]*>[\s\S]*?<\/style\s*>|<[^>]+>|[^<]+/gi,
    (chunk) => {
      if (chunk.startsWith("<!--") || /^<style\b/i.test(chunk)) return chunk;
      if (/^<script\b/i.test(chunk)) {
        return /\btype=["']application\/ld\+json["']/i.test(chunk)
          ? currentMonthCopy(chunk, now) : chunk;
      }
      if (chunk.startsWith("<")) {
        return chunk.replace(/\b(content|title|alt|aria-label)=(["'])(.*?)\2/gi,
          (_match, name, quote, value) => `${name}=${quote}${currentMonthCopy(value, now)}${quote}`);
      }
      return currentMonthCopy(chunk, now);
    },
  );
}
