import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, CalendarDays, Search, X } from "lucide-react";
import { useState } from "react";
import { blogPosts } from "@shared/site-routes";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

function EmailCapture() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const { mutate, isPending, isError } = useMutation({
    mutationFn: () => apiRequest("POST", "/api/newsletter", { email }),
    onSuccess: () => { setDone(true); setEmail(""); },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) mutate();
  };

  return (
    <div className="mt-16 card-glass rounded-2xl px-8 py-10 text-center" data-testid="section-email-capture">
      <h2 className="font-display text-2xl sm:text-3xl font-bold text-[#3d1a28] mb-2">
        New post? You&apos;ll know first.
      </h2>
      {done ? (
        <p className="text-[#c4622d] font-medium mt-4 text-sm" data-testid="text-subscribe-success">
          You&apos;re in. We&apos;ll let you know when something new drops.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto" data-testid="form-subscribe">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            data-testid="input-subscribe-email"
            className="flex-1 bg-white/70 border border-black/10 rounded-full px-5 py-3 text-sm text-black placeholder-black/30 focus:outline-none focus:border-[#c4622d]/40 focus:ring-2 focus:ring-[#c4622d]/10 transition-all"
          />
          <Button
            type="submit"
            disabled={isPending}
            data-testid="button-notify-me"
            className="btn-gradient-rose text-white border-0 rounded-full px-7 text-sm font-semibold tracking-wide h-auto py-3 shrink-0"
          >
            {isPending ? "Sending…" : "Notify Me"}
          </Button>
        </form>
      )}
      {isError && (
        <p className="text-red-500 text-xs mt-2" data-testid="text-subscribe-error">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}

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

      <EmailCapture />
    </PageLayout>
  );
}
