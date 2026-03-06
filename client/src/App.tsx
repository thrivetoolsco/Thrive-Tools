import { Switch, Route } from "wouter";
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
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
