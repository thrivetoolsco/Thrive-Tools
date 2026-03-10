import PageLayout from "@/components/PageLayout";
import ayahuascaImg from "@assets/stock_images/ayahuasca_ceremony.jpg";

export default function AyahuascaJourney() {
  return (
    <PageLayout
      title="Ayahuasca Journey Peru"
      backLabel="Events"
      backHref="/events"
    >
      <div className="flex justify-center" data-testid="section-flyer">
        <div className="card-glass rounded-md glow-rose p-6 sm:p-8 inline-block">
          <img
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
