
import React, { useEffect, useState } from 'react';
// Replace missing ManagerDashboardHighDensity with DetailedTicketTable
import { StrategyGlassDashboard, DetailedTicketTable } from './Mockups';
import ScrollReveal from './ScrollReveal';
import { 
  Zap, Eye, Scale, ArrowRight, Check, Activity, ShieldCheck, 
  BarChart3, Globe, Shield, Target
} from 'lucide-react';

const DASHBOARD_URL = "https://psi-qa.web.app/dashboard";

const StrategyView: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="text-[#181b34] bg-[#f9fafc]">
      {/* Hero Section - Dark, Rich & Integrated Product Showcase */}
      <section className="relative pt-32 pb-48 px-6 overflow-hidden bg-[#181b34] text-white">
        {/* Decorative Parallax Background Elements */}
        <div 
          className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.08]" 
          style={{ transform: `translateY(${scrollY * 0.12}px)` }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#181b34] via-[#2a2d52] to-[#181b34] opacity-95" />
        
        <div 
          className="absolute -top-48 -right-48 w-[45rem] h-[45rem] bg-[#6161ff] rounded-full blur-[200px] opacity-[0.18]" 
          style={{ transform: `translateY(${scrollY * 0.22}px)` }}
        />
        
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20 relative z-10">
          <div className="lg:w-1/2 text-left">
            <ScrollReveal>
              <span className="bg-[#6161ff] text-white px-5 py-2 rounded-xl text-[11px] font-black uppercase tracking-[0.2em] mb-10 inline-block shadow-2xl shadow-[#6161ff]/40 border border-white/20">
                Audit Management Command
              </span>
              <h1 className="text-6xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.85]">
                Bring your QA <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6161ff] via-indigo-300 to-[#6161ff] animate-pulse">strategy to life.</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-14 max-w-2xl leading-relaxed font-medium italic">
                Manage your QA audit lists, track team capacity, and visual project health in one place.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-8">
                <a href={DASHBOARD_URL} className="bg-[#6161ff] text-white px-12 py-5 rounded-2xl font-black text-lg hover:brightness-110 transition-all shadow-2xl shadow-[#6161ff]/40 flex items-center gap-3 active:scale-95 group">
                  Initiate Global Audit <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <div className="flex items-center gap-4 text-white/30">
                   <div className="h-px w-10 bg-white/20" />
                   <span className="text-[10px] font-black uppercase tracking-[0.3em]">v4.2-STABLE</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <ScrollReveal delay={400}>
              <StrategyGlassDashboard />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Mid-page Authority Section */}
      <section className="py-24 bg-slate-50 border-y border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-[10px] font-black uppercase tracking-[0.5em] text-gray-400 mb-12 italic">Ecosystem Authorization Active</p>
          <div className="flex flex-wrap justify-center items-center gap-x-20 gap-y-12 px-10 grayscale opacity-30 hover:opacity-50 transition-opacity">
             <div className="flex items-center gap-3"><Activity size={24} className="text-[#0052CC]" /><span className="font-black text-xl tracking-tighter">Jira</span></div>
             <div className="flex items-center gap-3"><Globe size={24} className="text-[#E01E5A]" /><span className="font-black text-xl tracking-tighter">Slack</span></div>
             <div className="flex items-center gap-3"><Shield size={24} className="text-[#181717]" /><span className="font-black text-xl tracking-tighter">GitHub</span></div>
             <div className="flex items-center gap-3"><Target size={24} className="text-[#FC6D26]" /><span className="font-black text-xl tracking-tighter">GitLab</span></div>
             <div className="flex items-center gap-3"><Scale size={24} className="text-[#43B02A]" /><span className="font-black text-xl tracking-tighter">Selenium</span></div>
          </div>
        </div>
      </section>

      {/* Value Prop Cards */}
      <section className="py-40 px-6 bg-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { 
                title: "Accelerate Releases.", 
                icon: <Zap size={32} className="text-yellow-500" />, 
                desc: "Slash regression cycles by 40% with AI-driven strategy orchestration and auto-generation.",
                color: "bg-yellow-50"
              },
              { 
                title: "Executive Visibility.", 
                icon: <Eye size={32} className="text-blue-500" />, 
                desc: "Real-time, read-only dashboards designed specifically for executive-level transparency.",
                color: "bg-blue-50"
              },
              { 
                title: "Total Parity.", 
                icon: <Scale size={32} className="text-green-500" />, 
                desc: "Ensure 1:1 behavioral and visual match between production and testing environments.",
                color: "bg-green-50"
              },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 150} className="bg-white p-12 rounded-[3.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all group border border-gray-100 cursor-pointer">
                <div className={`w-20 h-20 rounded-2xl ${item.color} flex items-center justify-center mb-10 shadow-inner group-hover:rotate-12 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-3xl font-black mb-6 leading-tight text-[#181b34]">{item.title}</h3>
                <p className="text-gray-600 font-medium leading-relaxed text-lg">{item.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manager Dashboard Section */}
      <section className="py-32 px-6 bg-slate-50 relative overflow-hidden border-t border-gray-100">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#6161ff]/5 skew-x-12 translate-x-1/4" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <ScrollReveal>
              <h2 className="text-5xl md:text-6xl font-black tracking-tight mb-8">Unified Management Control.</h2>
              <p className="text-xl text-gray-500 font-medium italic">Monitor team workload and regression risk heatmaps across your global infrastructure in one pane of glass.</p>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#6161ff]/10 to-transparent blur-[80px] opacity-40 -z-10" />
              {/* Fix: ManagerDashboardHighDensity was missing, replacing with DetailedTicketTable */}
              <DetailedTicketTable />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final Impact Strip */}
      <section className="py-32 px-6 bg-[#181b34] text-white border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Audit Nodes Active", val: "1,240", color: "text-[#6161ff]" },
              { label: "Total Parity Rate", val: "100%", color: "text-[#00c875]" },
              { label: "Weekly Regressions", val: "0", color: "text-red-500" },
              { label: "Triage Speed", val: "Instant", color: "text-amber-400" },
            ].map((stat, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                 <p className={`text-6xl font-black mb-3 ${stat.color} tracking-tighter`}>{stat.val}</p>
                 <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30">{stat.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StrategyView;
