import { useLocation } from "wouter";
import { blogPosts } from "@shared/site-routes";
import { articleOfferText, articleOffersUrl, articleDisclaimer } from "@shared/article-closing";

const articlePaths = new Set(blogPosts.map((post) => post.href));

export default function ArticleClosingNote() {
  const [location] = useLocation();
  if (!location.startsWith("/blog/") && !articlePaths.has(location)) return null;

  return (
    <aside
      aria-label="Article information"
      data-testid="article-closing-note"
      className="bg-[#fdf6eb] px-4 py-8 text-[#3d1a28] sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-4xl space-y-4 border-t border-[#3d1a28]/15 pt-6 text-sm leading-relaxed">
        <p>
          {articleOfferText}{" "}
          <a
            href={articleOffersUrl}
            className="text-[#8b3a1a] underline underline-offset-4 hover:text-[#c4622d]"
          >
            discount codes page
          </a>
          .
        </p>
        <p>
          {articleDisclaimer}
        </p>
      </div>
    </aside>
  );
}
