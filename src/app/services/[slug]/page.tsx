import { Suspense } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesMegaGrid from "@/components/ServicesMegaGrid";
import { allServicesCatalog } from "@/data/servicesData";
import { 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  TrendingUp, 
  Code2, 
  HelpCircle,
  ChevronRight,
  Layers
} from "lucide-react";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return Object.keys(allServicesCatalog).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const service = allServicesCatalog[slug];

  if (!service) {
    return {
      title: "Service | DeployMedia",
    };
  }

  return {
    title: `${service.title} | DeployMedia`,
    description: service.heroDescription,
  };
}

async function ServiceContent({ params }: PageProps) {
  const { slug } = await params;
  const service = allServicesCatalog[slug];

  if (!service) {
    notFound();
  }

  return (
    <main className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-20 bg-white border-b border-slate-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-4">
              <Link href="/" className="hover:text-slate-900">Home</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <Link href="/services" className="hover:text-slate-900">Services</Link>
              <ChevronRight className="w-3 h-3 text-slate-400" />
              <span className="text-sky-600 font-bold">{service.categoryLabel}</span>
            </div>

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-sky-100 text-sky-800 text-xs font-mono font-bold tracking-wider uppercase mb-4 border border-sky-200">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>DeployMedia · {service.title}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.1]">
              {service.heroHeadline}
            </h1>

            <p className="mt-5 text-lg sm:text-xl text-slate-600 leading-relaxed font-normal">
              {service.heroDescription}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/audit"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-slate-950 text-white font-semibold text-sm hover:bg-slate-900 transition-all shadow-xl"
              >
                <span>Request Free {service.title} Audit</span>
                <ArrowRight className="w-4 h-4 text-sky-400" />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl bg-white text-slate-900 font-semibold text-sm border-2 border-slate-200 hover:border-sky-500 transition-all shadow-sm"
              >
                <span>Book 30-min Strategy Call</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Performance Metrics */}
      <section className="py-14 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {service.metrics.map((metric, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-sky-400 font-sans tracking-tight">
                  {metric.value}
                </div>
                <div className="text-xs text-slate-400 mt-1.5 font-medium font-sans">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Deliverables & Architecture Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 tracking-tight">
              What We Deliver
            </h2>
            <p className="mt-2 text-base text-slate-600">
              Engineered deliverables with zero agency fluff. Clean execution tied directly to pipeline growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.deliverables.map((item, idx) => (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-slate-50 border border-slate-200 hover:border-sky-500/50 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold text-sky-700 uppercase mb-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    <span>Deliverable 0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DeployMedia vs Traditional Agencies */}
      <section className="py-20 bg-slate-950 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-sky-400 uppercase tracking-wider font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>The DeployMedia Standard</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Why Senior Operators Beat Traditional Agency Bureaucracy
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Traditional agencies pitch you with founders and delegate to junior coordinators. DeployMedia puts senior engineers and media buyers directly on your Slack channels.
              </p>

              <div className="space-y-3 pt-2">
                {service.whyUs.map((reason, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="p-8 rounded-3xl bg-slate-900 border border-slate-800 space-y-6">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Core Technologies Used:
                </div>
                <div className="flex flex-wrap gap-2">
                  {service.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-700 text-xs font-sans text-sky-300 font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-slate-800">
                  <div className="text-xs text-slate-400 mb-3">
                    Want to see our live execution framework?
                  </div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all"
                  >
                    <span>Schedule 30-min Strategy Call</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-slate-950">
                Frequently Asked Questions
              </h2>
            </div>

            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                  <div className="font-bold text-base text-slate-900 mb-2 flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-sky-600 flex-shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-6">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The 4-Column Mega Directory Grid to explore all other 23 services */}
      <ServicesMegaGrid />

      <Footer />
    </main>
  );
}

export default function ServiceDetailPage(props: PageProps) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white font-mono text-sm">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-sky-400 animate-ping" />
            <span>Loading DeployMedia architecture...</span>
          </div>
        </div>
      }
    >
      <ServiceContent {...props} />
    </Suspense>
  );
}
