import { useState } from "react";
import {
  Zap, Moon, Leaf, Flame, Wind, Droplet,
  ArrowRight, RotateCcw, ExternalLink, BookOpen, Send, CheckCircle,
} from "lucide-react";

// ─── Data (unchanged from original) ─────────────────────────────────────────

const CONCERNS = [
  { id: "energy",   label: "Fog & fatigue",              sub: "Can't think straight, dragging by 2pm",    Icon: Zap },
  { id: "sleep",    label: "Broken sleep",               sub: "Wired at night, groggy in the morning",    Icon: Moon },
  { id: "gut",      label: "Gut & digestion",            sub: "Bloating, irregularity, low absorption",   Icon: Leaf },
  { id: "recovery", label: "Inflammation & recovery",    sub: "Aches, slow healing, poor circulation",    Icon: Flame },
  { id: "stress",   label: "Stress & nervous system",    sub: "Always \"on,\" can't downshift",           Icon: Wind },
  { id: "load",     label: "Toxin load",                 sub: "Water, air, EMF — the invisible stuff",    Icon: Droplet },
] as const;

type ConcernId = (typeof CONCERNS)[number]["id"];

const PROTOCOLS: Record<ConcernId, {
  diagnosis: string;
  picks: { name: string; reason: string; code: string | null; url: string; review: string | null }[];
}> = {
  energy: {
    diagnosis: "Fog and fatigue are rarely a caffeine problem — they're a mitochondrial and micronutrient one. This protocol targets cellular energy production, not another jolt.",
    picks: [
      { name: "IM8", reason: "Full-spectrum vitamins, probiotics, adaptogens & CoQ10 in one scoop — covers the baseline most people are missing.", code: "THRIVE10", url: "https://www.im8health.com/THRIVE10", review: "https://thrivetools.co/product-reviews/im8-health-review" },
      { name: "EnergyBits", reason: "Low-heat dried chlorella & spirulina — enzymes intact, real cellular fuel instead of synthetic stimulation.", code: "THRIVE25", url: "https://energybits.com/discount/THRIVE25?rfsn=9026872.b2b124&utm_source=refersion&utm_medium=affiliate&utm_campaign=9026872.b2b124", review: "https://thrivetools.co/product-reviews/energybits-spirulina-chlorella-review" },
      { name: "Vielight Neuro", reason: "Transcranial photobiomodulation for cognitive decline and mental clarity — a different mechanism than a stimulant, working on cellular energy in the brain itself.", code: "THRIVETOOLS", url: "https://www.vielight.com/devices/", review: "https://thrivetools.co/product-reviews/vielight-neuro-review" },
    ],
  },
  sleep: {
    diagnosis: "Most sleep issues are a nervous-system regulation problem wearing an insomnia costume. This protocol works the mineral and breath side, not another sedative.",
    picks: [
      { name: "BiOptimizers Magnesium Breakthrough", reason: "Seven bioavailable forms of magnesium covering every cellular function — the single most under-dosed mineral for sleep.", code: "THRIVETOOLS", url: "https://bioptimizers.com/shop/products/magnesium-breakthrough", review: "https://thrivetools.co/product-reviews/magnesium-deficiency-supplement-guide" },
      { name: "Oxygen Advantage", reason: "The most evidence-based breathwork courses available — a direct lever out of sympathetic overdrive before bed.", code: "THRIVETOOLS", url: "https://oxygenadvantage.com/?ref=159", review: "https://thrivetools.co/product-reviews/breathwork-beginners-guide" },
      { name: "Earthing Harmony", reason: "Grounding sheets for direct-contact grounding — supports parasympathetic downshift overnight.", code: "THRIVENOW", url: "https://earthingharmony.com/?ref=hxaqgkso", review: null },
    ],
  },
  gut: {
    diagnosis: "If your probiotic dies in stomach acid, you're not treating anything. This protocol is built around strains and oils that actually survive digestion.",
    picks: [
      { name: "Just Thrive", reason: "Spore-based probiotics engineered to survive stomach acid and reach the gut intact — the most researched strains for real microbiome shift.", code: "THRIVETOOLS", url: "https://justthrivehealth.com/THRIVETOOLS", review: "https://thrivetools.co/blog/bacillus-subtilis-bacillus-coagulans-probiotic-guide" },
      { name: "The Blessed Seed", reason: "Cold-pressed, undiluted black seed oil — centuries of traditional use for gut inflammation and immune support.", code: null, url: "https://theblessedseed.de/ref/370/", review: "https://thrivetools.co/blog/black-seed-oil-benefits-nigella-sativa-guide" },
      { name: "Prana Foods", reason: "Organic superfoods and snacks with no junk fillers — the easiest daily swap for actually feeding your gut instead of just supplementing around a bad diet.", code: null, url: "https://pranafoods.ca/thrivetoolsco", review: null },
    ],
  },
  recovery: {
    diagnosis: "Chronic low-grade inflammation is the common thread under \"I just feel achy all the time.\" This protocol targets circulation, cellular repair, and the raw materials for recovery.",
    picks: [
      { name: "Joovv", reason: "Clinical-grade red light therapy — the most trusted name in photobiomodulation for tissue repair and circulation.", code: "THRIVETOOLS", url: "https://joovv.com", review: "https://thrivetools.co/product-reviews/joovv-review" },
      { name: "BiOptimizers Magnesium Breakthrough", reason: "Magnesium is required for muscle repair and inflammation regulation — most people are chronically short on it.", code: "THRIVETOOLS", url: "https://bioptimizers.com/shop/products/magnesium-breakthrough", review: "https://thrivetools.co/product-reviews/magnesium-deficiency-supplement-guide" },
      { name: "HyperionHerbs", reason: "Dual-extracted, fruiting-body-only tonic herbs — Reishi and Cordyceps support immune resilience and recovery capacity, the traditional foundation for stamina in Taoist herbalism.", code: "EDEN10", url: "http://www.hyperionherbs.com/discount/eden10", review: "https://thrivetools.co/product-reviews/hyperion-herbs" },
    ],
  },
  stress: {
    diagnosis: "You don't need another mindset tip. You need your nervous system to have a way out of \"on.\" This protocol works the body first.",
    picks: [
      { name: "Oxygen Advantage", reason: "The most evidence-based breathwork courses available — a direct lever on the vagus nerve.", code: "THRIVETOOLS", url: "https://oxygenadvantage.com/?ref=159", review: "https://thrivetools.co/product-reviews/breathwork-beginners-guide" },
      { name: "Muse Headband", reason: "Real-time EEG neurofeedback — trains your nervous system to recognize and hold a calm state.", code: "THRIVE25", url: "https://choosemuse.com/thrive25", review: "https://thrivetools.co/blog/muse-headband-review-eeg-neurofeedback" },
      { name: "Vielight Neuro", reason: "Also used for deepening meditation states and calming an overactive nervous system — same device, different use case.", code: "THRIVETOOLS", url: "https://www.vielight.com/devices/", review: "https://thrivetools.co/product-reviews/vielight-neuro-review" },
    ],
  },
  load: {
    diagnosis: "You can't out-supplement a constant toxin load. This protocol cuts exposure at the source — water, cookware, EMF.",
    picks: [
      { name: "WaterDropFilter", reason: "Reverse osmosis + UV sterilization, countertop, no installation — the highest-leverage single change for water quality.", code: "KAWTHARLARAKI", url: "https://www.waterdropfilter.ca/?ref=ozpbpmdp", review: "https://thrivetools.co/blog/waterdrop-k19-h-aquatru-rkin-reverse-osmosis-review" },
      { name: "360 Cookware", reason: "Stainless steel, free from PFAS and chemical coatings — cooking is a daily exposure most people never audit.", code: "THRIVETOOLS", url: "https://www.360cookware.com/THRIVETOOLS", review: null },
      { name: "Aires Tech", reason: "Proven EMF protection — for the invisible load that's harder to see but easy to reduce.", code: "THRIVE25", url: "https://airestech.com/thrive25", review: null },
    ],
  },
};

// ─── Component ───────────────────────────────────────────────────────────────

export default function ProtocolQuiz() {
  const [step, setStep] = useState<"intro" | "result">("intro");
  const [concernId, setConcernId] = useState<ConcernId | null>(null);

  // Email capture state
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [emailError, setEmailError] = useState("");

  const pick = (id: ConcernId) => {
    setConcernId(id);
    setStep("result");
    setEmail("");
    setEmailStatus("idle");
    setEmailError("");
  };

  const reset = () => {
    setConcernId(null);
    setStep("intro");
    setEmail("");
    setEmailStatus("idle");
    setEmailError("");
  };

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailError("");

    // Client-side validation
    if (!email.trim()) { setEmailError("Please enter your email address."); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setEmailError("That doesn't look like a valid email."); return; }

    setEmailStatus("sending");
    try {
      const res = await fetch("/api/protocol-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), concern: concernId }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Unknown error");
      setEmailStatus("sent");
    } catch (err: unknown) {
      setEmailStatus("error");
      setEmailError(err instanceof Error ? err.message : "Something went wrong — please try again.");
    }
  };

  const concern = CONCERNS.find((c) => c.id === concernId);
  const protocol = concernId ? PROTOCOLS[concernId] : null;

  return (
    <div id="protocol-finder" className="scroll-mt-24">
      {/* ── Intro screen ── */}
      {step === "intro" && (
        <div className="space-y-4">
          {/* header */}
          <div className="space-y-2">
            <p className="text-xs font-mono font-semibold tracking-[0.14em] uppercase text-[#c4622d] flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c4622d] flex-shrink-0" />
              Protocol Finder
            </p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#3d1a28] leading-tight">
              Still foggy? Still tired?<br />
              <span className="italic text-[#c4622d]">Tell me where it's coming from.</span>
            </h2>
            <p className="text-[#3d1a28]/60 text-sm leading-snug">
              Pick what's going on — I'll hand you 3 things worth trying, discount codes included.
            </p>
          </div>

          {/* skip link */}
          <p className="text-xs text-[#3d1a28]/40">
            Already know what you want?{" "}
            <a
              href="#discount-list"
              className="underline underline-offset-2 hover:text-[#c4622d] transition-colors"
            >
              Skip to the full list ↓
            </a>
          </p>

          {/* concern grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {CONCERNS.map(({ id, label, sub, Icon }) => (
              <button
                key={id}
                onClick={() => pick(id)}
                className="group rounded-xl border border-black/10 bg-white/60 p-4 sm:p-5 text-left flex flex-col gap-2.5 transition-all duration-150 hover:border-[#c4622d]/50 hover:-translate-y-0.5 hover:shadow-md hover:shadow-[#c4622d]/10 focus-visible:outline-2 focus-visible:outline-[#c4622d] focus-visible:outline-offset-2 active:translate-y-0"
              >
                <span className="w-8 h-8 rounded-full bg-[#3d1a28] flex items-center justify-center text-[#fdf6eb] flex-shrink-0 group-hover:bg-[#c4622d] transition-colors">
                  <Icon size={15} strokeWidth={2} />
                </span>
                <span className="font-display font-bold text-[#3d1a28] leading-snug text-base sm:text-lg">{label}</span>
                <span className="text-xs text-[#3d1a28]/50 leading-snug">{sub}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* ── Result screen ── */}
      {step === "result" && protocol && concern && (
        <div className="space-y-8">
          {/* tag + diagnosis */}
          <div className="space-y-4">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-semibold tracking-widest uppercase text-[#3d1a28]/70 bg-[#c4622d]/10 border border-[#c4622d]/25 px-3 py-1.5 rounded-full">
              <concern.Icon size={12} />
              {concern.label}
            </span>
            <p className="font-display italic text-xl sm:text-2xl leading-snug text-[#3d1a28] border-l-2 border-[#c4622d] pl-4">
              {protocol.diagnosis}
            </p>
          </div>

          {/* picks */}
          <div className="space-y-4">
            {protocol.picks.map((p, i) => (
              <div
                key={p.name}
                className="rounded-xl border border-black/8 bg-white/60 p-5 sm:p-6 space-y-3"
                style={{ animationDelay: `${i * 0.13}s` }}
              >
                <div className="space-y-1">
                  <p className="text-xs font-mono font-semibold text-[#c4622d] tracking-widest uppercase">
                    {String(i + 1).padStart(2, "0")} / Protocol
                  </p>
                  <h3 className="font-display text-xl font-bold text-[#3d1a28]">{p.name}</h3>
                  <p className="text-sm text-[#3d1a28]/60 leading-relaxed">{p.reason}</p>
                </div>

                <div className="flex flex-wrap items-center gap-2.5">
                  {p.code && (
                    <span className="font-mono font-black text-base sm:text-lg text-[#c4622d] bg-white border-2 border-[#c4622d] px-3 py-1 rounded-lg tracking-widest select-all">
                      {p.code}
                    </span>
                  )}
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-[#c4622d] hover:bg-[#8b3a1a] text-white font-semibold text-sm px-5 py-2 rounded-full transition-colors"
                  >
                    Visit <ExternalLink size={13} />
                  </a>
                  {p.review && (
                    <a
                      href={p.review}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 border border-[#3d1a28]/20 text-[#3d1a28]/65 hover:border-[#c4622d]/50 hover:text-[#c4622d] font-semibold text-sm px-5 py-2 rounded-full transition-colors"
                    >
                      <BookOpen size={13} /> Why I trust it
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Email capture */}
          <div className="rounded-xl border border-black/8 bg-white/60 p-5 sm:p-6 space-y-3">
            {emailStatus === "sent" ? (
              <div className="flex items-center gap-3 text-[#3d1a28]">
                <CheckCircle className="w-5 h-5 text-[#c4622d] flex-shrink-0" />
                <div>
                  <p className="font-semibold text-sm">Sent — check your inbox.</p>
                  <p className="text-xs text-[#3d1a28]/50 mt-0.5">Your 3 picks and discount codes are on their way.</p>
                </div>
              </div>
            ) : (
              <>
                <div className="space-y-0.5">
                  <p className="font-display font-bold text-[#3d1a28] text-base">Want this protocol saved?</p>
                  <p className="text-xs text-[#3d1a28]/55 leading-snug">
                    I'll send you these 3 picks and their codes, so you don't have to screenshot this.
                  </p>
                </div>
                <form onSubmit={submitEmail} className="flex flex-col sm:flex-row gap-2" noValidate>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setEmailError(""); }}
                    placeholder="your@email.com"
                    disabled={emailStatus === "sending"}
                    className="flex-1 min-w-0 rounded-lg border border-black/15 bg-white px-3 py-2.5 text-sm text-[#3d1a28] placeholder:text-[#3d1a28]/30 focus:outline-none focus:border-[#c4622d]/60 disabled:opacity-50"
                  />
                  <button
                    type="submit"
                    disabled={emailStatus === "sending"}
                    className="inline-flex items-center justify-center gap-2 bg-[#c4622d] hover:bg-[#8b3a1a] disabled:opacity-50 text-white font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors whitespace-nowrap flex-shrink-0"
                  >
                    {emailStatus === "sending" ? "Sending…" : <><Send size={13} /> Send it to me</>}
                  </button>
                </form>
                {emailError && (
                  <p className="text-xs text-red-600">{emailError}</p>
                )}
                {emailStatus === "error" && !emailError && (
                  <p className="text-xs text-red-600">Something went wrong — please try again.</p>
                )}
              </>
            )}
          </div>

          {/* footer row */}
          <div className="flex justify-between items-center flex-wrap gap-3 border-t border-black/8 pt-5">
            <button
              onClick={reset}
              className="inline-flex items-center gap-2 text-sm font-mono font-semibold tracking-widest uppercase text-[#3d1a28]/50 hover:text-[#3d1a28] transition-colors focus-visible:outline-2 focus-visible:outline-[#c4622d] rounded"
            >
              <RotateCcw size={13} /> Start over
            </button>
            <span className="text-sm text-[#3d1a28]/40 font-medium italic">— Eden</span>
          </div>
        </div>
      )}
    </div>
  );
}
