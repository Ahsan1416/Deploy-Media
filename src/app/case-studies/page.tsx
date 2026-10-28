"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  TrendingUp, 
  ArrowRight, 
  ArrowUpRight, 
  CheckCircle2, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  Code2, 
  Sparkles, 
  Layers, 
  DollarSign, 
  Zap, 
  Terminal 
} from "lucide-react";

export default function CaseStudiesPage() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const studies = [
    {
      id: "event-saas",
      category: "saas",
      title: "B2B SaaS Event Management Platform",
      market: "North America & UK",
      timeframe: "90 Days Execution",
      metricPrimary: "$2,600 ➔ $1,200",
      metricPrimaryLabel: "Cost Per Closed-Won Demo (-54%)",
      metricSecondary: "+$1.8M",
      metricSecondaryLabel: "Net New Pipeline Value",
      stack: ["Next.js 15 (1.2s LCP)", "Google Search Non-Brand", "Microsoft Bing Ads", "n8n CRM Sync"],
      problem: "The client was spending $45k/mo on Google Ads with a legacy site loading in 4.2 seconds. Broad match keywords were draining budget on students and job seekers, while demo request forms had a 72% abandonment rate.",
      solution: "DeployMedia re-engineered their marketing site into a blazing Next.js 15 web application (1.2s Core Web Vitals). We isolated commercial-intent search terms into exact match clusters, shifted desktop budget to Bing Ads, and deployed server-side GTM to feed offline conversion value back to the bidding algorithm.",
      result: "Cost per qualified demo dropped from $2,600 down to $1,200. Pipeline velocity increased by 3.8x within 90 days, enabling the client to hit their revenue milestone.",
      quote: "DeployMedia treated our budget like it was their own capital. The Next.js frontend alone increased our conversion rate dramatically.",
      author: "David M., Chief Revenue Officer",
    },
    {
      id: "freight-courier",
      category: "enterprise",
      title: "Global Freight Forwarding & Logistics",
      market: "Saudi Arabia (KSA) & UAE",
      timeframe: "120 Days Execution",
      metricPrimary: "4.2× Blended ROAS",
      metricPrimaryLabel: "Up from 1.4x prior baseline",
      metricSecondary: "$2.8M",
      metricSecondaryLabel: "Gross Cargo Bookings",
      stack: ["Custom WordPress (2.0s LCP)", "Meta Advantage+", "Google Search Bilingual", "Server-Side CAPI"],
      problem: "Struggling to scale across the GCC region due to iOS 14.5+ attribution loss, unoptimized Arabic creative, and slow legacy landing pages unable to handle mobile corporate inquiries.",
      solution: "We deployed bilingual English and Arabic WordPress landing pages with 2.0s Core Web Vitals. We rebuilt their tracking via server-side GTM on AWS, bypassing browser ad blockers and achieving a 9.4/10 Meta Event Match Quality.",
      result: "Blended ROAS rose from 1.4x to 4.2x. Lead quality improved dramatically, with verified commercial shippers accounting for 84% of all inbound bookings.",
      quote: "They understood how corporate buyers in Riyadh and Dubai actually make procurement decisions. Outstanding engineering and paid media execution.",
      author: "Tariq A., VP Commercial Logistics",
    },
    {
      id: "dtc-nutrition",
      category: "dtc",
      title: "DTC Functional Nutrition & Wellness",
      market: "US Nationwide E-Commerce",
      timeframe: "6 Months Scale",
      metricPrimary: "1.8× ➔ 3.8× ROAS",
      metricPrimaryLabel: "Blended Return On Ad Spend",
      metricSecondary: "$950K",
      metricSecondaryLabel: "Scaled Revenue",
      stack: ["Shopify Headless Checkout", "Meta Ads Scaling Engine", "TikTok Spark Ads", "Triple Whale Attribution"],
      problem: "The brand was stuck at $35k/mo ad spend. Creative fatigue was rampant, CAC had doubled in 6 months, and their Shopify theme had accumulated code bloat causing high cart abandonment on mobile.",
      solution: "We stripped and rebuilt their mobile checkout experience. We launched a weekly 10-hook creative sprint testing UGC angles, pain-point hooks, and comparison tables across Advantage+ broad campaigns.",
      result: "Scaled monthly revenue profitably while maintaining a 3.8x blended ROAS and expanding first-order customer profitability.",
      quote: "DeployMedia took our brand from break-even to a highly profitable category leader.",
      author: "Elena Rostova, Co-Founder",
    },
    {
      id: "enterprise-workflow",
      category: "saas",
      title: "Enterprise AI Workflow Software",
      market: "US Tech Corridor",
      timeframe: "90 Days Scale",
      metricPrimary: "$4K ➔ $90K/mo",
      metricPrimaryLabel: "Profitable Ad Spend Scaled",
      metricSecondary: "-38%",
      metricSecondaryLabel: "Cost Per Opportunity",
      stack: ["Next.js React App (1.2s LCP)", "LinkedIn ABM", "n8n AI Workflows"],
      problem: "High-ticket software with a complex buying committee was generating low-intent leads from display ads with long sales cycles.",
      solution: "We set up ABM-grade targeting on LinkedIn matched to HubSpot CRM stages. Deployed automated n8n workflows that instantly enrich inbound leads with company revenue data and alert account executives in under 60 seconds.",
      result: "Scaled profitable ad spend from $4K/mo to $90K/mo while reducing cost per sales-qualified opportunity by 38%.",
      quote: "Our SDR response time dropped to under 1 minute. The integration between modern web frontend and paid campaigns is seamless.",
      author: "Marcus Vance, Founder & CEO",
    },
    {
      id: "commercial-roofing",
      category: "services",
      title: "Commercial Roofing Contractor",
      market: "Florida & Southeast US",
      timeframe: "60 Days",
      metricPrimary: "3.2× Lift",
      metricPrimaryLabel: "Commercial Lead Volume Lift",
      metricSecondary: "-42%",
      metricSecondaryLabel: "Cost Per Qualified Commercial Bid",
      stack: ["WordPress Bespoke Theme (2.0s LCP)", "Google Local Search Exact", "CallRail Call Tracking"],
      problem: "Their previous agency was bidding on consumer 'roof repair' terms instead of high-value $90k+ commercial warehouse and HOA roofing contracts.",
      solution: "We created dedicated commercial landing pages for warehouse managers and property managers with 2.0s Core Web Vitals. We implemented a negative keyword fortress excluding residential queries, and set up automated SMS alerts for estimating teams.",
      result: "Commercial quote requests surged by 320%, with qualified enterprise accounts.",
      quote: "Every lead is now a genuine commercial property owner or facility director. Game-changing results.",
      author: "Robert Kowalski, Managing Director",
    },
  ];

  const filteredStudies = activeFilter === "all" ? studies : studies.filter(s => s.category === activeFilter);

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-100 text-blue-800 text-xs font-semibold tracking-wider uppercase mb-3">
              <TrendingUp className="w-3.5 h-3.5 text-blue-600" />
              <span>Verifiable Outcomes · Real Revenue Shipped</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.1] font-sans">
              Real Revenue Shipped.
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed font-sans">
              We do not hide behind vanity impressions or agency theater. Every case study below documents real CPA reductions, pipeline expansion, and high-performance engineering delivered for our partners.
            </p>

            {/* Filter Pills */}
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {[
                { label: "All Work", value: "all" },
                { label: "B2B SaaS", value: "saas" },
                { label: "DTC & E-Commerce", value: "dtc" },
                { label: "Enterprise & Logistics", value: "enterprise" },
                { label: "Commercial Services", value: "services" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveFilter(tab.value)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold font-sans transition-all ${
                    activeFilter === tab.value
                      ? "bg-slate-950 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Deep Dive List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {filteredStudies.map((study) => (
            <div
              key={study.id}
              className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative overflow-hidden"
            >
              {/* Top metadata */}
              <div className="flex flex-wrap items-center justify-between pb-6 border-b border-slate-800 text-xs text-slate-400 gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-sky-400 flex items-center gap-1.5 font-bold font-sans">
                    <Globe className="w-4 h-4" />
                    {study.market}
                  </span>
                  <span>·</span>
                  <span className="font-sans font-medium">{study.timeframe}</span>
                </div>

                <div className="flex items-center gap-2">
                  {study.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md bg-slate-900 text-slate-300 font-sans font-medium text-[11px] border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title & Core Metrics Highlight */}
              <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                <div className="lg:col-span-7 space-y-4">
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
                    {study.title}
                  </h2>

                  {/* Problem & Solution Breakdown */}
                  <div className="space-y-4 pt-2">
                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                      <div className="text-xs font-bold text-rose-400 uppercase tracking-wider mb-1 font-sans">
                        The Challenge:
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {study.problem}
                      </p>
                    </div>

                    <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80">
                      <div className="text-xs font-bold text-sky-400 uppercase tracking-wider mb-1 font-sans">
                        DeployMedia Engineering &amp; Media Solution:
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed font-sans">
                        {study.solution}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: Measurable Stats Card & Testimonial */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 space-y-4">
                    <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-sans">
                      Verified Client Metrics:
                    </div>

                    {/* Primary Metric: Clean, easily readable font-sans */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-3xl sm:text-4xl font-extrabold text-sky-400 font-sans tracking-tight">
                        {study.metricPrimary}
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-1 font-sans">
                        {study.metricPrimaryLabel}
                      </div>
                    </div>

                    {/* Secondary Metric */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                      <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-sans tracking-tight">
                        {study.metricSecondary}
                      </div>
                      <div className="text-xs text-slate-400 font-medium mt-1 font-sans">
                        {study.metricSecondaryLabel}
                      </div>
                    </div>

                    {/* Testimonial snippet */}
                    <div className="pt-2 border-t border-slate-800 text-xs italic text-slate-300 font-sans">
                      &ldquo;{study.quote}&rdquo;
                      <div className="not-italic font-bold text-white mt-1.5 font-sans">
                        — {study.author}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Audit CTA Banner */}
      <section className="py-20 bg-slate-950 text-white border-t border-slate-800 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight font-sans">
            Ready to Build Real Pipeline &amp; Blazing Code?
          </h2>
          <p className="mt-4 text-slate-400 text-base sm:text-lg max-w-xl mx-auto font-sans">
            Let senior operators audit your web architecture and ad accounts for free. We find wasted spend and performance bottlenecks before you sign a contract.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/audit"
              className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold font-sans text-sm shadow-xl transition-all"
            >
              Request Free Performance Audit
            </Link>
            <Link
              href="/contact"
              className="px-8 py-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 font-semibold font-sans text-sm transition-all"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
