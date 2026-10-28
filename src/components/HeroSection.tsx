"use client";

import Link from "next/link";
import Image from "next/image";
import { 
  ArrowRight, 
  Sparkles,
  ShieldCheck,
  TrendingUp,
  CheckCircle2,
  Zap,
  Code2
} from "lucide-react";

export default function HeroSection({ onOpenAudit }: { onOpenAudit?: () => void }) {
  return (
    <section className="relative pt-28 pb-16 md:pt-32 md:pb-20 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* 1. Pure CSS Lightweight Tech Grid & Ambient Glows (0% CPU, Zero Lag) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-60 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Headlines, CTAs & Metrics (7 Columns) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Top Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-950 text-white text-xs font-medium shadow-sm border border-slate-800 w-fit mb-5">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
              </span>
              <span className="text-slate-300">
                WordPress &amp; Next.js · Google &amp; Meta Ads · n8n Automations
              </span>
              <span className="text-sky-400 font-semibold border-l border-slate-700 pl-2 hidden sm:inline">
                DeployMedia
              </span>
            </div>

            {/* Main Hero Headline (Realistic, clean, no blue wavy underline) */}
            <h1 className="text-3xl sm:text-5xl lg:text-5xl xl:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12]">
              We Engineer <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600">High-Speed Code.</span>
              <br />
              We Deploy <span className="text-slate-950">High-ROAS Media.</span>
            </h1>

            {/* Subheading */}
            <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl font-normal">
              No fluff. No junior account managers. Senior developers and media buyers who build blazing WordPress &amp; React platforms, automate workflows via n8n, and run Google, Meta &amp; LinkedIn campaigns engineered for closed-won revenue.
            </p>

            {/* Action CTAs */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm shadow-lg hover:bg-slate-900 transition-all group border border-slate-800 hover:scale-[1.01]"
              >
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Schedule 30-min Strategy Session</span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/audit"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-sm border-2 border-slate-200 hover:border-sky-500 hover:bg-sky-50/50 transition-all shadow-sm"
              >
                <span>Get Free Account &amp; Tech Audit</span>
                <span className="text-xs font-bold text-sky-600 bg-sky-100 px-2 py-0.5 rounded-full">
                  0 Cost
                </span>
              </Link>
            </div>

            {/* Trust Metrics Bar */}
            <div className="mt-8 pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">$48M+</div>
                <div className="text-xs text-slate-500 font-medium">Pipeline Generated</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-xl sm:text-2xl font-black text-sky-600 tracking-tight">-42% CPA</div>
                <div className="text-xs text-slate-500 font-medium">Average Reduction</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-xl sm:text-2xl font-black text-emerald-600 tracking-tight">100/100</div>
                <div className="text-xs text-slate-500 font-medium">Lighthouse Vitals</div>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/70">
                <div className="text-xl sm:text-2xl font-black text-indigo-600 tracking-tight font-sans">3.8× Avg</div>
                <div className="text-xs text-slate-500 font-medium font-sans">Blended ROAS</div>
              </div>
            </div>

          </div>

          {/* Right Column: Realistic High-End Web Development Architecture & Workspace Showcase */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
              
              {/* Subtle Backlight Glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-sky-500/20 via-blue-600/15 to-indigo-500/20 rounded-3xl blur-2xl opacity-80 pointer-events-none" />

              {/* Realistic Agency Engineering Showcase Frame */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl shadow-slate-950/40 group">
                
                {/* Clean macOS-style Window Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    </div>
                    <div className="ml-2 flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-sans text-slate-300">
                      <Code2 className="w-3 h-3 text-sky-400" />
                      <span>Next.js 15 &amp; WordPress Architecture</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>100/100 Vitals</span>
                  </div>
                </div>

                {/* Photorealistic Development Workspace Image */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <Image
                    src="/images/hero-development-realistic.jpg"
                    alt="DeployMedia Senior Web Development Workspace & Architecture"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    priority
                    className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />
                  {/* Subtle edge vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-slate-950/20 pointer-events-none" />

                  {/* Verified Speed & Architecture Float Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between gap-2 p-3 rounded-xl bg-slate-950/90 backdrop-blur-md border border-slate-700/70 text-white shadow-xl">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-2 w-2 relative">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400" />
                      </span>
                      <div>
                        <div className="text-xs font-bold text-white flex items-center gap-1.5">
                          <span>Custom Code &amp; Elementor Pro</span>
                        </div>
                        <div className="text-[11px] text-slate-300 font-medium">
                          Next.js LCP: 1.2s · WordPress: 2.0s
                        </div>
                      </div>
                    </div>
                    <div className="text-right pl-3 border-l border-slate-700/70">
                      <div className="text-xs font-black text-emerald-400">14ms TTFB</div>
                      <div className="text-[10px] text-slate-400 font-medium">Edge Response</div>
                    </div>
                  </div>
                </div>

                {/* Bottom Verified Spec Strip */}
                <div className="p-3 bg-slate-950 border-t border-slate-800/90 grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/60">
                    <div className="text-slate-400 text-[10px] uppercase font-semibold">Engineered</div>
                    <div className="font-bold text-white text-xs mt-0.5">Next.js &amp; WP</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/60">
                    <div className="text-slate-400 text-[10px] uppercase font-semibold">Core Vitals</div>
                    <div className="font-bold text-emerald-400 text-xs mt-0.5">100 / 100</div>
                  </div>
                  <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800/60">
                    <div className="text-slate-400 text-[10px] uppercase font-semibold">Engineers</div>
                    <div className="font-bold text-sky-400 text-xs mt-0.5">Senior Only</div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
