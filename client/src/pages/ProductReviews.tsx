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
    badgeColor: "bg-rose-500/15 text-rose-300 border-rose-500/25",
  },
  {
    id: "vielight-neuro-review",
    title: "Vielight Neuro Review 2026: Can Photobiomodulation Reverse Brain Aging?",
    excerpt: "Testing the Vielight Neuro Alpha and Gamma devices — examining the clinical research on transcranial photobiomodulation and my personal 6-month experience.",
    href: "/product-reviews/vielight-neuro-review",
    badge: "Tech Review",
    badgeColor: "bg-purple-500/15 text-purple-300 border-purple-500/25",
  },
];

export default function ProductReviews() {
  return (
    <PageLayout
      title="Products Reviews"
      subtitle="Honest, science-backed reviews of the wellness products I actually use."
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
                className="font-display text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors"
                data-testid={`text-post-title-${post.id}`}
              >
                {post.title}
              </h2>
              <p className="text-white/50 text-sm sm:text-base leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center text-rose-400 text-sm font-medium group-hover:text-rose-300 transition-colors">
                Read Full Review <ArrowRight className="ml-2 w-4 h-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
