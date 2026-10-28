"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  TrendingUp, 
  ArrowUpRight, 
  ArrowRight, 
  CheckCircle2, 
  Code2, 
  BarChart3, 
  Layers, 
  Zap,
  Globe 
} from "lucide-react";

export default function CaseStudiesSection() {
  const [filter, setFilter] = useState<"all" | "saas" | "dtc" | "enterprise">("all");

  const caseStudies = [
    {
      category: "saas",
      title: "B2B SaaS Event Platform",
      market: "North America & Europe",
      stack: ["Next.js 15 (1.2s LCP)", "Google Search", "Bing Ads", "n8n CRM Sync"],
      metricPrimary: "$2,600 ➔ $1,200",
      metricLabel: "Cost Per Closed-Won Demo",
      metricSecondary: "3.8× Pipeline Lift",
      desc: "Rebuilt legacy marketing site into an ultra-fast Next.js web application (1.2s Core Web Vitals). Isolated non-brand search terms and shifted budget into high-intent demo requests instead of low-intent lead gen forms.",
      slug: "event-saas-google-bing",
    },
    {
      category: "enterprise",
      title: "Global Freight & Courier Logistics",
      market: "Saudi Arabia (KSA) & UAE",
      stack: ["Custom WordPress (2.0s LCP)", "Meta Advantage+", "Server-Side GTM"],
      metricPrimary: "4.2× Blended ROAS",
      metricLabel: "From 1.4x Prior Agency Baseline",
      metricSecondary: "+$2.1M Gross Bookings",
      desc: "Deployed bilingual Arabic/English WordPress architecture with 2.0s Core Web Vitals. Engineered server-side tracking to bypass iOS 14+ signal loss across the GCC region.",
      slug: "freight-courier-mena",
    },
    {
      category: "dtc",
      title: "DTC Functional Nutrition & Beverage",
      market: "Global E-Commerce",
      stack: ["Shopify Headless", "Meta Creative Engine", "TikTok Ads"],
      metricPrimary: "1.8× ➔ 3.8× ROAS",
      metricLabel: "Blended Return on Ad Spend",
      metricSecondary: "$1.1M Scaled Revenue",
      desc: "Rebuilt checkout funnel speed and ran a continuous weekly 10-hook creative testing cadence. Scaled daily ad spend profitably with improving margins.",
      slug: "dtc-beverage-meta-google",
    },
    {
      category: "saas",
      title: "Enterprise AI Workflow Software",
      market: "US Tech Corridor",
      stack: ["Next.js React App", "LinkedIn ABM", "n8n AI Agents"],
      metricPrimary: "$4K ➔ $90K/mo",
      metricLabel: "Profitable Ad Spend Scaled",
      metricSecondary: "-38% Cost Per Opportunity",
      desc: "Synced HubSpot closed-won deals directly back to LinkedIn Campaign Manager using n8n webhooks. Automated senior SDR alerts on Slack within 60 seconds of form submission.",
      slug: "enterprise-workflow-software",
    },
  ];

  const filteredStudies = filter === "all" 
    ? caseStudies 
    : caseStudies.filter((s) => s.category === filter);

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background blueprint grid */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-800 text-sky-400 text-xs font-semibold tracking-wider uppercase mb-3 border border-slate-700">
              <BarChart3 className="w-3.5 h-3.5 text-sky-400" />
              <span>Real Revenue Proof</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight font-sans">
              Results We’ve Shipped
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-400 max-w-xl font-normal">
              Every metric below is audited and backed by platform conversion receipts.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 bg-slate-950 p-1.5 rounded-xl border border-slate-800 self-start">
            <button
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans transition-all ${
                filter === "all" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              All Work
            </button>
            <button
              onClick={() => setFilter("saas")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans transition-all ${
                filter === "saas" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              B2B SaaS
            </button>
            <button
              onClick={() => setFilter("dtc")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans transition-all ${
                filter === "dtc" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              DTC / E-Com
            </button>
            <button
              onClick={() => setFilter("enterprise")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-bold font-sans transition-all ${
                filter === "enterprise" ? "bg-white text-slate-900 shadow-sm" : "text-slate-400 hover:text-white"
              }`}
            >
              Enterprise
            </button>
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study, idx) => (
            <div
              key={idx}
              className="rounded-3xl bg-slate-950 text-white p-7 sm:p-8 border border-slate-800 shadow-xl flex flex-col justify-between hover:border-sky-500/50 transition-all duration-300 group"
            >
              <div>
                {/* Top market and tag */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs">
                  <span className="text-slate-400 flex items-center gap-1.5 font-sans font-medium">
                    <Globe className="w-3.5 h-3.5 text-sky-400" />
                    {study.market}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-sky-400 font-sans font-semibold text-[11px]">
                    Verified Metric
                  </span>
                </div>

                {/* Primary Metric Badge - Highly Readable Sans-Serif Font */}
                <div className="my-6 p-5 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="text-3xl sm:text-4xl font-extrabold font-sans tracking-tight text-white group-hover:text-sky-300 transition-colors">
                    {study.metricPrimary}
                  </div>
                  <div className="flex items-center justify-between mt-2 text-xs text-slate-400 font-sans">
                    <span className="font-medium">{study.metricLabel}</span>
                    <span className="text-emerald-400 font-bold font-sans">{study.metricSecondary}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight font-sans">
                  {study.title}
                </h3>

                <p className="mt-2.5 text-sm text-slate-400 leading-relaxed font-sans">
                  {study.desc}
                </p>

                {/* Stack tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.stack.map((item, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 text-xs font-sans font-medium border border-slate-800"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom CTA to View Full Breakdown */}
              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <Link
                  href={`/case-studies`}
                  className="inline-flex items-center gap-2 text-sm font-semibold font-sans text-sky-400 hover:text-sky-300 group/link transition-colors"
                >
                  <span>Read Full Audit &amp; Strategy Breakdown</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </Link>
                <div className="p-2 rounded-lg bg-slate-900 text-slate-400 group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-14 text-center">
          <Link
            href="/case-studies"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-950 text-white font-semibold font-sans text-sm border border-slate-800 hover:border-sky-500 hover:bg-slate-900 transition-all shadow-lg"
          >
            <span>Explore All Client Case Studies</span>
            <ArrowRight className="w-4 h-4 text-sky-400" />
          </Link>
        </div>

      </div>
    </section>
  );
}
