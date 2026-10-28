import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { 
  TrendingUp, 
  ArrowRight, 
  CheckCircle2, 
  DollarSign, 
  Flame, 
  Sparkles, 
  Target, 
  BarChart2, 
  Search, 
  Layers, 
  Globe 
} from "lucide-react";

export const metadata = {
  title: "Performance Paid Advertising | DeployMedia",
  description: "Senior operators running Google, Meta, LinkedIn, and Microsoft Ads engineered for CPA, pipeline, and closed-won revenue.",
};

export default function PerformanceAdsPage() {
  const adChannels = [
    {
      name: "Google Ads (Search & Performance Max)",
      badge: "Highest Commercial Intent",
      desc: "We isolate search queries with ruthless discipline. No wasted budget on junk queries, loose broad matches, or automated bid traps. Every dollar goes to users searching with urgent commercial intent.",
      points: [
        "Single-theme ad groups & exact query harvesting",
        "Performance Max with strictly segmented asset groups",
        "Negative keyword libraries built over $40M+ in spend",
        "Offline conversion synchronization for lead quality feedback",
      ],
    },
    {
      name: "Meta Ads (Facebook & Instagram Advantage+)",
      badge: "Creative-Led Scale",
      desc: "The algorithm decides the audience; your creative decides if you win. We run weekly creative sprints testing 5 to 10 new hooks, static concepts, and short-form video variations to feed Advantage+ broad scaling.",
      points: [
        "Consolidation into 2-3 high-liquidity Advantage+ campaigns",
        "Weekly hook & angle testing framework",
        "First-party Conversions API (CAPI) signal integration",
        "Direct-response visual & script production",
      ],
    },
    {
      name: "LinkedIn Ads (B2B Account-Based Marketing)",
      badge: "Enterprise Pipeline",
      desc: "Stop paying $150 per form fill for unqualified students. We build ABM-grade targeting lists synced to your ICP and CRM, targeting decision-makers with high-intent demo offers.",
      points: [
        "Matched audience lists from Apollo, ZoomInfo & CRM",
        "Document ads and high-converting video carousels",
        "Demo request optimization rather than native lead forms",
        "Closed-won revenue attribution in CRM",
      ],
    },
    {
      name: "Microsoft / Bing Advertising",
      badge: "Underpriced Desktop Buyers",
      desc: "Capture the older, higher-income, enterprise desktop buyers your competitors ignore. Bing frequently delivers 30-50% lower CPAs for B2B SaaS and high-ticket service contracts.",
      points: [
        "Direct search parity with Google Ads",
        "LinkedIn demographic targeting overlay inside Bing",
        "Lower cost-per-click with high purchasing power",
        "Enterprise PC & executive desktop dominance",
      ],
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/3 -right-36 w-96 h-96 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 text-emerald-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-emerald-200">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
              <span>Performance Media Buying · Senior Operators</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Paid Advertising <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-sky-600">
                Engineered for Pipeline.
              </span>
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              No vanity impressions. No agency theater. Senior media buyers running Google, Meta, LinkedIn, and Microsoft Ads for B2B SaaS and DTC brands who care about CPA and closed-won revenue.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 transition-all shadow-xl"
              >
                <span>Request Account Audit</span>
                <ArrowRight className="w-4 h-4 text-emerald-400" />
              </Link>

              <Link
                href="/case-studies"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-semibold text-sm border-2 border-slate-200 hover:border-emerald-500 transition-all"
              >
                <span>View ROAS Proof Points</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Channels Grid */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Auction Scaling Disciplines
            </h2>
            <p className="mt-2 text-base text-slate-400">
              Every platform has its own mathematical rules. We master the auction physics of each one.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {adChannels.map((channel, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold px-2.5 py-1 rounded bg-slate-800 text-emerald-400 border border-slate-700">
                      {channel.badge}
                    </span>
                    <Target className="w-4 h-4 text-slate-600" />
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    {channel.name}
                  </h3>

                  <p className="mt-3 text-sm text-slate-400 leading-relaxed">
                    {channel.desc}
                  </p>

                  <ul className="mt-6 space-y-2.5 pt-4 border-t border-slate-800">
                    {channel.points.map((pt, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-800/80">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300"
                  >
                    <span>Scale {channel.name.split(" ")[0]} Campaigns →</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950">
            Find out how much ad spend you are currently bleeding.
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            We will conduct a comprehensive audit of your search queries, bidding strategies, and campaign structures. Free of charge, no sales pitch.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/audit"
              className="px-7 py-4 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 shadow-xl"
            >
              Get Free Account Audit
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
