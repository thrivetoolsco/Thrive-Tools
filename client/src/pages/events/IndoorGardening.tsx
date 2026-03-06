import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const images = [
  {
    src: "https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/Indoor_Gardening-1.webp?fit=564%2C478&ssl=1",
    alt: "Indoor Gardening 1",
  },
  {
    src: "https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/Indoor_Gardening-2.webp?fit=564%2C478&ssl=1",
    alt: "Indoor Gardening 2",
  },
  {
    src: "https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/Indoor_Gardening-3.webp?fit=564%2C478&ssl=1",
    alt: "Indoor Gardening 3",
  },
];

export default function IndoorGardening() {
  return (
    <PageLayout title="Indoor Edible Gardening" backLabel="Events" backHref="/events">
      <div className="space-y-10" data-testid="section-indoor-gardening">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" data-testid="section-images">
          {images.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className="rounded-md w-full object-cover glow-rose"
              data-testid={`img-indoor-gardening-${index}`}
            />
          ))}
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-intro">
          <p className="text-white font-bold text-lg sm:text-xl leading-relaxed" data-testid="text-question">
            Are you aware that you can easily and affordably consume fresh, organic greens every day?
          </p>
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-description">
            This workshop will equip you with low-maintenance and space-saving methods to grow flavorful and nutrient-dense organic greens.
          </p>
          <p className="text-white font-bold text-lg leading-relaxed" data-testid="text-recipes">
            You'll learn fun & tasty quick recipes to incorporate these greens into your daily meals.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-details">
          <ul className="space-y-3 text-white/80 text-base" data-testid="list-details">
            <li className="flex items-center gap-3" data-testid="text-detail-0">
              <Leaf className="w-4 h-4 text-[#e8a4b8] flex-shrink-0" />
              2 hours Workshop
            </li>
            <li className="flex items-center gap-3" data-testid="text-detail-1">
              <Leaf className="w-4 h-4 text-[#e8a4b8] flex-shrink-0" />
              2 different indoor growing techniques
            </li>
            <li className="flex items-center gap-3" data-testid="text-detail-2">
              <Leaf className="w-4 h-4 text-[#e8a4b8] flex-shrink-0" />
              Fun microgreen & sprouts tasting recipe making
            </li>
          </ul>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4 text-center" data-testid="section-audience">
          <p className="text-white font-bold text-xl" data-testid="text-audience">
            OPEN TO ADULTS AND KIDS (Ages 12+)
          </p>
          <p className="text-white/80 text-base" data-testid="text-tagline">
            Because growing food is not rocket science!
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4 text-center" data-testid="section-schedule">
          <p className="text-[#e8a4b8] font-bold text-2xl font-display" data-testid="text-free-event">
            FREE EVENT
          </p>
          <p className="text-white/80 text-base" data-testid="text-schedule">
            EVERY SATURDAY OF JULY & AUGUST 2022
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center" data-testid="section-kits">
          <p className="text-white/80 leading-relaxed text-base" data-testid="text-kits">
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
