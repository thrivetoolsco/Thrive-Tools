import { lazy, Suspense, useEffect } from "react";
import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
const Discounts = lazy(() => import("@/pages/Discounts"));
const About = lazy(() => import("@/pages/About"));
const QuantumHealing = lazy(() => import("@/pages/QuantumHealing"));
const PersonalizedGuidance = lazy(() => import("@/pages/PersonalizedGuidance"));
const Events = lazy(() => import("@/pages/Events"));
const Retreats = lazy(() => import("@/pages/Retreats"));
const Breathwork = lazy(() => import("@/pages/Breathwork"));
const Contact = lazy(() => import("@/pages/Contact"));
const BlossomingBliss = lazy(() => import("@/pages/retreats/BlossomingBliss"));
const SpiritualNutrition = lazy(() => import("@/pages/retreats/SpiritualNutrition"));
const MescalineWisdom = lazy(() => import("@/pages/retreats/MescalineWisdom"));
const InnerSilence = lazy(() => import("@/pages/retreats/InnerSilence"));
const Thrive1 = lazy(() => import("@/pages/events/Thrive1"));
const Thrive2 = lazy(() => import("@/pages/events/Thrive2"));
const DrumCircle = lazy(() => import("@/pages/events/DrumCircle"));
const CacaoCeremonies = lazy(() => import("@/pages/events/CacaoCeremonies"));
const PsilocybinForestWalk = lazy(() => import("@/pages/events/PsilocybinForestWalk"));
const AyahuascaJourney = lazy(() => import("@/pages/events/AyahuascaJourney"));
const IndoorGardening = lazy(() => import("@/pages/events/IndoorGardening"));
const FoodForest = lazy(() => import("@/pages/events/FoodForest"));
const ProductReviews = lazy(() => import("@/pages/ProductReviews"));
const Im8VsAg1 = lazy(() => import("@/pages/reviews/Im8VsAg1"));
const Im8HealthReview = lazy(() => import("@/pages/reviews/Im8HealthReview"));
const VielightNeuroReview = lazy(() => import("@/pages/reviews/VielightNeuroReview"));
const HyperionHerbs = lazy(() => import("@/pages/reviews/HyperionHerbs"));
const JoovvReview = lazy(() => import("@/pages/reviews/JoovvReview"));
const RhondaPatrickMultivitamin = lazy(() => import("@/pages/reviews/RhondaPatrickMultivitamin"));
const BiohackingSupplements2026 = lazy(() => import("@/pages/reviews/BiohackingSupplements2026"));
const BiohackingBeginnersGuide = lazy(() => import("@/pages/reviews/BiohackingBeginnersGuide"));
const BreathworkBeginnersGuide = lazy(() => import("@/pages/reviews/BreathworkBeginnersGuide"));
const SomaticResetGuide = lazy(() => import("@/pages/reviews/SomaticResetGuide"));
const CreatineDosageForBrain = lazy(() => import("@/pages/reviews/CreatineDosageForBrain"));
const MouthBreathingGuide = lazy(() => import("@/pages/reviews/MouthBreathingGuide"));
const MctOilGuide = lazy(() => import("@/pages/reviews/MctOilGuide"));
const TonicHerbsGuide = lazy(() => import("@/pages/reviews/TonicHerbsGuide"));
const EarthRunnersReview = lazy(() => import("@/pages/reviews/EarthRunnersReview"));
const EnergyBitsReview = lazy(() => import("@/pages/reviews/EnergyBitsReview"));
const JustThriveProbiotic = lazy(() => import("@/pages/reviews/JustThriveProbiotic"));
const ReishiSchisandraGuide = lazy(() => import("@/pages/reviews/ReishiSchisandraGuide"));
const MagnesiumGuide = lazy(() => import("@/pages/reviews/MagnesiumGuide"));
const PumpkinSeedOilGuide = lazy(() => import("@/pages/reviews/PumpkinSeedOilGuide"));
const Omega3Guide = lazy(() => import("@/pages/reviews/Omega3Guide"));
const CordycepsGuide = lazy(() => import("@/pages/reviews/CordycepsGuide"));
const RedLightTherapyGuide = lazy(() => import("@/pages/reviews/RedLightTherapyGuide"));
const KetamineGuide = lazy(() => import("@/pages/reviews/KetamineGuide"));
const MuseHeadbandReview = lazy(() => import("@/pages/reviews/MuseHeadbandReview"));
const CeremonialCacaoGuide = lazy(() => import("@/pages/reviews/CeremonialCacaoGuide"));
const PsilocybinGuide = lazy(() => import("@/pages/reviews/PsilocybinGuide"));
const WaterdropK19HReview = lazy(() => import("@/pages/reviews/WaterdropK19HReview"));
const KratomSocialPivotGuide = lazy(() => import("@/pages/reviews/KratomSocialPivotGuide"));
const MisoMythGuide = lazy(() => import("@/pages/reviews/MisoMythGuide"));
const BiohackerSupplementStack = lazy(() => import("@/pages/reviews/BiohackerSupplementStack"));
const MicroplasticsBrainGuide = lazy(() => import("@/pages/reviews/MicroplasticsBrainGuide"));
const CortisolFaceGuide = lazy(() => import("@/pages/reviews/CortisolFaceGuide"));
const MorningRoutineGuide = lazy(() => import("@/pages/reviews/MorningRoutineGuide"));
const BlackSeedOilGuide = lazy(() => import("@/pages/reviews/BlackSeedOilGuide"));
const HeShouWuAshwagandhaGuide = lazy(() => import("@/pages/reviews/HeShouWuAshwagandhaGuide"));
const SpirulinarRedLightGuide = lazy(() => import("@/pages/reviews/SpirulinarRedLightGuide"));
const LongevityMoleculesGuide = lazy(() => import("@/pages/reviews/LongevityMoleculesGuide"));
const CreatineForWomenGuide = lazy(() => import("@/pages/reviews/CreatineForWomenGuide"));
const SpermidineGuide = lazy(() => import("@/pages/reviews/SpermidineGuide"));
const GutBrainProbioticsGuide = lazy(() => import("@/pages/reviews/GutBrainProbioticsGuide"));
const RebuildGutAfterAntibioticsGuide = lazy(() => import("@/pages/reviews/RebuildGutAfterAntibioticsGuide"));
const ProtocolFinderQuizPost = lazy(() => import("@/pages/reviews/ProtocolFinderQuizPost"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <Suspense fallback={null}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/somatic-reset" component={QuantumHealing} />
        <Route path="/breathwork" component={Breathwork} />
        <Route path="/personalized-guidance" component={PersonalizedGuidance} />
        <Route path="/events" component={Events} />
        <Route path="/contact" component={Contact} />
        <Route path="/discount-codes" component={Discounts} />
        <Route path="/retreats-workshops" component={Retreats} />
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
        <Route path="/blog" component={ProductReviews} />
        <Route path="/product-reviews/im8-vs-ag1" component={Im8VsAg1} />
        <Route path="/product-reviews/im8-health-review" component={Im8HealthReview} />
        <Route path="/product-reviews/vielight-neuro-review" component={VielightNeuroReview} />
        <Route path="/product-reviews/hyperion-herbs" component={HyperionHerbs} />
        <Route path="/product-reviews/joovv-review" component={JoovvReview} />
        <Route path="/product-reviews/rhonda-patrick-multivitamin" component={RhondaPatrickMultivitamin} />
        <Route path="/product-reviews/biohacking-supplements-2026" component={BiohackingSupplements2026} />
        <Route path="/product-reviews/biohacking-beginners-guide" component={BiohackingBeginnersGuide} />
        <Route path="/product-reviews/breathwork-beginners-guide" component={BreathworkBeginnersGuide} />
        <Route path="/product-reviews/somatic-reset-guide" component={SomaticResetGuide} />
        <Route path="/blog/creatine-dosage-for-brain" component={CreatineDosageForBrain} />
        <Route path="/blog/mouth-breathing-mouth-taping" component={MouthBreathingGuide} />
        <Route path="/blog/mct-oil-benefits-c8-vs-c10-powder-vs-oil" component={MctOilGuide} />
        <Route path="/blog/tonic-herbs-guide" component={TonicHerbsGuide} />
        <Route path="/blog/earthrunners-review" component={EarthRunnersReview} />
        <Route path="/blog/energybits-spirulina-chlorella-review" component={EnergyBitsReview} />
        <Route path="/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide" component={JustThriveProbiotic} />
        <Route path="/blog/reishi-schisandra-daily-tonic-herbs" component={ReishiSchisandraGuide} />
        <Route path="/blog/magnesium-deficiency-supplement-guide" component={MagnesiumGuide} />
        <Route path="/blog/pumpkin-seed-oil-supplement-stack-benefits" component={PumpkinSeedOilGuide} />
        <Route path="/blog/omega-3-complete-guide-epa-dha-fish-oil-vs-algae" component={Omega3Guide} />
        <Route path="/blog/cordyceps-cs4-vs-wild-cordyceps-sinensis" component={CordycepsGuide} />
        <Route path="/blog/red-light-therapy-science-benefits-devices" component={RedLightTherapyGuide} />
        <Route path="/blog/ketamine-brain-science-nmda-receptors-neuron-regrowth" component={KetamineGuide} />
        <Route path="/blog/muse-headband-review-eeg-neurofeedback" component={MuseHeadbandReview} />
        <Route path="/blog/ceremonial-cacao-benefits-science-review" component={CeremonialCacaoGuide} />
        <Route path="/blog/psilocybin-science-research-2025" component={PsilocybinGuide} />
        <Route path="/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review" component={WaterdropK19HReview} />
        <Route path="/blog/miso-myth-biologically-dead-fermented-foods" component={MisoMythGuide} />
        <Route path="/blog/kratom-replacing-alcohol-cannabis-social-pivot-2026" component={KratomSocialPivotGuide} />
        <Route path="/blog/biohacker-supplement-stack-2026" component={BiohackerSupplementStack} />
        <Route path="/blog/microplastics-brain-protocol-2026" component={MicroplasticsBrainGuide} />
        <Route path="/blog/cortisol-face-hpa-axis-guide-2026" component={CortisolFaceGuide} />
        <Route path="/blog/morning-routine-nervous-system-2026" component={MorningRoutineGuide} />
        <Route path="/blog/black-seed-oil-benefits-nigella-sativa-guide" component={BlackSeedOilGuide} />
        <Route path="/blog/he-shou-wu-ashwagandha-cycling-guide" component={HeShouWuAshwagandhaGuide} />
        <Route path="/blog/spirulina-red-light-therapy-photodynamic-action" component={SpirulinarRedLightGuide} />
        <Route path="/blog/longevity-molecules-nmn-resveratrol-spermidine-guide" component={LongevityMoleculesGuide} />
        <Route path="/blog/creatine-for-women-guide" component={CreatineForWomenGuide} />
        <Route path="/blog/spermidine-longevity-autophagy-guide" component={SpermidineGuide} />
        <Route path="/blog/gut-brain-connection-spore-probiotics-guide" component={GutBrainProbioticsGuide} />
        <Route path="/blog/rebuild-gut-after-antibiotics-spore-probiotics-guide" component={RebuildGutAfterAntibioticsGuide} />
        <Route path="/blog/protocol-finder-quiz" component={ProtocolFinderQuizPost} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
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
