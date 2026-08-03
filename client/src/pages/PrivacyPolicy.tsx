import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fdf6eb] text-[#3d1a28] overflow-x-hidden">
      <SeoHead
        title="Privacy Policy | Thrive Tools"
        description="Privacy Policy for ThriveTools.co — how we collect, use, and protect your information."
        canonical="/privacy-policy"
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

          <h1 className="font-display text-4xl font-bold text-[#3d1a28] mb-2">Privacy Policy</h1>
          <p className="text-[#3d1a28]/45 text-sm mb-10">Last updated: August 2026</p>

          <div className="space-y-8 text-[#3d1a28]/70 leading-relaxed text-base">
            <p>
              Thrive Tools Inc. ("Thrive Tools," "we," "us," or "our") operates thrivetools.co (the "Site"). This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using the Site, you agree to the practices described here.
            </p>

            {/* Section 1 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">1. Information We Collect</h2>
              <p className="font-medium text-[#3d1a28]/80">Information you give us directly:</p>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Your email address, if you submit it through the Protocol Finder quiz or any other signup form on the Site</li>
                <li>The concern/category you select when using the Protocol Finder (e.g. "sleep," "gut"), which we may associate with your email address to send you relevant follow-up content</li>
                <li>Any information you provide if you contact us directly</li>
              </ul>
              <p className="font-medium text-[#3d1a28]/80 pt-1">Information collected automatically:</p>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Standard technical data such as your IP address, browser type, device type, and pages visited, typically gathered through cookies or similar tracking technology used for basic site analytics</li>
                <li>Affiliate and referral tracking data, generated when you click a link to a third-party retailer from our Site (see Section 4)</li>
              </ul>
              <p>We do not knowingly collect financial information, government ID numbers, or other sensitive personal data through this Site.</p>
            </div>

            {/* Section 2 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Send you the protocol/product recommendations you requested through the quiz</li>
                <li>Send occasional emails about new content, discount codes, or products, if you've opted in</li>
                <li>Understand how visitors use the Site so we can improve it</li>
                <li>Comply with legal obligations</li>
              </ul>
              <p>We do not sell your personal information to third parties.</p>
            </div>

            {/* Section 3 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">3. Email Communications</h2>
              <p>
                If you provide your email address, we will only send you commercial or promotional messages with your consent, in accordance with Canada's Anti-Spam Legislation (CASL). Every email we send includes a clear way to unsubscribe. You can opt out at any time by using the unsubscribe link or contacting us directly.
              </p>
            </div>

            {/* Section 4 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">4. Affiliate Links and Third Parties</h2>
              <p>
                This Site contains affiliate links. When you click one of these links and make a purchase, the retailer or their affiliate network (e.g. platforms like Impact, ShareASale, Refersion, or similar) may collect data related to that click and purchase, such as your IP address and browsing activity, in order to attribute the sale to us. We do not control and are not responsible for the privacy practices of these third-party retailers or networks. We encourage you to review their privacy policies directly.
              </p>
              <p>
                We may also use third-party service providers for functions like email delivery and website analytics. These providers only access your information as needed to perform their services and are not permitted to use it for their own purposes.
              </p>
            </div>

            {/* Section 5 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">5. Data Storage and International Transfers</h2>
              <p>
                Some of the third-party services we use (such as our email service provider) may store data on servers located outside of Canada, including in the United States. By using the Site and providing your information, you acknowledge that your data may be processed and stored outside of Canada, where privacy laws may differ from those in your jurisdiction.
              </p>
            </div>

            {/* Section 6 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">6. Data Retention</h2>
              <p>
                We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or until you ask us to delete it, whichever comes first.
              </p>
            </div>

            {/* Section 7 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">7. Your Rights</h2>
              <p>Under Canadian privacy law (PIPEDA), you have the right to:</p>
              <ul className="list-disc list-outside ml-5 space-y-1">
                <li>Know what personal information we hold about you</li>
                <li>Request access to that information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent to future communications at any time</li>
              </ul>
              <p>To exercise any of these rights, contact us using the information in Section 10.</p>
            </div>

            {/* Section 8 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">8. Cookies</h2>
              <p>
                The Site may use cookies or similar technologies to support basic functionality and analytics. You can control or disable cookies through your browser settings, though this may affect how parts of the Site function.
              </p>
            </div>

            {/* Section 9 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">9. Children's Privacy</h2>
              <p>
                This Site is not directed at children, and we do not knowingly collect personal information from anyone under the age of 13 (or the relevant age of consent in your jurisdiction). If you believe a child has provided us with personal information, please contact us and we will delete it.
              </p>
            </div>

            {/* Section 10 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy or wish to exercise your privacy rights, please{" "}
                <a
                  href="/contact"
                  className="text-[#c4622d] underline underline-offset-2 hover:text-[#8b3a1a] transition-colors"
                >
                  contact us here
                </a>.
              </p>
            </div>

            {/* Section 11 */}
            <div className="space-y-3">
              <h2 className="font-display text-xl font-semibold text-[#3d1a28]">11. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last updated" date. Continued use of the Site after changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
