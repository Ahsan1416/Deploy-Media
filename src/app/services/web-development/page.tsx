import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import WebDevScopingForm from "@/components/WebDevScopingForm";
import { 
  Code2, 
  Terminal, 
  Cpu, 
  Zap, 
  CheckCircle2, 
  ArrowRight, 
  Layers, 
  Globe2, 
  Smartphone, 
  Sparkles,
  Gauge,
  Lock,
  Boxes
} from "lucide-react";

export const metadata = {
  title: "Next.js & WordPress Web Development | DeployMedia",
  description: "Next.js 15, React, Headless WordPress and custom web application engineering built for sub-second speeds and high-ticket conversion.",
};

export default function WebDevelopmentPage() {
  const capabilities = [
    {
      title: "Next.js 15 & React Web Apps",
      badge: "Flagship Stack",
      desc: "Full-stack web applications built on Next.js 15 App Router, React 19, TypeScript, and Tailwind CSS. Hosted on global edge networks with instant server rendering, sub-100ms TTFB, and zero cold starts.",
      specs: ["App Router & Server Actions", "Edge ISR & Turbopack", "Strict TypeScript Validation", "Tailwind CSS Design Systems"],
    },
    {
      title: "WordPress & Elementor Pro Custom Design",
      badge: "Marketing Autonomy",
      desc: "Empower your marketing team with WordPress CMS & Elementor Pro design freedom. We engineer beautiful, custom-styled Elementor and Gutenberg websites optimized for 2.0s load times and high conversions.",
      specs: ["Elementor Pro Custom Design", "ACF Pro & Custom Blocks", "2.0s Average Load Time", "Automated Image Optimization"],
    },
    {
      title: "High-Converting Funnels & Landing Pages",
      badge: "Performance Driven",
      desc: "Landing pages engineered specifically for Google Ads, Meta Ads, and LinkedIn campaigns. Built to convert cold traffic into closed demos with zero layout shifts and seamless mobile UX.",
      specs: ["CRO-Optimized Layouts", "A/B Testing Frameworks", "Embedded Multi-Step Forms", "Instant CRM & WhatsApp Sync"],
    },
    {
      title: "Shopify & E-Commerce Engineering",
      badge: "Revenue Machines",
      desc: "Custom Shopify Liquid themes and headless Hydrogen storefronts built for DTC scale. Ultra-fast product pages, one-click checkout flows, and seamless inventory management.",
      specs: ["Shopify Storefront API", "Speed-Tuned Liquid Themes", "Custom Cart & Checkout Upsells", "ERP & Warehouse Integrations"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 -right-36 w-96 h-96 bg-sky-200/50 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-sky-200">
              <Code2 className="w-3.5 h-3.5 text-sky-600" />
              <span>Full-Stack Engineering · Flagship Service</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Next.js 15 &amp; WordPress <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Websites Built to Convert.
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Most marketing sites are slow, fragile, and built by agencies who don&apos;t understand acquisition economics. DeployMedia engineers fast, scalable Next.js and Headless WordPress web applications where every millisecond is tuned for revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#web-scoping-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 transition-all shadow-xl"
              >
                <span>Scope Your Web Project</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </a>

              <Link
                href="/audit?service=web"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-sm border-2 border-slate-200 hover:border-sky-500 transition-all"
              >
                <span>Free Core Web Vitals Audit</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison: Traditional Agency Site vs DeployMedia Next.js */}
      <section className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              Why Architecture Dictates Your Acquisition Cost
            </h2>
            <p className="mt-2 text-base text-slate-600">
              For every 100ms delay in website load time, conversion rates drop by 7%. Here is why our Next.js engineering gives you an unfair advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* The Old Way */}
            <div className="p-8 rounded-3xl bg-slate-100 border border-slate-200 text-slate-700 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                <span className="font-bold text-slate-900 text-lg">Traditional Agency Site</span>
                <span className="text-xs font-mono font-bold text-rose-600 bg-rose-100 px-2.5 py-0.5 rounded-full">
                  High Churn &amp; Waste
                </span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-rose-700">
                  <span className="font-bold">✗</span> Bloated page builders with 80+ unused plugins
                </li>
                <li className="flex items-center gap-2 text-rose-700">
                  <span className="font-bold">✗</span> 3.2s+ load times causing 50% paid bounce rate
                </li>
                <li className="flex items-center gap-2 text-rose-700">
                  <span className="font-bold">✗</span> Fragile updates that break checkout forms silently
                </li>
                <li className="flex items-center gap-2 text-rose-700">
                  <span className="font-bold">✗</span> Disconnected tracking with 30-40% lost conversions
                </li>
              </ul>
            </div>

            {/* The DeployMedia Next.js Way */}
            <div className="p-8 rounded-3xl bg-slate-950 border border-sky-500/50 text-white space-y-4 shadow-2xl relative">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="font-bold text-white text-lg flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-sky-400" />
                  <span>DeployMedia Next.js Stack</span>
                </span>
                <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950 border border-emerald-700 px-2.5 py-0.5 rounded-full">
                  100/100 Core Vitals
                </span>
              </div>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Next.js 15 with zero runtime bloat &amp; instant edge SSR</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Sub-second load times worldwide via global CDN edge</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>TypeScript typed safety &amp; automated CI/CD deployment</span>
                </li>
                <li className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Server-side GTM &amp; Meta CAPI tracking pre-configured</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dives into Core Tech Capabilities */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our Web Development Disciplines
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Whether you need a high-frequency Next.js SaaS app, an authoritative Headless WordPress platform, or a high-converting DTC store.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-sky-400 border border-slate-700">
                      {cap.badge}
                    </span>
                    <Terminal className="w-4 h-4 text-slate-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {cap.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {cap.desc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-800">
                    <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider">
                      Technical Architecture:
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      {cap.specs.map((spec, i) => (
                        <div key={i} className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
                  >
                    <span>Discuss {cap.title} build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Web Development Scoping Form (Purely Website Questions) */}
      <section className="py-20 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Scoping Engine</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Scope Your Website Architecture
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Answer 4 quick technical questions to receive a custom WordPress or Next.js engineering plan and transparent scope estimate within 24 hours.
            </p>
          </div>

          <WebDevScopingForm />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Ready to upgrade from a slow site to a high-converting web engine?
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            We ship fully tested, production-ready Next.js and Headless WordPress projects in weeks, not quarters.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-4 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 shadow-xl"
            >
              Start Web Development Project
            </Link>
            <Link
              href="/case-studies"
              className="px-7 py-4 rounded-xl bg-slate-100 text-slate-900 font-semibold text-sm hover:bg-slate-200 border border-slate-300"
            >
              See Our Web Results
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
