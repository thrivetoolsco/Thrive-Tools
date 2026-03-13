import PageLayout from "@/components/PageLayout";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <PageLayout title="Contact">
      <div className="max-w-lg mx-auto text-center space-y-8" data-testid="section-contact">
        <p className="text-black/70 text-lg leading-relaxed" data-testid="text-contact-intro">
          If you want to talk shop, ask about a tool, or just say hey, hit me up directly. No "required" fields, just me on the other end.
        </p>

        <div className="card-glass rounded-md p-8 flex flex-col items-center gap-4" data-testid="card-contact-email">
          <Mail className="w-8 h-8 text-[#c97a8e]" />
          <p className="text-black/50 text-sm tracking-widest uppercase font-medium">Drop a line</p>
          <a
            href="mailto:thrivetools.co@gmail.com"
            className="text-[#e8a4b8] hover:text-black transition-colors text-xl font-display font-semibold break-all"
            data-testid="link-contact-email"
          >
            thrivetools.co@gmail.com
          </a>
        </div>
      </div>
    </PageLayout>
  );
}
