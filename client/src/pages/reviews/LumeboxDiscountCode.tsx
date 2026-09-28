import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "wouter";
import lumeboxImage from "@assets/lumebox-2-official.jpg";

const title = "Lumebox Discount Code (ThriveTools) & Brand Guide (2026)";
const code = "ThriveTools";
// Official store URL only. Replace with the owner's Lumebox affiliate URL when provided; do not guess one.
const storeUrl = "https://thelumebox.com/";

const faqs = [
  {
    question: "What is the Lumebox discount code?",
    answer: "The Lumebox discount code is ThriveTools. Enter it at checkout on thelumebox.com. No specific discount percentage has been published; check the order total when you apply the code.",
  },
  {
    question: "How do I use the ThriveTools code at Lumebox?",
    answer: "Go to thelumebox.com using the store link on this page. Add the LUMEBOX 2.0 to your cart, then enter ThriveTools in the code field at checkout. Review the order total before paying.",
  },
  {
    question: "What wavelengths does Lumebox use?",
    answer: "According to Lumebox, LUMEBOX 2.0 emits 660nm red light and 850nm near-infrared light. The brand describes these as two of the most-studied wavelengths in photobiomodulation research.",
  },
  {
    question: "Is Lumebox third-party tested?",
    answer: "Lumebox states that its wavelengths and irradiance have been third-party tested. The brand also reports third-party testing for EMF and IEC electrical and optical light safety standards.",
  },
  {
    question: "Is Lumebox FDA approved?",
    answer: "No. Lumebox describes its device as FDA-registered; registration is not the same as FDA approval or clearance.",
  },
  {
    question: "Is Lumebox HSA/FSA eligible?",
    answer: "The Lumebox site states that its device is HSA/FSA eligible. Check the details on the official store before purchasing.",
  },
  {
    question: "Does Lumebox ship internationally?",
    answer: "The brand's site lists international shipping to Canada, Australia, Singapore, and the UK. It notes that delivery to these destinations may take 3–4 weeks.",
  },
  {
    question: "What's included with the Lumebox 2.0?",
    answer: "According to Lumebox, the box includes the handheld device, a travel case, battery, removable comfort-grip accessory, A/C adapter, user manual, and protective eyewear. The comfort-grip accessory is removable.",
  },
  {
    question: "Where is the best place to buy Lumebox?",
    answer: "Buy from the official thelumebox.com store through the store link on this page. Enter ThriveTools at checkout; no specific discount amount has been published.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map(({ question, answer }) => ({
    "@type": "Question",
    name: question,
    acceptedAnswer: { "@type": "Answer", text: answer },
  })),
};

function StoreLink({ children }: { children: React.ReactNode }) {
  return (
    <a href={storeUrl} target="_blank" rel="noopener noreferrer sponsored" className="text-[#8b3a1a] underline">
      {children}
    </a>
  );
}

export default function LumeboxDiscountCode() {
  return (
    <PageLayout
      showShare
      title={title}
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: `${title} | Thrive Tools`,
        description: "Lumebox discount code ThriveTools and an informational guide to the portable LUMEBOX 2.0 red light therapy device, its features, testing, shipping, and FAQs.",
        canonical: "https://thrivetools.co/lumebox-discount-code",
        ogType: "article",
        datePublished: "2026-09-28",
        image: lumeboxImage,
        imageAlt: "LUMEBOX 2.0 portable red light therapy device in use",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>
      <article className="space-y-8">
        <div className="card-glass rounded-2xl overflow-hidden">
          <img loading="lazy" decoding="async" src={lumeboxImage} alt="LUMEBOX 2.0 portable red light therapy device in use" className="w-full h-auto max-h-[480px] object-contain bg-white" />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Badge className="bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25">Discount Codes</Badge>
          <span className="text-sm text-black/50">September 28, 2026</span>
        </div>
        <p className="text-lg leading-relaxed text-black/80">
          LUMEBOX is a portable red light therapy device. The current model, LUMEBOX 2.0, emits 660nm red and 850nm near-infrared light, which the brand describes as two of the most-studied wavelengths in photobiomodulation research. This guide takes an in-depth look at Lumebox based on the company's published information.
        </p>
        <p className="text-sm text-black/60 leading-relaxed">
          ThriveTools is a Lumebox affiliate partner. We may earn a commission on purchases made through links on this page, at no extra cost to you.
        </p>
        <aside className="card-glass rounded-2xl p-6 md:p-8 flex flex-col sm:flex-row gap-5 sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <Tag className="w-6 h-6 shrink-0 text-[#8b3a1a]" />
            <p className="text-lg text-black/80">
              Use code <strong className="text-black font-bold">{code}</strong> at thelumebox.com checkout
            </p>
          </div>
          <a href={storeUrl} target="_blank" rel="noopener noreferrer sponsored" className="shrink-0 self-start sm:self-auto">
            <Button className="btn-primary rounded-full px-5">
              Visit the official Lumebox store <ExternalLink className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </aside>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">What is LUMEBOX 2.0?</h2>
          <p className="text-black/70 leading-relaxed">
            LUMEBOX 2.0 is a handheld device designed for portable red and near-infrared light sessions. Lumebox lists skincare routines, post-workout recovery, and temporary relief of minor muscle and joint pain among its stated uses. I own and use a Lumebox; the specifications and brand claims in this guide come from the company's published information, not results from my personal use.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Light technology and testing</h2>
          <p className="text-black/70 leading-relaxed">
            Lumebox says its dual-chip design delivers 660nm red and 850nm near-infrared light simultaneously from each bulb. The brand states that independent testing found 58% greater red light irradiance, 80% greater near-infrared irradiance, and 25% more body surface coverage than the leading portable red light device. These are Lumebox's comparative claims, not independently verified findings by ThriveTools.
          </p>
          <p className="text-black/70 leading-relaxed">
            According to Lumebox, its wavelengths and high irradiance are third-party tested, as are EMF levels and IEC electrical and optical light safety standards. The brand lists a 110v–240v voltage range and says the device is 25% bigger than most handheld devices. Lumebox describes the device as FDA-registered, which is not the same as FDA clearance or approval; its site also states HSA/FSA eligibility.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Design and what comes in the box</h2>
          <p className="text-black/70 leading-relaxed">
            The handheld LUMEBOX 2.0 has optional 6- and 12-minute timers, extended battery life, an updated carrier case and handle design, and a removable comfort-grip accessory, according to the brand. Lumebox lists a handheld red light device, travel case, battery, removable comfort-grip accessory, A/C adapter, user manual, and protective eyewear as included in the box.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Who is Lumebox for?</h2>
          <p className="text-black/70 leading-relaxed">
            People looking for a portable, travel-friendly red light therapy device for skin, joints, and recovery rather than a wall-mounted full-body panel may prefer this format. Lumebox's stated uses are skincare routines, post-workout recovery, and temporary relief of minor muscle and joint pain.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Shipping</h2>
          <p className="text-black/70 leading-relaxed">
            The brand's site notes that international shipping to Canada, Australia, Singapore, and the UK may take 3–4 weeks.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">How to use the Lumebox promo code</h2>
          <ol className="list-decimal pl-6 space-y-2 text-black/70 leading-relaxed">
            <li>Go to <StoreLink>thelumebox.com</StoreLink> through the official store link on this page.</li>
            <li>Add the LUMEBOX 2.0 device to your cart.</li>
            <li>Enter <strong>{code}</strong> in the code field at checkout and check the order total before paying.</li>
          </ol>
          <p className="text-black/70 leading-relaxed">
            Looking for a category comparison instead? See the <Link href="/blog/red-light-therapy-discount-codes" className="text-[#8b3a1a] underline">Best Red Light Therapy Discount Codes 2026</Link> roundup. This guide focuses on Lumebox itself.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-black">Lumebox FAQ</h2>
          {faqs.map(({ question, answer }) => (
            <div key={question} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{question}</h3>
              <p className="mt-2 text-black/70 leading-relaxed">{answer}</p>
            </div>
          ))}
        </section>
      </article>
    </PageLayout>
  );
}