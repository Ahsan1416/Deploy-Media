import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import AutomationScopingForm from "@/components/AutomationScopingForm";
import { 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Terminal, 
  Zap, 
  Database, 
  MessageSquare, 
  Workflow, 
  Lock, 
  ShieldCheck, 
  Sparkles 
} from "lucide-react";

export const metadata = {
  title: "n8n Workflow Automation & AI Agents | DeployMedia",
  description: "Enterprise workflow automation built natively in n8n. Self-hosted for total data privacy, AI-agent ready from day one.",
};

export default function WorkflowAutomationPage() {
  const automationFeatures = [
    {
      title: "n8n Self-Hosted Enterprise Workflows",
      desc: "Stop paying thousands a month in Zapier/Make overage fees while leaking customer PII to third parties. We deploy and manage self-hosted n8n instances on your infrastructure with unlimited execution capacity.",
      bullets: ["Zero per-task licensing fees", "100% data sovereignty & GDPR compliance", "Direct access to internal databases & VPCs", "Visual node editor for marketing teams"],
    },
    {
      title: "AI Lead Triage & Enrichment Agents",
      desc: "When a lead fills out your Next.js form, our AI agent enriches company revenue from Apollo/Clearbit, classifies urgency, and routes them to the right account executive in Slack within 30 seconds.",
      bullets: ["Enrichment via Apollo, Hunter & Clearbit", "AI evaluation of company size & ICP match", "Routing to specialized SDRs and AEs", "Immediate instant WhatsApp & SMS booking links"],
    },
    {
      title: "Closed-Loop Offline Conversion Sync",
      desc: "The holy grail of paid media. We connect CRM stage changes (e.g. 'Demo Held', 'Contract Sent', 'Closed Won') directly back into Google and Meta Ads via server-side APIs to train their AI on real revenue.",
      bullets: ["Google Ads Offline Conversion Tracking (OCT)", "Meta CAPI Lead Stage Events", "HubSpot & Salesforce two-way webhooks", "Zero manual CSV uploads"],
    },
    {
      title: "Automated Reporting & Slack War Rooms",
      desc: "Daily automated health checks, pacing alerts, and ROAS reports delivered directly to your executive Slack or Microsoft Teams channels every morning at 8:00 AM.",
      bullets: ["Daily spend pacing alerts", "Anomaly detection on CPA spikes", "Executive summary PDF generation", "Instant error notifications"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 -right-36 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-100 text-indigo-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-indigo-200">
              <Cpu className="w-3.5 h-3.5 text-indigo-600" />
              <span>Enterprise Automations · n8n Native</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Workflow Automations &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-600">
                AI Revenue Pipelines.
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Eliminate the manual grunt work between your website, ad accounts, and CRM. DeployMedia engineers self-hosted n8n workflows and AI agents that triage leads in seconds and feed conversion signal back to ad platforms.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#automation-scoping-form"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 transition-all shadow-xl"
              >
                <span>Automate Your Workflows</span>
                <ArrowRight className="w-4 h-4 text-indigo-400" />
              </a>

              <Link
                href="/audit?service=automation"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-sm border-2 border-slate-200 hover:border-indigo-500 transition-all"
              >
                <span>Audit Your Workflows</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Automation Features */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              What We Build In n8n &amp; AI
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Battle-tested automated workflows that save your team dozens of hours every week while maximizing lead velocity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {automationFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-indigo-400 text-xs font-mono font-bold uppercase mb-3">
                    <Workflow className="w-4 h-4" />
                    <span>Pipeline {idx + 1}</span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {feat.title}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {feat.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5 pt-4 border-t border-slate-800">
                    {feat.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-indigo-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-indigo-400 hover:text-indigo-300"
                  >
                    <span>Deploy this workflow →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Workflow Automation Scoping Form (Purely Automation Questions) */}
      <section className="py-20 bg-slate-900 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950 border border-indigo-800 text-indigo-400 text-xs font-mono font-bold tracking-wider uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>n8n Architecture Diagnostics</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Audit &amp; Scope Your Automation Pipeline
            </h2>
            <p className="mt-3 text-slate-400 text-sm sm:text-base">
              Specify your tools, bottlenecks, and volume below to receive an architectural n8n workflow blueprint and integration proposal within 24 hours.
            </p>
          </div>

          <AutomationScopingForm />
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Ready to stop wasting hours on manual lead copying?
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Let DeployMedia set up a self-hosted n8n instance and build your end-to-end revenue automation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-4 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 shadow-xl"
            >
              Book Automation Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
