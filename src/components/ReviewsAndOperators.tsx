"use client";

import { 
  Quote, 
  Star, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import Link from "next/link";

export default function ReviewsAndOperators() {
  const testimonials = [
    {
      quote: "DeployMedia rebuilt our legacy marketing site into Next.js 15 (1.2s Core Web Vitals) and restructured our Google Ads. Our cost per closed customer dropped from $2,600 down to $1,200 in 60 days.",
      author: "Alexandre Chen",
      role: "VP of Growth & Engineering",
      company: "CloudScale SaaS",
      metric: "$2,600 ➔ $1,200 CPA",
    },
    {
      quote: "Zero agency fluff, zero junior account managers. We deployed our custom WordPress platform loading in 2.0s across the GCC and scaled our Meta & Google campaigns to 4.2x Blended ROAS.",
      author: "Sarah Al-Rashid",
      role: "Chief Marketing Officer",
      company: "Logix MENA (Riyadh / Dubai)",
      metric: "4.2× Blended ROAS",
    },
    {
      quote: "Their n8n automations hooked our high-intent lead forms directly to HubSpot in 1.2 seconds. We scaled profitable ad spend from $4K/mo to $90K/mo with a consistent 3.8x return.",
      author: "Marcus Vance",
      role: "Founder & CEO",
      company: "Apex Pipeline AI",
      metric: "$4K ➔ $90K/mo Scale",
    },
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Blueprint grid background */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-15 pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-sky-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-slate-700 font-sans">
            <Quote className="w-3.5 h-3.5 text-sky-400" />
            <span>Verified Client Feedback</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans">
            What Founders &amp; CMOs Say
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-400 font-sans font-normal">
            Real feedback from tech leaders who replaced traditional bloated agencies with DeployMedia.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-slate-950 p-7 border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2.5 py-0.5 rounded-full font-sans">
                    {t.metric}
                  </span>
                </div>

                <p className="text-sm text-slate-300 leading-relaxed font-sans">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 font-sans">
                <div className="font-bold text-sm text-white">{t.author}</div>
                <div className="text-xs text-sky-400 font-semibold">{t.role}</div>
                <div className="text-xs text-slate-500">{t.company}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
