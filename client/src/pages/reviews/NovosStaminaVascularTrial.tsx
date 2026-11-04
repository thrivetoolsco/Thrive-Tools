import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import staminaImage from "@assets/IMG_1663_1793819777331.webp";
import { Link } from "wouter";

const title =
  "A Longevity Supplement Just Passed a Real Human Trial: What the NOVOS STAMINA Results Show — and What They Don't";
const imageAlt =
  "Illustration of a blood vessel with red blood cells moving through an artery";

const faqs = [
  {
    q: "What is the STAMINA trial?",
    a: "STAMINA (Effects of a Supplement to Target Ageing Mechanisms on Vascular Function) is a randomized, double-blind, placebo-controlled trial run by the University of Surrey with Royal Surrey NHS Foundation Trust, published in the European Heart Journal Open in 2026. It tested six months of daily NOVOS Core against a placebo in 61 healthy adults aged 40 and older.",
  },
  {
    q: "What did the trial find?",
    a: "Compared with placebo, the NOVOS Core group improved on three vascular measures: flow-mediated dilation (adjusted improvement of 2.9 percentage points), arterial stiffness (adjusted pulse wave velocity difference of 1.18 metres per second), and systolic blood pressure (adjusted difference of 6.1 mmHg). Cholesterol and other blood lipids did not change.",
  },
  {
    q: "Does this prove NOVOS Core prevents heart disease or extends lifespan?",
    a: "No. The trial measured vascular markers, not clinical outcomes such as heart attacks or deaths, and it was not designed to assess those outcomes. It also studied healthy adults over six months only. The results are encouraging early human evidence, not proof of disease prevention or longer life.",
  },
  {
    q: "Was the trial independent?",
    a: "It was investigator-initiated and run by University of Surrey researchers, who retained control of the data. NOVOS supplied the supplement and placebo and contributed funding, but, according to the announcement, had no role in study design, data collection, primary interpretation, or the decision to publish.",
  },
  {
    q: "Should I take NOVOS Core because of this study?",
    a: "That is a personal decision to make with a healthcare professional, particularly if you take blood pressure or heart medication or have a medical condition. One small six-month trial is a reason for interest, not a prescription — and it does not replace exercise, sleep, not smoking, or blood pressure care.",
  },
];

export default function NovosStaminaVascularTrial() {
  return (
    <PageLayout
      title={title}
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title,
        description:
          "What the STAMINA trial found when NOVOS Core was tested against placebo in 61 healthy adults, and what its vascular results do not prove.",
        canonical: "https://thrivetools.co/blog/novos-stamina-vascular-trial",
        noSuffix: true,
        ogType: "article",
        datePublished: "2026-11-04",
        image: staminaImage,
        imageAlt,
      }}
    >
      <FaqJsonLd faqs={faqs} />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">
          News
        </Badge>
        <span className="text-sm text-[#3d1a28]/55">November 4, 2026</span>
      </div>
      <div className="card-glass mb-8 overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          decoding="async"
          src={staminaImage}
          alt={imageAlt}
          className="max-h-[520px] w-full bg-[#f8ece0] object-contain"
        />
      </div>

      <article className="space-y-8 text-[#3d1a28]/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#3d1a28] [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#3d1a28] [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-[#3d1a28]">
        <p>
          Longevity supplements are easy to sell and hard to prove. Most arrive
          with a long ingredient list, a mechanism story borrowed from animal
          research, and no human trial at all. That is what makes a study
          published today, November 4, 2026, worth a closer look: for once, a
          longevity formula was tested the way medicine tests things — in
          people, against a placebo, with the results published in a
          peer-reviewed journal.
        </p>

        <p>
          The study is called STAMINA, run by researchers at the University of
          Surrey with Royal Surrey NHS Foundation Trust and published in the{" "}
          <em>European Heart Journal Open</em>. It tested NOVOS Core, a daily
          drink mix built around the biology of aging, in healthy adults aged 40
          and older. After six months, the supplement group improved on three
          measures of vascular health compared with placebo. That is a genuinely
          encouraging result — and, as with every early trial, it comes with
          limits that matter as much as the headline.
        </p>

        <section className="space-y-4">
          <h2>What the Trial Actually Did</h2>
          <p>
            STAMINA (Effects of a Supplement to Target Ageing Mechanisms on
            Vascular Function) was a single-centre, randomized, double-blind,
            placebo-controlled trial — the standard design for a credible human
            study. It enrolled 61 apparently healthy, non-smoking adults aged
            40 and older: 33 took NOVOS Core and 28 took a placebo matched for
            look and taste. Each participant took one 15-gram serving a day for
            six months. People with unstable cardiovascular disease, heart
            rhythm disorders, or active cancer were excluded.
          </p>
          <p>
            The trial is registered as NCT06145087 and was investigator-initiated,
            meaning the university researchers ran it. NOVOS provided the
            supplement and the matching placebo plus an unrestricted
            contribution toward research costs, but, according to the
            announcement, had no role in the study design, data collection,
            primary interpretation of the data, or the decision to publish, and
            the University of Surrey researchers retained control of the study
            data. That separation matters: company-funded research is common,
            but company-controlled research is a different thing.
          </p>
          <p>
            One detail raised the bar further. The volunteers were healthy, and
            their vascular measures already sat within normal ranges at the
            start. Improvements are harder to show in people who are already in
            the normal range, because there is less room to move — which makes a
            measurable change more interesting, not less.
          </p>
        </section>

        <section className="space-y-4">
          <h2>The Three Results</h2>
          <p>
            After six months, the NOVOS Core group improved compared with
            placebo on all three of the trial's vascular endpoints:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Blood vessel function.</strong> Flow-mediated dilation
              (FMD) — the trial's primary endpoint and an established measure
              of how well arteries widen as blood flow increases — rose by 47%
              from baseline in the NOVOS Core group. The adjusted improvement
              versus placebo was 2.9 percentage points, a magnitude considered
              clinically meaningful in published vascular research. Strikingly,
              blood vessel function improved within an hour of the first
              serving, sitting an adjusted 3.9 percentage points above placebo
              at that point, and the gains held: the six-month measurements
              were taken in a fasted state, roughly 24 hours after each
              participant's last serving.
            </li>
            <li>
              <strong>Arterial flexibility.</strong> Carotid-femoral pulse wave
              velocity (PWV), the standard measure of arterial stiffness and a
              marker of vascular aging, fell with NOVOS Core and rose with
              placebo — an adjusted between-group difference of 1.18 metres per
              second. Pulse wave velocity typically rises by about 1.0 metre
              per second per decade across adulthood, so a difference of this
              size is commonly associated in the literature with multi-year
              differences in vascular aging.
            </li>
            <li>
              <strong>Blood pressure.</strong> Systolic blood pressure fell
              further with NOVOS Core than with placebo over six months, an
              adjusted difference of 6.1 mmHg. Participants' average blood
              pressure was within the normal range at the start, and systolic
              pressure typically rises with age as arteries stiffen — in this
              trial, it moved in the healthier direction instead.
            </li>
          </ul>
          <p>
            Cholesterol and other blood lipids stayed the same, suggesting the
            changes were not explained by lipid lowering. Participants who
            started with the weakest blood vessel function and the highest
            blood pressure tended to improve the most. Independent coverage of
            the study also notes that estimated 10-year cardiovascular risk
            decreased modestly, largely reflecting the blood pressure
            difference.
          </p>
          <p>
            Lead investigator Professor Christian Heiss, Professor of
            Cardiovascular Medicine at the University of Surrey, put it this
            way: "Our hypothesis in this study was whether a multi-component
            supplement addresses many biological and biochemical processes
            related to vascular aging and has an effect on measures of vascular
            health. We found favourable changes in endothelial function,
            arterial stiffness and systolic blood pressure after six months.
            These findings are encouraging, and supplements can be a part of a
            healthy lifestyle."
          </p>
        </section>

        <section className="space-y-4">
          <h2>Why Blood Vessels Are the Right First Test</h2>
          <p>
            NOVOS Core combines 12 ingredients in one daily drink mix, each
            selected, according to the company, for evidence that it acts on
            several of the 12 biological hallmarks of aging. Testing that kind
            of multi-ingredient formula on blood vessels first makes scientific
            sense: the cardiovascular system supplies every cell and organ in
            the body, it is one of the first systems to show signs of aging, and
            cardiovascular disease remains the leading cause of death
            worldwide.
          </p>
          <p>
            That is the central idea of geroscience — the field studying whether
            slowing the biology of aging itself can delay many age-related
            conditions at once, rather than treating each one separately. Blood
            vessels are a good early readout for that idea because they show
            aging years before symptoms appear, and their condition affects
            every organ they supply. Three independent vascular measures moving
            in the same direction is, as the researchers frame it, early human
            evidence consistent with that hypothesis.
          </p>
          <p>
            Most longevity products never reach this stage at all. A
            peer-reviewed, placebo-controlled human trial — even a small one —
            puts a product in a different category from formulas supported only
            by ingredient-level studies or animal data.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What This Does Not Prove</h2>
          <p>
            This is exactly the kind of study that gets flattened into a
            headline like "longevity supplement reverses aging." Here is what
            STAMINA does <strong>not</strong> show:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>It does not show fewer heart attacks, strokes, or deaths.</strong>{" "}
              The trial measured vascular markers — how arteries function, how
              stiff they are, and blood pressure — not clinical outcomes. These
              markers are associated with cardiovascular risk, but they are not
              the same as preventing disease. Independent coverage of the study
              is explicit on this point: the study was not designed to assess
              clinical outcomes.
            </li>
            <li>
              <strong>It does not prove the formula slows aging itself.</strong>{" "}
              Improved vascular markers are consistent with the geroscience
              hypothesis, but they do not prove a change in biological age or
              lifespan. Follow-up research in other systems — the company says
              it is evaluating studies of muscle function, brain and cognition,
              and skin — would be needed to test the broader claim.
            </li>
            <li>
              <strong>It is a small, single-centre, six-month trial.</strong>{" "}
              Sixty-one participants at one centre is a solid start, not a
              final answer. Larger, longer, multi-centre trials in more diverse
              populations are what would turn an encouraging signal into a
              settled finding. The published paper itself describes the
              findings as preliminary.
            </li>
            <li>
              <strong>It does not apply to everyone.</strong> The participants
              were healthy, non-smoking adults aged 40 and older, without
              unstable cardiovascular disease, heart rhythm disorders, or
              active cancer. Nothing in this trial speaks to people outside
              that group, or to anyone taking blood pressure or heart
              medication — a group for whom any supplement that affects blood
              pressure deserves a clinician's input first.
            </li>
            <li>
              <strong>It does not make the supplement a substitute for the basics.</strong>{" "}
              The trial tested a supplement added to people's existing lives,
              not a replacement for exercise, sleep, not smoking, or blood
              pressure care. No pill result changes that hierarchy.
            </li>
          </ul>
          <p>
            In short: this is a real, peer-reviewed human signal in the right
            direction, from a small trial, on surrogate markers, over six
            months. That is worth reporting — and worth keeping in proportion.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Practical Takeaways for the Longevity-Minded</h2>
          <p>
            If you follow longevity research, STAMINA is useful as a yardstick:
            when a company claims its formula supports healthy aging, ask
            whether it has a published, placebo-controlled human trial behind
            that claim, and whether the trial measured something meaningful.
            Most cannot answer yes. It is also a reminder of where vascular
            health actually comes from. The measures in this trial — artery
            function, stiffness, and blood pressure — respond to the
            unglamorous fundamentals: regular movement, good sleep, not smoking,
            and keeping blood pressure in a healthy range, with a clinician
            involved when it is not.
          </p>
          <p>
            These systems also talk to each other — see our guide on{" "}
            <Link
              href="/blog/what-is-hrv-how-to-improve-it"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              what HRV is and how to improve it
            </Link>
            .
          </p>
          <p>
            And if you are considering any supplement that affects blood
            pressure or vascular function, especially if you take medication or
            have a heart condition, talk to a qualified healthcare professional
            first. A trial result is information, not a personal recommendation.
          </p>
        </section>

        <section className="space-y-4">
          <h2>FAQ</h2>
          {faqs.map(({ q, a }) => (
            <div key={q} className="card-glass rounded-2xl p-5 sm:p-6">
              <h3>{q}</h3>
              <p className="mt-2">{a}</p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2>The Bottom Line</h2>
          <p>
            Longevity science has a credibility problem: big claims, thin human
            evidence. STAMINA is a step in the opposite direction — a small,
            well-designed, peer-reviewed human trial in which a multi-ingredient
            longevity formula improved three measures of vascular health in
            healthy adults. The effect sizes are meaningful, the design is
            sound, and the caveats are real: surrogate markers, not outcomes;
            61 people, not thousands; six months, not years.
          </p>
          <p>
            Watch for the larger, longer follow-up trials. If they confirm these
            results, this will look like an early landmark for the field. If
            they do not, this will be a reminder of why one trial, however
            encouraging, is never the whole story.
          </p>
        </section>

        <hr />

        <p>
          <em>
            Looking for tools that support healthy aging, recovery, and
            training? Browse the current offers on our{" "}
            <a
              href="https://thrivetools.co/discount-codes"
              className="text-[#8b3a1a] underline underline-offset-4"
            >
              discount codes page
            </a>
            .
          </em>
        </p>
        <p>
          <em>
            This article is for general information only and is not medical
            advice. It reports on a published clinical trial and does not
            recommend any supplement or treatment. If you have a medical
            condition, take medication, or are considering a new supplement,
            talk to a qualified healthcare professional first.
          </em>
        </p>
      </article>
    </PageLayout>
  );
}
