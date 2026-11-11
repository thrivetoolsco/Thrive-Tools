export const articleOfferText =
  "Looking for tools that support healthy aging and recovery? Browse the current offers on our";
export const articleOffersUrl = "https://thrivetools.co/discount-codes";
export const articleDisclaimer =
  "This article is for general information only and is not medical advice. It reports on a published study and does not recommend any supplement, dose, or treatment.";

export function appendArticleClosing(html: string): string {
  if (!html.includes("</article>")) throw new Error("Article closing requires an article element");
  return html.replace("</article>", `</article>
    <aside aria-label="Article information" data-testid="article-closing-note" style="max-width:896px;margin:32px auto;padding:24px;border-top:1px solid rgba(61,26,40,0.15);font-size:14px;line-height:1.7;color:#3d1a28">
      <p>${articleOfferText} <a href="${articleOffersUrl}" style="color:#8b3a1a;text-decoration:underline">discount codes page</a>.</p>
      <p>${articleDisclaimer}</p>
    </aside>`);
}
