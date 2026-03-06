import PageLayout from "@/components/PageLayout";

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
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/Ayahuasca_Flyer-1.webp?fit=781%2C920&ssl=1"
            alt="Ayahuasca Journey Peru Flyer"
            className="max-w-full h-auto rounded-md"
            data-testid="img-ayahuasca-flyer"
          />
        </div>
      </div>
    </PageLayout>
  );
}
