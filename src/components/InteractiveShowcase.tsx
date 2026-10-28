"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Code2, 
  Cpu, 
  TrendingUp, 
  ArrowUpRight, 
  Terminal, 
  Check, 
  Layers, 
  Database, 
  MessageSquare, 
  CreditCard, 
  Flame, 
  Zap, 
  BarChart2, 
  Activity 
} from "lucide-react";

export default function InteractiveShowcase() {
  const [selectedCard, setSelectedCard] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <section className="py-20 bg-slate-100/60 relative overflow-hidden border-y border-slate-200/80">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Terminal className="w-3.5 h-3.5 text-sky-600" />
              <span>Full-Spectrum Infrastructure</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-950 tracking-tight">
              The DeployMedia Architecture
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 max-w-2xl">
              Most agencies either write code without knowing customer acquisition costs, or run ads into slow, broken funnels. We unify both into a high-octane growth engine.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-bold text-sky-600 hover:text-sky-700 bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm transition-all hover:shadow"
            >
              <span>Explore all services</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* 3 Signature Cards Grid (Faithfully elevating user's provided monitor mockup) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

          {/* CARD 1: Full-Stack Dev (Next.js / Tailwind / WordPress) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-7 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between group hover:border-sky-500/50 transition-all duration-300">
            {/* Ambient cyber wave SVG backdrop */}
            <svg
              className="absolute inset-0 w-full h-full opacity-20 pointer-events-none"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 300"
              preserveAspectRatio="none"
            >
              <path
                d="M 0 150 Q 100 80, 200 150 T 400 150"
                fill="none"
                stroke="#38bdf8"
                strokeWidth="2"
                className="animate-pulse"
              />
              <path
                d="M 0 180 Q 120 230, 240 180 T 400 180"
                fill="none"
                stroke="#0284c7"
                strokeWidth="1.5"
              />
              <path
                d="M 0 120 Q 80 50, 200 120 T 400 120"
                fill="none"
                stroke="#818cf8"
                strokeWidth="1"
                opacity="0.6"
              />
            </svg>

            <div>
              {/* Header tags */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-sky-400 font-bold">
                    wordpress
                  </span>
                  <span className="text-slate-600 font-mono">/</span>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-cyan-300">
                    react
                  </span>
                  <span className="text-slate-600 font-mono">/</span>
                  <span className="px-3 py-1 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300">
                    next.js
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-950/60 border border-emerald-800/80 px-2.5 py-0.5 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  <span>99+ Score</span>
                </div>
              </div>

              {/* Code window mock */}
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 font-mono text-xs shadow-inner backdrop-blur-md">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-slate-500 text-[11px]">
                  <span>src/themes/deploymedia/functions.php</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500/80" />
                    <span className="w-2 h-2 rounded-full bg-amber-500/80" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500/80" />
                  </div>
                </div>

                <pre className="mt-3 text-slate-300 space-y-1 overflow-x-auto text-[11px] sm:text-xs">
                  <div><span className="code-keyword">add_action</span>(<span className="code-string">&apos;deploymedia_init&apos;</span>, <span className="code-keyword">function</span>() &#123;</div>
                  <div className="pl-4"><span className="code-fn">register_custom_gutenberg_blocks</span>();</div>
                  <div className="pl-4"><span className="code-fn">enable_edge_caching</span>([<span className="code-string">&apos;ttfb&apos;</span> =&gt; <span className="code-string">&apos;80ms&apos;</span>]);</div>
                  <div>&#125;);</div>
                </pre>

                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                  <div className="inline-flex items-center gap-2 text-sky-400">
                    <span className="animate-pulse">&gt;_</span>
                    <span>deploying...</span>
                  </div>
                  <span className="text-emerald-400 text-[11px]">0 Plugin Bloat</span>
                </div>
              </div>
            </div>

            {/* Bottom title & link */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Full-Stack Dev</h3>
                <p className="text-xs text-slate-400 mt-1">
                  Custom WordPress, React, Next.js &amp; WooCommerce. Sub-second speed without plugin bloat.
                </p>
              </div>

              <Link
                href="/services/web-development"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-sky-400 hover:text-white hover:bg-sky-600 transition-colors"
                aria-label="Read about Full-Stack Dev"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* CARD 2: Workflow Automations (n8n Native) */}
          <div className="lg:col-span-6 rounded-3xl bg-slate-950 text-white p-7 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col justify-between group hover:border-indigo-500/50 transition-all duration-300">
            <div>
              {/* Header with n8n logo styling */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  {/* n8n icon nodes */}
                  <div className="flex items-center gap-1">
                    <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-300" />
                    <span className="w-4 h-0.5 bg-slate-600" />
                    <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-300" />
                    <span className="w-4 h-0.5 bg-slate-600" />
                    <span className="w-3 h-3 rounded-full bg-rose-500 border border-rose-300" />
                  </div>
                  <span className="font-extrabold text-lg tracking-tight text-white font-mono">
                    n8n
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-400">
                    Self-Hosted & Cloud
                  </span>
                </div>

                <span className="text-xs font-mono text-indigo-400 bg-indigo-950/60 border border-indigo-800 px-2.5 py-0.5 rounded-full">
                  Zero Manual Entry
                </span>
              </div>

              {/* Node diagram representation matching user's mockup */}
              <div className="rounded-xl bg-slate-900/90 border border-slate-800 p-4 relative backdrop-blur-md">
                <div className="flex items-center justify-between">
                  {/* Source Node: Stripe / Webhook */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-indigo-600/30 border border-indigo-500 text-indigo-300 flex items-center justify-center shadow-lg shadow-indigo-500/20">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 mt-1.5">Stripe Inbound</span>
                  </div>

                  {/* Connecting Neon Line */}
                  <div className="flex-1 px-3 flex items-center justify-center relative">
                    <div className="h-0.5 w-full bg-gradient-to-r from-indigo-500 via-sky-500 to-purple-500" />
                    <div className="absolute w-2 h-2 rounded-full bg-sky-300 animate-ping" />
                  </div>

                  {/* Central Router Node */}
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-xl bg-slate-800 border border-slate-600 text-sky-400 flex items-center justify-center shadow-lg">
                      <Cpu className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-300 mt-1.5">AI Routing Agent</span>
                  </div>

                  {/* Branching Lines */}
                  <div className="flex-1 px-3 flex items-center justify-center relative">
                    <div className="h-0.5 w-full bg-gradient-to-r from-purple-500 via-emerald-500 to-emerald-400" />
                  </div>

                  {/* Destination Nodes Stack */}
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800/90 border border-slate-700 text-xs">
                      <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-[11px] text-slate-200">WhatsApp Alert</span>
                    </div>
                    <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-slate-800/90 border border-slate-700 text-xs">
                      <Database className="w-3.5 h-3.5 text-sky-400" />
                      <span className="text-[11px] text-slate-200">HubSpot / CRM</span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-400 flex items-center justify-between">
                  <span>Latency: 1.2s</span>
                  <span className="text-emerald-400">100% Delivery Success</span>
                </div>
              </div>
            </div>

            {/* Bottom title & link */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-end justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white tracking-tight">Workflow Automations</h3>
                <p className="text-xs text-slate-400 mt-1">
                  AI-ready pipelines that route leads, sync CRMs, and automate reporting.
                </p>
              </div>

              <Link
                href="/services/workflow-automation"
                className="p-2.5 rounded-xl bg-slate-900 border border-slate-700 text-indigo-400 hover:text-white hover:bg-indigo-600 transition-colors"
                aria-label="Read about Workflow Automations"
              >
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          {/* CARD 3: Performance Paid Ads (Wide Banner Card) */}
          <div className="lg:col-span-12 rounded-3xl bg-slate-950 text-white p-7 sm:p-9 shadow-2xl border border-slate-800 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 group hover:border-blue-500/50 transition-all duration-300">
            {/* Ambient blue glow */}
            <div className="absolute right-0 top-0 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex-1 space-y-4">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="px-3 py-1 rounded-full bg-sky-950 border border-sky-800 text-xs font-mono text-sky-300">
                  Google Search & PMax
                </span>
                <span className="px-3 py-1 rounded-full bg-blue-950 border border-blue-800 text-xs font-mono text-blue-300">
                  Meta Ads Advantage+
                </span>
                <span className="px-3 py-1 rounded-full bg-indigo-950 border border-indigo-800 text-xs font-mono text-indigo-300">
                  LinkedIn B2B ABM
                </span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Performance Paid Ads
              </h3>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed">
                We rebuild broken tracking, eliminate wasted search terms, and test creatives weekly. You get scalable customer acquisition engineered for pipeline and gross profit — not vanity impressions.
              </p>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/services/performance-ads"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold transition-colors shadow-lg"
                >
                  <span>Explore Media Scaling</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/case-studies"
                  className="text-xs sm:text-sm font-semibold text-slate-400 hover:text-white transition-colors"
                >
                  View live case studies →
                </Link>
              </div>
            </div>

            {/* Visual metric badges and chart mock (faithfully from user's image) */}
            <div className="w-full md:w-auto flex-1 max-w-md">
              <div className="rounded-2xl bg-slate-900/90 border border-slate-800 p-5 shadow-2xl backdrop-blur-md relative">
                
                {/* Floating Metric Badges */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400">Target CPA:</span>
                    <span className="px-3 py-1 rounded-full bg-emerald-950 border border-emerald-600 text-emerald-300 text-xs font-extrabold tracking-wide">
                      CPA -42%
                    </span>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-white text-xs font-bold font-mono">
                    Pipeline: <span className="text-sky-400">$2.4M</span>
                  </div>
                </div>

                {/* Simulated Neon Growth Curve */}
                <div className="relative h-28 w-full flex items-end">
                  <svg className="w-full h-full" viewBox="0 0 300 100" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 85 Q 50 80, 100 65 T 200 35 T 300 12 L 300 100 L 0 100 Z"
                      fill="url(#chartGradient)"
                    />
                    <path
                      d="M 0 85 Q 50 80, 100 65 T 200 35 T 300 12"
                      fill="none"
                      stroke="#38bdf8"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                    <circle cx="200" cy="35" r="4" fill="#38bdf8" />
                    <circle cx="300" cy="12" r="5" fill="#ffffff" stroke="#0284c7" strokeWidth="2" />
                  </svg>
                </div>

                {/* Multi-color mini bar chart widget overlay */}
                <div className="mt-3 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-end gap-1.5 h-7">
                    <div className="w-2.5 h-3 bg-emerald-400 rounded-sm" />
                    <div className="w-2.5 h-5 bg-sky-400 rounded-sm" />
                    <div className="w-2.5 h-4 bg-indigo-400 rounded-sm" />
                    <div className="w-2.5 h-6 bg-pink-400 rounded-sm" />
                    <div className="w-2.5 h-7 bg-amber-400 rounded-sm" />
                    <div className="w-2.5 h-5 bg-cyan-400 rounded-sm" />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">
                    Continuous ROAS Scaling Engine
                  </span>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
