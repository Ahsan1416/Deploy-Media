"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import Link from "next/link";
import { 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Code2, 
  Cpu, 
  TrendingUp, 
  Terminal, 
  Monitor,
  Workflow
} from "lucide-react";

type ServiceTab = "web" | "automation" | "ads";

export default function AuditCTASection() {
  const [tab, setTab] = useState<ServiceTab>("web");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [email, setEmail] = useState("");
  
  // Web Dev Fields
  const [cmsChoice, setCmsChoice] = useState("Custom WordPress (ACF Pro / Fast)");
  const [webGoal, setWebGoal] = useState("Build brand-new website from scratch");

  // Automation Fields
  const [automationGoal, setAutomationGoal] = useState("Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM)");
  const [currentStack, setCurrentStack] = useState("HubSpot, Slack, WhatsApp & Stripe");

  // Paid Ads Fields
  const [monthlySpend, setMonthlySpend] = useState("$10k - $30k/mo");
  const [adChannels, setAdChannels] = useState("Google & Meta Ads");

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !websiteUrl) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 110,
        spread: 75,
        origin: { y: 0.6 },
      });
    }, 800);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Light Blueprint Grid */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
          {/* Ambient gradient lights */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950 border border-sky-800 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Zero Sales Fluff · 100% Engineering &amp; Operations Audit</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Get a Free, No-BS Technical &amp; Growth Tear-Down.
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
                Whether you need a sub-second WordPress/Next.js site, hands-off n8n workflow automations, or high-ROAS paid media scaling, senior operators review your infrastructure directly.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>WordPress &amp; Next.js Speed Audit</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>n8n Workflow &amp; AI Routing Map</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Server-Side CAPI &amp; GTM Match Check</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Custom Engineering Scope in 24h</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href={tab === "web" ? "/audit?service=web" : tab === "automation" ? "/audit?service=automation" : "/audit?service=ads"}
                  className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 hover:text-sky-300 underline"
                >
                  <span>Need an in-depth 3-step technical scoping review? Open Full Audit Engine →</span>
                </Link>
              </div>
            </div>

            {/* Right Form with Service Selector Tabs */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 sm:p-8 border border-slate-800 shadow-xl backdrop-blur-md">
              {submitted ? (
                <div className="text-center py-8 space-y-4 animate-in fade-in zoom-in duration-300">
                  <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    {tab === "web"
                      ? "Website Review Queued!"
                      : tab === "automation"
                      ? "Automation Scope Queued!"
                      : "Paid Media Audit Queued!"}
                  </h3>
                  <p className="text-sm text-slate-300">
                    A Senior Operator at DeployMedia is analyzing signals for <strong className="text-white font-mono">{websiteUrl}</strong>. We will email your tailored audit within 24 hours.
                  </p>
                  <div className="pt-2">
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-sky-400 underline hover:text-sky-300 cursor-pointer"
                    >
                      Submit another project
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Category Switcher Tabs */}
                  <div>
                    <label className="block text-[11px] font-mono uppercase font-bold text-slate-400 mb-1.5">
                      Select Project Type:
                    </label>
                    <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-950 border border-slate-800">
                      <button
                        type="button"
                        onClick={() => setTab("web")}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          tab === "web"
                            ? "bg-sky-500 text-slate-950 shadow-md font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Code2 className="w-3.5 h-3.5" />
                        <span>Web Dev</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTab("automation")}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          tab === "automation"
                            ? "bg-indigo-500 text-white shadow-md font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <Cpu className="w-3.5 h-3.5" />
                        <span>Automation</span>
                      </button>

                      <button
                        type="button"
                        onClick={() => setTab("ads")}
                        className={`py-2 px-2 rounded-lg text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                          tab === "ads"
                            ? "bg-emerald-500 text-slate-950 shadow-md font-bold"
                            : "text-slate-400 hover:text-white"
                        }`}
                      >
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>Paid Ads</span>
                      </button>
                    </div>
                  </div>

                  {/* 1. Website Development Specific Questions */}
                  {tab === "web" && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Website / Desired Domain <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. acme.com or Project Name"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Target CMS / Architecture
                        </label>
                        <select
                          value={cmsChoice}
                          onChange={(e) => setCmsChoice(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-sky-500 font-mono text-xs"
                        >
                          <option value="Custom WordPress (ACF Pro / Fast)">Custom WordPress (ACF Pro / Fast &amp; Clean)</option>
                          <option value="Next.js 15 & React Web App">Next.js 15 &amp; React (Sub-second Edge Speed)</option>
                          <option value="Headless WordPress + React">Headless WordPress CMS + React</option>
                          <option value="Shopify Custom Store">Shopify Custom Theme / E-Commerce</option>
                          <option value="Speed Optimization">Speed Optimization (Fix Slow WordPress Site)</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Primary Goal
                        </label>
                        <select
                          value={webGoal}
                          onChange={(e) => setWebGoal(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-sky-500 font-mono text-xs"
                        >
                          <option value="Build brand-new website from scratch">Build brand-new website from scratch</option>
                          <option value="Speed up existing site to sub-second load">Speed up existing site to sub-second load</option>
                          <option value="Modernize design & double lead conversion">Modernize design &amp; double lead conversion</option>
                          <option value="Migrate off bloated Elementor plugins">Migrate off bloated Elementor/plugins</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* 2. Workflow Automation Specific Questions */}
                  {tab === "automation" && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Company / App URL <span className="text-indigo-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. acme.io or yourcompany.com"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Workflow to Automate
                        </label>
                        <select
                          value={automationGoal}
                          onChange={(e) => setAutomationGoal(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-indigo-500 font-mono text-xs"
                        >
                          <option value="Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM)">Inbound Lead Routing (Form ➔ AI ➔ WhatsApp/CRM)</option>
                          <option value="Two-Way CRM Sync (HubSpot / Salesforce)">Two-Way CRM Sync (HubSpot / Salesforce)</option>
                          <option value="Stripe Payments, Invoices & ERP Webhooks">Stripe Payments &amp; Invoices Webhooks</option>
                          <option value="Automated Daily Reports & Slack War Rooms">Automated Daily Reports &amp; Slack War Rooms</option>
                          <option value="Replace Expensive Zapier with Self-Hosted n8n">Replace Expensive Zapier with Self-Hosted n8n</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Current Tools in Stack
                        </label>
                        <input
                          type="text"
                          placeholder="HubSpot, Slack, WhatsApp, Stripe..."
                          value={currentStack}
                          onChange={(e) => setCurrentStack(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 font-mono text-xs"
                        />
                      </div>
                    </div>
                  )}

                  {/* 3. Paid Ads Specific Questions */}
                  {tab === "ads" && (
                    <div className="space-y-3 animate-in fade-in duration-150">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Website URL <span className="text-emerald-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. yourcompany.com"
                          value={websiteUrl}
                          onChange={(e) => setWebsiteUrl(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500 font-mono"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Monthly Paid Ad Spend
                        </label>
                        <select
                          value={monthlySpend}
                          onChange={(e) => setMonthlySpend(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono text-xs"
                        >
                          <option value="Under $5k">Under $5k/mo</option>
                          <option value="$5k - $15k">$5k - $15k/mo</option>
                          <option value="$15k - $50k">$15k - $50k/mo</option>
                          <option value="$50k - $150k">$50k - $150k/mo</option>
                          <option value="$150k+">$150k+/mo</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1">
                          Primary Channels
                        </label>
                        <select
                          value={adChannels}
                          onChange={(e) => setAdChannels(e.target.value)}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white focus:outline-none focus:border-emerald-500 font-mono text-xs"
                        >
                          <option value="Google & Meta Ads">Google Ads &amp; Meta Ads</option>
                          <option value="Google Ads Only (Search & PMax)">Google Ads Only (Search &amp; PMax)</option>
                          <option value="Meta & TikTok (DTC & E-Comm)">Meta &amp; TikTok (DTC &amp; E-Commerce)</option>
                          <option value="LinkedIn B2B (ABM Pipeline)">LinkedIn Ads (B2B SaaS / High Ticket)</option>
                        </select>
                      </div>
                    </div>
                  )}

                  {/* Shared Work Email Field */}
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1">
                      Work Email <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="founder@yourcompany.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-sky-500 font-mono"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !websiteUrl || !email}
                    className={`w-full mt-2 py-3 px-5 rounded-xl font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 ${
                      tab === "web"
                        ? "bg-sky-500 hover:bg-sky-400 text-slate-950"
                        : tab === "automation"
                        ? "bg-indigo-500 hover:bg-indigo-400 text-white"
                        : "bg-emerald-500 hover:bg-emerald-400 text-slate-950"
                    }`}
                  >
                    {loading ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        <span>Analyzing signals...</span>
                      </span>
                    ) : (
                      <>
                        <span>
                          {tab === "web"
                            ? "Get Free Website Tech Tear-Down"
                            : tab === "automation"
                            ? "Get Free Automation Architecture Map"
                            : "Get Free Paid Media ROAS Tear-Down"}
                        </span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-slate-400 text-center pt-1 font-mono">
                    🔒 Zero spam. Direct 1-on-1 review by DeployMedia Senior Operators.
                  </div>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
