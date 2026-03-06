import { useState } from "react";
import { Link, useLocation } from "wouter";
import logoImg from "@assets/image_1772756046665.png";
import { Button } from "@/components/ui/button";
import {
  ShoppingCart,
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "My Top Picks", href: "/discounts-coupon-codes" },
  { label: "Personalized Guidance", href: "/personalized-guidance" },
  { label: "Quantum Healing", href: "/quantum-healing" },
  { label: "Breathwork", href: "/breathwork" },
  {
    label: "Retreats & Workshops",
    href: "#",
    children: [
      { label: "Blossoming Bliss Transformation", href: "/retreats-workshops/blossoming-bliss" },
      { label: "Spiritual Nutrition", href: "/retreats-workshops/spiritual-nutrition" },
      { label: "Mescaline Wisdom", href: "/retreats-workshops/mescaline-wisdom" },
      { label: "Inner Silence", href: "/retreats-workshops/inner-silence" },
    ],
  },
  { label: "Events", href: "/events" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ background: "rgba(13,5,20,0.92)", backdropFilter: "blur(16px)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          <button data-testid="button-cart" className="relative text-white/70 hover:text-white transition-colors">
            <ShoppingCart className="w-5 h-5" />
          </button>

          <Link href="/" className="flex-shrink-0" data-testid="link-logo">
            <img src={logoImg} alt="Thrive Tools" className="h-14 sm:h-16 w-auto object-contain" />
          </Link>

          <div className="hidden lg:flex items-center gap-5">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`text-xs text-white/60 hover:text-white transition-colors tracking-wide uppercase font-medium flex items-center gap-1 ${location === item.href ? "text-white" : ""}`}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-xs text-white/60 hover:text-white transition-colors tracking-wide uppercase font-medium ${location === item.href ? "text-white" : ""}`}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 min-w-[220px] rounded-md py-2"
                    style={{
                      background: "rgba(20,10,30,0.98)",
                      border: "1px solid rgba(201,122,142,0.15)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2 text-xs text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        data-testid={`link-nav-${child.label.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            data-testid="button-mobile-menu"
            className="lg:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div
          className="lg:hidden border-t border-white/5 py-4 px-6 max-h-[80vh] overflow-y-auto"
          style={{ background: "rgba(13,5,20,0.98)" }}
        >
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="text-white/60 hover:text-white text-sm uppercase tracking-wide font-medium flex items-center gap-1 w-full text-left py-1"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-3 h-3 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    {openDropdown === item.label && (
                      <div className="pl-4 mt-1 space-y-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block text-white/50 hover:text-white text-xs py-1"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="text-white/60 hover:text-white text-sm uppercase tracking-wide font-medium block py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
