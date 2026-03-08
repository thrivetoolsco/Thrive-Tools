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
    name: "Ceremonial Cacao",
    description: "Ceremonial Cacao",
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
          ? "bg-amber-500/10 text-amber-300 border border-amber-500/20 cursor-default"
          : copied
            ? "bg-green-500/20 text-green-300 border border-green-500/30"
            : "bg-rose-500/15 text-rose-300 border border-rose-500/25 hover:bg-rose-500/25 cursor-pointer"
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
        <h3 className="text-white font-bold text-lg mb-2">{item.name}</h3>
        <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-white/5">
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
            className="rounded-full text-xs border-white/15 text-white/70 bg-transparent px-4"
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
}

function CategorySection({ icon: Icon, title, subtitle, items, badgeColor, gradient, startIndex }: CategorySectionProps) {
  return (
    <section className="mb-20">
      <div className="flex items-center gap-4 mb-8">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
          style={{
            background: gradient,
            border: "1px solid rgba(201,122,142,0.2)",
          }}
        >
          <Icon className="w-5 h-5 text-rose-300" />
        </div>
        <div>
          <h2 className="text-white font-bold text-2xl font-display">{title}</h2>
          <p className="text-white/40 text-sm">{subtitle}</p>
        </div>
        <Badge className={`${badgeColor} border rounded-full text-xs px-3 py-0.5 font-medium ml-auto hidden sm:inline-flex`}>
          {items.length} brands
        </Badge>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((item, i) => (
          <DiscountCard key={i} item={item} index={startIndex + i} />
        ))}
      </div>
    </section>
  );
}

export default function Discounts() {
  return (
    <div className="min-h-screen bg-[#0d0514] text-white overflow-x-hidden">
      <Navigation />

      {/* Header */}
      <section
        className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 30%, #2d0e3e 0%, #1a0824 40%, #0d0514 100%)",
        }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div
            className="absolute top-1/3 left-1/3 w-64 h-64 rounded-full opacity-15"
            style={{ background: "radial-gradient(circle, #c97a8e 0%, transparent 70%)", filter: "blur(50px)" }}
          />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/" data-testid="link-back-home">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/15 text-white/60 bg-transparent mb-8 text-xs"
            >
              <ArrowLeft className="w-3 h-3 mr-2" /> Home
            </Button>
          </Link>

          <h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-white"
            data-testid="text-discounts-headline"
          >
            <span className="text-gradient-rose">Discount Codes</span>
          </h1>
          <p className="text-white/60 text-lg sm:text-xl max-w-3xl leading-relaxed font-medium" data-testid="text-discounts-subtitle">
            Top Biohacking Supplements & Tech: 2026 Picks + Discount Codes
          </p>
        </div>
      </section>

      {/* Content */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #0d0514 0%, #160920 50%, #0d0514 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <CategorySection
            icon={Pill}
            title="Vitamins & Supplements"
            subtitle="Proven herbs, superfoods & targeted nutrition"
            items={vitaminsSupplements}
            badgeColor="bg-rose-400/20 text-rose-300 border-rose-400/30"
            gradient="linear-gradient(135deg, rgba(201,122,142,0.2) 0%, rgba(155,111,165,0.2) 100%)"
            startIndex={0}
          />

          <div className="section-divider mb-20" />

          <CategorySection
            icon={Cpu}
            title="Longevity Tech"
            subtitle="For cognitive power & cellular repair"
            items={healthTech}
            badgeColor="bg-purple-400/20 text-purple-300 border-purple-400/30"
            gradient="linear-gradient(135deg, rgba(155,111,165,0.2) 0%, rgba(100,80,180,0.2) 100%)"
            startIndex={vitaminsSupplements.length}
          />

          <div className="section-divider mb-20" />

          <CategorySection
            icon={Shirt}
            title="Ethical Sources of Clothing"
            subtitle="Conscious fashion & grounding footwear"
            items={ethicalClothing}
            badgeColor="bg-amber-400/20 text-amber-300 border-amber-400/30"
            gradient="linear-gradient(135deg, rgba(212,168,103,0.2) 0%, rgba(201,122,142,0.2) 100%)"
            startIndex={vitaminsSupplements.length + healthTech.length}
          />

          <div className="section-divider mb-20" />

          <section className="mb-20" data-testid="section-traveling">
            <div className="flex items-center gap-4 mb-8">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{
                  background: "linear-gradient(135deg, rgba(100,180,220,0.2) 0%, rgba(155,111,165,0.2) 100%)",
                  border: "1px solid rgba(100,180,220,0.2)",
                }}
              >
                <Plane className="w-5 h-5 text-sky-300" />
              </div>
              <div>
                <h2 className="text-white font-bold text-2xl font-display">Travels</h2>
                <p className="text-white/40 text-sm">I'm also passionate about Traveling.</p>
              </div>
            </div>
            <div className="card-glass rounded-2xl p-6 sm:p-10 flex items-center justify-center">
              <Button
                asChild
                size="lg"
                className="bg-rose-500 text-white border-0 rounded-full px-6 sm:px-10 py-4 text-sm sm:text-base tracking-widest uppercase font-semibold whitespace-normal text-center leading-relaxed h-auto"
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
          </section>
        </div>
      </section>

      <Footer />
    </div>
  );
}
