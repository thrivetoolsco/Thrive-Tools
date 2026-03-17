import { useState } from "react";
import { Share2, Check, Link } from "lucide-react";

export default function ShareButton() {
  const [state, setState] = useState<"idle" | "copied" | "shared">("idle");

  async function handleShare() {
    const url = window.location.href;
    const title = document.title;

    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        setState("shared");
        setTimeout(() => setState("idle"), 2000);
      } catch {
        // user cancelled — do nothing
      }
    } else {
      try {
        await navigator.clipboard.writeText(url);
        setState("copied");
        setTimeout(() => setState("idle"), 2000);
      } catch {
        // clipboard unavailable
      }
    }
  }

  const label = state === "copied" ? "Link copied!" : state === "shared" ? "Shared!" : "Share";
  const icon =
    state === "idle" ? (
      <Share2 className="w-3.5 h-3.5" />
    ) : state === "copied" ? (
      <Check className="w-3.5 h-3.5 text-green-600" />
    ) : (
      <Link className="w-3.5 h-3.5" />
    );

  return (
    <button
      onClick={handleShare}
      data-testid="button-share"
      className="inline-flex items-center gap-1.5 text-xs font-medium text-black/45 hover:text-[#c4622d] transition-colors border border-black/10 hover:border-[#c4622d]/30 rounded-full px-3 py-1.5 bg-white/50 backdrop-blur-sm"
    >
      {icon}
      <span>{label}</span>
    </button>
  );
}
