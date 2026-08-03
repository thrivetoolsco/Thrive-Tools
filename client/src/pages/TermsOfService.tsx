import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#fdf6eb] text-[#3d1a28] overflow-x-hidden">
      <SeoHead
        title="Terms of Service | Thrive Tools"
        description="Terms of Service for ThriveTools.co — rules for using the site, affiliate disclosures, and legal information."
        canonical="/terms-of-service"
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

          <h1 className="font-display text-4xl font-bold text-[#3d1a28] mb-2">Terms of Service</h1>
          <p className="text-[#3d1a28]/45 text-sm mb-10">Last updated: August 2026</p>

          <div className="space-y-8 text-[#3d1a28]/70 leading-relaxed text-base">
            <p>
              Welcome to thrivetools.co (the "Site"), operated by Thrive Tools Inc. ("Thrive Tools," "we," "us," or "our"). By accessing or using this Site, you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Site.
            </p>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">1. Use of the Site</h2>
              <p>You may use the Site for personal, non-commercial purposes. You agree not to:</p>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Use the Site in any way that violates applicable law</li>
                <li>Attempt to interfere with the Site's security or normal functioning</li>
                <li>Scrape, copy, or republish substantial portions of the Site's content without permission</li>
                <li>Use the Site to harass, harm, or impersonate others</li>
              </ul>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">2. No Medical Advice</h2>
              <p>
                Nothing on this Site, including the Protocol Finder quiz, blog content, or any product recommendation, constitutes medical advice, diagnosis, or treatment. Content is provided for general informational and educational purposes only. Always consult a qualified healthcare provider before beginning any new supplement, herb, device, or wellness practice, particularly if you are pregnant, nursing, taking medication, or managing an existing health condition. Full detail is available in our{" "}
                <Link href="/disclaimer" className="text-[#c4622d] underline underline-offset-2 hover:text-[#8b3a1a] transition-colors">
                  Disclaimer
                </Link>.
              </p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">3. Affiliate Relationships</h2>
              <p>
                Thrive Tools participates in affiliate marketing programs. This means we may earn a commission on qualifying purchases made through links on this Site, at no additional cost to you. Product recommendations reflect our own use and opinions, but the presence of an affiliate relationship should be understood as disclosed throughout the Site, including on the Protocol Finder, blog posts, and the discount codes page.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">4. Intellectual Property</h2>
              <p>
                All content on this Site, including text, graphics, the Protocol Finder tool, and blog posts, is the property of Thrive Tools Inc. unless otherwise noted, and is protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written permission.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">5. Third-Party Links</h2>
              <p>
                This Site contains links to third-party websites and retailers, including affiliate links. We do not control and are not responsible for the content, products, services, or privacy practices of these third parties. Your use of any third-party site is at your own risk and subject to that site's own terms.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">6. Disclaimer of Warranties</h2>
              <p>
                The Site and its content are provided "as is" and "as available," without warranties of any kind, whether express or implied. We do not guarantee that the Site will be uninterrupted, error-free, or that any product recommendation will produce any particular result for you.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by law, Thrive Tools Inc. and its owner(s) shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Site, reliance on its content, or any transaction with a third-party retailer linked from the Site.
              </p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">8. Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Thrive Tools Inc. from any claims, damages, or expenses arising from your use of the Site or violation of these Terms.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">9. Governing Law</h2>
              <p>
                These Terms are governed by the laws of the Province of British Columbia and the federal laws of Canada applicable therein, without regard to conflict of law principles.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">10. Changes to These Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the Site after changes are posted constitutes acceptance of the updated Terms. We recommend checking this page periodically.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">11. Contact Us</h2>
              <p>
                If you have questions about these Terms, please contact us at:{" "}
                <a
                  href="mailto:thrivetools.co@gmail.com"
                  className="text-[#c4622d] underline underline-offset-2 hover:text-[#8b3a1a] transition-colors"
                >
                  thrivetools.co@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
