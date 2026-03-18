import PageLayout from "@/components/PageLayout";
import ayahuascaImg from "@assets/Ayahuasca_Flyer-1_1773178753075.jpeg";

export default function AyahuascaJourney() {
  return (
    <PageLayout showShare
      title="Ayahuasca Journey Peru"
      backLabel="Events"
      backHref="/events"
      seo={{
        title: "Ayahuasca Journey Peru | Thrive Tools with Eden Laraki",
        description: "Join Eden Laraki on a sacred ayahuasca retreat in Peru. A guided, ceremonial journey for deep healing, insight, and transformation.",
        canonical: "/events/ayahuasca-journey",
      }}
    >
      <div className="flex justify-center" data-testid="section-flyer">
        <div className="card-glass rounded-md glow-rose p-6 sm:p-8 inline-block">
          <img loading="lazy" decoding="async"
            src={ayahuascaImg}
            alt="Ayahuasca Journey Peru Flyer"
            className="max-w-full h-auto rounded-md"
            data-testid="img-ayahuasca-flyer"
          />
        </div>
      </div>
    </PageLayout>
  );
}
