import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMsg(data.error ?? "Something went wrong.");
        setStatus("error");
      } else {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      }
    } catch {
      setErrorMsg("Network error — please try again.");
      setStatus("error");
    }
  }

  return (
    <PageLayout
      title="Contact"
      seo={{
        title: "Contact Thrive Tools | Eden Laraki",
        description: "Get in touch with Eden Laraki at Thrive Tools for questions about supplements, biohacking protocols, wellness guidance, or retreat inquiries.",
        canonical: "/contact",
      }}
    >
      <div className="max-w-lg mx-auto" data-testid="section-contact">
        <p className="text-black/70 text-lg leading-relaxed mb-10 text-center" data-testid="text-contact-intro">
          If you want to talk shop, ask about a tool, or just say hey — fill in the form below and I'll get back to you.
        </p>

        {status === "success" ? (
          <div className="card-glass rounded-md p-8 flex flex-col items-center gap-4 text-center" data-testid="card-contact-success">
            <CheckCircle className="w-10 h-10 text-[#c4622d]" />
            <p className="font-display text-xl font-semibold text-[#3d1a28]">Message sent!</p>
            <p className="text-black/60 text-sm">I'll get back to you soon.</p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[#c4622d] text-sm underline underline-offset-2 hover:text-[#8b3a1a] transition-colors mt-2"
            >
              Send another message
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="card-glass rounded-md p-8 space-y-5"
            data-testid="form-contact"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-name" className="text-xs font-semibold tracking-widest uppercase text-black/50">
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="bg-white/60 border border-black/10 rounded-md px-4 py-2.5 text-sm text-[#3d1a28] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#c4622d]/30"
                  data-testid="input-contact-name"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="contact-email" className="text-xs font-semibold tracking-widest uppercase text-black/50">
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="bg-white/60 border border-black/10 rounded-md px-4 py-2.5 text-sm text-[#3d1a28] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#c4622d]/30"
                  data-testid="input-contact-email"
                />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-subject" className="text-xs font-semibold tracking-widest uppercase text-black/50">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                required
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="bg-white/60 border border-black/10 rounded-md px-4 py-2.5 text-sm text-[#3d1a28] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#c4622d]/30"
                data-testid="input-contact-subject"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="contact-message" className="text-xs font-semibold tracking-widest uppercase text-black/50">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Say whatever's on your mind…"
                className="bg-white/60 border border-black/10 rounded-md px-4 py-2.5 text-sm text-[#3d1a28] placeholder:text-black/30 focus:outline-none focus:ring-2 focus:ring-[#c4622d]/30 resize-none"
                data-testid="input-contact-message"
              />
            </div>

            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 text-sm" data-testid="error-contact">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {errorMsg}
              </div>
            )}

            <Button
              type="submit"
              disabled={status === "sending"}
              className="w-full btn-gradient-rose text-white font-semibold rounded-full py-2.5 flex items-center justify-center gap-2"
              data-testid="btn-contact-submit"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                </>
              ) : (
                "Send Message"
              )}
            </Button>
          </form>
        )}
      </div>
    </PageLayout>
  );
}
