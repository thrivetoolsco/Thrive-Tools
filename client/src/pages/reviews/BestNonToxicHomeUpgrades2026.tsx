import PageLayout from "@/components/PageLayout";
import FaqJsonLd from "@/components/FaqJsonLd";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";
const heroImage = "/images/hero-non-toxic-home.jpg";
import { discountOfferItems } from "../Discounts";

const findOffer = (name: string) => {
  const offer = discountOfferItems.find((item) => item.name === name);
  if (!offer) {
    throw new Error(`BestNonToxicHomeUpgrades2026: discount source item "${name}" was not found.`);
  }
  return offer;
};

const waterDrop = findOffer("WaterDropFilter");
const cookware = findOffer("360 Cookware");
const davids = findOffer("Davids-usa");

const guidePaths = {
  water: "/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review",
  cookware: "/blog/360-cookware-discount-code",
  davids: "/blog/davids-discount-code",
};

const faqs = [
  {
    q: "Which home upgrade should I make first?",
    a: "Start with the category that best fits your household and the item you are already planning to replace. Water filtration, cookware, and oral care solve different practical needs, so this comparison does not claim that one has a proven health impact over the others.",
  },
  {
    q: "What should I compare when choosing a water filter?",
    a: "Check the specific model's filtration claims, certifications, replacement-filter availability and cost, installation or countertop requirements, and fit with your water source. Product options vary, so confirm those details with the manufacturer before buying.",
  },
  {
    q: "What does 360 Cookware list about its cookware?",
    a: "The partner listing describes 360 Cookware as stainless-steel cookware and bakeware without PFAS or chemical coatings. Review the manufacturer's current materials and care information for the particular product you are considering.",
  },
  {
    q: "Are the partner codes guaranteed to work or create an automatic discount?",
    a: "The source list provides the codes shown on this page. A listed code is not a guarantee of a particular discount or checkout result; check the merchant's terms and confirm the code is accepted before completing an order. If a source code begins with “Follow,” it is link-only and should not be treated as an automatic discount.",
  },
];

function PartnerLink({
  guidePath,
  children,
}: {
  guidePath: string;
  children: React.ReactNode;
}) {
  return (
    <a href={guidePath} className="font-semibold text-[#8b3a1a] underline decoration-[#c4622d]/40 underline-offset-4 hover:text-[#c4622d]">
      {children}
    </a>
  );
}

function OfferDetails({ item, label, displayName }: { item: typeof waterDrop; label: string; displayName: string }) {
  const linkOnly = !item.code || /^follow\b/i.test(item.code);

  return (
    <div className="rounded-xl border border-[#c4622d]/20 bg-white/50 p-4">
      <p className="text-xs font-semibold uppercase tracking-wider text-[#3d1a28]/55">{label}</p>
      <p className="mt-1 font-mono text-sm font-semibold text-[#8b3a1a]">
        {item.code ? (linkOnly ? <>Link-only: {item.code}</> : item.code) : "Link-only offer"}
      </p>
      <a href={item.url} target="_blank" rel="noopener noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-[#8b3a1a] hover:underline">
        Visit {displayName} <ExternalLink className="h-3.5 w-3.5" />
      </a>
      {linkOnly && <p className="mt-2 text-xs text-black/55">Follow the offer link for details; no automatic discount is claimed.</p>}
    </div>
  );
}

export default function BestNonToxicHomeUpgrades2026() {
  return (
    <PageLayout
      title="Best Non-Toxic Home Upgrades 2026, Compared"
      subtitle="By Eden Laraki | ThriveTools.co · September 2026"
      seo={{
        title: "Best Non-Toxic Home Upgrades 2026 (Compared): Water, Cookware & More",
        description:
          "Compare best non-toxic home upgrades by category, including a water filter, non-toxic cookware, oral care, and current discount codes from partner listings.",
        canonical: "/blog/best-non-toxic-home-upgrades-2026",
        ogType: "article",
        datePublished: "2026-09-01",
        image: heroImage,
        imageAlt: "Water filter pitcher, glass water bottle, and stainless-steel cookware on a bright kitchen counter",
        noSuffix: true,
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <article className="space-y-8">
        <div className="overflow-hidden rounded-2xl card-glass">
          <img
            src={heroImage}
            alt="Water filter pitcher, glass water bottle, and stainless-steel cookware on a bright kitchen counter"
            className="h-auto w-full object-cover"
            fetchPriority="high"
          />
        </div>

        <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">Comparisons</Badge>

        <p className="text-sm leading-relaxed text-black/55">
          <strong>Affiliate disclosure:</strong> This post contains affiliate links. If you buy through them, I may earn a commission at no extra cost to you.
        </p>

        <FaqJsonLd faqs={faqs} />

        <p className="text-lg leading-relaxed text-black/75">
          I run ThriveTools.co, a science-backed wellness and biohacking platform shaped by 14 years of personal research. Biohacking is not only about what you add; it can also mean taking a closer look at everyday products and choosing what fits your priorities. Here I compare three partner brands by category—home water filtration, cookware, and oral care—rather than presenting a medical or health-outcome ranking. Their current source-listed codes and links are also available on my{" "}
          <a href="/discount-codes" className="font-semibold text-[#8b3a1a] underline underline-offset-4">discount codes page</a>.
        </p>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">The short answer</h2>
          <ul className="space-y-3 text-black/75">
            <li><strong>Water filtration:</strong> <PartnerLink guidePath={guidePaths.water}>WaterDropFilter</PartnerLink> is the category pick if you are comparing home filtration options.</li>
            <li><strong>Cookware:</strong> <PartnerLink guidePath={guidePaths.cookware}>360 Cookware</PartnerLink> is the pots-and-pans option in this comparison.</li>
            <li><strong>Oral care:</strong> <PartnerLink guidePath={guidePaths.davids}>Davids</PartnerLink> is the oral-care option; the partner source describes it as premium oral care.</li>
          </ul>
          <p className="text-sm leading-relaxed text-black/60">
            “Best” here means a useful category match, not a claim that one product is medically superior or that a swap will produce a health result. The phrase “non-toxic” is broad; look at product-specific materials, performance information, and your own requirements.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Comparison table</h2>
          <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white/55">
            <table className="w-full min-w-[720px] border-collapse text-left text-sm">
              <thead className="bg-[#c4622d]/10 text-black">
                <tr>
                  <th scope="col" className="p-4">Upgrade</th>
                  <th scope="col" className="p-4">Category</th>
                  <th scope="col" className="p-4">Best suited to compare</th>
                  <th scope="col" className="p-4">Source-listed code</th>
                  <th scope="col" className="p-4">Partner link</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 text-black/70">
                <tr>
                  <td className="p-4 font-semibold"><PartnerLink guidePath={guidePaths.water}>WaterDropFilter</PartnerLink></td>
                  <td className="p-4">Home water filtration</td>
                  <td className="p-4">People comparing an at-home filtration system</td>
                  <td className="p-4 font-mono">{waterDrop.code && /^follow\b/i.test(waterDrop.code) ? <>Link-only: {waterDrop.code}</> : waterDrop.code ?? "Link-only offer"}</td>
                  <td className="p-4"><a href={waterDrop.url} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">Visit brand</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold"><PartnerLink guidePath={guidePaths.cookware}>360 Cookware</PartnerLink></td>
                  <td className="p-4">Cookware</td>
                  <td className="p-4">People shopping for stainless-steel pots, pans, or bakeware</td>
                  <td className="p-4 font-mono">{cookware.code && /^follow\b/i.test(cookware.code) ? <>Link-only: {cookware.code}</> : cookware.code ?? "Link-only offer"}</td>
                  <td className="p-4"><a href={cookware.url} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">Visit brand</a></td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold"><PartnerLink guidePath={guidePaths.davids}>Davids</PartnerLink></td>
                  <td className="p-4">Oral care</td>
                  <td className="p-4">People comparing toothpaste and other oral-care products</td>
                  <td className="p-4 font-mono">{davids.code && /^follow\b/i.test(davids.code) ? <>Link-only: {davids.code}</> : davids.code ?? "Link-only offer"}</td>
                  <td className="p-4"><a href={davids.url} target="_blank" rel="noopener noreferrer" className="text-[#8b3a1a] underline">Visit brand</a></td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-relaxed text-black/60">
            Prices, product lines, and checkout terms can change. Use each partner link to check current availability, full specifications, and any conditions for the listed code before deciding.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Best water upgrade: WaterDropFilter</h2>
          <p className="leading-relaxed text-black/70">
            WaterDropFilter is the water-filtration choice in this comparison. Its source listing describes reverse-osmosis systems with UV sterilization and notes countertop options, including models with instant heating or cooling. Those are category-level details, not a guarantee that every model includes each feature; compare the exact model and its current specifications.
          </p>
          <p className="leading-relaxed text-black/70">
            Before choosing a filter, consider the contaminants you want to address, independently available test or certification information, installation and counter space, filter replacement schedule and cost, and the quality of your starting water. Check the manufacturer documentation rather than assuming one system is right for every household.
          </p>
          <OfferDetails item={waterDrop} label="Source-listed partner code" displayName="WaterDropFilter" />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Best cookware upgrade: 360 Cookware</h2>
          <p className="leading-relaxed text-black/70">
            360 Cookware is the cookware pick for readers comparing pots, pans, and bakeware. The source listing describes its range as stainless steel and free from PFAS and chemical coatings. Treat that as the partner listing’s description, and check the manufacturer's current material and care information for the individual item—especially if you are comparing it with a particular coated pan you already own.
          </p>
          <p className="leading-relaxed text-black/70">
            Compare the pieces and sizes you actually need, compatibility with your cooktop, care instructions, and the total cost of the set or individual items. Materials and construction can vary across brands and product lines; select based on verifiable product details and how you cook.
          </p>
          <OfferDetails item={cookware} label="Source-listed partner code" displayName="360 Cookware" />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Best oral-care swap: Davids</h2>
          <p className="leading-relaxed text-black/70">
            Davids is the oral-care option here. The discount source identifies the partner listing as “Premium Oral Care”; it does not provide detailed formula or ingredient claims. Review the current product label and ingredients yourself, and choose a toothpaste that suits your preferences and dental-care needs.
          </p>
          <p className="leading-relaxed text-black/70">
            For a like-for-like comparison, look at the exact product, ingredient list, size, flavor, and any features that matter to you. A brand or marketing descriptor alone is not a substitute for checking the package or asking a dental professional about an individual concern.
          </p>
          <OfferDetails item={davids} label="Source-listed partner code" displayName="Davids" />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">How to choose: rank by your own priorities</h2>
          <ol className="list-decimal space-y-3 pl-6 leading-relaxed text-black/70">
            <li><strong className="text-black">Start with the category you need.</strong> If you are replacing a water filter, compare filtration systems. If cookware is due for replacement, compare materials, pieces, and care. If you are shopping for oral care, compare labels and product details.</li>
            <li><strong className="text-black">Check the details that affect daily use.</strong> Include setup, maintenance, replacement parts, cleaning, and whether the product suits your household routine.</li>
            <li><strong className="text-black">Confirm the current offer at checkout.</strong> The codes below are drawn from the partner source list. Offers and eligibility can change; verify terms with the merchant before placing an order.</li>
          </ol>
          <p className="leading-relaxed text-black/70">
            There is no single evidence-based ranking here for exposure reduction or health impact across these unrelated categories. I would choose based on the product you need, information you can verify, and a budget and maintenance plan you are comfortable with.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Partner codes and links</h2>
          <p className="leading-relaxed text-black/70">
            These are the current code strings in the project's partner source list. Codes are not promises of a discount amount; check the merchant's current offer terms and confirm acceptance before paying.
          </p>
          <div className="grid gap-4 md:grid-cols-3">
            <OfferDetails item={waterDrop} label="WaterDropFilter" displayName="WaterDropFilter" />
            <OfferDetails item={cookware} label="360 Cookware" displayName="360 Cookware" />
            <OfferDetails item={davids} label="Davids" displayName="Davids" />
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black">Frequently asked questions</h2>
          {faqs.map(({ q, a }) => (
            <div key={q} className="rounded-2xl card-glass p-6">
              <h3 className="font-display font-bold text-black">{q}</h3>
              <p className="mt-2 leading-relaxed text-black/70">{a}</p>
            </div>
          ))}
        </section>
      </article>
    </PageLayout>
  );
}