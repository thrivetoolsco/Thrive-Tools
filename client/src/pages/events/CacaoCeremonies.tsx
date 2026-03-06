import PageLayout from "@/components/PageLayout";

export default function CacaoCeremonies() {
  return (
    <PageLayout title="Cacao Ceremonies" backLabel="Events" backHref="/events">
      <div className="space-y-10" data-testid="section-cacao-ceremonies">
        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-[#e8a4b8] text-lg sm:text-xl font-display italic leading-relaxed" data-testid="text-opening">
            Calling all free-spirited souls! It's time to gather under the harmonious fusion of a cacao ceremony and ecstatic dance, as we create a magical space to connect, celebrate, and embark on an unforgettable journey of blissful liberation.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/cacao.jpeg?resize=515%2C343&ssl=1"
            alt="Cacao Ceremony"
            className="rounded-md max-w-full glow-rose"
            data-testid="img-cacao-ceremony"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-history">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-history">
            Cacao ceremonies have an ancient history that can be traced back thousands of years to Central and South America, specifically the Olmec, Mayan, and Aztec civilizations. Cacao beans were valued so much that Aztecs used them as a currency, along with feathers and jade.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-properties">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-properties">
            The properties of cacao are physically, mentally and spiritually powerful: Raw Cacao contains abundant flavonoids, natural plant chemicals with antioxidant properties that safeguard the body's cells from diseases. These flavonoids aid in preventing the accumulation of fatty substances in the bloodstream, thus lowering the risk of strokes and cardiovascular diseases. Cacao is a rich source of magnesium, an essential electrolyte that can boost energy levels, uplift mood, and improve overall well-being.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-spiritual">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-spiritual">
            Spiritually, an ecstatic dance combined with a cacao ceremony is a powerful, shamanic journey that opens the heart and uplifts the spirit. Accompanied by music and breathwork, drinking raw cacao can aid in healing and connecting to the higher Self. It can also enhance creativity, balance masculine and feminine energies in the body, and promote a sense of euphoric joy.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-breathwork">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-breathwork">
            Imagine consciously directing your breath while dancing and releasing what no longer serves you? You'll feel part of a community, united by the power of the breath and the joy that cacao brings.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-exploring">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-exploring">
            Cacao ceremonies are blissful opportunities for exploring the inner self and connecting and honoring other people and nature.
          </p>
          <p className="text-[#e8a4b8] text-lg font-display italic leading-relaxed" data-testid="text-celebrate">
            It is a unique experience and a beautiful way to celebrate life and love.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-cost">
          <p className="text-white font-bold text-2xl" data-testid="text-cost">
            Cost: USD $111
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center" data-testid="section-newsletter">
          <p className="text-white/70 leading-relaxed text-base" data-testid="text-newsletter">
            Stay updated on the dates and locations of each event by subscribing to my newsletter.
          </p>
        </div>
      </div>
    </PageLayout>
  );
}
