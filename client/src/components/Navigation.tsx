import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const logoImg = "/logo.webp";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Discount Codes (2026)", href: "/discounts-coupon-codes" },
  { label: "Personalized Guidance", href: "/personalized-guidance" },
  { label: "Somatic Reset", href: "/quantum-healing" },
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
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg shadow-black/20" : ""
      }`}
      style={{
        background: scrolled
          ? "rgba(13,5,20,0.95)"
          : "rgba(13,5,20,0.75)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20 sm:h-28">
          <div className="hidden lg:block w-10" />

          <Link href="/" className="flex-shrink-0 group absolute left-1/2 -translate-x-1/2" data-testid="link-logo">
            <img
              src={logoImg}
              alt="Thrive Tools"
              className="h-16 sm:h-24 w-auto max-w-[260px] sm:max-w-[400px] object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-1 ml-auto">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={`relative px-3 py-2 text-[11px] tracking-[0.15em] uppercase font-medium flex items-center gap-1 transition-colors duration-200 ${
                      location === item.href
                        ? "text-[#c97a8e]"
                        : "text-white/55 hover:text-white"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                    <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-[11px] tracking-[0.15em] uppercase font-medium transition-colors duration-200 block ${
                      location === item.href
                        ? "text-[#c97a8e]"
                        : "text-white/55 hover:text-white"
                    }`}
                    data-testid={`link-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    {item.label}
                    {location === item.href && (
                      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c97a8e] rounded-full" />
                    )}
                  </Link>
                )}

                {item.children && openDropdown === item.label && (
                  <div
                    className="absolute top-full left-0 mt-1 min-w-[240px] rounded-xl py-2 shadow-xl shadow-black/30"
                    style={{
                      background: "rgba(20,10,30,0.98)",
                      border: "1px solid rgba(201,122,142,0.12)",
                      backdropFilter: "blur(20px)",
                    }}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        className="block px-5 py-2.5 text-xs text-white/55 hover:text-white hover:bg-white/5 transition-all duration-200 tracking-wide"
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
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-lg text-white/70 hover:text-white hover:bg-white/5 transition-all duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(13,5,20,0.98)" }}
      >
        <div className="border-t border-white/5 py-4 px-6 overflow-y-auto max-h-[75vh]">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="text-white/60 hover:text-white text-sm uppercase tracking-[0.12em] font-medium flex items-center justify-between w-full text-left py-3 px-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                      onClick={() => setOpenDropdown(openDropdown === item.label ? null : item.label)}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openDropdown === item.label ? "rotate-180" : ""}`} />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-200 ${
                        openDropdown === item.label ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <div className="pl-4 pb-2 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block text-white/45 hover:text-white text-xs py-2.5 px-3 rounded-lg hover:bg-white/5 transition-all duration-200 tracking-wide"
                            onClick={() => setMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-sm uppercase tracking-[0.12em] font-medium block py-3 px-2 rounded-lg transition-all duration-200 ${
                      location === item.href
                        ? "text-[#c97a8e] bg-[#c97a8e]/5"
                        : "text-white/60 hover:text-white hover:bg-white/5"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
