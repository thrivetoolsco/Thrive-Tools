import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ShoppingBag, FlaskConical, HelpCircle, Leaf } from "lucide-react";

function SectionHeader({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="text-[#c4622d]">{icon}</span>
      <h2 className="font-display text-2xl font-bold text-black">{title}</h2>
    </div>
  );
}

function FaqItem({ question, children }: { question: string; children: React.ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-display text-lg font-bold text-black">{question}</h3>
      <div className="text-black/70 leading-relaxed">{children}</div>
    </div>
  );
}

function IngredientFlag({ label, detail, bad }: { label: string; detail: string; bad?: boolean }) {
  return (
    <div className="flex gap-3 py-3 border-b border-black/6 last:border-0">
      <span className={`w-2 h-2 rounded-full flex-shrink-0 mt-2 ${bad ? "bg-red-400" : "bg-[#c4622d]"}`} />
      <div>
        <span className="font-semibold text-black text-sm">{label}:</span>{" "}
        <span className="text-black/65 text-sm">{detail}</span>
      </div>
    </div>
  );
}

export default function SnackDrawerFix() {
  return (
    <PageLayout
      showShare
      title="The Snack Drawer Fix"
      subtitle="Why I Stopped Buying 'Healthy' Snacks That Weren't"
      seo={{
        title: "The Snack Drawer Fix: Why I Stopped Buying 'Healthy' Snacks That Weren't | Thrive Tools",
        description: "Most 'clean' snacks are still built on filler ingredients. Here's what I switched to, and why the label actually matters more than the marketing — with the ingredient red flags to watch for.",
        canonical: "https://thrivetools.co/blog/snack-drawer-fix-prana-foods-clean-snacks",
        ogType: "article",
        datePublished: "2026-08-05",
      }}
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10 space-y-12">

        {/* Badge + Date */}
        <div className="flex flex-wrap gap-2 items-center">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25 text-xs font-semibold px-3 py-1 rounded-full">
            Nutrition
          </Badge>
          <span className="text-black/40 text-sm">August 5, 2026</span>
        </div>

        {/* Intro */}
        <div className="space-y-4 text-black/70 leading-relaxed">
          <p className="text-lg">
            For years my snack drawer was a graveyard of good intentions — bars and mixes with "organic" or "superfood" on the front, and a filler ingredient doing most of the actual work the second you flipped the bag over.
          </p>
          <p>
            Rice syrup. Soy protein isolate. Palm oil. "Natural flavors" standing in for anything specific. It's not that these things are poison. It's that they're not doing anything for you, and you're paying a health-food price for a junk-food ingredient list.
          </p>
          <p>
            That's the actual problem with snacking — more than willpower or portion size: most of what's marketed as clean isn't. And if you're already working on gut health — real fiber, real fermentables, less inflammatory junk moving through your system all day — your snacks are either helping that work or quietly undoing it between meals.
          </p>
        </div>

        <div className="section-divider" />

        {/* What I switched to */}
        <section>
          <SectionHeader icon={<Leaf className="w-6 h-6" />} title="What I Actually Switched To" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              I've been buying from Prana for a while now — a Montreal-based, B Corp certified company that's been doing organic, plant-based snacks since 2005. Nuts, seeds, dried fruit, trail mixes, chia, granola — the stuff that should be simple is actually simple. No filler proteins, no palm oil shortcuts, everything organic and vegan by default rather than as a marketing tier you pay extra for.
            </p>
            <p>
              The trail mixes are where I actually see the difference versus what I used to buy. Most "trail mix" on a regular grocery shelf is candy with a few almonds hiding in it. Prana's mixes are closer to what the name implies: real ratios of nuts, seeds, and dried fruit — not sugar with crunch added for texture.
            </p>

            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-1">
              <p className="font-semibold text-black mb-3">What "B Corp certified" actually means here:</p>
              <p className="text-sm text-black/65">
                B Corp certification requires a company to meet independently verified standards for social and environmental performance, transparency, and accountability. It's not a marketing badge — it involves auditing supply chains, sourcing practices, labor standards, and environmental impact. For a food company, it means the supply chain integrity claims are verified by a third party, not self-reported. That's not common in the organic snack space, where "organic" on the front can coexist with ambiguous sourcing everywhere else.
              </p>
            </div>

            <p>
              The range covers the everyday snacking bases: bulk nuts and seeds (almonds, cashews, pumpkin seeds, hemp hearts), trail mixes, granola, dried fruits without added sugar, and superfoods like chia and goji. It's not an exotic product line. It's the category you're buying anyway — just with an ingredient list that doesn't require a chemistry degree to parse.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Why this matters */}
        <section>
          <SectionHeader icon={<FlaskConical className="w-6 h-6" />} title="Why Snacks Are the Leak in an Otherwise Dialed-In Protocol" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              If you're taking probiotics, doing tonic herbs, dialling in your omega-3s and magnesium — and then eating a snack bar with nine ingredients you can't identify twice a day — you're working against yourself in a spot most people never audit.
            </p>
            <p>
              Snacking is the meal you don't think about, which makes it the easiest place for junk to sneak back in even when the rest of your day is clean. The specific damage depends on what's actually in what you're eating:
            </p>

            <div className="rounded-2xl border border-black/8 overflow-hidden">
              <div className="bg-black/3 px-5 py-3 border-b border-black/8">
                <p className="font-semibold text-black text-sm">Ingredients that quietly undo the work:</p>
              </div>
              <div className="p-5">
                <IngredientFlag bad label="Rice syrup / tapioca syrup" detail="High-glycaemic liquid sugars used to sweeten bars cheaply. Spikes blood glucose without any nutritional upside. Listed as an 'organic' ingredient to maintain the branding while doing the same metabolic job as corn syrup." />
                <IngredientFlag bad label="Soy protein isolate" detail="Cheap protein filler, highly processed, typically from GMO soy. Disrupts gut microbiome signalling in some people and provides meaningfully less bioavailable protein than the label implies." />
                <IngredientFlag bad label="Palm oil" detail="Cheap fat used to extend shelf life. Environmentally controversial and nutritionally neutral at best — high in palmitic acid, which is the saturated fat most associated with inflammation at scale." />
                <IngredientFlag bad label="'Natural flavors'" detail="A catch-all category that can include hundreds of compounds — the FDA definition is deliberately broad. It tells you nothing about what's actually creating the taste, which is a problem if you're trying to avoid anything specific." />
                <IngredientFlag bad label="Inulin / chicory root fiber (in large amounts)" detail="Added as a 'prebiotic fiber' marketing claim, but at the doses used in most bars it primarily causes gas and bloating rather than measurable microbiome benefit. Often the first sign is that a 'gut health' bar makes your gut feel worse." />
              </div>
            </div>

            <p>
              The gut-specific concern is the most underappreciated. If you're rebuilding your microbiome after antibiotics, or working on gut-brain axis balance, the quality of what moves through your digestive system between meals matters. Cheap fibers, emulsifiers like sunflower lecithin and carrageenan, and the inflammatory load from poor-quality fats all create low-grade irritation that compounds with every snack over time.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* The flip test */}
        <section>
          <SectionHeader icon={<ShoppingBag className="w-6 h-6" />} title="The Only Test You Actually Need" />
          <div className="space-y-4 text-black/70 leading-relaxed">
            <p>
              Flip the bag over. If you don't recognize half the ingredients, or if the first three are some form of sugar, it's not the clean snack it's marketed as — no matter what's printed on the front. That's the entire filter.
            </p>
            <p>
              What a genuinely clean snack ingredient list looks like:
            </p>
            <div className="rounded-2xl border border-[#c4622d]/20 bg-[#c4622d]/5 p-5 space-y-2">
              <p className="font-semibold text-black text-sm mb-3">Good signals on the back of the bag:</p>
              <ul className="space-y-2 text-sm text-black/65">
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>You can name every ingredient without looking it up.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>The first ingredient is the food it's named after — not a sweetener or a filler.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>The total ingredient count is under 8. Most real food doesn't need 15 ingredients.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>If it's sweet, the sweetener is visible and identifiable — dates, honey, maple syrup — not hidden in an alias.</span></li>
                <li className="flex gap-2"><span className="text-[#c4622d] font-bold mt-0.5">—</span><span>No "natural flavors" as a standalone item when the product is supposed to be a whole food.</span></li>
              </ul>
            </div>
            <p>
              This isn't complicated, and it doesn't require knowing anything special about nutrition. It just requires actually reading the back of the bag instead of the front — which is the whole design of health-food marketing: make the front compelling enough that you never flip it over.
            </p>
          </div>
        </section>

        <div className="section-divider" />

        {/* Prana affiliate block */}
        <section className="rounded-2xl border border-[#c4622d]/25 bg-[#c4622d]/6 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <p className="font-bold text-black text-base mb-0.5">Prana Foods</p>
            <p className="text-black/60 text-sm leading-relaxed">
              Organic superfoods, nuts, seeds, trail mixes, and snacks — B Corp certified, plant-based by default, simple ingredient lists. What clean snacking is supposed to look like.
            </p>
            <p className="mt-2 text-xs font-mono font-semibold text-[#8b3a1a] bg-[#c4622d]/12 border border-[#c4622d]/25 inline-block px-2.5 py-1 rounded-md">
              Code: THRIVETOOLSCO
            </p>
          </div>
          <a href="https://pranafoods.ca/thrivetoolsco" target="_blank" rel="noopener noreferrer" className="shrink-0">
            <button className="inline-flex items-center gap-1.5 bg-[#c4622d] hover:bg-[#8b3a1a] text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors whitespace-nowrap">
              Visit Prana Foods <ExternalLink className="w-3.5 h-3.5" />
            </button>
          </a>
        </section>

        <div className="section-divider" />

        {/* FAQ */}
        <section>
          <SectionHeader icon={<HelpCircle className="w-6 h-6" />} title="Common Questions" />
          <div className="space-y-8">
            <FaqItem question="Is organic certification actually worth paying for in nuts and seeds?">
              <p>
                For nuts and seeds specifically — yes, more than for most foods. Nuts are high in fat, and fat-soluble pesticide residues concentrate in fatty tissue. Almonds, cashews, and walnuts consistently show among the higher pesticide loads in conventional testing. Organic certification doesn't guarantee zero residue, but it does mean no synthetic pesticide application during growing and a third-party audit of that claim. For foods you eat daily in meaningful quantities, the certification matters more than it does for foods you eat occasionally.
              </p>
            </FaqItem>
            <FaqItem question="What's the difference between 'vegan' and 'plant-based' on a snack label?">
              <p>
                Legally: almost nothing. Both mean the product contains no animal-derived ingredients. In practice, "plant-based" has become a broader marketing term used even for highly processed products that happen to not contain meat or dairy. "Vegan" tends to be more precisely applied. Neither term tells you anything about ingredient quality, processing level, or whether the product is actually nutritious — a deeply processed vegan snack is still a deeply processed snack.
              </p>
            </FaqItem>
            <FaqItem question="Are trail mixes actually healthy or is it just the perception?">
              <p>
                Depends entirely on the mix. A trail mix built on real nuts, seeds, and whole dried fruit — with no added sugar, no chocolate chips standing in for substance, no yogurt-covered raisins — is genuinely nutrient-dense: healthy fats, fiber, minerals, plant protein. Most commercially sold trail mixes are not this. They're built to taste good at a target price point, which means sugar and cheap filler. Check the ratio: if the first ingredient is some form of candy or sweetened coating, it's a dessert with nuts in it, not a trail mix.
              </p>
            </FaqItem>
            <FaqItem question="How does snack quality actually affect gut health?">
              <p>
                Several mechanisms. First, emulsifiers (common in processed snack bars — carboxymethylcellulose, polysorbate 80, sunflower lecithin at high doses) have been shown in animal and early human studies to disrupt the mucus layer that lines the gut and promotes dysbiosis. Second, refined carbohydrates and sugars feed less beneficial bacterial populations at the expense of diversity. Third, repeated low-grade inflammatory load from poor-quality fats — particularly oxidised vegetable oils used for texture — creates chronic low-level gut irritation that compounds over time. None of these effects are dramatic in a single snack. They're cumulative.
              </p>
            </FaqItem>
            <FaqItem question="What's the simplest swap for someone who eats a lot of protein bars?">
              <p>
                The simplest swap is to stop treating the protein bar as a complete food and treat it as what it actually is: a processed food that happens to contain protein. For the protein component, shift to whole food sources where possible — a handful of nuts, some hemp hearts mixed into something, hard-boiled eggs, full-fat Greek yogurt if you tolerate dairy. For the "I need something I can carry and eat quickly" use case, a small bag of mixed nuts and dried fruit does the same job without the ingredient list problem. Prana's trail mixes are exactly in this category — real food in a portable format.
              </p>
            </FaqItem>
          </div>
        </section>

        <div className="section-divider" />

        {/* Bottom disclosure */}
        <p className="text-black/50 text-sm leading-relaxed italic">
          I use code <span className="font-mono font-semibold not-italic text-[#8b3a1a]">THRIVETOOLSCO</span> for a discount at{" "}
          <a href="https://pranafoods.ca/thrivetoolsco" target="_blank" rel="noopener noreferrer" className="text-[#c4622d] hover:underline not-italic">Prana Foods</a>{" "}
          — full disclosure, that's an affiliate link. If you want the full list of what I actually use and recommend,{" "}
          <a href="/discount-codes" className="text-[#c4622d] hover:underline not-italic">here's everything with the codes attached</a>.
        </p>

      </div>
    </PageLayout>
  );
}
