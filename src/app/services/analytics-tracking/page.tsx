import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  BarChart3, 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Database, 
  Layers, 
  Activity, 
  Lock, 
  Terminal 
} from "lucide-react";

export const metadata = {
  title: "Server-Side Tracking & Full-Funnel Analytics | DeployMedia",
  description: "Server-side Google Tag Manager (sGTM), Meta CAPI, GA4 BigQuery attribution, and CRO audits built to recover lost conversion signals.",
};

export default function AnalyticsTrackingPage() {
  const trackingFeatures = [
    {
      title: "Server-Side Google Tag Manager (sGTM)",
      desc: "Move your tracking pixels off the user's browser and into a secure, first-party cloud container. Bypasses ad blockers, eliminates page slowdowns, and secures customer data.",
      bullets: ["First-party cookie extension (7 days to 2 years)", "Zero client-side script bloat or lag", "Full compliance with GDPR & privacy standards", "Custom domain tagging (e.g. data.yourdomain.com)"],
    },
    {
      title: "Meta Conversions API (CAPI) 9.0+ EMQ",
      desc: "Restore full signal fidelity on Facebook and Instagram. We pass hashed email, phone, IP, and click IDs directly from your server to Meta's servers, maximizing Event Match Quality.",
      bullets: ["Achieve 9.0+ Event Match Quality score", "De-duplicate browser and server events", "Recover up to 35% of lost purchase and lead data", "Feed Meta's AI algorithm for lower CPA"],
    },
    {
      title: "GA4 BigQuery Event Export & Custom Attribution",
      desc: "Do not rely on standard GA4 thresholding and sampling. We stream raw event-level data directly into Google BigQuery to unlock true multi-touch attribution and lifetime value cohorts.",
      bullets: ["Raw un-sampled event streaming", "First-click, last-click, and Markov data-driven attribution", "LTV cohort analysis by marketing channel", "Automated dashboards in Looker Studio"],
    },
    {
      title: "Conversion Rate Optimization (CRO) Audits",
      desc: "Sending expensive paid traffic to a leaky bucket is the fastest way to lose money. We conduct rigorous heatmap, session recording, and form abandonment audits to find where users drop off.",
      bullets: ["Form field friction analysis", "Mobile checkout friction audits", "Copywriting & value proposition alignment", "Statistical A/B testing roadmaps"],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 -right-36 w-96 h-96 bg-amber-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-100 text-amber-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-amber-200">
              <BarChart3 className="w-3.5 h-3.5 text-amber-600" />
              <span>Full-Funnel Analytics &amp; Server-Side Tracking</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Tracking &amp; Attribution <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-rose-600">
                You Can Defend in a Board Meeting.
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              Browser cookies are dead, ad blockers are ubiquitous, and third-party attribution is broken. DeployMedia builds resilient first-party server-side tracking pipelines that give your ad platforms pristine conversion signals.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 transition-all shadow-xl"
              >
                <span>Audit Your Tracking Health</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link
                href="/services/web-development"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-sm border-2 border-slate-200 hover:border-amber-500 transition-all"
              >
                <span>Next.js Integration</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of Features */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Data Infrastructure Deliverables
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Never second-guess whether your Google Ads or Meta Ads are actually driving revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {trackingFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-mono font-bold uppercase mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Signal Pillar {idx + 1}</span>
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
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 hover:text-amber-300"
                  >
                    <span>Implement {feat.title.split(" ")[0]} →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Stop losing 30% of your conversion data to ad blockers.
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            We will audit your Google Tag Manager container, Meta pixel, and CRM attribution to reveal signal gaps.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/audit"
              className="px-7 py-4 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 shadow-xl"
            >
              Get Free Tracking Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
