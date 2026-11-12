import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import heroImage from "@assets/IMG_1730_1794501993314.webp";
import uShapeImage from "@assets/IMG_1731_1794501993314.png";
import hypnogramImage from "@assets/IMG_1732_1794501993314.png";

const title =
  "Deep Sleep Is Your Brain's Nightly Clean-Up: What the Evidence Actually Says About Sleep, Deep Sleep, and Living Longer";

const faqs = [
  {
    q: "How much sleep do I actually need?",
    a: "Most adults need 7–9 hours, with the lowest mortality risk in large studies clustering around 7–8 hours. Older adults need 7–8 hours. If you wake without an alarm feeling rested and stay alert through the afternoon, you are probably getting enough. If you need caffeine to function and fall asleep the moment you sit down, you are not.",
  },
  {
    q: "How can I get more deep sleep?",
    a: "Deep sleep is front-loaded in the night, so the biggest lever is time in bed early enough — going to bed earlier protects deep sleep more than sleeping in does. Regular exercise, a cool dark room, and no alcohol in the evening also help: alcohol suppresses deep sleep in the first half of the night even at modest doses. There is no proven supplement that reliably increases deep sleep.",
  },
  {
    q: "Is 6 hours of sleep enough?",
    a: "For most adults, no. Six hours sits on the short side of the U-shaped curve and is associated with higher mortality risk than 7–8 hours. A small minority of people carry rare gene variants (like DEC2) that let them function on six hours, but for the rest of us, six hours is a deficit that accumulates — in attention, mood, blood sugar control, and immune function.",
  },
  {
    q: "Does sleeping at the same time every night really matter?",
    a: "The best recent evidence says it matters more than total hours. In a 2024 study of 60,977 adults, sleep regularity predicted mortality better than sleep duration, with the most regular sleepers carrying 20–48% lower all-cause mortality than the least regular. These are observational findings, not proof — but keeping a steady schedule is free, and it is consistent with how circadian biology works.",
  },
  {
    q: "Does deep sleep prevent dementia?",
    a: "Not proven. A 2023 Framingham study found that each 1% annual decline in deep sleep was associated with a 27% higher dementia risk, but that is an association — it may be that early brain changes cause the sleep loss. Deep sleep supports the brain's waste-clearance system, which makes the link biologically plausible, but no trial has yet shown that improving deep sleep prevents dementia.",
  },
  {
    q: "Why do I wake up at 3 a.m. every night?",
    a: "Waking in the early hours is common and usually not dangerous on its own: sleep gets lighter in the second half of the night, so brief awakenings are normal — most people just do not remember them. Stress, alcohol, a warm room, or needing the bathroom make them longer and more memorable. If it happens nightly for weeks and you cannot get back to sleep, or you are excessively sleepy during the day, talk to your doctor.",
  },
  {
    q: "Should I trust my watch's deep sleep number?",
    a: "Use it as a trend, not a measurement. Wrist trackers estimate sleep stages from movement and heart rate and are notably unreliable for deep sleep specifically. What they are good at is showing patterns: bedtime drift, short nights, and whether your schedule is actually as regular as you think it is.",
  },
];

const articleLinkClass = "text-[#8b3a1a] underline underline-offset-4";

export default function DeepSleepLongevityGuide() {
  return (
    <PageLayout
      title={title}
      backLabel="Blog"
      backHref="/blog"
      showShare
      seo={{
        title:
          "Deep Sleep and Longevity: How Much Sleep You Need & Why Regularity Beats Duration (2026)",
        description:
          "Losing 1% of deep sleep a year was linked to 27% higher dementia risk — and regular sleep predicted mortality better than duration in 61,000 adults. What the evidence actually says about deep sleep and longevity.",
        canonical: "https://thrivetools.co/blog/deep-sleep-longevity-guide",
        noSuffix: true,
        ogType: "article",
        datePublished: "2026-11-12",
        image: heroImage,
        imageAlt:
          "Woman with long dark curly hair sleeping peacefully on her side in a dark bedroom, moonlight through the window",
      }}
    >
      <FaqJsonLd faqs={faqs} />
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">
          Guides / Sleep &amp; Recovery
        </Badge>
        <span className="text-sm text-[#3d1a28]/55">November 12, 2026</span>
      </div>
      <div className="mb-8 flex flex-wrap gap-2" aria-label="Article tags">
        {[
          "deep sleep",
          "sleep",
          "longevity",
          "slow-wave sleep",
          "dementia",
          "sleep regularity",
          "healthy aging",
          "sleep duration",
        ].map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-[#c4622d]/20 bg-[#f8ece0]/70 text-[#3d1a28]/70"
          >
            {tag}
          </Badge>
        ))}
      </div>

      <figure className="card-glass mb-8 overflow-hidden rounded-2xl">
        <img
          src={heroImage}
          alt="Woman with long dark curly hair sleeping peacefully on her side in a dark bedroom, moonlight through the window"
          width={2048}
          height={1152}
          decoding="async"
          className="h-auto w-full bg-[#f8ece0] object-contain"
        />
        <figcaption className="px-4 py-3 text-sm leading-relaxed text-[#3d1a28]/70 sm:px-6">
          Deep sleep does the heavy lifting — and most of it happens in the
          first half of the night.
        </figcaption>
      </figure>

      <article className="space-y-8 text-[#3d1a28]/80 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:leading-tight [&_h2]:text-[#3d1a28] [&_h3]:font-display [&_h3]:font-bold [&_h3]:text-[#3d1a28] [&_p]:leading-relaxed [&_strong]:font-bold [&_strong]:text-[#3d1a28]">
        <p>
          <strong>Short answer:</strong> It is not just how long you sleep. It
          is how much deep sleep you get — and how regular your schedule is. In
          a 2023 study of 346 adults over 60, losing just 1% of deep sleep per
          year was linked to a 27% higher risk of dementia. In a 2024 study of
          61,000 adults, how regularly people slept predicted who lived longer
          better than how many hours they slept. The target the evidence keeps
          pointing to is simple: 7–8 hours, at the same time, every night. No
          supplement or gadget replaces that.
        </p>
        <p>
          I have written about VO2 max, strength training, and HRV this week.
          Sleep is the foundation all three sit on. You can train perfectly and
          still under-recover if your nights are short, irregular, or shallow.
          Here is what the research actually shows — and where it stops.
        </p>
        <p className="border-l-2 border-[#c4622d]/50 pl-4 italic">
          This is general information, not medical advice. If you snore loudly,
          gasp or stop breathing at night, fall asleep during the day without
          meaning to, or you have had insomnia for more than a few weeks, talk
          to your doctor — or a sleep specialist — before trying any of this.
          Sleep apnoea is common, treatable, and dangerous to ignore.
        </p>

        <section className="space-y-4">
          <h2>What deep sleep actually is</h2>
          <p>
            Your night is not one long stretch of unconsciousness. It runs in
            cycles of about 90 minutes, and each cycle moves through light
            sleep, deep sleep, and REM sleep (the dreaming stage).
          </p>
          <p>
            Deep sleep — also called slow-wave sleep — is the stage where your
            brain waves slow right down into big, slow oscillations. It is the
            most physically restorative stage: growth hormone is released,
            tissues repair, your immune system does maintenance, and memories
            consolidate. It is also the stage your brain uses to clear out
            metabolic waste — the glymphatic system, a network of channels that
            flushes fluid through the brain, is most active during deep sleep.
            That clean-up mechanism was shown in mice in a 2013 <em>Science</em>{" "}
            study; in humans the evidence is still indirect, but it is one of
            the most plausible explanations for why deep sleep matters so much
            for the ageing brain.
          </p>
          <p>
            Two things about the shape of a normal night matter for everything
            that follows:
          </p>
          <ol className="list-decimal space-y-3 pl-6">
            <li>
              <strong>Deep sleep is front-loaded.</strong> Most of your deep
              sleep happens in the first half of the night, in the first two or
              three cycles. The second half is mostly light sleep and REM. That
              means a short night does not just cut your total sleep — it cuts
              a disproportionate share of your deep sleep. Going to bed at 1
              a.m. and waking at 6 a.m. is not the same as 10 p.m. to 5 a.m.,
              even though both are five hours.
            </li>
            <li>
              <strong>Deep sleep declines with age.</strong> In the Framingham
              data below, slow-wave sleep fell by about 0.6% per year after age
              60 on average. Some of that decline is normal ageing. The question
              the research is now asking is whether the <em>rate</em> of
              decline is something you can influence.
            </li>
          </ol>
          <figure className="card-glass overflow-hidden rounded-2xl">
            <img
              src={hypnogramImage}
              alt="Hypnogram of a typical night showing deep sleep concentrated in the first half of the night and REM sleep later"
              width={1485}
              height={764}
              loading="lazy"
              decoding="async"
              className="h-auto w-full bg-[#f8ece0] object-contain"
            />
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-[#3d1a28]/70 sm:px-6">
              A typical night: deep sleep happens mostly in the first half. A
              short night cuts deep sleep first.
            </figcaption>
          </figure>
        </section>

        <section className="space-y-4">
          <h2>
            The 2023 study: losing deep sleep, year by year, tracked with
            dementia risk
          </h2>
          <p>
            The headline study here is Himali and colleagues, published in{" "}
            <em>JAMA Neurology</em> in 2023, using data from the Framingham
            Heart Study — one of the longest-running health studies in the
            world.
          </p>
          <p>
            What they did: 346 participants aged 60 and over had two overnight
            sleep studies (polysomnography — the gold-standard lab measurement,
            not a wrist tracker) about five years apart, in 1995–1998 and
            2001–2003. The researchers measured how each person&apos;s
            percentage of slow-wave sleep changed, then followed them for up to
            17 years to see who developed dementia.
          </p>
          <p>What they found:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Slow-wave sleep declined with age, by about 0.6% per year on
              average, with the steepest loss between ages 75 and 80.
            </li>
            <li>
              <strong>
                Each 1% decline in slow-wave sleep per year was associated with
                a 27% higher risk of developing dementia
              </strong>{" "}
              (hazard ratio 1.27), and a{" "}
              <strong>32% higher risk of Alzheimer&apos;s disease specifically</strong>.
            </li>
            <li>
              The decline was faster in people carrying the APOE ε4 gene
              variant, the strongest common genetic risk factor for
              Alzheimer&apos;s — but the association held across the group.
            </li>
          </ul>
          <p>
            That 27% number is the one you will see quoted everywhere, so here
            is the honest framing: this is an observational study. It shows
            that people whose deep sleep fell faster were more likely to
            develop dementia. It does not prove that losing deep sleep{" "}
            <em>causes</em> dementia. The authors say so themselves — it is
            possible that early, undetected brain changes cause the sleep loss,
            rather than the other way around. What makes the finding worth
            taking seriously is the design: the sleep was measured objectively,
            twice, years before dementia appeared, and the association survived
            adjustment for age, sex, smoking, medication use, and genetics.
            Slow-wave sleep loss looks like a modifiable risk factor. It is not
            proven to be one yet.
          </p>
        </section>

        <section className="space-y-4">
          <h2>How much sleep: the U-shaped curve</h2>
          <p>
            The second question everyone asks is simpler: how many hours? The
            answer from the largest pooling of the evidence is a U-shape, not a
            straight line. Too little is associated with higher mortality. Too
            much is too — although the long-sleep side is more likely to
            reflect underlying illness than to cause it.
          </p>
          <figure className="card-glass overflow-hidden rounded-2xl">
            <img
              src={uShapeImage}
              alt="Chart showing sleep duration and mortality risk forming a U-shape, with the lowest risk at 7 to 8 hours per night"
              width={1486}
              height={884}
              loading="lazy"
              decoding="async"
              className="h-auto w-full bg-[#f8ece0] object-contain"
            />
            <figcaption className="px-4 py-3 text-sm leading-relaxed text-[#3d1a28]/70 sm:px-6">
              Sleep and mortality follow a U-shaped curve, not a straight line.
              Illustrative dose-response based on Yin et al. 2017 (Journal of
              the American Heart Association).
            </figcaption>
          </figure>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              A 2017 dose-response meta-analysis in the{" "}
              <em>Journal of the American Heart Association</em> (Yin and
              colleagues), pooling prospective cohort studies, found the lowest
              risk of death at about <strong>7 hours per night</strong>, with
              risk rising about 6% for each hour below 7 and about 13% for each
              hour above 7.
            </li>
            <li>
              A 2025 meta-analysis in <em>GeroScience</em> put numbers on the
              same shape: short sleep (under 7 hours) carried about a 14%
              higher mortality hazard, long sleep (9 hours or more) about 34%
              higher.
            </li>
            <li>
              The official guidance lines up with the middle of the curve: the
              American Academy of Sleep Medicine and the Sleep Research Society
              recommend <strong>7 or more hours</strong> for adults, and the
              National Sleep Foundation&apos;s range is <strong>7–9 hours</strong>{" "}
              for adults aged 26–64 and <strong>7–8 hours</strong> for older
              adults.
            </li>
          </ul>
          <p>
            The practical target is 7–8 hours. The difference between 7 and 8
            is small compared with the difference between 5 and 7 — and the
            difference between 7 and 10 is mostly a signal to check your
            health, not a reason to set an alarm to wake yourself up.
          </p>
        </section>

        <section className="space-y-4">
          <h2>The surprise finding: regularity beats duration</h2>
          <p>
            The most interesting sleep result of the last two years is not
            about hours at all. It is about <em>when</em>.
          </p>
          <p>
            In 2024, Windred and colleagues published a study in the journal{" "}
            <em>Sleep</em> that analysed more than 10 million hours of
            wrist-accelerometer data from <strong>60,977 UK Biobank adults</strong>{" "}
            (average age 63). They calculated each person&apos;s Sleep
            Regularity Index — essentially, how likely you are to be asleep or
            awake at the same clock time on any two days — then followed who
            lived and who died for about six years.
          </p>
          <p>
            The result: compared with the least regular fifth of sleepers, the
            more regular groups had a <strong>20–48% lower risk of dying from
            any cause</strong>. Cardiometabolic death was 22–57% lower and
            cancer death 16–39% lower. And when the researchers put regularity
            and duration head to head in the same model,{" "}
            <strong>regularity was the stronger predictor of mortality</strong>.
            Adding duration to a model that already had regularity barely
            improved it at all.
          </p>
          <p>
            A second 2024 study, in the{" "}
            <em>Journal of Epidemiology &amp; Community Health</em>, followed
            72,269 UK adults for eight years and found the same pattern for
            heart disease: irregular sleep timing was linked to a{" "}
            <strong>26% higher risk of major cardiovascular events</strong> —
            heart attack, stroke, heart failure — even in people who got the
            recommended number of hours.
          </p>
          <p>
            The same honesty applies here: these are observational studies.
            Irregular sleepers are more likely to do shift work, have chronic
            illness, or live with stress and poor health habits — and the
            studies adjust for what they can measure, not for everything.
            Nobody has run a trial randomising people to regular versus
            irregular sleep and tracked who lives longer, and nobody is going
            to. But the pattern has now shown up in multiple large cohorts,
            with objective measurement, and it is consistent with everything
            we know about circadian biology: your body runs on clocks, and
            clocks work best on a schedule.
          </p>
          <p>
            The takeaway is refreshingly boring:{" "}
            <strong>
              go to bed and wake up at roughly the same time every day, weekends
              included.
            </strong>{" "}
            The research suggests that a steady 6.5 hours may serve you better
            than 9 hours on Saturday and 5 on Tuesday. That is the single most
            underrated sleep intervention there is, and it costs nothing.
          </p>
        </section>

        <section className="space-y-4">
          <h2>What this does NOT prove</h2>
          <p>Because the headlines on this topic are dramatic, the limits matter:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Association is not proof of cause.</strong> Every
              mortality and dementia number in this article comes from
              observational research. People who sleep badly differ from
              people who sleep well in dozens of ways — health, income, stress,
              shift work, mental health — that no study fully captures. Short
              or irregular sleep can be a <em>symptom</em> of illness, not just
              a cause of it.
            </li>
            <li>
              <strong>The long-sleep side of the curve is probably reverse
              causation.</strong> People who are already ill sleep longer
              because illness increases sleep need. Do not use this article as
              a reason to cut your sleep short if your body genuinely needs
              nine hours.
            </li>
            <li>
              <strong>No trial has shown that improving deep sleep prevents
              dementia.</strong> The 27% figure describes risk in people whose
              deep sleep was already declining. We do not yet have evidence
              that an intervention that raises deep sleep lowers dementia
              risk. That is the study the field needs next.
            </li>
            <li>
              <strong>Sleep trackers measure deep sleep badly.</strong> Wrist
              devices estimate sleep stages from movement and heart rate. They
              are reasonable at total sleep time and poor at staging — the
              &quot;deep sleep&quot; number on your watch is an estimate, not a
              measurement. Do not chase it as a score. Use it to spot patterns
              (bedtime drift, short nights) and ignore the rest. For more on
              what wearables get right and wrong, see{" "}
              <Link href="/blog/what-is-hrv-how-to-improve-it" className={articleLinkClass}>
                What Is HRV and How to Improve It
              </Link>
              .
            </li>
            <li>
              <strong>Supplements are not the lever.</strong> Melatonin can
              help shift timing (jet lag, shift work) but does not reliably
              deepen sleep. Magnesium has weak, mixed evidence for sleep in
              healthy adults — it helps if you are deficient, which is common,
              but it is not a sleep drug. I have a full guide on magnesium on
              the blog. The levers with real evidence are schedule, light,
              temperature, caffeine timing, and treating actual sleep
              disorders.
            </li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2>The protocol: what actually moves the needle</h2>
          <p>
            Nothing here is exotic. That is the point — the evidence supports
            the boring basics, and the boring basics are what most of us skip.
          </p>
          <p>
            <strong>1. Fix your wake time first.</strong> Pick a wake time you
            can hold seven days a week and anchor everything to it. Bedtime
            follows from it: if you wake at 6:30 a.m. and need eight hours, you
            are in bed by 10:30 p.m. Weekends within an hour of the same time.
            This is the regularity finding, applied.
          </p>
          <p>
            <strong>2. Get bright light in the morning.</strong> Daylight
            within an hour of waking is the strongest signal that sets your
            circadian clock — it anchors your melatonin rhythm so that
            sleepiness arrives on time that evening. Ten to thirty minutes
            outside, or by a bright window. This pairs with the morning routine
            I wrote about in June, and it costs nothing.
          </p>
          <p>
            <strong>3. Cut caffeine by noon.</strong> Caffeine&apos;s half-life
            is about five to six hours, which means a 3 p.m. coffee is still
            half there at 9 p.m. — and caffeine fragments deep sleep even when
            you fall asleep fine. If you love coffee, keep it to the morning.
            This is the single most common fix I see in people who say they
            &quot;sleep fine&quot; but wake up unrefreshed.
          </p>
          <p>
            <strong>4. Cool, dark, quiet.</strong> Your core temperature has
            to drop to fall asleep and stay asleep. A bedroom around 18–19°C
            (65–67°F) is the commonly cited range. Blackout the room properly —
            even dim light through the eyelids measurably fragments sleep —
            and keep your phone out of the bedroom, or at least face-down and
            on silent. The last hour before bed is for dim light and low
            stimulation, not for scrolling.
          </p>
          <p>
            <strong>5. Train — but not at midnight.</strong> Both of this
            week&apos;s earlier posts help here:{" "}
            <Link
              href="/blog/vo2-max-zone-2-cardio-longevity-guide"
              className={articleLinkClass}
            >
              VO2 max and Zone 2 cardio
            </Link>{" "}
            and{" "}
            <Link
              href="/blog/strength-training-longevity-muscle-guide"
              className={articleLinkClass}
            >
              strength training
            </Link>{" "}
            both improve sleep quality in trials, and exercise is one of the
            few interventions with randomised evidence behind it. Just keep
            hard sessions out of the last two to three hours before bed.
          </p>
          <p>
            <strong>6. If you cannot sleep, get up.</strong> Lying awake trains
            your brain to associate your bed with frustration. The gold-standard
            treatment for insomnia, cognitive behavioural therapy for insomnia
            (CBT-I), teaches exactly this: if you are awake after about 20
            minutes, get up, do something quiet and boring in dim light, and
            return when sleepy. It outperforms sleeping pills in the long term,
            with no side effects. If insomnia has lasted more than a few weeks,
            ask your doctor about CBT-I before reaching for a supplement.
          </p>
        </section>

        <section className="space-y-4">
          <h2>Tools that can help — honestly</h2>
          <p>
            Sleep is mostly behaviour, not shopping. But a few things on my own
            list genuinely support the protocol above:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong>Grounding sheets:</strong> I reviewed the earthing
              evidence honestly on the blog — small studies, suggestive sleep
              findings, real limitations. If you sleep better on them, the
              mechanism may be the routine as much as the earthing. Earthing
              Harmony, code <strong>THRIVENOW</strong> on our{" "}
              <Link href="/discount-codes" className={articleLinkClass}>
                discount codes page
              </Link>
              .
            </li>
            <li>
              <strong>Magnesium:</strong> if you are deficient — and about a
              third of people are — correcting it can help sleep quality. It
              is not a sedative. Bioptimizers Magnesium Breakthrough, code{" "}
              <strong>THRIVETOOLS</strong> on our{" "}
              <Link href="/discount-codes" className={articleLinkClass}>
                discount codes page
              </Link>
              .
            </li>
            <li>
              <strong>A sleep-friendly bedroom:</strong> silk bedding stays
              cool and comfortable through the night. Promeed silk bedding is
              a link-only offer on our{" "}
              <Link href="/discount-codes" className={articleLinkClass}>
                discount codes page
              </Link>
              .
            </li>
            <li>
              <strong>Goli Sleep gummies:</strong> a melatonin-free sleep
              gummy option for occasional use — not a nightly crutch. Goli,
              code <strong>g-745207ab6b</strong> for 10% off on our{" "}
              <Link href="/discount-codes" className={articleLinkClass}>
                discount codes page
              </Link>
              .
            </li>
            <li>
              <strong>Tracking the pattern, not the score:</strong> a Muse
              headband can show you whether your bedtime is drifting, which is
              the metric that matters. Code <strong>THRIVE25</strong> on our{" "}
              <Link href="/discount-codes" className={articleLinkClass}>
                discount codes page
              </Link>
              .
            </li>
          </ul>
          <p>None of these replaces the schedule. They make the schedule easier to keep.</p>
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
          <h2>Sources</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Himali, J.J. et al. (2023). Association Between Slow-Wave Sleep
              Loss and Incident Dementia. <em>JAMA Neurology</em>, 80(12),
              1326–1333. doi:10.1001/jamaneurol.2023.3889 — 346 Framingham
              participants, 27% higher dementia risk per 1% annual slow-wave
              sleep decline.
            </li>
            <li>
              Windred, D.P. et al. (2024). Sleep regularity is a stronger
              predictor of mortality risk than sleep duration: A prospective
              cohort study. <em>Sleep</em>, 47(1), zsad253.
              doi:10.1093/sleep/zsad253 — 60,977 UK Biobank adults, 20–48%
              lower all-cause mortality in more regular sleepers.
            </li>
            <li>
              Chaput, J.P. et al. (2024). Sleep regularity and major adverse
              cardiovascular events: a device-based prospective study in
              72,269 UK adults. <em>Journal of Epidemiology and Community
              Health</em> — irregular sleep timing linked to 26% higher risk of
              major cardiovascular events.
            </li>
            <li>
              Yin, J. et al. (2017). Relationship of Sleep Duration With
              All-Cause Mortality and Cardiovascular Events: A Systematic
              Review and Dose-Response Meta-Analysis.{" "}
              <em>Journal of the American Heart Association</em>, 6(9), e005947
              — lowest mortality risk at ~7 hours per night.
            </li>
            <li>
              Cappuccio, F.P. et al. (2010). Sleep duration and all-cause
              mortality: a systematic review and meta-analysis of prospective
              studies. <em>Sleep</em>, 33(5), 585–592.
            </li>
            <li>
              Xie, L. et al. (2013). Sleep drives metabolite clearance from the
              adult brain. <em>Science</em>, 342(6156), 373–377 — glymphatic
              clearance during sleep (mouse study).
            </li>
            <li>
              Watson, N.F. et al. (2015). Recommended amount of sleep for a
              healthy adult: a joint consensus statement of the American
              Academy of Sleep Medicine and Sleep Research Society.{" "}
              <em>Sleep</em>, 38(6), 843–844 — 7 or more hours for adults.
            </li>
            <li>
              Hirshkowitz, M. et al. (2015). National Sleep Foundation&apos;s
              sleep time duration recommendations. <em>Sleep Health</em>,
              1(1), 40–43 — 7–9 hours for adults, 7–8 hours for older adults.
            </li>
          </ul>
        </section>

        <p className="italic">
          <strong>Disclaimer:</strong> This article is for general information
          only and is not medical advice. It reports on published research and
          does not recommend any supplement, dose, or treatment. If you have a
          sleep disorder or a medical condition, speak to your doctor or a
          qualified sleep specialist.
        </p>
      </article>
    </PageLayout>
  );
}
