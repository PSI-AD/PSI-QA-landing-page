
import React from 'react';
import { FloatingKanban3D, CompactVelocityCard, FullToolchainGrid } from './Mockups';
import ScrollReveal from './ScrollReveal';
import { TrendingUp, HeartPulse, ArrowRight, BarChart3, Zap, ScanEye, Rocket } from 'lucide-react';

const DASHBOARD_URL = "https://psi-qa.web.app/dashboard";

const ProductDevView: React.FC = () => {
  return (
    <div id="dev-teams" className="transition-colors duration-500 bg-transparent">

      {/* 1. HERO SECTION - (WHITE) */}
      <section className="pt-12 md:pt-24 pb-20 md:pb-32 px-6 md:px-8 overflow-hidden relative bg-white dark:bg-[#0F111A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_#00c87510,_transparent_50%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16 relative z-10 text-left">
          <div className="lg:w-1/2">
            <ScrollReveal>
              <div className="inline-flex items-center gap-2.5 bg-[#00c875]/10 border border-[#00c875]/20 px-5 py-2 rounded-full text-[#00c875] text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] mb-10 md:mb-12">
                <TrendingUp size={14} /> TEAM VELOCITY AT 124%
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-8xl font-black mb-8 md:mb-10 tracking-tighter leading-[0.85] text-slate-900 dark:text-white">
                Empower your <br />
                <span className="text-[#00c875]">Engineers.</span>
              </h2>
              <p className="text-lg md:text-2xl text-slate-500 dark:text-gray-600 mb-10 md:mb-14 max-w-xl font-medium leading-relaxed italic">
                Seamlessly connect QA audit cycles directly to engineering pipelines with deep native integrations for your entire stack.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                <a href={DASHBOARD_URL} className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 md:px-14 py-4 md:py-6 rounded-2xl font-black text-lg md:text-xl hover:scale-105 transition-all shadow-2xl text-center">
                  Analyze Metrics
                </a>
                <a href={DASHBOARD_URL} className="w-full sm:w-auto bg-slate-200 hover:bg-slate-300 text-slate-900 border-2 border-transparent px-10 md:px-12 py-4 md:py-6 rounded-2xl font-black text-lg md:text-xl transition-all text-center">
                  Start Sprint
                </a>
              </div>
            </ScrollReveal>
          </div>

          <div className="lg:w-1/2 w-full flex justify-center">
            <ScrollReveal delay={400}>
              <FloatingKanban3D />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. VELOCITY SECTION (GRAY/DARK) */}
      <section id="impact" className="py-24 md:py-44 px-6 md:px-8 bg-slate-50 dark:bg-[#0B0C14] border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[42%_58%] gap-16 lg:gap-24 items-center">
          <div className="text-left">
            <ScrollReveal>
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 leading-none text-slate-900 dark:text-white">Accelerate Release Velocity.</h2>
              <p className="text-slate-500 dark:text-gray-600 font-medium text-lg md:text-xl mb-12 leading-relaxed italic">
                Replace manual regression bottlenecks with high-precision AI parity auditing and hyper-parallel execution workflows.
              </p>

              <div className="space-y-10">
                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-amber-400/10 flex items-center justify-center text-amber-500 shrink-0 border border-amber-400/20 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-amber-400/5">
                    <Zap size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">Automated Regression Suites</h3>
                    <p className="text-slate-500 dark:text-gray-600 font-medium leading-relaxed">Execute thousands of complex test cases simultaneously, slashing cycles from days to under 15 minutes.</p>
                  </div>
                </div>

                <div className="flex gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-blue-400/10 flex items-center justify-center text-blue-500 shrink-0 border border-blue-400/20 group-hover:scale-110 transition-all duration-300 shadow-lg shadow-blue-400/5">
                    <ScanEye size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-2 tracking-tight text-slate-900 dark:text-white">Instant Parity Detection</h3>
                    <p className="text-slate-500 dark:text-gray-600 font-medium leading-relaxed">Deep visual and functional comparison logic immediately flags deviations against established baselines.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <div className="w-full">
            <ScrollReveal delay={300}>
              <div className="relative">
                <div className="absolute -inset-10 bg-[#00c875]/5 blur-[100px] -z-10" />
                <CompactVelocityCard />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. TOOLCHAIN SECTION (WHITE/DARK) */}
      <section id="toolchain" className="py-24 md:py-44 px-6 md:px-8 bg-white dark:bg-[#0F111A]">
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <ScrollReveal>
            <div className="mb-20 md:mb-28">
              <h2 className="text-3xl md:text-6xl font-black tracking-tighter mb-8 text-slate-900 dark:text-white">The Full Toolchain.</h2>
              <p className="text-slate-500 dark:text-gray-600 text-lg md:text-xl font-medium max-w-3xl mx-auto italic">A seamless unified integration layer connecting every tool in your dev stack.</p>
            </div>
            <FullToolchainGrid />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. LEADERSHIP INSIGHTS (GRAY/DARK) */}
      <section className="py-24 md:py-44 px-6 md:px-8 bg-slate-50 dark:bg-[#0B0C14] border-y border-slate-100 dark:border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 md:gap-32 items-center text-left">
            <ScrollReveal>
              <h2 className="text-3xl md:text-6xl font-black mb-10 leading-tight tracking-tighter text-slate-900 dark:text-white">Leadership Insights for <span className="text-[#00c875]">Modern QA.</span></h2>
              <div className="space-y-12">
                <div className="flex gap-8">
                  <div className="w-16 h-16 shrink-0 bg-red-50 dark:bg-red-500/10 rounded-2xl flex items-center justify-center text-red-500 shadow-sm border border-red-100 dark:border-red-500/20">
                    <HeartPulse size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">Burnout Risk Alerts</h3>
                    <p className="text-slate-500 dark:text-gray-600 text-lg leading-relaxed font-medium">Identify team fatigue by monitoring sustained high-priority ticket distribution across sprints.</p>
                  </div>
                </div>
                <div className="flex gap-8">
                  <div className="w-16 h-16 shrink-0 bg-[#00c875]/10 rounded-2xl flex items-center justify-center text-[#00c875] border border-[#00c875]/20">
                    <BarChart3 size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black mb-3 text-slate-900 dark:text-white">Cycle Efficiency</h3>
                    <p className="text-slate-500 dark:text-gray-600 text-lg font-medium leading-relaxed">Real-time tracking of ticket duration from initial claim through release.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={300} className="grid grid-cols-2 gap-6 md:gap-8">
              {[
                { label: "Tickets/Day", val: "14.2", sub: "per dev", color: "text-[#00c875]" },
                { label: "Accuracy", val: "99.2%", sub: "parity rate", color: "text-blue-500" },
                { label: "Retention", val: "100%", sub: "team health", color: "text-red-500" },
                { label: "Velocity", val: "8.4", sub: "sprint avg", color: "text-[#6161ff]" }
              ].map((stat, i) => (
                <div key={i} className="p-8 md:p-12 bg-white dark:bg-[#1A1C24] border border-slate-200 dark:border-white/5 rounded-[2rem] md:rounded-[3rem] text-center group hover:bg-slate-900 dark:hover:bg-white/10 transition-all shadow-xl group cursor-pointer">
                  <p className="text-[10px] font-black uppercase text-slate-400 tracking-[0.3em] mb-8 group-hover:text-white/50">{stat.label}</p>
                  <p className={`text-4xl md:text-5xl font-black ${stat.color} mb-2 tracking-tighter`}>{stat.val}</p>
                  <p className="text-[10px] text-slate-400 font-bold italic group-hover:text-white/30">{stat.sub}</p>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA (WHITE/DARK) */}
      <section className="py-20 px-6 md:px-8 bg-gradient-to-b from-transparent to-slate-50 dark:to-[#0F111A]">
        <div className="max-w-5xl mx-auto text-center bg-slate-900 dark:bg-[#1A1C24] rounded-[3rem] md:rounded-[5rem] p-16 md:p-32 shadow-2xl relative overflow-hidden border border-white/5">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00c875]/10 rounded-full blur-[150px] -mb-48 -mr-48" />
          <h2 className="text-4xl md:text-7xl font-black text-white mb-8 md:mb-12 tracking-tighter">Ready to Scale?</h2>
          <p className="text-gray-600 text-lg md:text-2xl mb-12 md:mb-16 max-w-3xl mx-auto italic leading-relaxed">Join the PSI QA global community and eliminate testing bottlenecks forever.</p>
          <a href={DASHBOARD_URL} className="bg-[#00c875] text-slate-900 px-10 md:px-16 py-4 md:py-8 rounded-2xl md:rounded-3xl font-black text-xl md:text-3xl hover:scale-105 transition-all flex items-center gap-4 mx-auto justify-center w-fit shadow-2xl active:scale-95">
            Initialize Platform <ArrowRight size={32} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductDevView;
