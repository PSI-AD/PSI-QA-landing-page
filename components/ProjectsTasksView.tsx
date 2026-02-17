import React from 'react';
import {
  DetailedTicketTable,
  FeatureBentoGrid,
  ROIImpactStrip,
  StrategyGlassDashboard,
  CodePipelineVisual,
  DeploymentOptimizationVisual,
  GoogleProductionBento,
} from './Mockups';
import ScrollReveal from './ScrollReveal';
import { ArrowRight, Activity, ShieldCheck, Zap } from 'lucide-react';

const DASHBOARD_URL = "https://psi-qa.web.app/dashboard";

const ProjectsTasksView: React.FC = () => {
  return (
    <div id="projects" className="transition-colors duration-500 bg-transparent">

      {/* 1. HERO SECTION - (LIGHT / GRADIENT) */}
      <section className="relative pt-12 md:pt-24 pb-20 md:pb-32 px-6 md:px-8 overflow-hidden bg-white dark:bg-[#0F111A] min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,_#6161ff10,_transparent_40%)]" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 text-left w-full">
          <div className="lg:w-1/2 flex flex-col justify-center">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 bg-[#6161ff]/10 border border-[#6161ff]/20 px-5 py-2 rounded-full text-[#6161ff] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-8 w-fit">
                <Activity size={14} /> LIVE AUDIT PROTOCOL ACTIVE
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 md:mb-8 tracking-tighter leading-[1.1] text-gray-900 dark:text-white">
                Ship Faster with <br />
                <span className="text-[#6161ff]">Extreme Precision.</span>
              </h1>
              <p className="text-base md:text-xl text-gray-600 dark:text-gray-400 mb-10 md:mb-12 max-w-xl font-medium leading-relaxed italic">
                The specialized high-precision ecosystem for automated regression and enterprise audit operations.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <a href={DASHBOARD_URL} className="w-full sm:w-auto bg-[#6161ff] text-white px-10 md:px-12 py-4 md:py-5 rounded-2xl font-black text-base md:text-lg hover:scale-105 transition-all shadow-2xl shadow-[#6161ff]/30 text-center">
                  Generate Report
                </a>
                <a href={DASHBOARD_URL} className="flex items-center gap-3 font-black text-base md:text-lg text-gray-900 dark:text-white hover:text-[#6161ff] transition-colors group">
                  Audit History <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center items-center">
            <ScrollReveal delay={400}>
              <StrategyGlassDashboard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. FEATURE BENTO GRID (DARK / GRAY) */}
      <section id="features" className="py-24 md:py-44 px-6 md:px-8 bg-gray-50 dark:bg-[#0B0C14] border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-left">
            <ScrollReveal>
              <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 leading-tight text-gray-900 dark:text-white">Zero-Bug Release <br />Architecture.</h2>
              <p className="text-gray-600 dark:text-gray-400 font-medium text-lg md:text-xl italic max-w-xl">Enterprise-grade tooling designed for highest-precision operations.</p>
            </ScrollReveal>
          </div>
          <FeatureBentoGrid />
        </div>
      </section>

      {/* 3. GOOGLE PRODUCTION SUITE - (WHITE) */}
      <section className="py-24 md:py-44 px-6 md:px-8 bg-white dark:bg-[#0F111A] relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:mb-24 text-center">
            <ScrollReveal>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-gray-900 dark:text-white">Powered by Google.</h2>
              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium italic max-w-2xl mx-auto">Full-stack infrastructure and intelligence for global-scale reliability.</p>
            </ScrollReveal>
          </div>
          <GoogleProductionBento />
        </div>
      </section>

      {/* 4. VELOCITY SECTION & ROI (DARK / GRAY) */}
      <section className="bg-gray-50 dark:bg-[#0B0C14] py-24 md:py-44 px-6 md:px-8 border-y border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-16 md:mb-20 text-center">Engineered for Velocity.</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="text-left">
              <ScrollReveal>
                <h3 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 tracking-tighter text-gray-900 dark:text-white">Zero-Touch Verification.</h3>
                <p className="text-gray-600 dark:text-gray-400 text-base md:text-lg font-medium mb-10 md:mb-12 italic leading-relaxed">
                  Parallelized serverless nodes ensure massive coverage with zero human intervention required.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4 items-center p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm">
                    <Zap className="text-[#00c875]" size={32} />
                    <span className="text-lg md:text-xl font-black text-gray-900 dark:text-white">4X Average Release Speed</span>
                  </div>
                  <div className="flex gap-4 items-center p-6 bg-white dark:bg-white/5 rounded-2xl border border-gray-200 dark:border-white/5 shadow-sm">
                    <ShieldCheck className="text-[#6161ff]" size={32} />
                    <span className="text-lg md:text-xl font-black text-gray-900 dark:text-white">100% Cryptographic Integrity</span>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal delay={300}>
              <DeploymentOptimizationVisual />
            </ScrollReveal>
          </div>
          <div className="mt-20 md:mt-32">
            <ROIImpactStrip />
          </div>
        </div>
      </section>

      {/* 5. MODERN STANDARDS (WHITE) */}
      <section className="py-24 md:py-44 px-6 md:px-8 bg-white dark:bg-[#0F111A]">
        <div className="max-w-7xl mx-auto text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 leading-tight text-gray-900 dark:text-white">Built on Modern Standards.</h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-medium italic max-w-3xl mx-auto">Engineered for modularity, type-safety, and enterprise performance.</p>
          </ScrollReveal>
          <ScrollReveal delay={300}>
            <CodePipelineVisual />
          </ScrollReveal>
        </div>
      </section>

      {/* 6. AUDIT LOG (DARK / GRAY) */}
      <section className="py-24 md:py-44 px-6 md:px-8 bg-gray-50 dark:bg-[#0B0C14] border-t border-gray-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal className="text-center mb-16 md:mb-24">
            <h2 className="text-3xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tighter mb-8">Verification Ledger.</h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg md:text-xl font-medium italic">Immutable history of every audit execution cycle.</p>
          </ScrollReveal>
          <DetailedTicketTable />
        </div>
      </section>
    </div>
  );
};

export default ProjectsTasksView;
