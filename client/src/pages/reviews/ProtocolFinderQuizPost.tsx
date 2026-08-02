import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
import ProtocolQuiz from "@/components/ProtocolQuiz";

export default function ProtocolFinderQuizPost() {
  return (
    <PageLayout
      showShare
      title="The Protocol Finder"
      subtitle="Tell me what's going on — I'll show you where to start"
      seo={{
        title: "The Protocol Finder: What Should You Actually Take? | Thrive Tools",
        description:
          "Stop scrolling the supplement list and wondering. Pick your biggest health concern and get 3 vetted picks with discount codes built in — a 30-second quiz from Eden at Thrive Tools.",
        canonical: "https://thrivetools.co/blog/protocol-finder-quiz",
        ogType: "article",
        datePublished: "2026-08-02",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-10">

        {/* Badge + date */}
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Tools
          </Badge>
          <span className="text-black/40 text-sm">August 2, 2026</span>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-black/70 leading-relaxed">
          <p className="text-lg text-black/75">
            The question I get more than any other isn't "is this supplement worth it?" It's "where do I even start?"
          </p>
          <p>
            I've been building the discount code list for years now — 45+ vetted products across supplements, longevity tech, gut health, breathwork, clean cookware. And every time I share it, someone comes back a few days later and says: I went through the whole thing and I still don't know what I should actually be taking.
          </p>
          <p>
            That's a real problem. A long list isn't a protocol. Knowing there are good options isn't the same as knowing which ones apply to you.
          </p>
          <p>
            So I built this. Not another article. Not another "top 10" ranking. A tool that just asks what's actually going on — the thing that's been nagging you — and hands back the three things from my list that I'd try first if I were in your position. With the codes already attached.
          </p>
          <p>
            It takes 30 seconds. Pick the concern that feels most true right now. Everything else can wait.
          </p>
        </div>

        <div className="section-divider" />

        {/* Embedded quiz */}
        <ProtocolQuiz />

        <div className="section-divider" />

        {/* Closing */}
        <div className="space-y-4 text-black/70 leading-relaxed">
          <p>
            The three products in each stack aren't the only things worth taking — they're the ones I'd start with. The ones that, in my experience, move the needle fastest for that specific concern before you layer anything else on top.
          </p>
          <p>
            If you want to go deeper or browse everything across every category — all 45+ products, full context on why I trust each one, and links to the longer science breakdowns on the blog — the full list is below.
          </p>
          <p>
            <a
              href="/discount-codes"
              className="inline-flex items-center gap-1.5 text-[#c4622d] font-semibold underline underline-offset-2 hover:text-[#8b3a1a] transition-colors"
            >
              Browse the full list of 45+ vetted discounts → <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </p>
        </div>

      </div>
    </PageLayout>
  );
}
