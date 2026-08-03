import { Link } from "wouter";
import { Mail } from "lucide-react";

function RedditIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.562 8 13.25c0 .687.561 1.248 1.25 1.248.687 0 1.248-.561 1.248-1.249 0-.688-.561-1.249-1.249-1.249zm5.5 0c-.687 0-1.248.561-1.248 1.25 0 .687.561 1.248 1.249 1.248.688 0 1.249-.561 1.249-1.249 0-.687-.562-1.249-1.25-1.249zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 .029-.463.33.33 0 0 0-.464 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.326.326 0 0 0-.232-.095z"/>
    </svg>
  );
}

export default function Footer() {
  return (
    <footer
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "#f8ece0", borderTop: "1px solid rgba(201,122,142,0.2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src="/images/logo-footer.webp" alt="Thrive Tools" className="h-12 w-auto object-contain mb-4" loading="lazy" decoding="async" />
            <p className="text-[#3d1a28]/50 text-sm leading-relaxed max-w-xs">
              Your 2.0 starts here.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.reddit.com/u/ThriveTools?utm_source=share&utm_medium=android_app&utm_name=androidcss&utm_term=1&utm_content=1"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-social-reddit"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(61,26,40,0.06)", border: "1px solid rgba(201,122,142,0.25)" }}
              >
                <RedditIcon className="w-4 h-4 text-[#3d1a28]/50 hover:text-[#3d1a28] transition-colors" />
              </a>
              <a
                href="/contact"
                data-testid="link-social-email"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(61,26,40,0.06)", border: "1px solid rgba(201,122,142,0.25)" }}
              >
                <Mail className="w-4 h-4 text-[#3d1a28]/50 hover:text-[#3d1a28] transition-colors" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-[#3d1a28]/60 text-xs font-semibold uppercase tracking-widest mb-4">Navigate</h4>
            <ul className="space-y-3 text-sm text-[#3d1a28]/45">
              {[
                { label: "Home", href: "/" },
                { label: "Personalized Guidance", href: "/personalized-guidance" },
                { label: "Somatic Reset", href: "/somatic-reset" },
                { label: "Breathwork", href: "/breathwork" },
                { label: "Events", href: "/events" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#c4622d] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#3d1a28]/60 text-xs font-semibold uppercase tracking-widest mb-4">More</h4>
            <ul className="space-y-3 text-sm text-[#3d1a28]/45">
              {[
                { label: "Discount Codes (2026)", href: "/discount-codes" },
                { label: "Blog", href: "/blog" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#c4622d] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t/15 flex flex-wrap items-center justify-between gap-4 text-[#3d1a28]/35 text-xs">
          <span>© 2026 Thrive Tools. All rights reserved.</span>
          <div className="flex flex-wrap gap-5">
            <a href="/privacy-policy" className="hover:text-[#3d1a28]/60 transition-colors">Privacy Policy</a>
            <a href="/terms-of-service" className="hover:text-[#3d1a28]/60 transition-colors">Terms of Service</a>
            <a href="/disclaimer" className="hover:text-[#3d1a28]/60 transition-colors">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
