import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface PageLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  backLabel?: string;
  backHref?: string;
}

export default function PageLayout({ children, title, subtitle, backLabel = "Home", backHref = "/" }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-[#fff0f0] text-[#3d1a28] overflow-x-hidden">
      <Navigation />

      {title && (
        <section
          className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
          style={{
            background: "radial-gradient(ellipse 80% 50% at 50% 30%, #ffe8e8 0%, #fff0f0 40%, #fff0f0 100%)",
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
              <p className="text-[#3d1a28]/60 text-lg sm:text-xl max-w-3xl leading-relaxed font-medium" data-testid="text-page-subtitle">
                {subtitle}
              </p>
            )}
          </div>
        </section>
      )}

      <section
        className="py-16 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #fff0f0 0%, #ffe8e8 50%, #fff0f0 100%)" }}
      >
        <div className="max-w-4xl mx-auto">
          {children}
        </div>
      </section>

      <Footer />
    </div>
  );
}
