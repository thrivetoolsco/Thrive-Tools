import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Copy,
  Check,
  Pill,
  Cpu,
  Shirt,
  Plane,
  ArrowLeft,
  ChevronDown,
} from "lucide-react";
import { useState } from "react";

interface DiscountItem {
  name: string;
  description: string;
  code: string;
  url: string;
}

const vitaminsSupplements: DiscountItem[] = [
  {
    name: "IM8",
    description: "By far the best all in 1 supplement/ multi vitamin. Also contains probiotics & electrolytes",
    code: "THRIVE10",
    url: "https://im8health.com/",
  },
  {
    name: "HyperionHerbs",
    description: "Unmatched quality for mushrooms and other tonic herbs. If you're looking for a Reishi and cordyceps you can actually feel, that's the website to get it. They also have an amazing coffee formula.",
    code: "EDEN10",
    url: "http://www.hyperionherbs.com/discount/eden10",
  },
  {
    name: "Superfeast",
    description: "Mushrooms & Tonic herbs (HyperionHerbs has better quality but Superfeast has a more complete selection + already made blends)",
    code: "THRIVE33",
    url: "https://superfeast.com.au/?rfsn=7706129.0975bd&utm_source=refersion&utm_medium=affiliate&utm_campaign=7706129.0975bd",
  },
  {
    name: "Justthrivehealth",
    description: "Most powerful strains of probiotics & prebiotics",
    code: "THRIVETOOLS",
    url: "https://justthrivehealth.com/THRIVETOOLS",
  },
  {
    name: "Organika",
    description: "They have the best creatine & Collagen. Always get marine collagen, bovine collagen is too toxic",
    code: "EDEN_25",
    url: "https://organika.com/?rfsn=8403940.a276a1f&utm_source=refersion&utm_medium=affiliate&utm_campaign=8403940.a276a1f",
  },
  {
    name: "AquaOmega",
    description: "Highest strength plant based omega 3. They also have non-vegan options",
    code: "Follow the link to get $30 off your first subscription",
    url: "https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp",
  },
  {
    name: "Bioptimizers",
    description: "Best Magnesium, Protein Powders & Nootropics",
    code: "THRIVETOOLS",
    url: "https://bioptimizers.com/shop/products/magnesium-breakthrough",
  },
  {
    name: "Maximum Vitality",
    description: "CBD & Other Nootropics To Optimize Performance",
    code: "thrivetools25",
    url: "https://www.maximumvitality.com/ref/68/",
  },
  {
    name: "Organic Nori Seaweed Sushi",
    description: "Low Heavy Metal Zone",
    code: "EDENL5",
    url: "https://rawnori.com/thrivetools",
  },
  {
    name: "Bulletproof",
    description: "Best Coffee & MCT Oil",
    code: "Follow This Link",
    url: "https://bulletproof.fdf2.net/DKAdJ2",
  },
  {
    name: "Koracao Ceremonial Cacao",
    description: "Koracao Ceremonial Cacao",
    code: "EDENKAWTHARLARAKI123",
    url: "https://koracao.com/THRIVE33",
  },
  {
    name: "StyrianGold",
    description: "Premium Organic Pumpkin Oil, Seeds & Protein Powders",
    code: "THRIVETOOLS-10",
    url: "http://www.styriangold.ca/shop/?",
  },
];

const healthTech: DiscountItem[] = [
  {
    name: "Joovv",
    description: "Red Light & Infrared Devices",
    code: "THRIVETOOLS",
    url: "https://joovv.com",
  },
  {
    name: "VieLight Neuro",
    description: "Photobiomodulation Device: concussions, Alzheimer, heightened meditation states",
    code: "THRIVETOOLS",
    url: "https://www.vielight.com/devices/",
  },
  {
    name: "Oxygen Advantage",
    description: "Best breathwork online courses + nose breathing aids",
    code: "THRIVETOOLS",
    url: "https://oxygenadvantage.com/?ref=159",
  },
  {
    name: "Neurosity",
    description: "Increase Productivity & Focus Device",
    code: "thrivetools",
    url: "https://neurosity.co/thrivetools",
  },
  {
    name: "BlueCubeBaths",
    description: "Cold Therapy Tubs",
    code: "thrive35 to get $250 Discount",
    url: "https://bluecubebaths.com/?ref=CM-ZEsM_ayIJbh",
  },
  {
    name: "n.o.w Tone Therapy System",
    description: "Tone Therapy System",
    code: "thrive10",
    url: "https://nowbysolu.com/?ref=GZr9nFoK_hpzmY",
  },
  {
    name: "GlowMane",
    description: "Incredible evidence backed tech to address hair concerns",
    code: "EDEN58101",
    url: "https://www.glowmane.com/discount/EDEN58101",
  },
  {
    name: "Mytrex",
    description: "Massagers for eyes, scalp, neck, etc.",
    code: "thrivetools",
    url: "https://mytrex.global/?ref=EDENKAWTHARLARAKI",
  },
  {
    name: "Omnipemf",
    description: "Portable PEMF Devices",
    code: "thrive10",
    url: "https://omnipemf.com/?ref=uLhVfH2tFr_rsh",
  },
  {
    name: "Healthandyoga",
    description: "Acupressure Mat, Jalla Neti Pots, Enema kit, etc.",
    code: "Ede4143",
    url: "https://www.healthandyoga.com/spike-acupressure-mat?",
  },
  {
    name: "Inside Tracker",
    description: "Personalized Diet & Supplement Plan Based on Your Biomarker Analysis – Blood, DNA, Biological Age",
    code: "THRIVETOOLS",
    url: "https://store.insidetracker.com/?sscid=a1k7_6e106",
  },
  {
    name: "Self Decode",
    description: "Detailed DNA Analysis",
    code: "THRIVETOOLS10",
    url: "https://selfdecode.com/?a_aid=6536b9c629095",
  },
  {
    name: "Piurify",
    description: "Water Hydrogenator",
    code: "THRIVE10",
    url: "https://www.piurify.com/?sca_ref=4509873.CyVUQonn5r",
  },
  {
    name: "NeuroVizr",
    description: "Light & Sound Therapy Device",
    code: "thrive33",
    url: "https://neurovizr.com/?ref=rzortqxs",
  },
  {
    name: "HeatBit",
    description: "Earn btc as you heat and purify your home",
    code: "THRIVE101",
    url: "https://heatbit.com/?ref=EDENKAWTHARLARAKI",
  },
  {
    name: "Lovetuner",
    description: "Breathe 528 hz",
    code: "thrive15",
    url: "https://lddy.no/1i55c",
  },
];

const ethicalClothing: DiscountItem[] = [
  {
    name: "Earthrunners",
    description: "Grounding, lifetime durable Sandals",
    code: "THRIVETOOLS",
    url: "https://earthrunners.com/?rfsn=7676227.de5b78",
  },
  {
    name: "The Good Tee",
    description: "Ethical Clothing",
    code: "thrive10",
    url: "https://thegoodtee.com/?ref=lzrzvhex",
  },
  {
    name: "WamaUnderwear",
    description: "Organic Cotton & Hemp Underwear",
    code: "Follow This Link",
    url: "https://wamaunderwear.com/?rfsn=7679845.b824f9f&utm_source=refersion&utm_medium=affiliate&utm_campaign=7679845.b824f9f",
  },
  {
    name: "Bamboo Clothes",
    description: "Bamboo Clothes",
    code: "EDENKAWTHARLARAKI10",
    url: "https://www.bambooclothes.com/discount/eden-kawtharlaraki10",
  },
  {
    name: "SustainByKat",
    description: "Plant Dyed Organic Clothing",
    code: "Follow This Link",
    url: "https://sustainbykat.com/?sca_ref=4525701.rDWUOnv37U",
  },
  {
    name: "Earthing Harmony",
    description: "Grounding Sheets & Footwear",
    code: "THRIVENOW",
    url: "https://earthingharmony.com/?ref=hxaqgkso",
  },
];

function CopyableCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const isLink = code.toLowerCase().startsWith("follow");

  const handleCopy = () => {
    if (isLink) return;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-mono font-semibold transition-all ${
        isLink
          ? "bg-amber-500/15 text-amber-700 border border-amber-500/30 cursor-default"
          : copied
            ? "bg-green-500/20 text-green-700 border border-green-500/30"
            : "bg-[#c4622d]/15 text-[#8b3a1a] border border-[#c4622d]/25 hover:bg-[#c4622d]/25 cursor-pointer"
      }`}
      data-testid={`button-copy-code-${code.replace(/\s+/g, "-").substring(0, 20)}`}
      title={isLink ? code : `Click to copy: ${code}`}
    >
      {copied ? (
        <>
          <Check className="w-3 h-3" /> Copied
        </>
      ) : isLink ? (
        <span className="font-sans">{code}</span>
      ) : (
        <>
          {code} <Copy className="w-3 h-3 opacity-60" />
        </>
      )}
    </button>
  );
}

function DiscountCard({ item, index }: { item: DiscountItem; index: number }) {
  return (
    <div
      className="card-glass rounded-2xl p-6 flex flex-col justify-between gap-4 hover-elevate transition-all duration-300 group"
      data-testid={`card-discount-${index}`}
    >
      <div>
        <h3 className="text-[#3d1a28] font-bold text-lg mb-2">{item.name}</h3>
        <p className="text-[#3d1a28]/55 text-sm leading-relaxed">{item.description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#3d1a28]/10">
        <CopyableCode code={item.code} />
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`link-visit-${index}`}
        >
          <Button
            size="sm"
            variant="outline"
            className="rounded-full text-xs border-[#3d1a28]/15 text-[#3d1a28]/70 bg-transparent px-4"
          >
            Visit <ExternalLink className="w-3 h-3 ml-1.5" />
          </Button>
        </a>
      </div>
    </div>
  );
}

interface CategorySectionProps {
  icon: typeof Pill;
  title: string;
  subtitle: string;
  items: DiscountItem[];
  badgeColor: string;
  gradient: string;
  startIndex: number;
  borderColor?: string;
  id?: string;
}

function CategorySection({ icon: Icon, title, subtitle, items, badgeColor, gradient, startIndex, borderColor = "rgba(201,122,142,0.2)", id }: CategorySectionProps) {
  const [open, setOpen] = useState(true);

  return (
    <section id={id} className="mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 mb-0 group cursor-pointer"
        data-testid={`accordion-toggle-${title.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{ background: gradient, border: `1px solid ${borderColor}` }}
        >
          <Icon className="w-5 h-5 text-[#c4622d]" />
        </div>
        <div className="text-left">
          <h2 className="text-[#3d1a28] font-bold text-2xl font-display">{title}</h2>
          <p className="text-[#3d1a28]/50 text-sm">{subtitle}</p>
        </div>
        <Badge className={`${badgeColor} border rounded-full text-xs px-3 py-0.5 font-medium ml-auto hidden sm:inline-flex`}>
          {items.length} brands
        </Badge>
        <ChevronDown
          className={`w-5 h-5 text-[#3d1a28]/40 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[9999px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}`}
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((item, i) => (
            <DiscountCard key={i} item={item} index={startIndex + i} />
          ))}
        </div>
      </div>

      <div className="section-divider mt-8 mb-8" />
    </section>
  );
}

function TravelsSection() {
  const [open, setOpen] = useState(true);

  return (
    <section className="mb-8" data-testid="section-traveling">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 mb-0 group cursor-pointer"
        data-testid="accordion-toggle-travels"
      >
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: "linear-gradient(135deg, rgba(100,180,220,0.2) 0%, rgba(155,111,165,0.2) 100%)",
            border: "1px solid rgba(100,180,220,0.2)",
          }}
        >
          <Plane className="w-5 h-5 text-sky-500" />
        </div>
        <div className="text-left">
          <h2 className="text-[#3d1a28] font-bold text-2xl font-display">Travels</h2>
          <p className="text-[#3d1a28]/50 text-sm">I'm also passionate about Traveling.</p>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-[#3d1a28]/40 flex-shrink-0 ml-auto transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${open ? "max-h-[9999px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"}`}
      >
        <div className="card-glass rounded-2xl p-6 sm:p-10 flex items-center justify-center">
          <Button
            asChild
            size="lg"
            className="btn-gradient-rose text-white border-0 rounded-full px-6 sm:px-10 py-4 text-sm sm:text-base tracking-widest uppercase font-semibold whitespace-normal text-center leading-relaxed h-auto"
          >
            <a
              href="https://www.traveltipsexposed.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-travel-tips"
              className="inline-flex items-center justify-center gap-2 flex-wrap"
            >
              Find me on TravelTipsExposed.com <ExternalLink className="w-4 h-4 flex-shrink-0" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default function Discounts() {
  return (
    <div className="min-h-screen bg-[#fdf6eb] text-[#3d1a28] overflow-x-hidden">
      <Navigation />

      {/* Header */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 30%, #f8ece0 0%, #fdf6eb 40%, #fdf6eb 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, #c4622d 0%, transparent 70%)", filter: "blur(50px)" }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/" data-testid="link-back-home">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-[#3d1a28]/15 text-[#3d1a28]/60 bg-transparent mb-8 text-xs"
            >
              <ArrowLeft className="w-3 h-3 mr-2" /> Home
            </Button>
          </Link>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4"
            data-testid="text-discounts-headline"
          >
            <span className="text-gradient-rose">Discount Codes</span>
          </h1>
          <p className="text-[#3d1a28]/60 text-lg sm:text-xl max-w-3xl leading-relaxed font-medium" data-testid="text-discounts-subtitle">
            Top Biohacking Supplements, Longevity Tech & Conscious Fashion: 2026 Picks + Discount Codes
          </p>

          <div className="flex flex-wrap gap-3 mt-8" data-testid="category-jump-nav">
            <a href="#vitamins-supplements" data-testid="jump-vitamins-supplements">
              <Button variant="outline" size="sm" className="rounded-full border-[#c4622d]/30 text-[#8b3a1a] bg-[#c4622d]/8 hover:bg-[#c4622d]/15 text-xs font-semibold px-4 h-9 gap-2">
                <Pill className="w-3.5 h-3.5" /> Vitamins &amp; Supplements
              </Button>
            </a>
            <a href="#longevity-tech" data-testid="jump-longevity-tech">
              <Button variant="outline" size="sm" className="rounded-full border-[#8b3a1a]/25 text-[#8b3a1a] bg-[#8b3a1a]/8 hover:bg-[#8b3a1a]/15 text-xs font-semibold px-4 h-9 gap-2">
                <Cpu className="w-3.5 h-3.5" /> Longevity Tech
              </Button>
            </a>
            <a href="#conscious-fashion" data-testid="jump-conscious-fashion">
              <Button variant="outline" size="sm" className="rounded-full border-amber-600/30 text-amber-700 bg-amber-500/8 hover:bg-amber-500/15 text-xs font-semibold px-4 h-9 gap-2">
                <Shirt className="w-3.5 h-3.5" /> Conscious Fashion
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #fdf6eb 0%, #f8ece0 50%, #fdf6eb 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <CategorySection
            id="vitamins-supplements"
            icon={Pill}
            title="Vitamins & Supplements"
            subtitle="Proven herbs, superfoods & targeted nutrition"
            items={vitaminsSupplements}
            badgeColor="bg-rose-400/20 text-[#8b3a1a] border-rose-400/30"
            gradient="linear-gradient(135deg, rgba(201,122,142,0.2) 0%, rgba(155,111,165,0.2) 100%)"
            startIndex={0}
          />

          <CategorySection
            id="longevity-tech"
            icon={Cpu}
            title="Longevity Tech"
            subtitle="For cognitive power & cellular repair"
            items={healthTech}
            badgeColor="bg-[#8b3a1a]/20 text-[#8b3a1a] border-[#8b3a1a]/30"
            gradient="linear-gradient(135deg, rgba(155,111,165,0.2) 0%, rgba(100,80,180,0.2) 100%)"
            borderColor="rgba(155,111,165,0.2)"
            startIndex={vitaminsSupplements.length}
          />

          <CategorySection
            id="conscious-fashion"
            icon={Shirt}
            title="Ethical Sources of Clothing"
            subtitle="Conscious fashion & grounding footwear"
            items={ethicalClothing}
            badgeColor="bg-amber-400/20 text-amber-700 border-amber-400/30"
            gradient="linear-gradient(135deg, rgba(212,168,103,0.2) 0%, rgba(201,122,142,0.2) 100%)"
            borderColor="rgba(212,168,103,0.2)"
            startIndex={vitaminsSupplements.length + healthTech.length}
          />

          <TravelsSection />
        </div>
      </section>

      <Footer />
    </div>
  );
}
