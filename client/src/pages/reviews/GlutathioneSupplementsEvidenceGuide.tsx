import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import type { ReactNode } from "react";
import { Link } from "wouter";

const title =
  "Glutathione Supplements: What the Evidence Actually Says, and What It Doesn't";
const affiliateUrl = "https://shop.cymbiotika.com/SFVM9DY9";

const imageModules = import.meta.glob<string>(
  "../../../../attached_assets/glutathione-*.webp",
  { eager: true, query: "?url", import: "default" },
);

const imageMetadata: Record<
  string,
  { alt: string | null; caption: string | null }
> = {
  "glutathione-hero.webp": {
    alt: "Close-up of a teal Cymbiotika Liposomal Glutathione packet in Citrus Vanilla flavour, an amber drop spilling from its top",
    caption: null,
  },
  "glutathione-absorption.webp": {
    alt: "Cymbiotika liposomal delivery diagram: capsule powder stops at the gut wall, liposomes reach the blood",
    caption: null,
  },
  "glutathione-facts.webp": {
    alt: "Supplement Facts for Cymbiotika Liposomal Glutathione: per 5 mL packet, 150 mg glutathione with riboflavin, CoQ10 and PQQ",
    caption: "Supplement Facts for Cymbiotika Liposomal Glutathione: 150 mg glutathione per 5 mL pouch, with CoQ10, PQQ and riboflavin.",
  },
};

const articleLinkClass = "break-words text-[#8b3a1a] underline underline-offset-4";

const faqs = [
  {
    q: "Does oral glutathione actually work?",
    a: "It can raise body stores of glutathione, but slowly and only at higher doses. A six month randomized trial found 1,000 mg a day raised glutathione 30 to 35 percent in blood cells, and 250 mg a day raised it 17 percent. A single dose does almost nothing, because gut enzymes break glutathione apart. No trial has shown oral glutathione changes a health outcome such as living longer or getting sick less often.",
  },
  {
    q: "Is liposomal glutathione better than regular glutathione?",
    a: "Probably, for absorption, but the evidence is thin. The only published human study is a 2018 pilot in twelve adults with no placebo group, which found liposomal glutathione raised blood glutathione 40 percent in four weeks. A small 2026 crossover study also found better blood exposure from an improved delivery form. Neither study measured health outcomes, and neither tested a specific brand's product.",
  },
  {
    q: "Is NAC better than taking glutathione directly?",
    a: "For raising glutathione levels, yes, the evidence favours NAC. NAC supplies cysteine, the rate limiting building block your body uses to make glutathione, and it reliably raises tissue glutathione in trials. It is also far cheaper, and it has a long clinical track record, including its use as the antidote for paracetamol poisoning. The best aging data is for GlyNAC, NAC combined with glycine.",
  },
  {
    q: "How much glutathione should you take?",
    a: "There is no established dose, because no trial has tested doses against health outcomes. The trials that raised glutathione levels used 250 to 1,000 mg a day of oral glutathione for six months, or 500 to 1,000 mg a day of liposomal glutathione for four weeks. Most liposomal products, including Cymbiotika's, contain far less per serving, about 150 mg per pouch. That dose gap is worth knowing before you buy.",
  },
  {
    q: "Does glutathione help with skin brightening?",
    a: "The evidence is weak. A handful of small, short trials have tested oral glutathione for skin lightening with mixed results, and no large trial has confirmed a benefit. Avoid injectable glutathione for skin lightening. The FDA has warned against unapproved injectable products marketed for this purpose.",
  },
  {
    q: "Is glutathione safe?",
    a: "Oral glutathione was well tolerated in trials lasting up to six months, with no serious side effects reported. Long term safety beyond six months has not been studied in a controlled trial. NAC is generally well tolerated but can cause nausea, and it needs care in asthma and with some medications. Talk to a clinician before starting either, especially if you are pregnant, breastfeeding, or take prescription drugs.",
  },
  {
    q: "Where can I buy Cymbiotika Liposomal Glutathione?",
    a: `Through my affiliate link here: Cymbiotika Liposomal Glutathione (${affiliateUrl}). It is a liquid pouch formula, citrus vanilla flavour, one pouch a day, 150 mg of glutathione per pouch plus CoQ10, PQQ and riboflavin. A box holds 26 pouches and costs 88 dollars one time, with subscription pricing from about 63 dollars per box. Check the current price on the product page, as prices change.`,
  },
];

function AffiliateLink({ children }: { children: ReactNode }) {
  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={articleLinkClass}
    >
      {children}
    </a>
  );
}

function ArticleImage({ filename }: { filename: string }) {
  const src = imageModules[`../../../../attached_assets/${filename}`];
  const metadata = imageMetadata[filename];
  if (!src || !metadata?.alt) return null;

  return (
    <figure className="card-glass overflow-hidden rounded-2xl">
      <img
        src={src}
        alt={metadata.alt}
        loading={filename === "glutathione-hero.webp" ? "eager" : "lazy"}
        decoding="async"
        className="h-auto w-full bg-[#f8ece0] object-contain"
      />
      {metadata.caption && (
        <figcaption className="px-4 py-3 text-sm leading-relaxed text-[#3d1a28]/70 sm:px-6">
          {metadata.caption}
        </figcaption>
      )}
    </figure>
  );
}

export default function GlutathioneSupplementsEvidenceGuide() {
  const heroImage = imageModules[
    "../../../../attached_assets/glutathione-hero.webp"
  ];
  const heroMetadata = imageMetadata["glutathione-hero.webp"];
  const seoImage = heroImage && heroMetadata.alt;

  return (
    <PageLayout
      title={title}
      backLabel="Blog"
      backHref="/blog"
      showShare
      seo={{
        title,
        description:
          "A plain-language guide to oral and liposomal glutathione, NAC, the limits of the available studies, and what to know about Cymbiotika's 150 mg pouch.",
        canonical:
          "https://thrivetools.co/blog/glutathione-supplements-evidence-guide",
        noSuffix: true,
        ogType: "article",
        datePublished: "2026-11-14",
        ...(seoImage
          ? { image: heroImage, imageAlt: heroMetadata.alt as string }
          : {}),
      }}
    >
      <FaqJsonLd faqs={faqs} />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">
          Guides / Supplements
        </Badge>
        <span className="text-sm text-[#3d1a28]/55">November 14, 2026</span>
      </div>

      <ArticleImage filename="glutathione-hero.webp" />

      <article className="space-y-8 text-[#3d1a28]/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#3d1a28] [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#3d1a28] [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-[#3d1a28]">
        <section className="space-y-4">
          <p className="border-l-2 border-[#c4622d]/50 pl-4">
            Glutathione is having a moment. It is called the master antioxidant,
            the body's detox molecule, the key to glowing skin and slower aging.
            Liposomal glutathione sells for close to ninety dollars a box. IV
            glutathione drips are marketed at wellness clinics. Influencers talk
            about it like a switch you can flip.
          </p>
          <p>
            Here is the research gap almost nobody mentions. The entire
            liposomal glutathione category, the expensive pouches and the
            absorption claims, rests largely on a single pilot study of twelve
            people, published in 2018, with no placebo group. That is the gap
            this article starts from. The marketing is years ahead of the
            evidence, and the honest story is more interesting than the sales
            pitch.
          </p>
        </section>

        <section className="space-y-4">
          <h2>The short version</h2>
          <p>
            Your body makes glutathione itself, and that is the first thing to
            know. Swallowing plain glutathione mostly gets broken down in the
            gut before it reaches your blood, which is why the early science
            said it does not work. A longer, better trial later showed that high
            doses taken daily for six months do raise body stores, by about 30
            to 35 percent. Liposomal forms, where glutathione is wrapped in tiny
            fat bubbles, look better in the one small pilot study that tested
            them, but that study had twelve people, no placebo group, and
            industry funding. The strongest evidence for raising glutathione
            does not come from glutathione at all. It comes from NAC, a cheap
            precursor your body uses to build glutathione itself. If you want
            the short verdict, it is this. NAC has the better evidence and
            costs far less. Liposomal glutathione is promising but preliminary,
            and the dose in most products is far lower than the doses used in
            the trials.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What glutathione actually is</h2>
          <p>
            Glutathione is a small molecule your body builds from three amino
            acids: glutamate, cysteine and glycine. It is present in nearly
            every cell, and it is most concentrated in the liver. Its jobs are
            real and important. It neutralizes free radicals, the reactive
            molecules produced by normal metabolism. It supports the liver's
            phase two detoxification, the step where toxins are made water
            soluble so they can be excreted. It helps immune cells function,
            and it helps recycle other antioxidants, including vitamins C and
            E.
          </p>
          <p>
            Your body makes it constantly, and it uses it constantly. Levels
            tend to fall with age, and they fall faster under chronic oxidative
            stress, poor sleep, heavy alcohol use and certain illnesses. A 2011
            study from the Sekhar lab found that older adults with low
            glutathione had deficient synthesis, not just faster use, and that
            giving the two limiting building blocks restored their levels to
            youthful ranges within two weeks. That finding matters, because it
            points at the real lever. The bottleneck is supply of the building
            blocks, especially cysteine.
          </p>
          <p>
            That is also why the food and lifestyle basics matter before any
            supplement. Sulfur rich foods such as cruciferous vegetables,
            garlic and onions supply the raw material. Whey protein is rich in
            cysteine. Sleep and exercise support your body's own antioxidant
            defenses, which is one more reason the fundamentals in our guides
            on{" "}
            <Link href="/blog/deep-sleep-longevity-guide" className={articleLinkClass}>
              deep sleep
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/vo2-max-zone-2-cardio-longevity-guide"
              className={articleLinkClass}
            >
              VO2 max and Zone 2 cardio
            </Link>{" "}
            matter more than any single pill. A supplement cannot replace a
            system that is under supplied.
          </p>
        </section>

        <section className="space-y-4">
          <h2>
            The absorption problem, and why the early science said it does not
            work
          </h2>
          <p>
            The problem with swallowing glutathione is the gut. Glutathione is a
            tripeptide, a chain of three amino acids, and the intestinal wall is
            lined with an enzyme called gamma-glutamyltransferase that cuts
            that chain apart. The pieces get absorbed as amino acids, and your
            cells then rebuild glutathione from them. That is not nothing, but
            it is not the same as absorbing intact glutathione into the blood.
          </p>
          <p>
            The classic study is Witschi and colleagues, 1992. Seven healthy
            adults took about 3 grams of oral glutathione, and over the next
            four and a half hours there was essentially no net rise in blood
            glutathione. For years, that was the last word. Oral glutathione
            was written off as a waste of money.
          </p>
          <p>
            That conclusion turned out to be too simple. A single dose is not
            the same as months of daily dosing, and blood levels after one dose
            are not the same as body stores built up over time.
          </p>
        </section>

        <section className="space-y-4">
          <h2>
            The surprise: a six month trial found oral glutathione does raise
            body stores
          </h2>
          <p>
            The best trial of plain oral glutathione is Richie and colleagues,
            published in the European Journal of Nutrition in 2015. It was a
            randomized, double blind, placebo controlled trial, the strongest
            design available, and it ran for six months in 54 non smoking
            adults.
          </p>
          <p>
            The results were real. At 1,000 mg a day, glutathione rose 30 to 35
            percent in red blood cells, plasma and lymphocytes, and 260 percent
            in cheek cells. At 250 mg a day, blood levels rose 17 percent.
            Natural killer cell activity, a measure of immune function, more
            than doubled by month three in the high dose group.
          </p>
          <p>
            Three caveats belong next to those numbers. First, levels returned
            to baseline after a one month washout, so whatever was gained faded
            once dosing stopped. Second, the product and the placebo were
            supplied by Kyowa Hakko Bio, the maker of the Setria glutathione
            used in the trial. That does not invalidate the results, but it is
            a conflict worth knowing. Third, and most important, the trial
            measured glutathione levels, not health outcomes. Nobody in the
            trial was shown to live longer, get sick less often, or look
            younger. Higher glutathione is a biomarker change, not by itself a
            proven health benefit.
          </p>
          <p>
            So plain oral glutathione is not useless. It is slow, it needs gram
            scale doses taken for months, and it has never been shown to change
            a health outcome.
          </p>
        </section>

        <section className="space-y-4">
          <h2>
            Liposomal glutathione: the idea is sound, the evidence is one small
            pilot
          </h2>
          <p>
            Liposomal delivery is an attempt to solve the gut problem.
            Glutathione is wrapped in tiny bubbles of phospholipid, the same
            material as cell membranes, which are meant to protect it through
            digestion and help it reach the blood.
          </p>
          <ArticleImage filename="glutathione-absorption.webp" />
          <p>
            The study everyone cites is Sinha and colleagues, published in the
            European Journal of Clinical Nutrition in 2018. Twelve healthy
            adults took liposomal glutathione at 500 or 1,000 mg a day for four
            weeks. Whole blood glutathione rose 40 percent, plasma rose 28
            percent, red blood cells rose 25 percent, and glutathione inside
            immune cells rose up to 100 percent. Oxidative stress markers fell,
            with 8-isoprostane down about 35 percent. Natural killer cell
            cytotoxicity rose up to 400 percent by week two, and lymphocyte
            proliferation rose about 60 percent.
          </p>
          <p>
            Those are striking numbers. Now read the small print, because it
            changes what they mean. Twelve people. No placebo group. No plain
            glutathione group, so the study cannot show that liposomes beat the
            standard form. Funding and product came from a company that sells
            liposomal glutathione. And the product tested was a different
            manufacturer's liquid formula, not the product you will find on a
            store shelf today.
          </p>
          <p>
            That is the entire published human evidence base for liposomal
            glutathione raising body stores: one small, uncontrolled, industry
            funded pilot from 2018. Nothing larger has replicated it. No trial
            has tested whether liposomal glutathione changes any health
            outcome, and no trial has tested any specific brand's formula,
            including Cymbiotika's.
          </p>
          <p>
            There is one newer data point. A small 2026 crossover study by
            Solnier and colleagues, in 14 adults, compared a micellar
            glutathione preparation against standard glutathione and found
            about 2.5 times the incremental blood exposure from a single dose.
            It is a pharmacokinetic study, not an outcome study, and the sample
            is tiny, but it is the freshest evidence we have, and it points the
            same way. Better delivery does get more glutathione into the blood.
            The open question is still whether that changes anything about
            your health.
          </p>
        </section>

        <section className="space-y-4">
          <h2>NAC: the precursor with the stronger case</h2>
          <p>
            Here is the part the supplement ads usually skip. If your goal is
            to raise glutathione, the best evidenced route is not to swallow
            glutathione at all. It is to give your body the building block it
            is short on, and let it build glutathione where it is needed.
          </p>
          <p>
            That building block is cysteine, the rate limiting amino acid in
            glutathione synthesis. Free cysteine is unstable, so the practical
            form is NAC, N-acetylcysteine, a stable version your body converts
            to cysteine. NAC reliably raises tissue glutathione in trials, and
            it has a clinical track record no glutathione product can match. It
            is on the World Health Organization's essential medicines list as
            the antidote for paracetamol poisoning, precisely because it
            restores glutathione in the liver.
          </p>
          <p>
            The aging data is genuinely interesting. Sekhar and colleagues,
            2011, gave older adults NAC plus glycine for two weeks and restored
            their red blood cell glutathione to youthful levels, alongside
            improvements in insulin resistance and mitochondrial function
            markers. Kumar and colleagues, 2023, ran a 16 week randomized trial
            of GlyNAC, glycine plus NAC, in older adults and reported improved
            glutathione status, lower oxidative stress and inflammation, and
            better gait speed and strength. NAC at 600 to 1,200 mg a day also
            has Cochrane level support for reducing flare ups in chronic lung
            disease, and a 2015 systematic review found trial data across
            psychiatric conditions including schizophrenia, bipolar disorder
            and OCD.
          </p>
          <p>
            NAC is also far cheaper than liposomal glutathione, typically a few
            dollars a month rather than close to ninety. One honest note: NAC
            was first approved as a prescription drug, and its supplement
            status was questioned by the FDA in 2020. In 2022 the FDA said it
            would not enforce against NAC sold as a dietary supplement, given
            its long history of safe use. It remains widely available.
          </p>
          <p>
            None of this makes NAC a longevity drug. The aging trials tested
            GlyNAC, the combination, not NAC alone, and no trial has shown NAC
            extends lifespan or prevents disease in healthy people. But on the
            specific question of raising glutathione, NAC has more and better
            evidence than any glutathione product, at a fraction of the price.
          </p>
        </section>

        <section className="space-y-4">
          <h2>
            Cymbiotika Liposomal Glutathione: what it is, and an honest
            assessment
          </h2>
          <p>
            This is the product I use myself, and the one this article is built
            around, so here is exactly what it is, with no exaggeration.
          </p>
          <p>
            Cymbiotika Liposomal Glutathione is a liquid formula in single serve
            pouches, citrus vanilla flavour. Each 5 mL pouch contains 150 mg of
            reduced glutathione, plus CoQ10 as ubiquinol, PQQ, riboflavin and
            phosphatidylcholine from sunflower lecithin. The dose is one pouch
            a day, best taken on an empty stomach at least 20 minutes before a
            meal, and the brand suggests six days on and one day off. A box
            holds 26 pouches. The price on cymbiotika.com, checked November 14,
            2026, is 88 dollars one time per box, with subscription pricing
            from about 63 dollars per box. It comes with free shipping and a 60
            day money back guarantee. Prices change, so check the current price
            on the product page.
          </p>
          <ArticleImage filename="glutathione-facts.webp" />
          <p>
            You can find it through my affiliate link here:{" "}
            <AffiliateLink>Cymbiotika Liposomal Glutathione</AffiliateLink>{" "}
            ({affiliateUrl}). Disclosure: I'm affiliated with Cymbiotika, but I
            only recommend things I can actually stand behind so here's my honest
            breakdown.
          </p>
          <p>
            Now the honest assessment. The format is the right one. A liposomal
            liquid is the delivery form with the best absorption data, and a
            pouch you squeeze into your mouth avoids the swallowing and
            digestion problems of a capsule. But two things should temper
            expectations. First, the dose is 150 mg per pouch, far below the
            500 to 1,000 mg a day used in the liposomal pilot study, and below
            the 250 to 1,000 mg a day used in the six month oral trial. Second,
            no trial has tested this specific product, so there is no published
            evidence that this formula at this dose raises glutathione levels
            in anyone.
          </p>
          <p>
            One more flag. Cymbiotika's product page shows a chart claiming up
            to three times higher absorption than a standard capsule, measured
            in blood over 24 hours. That chart is the company's own data, not a
            published trial, and it should be read as marketing, not evidence.
          </p>
          <p>
            If you choose a liposomal glutathione, this is a sensible pick for
            the format. Just do not expect the trial results, because those
            results came from different products at much higher doses.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What about skin brightening?</h2>
          <p>
            Glutathione is heavily marketed for skin brightening, and this is
            where the gap between claims and evidence is widest. A handful of
            small, short trials have tested oral glutathione for skin
            lightening, with mixed results, and no large trial has confirmed a
            benefit. The claim rests on glutathione's role in melanin
            production, which is real biochemistry, but biochemistry is not the
            same as a proven cosmetic effect.
          </p>
          <p>
            Be especially careful with injectable glutathione. The FDA has
            warned against unapproved injectable glutathione products marketed
            for skin lightening, citing safety concerns. A supplement you
            swallow is not the same as an injection, and the injection route
            carries risks no skin claim justifies.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Who might consider it, and who should not</h2>
          <p>
            A liposomal glutathione or NAC supplement might be worth considering
            if you are older and your glutathione synthesis has slowed, if you
            have high oxidative stress from training, poor sleep or chronic
            stress, or if you simply want to support your antioxidant defenses
            and understand the evidence is preliminary. If that is you, NAC is
            the better evidenced and cheaper starting point, and a liposomal
            glutathione is the more expensive, less proven alternative.
          </p>
          <p>
            Do not take glutathione or NAC without talking to a clinician first
            if you are pregnant or breastfeeding, if you take prescription
            medication, or if you have asthma. NAC in particular needs care in
            asthma, and it can interact with some drugs. Oral glutathione was
            well tolerated in trials up to six months, but long term safety
            beyond six months has not been studied in a controlled trial. This
            article is general information, not medical advice, and it does
            not recommend any supplement or dose.
          </p>
        </section>

        <section className="space-y-4">
          <h2>The verdict</h2>
          <p>
            Glutathione matters, and your body makes less of it as you age.
            That part is real. The supplement story is thinner than the
            marketing suggests. Plain oral glutathione can raise body stores,
            but only at high doses taken for months, and it has never been
            shown to change a health outcome. Liposomal glutathione looks
            better on paper, and the one small pilot study behind it is
            encouraging, but it is one study of twelve people with no placebo
            group, and it tested a different product at a much higher dose.
            The newest data, a small 2026 crossover study, supports better
            absorption from improved delivery, but it still measures blood
            levels, not health.
          </p>
          <p>
            If you want to raise glutathione, start with the cheap, well
            evidenced route. NAC, ideally with glycine, has the stronger case,
            and it costs a fraction of the price. If you prefer a liposomal
            glutathione, choose a liquid pouch format like{" "}
            <AffiliateLink>Cymbiotika Liposomal Glutathione</AffiliateLink>{" "}
            ({affiliateUrl}), know that the dose is lower than the trial doses,
            and keep your expectations honest. And before either, look at the
            basics. Sleep, exercise, and sulfur rich foods are what your
            glutathione system runs on, and no pouch replaces them.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Frequently asked questions</h2>
          {faqs.map(({ q, a }) => (
            <div key={q} className="card-glass rounded-2xl p-5 sm:p-6">
              <h3>{q}</h3>
              <p className="mt-2">
                {q === "Where can I buy Cymbiotika Liposomal Glutathione?" ? (
                  <>
                    {a.slice(0, a.lastIndexOf("Cymbiotika Liposomal Glutathione"))}
                    <AffiliateLink>Cymbiotika Liposomal Glutathione</AffiliateLink>
                    {a.slice(
                      a.lastIndexOf("Cymbiotika Liposomal Glutathione") +
                        "Cymbiotika Liposomal Glutathione".length,
                    )}
                  </>
                ) : (
                  a
                )}
              </p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2>Sources</h2>
          <ol className="list-decimal space-y-2 pl-6">
            <li>
              Richie JP Jr, Nichenametla S, Neidig W, Calcagnotto A, Haley JS,
              Schell TD, Muscat JE. Randomized controlled trial of oral
              glutathione supplementation on body stores of glutathione.
              European Journal of Nutrition. 2015;54:251-263. PMID 24791752.
            </li>
            <li>
              Witschi A, Reddy S, Stofer B, Lauterburg BH. The systemic
              availability of oral glutathione. European Journal of Clinical
              Pharmacology. 1992;43:667-669.
            </li>
            <li>
              Sinha R, Sinha I, Calcagnotto A, et al. Oral supplementation with
              liposomal glutathione elevates body stores of glutathione and
              markers of immune function. European Journal of Clinical
              Nutrition. 2018;72:105-111. PMID 28853742.
            </li>
            <li>
              Sekhar RV, et al. Deficient synthesis of glutathione underlies
              oxidative stress in aging and can be corrected by dietary
              cysteine and glycine supplementation. American Journal of
              Clinical Nutrition. 2011;94:847-853.
            </li>
            <li>
              Kumar P, et al. Supplementing glycine and N-acetylcysteine
              (GlyNAC) in older adults improves glutathione deficiency,
              oxidative stress, mitochondrial dysfunction, inflammation,
              insulin resistance, and aging hallmarks. Journals of Gerontology
              Series A. 2023;78:75-89. PMID 35975308.
            </li>
            <li>
              Deepmala, et al. Clinical trials of N-acetylcysteine in psychiatry
              and neurology: a systematic review. Neuroscience and
              Biobehavioral Reviews. 2015;55:294-321.
            </li>
            <li>
              Solnier J, et al. Micellar glutathione versus standard
              glutathione, randomized double blind crossover pharmacokinetic
              study, 14 adults. 2026. Reported incremental blood exposure about
              2.5 times higher for the micellar form after a single dose.
            </li>
            <li>
              Cymbiotika. Liposomal Glutathione product page.
              {" "}cymbiotika.com/products/glutathione. Accessed November 14,
              2026. Price 88 dollars one time per box, subscription from about
              63 dollars per box, 150 mg glutathione per 5 mL pouch.
            </li>
          </ol>
        </section>
      </article>
    </PageLayout>
  );
}
