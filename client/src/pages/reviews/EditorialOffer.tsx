import { discountOfferItems } from "../Discounts";
import { ArticleLink } from "@/components/EditorialPost";

export function requireEditorialOffer(name: string) {
  const offer = discountOfferItems.find((item) => item.name === name);
  if (!offer?.code || !offer.url) {
    throw new Error(`Editorial post requires a source-listed code and URL for ${name}.`);
  }
  return { ...offer, code: offer.code };
}

export function EditorialOffer({ offer }: { offer: ReturnType<typeof requireEditorialOffer> }) {
  return (
    <aside className="card-glass rounded-2xl p-6 space-y-3 text-black/70 leading-relaxed">
      <p>Current source-listed code: <code className="font-mono font-bold text-[#8b3a1a] select-all">{offer.code}</code></p>
      <p><ArticleLink href={offer.url} sponsored>Shop {offer.name}</ArticleLink> and enter the code at checkout.</p>
      <p className="text-sm text-black/60">Confirm acceptance and the order total before paying. No fixed discount amount or automatic application is promised here.</p>
    </aside>
  );
}