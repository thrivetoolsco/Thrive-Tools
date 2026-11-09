import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import agedGarlicImage from "@assets/IMG_1688_1794243477573.webp";

const title =
  "Aged Garlic's S1PC Compound Improved Aging Muscles in Mice — Through Fat, the Brain, and NAD+";
const imageAlt =
  "Aged garlic extract and garlic bulbs, illustrating the source of the S1PC compound discussed in this study";

const faqs = [
  {
    q: "What did the new study find?",
    a: "Researchers from Wakunaga Pharmaceutical and the Institute for Research on Productive Aging in Tokyo, with senior author Shin-Ichiro Imai of Washington University, found that S1PC, a compound in aged garlic extract, activates the LKB1–SIRT1 pathway in fat tissue, causing fat cells to release eNAMPT, a key NAD+-related enzyme. The eNAMPT travels to the hypothalamus, and the resulting brain-to-muscle signal improved muscle strength and lowered frailty in aged mice. The study was published in Cell Metabolism (2026;38(6):1218–1228.e10, DOI: 10.1016/j.cmet.2026.04.006).",
  },
  {
    q: "What is S1PC, and is it the same as eating garlic?",
    a: "S1PC (S-1-propenyl-L-cysteine) is a sulfur-containing amino acid concentrated in aged garlic extract, a specific preparation in which garlic is aged over time. It is not the same as raw garlic or ordinary garlic powder, which contain different compounds in different amounts. The study tested S1PC itself, not dietary garlic.",
  },
  {
    q: "How did a garlic compound help muscles without acting on muscle?",
    a: "S1PC activated LKB1 in white fat tissue, triggering the release of eNAMPT in extracellular vesicles. The eNAMPT travelled through the blood to the hypothalamus in the brain, which then signalled to skeletal muscle through the sympathetic nervous system. When the researchers disrupted the hypothalamic step, the muscle benefit disappeared.",
  },
  {
    q: "Did the study test S1PC in people?",
    a: "Yes, in a small way. In a randomized, placebo-controlled study in healthy adults aged 20 to 49, a single 25 mg dose of S1PC raised circulating eNAMPT levels at 120 minutes in participants aged 40 and older with healthy body weight and body fat. The study did not measure muscle strength, mobility, or any long-term outcome in people.",
  },
  {
    q: "Why did the human response depend on body fat?",
    a: "The pathway starts in fat tissue: S1PC acts on white adipose tissue to trigger eNAMPT release. Participants who were significantly underweight did not show the same eNAMPT rise, suggesting the compound needs a minimum level of healthy fat tissue to work.",
  },
  {
    q: "Should I take an aged garlic or S1PC supplement for muscle aging?",
    a: "There is no evidence yet that S1PC improves muscle function in people, and no established long-term dose. Resistance training, adequate protein, sleep, and metabolic health remain the proven ways to support muscle aging. If you are considering any new supplement, talk to a qualified healthcare professional first — especially if you take medication, as garlic preparations can interact with blood-thinning drugs.",
  },
  {
    q: "What is eNAMPT, and why does it matter for longevity?",
    a: "eNAMPT (extracellular nicotinamide phosphoribosyltransferase) is an enzyme that helps tissues maintain NAD+, a molecule essential for energy production and DNA repair that declines with age. Restoring eNAMPT has improved aspects of health in old mice in prior research, making it a target of growing interest in aging science.",
  },
];

export default function AgedGarlicS1pcMuscleAgingStudy() {
  return (
    <PageLayout
      title={title}
      backLabel="Blog"
      backHref="/blog"
      seo={{
        title,
        description:
          "A Cell Metabolism study found that aged garlic compound S1PC improved muscle strength and lowered frailty in mice through a fat-to-brain-to-muscle pathway. Human testing showed only a single-dose biomarker response, not muscle benefits.",
        canonical:
          "https://thrivetools.co/blog/aged-garlic-s1pc-muscle-aging-study",
        noSuffix: true,
        ogType: "article",
        datePublished: "2026-11-09",
        image: agedGarlicImage,
        imageAlt,
      }}
    >
      <FaqJsonLd faqs={faqs} />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">
          News
        </Badge>
        <span className="text-sm text-[#3d1a28]/55">November 9, 2026</span>
      </div>
      <div className="card-glass mb-8 overflow-hidden rounded-2xl">
        <img
          loading="lazy"
          decoding="async"
          src={agedGarlicImage}
          alt={imageAlt}
          className="max-h-[520px] w-full bg-[#f8ece0] object-contain"
        />
      </div>

      <article className="space-y-8 text-[#3d1a28]/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#3d1a28] [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#3d1a28] [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-[#3d1a28]">
        <p>
          Muscle loss with age is usually talked about as a muscle problem: use
          it or lose it, eat enough protein, lift weights. A study published in{" "}
          <em>Cell Metabolism</em> suggests the picture is wider than that.
          Researchers found that a compound from aged garlic extract
          strengthened aging muscles in mice — not by acting on muscle at all,
          but by setting off a chain reaction that ran from fat tissue, through
          the brain, and back to muscle.
        </p>
        <p>
          The compound is S-1-propenyl-L-cysteine, or S1PC, a sulfur-containing
          amino acid found in aged garlic extract. The study, led by researchers
          at Wakunaga Pharmaceutical and the Institute for Research on
          Productive Aging in Tokyo, with senior author Shin-Ichiro Imai of
          Washington University, was published online on May 7, 2026, and it
          reached mainstream wellness coverage this week when mindbodygreen
          reported on it on November 3, 2026. A small human study in the same
          paper found that a single dose of S1PC raised blood levels of a key
          NAD+-related protein in middle-aged adults — an early signal, not proof
          of stronger muscles in people.
        </p>
        <p>
          It is a striking result, and a good example of how longevity science
          is shifting: away from single-organ fixes and toward the communication
          networks between organs.
        </p>

        <section className="space-y-4">
          <h2>Why NAD+ and Muscle Matter Here</h2>
          <p>
            NAD+ is a molecule every cell uses to produce energy and repair DNA.
            Its levels fall with age, and that decline is linked to muscle loss,
            metabolic slowdown, and frailty. That is why NAD+ boosters such as
            NMN and NR have become household names in the longevity world.
          </p>
          <p>
            But the body does not make NAD+ in one place and ship it everywhere.
            It relies on an enzyme called NAMPT, and on its extracellular form,
            eNAMPT, which circulates in the blood and helps tissues maintain
            their NAD+ supply. Previous research from Imai's group has shown
            that eNAMPT levels fall with age, and that restoring them can
            improve aspects of health in old mice.
          </p>
          <p>
            This study asked a different question: can a food-derived compound
            raise eNAMPT naturally — and if so, does that actually help aging
            muscle?
          </p>
        </section>

        <section className="space-y-4">
          <h2>The Study: Fat to Brain to Muscle</h2>
          <p>
            The researchers worked through the mechanism step by step, in cell
            cultures and in aged mice, before testing S1PC in people.
          </p>
          <p>
            First, they showed that S1PC activates an enzyme called LKB1 in
            white fat tissue, by helping it form a protein complex with two
            partners, STRAD and MO25. That activation switches on SIRT1, a
            well-known longevity-linked protein, which in turn triggers fat
            cells to release eNAMPT — packaged inside tiny extracellular
            vesicles — into the bloodstream.
          </p>
          <p>
            Here is where the story takes its unexpected turn. The eNAMPT
            released from fat did not travel to muscle. It travelled to the
            hypothalamus, the small region deep in the brain that regulates
            metabolism, body temperature, and nervous-system activity. From
            there, the signal was relayed through the sympathetic nervous system
            — the branch that governs the body's "fight or flight" responses —
            and on to skeletal muscle.
          </p>
          <p>
            The pathway, in short, looked like this: aged garlic compound →
            fat tissue → brain → muscle.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Stronger Muscles, Lower Frailty — in Mice</h2>
          <p>
            After eight months of S1PC treatment, aged mice showed measurable
            improvements compared with untreated mice of the same age:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Stronger muscle force</strong> in electrical stimulation
              tests, and better grip strength.
            </li>
            <li>
              <strong>Lower frailty scores</strong>, a composite measure of
              age-related decline.
            </li>
            <li>
              <strong>Restored core body temperature</strong>, which tends to
              fall with age.
            </li>
            <li>
              <strong>Higher levels of proteins involved in energy
              production</strong> within muscle tissue.
            </li>
          </ul>
          <p>
            One detail is especially telling: the mice's muscles did not get
            bigger. The benefit was in muscle quality and function, not muscle
            growth — the kind of improvement that matters most for staying
            mobile and independent in later life, where strength and
            coordination decline faster than muscle size alone would predict.
          </p>
          <p>
            To confirm the mechanism, the researchers showed that the effect
            depended on the fat-to-brain relay. When the hypothalamic signalling
            step was disrupted, the muscle benefit disappeared — evidence that
            this was not a direct effect on muscle, but a genuine case of organs
            talking to each other.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What Happened in People</h2>
          <p>
            The human part of the study was small and short, and it should be
            read as a first signal rather than a result. In a randomized,
            placebo-controlled study in healthy adults aged 20 to 49,
            participants took a single 25 mg tablet of S1PC. Among participants
            aged 40 and older who maintained a healthy body weight and body-fat
            level, circulating eNAMPT levels rose significantly at 120 minutes
            after the dose, compared with placebo.
          </p>
          <p>Two important details came out of that human test:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>It only worked in people with healthy fat mass.</strong>{" "}
              Participants who were significantly underweight did not show the
              same eNAMPT response — which makes sense, given that the pathway
              starts in fat tissue. The compound appears to need a minimum
              amount of healthy fat to act on.
            </li>
            <li>
              <strong>No muscle outcomes were measured in people.</strong> The
              human study tested a single acute dose and measured a blood
              marker. It did not test muscle strength, mobility, or frailty over
              time, so it cannot tell us whether the muscle benefits seen in
              mice translate to people.
            </li>
          </ul>
          <p>
            In other words, the human data show that at least part of the
            fat-to-brain pathway responds to S1PC in people. They do not show
            that taking S1PC makes anyone stronger.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What This Does Not Prove</h2>
          <p>A study this interesting needs its limits stated plainly:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>The muscle benefits were shown in mice, not people.</strong>{" "}
              Eight months of treatment improved strength and frailty in aged
              mice. No long-term human trial has tested whether S1PC improves
              muscle function or healthspan.
            </li>
            <li>
              <strong>The human evidence is a single-dose biomarker signal.</strong>{" "}
              One 25 mg dose raised eNAMPT at two hours in middle-aged adults
              with healthy body fat. That is a long way from a proven functional
              benefit, and there is no established long-term dose for people.
            </li>
            <li>
              <strong>Aged garlic extract is not raw garlic.</strong> S1PC is
              concentrated in aged garlic extract, a specific preparation.
              This study says nothing about eating raw garlic, garlic powder,
              or ordinary garlic supplements, which contain different
              compounds in different amounts.
            </li>
            <li>
              <strong>There is an industry link worth knowing.</strong> Several
              authors work for Wakunaga Pharmaceutical, a company that makes
              aged garlic extract products. That does not invalidate the
              findings — the work was published in a peer-reviewed journal, and
              the mechanism was tested with control experiments — but it is
              relevant context when weighing the results.
            </li>
            <li>
              <strong>It is not a replacement for the fundamentals.</strong>{" "}
              Nothing in this study suggests a garlic compound can substitute
              for resistance training, adequate protein, sleep, and metabolic
              health — the interventions with proven effects on muscle aging in
              humans.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2>Why It Still Matters</h2>
          <p>
            Even with those caveats, the study is worth paying attention to for
            three reasons.
          </p>
          <p>
            First, it identifies a new, food-derived way to influence the NAD+
            system. Most NAD+ strategies today rely on direct precursors such
            as NMN or NR. S1PC works upstream, nudging the body's own eNAMPT
            production — a different lever on the same system, and one that may
            interact with the others in ways future research can explore.
          </p>
          <p>
            Second, it strengthens the case that muscle aging is a whole-body
            problem. The idea that fat tissue talks to the brain, and the brain
            talks to muscle, reframes sarcopenia — age-related muscle loss — as
            a failure of communication between organs, not just a failure of
            muscle itself. That opens up new targets: if the signalling network
            can be supported, muscle may follow.
          </p>
          <p>
            Third, it fits a pattern emerging across longevity research in
            2026. The year's notable findings — a senolytic mineral compound, a
            directly druggable energy sensor, a DNA-repair protein that slowed
            aging in progeria mice, and now a food compound acting through
            inter-organ signalling — all point in the same direction: aging is
            increasingly understood as a set of measurable, targetable
            processes, and the interventions of the future may work through the
            body's own networks rather than on single tissues.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Practical Takeaways While the Science Catches Up</h2>
          <p>
            No one should start taking S1PC supplements on the basis of this
            study. There is no long-term human data, no established dose, and no
            evidence yet of a functional benefit in people. But the study
            reinforces several evidence-based strategies that support the same
            systems it highlights:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Resistance training.</strong> The most proven way to
              preserve muscle strength and function with age. It also improves
              metabolic health and supports the NAD+ system through increased
              energy demand.
            </li>
            <li>
              <strong>Maintain a healthy body composition.</strong> The human
              study's clearest practical hint is that the S1PC pathway depends
              on having healthy fat tissue — neither too little nor, by
              extension, metabolically unhealthy excess. Body composition
              matters for how these signalling pathways work.
            </li>
            <li>
              <strong>Prioritize sleep and metabolic health.</strong> NAD+
              levels, SIRT1 activity, and hypothalamic signalling are all
              sensitive to sleep quality, circadian rhythm, and blood-sugar
              control.
            </li>
            <li>
              <strong>Eat a varied, plant-rich diet.</strong> Aged garlic
              extract is one source of S1PC, but the broader lesson is that
              food-derived compounds can influence aging pathways in measurable
              ways — one more reason a diverse diet rich in plant compounds is a
              reasonable foundation.
            </li>
          </ul>
          <p>
            The fundamentals remain the most reliable tools for muscle aging.
            This study adds a fascinating new thread to follow — and a reminder
            that the body's systems are more connected than the supplement
            aisle suggests.
          </p>
        </section>

        <section className="space-y-4">
          <h2>FAQ</h2>
          {faqs.map(({ q, a }) => (
            <div key={q} className="card-glass rounded-2xl p-5 sm:p-6">
              <h3>{q}</h3>
              <p className="mt-2">
                {q === "What did the new study find?" ? (
                  <>
                    Researchers from Wakunaga Pharmaceutical and the Institute
                    for Research on Productive Aging in Tokyo, with senior
                    author Shin-Ichiro Imai of Washington University, found that
                    S1PC, a compound in aged garlic extract, activates the
                    LKB1–SIRT1 pathway in fat tissue, causing fat cells to
                    release eNAMPT, a key NAD+-related enzyme. The eNAMPT
                    travels to the hypothalamus, and the resulting
                    brain-to-muscle signal improved muscle strength and lowered frailty
                    in aged mice. The study was published in{" "}
                    <em>Cell Metabolism</em> (2026;38(6):1218–1228.e10, DOI:
                    10.1016/j.cmet.2026.04.006).
                  </>
                ) : q ===
                  "What is S1PC, and is it the same as eating garlic?" ? (
                  <>
                    S1PC (S-1-propenyl-L-cysteine) is a sulfur-containing amino
                    acid concentrated in aged garlic extract, a specific
                    preparation in which garlic is aged over time. It is not
                    the same as raw garlic or ordinary garlic powder, which
                    contain different compounds in different amounts. The study
                    tested S1PC itself, not dietary garlic.
                  </>
                ) : q ===
                  "How did a garlic compound help muscles without acting on muscle?" ? (
                  <>
                    S1PC activated LKB1 in white fat tissue, triggering the
                    release of eNAMPT in extracellular vesicles. The eNAMPT
                    travelled through the blood to the hypothalamus in the
                    brain, which then signalled to skeletal muscle through the
                    sympathetic nervous system. When the researchers disrupted
                    the hypothalamic step, the muscle benefit disappeared.
                  </>
                ) : q === "Did the study test S1PC in people?" ? (
                  <>
                    Yes, in a small way. In a randomized, placebo-controlled
                    study in healthy adults aged 20 to 49, a single 25 mg dose
                    of S1PC raised circulating eNAMPT levels at 120 minutes in
                    participants aged 40 and older with healthy body weight and
                    body fat. The study did not measure muscle strength,
                    mobility, or any long-term outcome in people.
                  </>
                ) : q === "Why did the human response depend on body fat?" ? (
                  <>
                    The pathway starts in fat tissue: S1PC acts on white adipose
                    tissue to trigger eNAMPT release. Participants who were
                    significantly underweight did not show the same eNAMPT
                    rise, suggesting the compound needs a minimum level of
                    healthy fat tissue to work.
                  </>
                ) : q ===
                  "Should I take an aged garlic or S1PC supplement for muscle aging?" ? (
                  <>
                    There is no evidence yet that S1PC improves muscle function
                    in people, and no established long-term dose. Resistance
                    training, adequate protein, sleep, and metabolic health
                    remain the proven ways to support muscle aging. If you are
                    considering any new supplement, talk to a qualified
                    healthcare professional first — especially if you take
                    medication, as garlic preparations can interact with
                    blood-thinning drugs.
                  </>
                ) : (
                  <>
                    eNAMPT (extracellular nicotinamide phosphoribosyltransferase)
                    is an enzyme that helps tissues maintain NAD+, a molecule
                    essential for energy production and DNA repair that declines
                    with age. Restoring eNAMPT has improved aspects of health
                    in old mice in prior research, making it a target of growing
                    interest in aging science.
                  </>
                )}
              </p>
            </div>
          ))}
        </section>

        <section className="space-y-4">
          <h2>The Bottom Line</h2>
          <p>
            A <em>Cell Metabolism</em> study found that S1PC, a compound in aged
            garlic extract, set off a fat-to-brain-to-muscle relay that improved
            strength and lowered frailty in aged mice — without increasing
            muscle size — by raising eNAMPT, a key NAD+ enzyme. A small human
            test showed the same pathway responds to a single dose in
            middle-aged adults with healthy body fat, but it measured a blood
            marker, not muscle function. It is early, mouse-led evidence with an
            honest industry link to disclose, and it says nothing about eating
            raw garlic. What it does offer is a new way of thinking about muscle
            aging: not as a muscle-only problem, but as a conversation between
            fat, brain, and muscle — and one more reason the fundamentals of
            strength training, body composition, and metabolic health remain
            the best-supported strategy while the science catches up.
          </p>
        </section>

        <hr />

        <p>
          <em>
            Looking for tools that support healthy aging and recovery? Browse
            the current offers on our{" "}
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
            advice. It reports on a published study and does not recommend any
            supplement, dose, or treatment. S1PC has no established long-term
            dose in people, and garlic preparations can interact with
            blood-thinning medication. If you have a medical condition, take
            medication, or are considering any new supplement, talk to a
            qualified healthcare professional first.
          </em>
        </p>
      </article>
    </PageLayout>
  );
}
