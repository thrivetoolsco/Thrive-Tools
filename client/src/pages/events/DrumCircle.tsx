import PageLayout from "@/components/PageLayout";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";

export default function DrumCircle() {
  return (
    <PageLayout title="Drum Circle Breathwork" backLabel="Events" backHref="/events">
      <div className="space-y-8">
        <div className="flex justify-center">
          <img
            src="https://i0.wp.com/thrivetools.co/wp-content/uploads/2023/03/drum_circle_img.jpeg?resize=282%2C187&ssl=1"
            alt="Drum Circle Breathwork"
            className="rounded-md"
            data-testid="img-drum-circle"
          />
        </div>

        <div className="space-y-6 text-white/80 text-lg leading-relaxed">
          <p className="font-bold text-white" data-testid="text-full-moon">
            Every full moon in August 2023, we'll be celebrating life around a bonfire.
          </p>

          <p data-testid="text-breathing-exercises">
            I will lead you through breathing exercises while the drumming induces a dreamy state, which aids in releasing stagnant emotional and physical energy within the body.
          </p>

          <p data-testid="text-journey">
            This journey has the power to help us grow more love and wholeness within us, while leading us to ways to authentically connect with others.
          </p>

          <p data-testid="text-chanting">
            Chanting and Aum-ing will very be part of this beautiful celebration.
          </p>

          <p className="font-bold text-white" data-testid="text-welcome">
            Everyone is welcome to join at no cost.
          </p>

          <p data-testid="text-bring-drum">
            Feel free to bring your own drum if you have one, and if you would like, you can also bring some firewood.
          </p>

          <p data-testid="text-rain">
            In case of rain, we will plan another date in August.
          </p>
        </div>

        <div className="flex justify-center pt-4">
          <Link href="/contact">
            <Button
              size="lg"
              className="rounded-full bg-gradient-to-r from-[#c97a8e] to-[#d4a867] text-white border-[#c97a8e]"
              data-testid="link-sign-up"
            >
              I'm In, Sign Me Up
            </Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
