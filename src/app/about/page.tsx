import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  Terminal, 
  Code2, 
  TrendingUp, 
  ShieldCheck, 
  Zap, 
  ArrowRight, 
  Globe2, 
  CheckCircle2, 
  Users, 
  Cpu 
} from "lucide-react";

export const metadata = {
  title: "About Us | DeployMedia",
  description: "Senior full-stack engineers and elite media buyers. DeployMedia was founded to kill agency bloat and unite high-speed code with performance paid media.",
};

export default function AboutPage() {
  const principles = [
    {
      number: "01",
      title: "Senior Operators Only",
      desc: "Zero junior account managers. Zero layers of account reps relaying messages back and forth. You speak directly with the engineer writing the Next.js code and the media buyer monitoring your Google and Meta auctions.",
    },
    {
      number: "02",
      title: "Code Speed Is An Acquisition Metric",
      desc: "Most agencies view web development as an aesthetic design exercise. We view it as a conversion weapon. Every 100ms of latency reduction directly improves your cost-per-acquisition.",
    },
    {
      number: "03",
      title: "Defensible Board-Ready Attribution",
      desc: "We don't rely on inflated in-platform reports. We build first-party server-side tracking (sGTM & Meta CAPI) that connects ad spend directly to closed-won CRM deals and bank deposits.",
    },
    {
      number: "04",
      title: "Continuous Creative & Architectural Iteration",
      desc: "Algorithms now pick the audience; creative and speed decide who wins. We run weekly creative sprints and continuous code deployments to stay ahead of auction fatigue.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-sky-200">
              <Terminal className="w-3.5 h-3.5 text-sky-600" />
              <span>DeployMedia Manifesto</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Where High-Speed Code Meets <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Elite Media Buying.
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              DeployMedia was founded to solve a massive industry flaw: software developers who don&apos;t understand acquisition economics, and media buyers who don&apos;t know how to write code. We brought both under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* The Story & Difference */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
                Traditional Agencies Are Broken By Design.
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                Traditional agencies pitch you with their founders, and then hand your accounts to a 22-year-old junior account coordinator. Meanwhile, your website is outsourced to a low-cost subcontractor who installs 65 WordPress plugins that choke your load times.
              </p>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg">
                DeployMedia operates as an elite strike team. We build high-speed Next.js and Headless WordPress platforms, deploy self-hosted n8n automations, and manage 7-figure ad budgets with direct Slack-channel access to the operators doing the work.
              </p>

              <div className="pt-2">
                <Link
                  href="/audit"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 transition-colors shadow-lg"
                >
                  <span>Experience The Operator Difference</span>
                  <ArrowRight className="w-4 h-4 text-sky-400" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-10 border border-slate-800 shadow-2xl space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-sky-400 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>The DeployMedia Standard</span>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Next.js 15 + Headless WordPress</div>
                      <div className="text-xs text-slate-400 mt-0.5">Sub-second page speeds that improve conversion rates by 30-50%.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Direct Slack Communication</div>
                      <div className="text-xs text-slate-400 mt-0.5">No tickets, no bureaucracy. Direct access to senior specialists.</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white text-sm">Server-Side Tracking Pre-Engineered</div>
                      <div className="text-xs text-slate-400 mt-0.5">Every build includes sGTM and Meta CAPI to eliminate signal loss.</div>
                    </div>
                  </div>
                </div>

                <div className="pt-2 text-xs font-mono text-slate-400 text-center">
                  Deployed across US, Europe, UAE &amp; Saudi Arabia markets.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Operating Principles */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our 4 Operating Principles
            </h2>
            <p className="mt-2 text-base text-slate-400">
              The non-negotiable rules guiding how we write code and allocate media capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((pr, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-black font-mono text-sky-500 mb-3">
                    {pr.number}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {pr.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {pr.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Work with senior operators who care about your bottom line.
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            Schedule a 30-minute scoping call to meet the team and discuss your technical or acquisition goals.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-7 py-4 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 shadow-xl"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
