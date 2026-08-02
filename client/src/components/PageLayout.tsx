import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import ShareButton from "@/components/ShareButton";
import SeoHead, { SeoProps } from "@/components/SeoHead";
import { ArrowRight } from "lucide-react";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backLabel?: string;
  backHref?: string;
  showShare?: boolean;
  seo?: SeoProps;
}

export default function PageLayout({
  children,
  title,
  subtitle,
  backLabel = "Home",
  backHref = "/",
  showShare = false,
  seo,
}: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fdf6eb] text-[#3d1a28] overflow-x-hidden">
      {seo && <SeoHead {...seo} />}
      <Navigation />

      {title && (
        <section
          className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 30%, #f8ece0 0%, #fdf6eb 40%, #fdf6eb 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div
              className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full opacity-30"
              style={{ background: "radial-gradient(circle, #c4622d 0%, transparent 70%)", filter: "blur(50px)" }}
            />
          </div>

          <div className="max-w-4xl mx-auto relative z-10">
            <Link href={backHref}>
              <Button
                variant="outline"
                size="sm"
                className="rounded-full border-[#3d1a28]/15 text-[#3d1a28]/60 bg-transparent mb-8 text-xs"
                data-testid="link-back"
              >
                <ArrowLeft className="w-3 h-3 mr-2" /> {backLabel}
              </Button>
            </Link>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4" data-testid="text-page-title">
              <span className="text-gradient-rose">{title}</span>
            </h1>
            {subtitle && (
              <p className="text-[#3d1a28]/60 text-lg sm:text-xl max-w-2xl leading-relaxed font-medium" style={{ textWrap: "balance" } as React.CSSProperties} data-testid="text-page-subtitle">
                {subtitle}
              </p>
            )}
            {showShare && (
              <div className="mt-5">
                <ShareButton />
              </div>
            )}
          </div>
        </section>
      )}

      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #fdf6eb 0%, #f8ece0 50%, #fdf6eb 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          {children}

          {showShare && (
            <div className="mt-12 rounded-2xl border border-[#c4622d]/25 bg-[#c4622d]/5 px-6 py-7 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <p className="text-xs font-mono font-semibold tracking-widest uppercase text-[#c4622d]">Not sure where to start?</p>
                <p className="font-display text-lg font-bold text-[#3d1a28]">Take the 30-second protocol finder</p>
                <p className="text-sm text-[#3d1a28]/55">Pick your biggest concern — get 3 vetted products with discount codes built in.</p>
              </div>
              <a
                href="/discount-codes#protocol-finder"
                className="inline-flex items-center gap-2 bg-[#c4622d] hover:bg-[#8b3a1a] text-white font-semibold text-sm px-6 py-3 rounded-full transition-colors whitespace-nowrap flex-shrink-0"
              >
                Find my protocol <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
