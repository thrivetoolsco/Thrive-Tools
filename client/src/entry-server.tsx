import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { Router } from "wouter";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import type { ComponentType } from "react";
import { isMonthCopyPage, monthCopyHtml } from "@shared/month-copy";

import Home from "@/pages/Home";
import About from "@/pages/About";
import QuantumHealing from "@/pages/QuantumHealing";
import Breathwork from "@/pages/Breathwork";
import PersonalizedGuidance from "@/pages/PersonalizedGuidance";
import Events from "@/pages/Events";
import Contact from "@/pages/Contact";
import Discounts from "@/pages/Discounts";
import BiohackingDiscountCodes from "@/pages/BiohackingDiscountCodes";
import Retreats from "@/pages/Retreats";
import ProductReviews from "@/pages/ProductReviews";

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

import Im8VsAg1 from "@/pages/reviews/Im8VsAg1";
import Im8HealthReview from "@/pages/reviews/Im8HealthReview";
import VielightNeuroReview from "@/pages/reviews/VielightNeuroReview";
import HyperionHerbs from "@/pages/reviews/HyperionHerbs";
import JoovvReview from "@/pages/reviews/JoovvReview";
import RhondaPatrickMultivitamin from "@/pages/reviews/RhondaPatrickMultivitamin";
import BiohackingSupplements2026 from "@/pages/reviews/BiohackingSupplements2026";
import BiohackingBeginnersGuide from "@/pages/reviews/BiohackingBeginnersGuide";
import BreathworkBeginnersGuide from "@/pages/reviews/BreathworkBeginnersGuide";
import SomaticResetGuide from "@/pages/reviews/SomaticResetGuide";
import CreatineDosageForBrain from "@/pages/reviews/CreatineDosageForBrain";
import MouthBreathingGuide from "@/pages/reviews/MouthBreathingGuide";
import MctOilGuide from "@/pages/reviews/MctOilGuide";
import TonicHerbsGuide from "@/pages/reviews/TonicHerbsGuide";
import EarthRunnersReview from "@/pages/reviews/EarthRunnersReview";
import EnergyBitsReview from "@/pages/reviews/EnergyBitsReview";
import JustThriveProbiotic from "@/pages/reviews/JustThriveProbiotic";
import ReishiSchisandraGuide from "@/pages/reviews/ReishiSchisandraGuide";
import MagnesiumGuide from "@/pages/reviews/MagnesiumGuide";
import PumpkinSeedOilGuide from "@/pages/reviews/PumpkinSeedOilGuide";
import Omega3Guide from "@/pages/reviews/Omega3Guide";
import CordycepsGuide from "@/pages/reviews/CordycepsGuide";
import RedLightTherapyGuide from "@/pages/reviews/RedLightTherapyGuide";
import KetamineGuide from "@/pages/reviews/KetamineGuide";
import MuseHeadbandReview from "@/pages/reviews/MuseHeadbandReview";
import CeremonialCacaoGuide from "@/pages/reviews/CeremonialCacaoGuide";
import PsilocybinGuide from "@/pages/reviews/PsilocybinGuide";
import WaterdropK19HReview from "@/pages/reviews/WaterdropK19HReview";
import MisoMythGuide from "@/pages/reviews/MisoMythGuide";
import BioptimizersDiscountCode from "@/pages/reviews/BioptimizersDiscountCode";
import HyperionHerbsDiscountCode from "@/pages/reviews/HyperionHerbsDiscountCode";
import JustThriveDiscountCode from "@/pages/reviews/JustThriveDiscountCode";
import OrganikaDiscountCode from "@/pages/reviews/OrganikaDiscountCode";
import EnergyBitsDiscountCode from "@/pages/reviews/EnergyBitsDiscountCode";
import SelfDecodeDiscountCode from "@/pages/reviews/SelfDecodeDiscountCode";
import MuseHeadbandDiscountCode from "@/pages/reviews/MuseHeadbandDiscountCode";
import EquipFoodsDiscountCode from "@/pages/reviews/EquipFoodsDiscountCode";
import IM8DiscountCode from "@/pages/reviews/IM8DiscountCode";
import TimelineMitopureDiscountCode from "@/pages/reviews/TimelineMitopureDiscountCode";
import SupplementDiscountCodesFaq from "@/pages/reviews/SupplementDiscountCodesFaq";
import RedLightTherapyDiscountCodes from "@/pages/reviews/RedLightTherapyDiscountCodes";
import JoovvDiscountCode from "@/pages/reviews/JoovvDiscountCode";
import AquaOmegaDiscountCode from "@/pages/reviews/AquaOmegaDiscountCode";
import EarthRunnersDiscountCode from "@/pages/reviews/EarthRunnersDiscountCode";
import Cookware360DiscountCode from "@/pages/reviews/Cookware360DiscountCode";
import NeurosityDiscountCode from "@/pages/reviews/NeurosityDiscountCode";
import DavidsDiscountCode from "@/pages/reviews/DavidsDiscountCode";
import MitoRedLightDiscountCode from "@/pages/reviews/MitoRedLightDiscountCode";
import RedTherapyDiscountCode from "@/pages/reviews/RedTherapyDiscountCode";
import VielightDiscountCode from "@/pages/reviews/VielightDiscountCode";
import WaterDropDiscountCode from "@/pages/reviews/WaterDropDiscountCode";
import KoracaoDiscountCode from "@/pages/reviews/KoracaoDiscountCode";
import IsunSkincareDiscountCode from "@/pages/reviews/IsunSkincareDiscountCode";
import WellnessDiscountCodesQuestionsAnswered from "@/pages/reviews/WellnessDiscountCodesQuestionsAnswered";
import OrganicNoriSeaweedSushiDiscountCode from "@/pages/reviews/OrganicNoriSeaweedSushiDiscountCode";
import IntentionallyBareDiscountCode from "@/pages/reviews/IntentionallyBareDiscountCode";
import StyrianGoldDiscountCode from "@/pages/reviews/StyrianGoldDiscountCode";
import TheBlessedSeedDiscountCode from "@/pages/reviews/TheBlessedSeedDiscountCode";
import PranaFoodsDiscountCode from "@/pages/reviews/PranaFoodsDiscountCode";
import OxygenAdvantageDiscountCode from "@/pages/reviews/OxygenAdvantageDiscountCode";
import BlueCubeBathsDiscountCode from "@/pages/reviews/BlueCubeBathsDiscountCode";
import MytrexDiscountCode from "@/pages/reviews/MytrexDiscountCode";
import OmnipemfDiscountCode from "@/pages/reviews/OmnipemfDiscountCode";
import {
  HealthAndYogaDiscountCode, NeuroVizrDiscountCode, HeatBitDiscountCode,
  AiresTechDiscountCode, BambooClothesDiscountCode,
  EarthingHarmonyDiscountCode, PromeedDiscountCode, HavnByLambsDiscountCode,
} from "@/pages/reviews/LongFormDiscountPosts";
import { BestSupplementDiscountCodes, BestEthicalClothingDiscountCodes } from "@/pages/reviews/DiscountRoundups";
import {
  WaterDropDiscountCodeFaq, JoovvDiscountCodeFaq, MitoRedLightDiscountCodeFaq,
  RedTherapyDiscountCodeFaq, VielightDiscountCodeFaq, OxygenAdvantageDiscountCodeFaq,
  NeurosityDiscountCodeFaq, BlueCubeBathsDiscountCodeFaq, MytrexDiscountCodeFaq,
  OmnipemfDiscountCodeFaq, HealthAndYogaDiscountCodeFaq, SelfDecodeDiscountCodeFaq,
  NeuroVizrDiscountCodeFaq, HeatBitDiscountCodeFaq, MuseHeadbandDiscountCodeFaq,
  AiresTechDiscountCodeFaq,
} from "@/pages/reviews/LongevityTechDiscountFaqs";
import {
  EarthRunnersDiscountCodeFaq, BambooClothesDiscountCodeFaq,
  EarthingHarmonyDiscountCodeFaq, PromeedDiscountCodeFaq, HavnByLambsDiscountCodeFaq,
  Cookware360DiscountCodeFaq, IsunSkincareDiscountCodeFaq, DavidsDiscountCodeFaq,
} from "@/pages/reviews/LifestyleDiscountFaqs";
import DiscountCodesQuestions from "@/pages/reviews/DiscountCodesQuestions";
import {
  Im8BrandGuide, EquipFoodsBrandGuide, JustThriveBrandGuide,
  BioptimizersBrandGuide, EnergyBitsBrandGuide,
} from "@/pages/reviews/SupplementBrandGuides";
import {
  SelfDecodeBrandGuide, MuseHeadbandBrandGuide, WaterDropBrandGuide,
  EarthRunnersBrandGuide, VellgusBrandGuide,
} from "@/pages/reviews/WellnessTechBrandGuides";
import LumeboxDiscountCode from "@/pages/reviews/LumeboxDiscountCode";
import GoliDiscountCode from "@/pages/reviews/GoliDiscountCode";
import GoliDiscountCodeFaq from "@/pages/reviews/GoliDiscountCodeFaq";
import AchedawayCupperGuide from "@/pages/reviews/AchedawayCupperGuide";
import IntrinsicPrismDiscountCode from "@/pages/reviews/IntrinsicPrismDiscountCode";
import ColdPlungeAtHomeGuide from "@/pages/reviews/ColdPlungeAtHomeGuide";
import WhatIsHrvHowToImproveIt from "@/pages/reviews/WhatIsHrvHowToImproveIt";
import ColdBh2LongevityStudy from "@/pages/reviews/ColdBh2LongevityStudy";
import NovosStaminaVascularTrial from "@/pages/reviews/NovosStaminaVascularTrial";
import IntrinsicPrismDiscountCodeFaq from "@/pages/reviews/IntrinsicPrismDiscountCodeFaq";
import LeelaQuantumTechGuide from "@/pages/reviews/LeelaQuantumTechGuide";
import BoneLoadingPiezo1Study from "@/pages/reviews/BoneLoadingPiezo1Study";
import VanadylSulfateSenolyticStudy from "@/pages/reviews/VanadylSulfateSenolyticStudy";
import AgedGarlicS1pcMuscleAgingStudy from "@/pages/reviews/AgedGarlicS1pcMuscleAgingStudy";
import Vo2MaxZone2CardioLongevityGuide from "@/pages/reviews/Vo2MaxZone2CardioLongevityGuide";
import StrengthTrainingLongevityMuscleGuide from "@/pages/reviews/StrengthTrainingLongevityMuscleGuide";
import DeepSleepLongevityGuide from "@/pages/reviews/DeepSleepLongevityGuide";
import DoesLeelaQuantumTechWork from "@/pages/reviews/DoesLeelaQuantumTechWork";
import ContrastTherapyAtHomeGuide from "@/pages/reviews/ContrastTherapyAtHomeGuide";
import DoGroundingSheetsWork from "@/pages/reviews/DoGroundingSheetsWork";
import EmrTekDiscountCode from "@/pages/reviews/EmrTekDiscountCode";
import TherasageDiscountCode from "@/pages/reviews/TherasageDiscountCode";
import EmrTekCheckoutCode from "@/pages/reviews/EmrTekCheckoutCode";
import LumeboxCheckoutCode from "@/pages/reviews/LumeboxCheckoutCode";
import SilverFernBrandGuide from "@/pages/reviews/SilverFernBrandGuide";
import InfraredSaunaVsTraditional from "@/pages/reviews/InfraredSaunaVsTraditional";
import PrebioticsProbioticsGuide from "@/pages/reviews/PrebioticsProbioticsGuide";
import LumeboxDiscountCodeFaq from "@/pages/reviews/LumeboxDiscountCodeFaq";
import TherasageDiscountCodeFaq from "@/pages/reviews/TherasageDiscountCodeFaq";
import ZenteinDiscountCode from "@/pages/reviews/ZenteinDiscountCode";
import BlackFridaySupplementDeals from "@/pages/reviews/BlackFridaySupplementDeals";
import BlackFridayRedLightDeals from "@/pages/reviews/BlackFridayRedLightDeals";
import BlackFridayWellnessTechDeals from "@/pages/reviews/BlackFridayWellnessTechDeals";
import IM8DailyUltimateLongevity from "@/pages/reviews/IM8DailyUltimateLongevity";
import IM8BeckhamStack from "@/pages/reviews/IM8BeckhamStack";
import {
  IM8DiscountCodeFaq, EquipFoodsDiscountCodeFaq, HyperionHerbsDiscountCodeFaq,
  JustThriveDiscountCodeFaq, OrganikaDiscountCodeFaq, AquaOmegaDiscountCodeFaq,
  BioptimizersDiscountCodeFaq, EnergyBitsDiscountCodeFaq, TimelineMitopureDiscountCodeFaq,
  OrganicNoriDiscountCodeFaq, IntentionallyBareDiscountCodeFaq, KoracaoDiscountCodeFaq,
  StyrianGoldDiscountCodeFaq, TheBlessedSeedDiscountCodeFaq, PranaFoodsDiscountCodeFaq,
} from "@/pages/reviews/SupplementDiscountFaqs";
import KratomSocialPivotGuide from "@/pages/reviews/KratomSocialPivotGuide";
import BiohackerSupplementStack from "@/pages/reviews/BiohackerSupplementStack";
import MicroplasticsBrainGuide from "@/pages/reviews/MicroplasticsBrainGuide";
import CortisolFaceGuide from "@/pages/reviews/CortisolFaceGuide";
import MorningRoutineGuide from "@/pages/reviews/MorningRoutineGuide";
import BlackSeedOilGuide from "@/pages/reviews/BlackSeedOilGuide";
import HeShouWuAshwagandhaGuide from "@/pages/reviews/HeShouWuAshwagandhaGuide";
import SpirulinarRedLightGuide from "@/pages/reviews/SpirulinarRedLightGuide";
import LongevityMoleculesGuide from "@/pages/reviews/LongevityMoleculesGuide";
import CreatineForWomenGuide from "@/pages/reviews/CreatineForWomenGuide";
import SpermidineGuide from "@/pages/reviews/SpermidineGuide";
import GutBrainProbioticsGuide from "@/pages/reviews/GutBrainProbioticsGuide";
import RebuildGutAfterAntibioticsGuide from "@/pages/reviews/RebuildGutAfterAntibioticsGuide";
import ProtocolFinderQuizPost from "@/pages/reviews/ProtocolFinderQuizPost";
import JoovvVsMitoRedLightComparison from "@/pages/reviews/JoovvVsMitoRedLightComparison";
import SnackDrawerFix from "@/pages/reviews/SnackDrawerFix";
import BioharmonyGuide from "@/pages/reviews/BioharmonyGuide";
import VagusNerveGuide from "@/pages/reviews/VagusNerveGuide";
import UrolithinAGuide from "@/pages/reviews/UrolithinAGuide";
import BestSupplements2026Guide from "@/pages/reviews/BestSupplements2026Guide";
import SupplementComparisonGuide from "@/pages/reviews/SupplementComparisonGuide";
import BestRedLightTherapyDevices2026 from "@/pages/reviews/BestRedLightTherapyDevices2026";
import BestLongevitySupplements2026 from "@/pages/reviews/BestLongevitySupplements2026";
import BestEmfProtection2026 from "@/pages/reviews/BestEmfProtection2026";
import BestBrainNeurotechTools2026 from "@/pages/reviews/BestBrainNeurotechTools2026";
import BestNonToxicHomeUpgrades2026 from "@/pages/reviews/BestNonToxicHomeUpgrades2026";
import BestRecoveryTech2026 from "@/pages/reviews/BestRecoveryTech2026";
import BestWellnessGifts2026 from "@/pages/reviews/BestWellnessGifts2026";
import MorningSupplementRoutineGuide from "@/pages/reviews/MorningSupplementRoutineGuide";
import EquipCleanProteinGuide from "@/pages/reviews/EquipCleanProteinGuide";
import Disclaimer from "@/pages/Disclaimer";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";

export const SSR_ROUTE_COMPONENTS: Record<string, ComponentType> = {
  "/": Home,
  "/about": About,
  "/somatic-reset": QuantumHealing,
  "/breathwork": Breathwork,
  "/personalized-guidance": PersonalizedGuidance,
  "/events": Events,
  "/contact": Contact,
  "/discount-codes": Discounts,
  "/biohacking-discount-codes": BiohackingDiscountCodes,
  "/retreats-workshops": Retreats,
  "/blog": ProductReviews,
  "/product-reviews": ProductReviews,

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

  "/product-reviews/im8-vs-ag1": Im8VsAg1,
  "/product-reviews/im8-health-review": Im8HealthReview,
  "/product-reviews/vielight-neuro-review": VielightNeuroReview,
  "/product-reviews/hyperion-herbs": HyperionHerbs,
  "/product-reviews/joovv-review": JoovvReview,
  "/product-reviews/rhonda-patrick-multivitamin": RhondaPatrickMultivitamin,
  "/product-reviews/biohacking-supplements-2026": BiohackingSupplements2026,
  "/product-reviews/biohacking-beginners-guide": BiohackingBeginnersGuide,
  "/product-reviews/breathwork-beginners-guide": BreathworkBeginnersGuide,
  "/product-reviews/somatic-reset-guide": SomaticResetGuide,

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
  "/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review": WaterdropK19HReview,
  "/blog/miso-myth-biologically-dead-fermented-foods": MisoMythGuide,
  "/blog/kratom-replacing-alcohol-cannabis-social-pivot-2026": KratomSocialPivotGuide,
  "/blog/biohacker-supplement-stack-2026": BiohackerSupplementStack,
  "/blog/microplastics-brain-protocol-2026": MicroplasticsBrainGuide,
  "/blog/cortisol-face-hpa-axis-guide-2026": CortisolFaceGuide,
  "/blog/morning-routine-nervous-system-2026": MorningRoutineGuide,
  "/blog/black-seed-oil-benefits-nigella-sativa-guide": BlackSeedOilGuide,
  "/blog/he-shou-wu-ashwagandha-cycling-guide": HeShouWuAshwagandhaGuide,
  "/blog/spirulina-red-light-therapy-photodynamic-action": SpirulinarRedLightGuide,
  "/blog/longevity-molecules-nmn-resveratrol-spermidine-guide": LongevityMoleculesGuide,
  "/blog/creatine-for-women-guide": CreatineForWomenGuide,
  "/blog/spermidine-longevity-autophagy-guide": SpermidineGuide,
  "/blog/gut-brain-connection-spore-probiotics-guide": GutBrainProbioticsGuide,
  "/blog/rebuild-gut-after-antibiotics-spore-probiotics-guide": RebuildGutAfterAntibioticsGuide,
  "/blog/protocol-finder-quiz": ProtocolFinderQuizPost,
  "/blog/joovv-vs-mito-red-light-vs-redtherapy-comparison": JoovvVsMitoRedLightComparison,
  "/blog/snack-drawer-fix-prana-foods-clean-snacks": SnackDrawerFix,
  "/blog/what-is-bioharmony-wellness-shift-2026": BioharmonyGuide,
  "/blog/vagus-nerve-vagal-tone-wellness-practices": VagusNerveGuide,
  "/blog/urolithin-a-mitophagy-longevity-supplement-guide": UrolithinAGuide,
  "/blog/best-supplements-energy-gut-health-longevity-2026": BestSupplements2026Guide,
  "/blog/supplement-comparison-guide-2026": SupplementComparisonGuide,
  "/blog/best-red-light-therapy-devices-2026": BestRedLightTherapyDevices2026,
  "/blog/best-longevity-supplements-2026": BestLongevitySupplements2026,
  "/blog/best-emf-protection-2026": BestEmfProtection2026,
  "/blog/best-brain-neurotech-tools-2026": BestBrainNeurotechTools2026,
  "/blog/best-non-toxic-home-upgrades-2026": BestNonToxicHomeUpgrades2026,
  "/blog/best-recovery-tech-2026": BestRecoveryTech2026,
  "/blog/best-wellness-gifts-2026": BestWellnessGifts2026,
  "/blog/science-backed-morning-supplement-routine": MorningSupplementRoutineGuide,
  "/blog/best-clean-protein-powder-2026-equip-prime-protein": EquipCleanProteinGuide,
  "/disclaimer": Disclaimer,
  "/privacy-policy": PrivacyPolicy,
  "/terms-of-service": TermsOfService,

  "/blog/rhonda-patrick-multivitamin": RhondaPatrickMultivitamin,
  "/blog/biohacking-supplements-2026": BiohackingSupplements2026,
  "/blog/biohacking-beginners-guide": BiohackingBeginnersGuide,
  "/blog/somatic-reset-guide": SomaticResetGuide,
  "/blog/bioptimizers-discount-code": BioptimizersDiscountCode,
  "/blog/hyperion-herbs-discount-code": HyperionHerbsDiscountCode,
  "/blog/just-thrive-discount-code": JustThriveDiscountCode,
  "/blog/organika-discount-code": OrganikaDiscountCode,
  "/blog/energybits-discount-code": EnergyBitsDiscountCode,
  "/blog/selfdecode-discount-code": SelfDecodeDiscountCode,
  "/blog/muse-headband-discount-code": MuseHeadbandDiscountCode,
  "/blog/equip-foods-discount-code": EquipFoodsDiscountCode,
  "/blog/im8-discount-code": IM8DiscountCode,
  "/blog/timeline-mitopure-discount-code": TimelineMitopureDiscountCode,
  "/blog/supplement-discount-codes-faq": SupplementDiscountCodesFaq,
  "/blog/red-light-therapy-discount-codes": RedLightTherapyDiscountCodes,
  "/blog/joovv-discount-code": JoovvDiscountCode,
  "/blog/aquaomega-discount-code": AquaOmegaDiscountCode,
  "/blog/earthrunners-discount-code": EarthRunnersDiscountCode,
  "/blog/360-cookware-discount-code": Cookware360DiscountCode,
  "/blog/neurosity-discount-code": NeurosityDiscountCode,
  "/blog/davids-discount-code": DavidsDiscountCode,
  "/blog/mito-red-light-discount-code": MitoRedLightDiscountCode,
  "/blog/redtherapy-discount-code": RedTherapyDiscountCode,
  "/blog/vielight-discount-code": VielightDiscountCode,
  "/blog/waterdrop-discount-code": WaterDropDiscountCode,
  "/blog/koracao-discount-code": KoracaoDiscountCode,
  "/blog/isun-skincare-discount-code": IsunSkincareDiscountCode,
  "/blog/wellness-discount-codes-questions-answered": WellnessDiscountCodesQuestionsAnswered,
  "/blog/organic-nori-seaweed-sushi-discount-code": OrganicNoriSeaweedSushiDiscountCode,
  "/blog/intentionally-bare-discount-code": IntentionallyBareDiscountCode,
  "/blog/styriangold-discount-code": StyrianGoldDiscountCode,
  "/blog/the-blessed-seed-discount-code": TheBlessedSeedDiscountCode,
  "/blog/prana-foods-discount-code": PranaFoodsDiscountCode,
  "/blog/oxygen-advantage-discount-code": OxygenAdvantageDiscountCode,
  "/blog/bluecubebaths-discount-code": BlueCubeBathsDiscountCode,
  "/blog/mytrex-discount-code": MytrexDiscountCode,
  "/blog/omnipemf-discount-code": OmnipemfDiscountCode,
  "/blog/healthandyoga-discount-code": HealthAndYogaDiscountCode,
  "/blog/neurovizr-discount-code": NeuroVizrDiscountCode,
  "/blog/heatbit-discount-code": HeatBitDiscountCode,
  "/blog/aires-tech-discount-code": AiresTechDiscountCode,
  "/blog/bamboo-clothes-discount-code": BambooClothesDiscountCode,
  "/blog/earthing-harmony-discount-code": EarthingHarmonyDiscountCode,
  "/blog/promeed-discount-code": PromeedDiscountCode,
  "/blog/havn-by-lambs-discount-code": HavnByLambsDiscountCode,
  "/blog/best-supplement-discount-codes": BestSupplementDiscountCodes,
  "/blog/best-ethical-clothing-discount-codes": BestEthicalClothingDiscountCodes,
  "/blog/im8-discount-code-faq": IM8DiscountCodeFaq,
  "/blog/equip-foods-discount-code-faq": EquipFoodsDiscountCodeFaq,
  "/blog/hyperion-herbs-discount-code-faq": HyperionHerbsDiscountCodeFaq,
  "/blog/just-thrive-discount-code-faq": JustThriveDiscountCodeFaq,
  "/blog/organika-discount-code-faq": OrganikaDiscountCodeFaq,
  "/blog/aquaomega-discount-code-faq": AquaOmegaDiscountCodeFaq,
  "/blog/bioptimizers-discount-code-faq": BioptimizersDiscountCodeFaq,
  "/blog/energybits-discount-code-faq": EnergyBitsDiscountCodeFaq,
  "/blog/timeline-mitopure-discount-code-faq": TimelineMitopureDiscountCodeFaq,
  "/blog/organic-nori-discount-code-faq": OrganicNoriDiscountCodeFaq,
  "/blog/intentionally-bare-discount-code-faq": IntentionallyBareDiscountCodeFaq,
  "/blog/koracao-discount-code-faq": KoracaoDiscountCodeFaq,
  "/blog/styrian-gold-discount-code-faq": StyrianGoldDiscountCodeFaq,
  "/blog/the-blessed-seed-discount-code-faq": TheBlessedSeedDiscountCodeFaq,
  "/blog/prana-foods-discount-code-faq": PranaFoodsDiscountCodeFaq,
  "/blog/waterdrop-discount-code-faq": WaterDropDiscountCodeFaq,
  "/blog/joovv-discount-code-faq": JoovvDiscountCodeFaq,
  "/blog/mito-red-light-discount-code-faq": MitoRedLightDiscountCodeFaq,
  "/blog/redtherapy-discount-code-faq": RedTherapyDiscountCodeFaq,
  "/blog/vielight-discount-code-faq": VielightDiscountCodeFaq,
  "/blog/oxygen-advantage-discount-code-faq": OxygenAdvantageDiscountCodeFaq,
  "/blog/neurosity-discount-code-faq": NeurosityDiscountCodeFaq,
  "/blog/bluecube-baths-discount-code-faq": BlueCubeBathsDiscountCodeFaq,
  "/blog/mytrex-discount-code-faq": MytrexDiscountCodeFaq,
  "/blog/omnipemf-discount-code-faq": OmnipemfDiscountCodeFaq,
  "/blog/healthandyoga-discount-code-faq": HealthAndYogaDiscountCodeFaq,
  "/blog/self-decode-discount-code-faq": SelfDecodeDiscountCodeFaq,
  "/blog/neurovizr-discount-code-faq": NeuroVizrDiscountCodeFaq,
  "/blog/heatbit-discount-code-faq": HeatBitDiscountCodeFaq,
  "/blog/muse-headband-discount-code-faq": MuseHeadbandDiscountCodeFaq,
  "/blog/aires-tech-discount-code-faq": AiresTechDiscountCodeFaq,
  "/blog/earthrunners-discount-code-faq": EarthRunnersDiscountCodeFaq,
  "/blog/bamboo-clothes-discount-code-faq": BambooClothesDiscountCodeFaq,
  "/blog/earthing-harmony-discount-code-faq": EarthingHarmonyDiscountCodeFaq,
  "/blog/promeed-discount-code-faq": PromeedDiscountCodeFaq,
  "/blog/havn-by-lambs-discount-code-faq": HavnByLambsDiscountCodeFaq,
  "/blog/360-cookware-discount-code-faq": Cookware360DiscountCodeFaq,
  "/blog/isun-skincare-discount-code-faq": IsunSkincareDiscountCodeFaq,
  "/blog/davids-discount-code-faq": DavidsDiscountCodeFaq,
  "/blog/discount-codes-questions": DiscountCodesQuestions,
  "/blog/im8-review": Im8BrandGuide,
  "/blog/equip-foods-review": EquipFoodsBrandGuide,
  "/blog/just-thrive-review": JustThriveBrandGuide,
  "/blog/bioptimizers-review": BioptimizersBrandGuide,
  "/blog/energybits-review": EnergyBitsBrandGuide,
  "/blog/selfdecode-review": SelfDecodeBrandGuide,
  "/blog/muse-headband-review": MuseHeadbandBrandGuide,
  "/blog/waterdrop-review": WaterDropBrandGuide,
  "/blog/earthrunners-review-guide": EarthRunnersBrandGuide,
  "/blog/vellgus-review": VellgusBrandGuide,
  "/lumebox-discount-code": LumeboxDiscountCode,
  "/goli-discount-code": GoliDiscountCode,
  "/blog/goli-discount-code-faq": GoliDiscountCodeFaq,
  "/blog/achedaway-cupper-guide": AchedawayCupperGuide,
  "/blog/intrinsic-prism-discount-code": IntrinsicPrismDiscountCode,
  "/blog/cold-plunge-at-home-guide": ColdPlungeAtHomeGuide,
  "/blog/what-is-hrv-how-to-improve-it": WhatIsHrvHowToImproveIt,
  "/blog/cold-bh2-longevity-study": ColdBh2LongevityStudy,
  "/blog/novos-stamina-vascular-trial": NovosStaminaVascularTrial,
  "/blog/intrinsic-prism-discount-code-faq": IntrinsicPrismDiscountCodeFaq,
  "/blog/leela-quantum-tech-guide": LeelaQuantumTechGuide,
  "/blog/bone-loading-piezo1-lifespan-study": BoneLoadingPiezo1Study,
  "/blog/vanadyl-sulfate-senolytic-study": VanadylSulfateSenolyticStudy,
  "/blog/aged-garlic-s1pc-muscle-aging-study": AgedGarlicS1pcMuscleAgingStudy,
  "/blog/vo2-max-zone-2-cardio-longevity-guide": Vo2MaxZone2CardioLongevityGuide,
  "/blog/strength-training-longevity-muscle-guide": StrengthTrainingLongevityMuscleGuide,
  "/blog/deep-sleep-longevity-guide": DeepSleepLongevityGuide,
  "/blog/does-leela-quantum-tech-work": DoesLeelaQuantumTechWork,
  "/blog/contrast-therapy-at-home-guide": ContrastTherapyAtHomeGuide,
  "/blog/do-grounding-sheets-work": DoGroundingSheetsWork,
  "/emr-tek-discount-code": EmrTekDiscountCode,
  "/blog/therasage-discount-code": TherasageDiscountCode,
  "/blog/emr-tek-discount-code": EmrTekCheckoutCode,
  "/blog/lumebox-discount-code": LumeboxCheckoutCode,
  "/blog/silver-fern-brand-guide": SilverFernBrandGuide,
  "/blog/infrared-sauna-vs-traditional-sauna": InfraredSaunaVsTraditional,
  "/blog/how-prebiotics-and-probiotics-work": PrebioticsProbioticsGuide,
  "/blog/lumebox-discount-code-faq": LumeboxDiscountCodeFaq,
  "/blog/therasage-discount-code-faq": TherasageDiscountCodeFaq,
  "/blog/zentein-discount-code": ZenteinDiscountCode,
  "/blog/black-friday-supplement-deals-2026": BlackFridaySupplementDeals,
  "/blog/black-friday-red-light-therapy-deals-2026": BlackFridayRedLightDeals,
  "/blog/black-friday-wellness-tech-deals-2026": BlackFridayWellnessTechDeals,
  "/blog/im8-daily-ultimate-longevity-guide": IM8DailyUltimateLongevity,
  "/blog/im8-beckham-stack-explained": IM8BeckhamStack,
};

export async function render(
  url: string,
  Component?: ComponentType
): Promise<{ html: string; helmet: Record<string, { toString(): string }> }> {
  const ComponentToRender = Component ?? SSR_ROUTE_COMPONENTS[url];
  if (!ComponentToRender) {
    throw new Error(`No SSR component found for URL: ${url}`);
  }

  const helmetContext: Record<string, unknown> = {};
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, staleTime: Infinity } },
  });
  const useServerLocation = () => [url, () => {}] as const;

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router hook={useServerLocation as Parameters<typeof Router>[0]["hook"]}>
            <ComponentToRender />
          </Router>
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );

  const { helmet } = helmetContext as { helmet: Record<string, { toString(): string }> };
  if (isMonthCopyPage(url)) {
    const now = new Date();
    return {
      html: monthCopyHtml(html, now),
      helmet: Object.fromEntries(Object.entries(helmet).map(([key, value]) => [
        key, { toString: () => monthCopyHtml(value.toString(), now) },
      ])),
    };
  }
  return { html, helmet };
}
