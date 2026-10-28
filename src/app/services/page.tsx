import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesMegaGrid from "@/components/ServicesMegaGrid";
import Link from "next/link";
import { 
  Code2, 
  TrendingUp, 
  Cpu, 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Zap, 
  Layers, 
  ShieldCheck, 
  Terminal 
} from "lucide-react";

export const metadata = {
  title: "All Services | DeployMedia",
  description: "Explore DeployMedia's core capabilities: Full-Stack Web Development, Performance Paid Ads, n8n Automations, and Server-Side Analytics.",
};

export default function ServicesPage() {
  const servicePillars = [
    {
      id: "web-dev",
      number: "01",
      title: "Web & Web App Development",
      badge: "Core Flagship Service",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      headline: "Engineered for Sub-Second Speed and Unforgiving Conversion Rates",
      desc: "We don't build generic brochure sites. We engineer high-performance web applications, headless WordPress platforms, and Next.js digital experiences optimized for sub-second load times and high-ticket customer conversion.",
      features: [
        "Next.js 15 App Router with Edge SSR & ISR caching",
        "Headless WordPress & Custom Gutenberg blocks",
        "React & TypeScript Custom Web Applications",
        "Shopify & E-Commerce headless checkout architecture",
        "100/100 Core Web Vitals optimization",
        "Integrated conversion architecture and tracking from day one",
      ],
      href: "/services/web-development",
      accentBorder: "border-sky-500/40",
      gradient: "from-sky-500/10 via-transparent to-transparent",
      icon: Code2,
    },
    {
      id: "paid-ads",
      number: "02",
      title: "Performance Paid Advertising",
      badge: "Auction Scaling",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      headline: "Senior Media Buyers Optimizing for Closed-Won Pipeline, Not Clicks",
      desc: "Stop lighting money on fire with junior account reps bidding on broad keywords. Senior operators manage your Google, Meta, and LinkedIn accounts personally, ruthlessly killing non-converting spend and scaling profitable clusters.",
      features: [
        "Google Ads Search & Performance Max term isolation",
        "Meta Ads Advantage+ consolidation and weekly creative testing",
        "LinkedIn B2B ABM campaigns synced to CRM closed deals",
        "Microsoft / Bing Ads capturing high-intent executive buyers",
        "YouTube Ads & TikTok creative execution",
        "Defensible ROAS and blended customer acquisition cost (CAC)",
      ],
      href: "/services/performance-ads",
      accentBorder: "border-emerald-500/40",
      gradient: "from-emerald-500/10 via-transparent to-transparent",
      icon: TrendingUp,
    },
    {
      id: "automations",
      number: "03",
      title: "Workflow Automations & AI Systems",
      badge: "n8n Native",
      badgeColor: "bg-indigo-100 text-indigo-800 border-indigo-300",
      headline: "Self-Hosted n8n Workflows and AI Agents That Eliminate Manual Ops",
      desc: "Connect your marketing landing pages, ad spend, and sales pipelines into automated harmony. We build enterprise-grade n8n and AI workflows that route leads, qualify prospects, and sync revenue data in real time.",
      features: [
        "n8n enterprise workflows (self-hosted for total data privacy)",
        "AI lead qualification agents routing high-intent deals to AEs",
        "Instant WhatsApp and Slack team notifications",
        "HubSpot, Salesforce, and GoHighLevel two-way data sync",
        "Automated offline conversion sync back to Google & Meta",
        "Elimination of repetitive manual data entry and human delays",
      ],
      href: "/services/workflow-automation",
      accentBorder: "border-indigo-500/40",
      gradient: "from-indigo-500/10 via-transparent to-transparent",
      icon: Cpu,
    },
    {
      id: "analytics",
      number: "04",
      title: "Full-Funnel Analytics & Tracking",
      badge: "Defensible Data",
      badgeColor: "bg-amber-100 text-amber-800 border-amber-300",
      headline: "Server-Side Tracking and Attribution You Can Defend in a Board Meeting",
      desc: "Browser cookies are dead. We build first-party, server-side tracking pipelines that recover lost attribution signals, feed machine learning algorithms with pristine data, and provide board-ready reporting.",
      features: [
        "Server-Side Google Tag Manager (sGTM) on custom cloud run",
        "Meta Conversions API (CAPI) with 9.0+ match quality scores",
        "GA4 BigQuery raw event export and custom attribution modeling",
        "Offline revenue synchronization for high-ticket sales cycles",
        "Comprehensive Conversion Rate Optimization (CRO) tear-downs",
        "Live executive dashboards in Looker Studio and PowerBI",
      ],
      href: "/services/analytics-tracking",
      accentBorder: "border-amber-500/40",
      gradient: "from-amber-500/10 via-transparent to-transparent",
      icon: BarChart3,
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Services Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-50 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Terminal className="w-3.5 h-3.5 text-sky-600" />
              <span>DeployMedia Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight">
              Engineering &amp; Growth Services
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We bridge modern software engineering and senior media buying. Every service is built to drive real pipeline, lower acquisition costs, and scale enterprise enterprise value.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars Breakdown */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {servicePillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.id}
                id={pillar.id}
                className={`rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border ${pillar.accentBorder} shadow-2xl relative overflow-hidden group`}
              >
                {/* Subtle gradient background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} pointer-events-none`} />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column Info */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl font-black font-mono text-slate-600">
                        {pillar.number}
                      </span>
                      <span className={`text-xs font-mono font-bold px-3 py-1 rounded-full border ${pillar.badgeColor}`}>
                        {pillar.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                      {pillar.title}
                    </h2>

                    <p className="text-sky-300 font-medium text-base sm:text-lg">
                      {pillar.headline}
                    </p>

                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {pillar.desc}
                    </p>

                    <div className="pt-4">
                      <Link
                        href={pillar.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-950 font-bold text-sm hover:bg-sky-400 transition-colors shadow-md"
                      >
                        <span>Explore {pillar.title}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  {/* Right Column Features Checklist */}
                  <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-800 flex items-center justify-between">
                      <span>Deliverables &amp; Core Specs</span>
                      <Icon className="w-4 h-4 text-sky-400" />
                    </div>

                    <ul className="space-y-2.5">
                      {pillar.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* The 4-Column Directory Grid for All Channels & Markets */}
      <ServicesMegaGrid />

      {/* Call to action */}
      <section className="py-16 bg-white border-t border-slate-200 text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-slate-950">
            Unsure which service matches your current growth stage?
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Book a 30-minute scoping session with a senior operator. We will map your bottlenecks and recommend the exact stack needed.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 shadow-lg"
            >
              Schedule Strategy Call
            </Link>
            <Link
              href="/audit"
              className="px-6 py-3.5 rounded-xl bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-slate-200 border border-slate-300"
            >
              Request Free Technical Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
