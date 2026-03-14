import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";
import indoorGardening1 from "@assets/Indoor_Gardening-1_1773178753058.jpeg";
import indoorGardening2 from "@assets/Indoor_Gardening-2_1773178753067.jpeg";
import indoorGardening3 from "@assets/Indoor_Gardening-3_1773178753048.jpeg";

const images = [
  { src: indoorGardening1, alt: "Indoor Gardening 1" },
  { src: indoorGardening2, alt: "Indoor Gardening 2" },
  { src: indoorGardening3, alt: "Indoor Gardening 3" },
];

export default function IndoorGardening() {
  return (
    <PageLayout title="Indoor Edible Gardening" backLabel="Events" backHref="/events">
      <div className="space-y-10" data-testid="section-indoor-gardening">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-testid="section-images">
          {images.map((img, index) => (
            <img loading="lazy" decoding="async"
              key={index}
              src={img.src}
              alt={img.alt}
              className="rounded-md w-full object-cover glow-rose"
              data-testid={`img-indoor-gardening-${index}`}
            />
          ))}
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-black font-bold text-lg sm:text-xl leading-relaxed" data-testid="text-question">
            Are you aware that you can easily and affordably consume fresh, organic greens every day?
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-description">
            This workshop will equip you with low-maintenance and space-saving methods to grow flavorful and nutrient-dense organic greens.
          </p>
          <p className="text-black font-bold text-lg leading-relaxed" data-testid="text-recipes">
            You'll learn fun & tasty quick recipes to incorporate these greens into your daily meals.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-details">
          <ul className="space-y-3 text-black/80 text-base" data-testid="list-details">
            <li className="flex items-center gap-3" data-testid="text-detail-0">
              <Leaf className="w-4 h-4 text-[#c4622d] flex-shrink-0" />
              2 hours Workshop
            </li>
            <li className="flex items-center gap-3" data-testid="text-detail-1">
              <Leaf className="w-4 h-4 text-[#c4622d] flex-shrink-0" />
              2 different indoor growing techniques
            </li>
            <li className="flex items-center gap-3" data-testid="text-detail-2">
              <Leaf className="w-4 h-4 text-[#c4622d] flex-shrink-0" />
              Fun microgreen & sprouts tasting recipe making
            </li>
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4 text-center" data-testid="section-audience">
          <p className="text-black font-bold text-xl" data-testid="text-audience">
            OPEN TO ADULTS AND KIDS (Ages 12+)
          </p>
          <p className="text-black/80 text-base" data-testid="text-tagline">
            Because growing food is not rocket science!
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4 text-center" data-testid="section-schedule">
          <p className="text-[#c4622d] font-bold text-2xl font-display" data-testid="text-free-event">
            FREE EVENT
          </p>
          <p className="text-black/80 text-base" data-testid="text-schedule">
            EVERY SATURDAY OF JULY & AUGUST 2022
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center" data-testid="section-kits">
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-kits">
            At the end of the workshop, sprouts and microgreen kits will be available for purchase and to take home with you.
          </p>
        </div>

        <div className="text-center" data-testid="section-cta">
          <Link href="/contact">
            <Button
              variant="default"
              className="rounded-full px-8 text-base"
              data-testid="link-schedule-date"
            >
              Sounds great, let's schedule a date
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
