"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { 
  Cpu, 
  CheckCircle2, 
  ArrowRight, 
  Terminal, 
  Workflow, 
  Zap, 
  Database, 
  MessageSquare,
  ShieldCheck
} from "lucide-react";

export default function AutomationScopingForm() {
  const [step, setStep] = useState(1);
  const [companyUrl, setCompanyUrl] = useState("");
  const [workflowGoal, setWorkflowGoal] = useState("Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM)");
  const [currentTools, setCurrentTools] = useState("HubSpot, Slack, WhatsApp & Stripe");
  const [monthlyVolume, setMonthlyVolume] = useState("1,000 - 10,000 tasks/month");
  const [painPoint, setPainPoint] = useState("Manual data entry is wasting team hours");
  const [hostingPreference, setHostingPreference] = useState("DeployMedia Managed n8n Cloud");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
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
    <div id="automation-scoping-form" className="rounded-3xl bg-slate-950 text-white p-6 sm:p-10 lg:p-12 border border-slate-800 shadow-2xl relative overflow-hidden">
      {/* Ambient glowing background */}
      <div className="absolute -top-32 -right-32 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-sky-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-800/80">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/80 border border-indigo-800 text-indigo-400 text-xs font-mono font-bold tracking-wider uppercase">
          <Cpu className="w-3.5 h-3.5 text-indigo-400" />
          <span>Workflow Automation Audit · n8n Native Architecture</span>
        </div>
        {!submitted && (
          <div className="text-xs font-mono text-slate-400">
            Step {step} of 2: <span className="text-indigo-300 font-bold">{step === 1 ? "Workflows & Tool Stack" : "Volume, Infrastructure & Contact"}</span>
          </div>
        )}
      </div>

      {submitted ? (
        <div className="text-center py-10 space-y-5 animate-in fade-in zoom-in duration-300">
          <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
            <CheckCircle2 className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-extrabold text-white">
            Automation Pipeline Review Queued!
          </h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
            Thank you, <strong className="text-white">{name || "there"}</strong>. Our Senior Automation Architects are mapping the n8n topology and API connectors for <strong className="text-indigo-400 font-mono">{companyUrl}</strong>. We will email your custom workflow blueprint within 24 hours.
          </p>

          <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto text-left text-xs font-mono text-slate-300 space-y-2">
            <div className="text-indigo-400 font-bold flex items-center gap-2">
              <Terminal className="w-4 h-4" />
              <span>Workflow Pipeline Checkpoints:</span>
            </div>
            <div>• n8n Self-Hosted Node Map: <span className="text-indigo-300 font-bold">Generated</span></div>
            <div>• CRM &amp; Webhook Latency Check: <span className="text-indigo-300 font-bold">Analyzing</span></div>
            <div>• AI Agent Lead Triage Rules: <span className="text-indigo-300 font-bold">Simulating</span></div>
            <div>• Estimated Zapier Cost Savings: <span className="text-emerald-400 font-bold">Calculating ($200 - $1,500/mo)</span></div>
          </div>

          <div className="pt-4">
            <button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="text-xs text-indigo-400 underline hover:text-indigo-300 cursor-pointer"
            >
              Submit another automation workflow
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {step === 1 ? (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Company / App URL <span className="text-indigo-400">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. acme.io or yourcompany.com"
                  value={companyUrl}
                  onChange={(e) => setCompanyUrl(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  What primary workflow do you want to automate?
                </label>
                <select
                  value={workflowGoal}
                  onChange={(e) => setWorkflowGoal(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-sans focus:outline-none focus:border-indigo-500 transition-colors"
                >
                  <option value="Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM)">Inbound Lead Routing (Form ➔ AI Triage ➔ WhatsApp/CRM in &lt;30s)</option>
                  <option value="Two-Way CRM Sync (HubSpot / Salesforce / GoHighLevel)">Two-Way CRM Sync (HubSpot / Salesforce / GoHighLevel)</option>
                  <option value="Stripe Payments, Invoices & ERP Webhooks">Stripe Payments, Invoices &amp; ERP Webhooks</option>
                  <option value="Automated Daily KPI Reports & Slack War Rooms">Automated Daily KPI Reports &amp; Slack/Teams War Rooms</option>
                  <option value="Replace Expensive Zapier/Make with Self-Hosted n8n">Replace Expensive Zapier/Make with Self-Hosted n8n</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-2">
                  Which platforms/tools are in your current stack?
                </label>
                <input
                  type="text"
                  placeholder="e.g. HubSpot, Slack, WhatsApp, Stripe, Google Sheets, Postgres..."
                  value={currentTools}
                  onChange={(e) => setCurrentTools(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-sans focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <button
                type="submit"
                disabled={!companyUrl}
                className="w-full py-4 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <span>Continue to Volume &amp; Operations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ) : (
            <div className="space-y-5 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Estimated Monthly Tasks / Volume
                  </label>
                  <select
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
                  >
                    <option value="1,000 - 10,000 tasks/month">1,000 - 10,000 tasks/mo</option>
                    <option value="10,000 - 50,000 tasks/month">10,000 - 50,000 tasks/mo</option>
                    <option value="50,000 - 200,000 tasks/month">50,000 - 200,000 tasks/mo</option>
                    <option value="200,000+ tasks/month (High Scale)">200,000+ tasks/mo (High Scale)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Current Bottleneck
                  </label>
                  <select
                    value={painPoint}
                    onChange={(e) => setPainPoint(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
                  >
                    <option value="Manual data entry is wasting team hours">Manual data entry is wasting team hours</option>
                    <option value="Zapier / Make bill is way too high ($500+/mo)">Zapier / Make bill is way too high ($500+/mo)</option>
                    <option value="Leads take too long to reach sales reps">Leads take too long to reach sales reps</option>
                    <option value="Frequent API breaks and sync errors">Frequent API breaks and sync errors</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Target Infrastructure Preference
                </label>
                <select
                  value={hostingPreference}
                  onChange={(e) => setHostingPreference(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
                >
                  <option value="DeployMedia Managed n8n Cloud">DeployMedia Managed n8n Cloud (Zero Devops for you)</option>
                  <option value="Self-Hosted on Client AWS / VPS">Self-Hosted on Client AWS / DigitalOcean (100% Data Privacy)</option>
                  <option value="Hybrid / Let DeployMedia recommend">Hybrid / Let DeployMedia recommend architecture</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jordan Lee"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Work Email <span className="text-indigo-400">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jordan@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Phone / WhatsApp (Optional, for quick architectural demo)
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000 or WhatsApp"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-xs font-mono focus:outline-none focus:border-indigo-500"
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
                  className="flex-1 py-3.5 rounded-xl bg-indigo-500 hover:bg-indigo-400 text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span className="inline-flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      <span>Mapping n8n Architecture...</span>
                    </span>
                  ) : (
                    <>
                      <span>Get Free Automation Architecture Map</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center pt-1 font-mono">
                🔒 Zero spam. Direct review by DeployMedia Senior Automation Architects.
              </div>
            </div>
          )}
        </form>
      )}
    </div>
  );
}
