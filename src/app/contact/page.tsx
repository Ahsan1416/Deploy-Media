"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import confetti from "canvas-confetti";
import { 
  Mail, 
  MapPin, 
  Phone, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Calendar, 
  Clock, 
  ShieldCheck, 
  MessageSquare,
  Terminal 
} from "lucide-react";

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [services, setServices] = useState<string[]>(["Web Development"]);
  const [budget, setBudget] = useState("$10,000 - $25,000");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (srv: string) => {
    if (services.includes(srv)) {
      setServices(services.filter(s => s !== srv));
    } else {
      setServices([...services, srv]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      confetti({
        particleCount: 130,
        spread: 80,
        origin: { y: 0.6 },
      });
    }, 900);
  };

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-16 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-3 border border-sky-200">
              <Calendar className="w-3.5 h-3.5 text-sky-600" />
              <span>30-Min Strategy Session</span>
            </div>
            <h1 className="text-4xl sm:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              Schedule a 30-min <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-blue-600">
                Strategy Session.
              </span>
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Free, no-bs, 30 minutes with a senior operator. We will review your web speed, campaign architecture, and tracking bottlenecks with zero sales pressure.
            </p>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Direct Contact Information */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl bg-slate-950 text-white p-8 sm:p-12 border border-slate-800 shadow-2xl relative">
                
                {submitted ? (
                  <div className="text-center py-12 space-y-5 animate-in fade-in zoom-in duration-300">
                    <div className="w-20 h-20 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/40">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-extrabold text-white">
                      Strategy Call Requested!
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-sky-400">{name}</strong>. A Senior Operator will review your inquiry and reply via email within 4 business hours to lock in your calendar slot.
                    </p>
                    <div className="pt-4">
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-sky-400 underline hover:text-sky-300"
                      >
                        Submit another note
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                      Project Details &amp; Objectives
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Your Full Name <span className="text-sky-400">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="Alex Morgan"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-sky-500"
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
                          className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-sky-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Current Website URL
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. company.com"
                        value={website}
                        onChange={(e) => setWebsite(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-sky-500"
                      />
                    </div>

                    {/* Services Checklist */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Services You Are Interested In:
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
                        {[
                          "Web Development (Next.js/WordPress)",
                          "Google & Meta Performance Ads",
                          "Workflow Automations (n8n)",
                          "Server-Side Tracking (sGTM)",
                          "Landing Page CRO",
                          "Full Growth Overhaul",
                        ].map((srv) => (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all ${
                              services.includes(srv)
                                ? "bg-sky-950 border-sky-400 text-sky-200"
                                : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200"
                            }`}
                          >
                            <span className="font-semibold">{srv}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Budget */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Estimated Monthly Budget or Project Scope
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white text-sm font-mono focus:outline-none focus:border-sky-500"
                      >
                        <option value="Under $5,000">Under $5,000</option>
                        <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                        <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                        <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                        <option value="$50,000+">$50,000+ (Enterprise)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Any specific challenges or goals?
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your conversion rates, traffic sources, or tech stack..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-3.5 py-3 rounded-xl bg-slate-900 border border-slate-700 text-white placeholder-slate-500 text-sm font-mono focus:outline-none focus:border-sky-500 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading || !name || !email}
                      className="w-full py-4 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                    >
                      {loading ? (
                        <span className="inline-flex items-center gap-2">
                          <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                          <span>Scheduling Session...</span>
                        </span>
                      ) : (
                        <>
                          <span>Schedule Strategy Session</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>
            </div>

            {/* Direct Operator Info Card */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
                <div className="text-xs font-mono font-bold text-sky-600 uppercase tracking-wider">
                  Direct Operator Access
                </div>

                <h3 className="text-2xl font-bold text-slate-950 tracking-tight">
                  Talk directly with senior builders.
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  We don&apos;t keep salespeople on payroll. You will talk to an operator who writes code or manages ad auctions every day.
                </p>

                <div className="space-y-4 pt-2 border-t border-slate-100">
                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-9 h-9 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 flex-shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Direct Inquiries:</div>
                      <a href="mailto:hello@deploymedia.io" className="font-semibold text-slate-900 hover:text-sky-600">
                        hello@deploymedia.io
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">WhatsApp Direct:</div>
                      <span className="font-semibold text-slate-900">
                        +1 (415) 890-DEPLOY
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-sm text-slate-700">
                    <div className="w-9 h-9 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 flex-shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Hubs &amp; Coverage:</div>
                      <span className="font-semibold text-slate-900">
                        San Francisco · Dubai · Riyadh · London
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 text-xs text-slate-500">
                  ⚡ Average reply time: <strong className="text-slate-800">Under 2 hours</strong> during market operating windows.
                </div>
              </div>

              {/* Security & Guarantee Note */}
              <div className="p-6 rounded-2xl bg-slate-950 text-white border border-slate-800 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                <div className="text-xs text-slate-300 leading-relaxed">
                  <strong className="text-white block font-semibold mb-0.5">Strict NDA &amp; Data Privacy</strong>
                  All domain signals, ad account access, and technical codebases are handled under mutual non-disclosure agreements.
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
