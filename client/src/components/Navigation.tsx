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
        <div className="flex items-center justify-center h-28 sm:h-36">
          {/* ══ LOGO + MENU BUTTON — all centered together ══ */}
          <div className="flex flex-col items-center" style={{ gap: 0 }}>

            <Link href="/" className="group" data-testid="link-logo" aria-label="Thrive Tools">
              <div
                className="transition-opacity duration-300 group-hover:opacity-80 select-none"
                style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}
              >
                {/* wordmark row */}
                <div style={{ display: "flex", alignItems: "center", gap: 0, lineHeight: 1 }}>
                  {/* THRIVE */}
                  <span style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontWeight: 700,
                    fontStyle: "normal",
                    fontSize: "clamp(14px, 2.6vw, 20px)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "#c0294f",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                  }}>
                    Thrive
                  </span>

                  {/* thin vertical divider */}
                  <span style={{
                    display: "inline-block",
                    width: 1,
                    height: "1em",
                    background: "#c0294f",
                    margin: "0 10px",
                    opacity: 0.35,
                    verticalAlign: "middle",
                  }}/>

                  {/* TOOLS */}
                  <span style={{
                    fontFamily: "'Lora', Georgia, serif",
                    fontWeight: 400,
                    fontStyle: "normal",
                    fontSize: "clamp(14px, 2.6vw, 20px)",
                    letterSpacing: "0.28em",
                    textTransform: "uppercase",
                    color: "#3d1a28",
                    lineHeight: 1,
                    whiteSpace: "nowrap",
                    paddingLeft: "0.05em",
                  }}>
                    Tools
                  </span>
                </div>

                {/* tagline */}
                <div style={{
                  fontFamily: "'Montserrat', 'Helvetica Neue', Arial, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(8px, 1.05vw, 10px)",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#7a3848",
                  lineHeight: 1,
                  whiteSpace: "nowrap",
                  paddingLeft: "0.22em",
                }}>
                  Biohacking &nbsp;—&nbsp; Longevity &nbsp;—&nbsp; Conscious Living
                </div>
              </div>
            </Link>

            {/* Menu button — directly below "Living" */}
            <button
              data-testid="button-menu"
              className="mt-2 flex items-center justify-center rounded-lg text-[#3d1a28]/60 hover:text-[#3d1a28] hover:bg-[#3d1a28]/5 transition-all duration-200 px-3 py-1"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
