import SeasonalDealsPost, { type SeasonalDeal } from "./SeasonalDealsPost";
import hero from "@assets/generated_images/hero-black-friday-red-light.jpg";

const deals: SeasonalDeal[] = [
  {
    sourceName: "Joovv", name: "Joovv",
    description: "Joovv is my starting point for readers considering a panel-based home setup, with handheld formats also listed in my directory. I would decide how much space and session time I can realistically give it before choosing a device.",
    guideHref: "/product-reviews/joovv-review",
  },
  {
    sourceName: "Mito Red Light", name: "Mito Red Light",
    description: "Mito Red Light earns its spot for readers comparing device formats rather than buying the first panel with a sale badge. My directory currently highlights its masks and supplies a partner link, so check the current lineup and offer terms rather than assuming panel eligibility.",
    guideHref: "/blog/joovv-vs-mito-red-light-vs-redtherapy-comparison",
  },
  {
    sourceName: "Lumebox", name: "Lumebox",
    description: "Lumebox is the portable device I own, and it is the format I would consider when portability matters more than a permanent panel setup. I would check its current device specifications and checkout terms before treating it as interchangeable with a full-body panel.",
    note: "The directory supplies the official store URL, not a Lumebox affiliate URL. Preserve the exact casing of the listed code.",
  },
  {
    sourceName: "RedTherapy", name: "RedTherapy",
    description: "RedTherapy is the full-body panel option I would put alongside other fixed home setups. It is for someone who has decided a panel fits their routine; check the current specifications rather than assuming all panels deliver the same exposure.",
    guideHref: "/blog/joovv-vs-mito-red-light-vs-redtherapy-comparison",
  },
  {
    sourceName: "VieLight Neuro", name: "VieLight Neuro",
    description: "VieLight Neuro belongs in a separate shopping decision: transcranial photobiomodulation rather than a skin-facing or full-body panel. I would read the device guide and its limitations first, not treat it as a substitute for medical care or another panel purchase.",
  },
];

const faqs = [
  { q: "When are Black Friday red light therapy deals available?", a: "Black Friday falls on November 27, 2026, followed by Cyber Monday on November 30. Individual brands announce their own schedules. This page lists standing partner offers and does not confirm that a seasonal device sale has begun." },
  { q: "Which red light therapy brands are included?", a: "Joovv, Mito Red Light, Lumebox, RedTherapy and VieLight Neuro. The selection separates panel shopping, portable devices and transcranial devices rather than claiming they are interchangeable." },
  { q: "Do red light discount codes stack with Black Friday sales?", a: "Not necessarily. Check the brand's current terms and final cart total; device models, bundles and seasonal promotions may have different eligibility. No stacking is promised here." },
  { q: "What is the Lumebox code, and is Mito Red Light a code offer?", a: "The directory lists Lumebox code ThriveTools, with that exact casing, at thelumebox.com. Mito Red Light is listed as a link-based offer, not a checkout code. Follow the listed partner link and verify the current terms." },
  { q: "How should I compare device specifications?", a: "Check the brand's site for current device specs, intended use, instructions and safety information. This page does not supply or invent wavelengths, irradiance measurements, prices or medical-outcome guarantees." },
];

export default function BlackFridayRedLightDeals() {
  return <SeasonalDealsPost
    title="Best Black Friday Red Light Therapy Deals 2026"
    seoTitle="Best Black Friday Red Light Therapy Deals 2026"
    description="Black Friday red light therapy deals 2026: standing partner discount codes and links for five brands, device-format picks and checkout guidance."
    canonical="/blog/black-friday-red-light-therapy-deals-2026"
    image={hero}
    imageAlt="An unbranded red light panel glowing on an oak console beside natural linen in a warm cream room"
    intro="Red light devices are the kind of larger purchase I would plan before the holiday shopping period. These five partnered brands give me a standing offer to check, but the useful choice is the format I will actually use—not a speculative Black Friday price."
    shoppingNote="I separate a full-body panel, a portable device and a transcranial device before comparing offers. Check the brand's site for current device specs, intended use, safety guidance and returns; I am not inventing wavelengths, irradiance or prices to make a deal sound better."
    groups={[{ title: "Five red light partner picks, by format", deals }]}
    faqs={faqs}
  />;
}
