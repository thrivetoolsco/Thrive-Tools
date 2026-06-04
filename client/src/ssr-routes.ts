import type { ComponentType } from "react";
import Im8VsAg1 from "./pages/reviews/Im8VsAg1";
import Im8HealthReview from "./pages/reviews/Im8HealthReview";
import VielightNeuroReview from "./pages/reviews/VielightNeuroReview";
import HyperionHerbs from "./pages/reviews/HyperionHerbs";
import JoovvReview from "./pages/reviews/JoovvReview";
import RhondaPatrickMultivitamin from "./pages/reviews/RhondaPatrickMultivitamin";
import BiohackingSupplements2026 from "./pages/reviews/BiohackingSupplements2026";
import BiohackingBeginnersGuide from "./pages/reviews/BiohackingBeginnersGuide";
import BreathworkBeginnersGuide from "./pages/reviews/BreathworkBeginnersGuide";
import SomaticResetGuide from "./pages/reviews/SomaticResetGuide";
import CreatineDosageForBrain from "./pages/reviews/CreatineDosageForBrain";
import MouthBreathingGuide from "./pages/reviews/MouthBreathingGuide";
import MctOilGuide from "./pages/reviews/MctOilGuide";
import TonicHerbsGuide from "./pages/reviews/TonicHerbsGuide";
import EarthRunnersReview from "./pages/reviews/EarthRunnersReview";
import EnergyBitsReview from "./pages/reviews/EnergyBitsReview";
import JustThriveProbiotic from "./pages/reviews/JustThriveProbiotic";
import ReishiSchisandraGuide from "./pages/reviews/ReishiSchisandraGuide";
import MagnesiumGuide from "./pages/reviews/MagnesiumGuide";
import PumpkinSeedOilGuide from "./pages/reviews/PumpkinSeedOilGuide";
import Omega3Guide from "./pages/reviews/Omega3Guide";
import CordycepsGuide from "./pages/reviews/CordycepsGuide";
import RedLightTherapyGuide from "./pages/reviews/RedLightTherapyGuide";
import KetamineGuide from "./pages/reviews/KetamineGuide";
import MuseHeadbandReview from "./pages/reviews/MuseHeadbandReview";
import CeremonialCacaoGuide from "./pages/reviews/CeremonialCacaoGuide";
import PsilocybinGuide from "./pages/reviews/PsilocybinGuide";
import BiohackerSupplementStack from "./pages/reviews/BiohackerSupplementStack";
import MicroplasticsBrainGuide from "./pages/reviews/MicroplasticsBrainGuide";
import CortisolFaceGuide from "./pages/reviews/CortisolFaceGuide";
import About from "./pages/About";
import QuantumHealing from "./pages/QuantumHealing";
import Breathwork from "./pages/Breathwork";
import PersonalizedGuidance from "./pages/PersonalizedGuidance";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Discounts from "./pages/Discounts";
import Retreats from "./pages/Retreats";
import BlossomingBliss from "./pages/retreats/BlossomingBliss";
import SpiritualNutrition from "./pages/retreats/SpiritualNutrition";
import MescalineWisdom from "./pages/retreats/MescalineWisdom";
import InnerSilence from "./pages/retreats/InnerSilence";
import Thrive1 from "./pages/events/Thrive1";
import Thrive2 from "./pages/events/Thrive2";
import DrumCircle from "./pages/events/DrumCircle";
import CacaoCeremonies from "./pages/events/CacaoCeremonies";
import PsilocybinForestWalk from "./pages/events/PsilocybinForestWalk";
import AyahuascaJourney from "./pages/events/AyahuascaJourney";
import IndoorGardening from "./pages/events/IndoorGardening";
import FoodForest from "./pages/events/FoodForest";
import ProductReviews from "./pages/ProductReviews";

export const SSR_ROUTE_COMPONENTS: Record<string, ComponentType> = {
  "/product-reviews/im8-vs-ag1": Im8VsAg1,
  "/product-reviews/im8-health-review": Im8HealthReview,
  "/product-reviews/vielight-neuro-review": VielightNeuroReview,
  "/product-reviews/hyperion-herbs": HyperionHerbs,
  "/product-reviews/joovv-review": JoovvReview,
  "/product-reviews/rhonda-patrick-multivitamin": RhondaPatrickMultivitamin,
  "/blog/rhonda-patrick-multivitamin": RhondaPatrickMultivitamin,
  "/product-reviews/biohacking-supplements-2026": BiohackingSupplements2026,
  "/blog/biohacking-supplements-2026": BiohackingSupplements2026,
  "/product-reviews/biohacking-beginners-guide": BiohackingBeginnersGuide,
  "/blog/biohacking-beginners-guide": BiohackingBeginnersGuide,
  "/product-reviews/breathwork-beginners-guide": BreathworkBeginnersGuide,
  "/product-reviews/somatic-reset-guide": SomaticResetGuide,
  "/blog/somatic-reset-guide": SomaticResetGuide,
  "/blog/creatine-dosage-for-brain": CreatineDosageForBrain,
  "/blog/mouth-breathing-mouth-taping": MouthBreathingGuide,
  "/blog/mct-oil-benefits-c8-vs-c10-powder-vs-oil": MctOilGuide,
  "/blog/tonic-herbs-guide": TonicHerbsGuide,
  "/blog/earthrunners-review": EarthRunnersReview,
  "/blog/energybits-spirulina-chlorella-review": EnergyBitsReview,
  "/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide": JustThriveProbiotic,
  "/blog/reishi-schisandra-daily-tonic-herbs": ReishiSchisandraGuide,
  "/blog/magnesium-deficiency-supplement-guide": MagnesiumGuide,
  "/blog/pumpkin-seed-oil-supplement-stack-benefits": PumpkinSeedOilGuide,
  "/blog/omega-3-complete-guide-epa-dha-fish-oil-vs-algae": Omega3Guide,
  "/blog/cordyceps-cs4-vs-wild-cordyceps-sinensis": CordycepsGuide,
  "/blog/red-light-therapy-science-benefits-devices": RedLightTherapyGuide,
  "/blog/ketamine-brain-science-nmda-receptors-neuron-regrowth": KetamineGuide,
  "/blog/muse-headband-review-eeg-neurofeedback": MuseHeadbandReview,
  "/blog/ceremonial-cacao-benefits-science-review": CeremonialCacaoGuide,
  "/blog/psilocybin-science-research-2025": PsilocybinGuide,
  "/blog/biohacker-supplement-stack-2026": BiohackerSupplementStack,
  "/blog/microplastics-brain-protocol-2026": MicroplasticsBrainGuide,
  "/blog/cortisol-face-hpa-axis-guide-2026": CortisolFaceGuide,
  "/about": About,
  "/somatic-reset": QuantumHealing,
  "/breathwork": Breathwork,
  "/personalized-guidance": PersonalizedGuidance,
  "/events": Events,
  "/contact": Contact,
  "/discount-codes": Discounts,
  "/retreats-workshops": Retreats,
  "/retreats-workshops/blossoming-bliss": BlossomingBliss,
  "/retreats-workshops/spiritual-nutrition": SpiritualNutrition,
  "/retreats-workshops/mescaline-wisdom": MescalineWisdom,
  "/retreats-workshops/inner-silence": InnerSilence,
  "/events/thrive-1": Thrive1,
  "/events/thrive-2": Thrive2,
  "/events/drum-circle": DrumCircle,
  "/events/cacao-ceremonies": CacaoCeremonies,
  "/events/psilocybin-forest-walk": PsilocybinForestWalk,
  "/events/ayahuasca-journey": AyahuascaJourney,
  "/events/indoor-gardening": IndoorGardening,
  "/events/food-forest": FoodForest,
  "/blog": ProductReviews,
  "/product-reviews": ProductReviews,
};
