import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import {
  Menu,
  X,
  ChevronDown,
} from "lucide-react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Discount Codes (2026)", href: "/discount-codes" },
  { label: "Personalized Guidance", href: "/personalized-guidance" },
  { label: "Somatic Reset", href: "/somatic-reset" },
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
          ? "rgba(253,246,240,0.97)"
          : "rgba(253,246,240,0.88)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled ? "1px solid rgba(201,122,142,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20">
        <div className="flex items-center justify-between h-20 sm:h-28">
          <Link href="/" className="flex-shrink-0 group absolute left-1/2 -translate-x-1/2" data-testid="link-logo" aria-label="Thrive Tools — Home">
            <div className="flex flex-col items-center gap-1 transition-transform duration-500 group-hover:scale-105 select-none">

              {/* ── Mark: concentric lotus rings with 6-spoke radial ── */}
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="lgNav" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%"   stopColor="#e8a4b8"/>
                    <stop offset="45%"  stopColor="#c97a8e"/>
                    <stop offset="100%" stopColor="#d4a867"/>
                  </linearGradient>
                </defs>
                {/* outer ring */}
                <circle cx="17" cy="17" r="15.5" stroke="url(#lgNav)" strokeWidth="0.75"/>
                {/* inner ring */}
                <circle cx="17" cy="17" r="9.5"  stroke="url(#lgNav)" strokeWidth="0.6"/>
                {/* centre dot */}
                <circle cx="17" cy="17" r="2.8"  fill="url(#lgNav)" opacity="0.75"/>
                {/* 6 radial spokes from inner to outer ring */}
                {[0,60,120,180,240,300].map((deg, i) => {
                  const r = (deg * Math.PI) / 180;
                  return (
                    <line key={i}
                      x1={17 + 9.5  * Math.cos(r)} y1={17 + 9.5  * Math.sin(r)}
                      x2={17 + 15.5 * Math.cos(r)} y2={17 + 15.5 * Math.sin(r)}
                      stroke="url(#lgNav)" strokeWidth="0.75"
                    />
                  );
                })}
              </svg>

              {/* ── Wordmark ── */}
              <div className="text-center leading-none">
                <div
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontStyle: "italic",
                    fontWeight: 700,
                    fontSize: "clamp(14px, 2.8vw, 20px)",
                    letterSpacing: "0.04em",
                    background: "linear-gradient(135deg, #e8a4b8 0%, #c97a8e 45%, #d4a867 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: 1,
                  }}
                >
                  Thrive
                </div>
                <div
                  style={{
                    fontSize: "clamp(6.5px, 1.1vw, 8.5px)",
                    letterSpacing: "0.42em",
                    textTransform: "uppercase",
                    color: "rgba(61,26,40,0.42)",
                    fontWeight: 500,
                    marginTop: 2,
                    paddingLeft: "0.42em",
                  }}
                >
                  Tools
                </div>
              </div>
            </div>
          </Link>

          <div className="ml-auto">
            <button
              data-testid="button-menu"
              className="relative w-10 h-10 flex items-center justify-center rounded-lg text-[#3d1a28]/70 hover:text-[#3d1a28] hover:bg-[#3d1a28]/5 transition-all duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(253,246,240,0.99)" }}
      >
        <div className="border-t/15 py-4 px-6 overflow-y-auto max-h-[75vh]">
          <div className="flex flex-col gap-1">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <>
                    <button
                      className="text-[#3d1a28]/60 hover:text-[#3d1a28] text-sm uppercase tracking-[0.12em] font-medium flex items-center justify-between w-full text-left py-3 px-2 rounded-lg hover:bg-[#3d1a28]/5 transition-all duration-200"
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
                            className="block text-[#3d1a28]/50 hover:text-[#3d1a28] text-xs py-2.5 px-3 rounded-lg hover:bg-[#3d1a28]/5 transition-all duration-200 tracking-wide"
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
                        ? "text-[#c97a8e] bg-[#c97a8e]/10"
                        : "text-[#3d1a28]/60 hover:text-[#3d1a28] hover:bg-[#3d1a28]/5"
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
