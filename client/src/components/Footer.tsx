import { Link } from "wouter";
import logoImg from "@assets/image_1772756046665.png";
import { Mail, Instagram } from "lucide-react";
import { SiTiktok } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      className="py-16 px-4 sm:px-6 lg:px-8"
      style={{ background: "#f5eaf5", borderTop: "1px solid rgba(201,122,142,0.2)" }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <img src={logoImg} alt="Thrive Tools" className="h-12 w-auto object-contain mb-4" />
            <p className="text-[#3d1a28]/50 text-sm leading-relaxed max-w-xs">
              Your 2.0 starts here.
            </p>
            <div className="flex items-center gap-3 mt-5">
              <a
                href="https://www.tiktok.com/@thrivetools.co?_r=1&_t=ZS-94RwhlhXkNl"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-social-tiktok"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(61,26,40,0.06)", border: "1px solid rgba(201,122,142,0.25)" }}
              >
                <SiTiktok className="w-4 h-4 text-[#3d1a28]/50 hover:text-[#3d1a28] transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/thrivetools.co?igsh=cnZ6MWRxbzJkaXNt"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-social-instagram"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-colors"
                style={{ background: "rgba(61,26,40,0.06)", border: "1px solid rgba(201,122,142,0.25)" }}
              >
                <Instagram className="w-4 h-4 text-[#3d1a28]/50 hover:text-[#3d1a28] transition-colors" />
              </a>
              <a
                href="mailto:Thrivetools.co@gmail.com"
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
                  <Link href={item.href} className="hover:text-[#c97a8e] transition-colors">
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
                { label: "Products Reviews", href: "/product-reviews" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="hover:text-[#c97a8e] transition-colors">
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
            <a href="#" className="hover:text-[#3d1a28]/60 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#3d1a28]/60 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
