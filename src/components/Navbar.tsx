"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
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
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileCategory, setMobileCategory] = useState<string>("build");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 4 Columns matching the exact user screenshot
  const deployMediaServices = [
    { title: "WordPress & Elementor", subtitle: "Elementor Pro, Custom Themes, ACF", slug: "wordpress-development", icon: Monitor },
    { title: "Next.js & React", subtitle: "High-speed web apps & frontends", slug: "web-development", icon: Code },
    { title: "Google Ads", subtitle: "Search, Shopping, PMax", slug: "google-ads", icon: Search },
    { title: "Meta Ads", subtitle: "Facebook & Instagram", slug: "meta-ads", icon: Compass },
    { title: "LinkedIn Ads", subtitle: "ABM for B2B pipeline", slug: "linkedin-ads", icon: Users },
    { title: "Microsoft Ads", subtitle: "Bing + LinkedIn targeting", slug: "microsoft-ads", icon: Activity },
    { title: "ChatGPT Ads", subtitle: "Ads inside AI answers", slug: "chatgpt-ads", icon: Sparkles },
    { title: "Performance Max", subtitle: "PMax built for Saudi Arabia", slug: "performance-max", icon: Zap },
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
    { title: "Websites", subtitle: "WordPress, React & Next.js that convert", slug: "web-development", icon: Monitor, highlight: true },
    { title: "WordPress & Elementor", subtitle: "Elementor Pro, Custom Themes, ACF", slug: "wordpress-development", icon: Monitor },
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

  const renderDropdownCol = (headerTitle: string, items: typeof deployMediaServices) => (
    <div className="space-y-3">
      <div className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-sky-400 pb-1.5 border-b border-slate-800 flex items-center justify-between">
        <span>{headerTitle}</span>
      </div>
      <div className="space-y-1">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              onClick={() => setServicesDropdown(false)}
              className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-900 border border-transparent hover:border-slate-800 transition-all duration-150"
            >
              <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 group-hover:border-sky-500/40 group-hover:bg-sky-500/20 text-sky-400 group-hover:text-white flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors">
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-xs font-bold text-slate-100 group-hover:text-sky-300 transition-colors truncate">
                  {item.title}
                </div>
                <div className="text-[10px] text-slate-400 group-hover:text-slate-300 truncate">
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3"
        : "bg-white/70 backdrop-blur-sm py-4 border-b border-slate-100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo size="md" />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">

            {/* Services 4-Column Mega Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <button
                className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors cursor-pointer ${pathname.startsWith("/services")
                  ? "text-sky-600 bg-sky-50"
                  : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                  }`}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${servicesDropdown ? "rotate-180 text-sky-600" : "text-slate-400"
                    }`}
                />
              </button>

              {/* Mega Dropdown Panel matching user's exact screenshot */}
              {servicesDropdown && (
                <div className="absolute top-full -left-[140px] xl:-left-[180px] w-[980px] xl:w-[1040px] pt-3 animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-slate-950 text-white rounded-3xl shadow-2xl border border-slate-800 p-6 ring-1 ring-white/10 backdrop-blur-2xl">

                    {/* Top Status Bar inside dropdown */}
                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800/80 px-2 text-xs">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span className="font-mono text-slate-300">DeployMedia Full-Service Directory</span>
                        <span>·</span>
                        <span className="text-sky-400">WordPress, React, Paid Media &amp; GCC Scaling</span>
                      </div>

                      <Link
                        href="/services"
                        onClick={() => setServicesDropdown(false)}
                        className="text-xs text-sky-400 hover:text-sky-300 font-bold inline-flex items-center gap-1"
                      >
                        Explore all services hub <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    {/* 4 Exact Columns */}
                    <div className="grid grid-cols-4 gap-6">
                      {renderDropdownCol("DEPLOY MEDIA", deployMediaServices)}
                      {renderDropdownCol("GROWTH & OPS", growthOps)}
                      {renderDropdownCol("BUILD", buildStack)}
                      {renderDropdownCol("MARKETS & INDUSTRIES", marketsIndustries)}
                    </div>

                    {/* Bottom strip in mega menu */}
                    <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 px-2">
                      <div className="flex items-center gap-2">
                        <span className="text-amber-400 font-bold">⚡ Zero Agency Theater:</span>
                        <span>Direct Slack access to Senior Engineers and Elite Media Buyers.</span>
                      </div>
                      <Link
                        href="/audit"
                        onClick={() => setServicesDropdown(false)}
                        className="text-sky-400 hover:text-sky-300 font-bold"
                      >
                        Free Technical &amp; Ad Audit →
                      </Link>
                    </div>

                  </div>
                </div>
              )}
            </div>

            <Link
              href="/case-studies"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${pathname === "/case-studies"
                ? "text-sky-600 bg-sky-50"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
            >
              Case Studies
            </Link>

            <Link
              href="/audit"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors flex items-center gap-1.5 ${pathname === "/audit"
                ? "text-sky-600 bg-sky-50"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
            >
              <span>Free Audit</span>
              <span className="text-[10px] bg-sky-100 text-sky-700 font-bold px-1.5 py-0.5 rounded">
                NO-BS
              </span>
            </Link>

            <Link
              href="/about"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${pathname === "/about"
                ? "text-sky-600 bg-sky-50"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
            >
              About
            </Link>

            <Link
              href="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-colors ${pathname === "/contact"
                ? "text-sky-600 bg-sky-50"
                : "text-slate-700 hover:text-slate-900 hover:bg-slate-100/70"
                }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <Link
              href="/audit"
              className="text-xs md:text-sm font-semibold text-slate-700 hover:text-slate-950 px-3 py-2 transition-colors"
            >
              Free Tear-Down
            </Link>

            <Link
              href="/contact"
              className="relative group inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-950 text-white font-semibold text-xs md:text-sm shadow-md hover:bg-slate-900 transition-all duration-200 overflow-hidden border border-slate-800"
            >
              <Sparkles className="w-4 h-4 text-sky-400 animate-pulse" />
              <span>Book Strategy Call</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex sm:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-slate-950 text-white"
            >
              Book Call
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden border-b border-slate-200 bg-slate-950 text-white px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
          {/* Mobile Categories Tabs */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 px-1 py-1 mb-2">
              Services Directory
            </div>
            <div className="grid grid-cols-2 gap-1.5 mb-3">
              {[
                { label: "Deploy Media", key: "deploy" },
                { label: "Build", key: "build" },
                { label: "Growth & Ops", key: "growth" },
                { label: "Markets", key: "markets" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setMobileCategory(tab.key)}
                  className={`py-1.5 px-2 rounded-lg text-xs font-bold transition-all text-center ${mobileCategory === tab.key
                    ? "bg-sky-500 text-slate-950"
                    : "bg-slate-900 text-slate-300 border border-slate-800"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Items */}
            <div className="space-y-1">
              {(mobileCategory === "deploy"
                ? deployMediaServices
                : mobileCategory === "build"
                  ? buildStack
                  : mobileCategory === "growth"
                    ? growthOps
                    : marketsIndustries
              ).map((item) => (
                <Link
                  key={item.slug}
                  href={`/services/${item.slug}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 p-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 text-xs text-slate-200"
                >
                  <item.icon className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" />
                  <div className="truncate">
                    <div className="font-bold">{item.title}</div>
                    <div className="text-[10px] text-slate-400 truncate">{item.subtitle}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-800 pt-3 space-y-1">
            <Link
              href="/case-studies"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              Case Studies
            </Link>
            <Link
              href="/audit"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-sky-400 hover:bg-slate-900"
            >
              Free Strategy &amp; Tech Audit
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              About DeployMedia
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm font-semibold text-slate-200 hover:bg-slate-900"
            >
              Contact &amp; Book Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
