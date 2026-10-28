"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "canvas-confetti";
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Terminal, 
  Zap, 
  TrendingUp, 
  Code2, 
  Cpu, 
  BarChart3,
  Monitor,
  Workflow,
  Globe2,
  Layers,
  Store
} from "lucide-react";

type AuditCategory = "web" | "automation" | "ads" | "full";

function AuditFormContent() {
  const searchParams = useSearchParams();
  const initialType = searchParams.get("type") || searchParams.get("service") || "";

  const [category, setCategory] = useState<AuditCategory>("web");
  const [step, setStep] = useState(1);

  // Auto-select category based on URL param
  useEffect(() => {
    if (initialType.includes("auto") || initialType.includes("n8n")) {
      setCategory("automation");
    } else if (initialType.includes("ad") || initialType.includes("media") || initialType.includes("google") || initialType.includes("meta")) {
      setCategory("ads");
    } else if (initialType.includes("full") || initialType.includes("scale")) {
      setCategory("full");
    } else {
      setCategory("web");
    }
  }, [initialType]);

  // Shared Fields
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  // 1. Website Development Specific Fields
  const [webType, setWebType] = useState("Custom WordPress (ACF Pro / Gutenberg / Fast)");
  const [webGoal, setWebGoal] = useState("Build a brand-new website from scratch");
  const [webScope, setWebScope] = useState("5 - 15 Pages (Business Site & Blog)");
  const [webDesignStatus, setWebDesignStatus] = useState("Need DeployMedia to design UI/UX & develop");
  const [webTimeline, setWebTimeline] = useState("Standard (4 - 6 weeks)");

  // 2. Workflow Automation Specific Fields
  const [automationGoal, setAutomationGoal] = useState("Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM)");
  const [automationCurrentTools, setAutomationCurrentTools] = useState("HubSpot, Slack, WhatsApp & Stripe");
  const [automationVolume, setAutomationVolume] = useState("1,000 - 10,000 tasks/month");
  const [automationState, setAutomationState] = useState("Currently manual (wasting staff hours)");

  // 3. Paid Ads Specific Fields
  const [adSpend, setAdSpend] = useState("$10,000 - $30,000/mo");
  const [adChannels, setAdChannels] = useState("Google Ads & Meta Ads");
  const [adBottleneck, setAdBottleneck] = useState("High CPA / need lower acquisition cost");

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        confetti({
          particleCount: 130,
          spread: 80,
          origin: { y: 0.6 },
        });
      }, 1000);
    }
  };

  return (
    <div className="rounded-3xl bg-slate-950 text-white p-6 sm:p-12 border border-slate-800 shadow-2xl relative">
      {/* Ambient glow */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Audit Category Selector Tabs */}
      {!submitted && (
        <div className="mb-8">
          <label className="block text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-2.5">
            Select Scoping Category:
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            <button
              type="button"
              onClick={() => { setCategory("web"); setStep(1); }}
              className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                category === "web"
                  ? "bg-sky-500/20 border-sky-400 text-sky-200 shadow-md shadow-sky-950"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Monitor className="w-4 h-4 text-sky-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold">Website Dev</div>
                <div className="text-[10px] text-slate-400">WordPress &amp; React</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => { setCategory("automation"); setStep(1); }}
              className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                category === "automation"
                  ? "bg-indigo-500/20 border-indigo-400 text-indigo-200 shadow-md shadow-indigo-950"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Cpu className="w-4 h-4 text-indigo-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold">Automations</div>
                <div className="text-[10px] text-slate-400">n8n &amp; AI Agents</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => { setCategory("ads"); setStep(1); }}
              className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                category === "ads"
                  ? "bg-emerald-500/20 border-emerald-400 text-emerald-200 shadow-md shadow-emerald-950"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              <TrendingUp className="w-4 h-4 text-emerald-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold">Paid Ads</div>
                <div className="text-[10px] text-slate-400">Google &amp; Meta ROAS</div>
              </div>
            </button>

            <button
              type="button"
              onClick={() => { setCategory("full"); setStep(1); }}
              className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                category === "full"
                  ? "bg-purple-500/20 border-purple-400 text-purple-200 shadow-md shadow-purple-950"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
              }`}
            >
              <Zap className="w-4 h-4 text-purple-400 flex-shrink-0" />
              <div>
                <div className="text-xs font-bold">Full Growth</div>
                <div className="text-[10px] text-slate-400">Code + Media + Ops</div>
              </div>
            </button>
          </div>

          {/* Dynamic Category Context Banner */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 flex items-center gap-2.5">
            <Sparkles className="w-4 h-4 text-sky-400 flex-shrink-0" />
            <span>
              {category === "web" && "Website Development Scoping Active: Questions are strictly focused on CMS (WordPress / Next.js), speed, and architecture (zero ad spend questions)."}
              {category === "automation" && "Workflow Automations Scoping Active: Questions are strictly focused on n8n, AI lead triage, and CRM webhooks (zero ad spend questions)."}
              {category === "ads" && "Paid Media Audit Active: Questions focus on Google & Meta Ads, monthly ad spend, and ROAS bottlenecks."}
              {category === "full" && "Full Growth Stack Scoping: Comprehensive evaluation across web architecture, n8n automations, and media buying."}
            </span>
          </div>
        </div>
      )}

      {/* Progress Bar */}
      {!submitted && (
        <div className="mb-8">
          <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
            <span>Step {step} of 3</span>
            <span>
              {step === 1
                ? category === "web"
                  ? "Website Specs & Goals"
                  : category === "automation"
                  ? "Workflows & Tools"
                  : "Campaign & Spend"
                : step === 2
                ? category === "web"
                  ? "Scope & Timeline"
                  : category === "automation"
                  ? "Volume & Operations"
                  : "Bottlenecks & Tracking"
                : "Contact & Scoping Delivery"}
            </span>
          </div>
          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-300 ${
                category === "web"
                  ? "bg-sky-400"
                  : category === "automation"
                  ? "bg-indigo-400"
                  : category === "ads"
                  ? "bg-emerald-400"
                  : "bg-purple-400"
              }`}
              style={{ width: `${(step / 3) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Submitted State */}
      {submitted ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            {category === "web"
              ? "Website Architecture Audit Queued!"
              : category === "automation"
              ? "Automation Pipeline Review Queued!"
              : "Paid Media Tear-Down Queued!"}
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Thank you, <strong className="text-white">{name}</strong>. A Senior Operator at DeployMedia is reviewing your specifications for <strong className="text-sky-400 font-mono">{websiteUrl}</strong>. We will email your custom tear-down and scope within 24 hours.
          </p>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left text-xs font-mono text-slate-300 space-y-2">
            <div className="text-emerald-400 font-bold">✓ Diagnostic Pipeline Status:</div>
            {category === "web" && (
              <>
                <div>• Core Web Vitals &amp; TTFB: <span className="text-sky-300">Analyzing</span></div>
                <div>• WordPress / Codebase Bloat Check: <span className="text-sky-300">Queued</span></div>
                <div>• Mobile UX &amp; CRO Friction Points: <span className="text-sky-300">Evaluating</span></div>
              </>
            )}
            {category === "automation" && (
              <>
                <div>• n8n Self-Hosted Workflow Topology: <span className="text-indigo-300">Scoping</span></div>
                <div>• CRM &amp; Lead Routing Latency: <span className="text-indigo-300">Testing</span></div>
                <div>• AI Agent Data Enrichment Model: <span className="text-indigo-300">Prepared</span></div>
              </>
            )}
            {(category === "ads" || category === "full") && (
              <>
                <div>• Google &amp; Meta Auction Efficiency: <span className="text-emerald-300">Active</span></div>
                <div>• Server-Side GTM &amp; CAPI Signal Match: <span className="text-emerald-300">Queued</span></div>
                <div>• Wasted Keyword Spend Calculation: <span className="text-emerald-300">Running</span></div>
              </>
            )}
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-sky-400 underline hover:text-sky-300"
            >
              Submit another project or audit
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleNext} className="space-y-6">
          
          {/* =========================================================================
              CATEGORY 1: WEBSITE DEVELOPMENT (ONLY WEBSITE QUESTIONS)
             ========================================================================= */}
          {category === "web" && (
            <>
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Your Current Website or Desired Brand Domain <span className="text-sky-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. yourcompany.com (or project name)"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-sky-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Target CMS / Web Architecture
                    </label>
                    <select
                      value={webType}
                      onChange={(e) => setWebType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-sky-500"
                    >
                      <option value="Custom WordPress (ACF Pro / Gutenberg / Fast)">Custom WordPress (ACF Pro / Gutenberg / Fast)</option>
                      <option value="Next.js 15 & React Web App">Next.js 15 &amp; React High-Speed Web App</option>
                      <option value="Headless WordPress & React Frontend">Headless WordPress &amp; React Frontend</option>
                      <option value="Shopify Store (KSA, UAE, Global)">Shopify Store (KSA, UAE or Global)</option>
                      <option value="Website Redesign & Speed Optimization">Website Redesign &amp; Speed Optimization (Core Vitals 100/100)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      What is the primary goal of this website project?
                    </label>
                    <select
                      value={webGoal}
                      onChange={(e) => setWebGoal(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-sky-500"
                    >
                      <option value="Build a brand-new website from scratch">Build a brand-new website from scratch</option>
                      <option value="Speed up existing slow site (Drop load time to <1s)">Speed up existing slow site (Drop load time to &lt;1s)</option>
                      <option value="Modernize design & double lead conversion rate">Modernize design &amp; double lead conversion rate</option>
                      <option value="Migrate from bloated Elementor/plugins to clean code">Migrate from bloated Elementor/plugins to clean code</option>
                      <option value="Add custom portal, booking, or WooCommerce features">Add custom portal, booking, or WooCommerce features</option>
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
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Estimated Page Count &amp; Scope
                    </label>
                    <select
                      value={webScope}
                      onChange={(e) => setWebScope(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-sky-500"
                    >
                      <option value="1 - 5 Pages (Landing Page / High-converting Funnel)">1 - 5 Pages (Landing Page / High-converting Funnel)</option>
                      <option value="5 - 15 Pages (Business Site & Blog)">5 - 15 Pages (Business Site &amp; Blog)</option>
                      <option value="15 - 50+ Pages (Large Enterprise / Multi-Service)">15 - 50+ Pages (Large Enterprise / Multi-Service)</option>
                      <option value="Full E-Commerce Store (Products & Custom Checkout)">Full E-Commerce Store (Products &amp; Custom Checkout)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Design &amp; UI/UX Status
                    </label>
                    <select
                      value={webDesignStatus}
                      onChange={(e) => setWebDesignStatus(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-sky-500"
                    >
                      <option value="Need DeployMedia to design UI/UX & develop">Need DeployMedia to design UI/UX &amp; develop</option>
                      <option value="We have Figma designs ready to code">We have Figma designs ready to code</option>
                      <option value="Rebuild our existing site with clean, modern layout">Rebuild our existing site with clean, modern layout</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Target Launch Timeline
                    </label>
                    <select
                      value={webTimeline}
                      onChange={(e) => setWebTimeline(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-sky-500"
                    >
                      <option value="Urgent (Within 2 - 3 weeks)">Urgent (Within 2 - 3 weeks)</option>
                      <option value="Standard (4 - 6 weeks)">Standard (4 - 6 weeks)</option>
                      <option value="Flexible / Planning Phase">Flexible / Planning Phase</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-sm hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* =========================================================================
              CATEGORY 2: WORKFLOW AUTOMATION (ONLY AUTOMATION QUESTIONS)
             ========================================================================= */}
          {category === "automation" && (
            <>
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Company / Web App URL <span className="text-indigo-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. acme.io or yourcompany.com"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      What workflows do you want to automate?
                    </label>
                    <select
                      value={automationGoal}
                      onChange={(e) => setAutomationGoal(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM)">Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM)</option>
                      <option value="CRM Two-Way Sync (HubSpot / Salesforce / GoHighLevel)">CRM Two-Way Sync (HubSpot / Salesforce / GoHighLevel)</option>
                      <option value="Stripe Payment, Invoicing & Database Webhooks">Stripe Payment, Invoicing &amp; Database Webhooks</option>
                      <option value="Automated Daily Reporting & Slack War Rooms">Automated Daily Reporting &amp; Slack War Rooms</option>
                      <option value="Replace Expensive Zapier/Make with Self-Hosted n8n">Replace Expensive Zapier/Make with Self-Hosted n8n</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Which platforms/tools are in your current stack?
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. HubSpot, Slack, WhatsApp, Stripe, Sheets, Postgres..."
                      value={automationCurrentTools}
                      onChange={(e) => setAutomationCurrentTools(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-indigo-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={!websiteUrl}
                    className="w-full py-4 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>Continue to Automation Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Estimated Monthly Execution Volume / Leads
                    </label>
                    <select
                      value={automationVolume}
                      onChange={(e) => setAutomationVolume(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Under 1,000 tasks/month">Under 1,000 tasks/month</option>
                      <option value="1,000 - 10,000 tasks/month">1,000 - 10,000 tasks/month</option>
                      <option value="10,000 - 50,000 tasks/month">10,000 - 50,000 tasks/month</option>
                      <option value="50,000+ enterprise volume">50,000+ tasks/month (Enterprise Volume)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Current Automation Setup
                    </label>
                    <select
                      value={automationState}
                      onChange={(e) => setAutomationState(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-indigo-500"
                    >
                      <option value="Currently manual (wasting staff hours)">Currently manual (wasting staff hours)</option>
                      <option value="We use Zapier / Make (too expensive or hitting limits)">We use Zapier / Make (too expensive or hitting limits)</option>
                      <option value="Custom Python / Node scripts that keep breaking">Custom Python / Node scripts that keep breaking</option>
                      <option value="Starting completely fresh with n8n">Starting completely fresh with n8n &amp; AI</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-sm hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* =========================================================================
              CATEGORY 3: PAID ADS (ADS QUESTIONS)
             ========================================================================= */}
          {category === "ads" && (
            <>
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Landing Page / Website URL <span className="text-emerald-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. acme.com"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-emerald-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Monthly Paid Ad Spend
                    </label>
                    <select
                      value={adSpend}
                      onChange={(e) => setAdSpend(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Under $5k/mo">Under $5k/mo</option>
                      <option value="$5,000 - $10,000/mo">$5,000 - $10,000/mo</option>
                      <option value="$10,000 - $30,000/mo">$10,000 - $30,000/mo</option>
                      <option value="$30,000 - $75,000/mo">$30,000 - $75,000/mo</option>
                      <option value="$75,000 - $150,000/mo">$75,000 - $150,000/mo</option>
                      <option value="$150,000+/mo">$150,000+/mo (Enterprise Scale)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Primary Ad Channels
                    </label>
                    <select
                      value={adChannels}
                      onChange={(e) => setAdChannels(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-emerald-500"
                    >
                      <option value="Google Ads (Search & PMax)">Google Ads (Search &amp; PMax)</option>
                      <option value="Meta Ads (Facebook & Instagram)">Meta Ads (Facebook &amp; Instagram)</option>
                      <option value="Google Ads & Meta Ads Combined">Google Ads &amp; Meta Ads Combined</option>
                      <option value="LinkedIn Ads (B2B ABM)">LinkedIn Ads (B2B ABM)</option>
                      <option value="Microsoft / Apple Search / Multi-Channel">Microsoft / Apple Search / Multi-Channel</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={!websiteUrl}
                    className="w-full py-4 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>Continue to Campaign Diagnosis</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Main Paid Advertising Bottleneck
                    </label>
                    <select
                      value={adBottleneck}
                      onChange={(e) => setAdBottleneck(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-emerald-500"
                    >
                      <option value="High CPA / need lower acquisition cost">High CPA / need lower acquisition cost</option>
                      <option value="Stuck scaling spend without losing ROAS">Stuck scaling spend without losing ROAS</option>
                      <option value="Broken tracking / iOS 14.5+ attribution loss">Broken tracking / iOS 14.5+ attribution loss</option>
                      <option value="Creative fatigue / need weekly ad testing engine">Creative fatigue / need weekly ad testing engine</option>
                      <option value="Scaling in Saudi Arabia / UAE / GCC market">Scaling in Saudi Arabia / UAE / GCC market</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-sm hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* =========================================================================
              CATEGORY 4: FULL-STACK GROWTH (HYBRID)
             ========================================================================= */}
          {category === "full" && (
            <>
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Website / App URL <span className="text-purple-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. acme.com"
                      value={websiteUrl}
                      onChange={(e) => setWebsiteUrl(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Current Tech &amp; CMS Stack
                    </label>
                    <select
                      value={webType}
                      onChange={(e) => setWebType(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-purple-500"
                    >
                      <option value="WordPress / Elementor">WordPress (Elementor / Plugins)</option>
                      <option value="Custom WordPress & WooCommerce">Custom WordPress &amp; WooCommerce</option>
                      <option value="Next.js / React Web App">Next.js / React Web App</option>
                      <option value="Shopify Store">Shopify Store</option>
                      <option value="Custom Legacy Tech">Custom Legacy Tech</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      Monthly Paid Ad Spend
                    </label>
                    <select
                      value={adSpend}
                      onChange={(e) => setAdSpend(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-purple-500"
                    >
                      <option value="Under $5k/mo">Under $5k/mo</option>
                      <option value="$5k - $25k/mo">$5k - $25k/mo</option>
                      <option value="$25k - $100k/mo">$25k - $100k/mo</option>
                      <option value="$100k+/mo">$100k+/mo</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={!websiteUrl}
                    className="w-full py-4 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    <span>Continue to Full Audit Scoping</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-5 animate-in fade-in duration-200">
                  <div>
                    <label className="block text-sm font-semibold text-slate-200 mb-2">
                      What is your highest priority across Code &amp; Media?
                    </label>
                    <select
                      value={webGoal}
                      onChange={(e) => setWebGoal(e.target.value)}
                      className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-purple-500"
                    >
                      <option value="Full Rebuild: Fast WordPress/React + Scaled Ads + n8n">Full Rebuild: Fast WordPress/React + Scaled Ads + n8n</option>
                      <option value="Fix Leaky Funnel: Landing Pages + Server Tracking">Fix Leaky Funnel: Landing Pages + Server Tracking</option>
                      <option value="SaaS Growth: High-intent Demo Pipeline & CRM sync">SaaS Growth: High-intent Demo Pipeline &amp; CRM sync</option>
                    </select>
                  </div>

                  <div className="flex gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-sm hover:text-white"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3.5 rounded-xl bg-purple-500 hover:bg-purple-400 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Contact Info</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </>
          )}

          {/* =========================================================================
              STEP 3: CONTACT & SUBMISSION (UNIVERSAL)
             ========================================================================= */}
          {step === 3 && (
            <div className="space-y-4 animate-in fade-in duration-200">
              <div className="text-sm font-bold text-white border-b border-slate-800 pb-2">
                Where Should We Send Your Custom Audit &amp; Scoping Roadmap?
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  Your Full Name <span className="text-sky-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  Work Email <span className="text-sky-400">*</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@yourcompany.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  WhatsApp / Direct Phone (Optional for instant notifications)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-sky-500"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-1">
                  Any specific features or notes for our Senior Operators? (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Specific requirements, design preferences, or bottlenecks..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-sky-500 resize-none"
                />
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-5 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-slate-300 font-semibold text-sm hover:text-white"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={loading || !email || !name}
                  className="flex-1 py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                      <span>Generating Custom Audit...</span>
                    </span>
                  ) : (
                    <>
                      <span>Get Free Custom Audit &amp; Roadmap</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-2">
                🔒 Zero spam. No salespeople. Direct 1-on-1 review by DeployMedia Senior Operators.
              </div>
            </div>
          )}

        </form>
      )}

    </div>
  );
}

export default function AuditPage() {
  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-sky-200">
            <Sparkles className="w-3.5 h-3.5 text-sky-600" />
            <span>Tailored For Your Exact Project Needs</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
            Free Project &amp; Performance Audit.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Choose your project focus below. Whether you need a high-speed WordPress/React website, n8n workflow automations, or paid ad scaling, get a tailored review from senior operators.
          </p>
        </div>
      </section>

      {/* Dynamic Form Container wrapped in Suspense for Next.js 16 */}
      <section className="py-20 relative">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <Suspense fallback={<div className="p-12 text-center text-slate-400">Loading audit engine...</div>}>
            <AuditFormContent />
          </Suspense>
        </div>
      </section>

      <Footer />
    </main>
  );
}
