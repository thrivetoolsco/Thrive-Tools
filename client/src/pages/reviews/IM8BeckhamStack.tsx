import { ArticleLink, ArticleSection } from "@/components/EditorialPost";
import IM8Article, { IM8ShopLink, IM8Table, im8Offer } from "./IM8Article";
import hero from "@assets/IMG_1536_1791940169274.jpeg";

const faqs = [
  { q: "What is The Beckham Stack?", a: "IM8's bundle of its two drinks — Daily Ultimate Essentials Pro and Daily Ultimate Longevity — named for co-founder David Beckham. IM8 positions the pair around daily nutrition (90 ingredients) and aging pathways (10 compounds targeting the 12 hallmarks of aging)." },
  { q: "Is the stack cheaper than buying both products separately?", a: "Not at the supplied monthly prices. Separately, the subscriptions total $182/month; the stack starts at $183/month. The stack's stated value is the first-order kit — extras IM8 values at $97, including bonus sachets, storage boxes, a mixer, and a shaker bottle — not a monthly bundle discount." },
  { q: "What comes free with a first stack order?", a: "The supplied IM8 offer lists five bonus sachets, an Essentials Box, a Longevity Box, a Luxe Edition Mixer, and a Shaker Bottle — $97 worth of extras by IM8's own valuation. Confirm the current contents, availability and first-order eligibility before buying." },
  { q: "How much does the stack cost per day?", a: "The supplied price starts at $183/month, which IM8 quotes as $6.09 USD per serving for the combined two-drink ritual. That daily figure is brand-quoted; dividing the rounded monthly price by a 30-day month gives $6.10. Confirm the actual plan and total at checkout." },
  { q: "Is there a discount code for the stack?", a: `Use code ${im8Offer.code} at checkout on im8health.com and confirm acceptance and your final total before paying. Our IM8 discount code page explains the redemption steps; do not assume it stacks with every subscription or first-order promotion.` },
];

export default function IM8BeckhamStack() {
  return (
    <IM8Article
      title="The Beckham Stack Explained: IM8's Essentials + Longevity Bundle, Priced Honestly"
      seoTitle="The Beckham Stack: IM8 Bundle, Price & First-Order Kit"
      description="The Beckham Stack explained: IM8 Essentials Pro + Longevity, $182 separately vs $183 stacked, the brand-valued $97 first-order kit and who should buy it."
      canonical="/blog/im8-beckham-stack-explained"
      image={hero}
      imageAlt="IM8 Essentials and Longevity product boxes with a red IM8 shaker bottle on a kitchen counter"
      intro={<>IM8 sells its two drinks separately, and it sells them together as The Beckham Stack — named for co-founder David Beckham. Bundles usually promise savings. This one is more interesting than that, so here is exactly what the stack is, what it costs, and the honest math on who should buy it.</>}
      faqs={faqs}
    >
      <ArticleSection title="Quick answer">
        <p><strong>The Beckham Stack is IM8&apos;s two daily drinks combined: Daily Ultimate Essentials Pro (90 ingredients) plus Daily Ultimate Longevity (10 compounds positioned by IM8 as targeting the 12 hallmarks of aging), from $183/month — quoted by IM8 as about $6.09 USD per day for both.</strong> Bought separately, the supplied subscription prices total $182/month, so the stack is <em>not</em> a monthly discount.</p>
        <p>Its stated value is the first-order kit: IM8 includes extras it values at <strong>$97</strong> — bonus sachets, storage boxes, a mixer, and a shaker bottle — with an eligible first stack purchase. Order at <IM8ShopLink /> with code <strong>{im8Offer.code}</strong>, checking the current kit and checkout terms first.</p>
      </ArticleSection>
      <ArticleSection title="What's in the stack">
        <ul className="list-disc pl-6 space-y-3">
          <li><strong>Daily Ultimate Essentials Pro</strong> — the foundation. IM8 describes 90 ingredients in one daily drink, designed to replace 16 separate supplements. In IM8&apos;s reported clinical results: 95% of participants felt more energy, 85% better digestion, 80% improved sleep, and 75% sharper focus. The company describes it as NSF Certified for Sport and third-party tested, including screening for more than 280 banned substances. These are brand-reported outcomes and testing statements, not a guarantee of results.</li>
          <li><strong>Daily Ultimate Longevity</strong> — the specialist. IM8 describes 10 clinically proven compounds in one drink, positioned as targeting all 12 hallmarks of aging, with the stated aims of restoring cellular energy and activating autophagy. IM8 also describes this formula as NSF Certified for Sport; the positioning is not proof that the finished drink reverses aging.</li>
        </ul>
        <p>Both formulas come from the company David Beckham co-founded. IM8 says they were developed with a scientific advisory board including experts with backgrounds at Mayo Clinic, NASA, and Cedars-Sinai; those affiliations do not imply institutional endorsement. The pair is designed as one ritual: nutrition today, longevity tomorrow, in IM8&apos;s own framing.</p>
      </ArticleSection>
      <ArticleSection title="The price math, honestly">
        <IM8Table caption="Supplied IM8 subscription prices in USD: separate products versus The Beckham Stack" headings={["Option", "Monthly price", "Per serving"]} rows={[
          ["Essentials Pro alone", "From $78/mo", "$2.61 USD (brand-quoted)"],
          ["Longevity alone", "From $104/mo", "$3.47 USD (brand-quoted)"],
          [<strong>Both bought separately</strong>, <strong>$182/mo</strong>, "—"],
          [<strong>The Beckham Stack</strong>, <strong>From $183/mo</strong>, <strong>$6.09 USD/day for both (brand-quoted)</strong>],
        ]} />
        <p>Read that table carefully, because it breaks the usual bundle rule: <strong>$78 + $104 = $182, which is a dollar less per month than the $183 stack.</strong> If a bundle discount is what you are hunting for, the supplied prices do not show one, and we will not pretend otherwise.</p>
        <p>The per-serving figures are quoted by IM8 rather than calculated from the rounded monthly amounts. For example, $183 divided by a 30-day month is $6.10, not exactly $6.09. Compare the actual plan duration and checkout total rather than treating the quoted daily figure as exact arithmetic.</p>
        <p>So why does the stack exist? The first-order kit. The supplied IM8 offer lists these extras with an eligible first Beckham Stack purchase:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>5 bonus sachets</li>
          <li>An Essentials Box (sachet storage)</li>
          <li>A Longevity Box (ritual case)</li>
          <li>A Luxe Edition Mixer</li>
          <li>A Shaker Bottle</li>
        </ul>
        <p>IM8 values those extras at <strong>$97 saved</strong> on the first order. That is the brand&apos;s valuation, not a cash refund or a recurring monthly saving. Check the current contents and eligibility before relying on the kit.</p>
        <p>At unchanged monthly prices, the stack would cost <strong>$12 more across twelve months</strong>. The brand-valued kit exceeds that difference on paper, but it only represents value to you if you want those extras. After year one, the honest position is simple: there is still no recurring bundle saving shown by these prices, and you should choose based on the actual terms, checkout and routine you prefer.</p>
      </ArticleSection>
      <ArticleSection title="Stack, single product, or neither?">
        <p><strong>Buy the stack if</strong> your goal is the complete IM8 system — daily nutrition plus a dedicated aging-pathway formula — and you intend to take both drinks daily. The first-order kit may make it a more useful way to start if you want the extras. Review the advertised 90-day money-back guarantee and its eligibility terms before treating it as a trial.</p>
        <p><strong>Buy Essentials Pro alone ($78/mo) if</strong> you want the widest coverage for the least money in the supplied pricing. It is the more general starting point: one drink, 90 ingredients, and IM8&apos;s reported results across energy, digestion and sleep.</p>
        <p><strong>Buy Longevity alone ($104/mo) if</strong> healthy aging is your single focus and your general nutrition is already handled elsewhere. It is a targeted formula, not a foundation.</p>
        <p><strong>Buy neither if</strong> you will not take a daily drink consistently. Both are premium-priced — a routine you will skip is poor value regardless of a first-order kit. Review the combined ingredients and ask a clinician about suitability if you take medication or have a health condition.</p>
      </ArticleSection>
      <ArticleSection title="How to buy">
        <p>The stack is sold at <IM8ShopLink /> on subscription. The supplied IM8 information describes cancellation at any time and a 90-day money-back guarantee; confirm current billing, cancellation and refund terms before ordering.</p>
        <p>Use code <strong>{im8Offer.code}</strong> at checkout and check that it registers before paying. See our <ArticleLink href="/blog/im8-discount-code">IM8 discount code</ArticleLink> page for redemption steps, our <ArticleLink href="/blog/im8-daily-ultimate-longevity-guide">IM8 Daily Ultimate Longevity guide</ArticleLink> for the aging formula, and our <ArticleLink href="/blog/best-longevity-supplements-2026">best longevity supplements of 2026</ArticleLink> guide for how IM8 compares with the field.</p>
      </ArticleSection>
      <ArticleSection title="Verdict">
        <p>The Beckham Stack is a way to start IM8 if you want the full system — not because it is cheaper monthly (it is not, by a dollar in the supplied pricing), but because the brand-valued $97 first-order kit and single combined routine may make it more convenient to try both formulas together.</p>
        <p>Readers who only want one product should start with Essentials Pro or Longevity according to their actual goal, rather than buying a second drink for a bundle label. Either way, start at <IM8ShopLink /> with code <strong>{im8Offer.code}</strong>, review the current guarantee, and confirm the final total.</p>
      </ArticleSection>
    </IM8Article>
  );
}
