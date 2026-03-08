import { useState } from "react";
import PageLayout from "@/components/PageLayout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const inputClasses = "bg-white/5 border-white/15 text-white placeholder:text-white/40 focus-visible:ring-white/25 focus-visible:ring-offset-0";

  const [sending, setSending] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Failed to send");
      }
      toast({
        title: "Message Sent",
        description: "Thank you for reaching out! We'll get back to you soon.",
      });
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch (err: any) {
      toast({
        title: "Something went wrong",
        description: err?.message || "Please try again or email us directly at Thrivetools.co@gmail.com",
        variant: "destructive",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <PageLayout title="Contact">
      <div className="max-w-lg mx-auto">
        <p className="text-white/60 text-center mb-8" data-testid="text-contact-intro">
          Have a question or want to book a session? Fill out the form below and we'll get back to you as soon as possible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5" data-testid="form-contact">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-1.5">
              Your Name
            </label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClasses}
              data-testid="input-name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-1.5">
              Your Email
            </label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClasses}
              data-testid="input-email"
            />
          </div>

          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-white/70 mb-1.5">
              Subject
            </label>
            <Input
              id="subject"
              type="text"
              placeholder="What is this about?"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className={inputClasses}
              data-testid="input-subject"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-1.5">
              Your Message
            </label>
            <Textarea
              id="message"
              placeholder="Write your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className={`${inputClasses} resize-none`}
              data-testid="input-message"
            />
          </div>

          <Button type="submit" className="w-full" data-testid="button-submit">
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </Button>
        </form>
      </div>
    </PageLayout>
  );
}
