import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, Leaf } from "lucide-react";

const retreats = [
  {
    id: "blossoming-bliss",
    title: "Blossoming Bliss Transformation",
    description: "A deeply immersive retreat for inner transformation, healing, and expanding into your fullest self. Plant medicine, breathwork, and more.",
    href: "/retreats-workshops/blossoming-bliss",
  },
  {
    id: "spiritual-nutrition",
    title: "Spiritual Nutrition",
    description: "Explore the connection between food, frequency, and consciousness. Learn to nourish your body and spirit with intention.",
    href: "/retreats-workshops/spiritual-nutrition",
  },
  {
    id: "mescaline-wisdom",
    title: "Mescaline Wisdom",
    description: "A ceremonial Wachuma (San Pedro cactus) retreat. Heart-centered, deeply healing plant medicine for emotional clearing and expanded awareness.",
    href: "/retreats-workshops/mescaline-wisdom",
  },
  {
    id: "inner-silence",
    title: "Inner Silence",
    description: "A guided, immersive experience in meditation, stillness, and disconnection from the noise of modern life.",
    href: "/retreats-workshops/inner-silence",
  },
];

export default function Retreats() {
  return (
    <PageLayout
      title="Retreats & Workshops"
      subtitle="Immersive experiences led by Eden Laraki"
      seo={{
        title: "Retreats & Workshops with Eden Laraki | Thrive Tools",
        description: "Plant medicine, breathwork, spiritual nutrition, and deep meditation retreats led by Eden Laraki. Choose the experience that calls to you.",
        canonical: "/retreats-workshops",
      }}
    >
      <div className="space-y-10">

        <section data-testid="section-retreats-intro">
          <p className="text-black/60 leading-relaxed text-pretty">
            Each retreat is designed as a complete immersive experience, held in intimate groups. Click any retreat below to explore the details, format, and how to apply.
          </p>
        </section>

        <section data-testid="section-retreats-list">
          <div className="grid gap-4">
            {retreats.map((retreat) => (
              <Link
                key={retreat.id}
                href={retreat.href}
                className="card-glass hover-elevate rounded-xl p-6 sm:p-7 flex items-start justify-between gap-4 group transition-all duration-200"
                style={{ borderColor: "rgba(201,122,142,0.25)" }}
                data-testid={`link-retreat-${retreat.id}`}
              >
                <div className="flex items-start gap-4 min-w-0">
                  <div className="mt-0.5 w-8 h-8 rounded-full bg-[#c4622d]/10 flex items-center justify-center shrink-0">
                    <Leaf className="w-4 h-4 text-[#c4622d]" />
                  </div>
                  <div className="min-w-0">
                    <p
                      className="text-black font-semibold text-base sm:text-lg group-hover:text-[#c4622d] transition-colors leading-snug mb-1"
                      data-testid={`text-retreat-title-${retreat.id}`}
                    >
                      {retreat.title}
                    </p>
                    <p
                      className="text-black/55 text-sm leading-relaxed text-pretty"
                      data-testid={`text-retreat-desc-${retreat.id}`}
                    >
                      {retreat.description}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-[#c4622d] opacity-0 group-hover:opacity-100 transition-opacity shrink-0 mt-1" />
              </Link>
            ))}
          </div>
        </section>

      </div>
    </PageLayout>
  );
}
