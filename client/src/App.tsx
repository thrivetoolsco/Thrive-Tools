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
      <Route path="/quantum-healing" component={QuantumHealing} />
      <Route path="/breathwork" component={Breathwork} />
      <Route path="/personalized-guidance" component={PersonalizedGuidance} />
      <Route path="/events" component={Events} />
      <Route path="/contact" component={Contact} />
      <Route path="/discounts-coupon-codes" component={Discounts} />
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
