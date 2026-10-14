import type { ReactNode } from "react";
import EditorialPost, { ArticleLink } from "@/components/EditorialPost";
import { discountOfferItems } from "../Discounts";

const sourceOffer = discountOfferItems.find((offer) => offer.name === "IM8");
if (!sourceOffer?.url || !sourceOffer.code) throw new Error("IM8 articles require a directory-listed code and partner URL");
export const im8Offer = { code: sourceOffer.code, url: sourceOffer.url };

export function IM8ShopLink({ children = "im8health.com" }: { children?: ReactNode }) {
  return <ArticleLink href={im8Offer.url} sponsored>{children}</ArticleLink>;
}

export function IM8Table({ caption, headings, rows }: { caption: string; headings?: string[]; rows: ReactNode[][] }) {
  return (
    <div className="overflow-x-auto card-glass rounded-2xl">
      <table className="w-full text-left text-sm">
        <caption className="sr-only">{caption}</caption>
        {headings && <thead><tr>{headings.map((heading) => <th key={heading} scope="col" className="px-4 py-3 text-black font-semibold">{heading}</th>)}</tr></thead>}
        <tbody className="divide-y divide-[#c4622d]/15">
          {rows.map(([label, ...values], index) => <tr key={index}><th scope="row" className="px-4 py-3 font-semibold text-black">{label}</th>{values.map((value, column) => <td key={column} className="px-4 py-3">{value}</td>)}</tr>)}
        </tbody>
      </table>
    </div>
  );
}

type Props = {
  title: string;
  seoTitle: string;
  description: string;
  canonical: string;
  image: string;
  imageAlt: string;
  intro: ReactNode;
  faqs: { q: string; a: string }[];
  children: ReactNode;
};

export default function IM8Article(props: Props) {
  return (
    <EditorialPost
      {...props}
      category="Brand Guides"
      datePublished="2026-10-13"
      imageCaption="IM8 product photo supplied by the site owner."
      disclosure={`Disclosure: ThriveTools is an affiliate partner of IM8. If you shop through our link or use ${im8Offer.code}, we may earn a commission at no extra cost to you.`}
    >
      <aside className="card-glass rounded-2xl p-5 text-sm text-black/60 leading-relaxed">
        Product details, prices, reported study figures and offer terms below reflect the IM8 information supplied for this article, not an independently verified checkout. Prices are in USD; confirm the current formula, subscription, first-order eligibility and guarantee terms on IM8&apos;s site before buying. Per-serving figures are brand-quoted and may differ slightly from calculations using rounded monthly prices. Brand claims about aging pathways are not proof that the finished drink reverses aging.
      </aside>
      {props.children}
    </EditorialPost>
  );
}
