import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import foodForest1 from "@assets/food2-1_1773178753035.jpeg";
import foodForest2 from "@assets/food-1_1773178753025.jpeg";

export default function FoodForest() {
  return (
    <PageLayout title="Thriving Food Forest" backLabel="Events" backHref="/events">
      <div className="space-y-12" data-testid="section-food-forest">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6" data-testid="section-images">
          <img loading="lazy" decoding="async"
            src={foodForest1}
            alt="Food forest garden"
            className="w-full rounded-md object-cover aspect-square"
            data-testid="img-food-forest-1"
          />
          <img loading="lazy" decoding="async"
            src={foodForest2}
            alt="Food forest plants"
            className="w-full rounded-md object-cover aspect-square"
            data-testid="img-food-forest-2"
          />
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-6" data-testid="section-description">
          <p className="text-black/90 text-lg font-semibold leading-relaxed" data-testid="text-intro">
            This 3 day workshop teaches you the essence of how to think like a forest and create an abundant multi story high output low input edible medicinal garden.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-details-1">
            You'll learn how to gain hands on knowledge and practical understanding about the design process from implementation and maintenance to aspects such as site soils, pest control, guild design, in hand seven layers planting, plant propagation and sourcing and integration of animals. You'll also learn about electro-culture techniques that can help you increase yields and cultivate a thriving garden.
          </p>
          <p className="text-black/80 leading-relaxed text-base" data-testid="text-details-2">
            You'll have the opportunity to tour the food forest site which features an organic nursery and food forest. You'll even get to taste some of the plants and participate in creating a delicious vegetarian meal with them.
          </p>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 space-y-4" data-testid="section-rates">
          <h3 className="font-display text-2xl font-bold text-gradient-rose" data-testid="text-rates-heading">
            Rates
          </h3>
          <div className="space-y-2">
            <p className="text-[#8aaa7a] font-semibold" data-testid="text-schedule">
              Starts every Monday in August & September 2022
            </p>
            <p className="text-[#8aaa7a] font-semibold" data-testid="text-location">
              Location : Ucluelet, Canada
            </p>
            <p className="text-[#8aaa7a] font-semibold" data-testid="text-price-single">
              $260/ person
            </p>
            <p className="text-[#8aaa7a] font-semibold" data-testid="text-price-group">
              $200/ person if you're a group of 2 or more
            </p>
            <p className="text-[#8aaa7a] font-semibold" data-testid="text-includes">
              1 meal everyday + Camping included (please bring your own camping gear)
            </p>
          </div>
        </div>

        <div className="card-glass rounded-md p-6 sm:p-8 text-center space-y-4" data-testid="section-cta">
          <Link href="/contact">
            <Button
              className="btn-gradient-rose text-white"
              data-testid="link-schedule-date"
            >
              Sounds great, let's schedule a date <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
