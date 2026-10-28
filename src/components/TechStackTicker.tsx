"use client";

import { 
  CheckCircle2, 
  ShieldCheck,
  Award
} from "lucide-react";

export default function TechStackTicker() {
  // Stack without Tailwind (as requested)
  const stack = [
    { name: "Next.js 15", category: "App Router / Edge", color: "text-slate-900 bg-slate-100" },
    { name: "React 19", category: "Frontend Core", color: "text-sky-600 bg-sky-50" },
    { name: "TypeScript", category: "Strict Typing", color: "text-blue-600 bg-blue-50" },
    { name: "WordPress", category: "Custom & Headless", color: "text-blue-800 bg-blue-50" },
    { name: "Shopify", category: "E-Commerce", color: "text-emerald-700 bg-emerald-50" },
    { name: "n8n", category: "Self-Hosted Workflows", color: "text-rose-600 bg-rose-50" },
    { name: "Google Ads", category: "Search & PMax", color: "text-amber-600 bg-amber-50" },
    { name: "Meta Ads", category: "Advantage+ Scaling", color: "text-blue-600 bg-blue-50" },
    { name: "LinkedIn Ads", category: "B2B ABM Pipeline", color: "text-sky-800 bg-sky-50" },
    { name: "Server-side GTM", category: "First-Party Data", color: "text-indigo-600 bg-indigo-50" },
    { name: "Meta CAPI", category: "100% Match Quality", color: "text-purple-600 bg-purple-50" },
    { name: "Vercel", category: "Global Edge Deploy", color: "text-slate-900 bg-slate-100" },
    { name: "Stripe", category: "Payments & Billing", color: "text-violet-600 bg-violet-50" },
  ];

  return (
    <section className="py-14 bg-slate-950 text-white relative overflow-hidden border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-sky-400">
            Verified Agency Status &amp; Certified Platform Badges
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-white mt-1.5 font-sans tracking-tight">
            Official Media &amp; Engineering Partners
          </h2>
        </div>

        {/* The 3 Official Certified Partner Cards (Exact match to official brand specs) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-10">
          
          {/* 1. Google Partner Card */}
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-lg p-6 sm:p-7 flex items-center justify-center relative overflow-hidden group hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
            {/* Subtle graph grid background as shown in reference */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f050_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f050_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            
            <div className="relative z-10 flex items-center bg-white shadow-sm border border-slate-100 rounded-lg pl-0 pr-6 py-3.5">
              {/* Google Blue Left Bar */}
              <div className="w-2.5 self-stretch bg-[#1a73e8] rounded-l mr-4" />
              <div className="flex flex-col">
                <div className="text-xl sm:text-2xl font-bold tracking-tight leading-none flex items-center font-sans select-none">
                  <span className="text-[#4285F4]">G</span>
                  <span className="text-[#EA4335]">o</span>
                  <span className="text-[#FBBC05]">o</span>
                  <span className="text-[#4285F4]">g</span>
                  <span className="text-[#34A853]">l</span>
                  <span className="text-[#EA4335]">e</span>
                </div>
                <span className="text-sm font-semibold text-[#5f6368] tracking-normal font-sans mt-0.5 select-none">
                  Partner
                </span>
              </div>
            </div>
          </div>

          {/* 2. Meta Business Partner Card */}
          <div className="rounded-2xl bg-[#fffefb] border border-slate-200/90 shadow-lg p-6 sm:p-7 flex items-center justify-center relative overflow-hidden group hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
            <div className="flex flex-col items-center justify-center text-center select-none">
              <div className="flex items-center gap-2.5">
                {/* Official Meta Infinity Loop SVG */}
                <svg className="w-8 h-8" viewBox="0 0 100 70" fill="none">
                  <path
                    d="M26.4 15.6C16.8 15.6 9 23.4 9 33s7.8 17.4 17.4 17.4c6.2 0 11.8-3.3 14.8-8.6l4.4-7.8 4.4 7.8c3 5.3 8.6 8.6 14.8 8.6 9.6 0 17.4-7.8 17.4-17.4s-7.8-17.4-17.4-17.4c-6.2 0-11.8 3.3-14.8 8.6L45.6 29l-4.4-7.8c-3-5.3-8.6-8.6-14.8-8.6z"
                    stroke="#0081FB"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-2xl font-bold text-[#1c1e21] tracking-tight font-sans">
                  Meta
                </span>
              </div>
              <span className="text-sm font-semibold text-[#1c1e21] mt-1 font-sans tracking-tight">
                Business Partner
              </span>
            </div>
          </div>

          {/* 3. LinkedIn Marketing Partner Card */}
          <div className="rounded-2xl bg-white border border-slate-200/90 shadow-lg p-6 sm:p-7 flex items-center justify-center relative overflow-hidden group hover:shadow-2xl hover:scale-[1.01] transition-all duration-300">
            <div className="flex items-center gap-3 bg-[#f2f6f9] px-4 py-2.5 rounded-lg border border-[#dde6ed] select-none">
              {/* Official LinkedIn in square */}
              <div className="w-8 h-8 rounded bg-[#0A66C2] flex items-center justify-center text-white font-bold font-sans text-xl leading-none shadow-sm">
                in
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-xs font-bold text-[#004182] font-sans">
                  Marketing
                </span>
                <span className="text-xs font-bold text-[#004182] font-sans">
                  Partner
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Infinite scrolling ticker (Clean, no Tailwind) */}
      <div className="relative flex overflow-x-hidden pt-2 border-t border-slate-900">
        <div className="animate-marquee flex items-center gap-4 whitespace-nowrap py-2">
          {stack.concat(stack).map((item, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 shadow-sm hover:border-slate-700 transition-colors"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
              <span className="text-xs font-bold text-slate-200 font-sans">{item.name}</span>
              <span className="text-[10px] text-slate-400 bg-slate-950 px-1.5 py-0.5 rounded border border-slate-800 font-sans">
                {item.category}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
