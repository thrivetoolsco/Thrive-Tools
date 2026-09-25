import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";
import { Link } from "wouter";
import waterdropImage from "@assets/waterdrop-discount-code-hero.jpg";
import joovvImage from "@assets/joovv-discount-code-hero_1790058148708.jpg";
import mitoImage from "@assets/mito-red-light-discount-code-hero.jpg";
import redtherapyImage from "@assets/redtherapy-discount-code-hero.jpg";
import vielightImage from "@assets/vielight-discount-code-hero.jpg";
import oxygenImage from "@assets/oxygen-advantage-discount-code-hero.jpg";
import neurosityImage from "@assets/neurosity-discount-code-hero_1790058294771.jpg";
import bluecubeImage from "@assets/bluecubebaths-discount-code-hero.jpg";
import mytrexImage from "@assets/mytrex-discount-code-hero.jpg";
import omnipemfImage from "@assets/omnipemf-discount-code-hero.jpg";
import healthAndYogaImage from "@assets/healthandyoga-discount-code-hero.webp";
import selfDecodeImage from "@assets/selfdecode-discount-code-faq-hero.png";
import neurovizrImage from "@assets/neurovizr-discount-code-hero.png";
import heatbitImage from "@assets/heatbit-discount-code-hero.jpg";
import museImage from "@assets/muse-headband-discount-code-faq-hero.png";
import airesImage from "@assets/aires-tech-discount-code-hero.jpg";

type BrandFaq = {
  brand: string;
  slug: string;
  title: string;
  code?: string;
  href: string;
  linkText: string;
  oneLiner: string;
  offerDesc?: string;
  image: string;
  imageAlt: string;
};

const brands: BrandFaq[] = [
  {
    brand: "WaterDrop", slug: "waterdrop-discount-code-faq", title: "WaterDrop Discount Code FAQ (2026)",
    code: "KAWTHARLARAKI", href: "https://www.waterdropfilter.ca/?ref=ozpbpmdp",
    linkText: "Shop WaterDrop with code KAWTHARLARAKI", oneLiner: "Water filtration systems brand",
    image: waterdropImage, imageAlt: "WaterDrop water filtration system",
  },
  {
    brand: "Joovv", slug: "joovv-discount-code-faq", title: "Joovv Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://joovv.com", linkText: "Shop Joovv with code THRIVETOOLS",
    oneLiner: "Red light therapy device brand", image: joovvImage, imageAlt: "Joovv red light therapy device",
  },
  {
    brand: "Mito Red Light", slug: "mito-red-light-discount-code-faq", title: "Mito Red Light Discount FAQ (2026)",
    href: "https://www.mitoredlight.com/EDEN27299", linkText: "Shop Mito Red Light",
    oneLiner: "Red light therapy device brand", offerDesc: "The current discount (applied automatically via the link)",
    image: mitoImage, imageAlt: "Mito Red Light therapy device",
  },
  {
    brand: "RedTherapy", slug: "redtherapy-discount-code-faq", title: "RedTherapy Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://redtherapy.co/?rfsn=7676047.c07132&utm_source=refersion&utm_medium=affiliate&utm_campaign=7676047.c07132",
    linkText: "Shop RedTherapy with code THRIVETOOLS", oneLiner: "Red light therapy device brand",
    image: redtherapyImage, imageAlt: "RedTherapy red light therapy device",
  },
  {
    brand: "VieLight", slug: "vielight-discount-code-faq", title: "VieLight Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://www.vielight.com/devices/",
    linkText: "Shop VieLight with code THRIVETOOLS", oneLiner: "Brain photobiomodulation device brand",
    image: vielightImage, imageAlt: "VieLight brain photobiomodulation device",
  },
  {
    brand: "Oxygen Advantage", slug: "oxygen-advantage-discount-code-faq", title: "Oxygen Advantage Discount Code FAQ (2026)",
    code: "THRIVETOOLS", href: "https://oxygenadvantage.com/?ref=159",
    linkText: "Shop Oxygen Advantage with code THRIVETOOLS", oneLiner: "Breathing training program brand",
    image: oxygenImage, imageAlt: "Oxygen Advantage breathing training",
  },
  {
    brand: "Neurosity", slug: "neurosity-discount-code-faq", title: "Neurosity Discount Code FAQ (2026)",
    code: "thrivetools", href: "https://neurosity.co/thrivetools", linkText: "Shop Neurosity with code thrivetools",
    oneLiner: "Neurotechnology wearable brand", image: neurosityImage, imageAlt: "Neurosity neurotechnology wearable",
  },
  {
    brand: "BlueCube Baths", slug: "bluecube-baths-discount-code-faq", title: "BlueCube Baths Discount Code FAQ (2026)",
    code: "thrive35", href: "https://bluecubebaths.com/?ref=CM-ZEsM_ayIJbh",
    linkText: "Shop BlueCube Baths with code thrive35", oneLiner: "Cold plunge bath brand (code takes $250 off)",
    image: bluecubeImage, imageAlt: "BlueCube Baths cold plunge",
  },
  {
    brand: "Mytrex", slug: "mytrex-discount-code-faq", title: "Mytrex Discount Code FAQ (2026)",
    code: "thrivetools", href: "https://mytrex.global/?ref=EDENKAWTHARLARAKI",
    linkText: "Shop Mytrex with code thrivetools", oneLiner: "Wellness recovery technology brand",
    image: mytrexImage, imageAlt: "Mytrex wellness recovery device",
  },
  {
    brand: "OmniPEMF", slug: "omnipemf-discount-code-faq", title: "OmniPEMF Discount Code FAQ (2026)",
    code: "thrive10", href: "https://omnipemf.com/?ref=uLhVfH2tFr_rsh",
    linkText: "Shop OmniPEMF with code thrive10", oneLiner: "PEMF therapy device brand",
    image: omnipemfImage, imageAlt: "OmniPEMF therapy device",
  },
  {
    brand: "HealthAndYoga", slug: "healthandyoga-discount-code-faq", title: "HealthAndYoga Discount Code FAQ (2026)",
    code: "Ede4143", href: "https://www.healthandyoga.com/spike-acupressure-mat?",
    linkText: "Shop HealthAndYoga with code Ede4143", oneLiner: "Yoga and acupressure products brand",
    image: healthAndYogaImage, imageAlt: "HealthAndYoga acupressure mat",
  },
  {
    brand: "SelfDecode", slug: "self-decode-discount-code-faq", title: "SelfDecode Discount Code FAQ (2026)",
    code: "THRIVETOOLS10", href: "https://selfdecode.com/?a_aid=6536b9c629095",
    linkText: "Shop SelfDecode with code THRIVETOOLS10", oneLiner: "DNA-based personalized health platform",
    image: selfDecodeImage, imageAlt: "SelfDecode DNA kit",
  },
  {
    brand: "NeuroVizr", slug: "neurovizr-discount-code-faq", title: "NeuroVizr Discount Code FAQ (2026)",
    code: "thrive33", href: "https://neurovizr.com/?ref=rzortqxs",
    linkText: "Shop NeuroVizr with code thrive33", oneLiner: "Light and sound brain therapy device brand",
    image: neurovizrImage, imageAlt: "NeuroVizr light and sound device",
  },
  {
    brand: "HeatBit", slug: "heatbit-discount-code-faq", title: "HeatBit Discount Code FAQ (2026)",
    code: "THRIVE101", href: "https://heatbit.com/?ref=EDENKAWTHARLARAKI",
    linkText: "Shop HeatBit with code THRIVE101", oneLiner: "Room heater with built-in crypto mining",
    image: heatbitImage, imageAlt: "HeatBit room heater",
  },
  {
    brand: "Muse Headband", slug: "muse-headband-discount-code-faq", title: "Muse Headband Discount Code FAQ (2026)",
    code: "THRIVE25", href: "https://choosemuse.com/thrive25", linkText: "Shop Muse with code THRIVE25",
    oneLiner: "Meditation and sleep headband brand", image: museImage, imageAlt: "Muse meditation headband",
  },
  {
    brand: "Aires Tech", slug: "aires-tech-discount-code-faq", title: "Aires Tech Discount Code FAQ (2026)",
    code: "THRIVE25", href: "https://airestech.com/thrive25", linkText: "Shop Aires Tech with code THRIVE25",
    oneLiner: "EMF protection device brand", image: airesImage, imageAlt: "Aires Tech EMF protection device",
  },
];

function Answer({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="card-glass rounded-2xl p-6">
      <h3 className="font-display font-bold text-black">{question}</h3>
      <div className="mt-2 text-black/70 leading-relaxed">{children}</div>
    </div>
  );
}

function LongevityTechDiscountFaq({ post }: { post: BrandFaq }) {
  const { brand, slug, title, code, href, linkText, oneLiner, offerDesc, image, imageAlt } = post;
  const link = <a href={href} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">{linkText}</a>;
  return (
    <PageLayout
      showShare
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${title} | Thrive Tools`,
        description: `${oneLiner}. Direct answers about the verified ${brand} discount and how to use it.`,
        canonical: `https://thrivetools.co/blog/${slug}`,
        ogType: "article",
        datePublished: "2026-09-24",
        image,
        imageAlt,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-8">
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={image} alt={imageAlt} className="w-full h-auto max-h-[480px] object-contain bg-white" />
        </div>
        <div className="flex flex-wrap gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">FAQ</Badge>
        </div>
        <p className="text-lg leading-relaxed text-black/80">{oneLiner}. Below are the most-asked questions about the current verified {brand} discount — answered directly.</p>
        <div className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Tag className="w-6 h-6 shrink-0 text-[#8b3a1a]" />
            <p className="text-lg text-black/80">
              {code ? <>Current verified code: <strong className="text-black font-bold break-all">{code}</strong></> : "No code needed — discount applies automatically via the link"}
            </p>
          </div>
          <a href={href} target="_blank" rel="noopener noreferrer" className="shrink-0 self-start sm:self-auto">
            <Button className="btn-primary rounded-full px-5">{linkText} <ExternalLink className="w-4 h-4 ml-2" /></Button>
          </a>
        </div>
        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">{brand} Discount Code FAQ</h2>
          {code ? (
            <>
              <Answer question={`Does ${brand} offer discount codes?`}>
                Yes. The current verified {brand} code is <strong>{code}</strong>. Use it at checkout on the official store: {link}.
              </Answer>
              <Answer question={`What is the best ${brand} discount code right now?`}>
                <strong>{code}</strong> is the verified code currently listed for {brand}.
              </Answer>
              <Answer question={`How do I apply a ${brand} promo code?`}>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Click the verified {brand} link above.</li>
                  <li>Add products to your cart.</li>
                  <li>Enter <strong>{code}</strong> in the discount-code box at checkout.</li>
                  <li>Confirm the discount applied before paying.</li>
                </ol>
              </Answer>
              <Answer question={`Why isn't my ${brand} code working?`}>
                Check the spelling and capitalization of <strong>{code}</strong>, confirm your items are eligible, and make sure you're on {brand}'s official store — not a marketplace listing.
              </Answer>
              <Answer question={`Can I stack ${brand} discount codes?`}>
                Most stores accept only one discount code per order. If you have more than one, use the one that saves you the most.
              </Answer>
            </>
          ) : (
            <>
              <Answer question={`Does ${brand} have a discount code?`}>
                No code is needed. {offerDesc} applies automatically when you shop through the verified link: {link}.
              </Answer>
              <Answer question={`How do I get the ${brand} discount?`}>
                Click the verified link above and shop as normal — the discount is attached to the link and applies at checkout. There's nothing to type.
              </Answer>
              <Answer question={`Why didn't the ${brand} discount apply?`}>
                Make sure you clicked through from the ThriveTools link (the discount is tied to it) and that the items in your cart are eligible.
              </Answer>
              <Answer question={`Can I combine the ${brand} link discount with a promo code?`}>
                Link-based discounts apply automatically, so there's no code box to fill. The link offer is the verified deal.
              </Answer>
            </>
          )}
          <Answer question={`Does ${brand} offer free shipping?`}>
            Shipping terms change over time — check the shipping information on {brand}'s official site at checkout.
          </Answer>
          <Answer question={`Does ${brand} have a money-back guarantee or returns policy?`}>
            Check {brand}'s official site for their current guarantee and returns terms before you buy.
          </Answer>
          {!code && (
            <Answer question="Is it safe to buy through the ThriveTools link?">
              Yes. The link takes you to {brand}'s official store. ThriveTools may earn a commission on your purchase at no extra cost to you.
            </Answer>
          )}
          <Answer question="Where can I find all verified ThriveTools codes?">
            On the <Link href="/discount-codes" className="text-[#8b3a1a] underline">ThriveTools discount-codes page</Link> — the source of truth, updated whenever codes change.
          </Answer>
        </section>
        <p className="text-sm text-black/50 leading-relaxed"><strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.</p>
      </article>
    </PageLayout>
  );
}

export const [
  WaterDropDiscountCodeFaq,
  JoovvDiscountCodeFaq,
  MitoRedLightDiscountCodeFaq,
  RedTherapyDiscountCodeFaq,
  VielightDiscountCodeFaq,
  OxygenAdvantageDiscountCodeFaq,
  NeurosityDiscountCodeFaq,
  BlueCubeBathsDiscountCodeFaq,
  MytrexDiscountCodeFaq,
  OmnipemfDiscountCodeFaq,
  HealthAndYogaDiscountCodeFaq,
  SelfDecodeDiscountCodeFaq,
  NeuroVizrDiscountCodeFaq,
  HeatBitDiscountCodeFaq,
  MuseHeadbandDiscountCodeFaq,
  AiresTechDiscountCodeFaq,
] = brands.map((brand) => function BrandDiscountFaq() { return <LongevityTechDiscountFaq post={brand} />; });