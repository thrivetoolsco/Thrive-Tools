import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import intrinsicPrismImage from "@assets/IMG_1605_1792681508022.webp";

const affiliateUrl = "https://intrinsicprism.com/?ref=THRIVETOOLS";
const title = "Intrinsic Prism Discount Code: 10% Off the Comprehensive Toxin Test With THRIVETOOLS";
const imageAlt = "Intrinsic Prism home test kit being delivered";

const faqs = [
  {
    q: "Is there an Intrinsic Prism discount code?",
    a: "Yes. Use the code THRIVETOOLS at checkout on intrinsicprism.com for 10% off the Comprehensive Toxin Test. If you arrive through a ThriveTools referral link, the code is remembered on your device for 30 days.",
  },
  {
    q: "How much does the Intrinsic Prism Comprehensive Toxin Test cost?",
    a: "The test is listed at $1,999 (one-time) on Intrinsic Prism's website. With the THRIVETOOLS code, 10% comes off at checkout, bringing it to about $1,799 before tax. The test is HSA/FSA eligible, and Intrinsic Prism provides a detailed reimbursement invoice.",
  },
  {
    q: "What does the Intrinsic Prism test measure?",
    a: "It measures 133+ markers in five categories: mycotoxins (29), heavy metals (20), environmental toxins such as BPA, triclosan, and pesticides (38), PFAS chemicals (21), and detox-related genetics (25), including SULT1A1, CYP1A2, GSTP1, GPx4, and COMT.",
  },
  {
    q: "Is the Intrinsic Prism test done at home?",
    a: "Yes. The kit is shipped to you (Intrinsic Prism says kits ship within 24 hours), you collect your samples at home, and a courier picks them up. There is no lab visit or clinic appointment required.",
  },
  {
    q: "Which laboratory analyzes the Intrinsic Prism test?",
    a: "Samples are analyzed by a CLIA-certified, CAP-accredited US laboratory. Results are returned as a personalized report with clinician-reviewed flags, explanations, and a personalized next-step protocol, with 24/7 guidance available.",
  },
  {
    q: "Does Intrinsic Prism ship internationally?",
    a: "Intrinsic Prism ships to most countries. Availability for your specific address is confirmed at checkout.",
  },
  {
    q: "Is the Intrinsic Prism test HSA/FSA eligible?",
    a: "Yes. Intrinsic Prism lists the Comprehensive Toxin Test as HSA/FSA eligible and provides a detailed HSA/FSA reimbursement invoice with your order.",
  },
  {
    q: "Does the Intrinsic Prism test diagnose diseases or conditions?",
    a: "No. Intrinsic Prism states the test is educational and is not intended to diagnose or treat any condition. It measures and reports toxin exposure markers and detox genetics; interpreting what results mean for your health is a conversation for a qualified clinician.",
  },
];

function AffiliateLink({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={affiliateUrl}
      target="_blank"
      rel="noopener noreferrer sponsored"
      className="text-[#8b3a1a] underline underline-offset-4 decoration-[#c4622d]/50 hover:text-[#3d1a28]"
    >
      {children}
    </a>
  );
}

export default function IntrinsicPrismDiscountCode() {
  return (
    <PageLayout
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title: "Intrinsic Prism Discount Code: 10% Off",
        description:
          "A guide to the Intrinsic Prism Comprehensive Toxin Test, what it measures, how the at-home process works, what it costs, and how to use the THRIVETOOLS discount code.",
        canonical: "https://thrivetools.co/blog/intrinsic-prism-discount-code",
        ogType: "article",
        datePublished: "2026-10-22",
        image: intrinsicPrismImage,
        imageAlt,
      }}
    >
      <FaqJsonLd faqs={faqs} />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">Discount Codes</Badge>
        <span className="text-sm text-[#3d1a28]/55">October 22, 2026</span>
      </div>
      <div className="card-glass mb-10 overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          decoding="async"
          src={intrinsicPrismImage}
          alt={imageAlt}
          className="max-h-[520px] w-full bg-[#f8ece0] object-contain"
        />
      </div>

      <article className="space-y-8 text-[#3d1a28]/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#3d1a28] [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#3d1a28] [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-[#3d1a28]">
        <p className="text-sm leading-relaxed text-[#3d1a28]/60">
          <em>
            Affiliate disclosure: ThriveTools is an Intrinsic Prism affiliate partner. If you buy through the links in
            this article or use our code, we may earn a commission at no extra cost to you — in fact, the code lowers
            your price. We only feature products we believe are worth our readers&apos; attention.
          </em>
        </p>

        <p>
          <strong>Quick answer:</strong> Use the Intrinsic Prism discount code <strong>THRIVETOOLS</strong> at checkout
          for <strong>10% off</strong> the Intrinsic Prism Comprehensive Toxin Test — an at-home test kit that measures{" "}
          <strong>133+ markers</strong> covering mycotoxins, heavy metals, environmental toxins, PFAS chemicals, and
          detox genetics, analyzed by a CLIA-certified, CAP-accredited US laboratory. The test lists at{" "}
          <strong>$1,999</strong>, so the code takes it to about $1,799 before tax. You can order through our referral
          link here: <AffiliateLink>Intrinsic Prism Comprehensive Toxin Test</AffiliateLink>.
        </p>

        <p>
          Most of us have only a vague idea of what we&apos;re actually exposed to day to day — through food, water, air,
          cookware, cosmetics, and the buildings we live and work in. The Intrinsic Prism Comprehensive Toxin Test is
          built for people who want to replace that guesswork with a measurement: one at-home kit that screens for
          133+ toxin and detox markers and returns a personalized report explaining what was found. This guide covers
          what the test measures, how the at-home process works, what it costs, how to use the THRIVETOOLS discount
          code, and the honest limitations worth knowing before you order.
        </p>

        <section className="space-y-4">
          <h2>What is the Intrinsic Prism Comprehensive Toxin Test?</h2>
          <p>
            The Comprehensive Toxin Test is Intrinsic Prism&apos;s single, all-in-one toxin exposure profile. Instead of
            ordering separate panels for mold toxins, metals, and plastics, you collect samples at home with one kit
            and receive one integrated report.
          </p>
          <p>
            Intrinsic Prism describes it as a complete view of toxic load and detox capacity: the exposure side measures
            what is present, and the genetics side looks at markers involved in how your body processes and clears those
            compounds. Samples are analyzed by a CLIA-certified, CAP-accredited US laboratory — the same federal
            certification and accreditation framework US clinical labs operate under — and results come back as a
            personalized report with clinician-reviewed flags, explanations of each category, and a personalized
            next-step protocol covering areas like lifestyle, diet, water, air, and environment. The company also
            offers 24/7 guidance through the process.
          </p>
          <p>
            One important framing, which Intrinsic Prism states plainly itself: the test is <strong>educational</strong>.
            It is not intended to diagnose or treat any condition, and it isn&apos;t a substitute for medical care. What it
            does is measure and report — what you and, ideally, your clinician do with that information is a separate
            step.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What does the Intrinsic Prism test measure?</h2>
          <p>The 133+ markers fall into five categories:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Mycotoxins — 29 markers.</strong> Compounds produced by molds, including the aflatoxin family
              (B1, B2, G1, G2, and M1). These are the markers people usually have in mind after a water-damaged building
              or a suspected mold exposure.
            </li>
            <li>
              <strong>Heavy metals — 20 markers.</strong> Including aluminum, antimony, arsenic, barium, and beryllium,
              among others — metals that can come from water, food, cookware, and occupational or environmental
              exposure.
            </li>
            <li>
              <strong>Environmental toxins — 38 markers.</strong> A broad panel of everyday chemicals, including
              bisphenol A (BPA), triclosan, 4-nonylphenol, and agricultural chemicals such as 2,4-D and atrazine. This
              category spans plastics, personal-care ingredients, pesticides, and fragrance chemicals.
            </li>
            <li>
              <strong>PFAS chemicals — 21 markers.</strong> The &quot;forever chemicals&quot; family, including GenX/HPFO-DA
              and NaDONA — compounds used in nonstick coatings, stain-resistant treatments, and many industrial
              processes that persist in the environment.
            </li>
            <li>
              <strong>Toxin genetics — 25 markers.</strong> Detox-pathway genes such as SULT1A1, CYP1A2, GSTP1, GPx4,
              and COMT — markers related to how your body metabolizes and clears compounds, which is the &quot;detox
              capacity&quot; half of the profile.
            </li>
          </ul>
          <p>
            That combination — exposure markers plus detox genetics in a single report — is what distinguishes this
            test from a single-category panel.
          </p>
        </section>

        <section className="space-y-4">
          <h2>How does the at-home testing process work?</h2>
          <p>Intrinsic Prism lays out four steps:</p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Home test.</strong> Your kit is shipped within 24 hours of ordering. You collect your samples at
              home following the kit instructions, and a courier picks them up — no lab visit or clinic appointment
              needed.
            </li>
            <li>
              <strong>Results explained.</strong> You receive a personalized test report with clear explanations and
              clinician-reviewed result flags, tracked in one secure place.
            </li>
            <li>
              <strong>Personalized plan.</strong> The report includes next-step protocols across lifestyle, diet, water,
              air, environment, and detoxification — practical areas where exposure can be reduced or supported.
            </li>
            <li>
              <strong>Guidance 24/7.</strong> Support and guidance are available around the clock through the whole
              process, from collection questions to walking through the report.
            </li>
          </ol>
          <p>
            Intrinsic Prism <strong>ships to most countries</strong>, with availability confirmed at checkout.
          </p>
        </section>

        <section className="space-y-4">
          <h2>How much does Intrinsic Prism cost — and how does the discount code work?</h2>
          <p>
            The Comprehensive Toxin Test is listed at <strong>$1,999</strong> (one-time) on Intrinsic Prism&apos;s website
            at the time of writing. The test is also <strong>HSA/FSA eligible</strong>, and Intrinsic Prism provides a
            detailed HSA/FSA reimbursement invoice — worth knowing if you have health-spending funds to use.
          </p>
          <p>To save 10%:</p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              Go to <AffiliateLink>intrinsicprism.com</AffiliateLink>.
            </li>
            <li>Start the order for the Comprehensive Toxin Test.</li>
            <li>
              Enter the code <strong>THRIVETOOLS</strong> at checkout — you&apos;ll see 10% come off the price (about $200
              off the $1,999 list price) before you pay.
            </li>
          </ol>
          <p>
            If you arrive through our referral link, the code is remembered on your device for 30 days, so you don&apos;t
            have to check out in the same visit for it to apply. Prices can change, so confirm the current figure on the
            product page before ordering.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Who is the Intrinsic Prism test for?</h2>
          <p>Based on what the panel covers, it fits a few profiles well:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>People with a specific exposure question</strong> — a moldy rental, a renovation, well water, a
              job around metals or chemicals — who want a broad measurement rather than a single-marker guess.
            </li>
            <li>
              <strong>Biohackers and longevity-focused readers</strong> who already track bloodwork and biomarkers and
              want an exposure baseline to sit alongside them, plus the detox-genetics context.
            </li>
            <li>
              <strong>Anyone who prefers one comprehensive panel</strong> over stitching together separate mycotoxin,
              metals, and PFAS tests from different providers, with one report and one protocol.
            </li>
            <li>
              <strong>People working with a functional-medicine or integrative clinician</strong> — Intrinsic Prism
              notes its testing is used by functional wellness professionals, and a report like this is most useful
              when reviewed with a practitioner who knows your history.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2>Honest limitations</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>It&apos;s a premium price.</strong> Even with 10% off, this is roughly a $1,799 purchase. Whether a
              broad exposure panel is worth that depends on your situation and what you&apos;ll actually do with the
              results.
            </li>
            <li>
              <strong>It measures; it doesn&apos;t diagnose.</strong> The test is educational and is not intended to
              diagnose or treat any condition. A flagged marker is information to discuss with a qualified clinician —
              not a diagnosis, and not a treatment plan by itself.
            </li>
            <li>
              <strong>A result is a snapshot.</strong> Exposure levels reflect the window the sample captures; they
              describe what was measured, not a lifetime total, and repeat testing is a separate purchase if you want
              to compare over time.
            </li>
            <li>
              <strong>Genetics markers are context, not destiny.</strong> The detox-genetics panel describes variants in
              pathways involved in processing compounds. On their own they don&apos;t tell you how your body is performing
              today — that&apos;s what the exposure markers are for.
            </li>
            <li>
              <strong>Availability varies by country.</strong> Intrinsic Prism ships to most countries, but confirm
              availability for your address at checkout before relying on it.
            </li>
          </ul>
          <p>If those trade-offs sound acceptable, the product page has the full marker list and current details.</p>
        </section>

        <section className="space-y-4">
          <h2>Intrinsic Prism FAQ</h2>
          {faqs.map(({ q, a }, index) => (
            <div key={q} className="card-glass rounded-2xl p-5 sm:p-6">
              <h3>{q}</h3>
              <p className="mt-2">
                {index === 0 ? (
                  <>
                    Yes. Use the code <strong>THRIVETOOLS</strong> at checkout on intrinsicprism.com for 10% off the
                    Comprehensive Toxin Test. If you arrive through a ThriveTools referral link, the code is remembered
                    on your device for 30 days.
                  </>
                ) : (
                  a
                )}
              </p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2>Bottom line</h2>
          <p>
            The Intrinsic Prism Comprehensive Toxin Test is one of the broadest at-home exposure panels available: 133+
            markers across mycotoxins, heavy metals, environmental toxins, PFAS, and detox genetics, one at-home kit
            with courier pickup, a CLIA-certified and CAP-accredited US lab, and a personalized report with next-step
            guidance. It&apos;s a premium, educational measurement — not a diagnosis — and it&apos;s priced like one. If you
            decide it&apos;s right for you, use code <strong>THRIVETOOLS</strong> for 10% off:{" "}
            <AffiliateLink>order the Comprehensive Toxin Test</AffiliateLink>.
          </p>
        </section>
      </article>
    </PageLayout>
  );
}
