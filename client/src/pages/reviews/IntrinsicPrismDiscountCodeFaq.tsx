import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import intrinsicPrismFaqImage from "@assets/IMG_1665_1793820476137.webp";
import { Link } from "wouter";

const title = "Intrinsic Prism Discount Code FAQ (Verified 2026)";
const affiliateUrl = "https://intrinsicprism.com/?ref=THRIVETOOLS";
const imageAlt =
  "A person reviewing an Intrinsic Prism toxin exposure summary on a phone";

const faqs = [
  {
    q: "What is the Intrinsic Prism discount code?",
    a: "THRIVETOOLS. Enter it at checkout on intrinsicprism.com for 10% off the Comprehensive Toxin Test.",
  },
  {
    q: "How much do I save with the Intrinsic Prism code?",
    a: "10% off the list price. The test is listed at $1,999 at the time of writing, so the code brings it to about $1,799 before tax. Confirm the current price on the product page before ordering, as prices can change.",
  },
  {
    q: "How do I use the THRIVETOOLS code?",
    a: "Go to intrinsicprism.com, start the order for the Comprehensive Toxin Test, and enter THRIVETOOLS in the discount-code box at checkout. You will see 10% come off before you pay.",
  },
  {
    q: "Do I have to check out right away for the code to work?",
    a: "No. If you arrive through the ThriveTools referral link, the code is remembered on your device for 30 days, so you do not have to complete the order in the same visit.",
  },
  {
    q: "Does the Intrinsic Prism discount code expire?",
    a: "No expiry date has been published for THRIVETOOLS. It was verified in November 2026; if anything changes, the discount codes page is updated first.",
  },
  {
    q: "What does the Intrinsic Prism test measure?",
    a: "133+ markers in five categories: mycotoxins (29), heavy metals (20), environmental toxins (38), PFAS chemicals (21), and detox-related genetics (25). It is one at-home kit and one integrated report, instead of separate panels from different providers.",
  },
  {
    q: "Is the Intrinsic Prism test really done at home?",
    a: "Yes. The kit is shipped within 24 hours of ordering, you collect your samples at home following the kit instructions, and a courier picks them up. No lab visit or clinic appointment is needed.",
  },
  {
    q: "Who analyzes the samples?",
    a: "A CLIA-certified, CAP-accredited US laboratory. Results return as a personalized report with clinician-reviewed flags, explanations of each category, and a next-step protocol, with guidance available around the clock.",
  },
  {
    q: "Is the Intrinsic Prism test HSA/FSA eligible?",
    a: "Yes. Intrinsic Prism lists the Comprehensive Toxin Test as HSA/FSA eligible and provides a detailed reimbursement invoice with your order.",
  },
  {
    q: "Does the Intrinsic Prism test diagnose health problems?",
    a: "No. Intrinsic Prism states the test is educational and is not intended to diagnose or treat any condition. It measures and reports toxin exposure markers and detox genetics; what a result means for your health is a conversation for a qualified clinician.",
  },
  {
    q: "Can I order Intrinsic Prism from my country?",
    a: "Intrinsic Prism ships to most countries. Availability for your specific address is confirmed at checkout, so check there before relying on delivery to your location.",
  },
];

export default function IntrinsicPrismDiscountCodeFaq() {
  return (
    <PageLayout
      title={title}
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title,
        description:
          "Find the verified Intrinsic Prism discount code THRIVETOOLS for 10% off the Comprehensive Toxin Test, how to use it, and what to know before ordering.",
        canonical: "https://thrivetools.co/blog/intrinsic-prism-discount-code-faq",
        noSuffix: true,
        ogType: "article",
        datePublished: "2026-11-04",
        image: intrinsicPrismFaqImage,
        imageAlt,
      }}
    >
      <FaqJsonLd faqs={faqs} />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">
          Discount Codes
        </Badge>
        <span className="text-sm text-[#3d1a28]/55">November 4, 2026</span>
      </div>
      <div className="card-glass mb-8 overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          decoding="async"
          src={intrinsicPrismFaqImage}
          alt={imageAlt}
          className="max-h-[520px] w-full bg-[#f8ece0] object-contain"
        />
      </div>

      <article className="space-y-8 text-[#3d1a28]/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#3d1a28] [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#3d1a28] [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-[#3d1a28]">
        <p>
          I run ThriveTools.co, a science-backed wellness and biohacking
          platform built from 14 years of personal research. (Disclosure:
          ThriveTools is an Intrinsic Prism affiliate partner. If you buy
          through the links in this article or use our code, we may earn a
          commission at no extra cost to you — in fact, the code lowers your
          price. We only feature products we believe are worth our readers&apos;
          attention.) I only publish codes I can personally verify, and I
          re-check every code on this site monthly. Here are the most-asked
          questions about the Intrinsic Prism discount code.
        </p>

        <section className="space-y-4">
          <h2>The code, up front</h2>
          <p>
            <strong>Code:</strong> THRIVETOOLS — 10% off the Comprehensive Toxin
            Test at checkout. Order through{" "}
            <a
              href={affiliateUrl}
              target="_blank"
              rel="sponsored noopener noreferrer"
              className="text-[#8b3a1a] underline underline-offset-4 decoration-[#c4622d]/50 hover:text-[#3d1a28]"
            >
              my Intrinsic Prism link
            </a>{" "}
            and enter the code at checkout. Full details are in my{" "}
            <Link
              href="/blog/intrinsic-prism-discount-code"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              Intrinsic Prism discount code guide
            </Link>
            , and every other verified offer I track is on my{" "}
            <Link
              href="/discount-codes"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              discount codes page
            </Link>
            .
          </p>
        </section>

        <section className="space-y-4">
          <h2>Intrinsic Prism discount code FAQ</h2>
          {faqs.map(({ q, a }, index) => (
            <div key={q} className="card-glass rounded-2xl p-5 sm:p-6">
              <h3>{q}</h3>
              <p className="mt-2">
                {index === 2 ? (
                  <>
                    Go to{" "}
                    <a
                      href={affiliateUrl}
                      target="_blank"
                      rel="sponsored noopener noreferrer"
                      className="text-[#8b3a1a] underline underline-offset-4"
                    >
                      intrinsicprism.com
                    </a>
                    , start the order for the Comprehensive Toxin Test, and
                    enter THRIVETOOLS in the discount-code box at checkout. You
                    will see 10% come off before you pay.
                  </>
                ) : index === 4 ? (
                  <>
                    No expiry date has been published for THRIVETOOLS. It was
                    verified in November 2026; if anything changes, the{" "}
                    <Link
                      href="/discount-codes"
                      className="text-[#8b3a1a] underline underline-offset-4"
                    >
                      discount codes page
                    </Link>{" "}
                    is updated first.
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
            If you want a broad, at-home measurement of toxin exposure and
            detox genetics, the code is THRIVETOOLS for 10% off — about $1,799
            instead of $1,999 at current pricing. Start at my{" "}
            <Link
              href="/blog/intrinsic-prism-discount-code"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              Intrinsic Prism discount code guide
            </Link>{" "}
            for the full breakdown, or compare it with everything else I track
            on the{" "}
            <Link
              href="/discount-codes"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              discount codes page
            </Link>
            .
          </p>
        </section>
      </article>
      <aside className="mt-8 border-t border-[#c4622d]/20 pt-6 text-sm text-[#3d1a28]/80">
        Related reading:{" "}
        <Link
          href="/blog/best-longevity-supplements-2026"
          className="text-[#8b3a1a] underline underline-offset-4"
        >
          Best longevity supplements for 2026
        </Link>
      </aside>
    </PageLayout>
  );
}
