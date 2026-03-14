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
          {/* ── LOGO — Montserrat Light, single line, interlocked OO ── */}
          <Link href="/" className="flex-shrink-0 group absolute left-1/2 -translate-x-1/2" data-testid="link-logo" aria-label="Thrive Tools">
            {/*
              ── LOGO SYSTEM ──
              Font: Montserrat 400 at 15px → cap-height ≈ 10.5px
              Circles: r=5.2 → diameter ≈ 10.4px  (matches cap-height)
              SVG viewBox 0 0 24 10.4 — circles flush to top & bottom edges
              alignItems:"center" + marginTop nudge aligns circles with caps optically
              THRIVE: vivid cherry rose  #d91558
              TOOLS:  vivid amber gold   #c47e00
            */}
            <div
              className="transition-opacity duration-300 group-hover:opacity-70 select-none"
              style={{ display: "inline-flex", alignItems: "center", gap: 0, lineHeight: 1 }}
            >
              {/* ── THRIVE — vivid rose ── */}
              <span style={{
                fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(11px, 2.2vw, 15px)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#d91558",
                lineHeight: 1,
                paddingRight: "0.22em",
              }}>
                THRIVE
              </span>

              {/* ── T (of TOOLS) — vivid gold ── */}
              <span style={{
                fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(11px, 2.2vw, 15px)",
                letterSpacing: "0",
                textTransform: "uppercase",
                color: "#c47e00",
                lineHeight: 1,
              }}>
                T
              </span>

              {/*
                ── INTERLOCKED OO ──
                r=5.2, d=8  →  O1 cx=6.2  O2 cx=14.2
                Intersection x = (6.2+14.2)/2 = 10.2
                y_int = sqrt(5.2²-4²) = sqrt(27.04-16) = sqrt(11.04) ≈ 3.32
                SVG: width=21 height=10.4 viewBox="0 0 21 10.4"
                Circles at cy=5.2 → span y=0 to y=10.4 (flush, matches cap height)
                Clip rect: x=0 y=0 width=10.2 height=5.2  (top-left quadrant of overlap)
              */}
              <svg
                width="21" height="10.4"
                viewBox="0 0 21 10.4"
                aria-hidden="true"
                style={{ display: "block", flexShrink: 0, marginTop: "-1px" }}
              >
                <defs>
                  <clipPath id="ooLock">
                    <rect x="0" y="0" width="10.2" height="5.2"/>
                  </clipPath>
                </defs>
                {/* O2 behind */}
                <circle cx="14.2" cy="5.2" r="5.2" fill="none" stroke="#c47e00" strokeWidth="1.3"/>
                {/* O1 in front */}
                <circle cx="6.2"  cy="5.2" r="5.2" fill="none" stroke="#c47e00" strokeWidth="1.3"/>
                {/* O2 top-left arc over O1 → interlock */}
                <circle cx="14.2" cy="5.2" r="5.2" fill="none" stroke="#c47e00" strokeWidth="1.3" clipPath="url(#ooLock)"/>
              </svg>

              {/* ── LS (of TOOLS) — vivid gold ── */}
              <span style={{
                fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(11px, 2.2vw, 15px)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "#c47e00",
                lineHeight: 1,
              }}>
                LS
              </span>
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
