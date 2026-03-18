import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, Search, X } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "@shared/site-routes";

export default function ProductReviews() {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? blogPosts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()) ||
          p.badge.toLowerCase().includes(query.toLowerCase())
      )
    : blogPosts;

  return (
    <PageLayout
      title="Blog"
      subtitle="Evidence based guides for the biohacker, the curious, and the committed."
      seo={{
        title: "Supplement Reviews & Biohacking Guides | Blog — Thrive Tools",
        description: "Evidence-based supplement reviews and biohacking guides by Eden Laraki. Creatine, magnesium, MCT oil, tonic herbs, breathwork, probiotics, and more.",
        canonical: "/blog",
      }}
    >
      {/* Search */}
      <div className="relative mb-8" data-testid="search-container">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-black/30 pointer-events-none" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          data-testid="input-search-blog"
          className="w-full bg-white/60 backdrop-blur-sm border border-black/10 rounded-full pl-11 pr-10 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#c4622d]/40 focus:ring-2 focus:ring-[#c4622d]/10 transition-all"
          onKeyDown={(e) => { if (e.key === "Enter") e.currentTarget.blur(); }}
        />
        {query && (
          <button
            onClick={() => setQuery("")}
            data-testid="button-clear-search"
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/30 hover:text-black/60 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <div className="space-y-8">
        {filtered.length === 0 && (
          <p className="text-center text-black/40 text-sm py-12" data-testid="text-no-results">
            No articles found for "{query}"
          </p>
        )}
        {filtered.map((post) => (
          <Link key={post.id} href={post.href}>
            <div
              className="card-glass rounded-2xl p-6 sm:p-8 hover-elevate transition-all duration-300 group cursor-pointer"
              data-testid={`card-post-${post.id}`}
            >
              <div className="flex items-center gap-3 mb-4 flex-wrap">
                <Badge
                  className={`${post.badgeColor} border rounded-full px-3 py-0.5 text-xs tracking-widest uppercase font-medium`}
                >
                  {post.badge}
                </Badge>
                <span className="flex items-center gap-1.5 text-black/35 text-xs">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {post.date}
                </span>
              </div>
              <h2
                className="font-display text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-[#8b3a1a] transition-colors"
                data-testid={`text-post-title-${post.id}`}
              >
                {post.title}
              </h2>
              <p className="text-black/50 text-sm sm:text-base leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-[#8b3a1a] text-sm font-medium group-hover:text-[#8b3a1a] transition-colors">
                Read Full Review <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
