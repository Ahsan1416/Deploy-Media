"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  Calculator, 
  ArrowRight, 
  TrendingUp, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  DollarSign
} from "lucide-react";

export default function ROICalculator() {
  const [monthlySpend, setMonthlySpend] = useState<number>(25000);
  const [techStack, setTechStack] = useState<"nextjs" | "wordpress" | "custom">("nextjs");

  // Calculations
  const cpaReductionPercent = techStack === "nextjs" ? 48 : techStack === "wordpress" ? 38 : 42;
  const estimatedSavedWaste = Math.round((monthlySpend * 0.28) / 100) * 100;
  const pipelineMultiplier = techStack === "nextjs" ? 4.2 : 3.8;
  const estimatedPipeline = Math.round((monthlySpend * pipelineMultiplier) / 1000) * 1000;
  const speedGain = techStack === "nextjs" ? "1.2s LCP (Next.js Speed)" : "2.0s LCP (WordPress Custom)";

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-700 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-emerald-200">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Growth Modeling</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
            Calculate What Senior Operators & Next.js Will Do For Your Pipeline
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Slide your target or current monthly budget below to preview how our engineering stack stops wasted ad clicks and lowers your acquisition cost.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-4xl mx-auto rounded-3xl bg-slate-950 text-white p-6 sm:p-10 shadow-2xl border border-slate-800 relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-semibold text-slate-300">
                    Current or Target Monthly Ad Spend
                  </label>
                  <span className="text-2xl font-black text-sky-400 font-mono">
                    ${monthlySpend.toLocaleString()}/mo
                  </span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="2500"
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                />
                <div className="flex justify-between text-[11px] font-mono text-slate-500 mt-1">
                  <span>$5,000/mo</span>
                  <span>$75,000/mo</span>
                  <span>$150,000+/mo</span>
                </div>
              </div>

              {/* Primary Tech Architecture Choice */}
              <div>
                <label className="text-sm font-semibold text-slate-300 block mb-2.5">
                  Target Frontend / CMS Architecture
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setTechStack("nextjs")}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                      techStack === "nextjs"
                        ? "bg-sky-950/80 border-sky-400 text-sky-200 shadow-md shadow-sky-950"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="font-bold">Next.js 15</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Maximum Speed & React</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTechStack("wordpress")}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                      techStack === "wordpress"
                        ? "bg-sky-950/80 border-sky-400 text-sky-200 shadow-md shadow-sky-950"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="font-bold">WordPress Headless</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Marketing Autonomy</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setTechStack("custom")}
                    className={`p-3 rounded-xl border text-xs font-semibold text-left transition-all ${
                      techStack === "custom"
                        ? "bg-sky-950/80 border-sky-400 text-sky-200 shadow-md shadow-sky-950"
                        : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <div className="font-bold">Custom Web App</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">Full-Stack SaaS</div>
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 bg-slate-900/60 p-3 rounded-xl border border-slate-800/80">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <span>
                  Includes server-side tracking, n8n automated CRM sync, and continuous creative testing.
                </span>
              </div>
            </div>

            {/* Projected Outputs Card */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl p-6 border border-slate-800 space-y-5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Estimated 90-Day Trajectory
              </div>

              <div className="space-y-4">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-xs text-slate-400">Projected Pipeline Generation</div>
                  <div className="text-3xl font-black text-white font-mono mt-1">
                    ${estimatedPipeline.toLocaleString()}+
                  </div>
                  <div className="text-[11px] text-emerald-400 flex items-center gap-1 mt-1 font-semibold">
                    <TrendingUp className="w-3 h-3" />
                    <span>Based on {pipelineMultiplier}x qualified pipeline multiple</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-sans">CPA Reduction</div>
                    <div className="text-xl font-extrabold text-emerald-400 font-sans mt-0.5">
                      -{cpaReductionPercent}%
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                    <div className="text-[11px] text-slate-400 font-sans">Wasted Spend Saved</div>
                    <div className="text-xl font-extrabold text-sky-400 font-sans mt-0.5">
                      ${estimatedSavedWaste.toLocaleString()}/mo
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 text-xs text-slate-300 font-sans">
                  <div className="text-[11px] text-slate-400 font-sans">Target Core Web Vitals:</div>
                  <div className="font-sans text-white font-bold mt-0.5">
                    {speedGain}
                  </div>
                </div>
              </div>

              <Link
                href={`/audit?spend=${monthlySpend}&stack=${techStack}`}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-colors shadow-lg"
              >
                <span>Request Account & Tech Tear-Down</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
