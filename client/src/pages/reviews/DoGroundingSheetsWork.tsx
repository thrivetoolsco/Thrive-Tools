import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import groundingSheetsImage from "@assets/generated_images/grounding-sheets-hero.jpg";
import { Link } from "wouter";

const title = "Do Grounding Sheets Work? An Honest Look at the Earthing Evidence";
const imageAlt = "A quiet bedroom with soft bedding, prepared for a restful night";

const faqs = [
  {
    q: "Do grounding sheets really work?",
    a: "They really do establish an electrical connection to ground — that's measurable. Whether that connection improves sleep is promising but not proven: one small uncontrolled pilot and one 60-person placebo-controlled trial report better sleep, and larger independent trials are still needed.",
  },
  {
    q: "How long before grounding sheets do anything?",
    a: "In the placebo-controlled trial, differences were measured after 31 days of nightly use. Treat it as a month-long experiment, not a one-night test.",
  },
  {
    q: "Do grounding sheets need a grounded outlet?",
    a: "Yes. The cord connects to the ground port of a grounded outlet or a grounding rod; an ungrounded outlet means no connection. Test the outlet and keep bare skin on the sheet.",
  },
  {
    q: "Are grounding sheets safe?",
    a: "Grounding is generally considered low-risk for healthy adults. It's a wellness practice, not a treatment — if you have a diagnosed sleep disorder or a medical condition, talk to your clinician rather than relying on a sheet.",
  },
  {
    q: "Is there a discount code for Earthing Harmony?",
    a: "Yes — THRIVENOW, my verified partner code, listed on my discount codes page.",
  },
];

export default function DoGroundingSheetsWork() {
  return (
    <PageLayout
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title: "Do Grounding Sheets Work? What the Earthing Studies Show",
        description:
          "An honest look at grounding sheets research, the Earthing Harmony partner offer, THRIVENOW, and a verified code.",
        canonical: "https://thrivetools.co/blog/do-grounding-sheets-work",
        noSuffix: true,
        ogType: "article",
        datePublished: "2026-10-28",
        image: groundingSheetsImage,
        imageAlt,
      }}
    >
      <FaqJsonLd faqs={faqs} />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">
          Sleep &amp; Recovery
        </Badge>
        <span className="text-sm text-[#3d1a28]/55">October 28, 2026</span>
      </div>
      <div className="card-glass mb-8 overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          decoding="async"
          src={groundingSheetsImage}
          alt={imageAlt}
          className="max-h-[520px] w-full bg-[#f8ece0] object-contain"
        />
      </div>

      <article className="space-y-8 text-[#3d1a28]/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#3d1a28] [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#3d1a28] [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-[#3d1a28]">
        <p className="text-sm leading-relaxed text-[#3d1a28]/60">
          <strong className="font-semibold text-[#3d1a28]/75">Affiliate disclosure:</strong>{" "}
          This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>

        <p>
          I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal
          research. (Disclosure: I&apos;m an affiliate partner of the grounding brand featured in this post — that&apos;s how I
          can offer a verified code instead of random coupon-site guesses.) I only publish offers I can personally
          verify, and I re-check every code on this site monthly.
        </p>

        <section className="space-y-4">
          <h2>What grounding is</h2>
          <p>
            Grounding — also called earthing — means electrically connecting your body to the Earth&apos;s surface.
            Barefoot on grass or soil is the original version. Grounding sheets bring it indoors: they look like
            ordinary fitted bedding, but conductive silver or stainless-steel thread is woven through the fabric and
            connected by a cord to the ground port of a grounded outlet (or an outdoor grounding rod), so you sleep
            &quot;connected&quot; all night. Two practical points decide whether a sheet does anything at all: the outlet has to
            actually be grounded (test it), and your bare skin has to touch the fabric.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What the studies actually found</h2>
          <p>This is a small literature, and I&apos;ll show you its size instead of hiding it:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>The 2004 pilot:</strong> 12 adults slept grounded for 8 weeks. Nighttime cortisol dropped, and 11
              of the 12 reported falling asleep faster and waking less. Encouraging — but there was no control group,
              the sample was tiny, and the sleep results were mostly self-reported.
            </li>
            <li>
              <strong>The placebo-controlled trial:</strong> in a randomized, double-blind study, 60 participants used
              either a real grounding mat or an identical non-grounding mat for 6 hours a day over 31 days. The
              grounded group improved significantly on sleep quality (PSQI), insomnia severity, and daytime sleepiness,
              and gained total sleep time versus control — with the insomnia benefit still present at a day-38
              follow-up.
            </li>
          </ul>
          <p>
            The fair sceptical note: across this field, studies are small, several are funded by companies that sell
            grounding products, and none of it yet amounts to proof that a sheet treats any condition. My read:
            grounding is a low-risk practice with genuinely interesting early evidence — a complement to the sleep
            basics that are proven (a consistent schedule, a dark cool room, and dealing with issues like{" "}
            <Link href="/blog/mouth-breathing-mouth-taping" className="text-[#8b3a1a] underline underline-offset-4">
              mouth breathing at night
            </Link>
            ), not a substitute for them.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Who grounding is — and isn&apos;t — for</h2>
          <p>
            Grounding makes the most sense if you&apos;re already curious about earthing, your sleep basics are handled,
            and you want an honest experiment rather than a guaranteed fix. It makes the least sense as a first move
            for a diagnosed sleep disorder — that deserves a clinician, not a bedsheet. Some people notice mild
            tingling or a few restless nights while adjusting; that usually settles.
          </p>
        </section>

        <section className="space-y-4">
          <h2>The grounding partner I work with</h2>
          <p>
            The grounding brand I partner with is <strong>Earthing Harmony</strong> — use code{" "}
            <strong>THRIVENOW</strong> at checkout. My full breakdown:{" "}
            <Link href="/blog/earthing-harmony-discount-code" className="text-[#8b3a1a] underline underline-offset-4">
              Earthing Harmony discount code
            </Link>
            , and the short answers:{" "}
            <Link
              href="/blog/earthing-harmony-discount-code-faq"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              Earthing Harmony FAQ
            </Link>
            . It also fits naturally into a lower-tox bedroom setup — see my{" "}
            <Link
              href="/blog/best-non-toxic-home-upgrades-2026"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              best non-toxic home upgrades
            </Link>{" "}
            — and all of my verified partner offers live on the{" "}
            <Link href="/discount-codes" className="text-[#8b3a1a] underline underline-offset-4">
              discount codes
            </Link>{" "}
            page.
          </p>
        </section>

        <section className="space-y-4">
          <h2>FAQ</h2>
          {faqs.map(({ q, a }, index) => (
            <div key={q} className="card-glass rounded-2xl p-5 sm:p-6">
              <h3>{q}</h3>
              <p className="mt-2">
                {index === 4 ? (
                  <>
                    Yes — <strong>THRIVENOW</strong>, my verified partner code, listed on my{" "}
                    <Link href="/discount-codes" className="text-[#8b3a1a] underline underline-offset-4">
                      discount codes page
                    </Link>
                    .
                  </>
                ) : (
                  a
                )}
              </p>
            </div>
          ))}
        </section>
      </article>
    </PageLayout>
  );
}
