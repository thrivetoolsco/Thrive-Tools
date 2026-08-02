import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import ProtocolQuiz from "@/components/ProtocolQuiz";
import Footer from "@/components/Footer";
import SeoHead from "@/components/SeoHead";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Copy,
  Check,
  Pill,
  Cpu,
  Shirt,
  ArrowLeft,
  ChevronDown,
  UtensilsCrossed,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import ShareButton from "@/components/ShareButton";

interface DiscountItem {
  name: string;
  description: string;
  code?: string;
  url: string;
  blogHref?: string;
}

const vitaminsSupplements: DiscountItem[] = [
  {
    name: "IM8",
    description: "The most complete supplement on the market. Vitamins, probiotics, adaptogens & CoQ10 in one scoop.",
    code: "THRIVE10",
    url: "https://www.im8health.com/THRIVE10",
    blogHref: "/product-reviews/im8-health-review",
  },
  {
    name: "HyperionHerbs",
    description: "The gold standard for tonic herbs. Dual extracted, fruiting body only: the difference is noticeable. My go-to for Reishi, Cordyceps, Lion's Mane, and their incredible coffee formula.",
    code: "EDEN10",
    url: "http://www.hyperionherbs.com/discount/eden10",
    blogHref: "/product-reviews/hyperion-herbs",
  },
  {
    name: "Justthrivehealth",
    description: "Spore based probiotics that actually survive stomach acid and reach your gut intact. The most researched strains for real microbiome results.",
    code: "THRIVETOOLS",
    url: "https://justthrivehealth.com/THRIVETOOLS",
    blogHref: "/product-reviews/bacillus-subtilis-bacillus-coagulans-probiotic-guide",
  },
  {
    name: "Organika",
    description: "Clean creatine and premium magnesium — the 2 I actually use. 8 forms of magnesium in one formula, each targeting different systems for full-spectrum absorption and nervous system support.",
    code: "EDEN_25",
    url: "https://organika.com/?rfsn=8403940.a276a1f&utm_source=refersion&utm_medium=affiliate&utm_campaign=8403940.a276a1f",
    blogHref: "/product-reviews/creatine-dosage-for-brain",
  },
  {
    name: "AquaOmega",
    description: "The most concentrated plant based omega 3 on the market. Algae sourced, triglyceride form, IFOS certified. Fish oil options also available.",
    code: "Follow the link to get $30 off your first subscription",
    url: "https://aquaomega.refr.cc/default/u/thrivetoolsco?s=rp&t=cp",
    blogHref: "/product-reviews/omega-3-complete-guide-epa-dha-fish-oil-vs-algae",
  },
  {
    name: "Bioptimizers",
    description: "The most advanced magnesium supplement available: 7 bioavailable forms in one formula to cover every cellular function. Also excellent nootropics.",
    code: "THRIVETOOLS",
    url: "https://bioptimizers.com/shop/products/magnesium-breakthrough",
    blogHref: "/product-reviews/magnesium-deficiency-supplement-guide",
  },
  {
    name: "EnergyBits Chlorella & Spirulina",
    description: "The only company who uses low heat drying to preserve 100% of the algae's delicate enzymes and nutrients that high heat commercial processing destroys",
    code: "THRIVE25",
    url: "https://energybits.com/discount/THRIVE25?rfsn=9026872.b2b124&utm_source=refersion&utm_medium=affiliate&utm_campaign=9026872.b2b124",
    blogHref: "/product-reviews/energybits-spirulina-chlorella-review",
  },
  {
    name: "Organic Nori Seaweed Sushi",
    description: "One of the most nutrient dense foods on the planet and this brand tests for heavy metals so you can actually eat it without concern.",
    code: "Follow This Link",
    url: "https://rawnori.com?p=jeFAQZWBn",
  },
  {
    name: "Intentionally Bare",
    description: "Pure MCT oil in every form: powder, liquid, and blends. Clean fuel for brain and body with zero fillers.",
    code: "Follow This Link",
    url: "https://bit.ly/4bsgdYC",
    blogHref: "/product-reviews/mct-oil-benefits-c8-vs-c10-powder-vs-oil",
  },
  {
    name: "Koracao Ceremonial Cacao",
    description: "Ceremonial grade cacao for heart opening rituals, focus and mood. A sacred plant medicine hiding in plain sight.",
    code: "EDENKAWTHARLARAKI123",
    url: "https://koracao.com/THRIVE33",
    blogHref: "/blog/ceremonial-cacao-benefits-science-review",
  },
  {
    name: "StyrianGold",
    description: "Cold pressed organic pumpkin seed oil, seeds and protein powder. Nutrient dense and completely underrated.",
    code: "THRIVETOOLS-10",
    url: "http://www.styriangold.ca/shop/?",
    blogHref: "/product-reviews/pumpkin-seed-oil-supplement-stack-benefits",
  },
  {
    name: "The Blessed Seed",
    description: "Cold-pressed, undiluted black seed oil from one of the most researched medicinal plants in existence. Immune support, inflammation, allergies, and gut health backed by centuries of traditional use.",
    url: "https://theblessedseed.de/ref/370/",
    blogHref: "/blog/black-seed-oil-benefits-nigella-sativa-guide",
  },
  {
    name: "Zentein Nutrition",
    description: "Protein snacks with no artificial ingredients",
    code: "THRIVETOOLS10",
    url: "https://zentein.ca/?ref=THRIVETOOLSCO",
  },
  {
    name: "Prana Foods",
    description: "Organic superfoods & snacks.",
    code: "THRIVETOOLSCO",
    url: "https://pranafoods.ca/thrivetoolsco",
  },
  {
    name: "Just Kratom",
    description: "Premium kratom products for energy, focus and relaxation.",
    code: "Follow This Link",
    url: "https://clicks.trackcb.com/aff_c?offer_id=202&aff_id=4192",
    blogHref: "/blog/kratom-replacing-alcohol-cannabis-social-pivot-2026",
  },
  {
    name: "CBDMagic",
    description: "Pure CBD Oil Online in Canada. Free shipping on all orders.",
    code: "Follow This Link",
    url: "https://cbdmagic.co/cbd/1046/",
  },
  {
    name: "Seventh Sense",
    description: "CBD topical products, tinctures, gummies and pet drops. USA based.",
    code: "Follow This Link",
    url: "https://clicks.trackcb.com/aff_c?offer_id=208&aff_id=4192",
  },
  {
    name: "Pack Boys",
    description: "Cannabis flower & edibles. US based.",
    code: "Follow This Link",
    url: "https://clicks.trackcb.com/aff_c?offer_id=329&aff_id=4192",
  },
  {
    name: "United Strains Of America",
    description: "Lab tested cannabis.",
    code: "Follow This Link",
    url: "https://clicks.trackcb.com/aff_c?offer_id=339&aff_id=4192",
  },
  {
    name: "ILGM",
    description: "Cannabis seeds.",
    code: "Follow This Link",
    url: "https://clicks.trackcb.com/aff_c?offer_id=324&aff_id=4192",
  },
  {
    name: "Primal Focus",
    description: "Psilocybin mushrooms, San Pedro Cactus, LSD, Grow Kits. Delivers to EU countries only.",
    code: "Follow This Link",
    url: "https://clicks.trackcb.com/aff_c?offer_id=259&aff_id=4192",
  },
  {
    name: "Trusted Mushrooms",
    description: "Amanita in all its forms. Worldwide delivery.",
    code: "Follow This Link",
    url: "https://clicks.trackcb.com/aff_c?offer_id=270&aff_id=4192",
  },
];

const healthTech: DiscountItem[] = [
  {
    name: "WaterDropFilter",
    description: "Ultra Reverse Osmosis + UV Sterilization + Instant heating & cooling options. Countertop with no installation options available.",
    code: "KAWTHARLARAKI",
    url: "https://www.waterdropfilter.ca/?ref=ozpbpmdp",
    blogHref: "/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review",
  },
  {
    name: "Joovv",
    description: "Clinical grade red light therapy from handheld devices to full body panels. The most trusted name in photobiomodulation.",
    code: "THRIVETOOLS",
    url: "https://joovv.com",
    blogHref: "/product-reviews/joovv-review",
  },
  {
    name: "Mito Red Light",
    description: "Medical grade red light masks for targeted facial recovery, skin health and cellular repair.",
    code: "Follow This Link",
    url: "https://www.mitoredlight.com/EDEN27299",
    blogHref: "/blog/red-light-therapy-science-benefits-devices",
  },
  {
    name: "RedTherapy",
    description: "Full body red light panels built for serious photobiomodulation practice. Powerful, reliable and competitively priced.",
    code: "THRIVETOOLS",
    url: "https://redtherapy.co/?rfsn=7676047.c07132&utm_source=refersion&utm_medium=affiliate&utm_campaign=7676047.c07132",
    blogHref: "/blog/red-light-therapy-science-benefits-devices",
  },
  {
    name: "VieLight Neuro",
    description: "Transcranial photobiomodulation for concussion recovery, cognitive decline and deepened meditation states. Backed by published clinical research.",
    code: "THRIVETOOLS",
    url: "https://www.vielight.com/devices/",
    blogHref: "/product-reviews/vielight-neuro-review",
  },
  {
    name: "Oxygen Advantage",
    description: "The most evidence based breathwork courses available online, plus MyoTape for nasal breathing training. Completely changed how I breathe.",
    code: "THRIVETOOLS",
    url: "https://oxygenadvantage.com/?ref=159",
    blogHref: "/product-reviews/breathwork-beginners-guide",
  },
  {
    name: "Neurosity",
    description: "EEG powered focus and productivity device for deep work. Real time brainwave data to optimize your cognitive performance.",
    code: "thrivetools",
    url: "https://neurosity.co/thrivetools",
  },
  {
    name: "BlueCubeBaths",
    description: "Premium cold therapy tubs built for serious recovery and nervous system training. Durable, functional, no compromises.",
    code: "thrive35 to get $250 Discount",
    url: "https://bluecubebaths.com/?ref=CM-ZEsM_ayIJbh",
  },

  {
    name: "Mytrex",
    description: "Targeted massagers for eyes, scalp, neck and beyond. Recovery tools that actually reach the spots that need it most.",
    code: "thrivetools",
    url: "https://mytrex.global/?ref=EDENKAWTHARLARAKI",
  },
  {
    name: "Omnipemf",
    description: "Portable PEMF devices for cellular recovery, inflammation and sleep support. Science backed frequency therapy you can take anywhere.",
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
    description: "Light and sound therapy device for altered states, stress relief and neurological stimulation. Genuinely unlike anything else.",
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
    name: "Muse Headband",
    description: "EEG device providing real time neurofeedback",
    code: "THRIVE25",
    url: "https://choosemuse.com/thrive25",
    blogHref: "/blog/muse-headband-review-eeg-neurofeedback",
  },
  {
    name: "Aires Tech",
    description: "Proven EMF Protection",
    code: "THRIVE25",
    url: "https://airestech.com/thrive25",
  },
];

const nontoxicCookware: DiscountItem[] = [
  {
    name: "Alva Cookware",
    description: "Non toxic cookware",
    code: "Follow This Link",
    url: "https://www.awin1.com/cread.php?awinmid=50999&awinaffid=2421431",
  },
  {
    name: "360 Cookware",
    description: "Stainless steel cookware and bakeware, free from PFAS and chemical coatings.",
    code: "THRIVETOOLS",
    url: "https://www.360cookware.com/THRIVETOOLS",
  },
];

const cleanBeauty: DiscountItem[] = [
  {
    name: "ISUN Skincare",
    description: "Wildcrafted botanical skincare formulated for deep cellular nourishment. Clean beauty that works from the inside out.",
    code: "ISUNTHRIVE",
    url: "https://isunskincare.com/thrivetools",
  },
  {
    name: "Davids-usa",
    description: "Premium Oral Care",
    code: "EDEN81783",
    url: "https://www.davids-usa.com/EDEN34969",
  },
];

const ethicalClothing: DiscountItem[] = [
  {
    name: "Earthrunners",
    description: "Grounding, lifetime durable Sandals",
    code: "THRIVETOOLS",
    url: "https://earthrunners.com/?rfsn=7676227.de5b78",
    blogHref: "/product-reviews/earthrunners-review",
  },
  {
    name: "The Good Tee",
    description: "Ethically made, sustainably sourced basics that don't compromise on quality or conscience.",
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
  {
    name: "Promeed",
    description: "Organic bedding that supports cleaner sleep: no synthetic materials, no toxic dyes, just pure rest.",
    code: "Follow This Link",
    url: "https://www.awin1.com/cread.php?awinmid=100833&awinaffid=2421431",
  },
  {
    name: "Havn by Lambs",
    description: "EMF Blocking Clothing",
    code: "Follow This Link",
    url: "https://snwbl.io/lambs/EDEN50761",
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
        <p className="text-[#3d1a28]/55 text-sm leading-relaxed">
          {item.description}
          {item.blogHref && (
            <> <a
              href={item.blogHref}
              target="_blank"
              rel="noopener noreferrer"
              data-testid={`link-benefits-${index}`}
              className="text-[#c4622d] font-medium hover:underline"
            >Benefits</a></>
          )}
        </p>
      </div>
      <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#3d1a28]/10">
        {item.code && <CopyableCode code={item.code} />}
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
  const [open, setOpen] = useState(false);

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


export default function Discounts() {
  return (
    <div className="min-h-screen bg-[#fdf6eb] text-[#3d1a28] overflow-x-hidden">
      <SeoHead
        title="Best Supplement Discount Codes 2026 | Biohacking Deals — Thrive Tools"
        description="Exclusive discount codes for the best biohacking and wellness supplements: IM8, ENERGYbits, BiOptimizers, Hyperion Herbs, AquaOmega, Superfeast, EarthRunners, and more."
        canonical="/discount-codes"
      />
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

          <div className="mt-5">
            <ShareButton />
          </div>

        </div>
      </section>

      {/* Protocol Finder Quiz */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8 border-b border-black/8"
        style={{ background: "linear-gradient(180deg, #fdf6eb 0%, #f8ece0 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <ProtocolQuiz />
        </div>
      </section>

      {/* Content */}
      <section
        className="py-12 px-4 sm:px-6 lg:px-8"
        style={{ background: "linear-gradient(180deg, #fdf6eb 0%, #f8ece0 50%, #fdf6eb 100%)" }}
      >
        <div className="max-w-5xl mx-auto">
          <p className="text-black/60 text-sm leading-relaxed mb-8" data-testid="text-blog-disclaimer">
            Every product I recommend on this page has a full science-backed breakdown on the{" "}
            <a href="/blog" className="underline text-[#c4622d] hover:text-[#8b3a1a] transition-colors">blog</a>{" "}
            page: peer reviewed research, honest reviews and years of personal testing behind every single recommendation.
          </p>
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

          <CategorySection
            id="nontoxic-cookware"
            icon={UtensilsCrossed}
            title="Non Toxic Cookware"
            subtitle="Clean cooking, no harmful coatings"
            items={nontoxicCookware}
            badgeColor="bg-green-400/20 text-green-800 border-green-400/30"
            gradient="linear-gradient(135deg, rgba(134,187,120,0.2) 0%, rgba(100,160,90,0.2) 100%)"
            borderColor="rgba(134,187,120,0.2)"
            startIndex={vitaminsSupplements.length + healthTech.length + ethicalClothing.length}
          />

          <CategorySection
            id="clean-beauty"
            icon={Sparkles}
            title="Clean Beauty & Body"
            subtitle="Non-toxic skincare & oral care"
            items={cleanBeauty}
            badgeColor="bg-pink-400/20 text-pink-800 border-pink-400/30"
            gradient="linear-gradient(135deg, rgba(244,114,182,0.2) 0%, rgba(201,122,142,0.2) 100%)"
            borderColor="rgba(244,114,182,0.2)"
            startIndex={vitaminsSupplements.length + healthTech.length + ethicalClothing.length + nontoxicCookware.length}
          />

          <div className="flex justify-center pt-8 pb-2">
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              data-testid="button-return-to-top"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#c4622d] hover:text-[#8b3a1a] border border-[#c4622d]/30 hover:border-[#c4622d]/60 bg-[#c4622d]/8 hover:bg-[#c4622d]/15 px-6 py-2.5 rounded-full transition-colors"
            >
              Return to top
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
