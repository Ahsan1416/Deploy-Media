"use client";

import Link from "next/link";
import Logo from "./Logo";
import { 
  Code2, 
  TrendingUp, 
  Cpu, 
  BarChart3, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Terminal,
  ShieldCheck,
  CheckCircle2
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background blueprint grid & subtle glow */}
      <div className="absolute inset-0 bg-tech-grid-dark opacity-10 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo size="md" isDark={true} />
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              DeployMedia is the engineering-led growth agency for high-growth tech companies, B2B SaaS, and modern brands. We engineer ultra-fast Next.js websites, automate backends with n8n, and run performance paid campaigns that optimize for real pipeline and closed-won revenue.
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono text-sky-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span>Status: Engineering & Buying at Full Capacity</span>
              </div>
            </div>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-sky-400" />
                <a href="mailto:hello@deploymedia.io" className="hover:text-sky-300 transition-colors">
                  hello@deploymedia.io
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-sky-400" />
                <span>San Francisco · Dubai · Riyadh · London · Remote Worldwide</span>
              </div>
            </div>
          </div>

          {/* Col 1: Web Development (#1 Flagship) */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-100 uppercase tracking-wider">
              <Code2 className="w-4 h-4 text-sky-400" />
              <span>Web & App Dev</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services/web-development" className="hover:text-sky-400 transition-colors flex items-center gap-1">
                  Next.js 15 & React Apps <span className="text-[9px] bg-sky-950 text-sky-300 px-1 py-0.5 rounded border border-sky-800">New</span>
                </Link>
              </li>
              <li>
                <Link href="/services/web-development#wordpress" className="hover:text-sky-400 transition-colors">
                  Headless & Custom WordPress
                </Link>
              </li>
              <li>
                <Link href="/services/web-development#shopify" className="hover:text-sky-400 transition-colors">
                  Shopify & E-Commerce Build
                </Link>
              </li>
              <li>
                <Link href="/services/web-development#landing-pages" className="hover:text-sky-400 transition-colors">
                  High-Converting Landing Pages
                </Link>
              </li>
              <li>
                <Link href="/services/web-development#speed" className="hover:text-sky-400 transition-colors">
                  Core Web Vitals 100/100
                </Link>
              </li>
              <li>
                <Link href="/services/web-development#fullstack" className="hover:text-sky-400 transition-colors">
                  Custom Marketing Tools & Web Apps
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Performance Paid Ads */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-100 uppercase tracking-wider">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Paid Media</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services/performance-ads#google" className="hover:text-emerald-400 transition-colors">
                  Google Search & Performance Max
                </Link>
              </li>
              <li>
                <Link href="/services/performance-ads#meta" className="hover:text-emerald-400 transition-colors">
                  Meta Ads (Facebook & Instagram)
                </Link>
              </li>
              <li>
                <Link href="/services/performance-ads#linkedin" className="hover:text-emerald-400 transition-colors">
                  LinkedIn ABM & B2B Pipeline
                </Link>
              </li>
              <li>
                <Link href="/services/performance-ads#microsoft" className="hover:text-emerald-400 transition-colors">
                  Microsoft & Bing Ads
                </Link>
              </li>
              <li>
                <Link href="/services/performance-ads#youtube" className="hover:text-emerald-400 transition-colors">
                  YouTube & TikTok Ads
                </Link>
              </li>
              <li>
                <Link href="/services/performance-ads#creative" className="hover:text-emerald-400 transition-colors">
                  Creative Testing Engine
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Automation & AI */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-100 uppercase tracking-wider">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Automations & AI</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/services/workflow-automation" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
                  n8n Native Workflows <span className="text-[9px] bg-indigo-950 text-indigo-300 px-1 py-0.5 rounded border border-indigo-800">Pro</span>
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation#agents" className="hover:text-indigo-400 transition-colors">
                  AI Lead Qualification Agents
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation#crm" className="hover:text-indigo-400 transition-colors">
                  HubSpot / Salesforce Sync
                </Link>
              </li>
              <li>
                <Link href="/services/workflow-automation#pipelines" className="hover:text-indigo-400 transition-colors">
                  Automated Revenue Reporting
                </Link>
              </li>
              <li>
                <Link href="/services/analytics-tracking" className="hover:text-indigo-400 transition-colors">
                  Server-Side GTM & Meta CAPI
                </Link>
              </li>
              <li>
                <Link href="/services/analytics-tracking#attribution" className="hover:text-indigo-400 transition-colors">
                  GA4 BigQuery Attribution
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company & Audits */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-bold text-slate-100 uppercase tracking-wider">
              <BarChart3 className="w-4 h-4 text-amber-400" />
              <span>DeployMedia</span>
            </div>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <Link href="/case-studies" className="hover:text-amber-400 transition-colors">
                  Case Studies ($48M+ Shipped)
                </Link>
              </li>
              <li>
                <Link href="/audit" className="hover:text-amber-400 transition-colors text-sky-400 font-semibold">
                  Free Strategy & Tech Audit
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-amber-400 transition-colors">
                  Our Engineering Ethos
                </Link>
              </li>
              <li>
                <Link href="/about#team" className="hover:text-amber-400 transition-colors">
                  Meet the Senior Operators
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-amber-400 transition-colors">
                  Book 30-min Strategy Call
                </Link>
              </li>
              <li>
                <span className="text-[11px] text-slate-500">
                  GCC Hub: UAE, Saudi Arabia & Qatar
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 DeployMedia Inc. All rights reserved.</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-slate-400">Engineered for CPA, Pipeline & Speed.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-slate-400 transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/audit" className="hover:text-sky-400 font-semibold transition-colors flex items-center gap-1">
              Audit Request <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
