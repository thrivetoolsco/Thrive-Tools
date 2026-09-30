import FaqJsonLd from "@/components/FaqJsonLd";
import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import { discountOfferItems } from "../Discounts";
const heroImage = "/images/hero-red-light.jpg";
import { Link } from "wouter";

const getOffer = (name: string) => {
  const item = discountOfferItems.find((offer) => offer.name === name);
  if (!item) {
    throw new Error(`Best Red Light Therapy Devices 2026: discount source card "${name}" is missing.`);
  }
  if (!item.url) {
    throw new Error(`Best Red Light Therapy Devices 2026: discount source card "${name}" has no URL.`);
  }
  return item;
};

// Resolve the exact source cards up front so a renamed or missing offer cannot
// silently produce a comparison with stale links or codes.
const joovv = getOffer("Joovv");
const redTherapy = getOffer("RedTherapy");
const lumebox = getOffer("Lumebox");
const mitoRedLight = getOffer("Mito Red Light");
const vieLight = getOffer("VieLight Neuro");
const emrTek = getOffer("EMR-TEK");

const brandGuides: Record<string, string> = {
  Joovv: "/product-reviews/joovv-review",
  RedTherapy: "/blog/red-light-therapy-science-benefits-devices",
  Lumebox: "/lumebox-discount-code",
  "Mito Red Light": "/blog/red-light-therapy-science-benefits-devices",
  "VieLight Neuro": "/product-reviews/vielight-neuro-review",
  "EMR-TEK": "/emr-tek-discount-code",
};

const offers = [joovv, redTherapy, lumebox, mitoRedLight, vieLight, emrTek];

const faqs = [
  {
    q: "What is the best red light therapy device overall?",
    a: "There is no single best format for everyone. Joovv and RedTherapy are listed as panel options, Lumebox as a portable device, Mito Red Light as a mask option, and VieLight Neuro as a transcranial photobiomodulation device. Choose based on the form factor and use case you want, then confirm current product details with the brand.",
  },
  {
    q: "Joovv vs Lumebox — which should I get?",
    a: "They are different formats: the source card describes Joovv products from handheld devices to full-body panels, while Lumebox is listed as a portable device. I own a Lumebox, but that personal experience does not make one format universally better. Compare the brands' current product dimensions, instructions, and specifications before deciding.",
  },
  {
    q: "Are these red light therapy discount codes still valid?",
    a: "The offer codes and URLs shown here are read directly from the current discount-offer data module. A code beginning with “Follow” is link-only, not a code to enter. Codes, eligibility, and checkout terms can change, so confirm the final terms with the retailer before purchase; no particular savings amount is promised here.",
  },
  {
    q: "What wavelengths should a red light therapy device have?",
    a: "I have not verified device-specific wavelengths for every product in this comparison, so I have not listed wavelength numbers. Check the individual brand's current product specifications and documentation for the exact device you are considering.",
  },
  {
    q: "Do I need a full-body panel, or is a portable device enough?",
    a: "That depends on the format and coverage you want. The listed choices include full-body panels, a portable device, a mask, and a transcranial photobiomodulation device. Review each product's current instructions and coverage details; this comparison does not claim a treatment result or recommend a device for a medical condition.",
  },
];

function DeviceName({ name }: { name: string }) {
  const guide = brandGuides[name];
  return guide ? (
    <Link href={guide} className="font-semibold text-[#8b3a1a] underline underline-offset-2 hover:text-[#c4622d]">
      {name}
    </Link>
  ) : (
    <strong>{name}</strong>
  );
}

function OfferLink({ item, children }: { item: (typeof offers)[number]; children: React.ReactNode }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel={item.name === "Lumebox" ? "noopener noreferrer" : "sponsored noopener noreferrer"}
      className="text-[#8b3a1a] underline underline-offset-2 hover:text-[#c4622d]"
    >
      {children}
    </a>
  );
}

function OfferCode({ item }: { item: (typeof offers)[number] }) {
  if (!item.code) return <span>No code is listed in the source card.</span>;
  if (/^follow\b/i.test(item.code)) {
    return (
      <OfferLink item={item}>
        {item.code} <span className="font-sans font-normal">(link only; no code to enter)</span>
      </OfferLink>
    );
  }
  return <><span className="font-mono font-semibold">{item.code}</span> <span className="text-black/55">(check checkout terms)</span></>;
}

function OfferButton({ item }: { item: (typeof offers)[number] }) {
  return (
    <OfferLink item={item}>
      <span className="inline-flex items-center rounded-full border border-[#c4622d]/30 px-4 py-2 text-sm font-semibold no-underline">
        Visit {item.name}
      </span>
    </OfferLink>
  );
}

export default function BestRedLightTherapyDevices2026() {
  return (
    <PageLayout
      title="Best Red Light Therapy Devices 2026, Compared"
      subtitle="By Eden Laraki | ThriveTools.co"
      seo={{
        title: "Best Red Light Therapy Devices 2026 (Compared): Panels, Portables & More",
        description: "Compare the best red light therapy devices by format, including Joovv panels, the portable Lumebox, masks, transcranial devices, and current discount codes.",
        canonical: "/blog/best-red-light-therapy-devices-2026",
        noSuffix: true,
        ogType: "article",
        datePublished: "2026-09-01",
        image: heroImage,
        imageAlt: "Red light therapy panel and compact handheld device in a softly lit room",
      }}
      backLabel="Blog"
      backHref="/blog"
    >
      <FaqJsonLd faqs={faqs} />
      <article className="space-y-8">
        <figure className="card-glass overflow-hidden rounded-2xl">
          <img
            src={heroImage}
            alt="Red light therapy panel and compact handheld device in a softly lit room"
            loading="eager"
            decoding="async"
            className="h-auto max-h-[480px] w-full object-contain bg-white"
          />
        </figure>

        <div className="flex flex-wrap items-center gap-3">
          <Badge className="border-[#c4622d]/25 bg-[#c4622d]/15 text-[#8b3a1a]">Comparisons</Badge>
          <span className="text-sm text-black/50">September 2026</span>
        </div>

        <p className="text-sm leading-relaxed text-black/60">
          ThriveTools may earn a commission from purchases made through affiliate links on this page, at no extra cost to you. The Lumebox URL listed in the source data is its official store URL, not an affiliate URL.
        </p>

        <p className="text-lg leading-relaxed text-black/80">
          I run ThriveTools.co, a science-backed wellness and biohacking platform built from 14 years of personal research, and red light therapy is one of the categories I get asked about most. This comparison covers six brands represented in my offer data and focuses on the formats listed there—not on unverified performance, clinical outcomes, or medical advice. See the current offers on my{" "}
          <Link href="/discount-codes" className="text-[#8b3a1a] underline underline-offset-2">discount codes page</Link>.
        </p>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">The short answer</h2>
          <ul className="list-disc space-y-2 pl-6 leading-relaxed text-black/75">
            <li><strong>Full-body panel format:</strong> <DeviceName name="Joovv" /> and <DeviceName name="RedTherapy" />; both source cards describe panel options.</li>
            <li><strong>Portable format:</strong> <DeviceName name="Lumebox" /> is listed as a portable red light device. I own one; its current source URL is the official store.</li>
            <li><strong>Mask format:</strong> <DeviceName name="Mito Red Light" /> is listed for masks. Its offer is link-only in the source data.</li>
            <li><strong>Transcranial format:</strong> <DeviceName name="VieLight Neuro" /> is listed for transcranial photobiomodulation.</li>
            <li><strong>Broader device lineup:</strong> <DeviceName name="EMR-TEK" /> lists red light devices; check its site for the specific form factor you need.</li>
          </ul>
          <p className="leading-relaxed text-black/70">
            If you only want the red-light offers rather than a device comparison, see the{" "}
            <Link href="/blog/red-light-therapy-discount-codes" className="text-[#8b3a1a] underline underline-offset-2">
              Best Red Light Therapy Discount Codes 2026
            </Link>{" "}
            roundup.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">Comparison table</h2>
          <p className="leading-relaxed text-black/70">
            I have not verified current irradiance, wavelengths, dimensions, or prices for each listed product, so I leave those specifications to the brand sites rather than guessing. The offer values below are taken directly from the source cards.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-black/10 bg-white/60">
            <table className="w-full min-w-[760px] border-collapse text-left text-sm">
              <thead className="bg-[#c4622d]/10 text-black">
                <tr>
                  <th scope="col" className="p-4">Device / brand</th>
                  <th scope="col" className="p-4">Listed format</th>
                  <th scope="col" className="p-4">Format-based fit</th>
                  <th scope="col" className="p-4">Current source offer</th>
                  <th scope="col" className="p-4">Specifications</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/10 text-black/75">
                <tr>
                  <td className="p-4"><DeviceName name={joovv.name} /></td>
                  <td className="p-4">Handheld devices through full-body panels (source-card description)</td>
                  <td className="p-4">Compare the product sizes and coverage you want.</td>
                  <td className="p-4"><OfferCode item={joovv} /> · <OfferLink item={joovv}>Visit brand site</OfferLink></td>
                  <td className="p-4">Check the brand&apos;s site for current specs</td>
                </tr>
                <tr>
                  <td className="p-4"><DeviceName name={redTherapy.name} /></td>
                  <td className="p-4">Full-body panels (source-card description)</td>
                  <td className="p-4">For shoppers specifically comparing panel format.</td>
                  <td className="p-4"><OfferCode item={redTherapy} /> · <OfferLink item={redTherapy}>Visit brand site</OfferLink></td>
                  <td className="p-4">Check the brand&apos;s site for current specs</td>
                </tr>
                <tr>
                  <td className="p-4"><DeviceName name={lumebox.name} /></td>
                  <td className="p-4">Portable red light device</td>
                  <td className="p-4">For shoppers prioritizing a portable form factor.</td>
                  <td className="p-4"><OfferCode item={lumebox} /> · <OfferLink item={lumebox}>Visit official store</OfferLink></td>
                  <td className="p-4">Check the brand&apos;s site for current specs</td>
                </tr>
                <tr>
                  <td className="p-4"><DeviceName name={mitoRedLight.name} /></td>
                  <td className="p-4">Masks (source-card description)</td>
                  <td className="p-4">For shoppers comparing a targeted mask format.</td>
                  <td className="p-4"><OfferCode item={mitoRedLight} /> · <OfferLink item={mitoRedLight}>Visit brand site</OfferLink></td>
                  <td className="p-4">Check the brand&apos;s site for current specs</td>
                </tr>
                <tr>
                  <td className="p-4"><DeviceName name={vieLight.name} /></td>
                  <td className="p-4">Transcranial photobiomodulation device</td>
                  <td className="p-4">A different format from panels, portable devices, and masks.</td>
                  <td className="p-4"><OfferCode item={vieLight} /> · <OfferLink item={vieLight}>Visit brand site</OfferLink></td>
                  <td className="p-4">Check the brand&apos;s site for current specs</td>
                </tr>
                <tr>
                  <td className="p-4"><DeviceName name={emrTek.name} /></td>
                  <td className="p-4">Red light devices; specific formats vary</td>
                  <td className="p-4">Browse the current lineup for the form factor you need.</td>
                  <td className="p-4"><OfferCode item={emrTek} /> · <OfferLink item={emrTek}>Visit brand site</OfferLink></td>
                  <td className="p-4">Check the brand&apos;s site for current specs</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm leading-relaxed text-black/60">
            Check each retailer for current prices, availability, product instructions, and offer eligibility before ordering. A code being listed here does not promise a particular discount amount or that it applies to every item.
          </p>
        </section>

        <section className="space-y-5">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">Full-body panels: Joovv vs RedTherapy</h2>
          <div className="card-glass space-y-3 rounded-2xl p-6">
            <h3 className="font-display text-xl font-bold text-black"><DeviceName name={joovv.name} /></h3>
            <p className="leading-relaxed text-black/70">
              The Joovv source card describes a range from handheld devices to full-body panels. That range makes it a relevant brand to compare if you are deciding among panel sizes or want to consider more than one device format. Follow the brand guide for product details, and review current specifications directly with Joovv.
            </p>
            <p className="leading-relaxed text-black/70">Offer listed in the source data: <OfferCode item={joovv} />. <OfferButton item={joovv} /></p>
          </div>
          <div className="card-glass space-y-3 rounded-2xl p-6">
            <h3 className="font-display text-xl font-bold text-black"><DeviceName name={redTherapy.name} /></h3>
            <p className="leading-relaxed text-black/70">
              RedTherapy&apos;s source card describes full-body red light panels. If panel format is what you are comparing, use the linked brand guide and the current product pages to evaluate the actual sizes, specifications, and prices side by side. I do not rank it against Joovv on unverified value or performance claims.
            </p>
            <p className="leading-relaxed text-black/70">Offer listed in the source data: <OfferCode item={redTherapy} />. <OfferButton item={redTherapy} /></p>
          </div>
          <p className="leading-relaxed text-black/70">
            To choose between them, start with the product format and space you have, then compare current panel dimensions, published specifications, instructions, warranty, and checkout terms. A panel label alone does not establish a particular coverage or result.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">Portable format: Lumebox</h2>
          <p className="leading-relaxed text-black/70">
            I own a Lumebox, and its source card identifies it as a portable red light therapy device. Portability is the format distinction here; I am not treating that as evidence of a specific wavelength, battery runtime, output, or health effect. Check its current product page for those details and compare its size and operating instructions with your needs.
          </p>
          <p className="leading-relaxed text-black/70">
            The source card lists code <strong className="font-mono">{lumebox.code}</strong>. Its URL is the official Lumebox store, not an affiliate URL, so this particular link does not track an affiliate referral. Confirm the code and eligibility at checkout; no discount amount is promised.
          </p>
          <OfferButton item={lumebox} />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">Targeted mask format: Mito Red Light</h2>
          <p className="leading-relaxed text-black/70">
            Mito Red Light&apos;s source card describes red light masks for facial use. If you are comparing targeted face-worn formats rather than a room-size panel, look at the brand&apos;s current mask range, device instructions, fit, and specifications. This is a format distinction, not a claim about skin or recovery outcomes.
          </p>
          <p className="leading-relaxed text-black/70">
            The source card provides <OfferCode item={mitoRedLight} />. Because its listed value starts with “Follow,” use the source URL to reach the offer; it is not a code to enter. The data does not verify an automatic discount.
          </p>
          <OfferButton item={mitoRedLight} />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">Transcranial format: VieLight Neuro</h2>
          <p className="leading-relaxed text-black/70">
            VieLight Neuro is the format outlier in this comparison: its source card describes transcranial photobiomodulation. That differs from choosing a panel, portable device, or mask. For product-specific design, intended-use information, published evidence, and safety instructions, consult the VieLight device page and its documentation rather than treating the category label as evidence for an outcome.
          </p>
          <p className="leading-relaxed text-black/70">The source card lists code <strong className="font-mono">{vieLight.code}</strong>; review the retailer&apos;s checkout terms for current eligibility.</p>
          <OfferButton item={vieLight} />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">Also worth comparing: EMR-TEK</h2>
          <p className="leading-relaxed text-black/70">
            The EMR-TEK source card describes a light-based brand with red light devices alongside other lighting products, but it does not identify a particular device format. Browse its current lineup and product documentation to determine whether it has the style of red light device you are looking for.
          </p>
          <p className="leading-relaxed text-black/70">The source card lists code <strong className="font-mono">{emrTek.code}</strong>. Check the final cart for eligibility; the listing does not state a guaranteed savings amount.</p>
          <OfferButton item={emrTek} />
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">How to choose by format</h2>
          <ul className="list-disc space-y-2 pl-6 leading-relaxed text-black/75">
            <li><strong>Consider panel options</strong> such as Joovv or RedTherapy if a panel is the form factor you want to compare.</li>
            <li><strong>Consider portability</strong> with Lumebox if a handheld portable device better fits your storage or travel preferences.</li>
            <li><strong>Compare targeted options</strong> such as the Mito Red Light mask format if you are specifically shopping for a mask.</li>
            <li><strong>Explore transcranial formats</strong> through VieLight Neuro if that is the category you intend to research; consult the brand&apos;s intended-use information.</li>
            <li><strong>Check the lineup</strong> at EMR-TEK for the specific product format and specifications you want.</li>
          </ul>
          <p className="leading-relaxed text-black/70">
            Before buying, verify product-specific wavelengths, irradiance, recommended distance and duration, safety instructions, warranty, return terms, and the current total price with the manufacturer. These details vary by model and can change; I have not filled in unverified specifications here.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">Current offer data</h2>
          <p className="leading-relaxed text-black/70">
            The following values come from each brand&apos;s source card. Codes are not guarantees of a particular discount, eligibility, or stacking; retailer checkout terms control. Values beginning with “Follow” are link-only, not automatic discounts.
          </p>
          <ul className="space-y-3">
            {offers.map((item) => (
              <li key={item.name} className="card-glass flex flex-col gap-2 rounded-xl p-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-black/80"><DeviceName name={item.name} /> — <OfferCode item={item} /></span>
                <OfferButton item={item} />
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-bold text-black sm:text-3xl">FAQ</h2>
          {faqs.map(({ q, a }) => (
            <div key={q} className="card-glass rounded-2xl p-6">
              <h3 className="font-display font-bold text-black">{q}</h3>
              <p className="mt-2 leading-relaxed text-black/70">{a}</p>
            </div>
          ))}
        </section>
      </article>
    </PageLayout>
  );
}