import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TechStackTicker from "@/components/TechStackTicker";
import InteractiveShowcase from "@/components/InteractiveShowcase";
import ROICalculator from "@/components/ROICalculator";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ReviewsAndOperators from "@/components/ReviewsAndOperators";
import ServicesMegaGrid from "@/components/ServicesMegaGrid";
import AuditCTASection from "@/components/AuditCTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-sky-500 selection:text-white">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with Live Coding Background, Terminal & Stats */}
      <HeroSection />

      {/* Tech Stack & Certified Partner Ticker */}
      <TechStackTicker />

      {/* Signature 3-Card Interactive Infrastructure Showcase */}
      <InteractiveShowcase />

      {/* Interactive Pipeline & ROI Calculator */}
      <ROICalculator />

      {/* Case Studies & Real Measurable Results */}
      <CaseStudiesSection />

      {/* Client Reviews & Senior Operator Team */}
      <ReviewsAndOperators />

      {/* The 4-Column Full Services & Markets Mega Grid (User Request) */}
      <ServicesMegaGrid />

      {/* Free Strategy & Tech Audit Conversion Engine */}
      <AuditCTASection />

      {/* Footer */}
      <Footer />
    </main>
  );
}
