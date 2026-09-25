import selfdecodeImage from "@assets/selfdecode-discount-code-faq-hero.png";
import museImage from "@assets/muse-headband-discount-code-faq-hero.png";
import waterdropImage from "@assets/waterdrop-discount-code-hero.jpg";
import earthrunnersImage from "@assets/earthrunners-discount-code-hero_1790058248055.jpg";
import vellgusImage from "@assets/vellgus-mini-official.jpg";

export type WellnessTechBrandGuide = {
  brand: string;
  slug: string;
  title: string;
  intro: string;
  body: string;
  pricing: string;
  image: string;
  imageAlt: string;
  faqs: { question: string; answer: string }[];
} & ({ code: string; href: string; linkText: string } | { code?: never; href?: never; linkText?: never });

export const wellnessTechBrandGuides: WellnessTechBrandGuide[] = [
  {
    brand: "SelfDecode",
    slug: "selfdecode-review",
    title: "SelfDecode Review (2026): DNA-Based Health Insights, Explained",
    intro: "This guide takes an in-depth look at SelfDecode based on the company's published information — what the platform is, its flagship offerings, and who they're designed for.",
    body: `## What is SelfDecode?
SelfDecode is a DNA-based precision health software company founded in 2016 by CEO Joe Cohen. It sits under parent company Genius Labs alongside SelfHacked and LabTestAnalyzer. The company describes itself as fully remote, with employees across five continents.

## Flagship products
- **DNA Wellness Reports** — the company offers 1,500+ personalized health reports across 35+ health topics, from nutrition to mental health, based on your DNA.
- **AI Health Coach** — SelfDecode describes this as 24/7 AI guidance built on your genetic data.
- **Labs Analyzer** — upload or order lab tests, interpreted using what the company calls functional/optimal ranges rather than standard "normal" ranges.
- **40x Whole Genome Ultimate Package** — the company says it sequences all ~3 billion base pairs at 40x coverage, unlocking rare-variant screening, pharmacogenomics, mitochondrial, and family-planning reports. According to SelfDecode, every DNA bundle includes a cheek-swab kit plus diet, supplement, and lifestyle recommendations.

## Who is it for?
People who want to base nutrition, supplement, and lifestyle decisions on their own genetic data rather than generic advice.

## What sets SelfDecode apart
According to the company, its genetic prediction technology is "the only consumer method validated in a peer-reviewed Nature study," with polygenic risk scores backed by over 100,000 scientific references. SelfDecode says each health report analyzes thousands of genetic variants rather than one or two. The company also says its privacy practices follow HIPAA and GDPR policies, describes its encryption as world-class, and states "we will never share your data."`,
    pricing: "As listed on the official store (September 2026): Essential Bundle $499, Essential+ Bundle $799, Ultimate Bundle $899, 40x Whole Genome Ultimate Package $1,999. HSA/FSA eligible, according to the company. Check the brand's site for current pricing.",
    code: "THRIVETOOLS10",
    href: "https://selfdecode.com/?a_aid=6536b9c629095",
    linkText: "Shop SelfDecode with code THRIVETOOLS10",
    image: selfdecodeImage,
    imageAlt: "SelfDecode DNA testing kit",
    faqs: [
      { question: "What is SelfDecode?", answer: "A DNA-based precision health platform founded in 2016 that turns genetic data into personalized health, diet, and supplement recommendations." },
      { question: "How does SelfDecode work?", answer: "You submit a cheek-swab DNA sample (or upload existing DNA data), and the platform generates personalized reports and recommendations." },
      { question: "Does SelfDecode sell my genetic data?", answer: "The company states it will never share your data and follows HIPAA and GDPR policies." },
    ],
  },
  {
    brand: "Muse",
    slug: "muse-headband-review",
    title: "Muse Headband Review (2026): Brain-Sensing Meditation, Explained",
    intro: "This guide takes an in-depth look at the Muse headband based on the company's published information — what it is, how it works, and who it's designed for.",
    body: `## What is Muse?
Muse is a brain-sensing headband line from InteraXon, a Canadian neurotechnology company founded in 2007 and headquartered in Toronto, Canada. The company says the headbands use EEG sensors to give real-time neurofeedback during meditation: a calm mind plays gentle sounds while a wandering mind plays storm sounds, with the goal of training focus over time through the Muse app (500+ guided sessions, progress tracking, and goals).

## Flagship products
- **Muse 2** — EEG brain training for focus and calm; the company says it also tracks heart rate, breath, and body movement.
- **Muse S Athena** (2025 flagship) — combines EEG with fNIRS for brain blood-oxygen monitoring, plus overnight sleep staging measured from brainwaves, according to Muse.
- **Muse Premium** — optional subscription unlocking focus training, AI coaching, and advanced insights.

## Who is it for?
Meditation beginners who want feedback on whether they're actually focused, and biohackers interested in quantifying sleep and brain activity.

## What sets Muse apart
According to the company, Muse S Athena is "the only wearable that reads your brain while you sleep," with sleep staging measured from brainwaves (EEG), which the brand calls the gold standard for sleep staging and says has 86% accuracy versus expert-scored sleep studies. Muse says it has sold more portable EEG devices than any other system in history and that its devices are used by 500,000+ people with hundreds of third-party published research papers.`,
    pricing: "As listed on the official store (September 2026): Muse 2 $249.99, Muse S Athena $474.99, Muse Premium $45/year. Check the brand's site for current pricing.",
    code: "THRIVE25",
    href: "https://choosemuse.com/thrive25",
    linkText: "Shop Muse with code THRIVE25",
    image: museImage,
    imageAlt: "Muse brain-sensing meditation headband",
    faqs: [
      { question: "What does the Muse headband do?", answer: "According to the company, it reads brain activity via EEG sensors and gives real-time audio feedback during meditation to help train focus." },
      { question: "What is the difference between Muse 2 and Muse S Athena?", answer: "According to Muse, Athena adds fNIRS brain blood-oxygen monitoring and overnight sleep staging; Muse 2 focuses on meditation training plus heart rate, breath, and movement tracking." },
      { question: "Is Muse a Canadian company?", answer: "Yes — InteraXon was founded in 2007 and is headquartered in Toronto, Canada." },
    ],
  },
  {
    brand: "WaterDrop",
    slug: "waterdrop-review",
    title: "WaterDrop Review (2026): Water Filtration Systems Guide",
    intro: "This guide takes an in-depth look at WaterDrop based on the company's published information — what the brand is, its flagship products, and who they're designed for.",
    body: `## What is WaterDrop?
WaterDrop is a water purification company founded in 2015. Its stated mission is to develop innovative water purification technologies to enhance life quality for families. The brand's US site lists an Ontario, California address.

## Flagship products
- **G3 series** — countertop and under-sink reverse osmosis systems.
- **X Series** — including the X16, which the brand calls the "World's Fastest Flow RO system."
- Also: countertop RO models (A1), water filter pitchers, refrigerator water filters, whole-house filters, and an instant hot water dispenser with RO filtration.

## Who is it for?
Households wanting cleaner drinking water — from renters (countertop models, pitchers) to homeowners (under-sink and whole-house systems).

## What sets WaterDrop apart
According to the company, its products are NSF certified for purity and safety. WaterDrop says it holds 300+ granted patents and Red Dot Product Design Awards (G3, X Series 2024), is available in 82+ countries, and ranked No.1 in Amazon's water purification category. The brand says it works with the Environmental Working Group on a tap-water contaminant lookup tool while sponsoring The Water Project charity.`,
    pricing: "As listed on the official store (September 2026): products range from about $27 (replacement filters) to $1,299, with RO systems around $649–$799. Check the brand's site for current pricing.",
    code: "KAWTHARLARAKI",
    href: "https://www.waterdropfilter.ca/?ref=ozpbpmdp",
    linkText: "Shop WaterDrop with code KAWTHARLARAKI",
    image: waterdropImage,
    imageAlt: "WaterDrop water filtration system",
    faqs: [
      { question: "What is WaterDrop known for?", answer: "Reverse osmosis water filtration systems for countertop, under-sink, and whole-house use." },
      { question: "When was WaterDrop founded?", answer: "2015, according to the company's brand story." },
      { question: "Does WaterDrop have NSF certification?", answer: "The brand describes its products as NSF certified." },
    ],
  },
  {
    brand: "EarthRunners",
    slug: "earthrunners-review-guide",
    title: "EarthRunners Review (2026): Grounding Sandals Guide",
    intro: "This guide takes an in-depth look at EarthRunners based on the company's published information — what the brand is, its flagship products, and who they're designed for.",
    body: `## What is EarthRunners?
EarthRunners makes minimalist grounding (earthing) sandals inspired by the Tarahumara huarache design — thin, zero-drop, barefoot-style adventure sandals. Founder Mike Dally built the first prototype in early 2012 and launched Earth Runners on Kickstarter that year. It's an American brand based in California.

## Flagship products
- **Circadian Adventure Sandals** — the brand's #1 best-seller, with a 9mm Vibram Gumlite sole.
- **Alpha, Atlas, Primal, Chronos** — the core adult sandal lineup.
- Also: foot-health accessories including toe spacers and DIY earthing shoe kits.

## Who is it for?
Barefoot-style runners, hikers, and travelers who want minimalist footwear — plus grounding enthusiasts who want to stay connected to the earth while wearing sandals.

## What sets EarthRunners apart
According to the company, its patented grounded conductive laces are stainless steel-lined and grounded via a copper plug exposed on the outsole. The brand says this lets wearers stay grounded like being barefoot and that the effect is measurable with a voltmeter. EarthRunners describes its zero-drop huarache-inspired design as promoting natural gait and foot strength, and says it donates 1% of all sales to True Messages, a nonprofit honoring the Rarámuri (Tarahumara) running heritage.`,
    pricing: "As listed on the official store (September 2026): adult sandals $77–$120 (Primal $77, Circadian $98, Atlas $120); children's sandals $35. Check the brand's site for current pricing.",
    code: "THRIVETOOLS",
    href: "https://earthrunners.com/?rfsn=7676227.de5b78",
    linkText: "Shop EarthRunners with code THRIVETOOLS",
    image: earthrunnersImage,
    imageAlt: "EarthRunners minimalist grounding sandals",
    faqs: [
      { question: "What are grounding sandals?", answer: "Sandals with conductive elements that the brand says connect the wearer to the earth's electrical charge, similar to walking barefoot." },
      { question: "Who founded EarthRunners?", answer: "Mike Dally, who launched the brand on Kickstarter in 2012." },
      { question: "What is the Circadian sandal?", answer: "EarthRunners' #1 best-selling model — a 9mm Vibram-soled adventure sandal with grounded conductive laces, according to the company." },
    ],
  },
  {
    brand: "Vellgus",
    slug: "vellgus-review",
    title: "Vellgus Guide (2026): At-Home Red Light Therapy Panels",
    intro: "This guide takes an in-depth look at Vellgus based on the company's published information — what the brand is, its flagship products, and who they're designed for.",
    body: `## What is Vellgus?
Vellgus is a red light therapy company offering at-home photobiomodulation panels. Its site says it serves the USA and Canada with free shipping in both countries.

## Flagship products
- **VELLGUS mini** — compact panel.
- **VELLGUS elite / elite v2** — multi-wavelength panels.
- **VELLGUS pro / pro V2** — full-body panels.
- **VELLGUS max 300** — the largest modular panel.
- **Infrared sauna blanket.**
The brand says its panels emit six red and near-infrared wavelengths (480, 630, 660, 810, 830, and 850nm), which it links to cellular repair and renewal, improved circulation, increased energy, and better sleep.

## Who is it for?
People building an at-home red light therapy setup — from a compact starter panel to full-body modular systems.

## What sets Vellgus apart
According to the company, its devices offer six-wavelength output (480/630/660/810/830/850nm), and it claims no other red/NIR device offers this multi-wave output. Vellgus cites irradiance of over 245 mW/cm² at 0 inches on larger panels and describes its devices as "FDA-registered Class II medical devices" and ETL Intertek certified for electrical safety. Registration is not the same as FDA clearance or approval. The brand also advertises a modular Black Series design, a 30-day free trial, and up to a 3-year warranty.`,
    pricing: "As listed on the official store (September 2026): VELLGUS mini $339, reviv pro $449, elite $549. Check the brand's site for current pricing.",
    image: vellgusImage,
    imageAlt: "VELLGUS mini red light therapy panel from the official Vellgus website",
    faqs: [
      { question: "What is Vellgus?", answer: "An at-home red light therapy brand offering multi-wavelength panels and an infrared sauna blanket, serving the USA and Canada." },
      { question: "What wavelengths do Vellgus panels emit?", answer: "According to the brand: 480, 630, 660, 810, 830, and 850nm." },
      { question: "Are Vellgus devices FDA approved?", answer: 'The company describes them as "FDA-registered Class II medical devices" — registration is not the same as FDA clearance or approval.' },
    ],
  },
];