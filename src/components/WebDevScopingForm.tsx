"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Monitor, 
  Layers, 
  Globe2, 
  Zap, 
  ShieldCheck, 
  Terminal 
} from "lucide-react";

export default function WebDevScopingForm() {
  const [step, setStep] = useState(1);
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [targetStack, setTargetStack] = useState("Custom WordPress (ACF Pro / Gutenberg / Fast)");
  const [primaryGoal, setPrimaryGoal] = useState("Build a brand-new website from scratch");
  const [pageScope, setPageScope] = useState("5 - 15 Pages (Business Site & Blog)");
  const [designStatus, setDesignStatus] = useState("Need DeployMedia to design UI/UX & develop");
  const [timeline, setTimeline] = useState("Standard (4 - 6 weeks)");
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 2) {
      setStep(2);
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 900);
  };

  return (
    <div id="web-scoping-form" className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Ambient glowing background */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-950/80 border border-sky-800 text-sky-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Code2 className="w-3.5 h-3.5 text-sky-400" />
          <span>Website Engineering Scoping · 100% Code &amp; Speed</span>
        </div>
        {!submitted && (
          <div className="text-xs font-mono text-slate-400">
            Step {step} of 2: <span className="text-sky-300 font-bold">{step === 1 ? "Technical Specs & Goals" : "Scope, Timeline & Delivery"}</span>
          </div>
        )}
      </div>

      {submitted ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Website Scope &amp; Tech Audit Queued!
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Thank you, <strong className="text-white">{name || "there"}</strong>. Our Senior Web Engineers are analyzing specifications for <strong className="text-sky-400 font-mono">{websiteUrl}</strong>. We will email your custom technical architecture plan and pricing within 24 hours.
          </p>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left text-xs font-mono text-slate-300 space-y-2">
            <div className="text-emerald-400 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Automated Diagnostics Initiated:</span>
            </div>
            <div>• Core Web Vitals &amp; Server TTFB: <span className="text-sky-300 font-bold">Benchmarking</span></div>
            <div>• WordPress / ACF Block Architecture: <span className="text-sky-300 font-bold">Configured</span></div>
            <div>• Next.js Edge Caching &amp; React 19: <span className="text-sky-300 font-bold">Planned</span></div>
            <div>• Mobile CRO &amp; Conversion Path: <span className="text-sky-300 font-bold">Auditing</span></div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-sky-400 underline hover:text-sky-300 cursor-pointer"
            >
              Submit another website project
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Current Website URL or Desired Brand Name <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. acme.com or NewBrandLaunch.com"
                  value={websiteUrl}
                  onChange={(e) => setWebsiteUrl(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-sky-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Target CMS / Engineering Stack
                </label>
                <select
                  value={targetStack}
                  onChange={(e) => setTargetStack(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="Elementor Pro (Custom Beautiful Design & Fast 2.0s)">Elementor Pro (Custom Beautiful Design &amp; Visual Editing - 2.0s Speed)</option>
                  <option value="Custom WordPress (ACF Pro / Gutenberg / Fast)">Custom WordPress (ACF Pro / Gutenberg / Fast &amp; Clean)</option>
                  <option value="Next.js 15 & React Web App">Next.js 15 &amp; React (Sub-second Edge Speed)</option>
                  <option value="Headless WordPress + Next.js Frontend">Headless WordPress CMS + Next.js Frontend</option>
                  <option value="Shopify Liquid / Hydrogen Custom Storefront">Shopify Custom Theme / Headless E-Commerce</option>
                  <option value="Speed Optimization & Core Vitals 100/100">Speed Optimization (Fix Current Slow WordPress Site)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Primary Website Objective
                </label>
                <select
                  value={primaryGoal}
                  onChange={(e) => setPrimaryGoal(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-sky-500 transition-colors"
                >
                  <option value="Build a brand-new website from scratch">Build a brand-new website from scratch</option>
                  <option value="Speed up slow existing site (Drop load time to <1s)">Speed up slow existing site (Drop load time to &lt;1s)</option>
                  <option value="Modernize design & double lead conversion rate">Modernize design &amp; double lead conversion rate</option>
                  <option value="Migrate off bloated Elementor/plugins to clean code">Migrate off bloated Elementor/plugins to clean code</option>
                  <option value="Custom customer portal, booking engine, or WooCommerce">Custom customer portal, booking engine, or WooCommerce</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={!websiteUrl}
                className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>Continue to Scope &amp; Timeline</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Estimated Page Scope
                  </label>
                  <select
                    value={pageScope}
                    onChange={(e) => setPageScope(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-sky-500"
                  >
                    <option value="1 - 5 Pages (Landing Page / Funnel)">1 - 5 Pages (Landing Page / Funnel)</option>
                    <option value="5 - 15 Pages (Business Site & Blog)">5 - 15 Pages (Business Site &amp; Blog)</option>
                    <option value="15 - 50+ Pages (Large Enterprise / Multi-Service)">15 - 50+ Pages (Large Enterprise)</option>
                    <option value="Full E-Commerce Store (Products & Custom Checkout)">Full E-Commerce Store</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Design / UI Status
                  </label>
                  <select
                    value={designStatus}
                    onChange={(e) => setDesignStatus(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-sky-500"
                  >
                    <option value="Need DeployMedia to design UI/UX & develop">Need DeployMedia to design UI/UX &amp; develop</option>
                    <option value="We have Figma designs ready to code">We have Figma designs ready to code</option>
                    <option value="Rebuild our existing site with modern layout">Rebuild existing site with modern layout</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Target Launch Timeline
                </label>
                <select
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-sky-500"
                >
                  <option value="Urgent (Within 2 - 3 weeks)">Urgent (Within 2 - 3 weeks)</option>
                  <option value="Standard (4 - 6 weeks)">Standard (4 - 6 weeks)</option>
                  <option value="Flexible / Planning Phase">Flexible / Planning Phase</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-sky-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Work Email <span className="text-sky-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Phone / WhatsApp (Optional, for quick project chat)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000 or WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-sm hover:text-white cursor-pointer"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading || !email || !name}
                  className="flex-1 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Generating Technical Scope...</span>
                    </span>
                  ) : (
                    <>
                      <span>Get Free Website Scope &amp; Tech Audit</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-1 font-mono">
                🔒 No ads, zero spam. Direct review by DeployMedia Senior Web Engineers.
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
