import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-[#fdf6eb] text-[#3d1a28] overflow-x-hidden">
      <SeoHead
        title="Disclaimer | Thrive Tools"
        description="Medical and affiliate disclaimer for ThriveTools.co — this content is for informational purposes only and is not medical advice."
        canonical="/disclaimer"
      />
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Link href="/" data-testid="link-back-home">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-[#3d1a28]/15 text-[#3d1a28]/60 bg-transparent mb-10 text-xs"
            >
              <ArrowLeft className="w-3 h-3 mr-2" /> Home
            </Button>
          </Link>

          <h1 className="font-display text-4xl font-bold text-[#3d1a28] mb-10">Disclaimer</h1>

          <div className="space-y-6 text-[#3d1a28]/70 leading-relaxed text-base">
            <p>
              This content is for informational purposes only and isn't medical advice. I'm not a doctor, and nothing here is intended to diagnose, treat, cure, or prevent any condition.
            </p>
            <p>
              Talk to a healthcare provider before starting anything new, especially if you're pregnant, nursing, on medication, or managing a health condition.
            </p>
            <p>
              Some links on this site are affiliate links — if you buy through them, I may earn a commission at no extra cost to you. I only recommend things I've actually used or genuinely believe in.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
