import { useState } from "react";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ArrowLeft, BookOpen, Star, FlaskConical, User } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  href: string;
  badge: string;
  badgeColor: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "im8-vs-ag1",
    title: "IM8 vs AG1: Is David Beckham's Multivitamin Actually Better?",
    excerpt: "A deep dive comparing two popular all-in-one supplements — ingredient quality, bioavailability, and real-world results after months of testing both.",
    href: "/product-reviews/im8-vs-ag1",
    badge: "Comparison",
    badgeColor: "bg-amber-500/15 text-amber-300 border-amber-500/25",
  },
  {
    id: "im8-health-review",
    title: "IM8 Health: Longevity Science or Just Marketing?",
    excerpt: "Breaking down the science behind IM8's formula — does this all-in-one supplement actually deliver on its longevity promises? Here's what the research says.",
    href: "/product-reviews/im8-health-review",
    badge: "In-Depth Review",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "vielight-neuro-review",
    title: "Vielight Neuro Review 2026: Can Photobiomodulation Reverse Brain Aging?",
    excerpt: "Testing the Vielight Neuro Alpha and Gamma devices — examining the clinical research on transcranial photobiomodulation and my personal 6-month experience.",
    href: "/product-reviews/vielight-neuro-review",
    badge: "Tech Review",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "hyperion-herbs",
    title: "Experience True Potency: Why I Recommend Hyperion Herbs for Tonic Herbs",
    excerpt: "Why most supplements fail, what makes Hyperion Herbs different, and my personal experience with their Reishi and Schisandra extracts.",
    href: "/product-reviews/hyperion-herbs",
    badge: "Herbal Review",
    badgeColor: "bg-green-500/15 text-green-300 border-green-500/25",
  },
  {
    id: "joovv-review",
    title: "Is Joovv Worth It? A Deep Dive into the Benefits and Results (2026 Edition)",
    excerpt: "Red light therapy has taken the biohacking world by storm — but is Joovv's premium price tag justified? My unfiltered experience after months of daily use.",
    href: "/product-reviews/joovv-review",
    badge: "Tech Review",
    badgeColor: "bg-red-500/15 text-red-300 border-red-500/25",
  },
  {
    id: "mct-oil-benefits-c8-vs-c10-powder-vs-oil",
    title: "MCT Oil Benefits, C8 vs C10, and Oil vs Powder: The Complete Biohacker's Guide (2026)",
    excerpt: "The real science behind MCT oil's benefits, the difference between C8 and C10, whether oil or powder is right for you, and the two products I recommend.",
    href: "/product-reviews/mct-oil-benefits-c8-vs-c10-powder-vs-oil",
    badge: "Complete Guide",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "mouth-breathing-mouth-taping",
    title: "Mouth Breathing Is Quietly Ruining Your Health, And Most People Have No Idea They're Doing It",
    excerpt: "Chronic mouth breathing silently destroys sleep quality, cognitive function, and facial structure. Here's the science and why mouth taping with MyoTape from Oxygen Advantage is the simplest fix.",
    href: "/product-reviews/mouth-breathing-mouth-taping",
    badge: "Health Guide",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "creatine-dosage-for-brain",
    title: "Why 5g of Creatine Isn't Enough for Your Brain: The Case for 10g (2026)",
    excerpt: "You've been taking 5g of creatine for your muscles. But new research, backed by Dr. Rhonda Patrick, Andrew Huberman, and Dr. Darren Candow, shows your brain needs more. Here's why.",
    href: "/product-reviews/creatine-dosage-for-brain",
    badge: "Deep Dive",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "somatic-reset-guide",
    title: "Best Somatic Reset Techniques in 2026: A Science-Backed Comparison Guide",
    excerpt: "7 techniques compared side by side: somatic breathwork, pendulation, TRE, grounding, cold exposure, and more. What each one does, the science behind it, and how to choose.",
    href: "/product-reviews/somatic-reset-guide",
    badge: "Comparison Guide",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "breathwork-beginners-guide",
    title: "Breathwork for Beginners: The Complete Science-Backed Guide (2026)",
    excerpt: "5 techniques you can start today, backed by peer-reviewed research on stress, sleep, cognition, and HRV. No equipment, no experience, no courses needed.",
    href: "/product-reviews/breathwork-beginners-guide",
    badge: "Beginner's Guide",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "biohacking-beginners-guide",
    title: "Biohacking for Beginners: The Complete 2026 Starter Guide",
    excerpt: "No jargon, no overwhelm. A clear, step-by-step framework for taking control of your biology, from free foundations to the right supplements, in the right order.",
    href: "/product-reviews/biohacking-beginners-guide",
    badge: "Beginner's Guide",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "biohacking-supplements-2026",
    title: "Best Biohacking Supplements in 2026: The Optimizer's Evidence-Based Guide",
    excerpt: "The real, research-backed compounds that elite biohackers keep coming back to. Five brands, five layers, one complete stack with the science to back it up.",
    href: "/product-reviews/biohacking-supplements-2026",
    badge: "Full Stack Guide",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
  {
    id: "rhonda-patrick-multivitamin",
    title: "Why Your \"Healthy\" Diet Probably Has Gaps. And What To Do About It",
    excerpt: "Dr. Rhonda Patrick takes a multivitamin every single day. Here's the science behind why, from the Triage Theory to the COSMOS trials, and what to look for in a quality supplement.",
    href: "/product-reviews/rhonda-patrick-multivitamin",
    badge: "Science-Backed",
    badgeColor: "bg-[#c4622d]/15 text-[#8b3a1a] border-[#c4622d]/25",
  },
];

export default function ProductReviews() {
  return (
    <PageLayout
      title="Blog"
      subtitle="Evidence based guides for the biohacker, the curious, and the committed."
    >
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <Link key={post.id} href={post.href}>
            <div
              className="card-glass rounded-2xl p-6 sm:p-8 hover-elevate transition-all duration-300 group cursor-pointer"
              data-testid={`card-post-${post.id}`}
            >
              <Badge
                className={`${post.badgeColor} border rounded-full px-3 py-0.5 text-xs tracking-widest uppercase font-medium mb-4`}
              >
                {post.badge}
              </Badge>
              <h2
                className="font-display text-xl sm:text-2xl font-bold text-black mb-3 group-hover:text-[#8b3a1a] transition-colors"
                data-testid={`text-post-title-${post.id}`}
              >
                {post.title}
              </h2>
              <p className="text-black/50 text-sm sm:text-base leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-[#8b3a1a] text-sm font-medium group-hover:text-[#8b3a1a] transition-colors">
                Read Full Review <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
