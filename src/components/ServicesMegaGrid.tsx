"use client";

import Link from "next/link";
import { 
  Search, 
  Compass, 
  Users, 
  Activity, 
  Sparkles, 
  Zap, 
  Palette, 
  Layout, 
  BarChart3, 
  Bot, 
  Cpu, 
  UserCheck, 
  Store, 
  Monitor, 
  LayoutGrid, 
  Code, 
  MapPin, 
  Globe, 
  ShoppingCart, 
  ShoppingBag, 
  Building2, 
  Building,
  ArrowRight
} from "lucide-react";

export default function ServicesMegaGrid({ isCompact = false }: { isCompact?: boolean }) {
  const deployMediaServices = [
    { title: "WordPress & Elementor", subtitle: "Elementor Pro, Custom Themes, ACF", slug: "wordpress-development", icon: Monitor },
    { title: "Next.js & React", subtitle: "High-speed web apps & frontends", slug: "web-development", icon: Code },
    { title: "Google Ads", subtitle: "Search, Shopping, PMax", slug: "google-ads", icon: Search },
    { title: "Meta Ads", subtitle: "Facebook & Instagram", slug: "meta-ads", icon: Compass },
    { title: "LinkedIn Ads", subtitle: "ABM for B2B pipeline", slug: "linkedin-ads", icon: Users },
    { title: "Microsoft Ads", subtitle: "Bing + LinkedIn targeting", slug: "microsoft-ads", icon: Activity },
    { title: "ChatGPT Ads", subtitle: "Ads inside AI answers", slug: "chatgpt-ads", icon: Sparkles },
    { title: "Performance Max", subtitle: "PMax built for Saudi Arabia & GCC", slug: "performance-max", icon: Zap },
  ];

  const growthOps = [
    { title: "Creative Strategy", subtitle: "Weekly ad-testing engine", slug: "creative-strategy", icon: Palette },
    { title: "Landing Pages", subtitle: "CRO tied to your campaigns", slug: "landing-pages", icon: Layout },
    { title: "Analytics & Attribution", subtitle: "Server-side tracking", slug: "analytics-attribution", icon: BarChart3 },
    { title: "AI Automations", subtitle: "Lead routing, reporting, ops", slug: "ai-automations", icon: Bot },
    { title: "n8n Automation", subtitle: "Self-hosted workflows", slug: "n8n-automation", icon: Cpu },
    { title: "Resource Augmentation", subtitle: "A senior operator in your team", slug: "resource-augmentation", icon: UserCheck },
  ];

  const buildStack = [
    { title: "Websites", subtitle: "Next.js 15, WordPress & React that convert", slug: "web-development", icon: Monitor, highlight: true },
    { title: "Web Apps", subtitle: "Portals, dashboards, CRMs", slug: "web-apps", icon: LayoutGrid },
    { title: "Shopify Store · KSA", subtitle: "Mada, VAT, local shipping", slug: "shopify-store-ksa", icon: Store },
    { title: "Shopify Store · UAE", subtitle: "Launch-ready with tracking", slug: "shopify-store-uae", icon: Store },
    { title: "Marketing Tools", subtitle: "Calculators and microsites", slug: "marketing-tools", icon: Code },
  ];

  const marketsIndustries = [
    { title: "Saudi Arabia", subtitle: "Riyadh, Jeddah, Dammam", slug: "saudi-arabia", icon: MapPin },
    { title: "UAE", subtitle: "Dubai, Abu Dhabi, Sharjah", slug: "uae", icon: MapPin },
    { title: "GCC", subtitle: "All six markets", slug: "gcc", icon: Globe },
    { title: "E-commerce", subtitle: "Stores that scale on ads", slug: "ecommerce", icon: ShoppingCart },
    { title: "Shopify Marketing", subtitle: "Growth for Shopify stores", slug: "shopify-marketing", icon: ShoppingBag },
    { title: "Zid Marketing", subtitle: "Growth for Zid stores", slug: "zid-marketing", icon: Building2 },
    { title: "B2B SaaS", subtitle: "Pipeline, not clicks", slug: "b2b-saas", icon: Building },
  ];

  const renderCol = (title: string, items: typeof deployMediaServices) => (
    <div className="space-y-4">
      {/* Category Header with Blue Glow */}
      <div className="pb-2 border-b border-slate-800">
        <h4 className="text-xs font-mono font-extrabold uppercase tracking-widest text-sky-400">
          {title}
        </h4>
      </div>

      <div className="space-y-2">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className="group flex items-start gap-3 p-2.5 rounded-xl bg-slate-950/60 hover:bg-slate-900 border border-transparent hover:border-sky-500/30 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sky-400 group-hover:text-white group-hover:bg-sky-500/20 group-hover:border-sky-500/40 transition-colors flex-shrink-0 mt-0.5">
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors truncate">
                  {item.title}
                </div>
                <div className="text-xs text-slate-400 group-hover:text-slate-300 truncate">
                  {item.subtitle}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Zap className="w-3.5 h-3.5" />
              <span>Full DeployMedia Directory</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Explore Every Service, Channel &amp; Market
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              From sub-second Next.js and Headless WordPress codebases to senior performance media buying across the US, UK, Saudi Arabia and the GCC.
            </p>
          </div>

          <div className="mt-4 md:mt-0">
            <Link
              href="/audit"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-sky-400 hover:text-sky-300"
            >
              <span>Request Custom Scoping Audit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* The 4-Column Exact Mega Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 p-6 sm:p-8 rounded-3xl bg-slate-900/60 border border-slate-800 backdrop-blur-md">
          {renderCol("DEPLOY MEDIA", deployMediaServices)}
          {renderCol("GROWTH & OPS", growthOps)}
          {renderCol("BUILD", buildStack)}
          {renderCol("MARKETS & INDUSTRIES", marketsIndustries)}
        </div>

      </div>
    </section>
  );
}
