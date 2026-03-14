import { useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Discounts from "@/pages/Discounts";
import About from "@/pages/About";
import QuantumHealing from "@/pages/QuantumHealing";
import PersonalizedGuidance from "@/pages/PersonalizedGuidance";
import Events from "@/pages/Events";
import Breathwork from "@/pages/Breathwork";
import Contact from "@/pages/Contact";
import BlossomingBliss from "@/pages/retreats/BlossomingBliss";
import SpiritualNutrition from "@/pages/retreats/SpiritualNutrition";
import MescalineWisdom from "@/pages/retreats/MescalineWisdom";
import InnerSilence from "@/pages/retreats/InnerSilence";
import Thrive1 from "@/pages/events/Thrive1";
import Thrive2 from "@/pages/events/Thrive2";
import DrumCircle from "@/pages/events/DrumCircle";
import CacaoCeremonies from "@/pages/events/CacaoCeremonies";
import PsilocybinForestWalk from "@/pages/events/PsilocybinForestWalk";
import AyahuascaJourney from "@/pages/events/AyahuascaJourney";
import IndoorGardening from "@/pages/events/IndoorGardening";
import FoodForest from "@/pages/events/FoodForest";
import ProductReviews from "@/pages/ProductReviews";
import Im8VsAg1 from "@/pages/reviews/Im8VsAg1";
import Im8HealthReview from "@/pages/reviews/Im8HealthReview";
import VielightNeuroReview from "@/pages/reviews/VielightNeuroReview";
import HyperionHerbs from "@/pages/reviews/HyperionHerbs";
import JoovvReview from "@/pages/reviews/JoovvReview";
import RhondaPatrickMultivitamin from "@/pages/reviews/RhondaPatrickMultivitamin";
import BiohackingSupplements2026 from "@/pages/reviews/BiohackingSupplements2026";
import BiohackingBeginnersGuide from "@/pages/reviews/BiohackingBeginnersGuide";
import BreathworkBeginnersGuide from "@/pages/reviews/BreathworkBeginnersGuide";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/quantum-healing" component={() => { window.location.replace("/somatic-reset"); return null; }} />
      <Route path="/somatic-reset" component={QuantumHealing} />
      <Route path="/breathwork" component={Breathwork} />
      <Route path="/personalized-guidance" component={PersonalizedGuidance} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/discounts-coupon-codes" component={() => { window.location.replace("/discount-codes"); return null; }} />
      <Route path="/discount-codes" component={Discounts} />
      <Route path="/retreats-workshops/blossoming-bliss" component={BlossomingBliss} />
      <Route path="/retreats-workshops/spiritual-nutrition" component={SpiritualNutrition} />
      <Route path="/retreats-workshops/mescaline-wisdom" component={MescalineWisdom} />
      <Route path="/retreats-workshops/inner-silence" component={InnerSilence} />
      <Route path="/events/thrive-1" component={Thrive1} />
      <Route path="/events/thrive-2" component={Thrive2} />
      <Route path="/events/drum-circle" component={DrumCircle} />
      <Route path="/events/cacao-ceremonies" component={CacaoCeremonies} />
      <Route path="/events/psilocybin-forest-walk" component={PsilocybinForestWalk} />
      <Route path="/events/ayahuasca-journey" component={AyahuascaJourney} />
      <Route path="/events/indoor-gardening" component={IndoorGardening} />
      <Route path="/events/food-forest" component={FoodForest} />
      <Route path="/product-reviews" component={ProductReviews} />
      <Route path="/product-reviews/im8-vs-ag1" component={Im8VsAg1} />
      <Route path="/product-reviews/im8-health-review" component={Im8HealthReview} />
      <Route path="/product-reviews/vielight-neuro-review" component={VielightNeuroReview} />
      <Route path="/product-reviews/hyperion-herbs" component={HyperionHerbs} />
      <Route path="/product-reviews/joovv-review" component={JoovvReview} />
      <Route path="/product-reviews/rhonda-patrick-multivitamin" component={RhondaPatrickMultivitamin} />
      <Route path="/product-reviews/biohacking-supplements-2026" component={BiohackingSupplements2026} />
      <Route path="/product-reviews/biohacking-beginners-guide" component={BiohackingBeginnersGuide} />
      <Route path="/product-reviews/breathwork-beginners-guide" component={BreathworkBeginnersGuide} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
