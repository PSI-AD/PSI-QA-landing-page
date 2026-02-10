
import React, { useEffect, useState } from 'react';
// Use DetailedTicketTable as ExecutionTicketTable is not exported from Mockups
// Fix: Import FloatingKanban3D instead of non-existent KanbanBoardHighFidelity
import { DetailedTicketTable, FloatingKanban3D } from './Mockups';
import ScrollReveal from './ScrollReveal';
import { 
  ArrowRight, Activity, Terminal, Code, Cpu, ShieldCheck, 
  CheckCircle2, Zap, Layout, Users, Layers, MessageSquare, Paperclip, Check
} from 'lucide-react';

const DASHBOARD_URL = "https://psi-qa.web.app/dashboard";

const ExecutionView: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white text-[#181b34] min-h-screen">
      {/* Hero Section - Clean, Energized & Deep Background */}
      <section className="relative pt-32 pb-24 px-6 text-center overflow-hidden border-b border-gray-100">
        {/* Decorative Parallax Background Pattern */}
        <div 
          className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.05] pointer-events-none" 
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        />
        <div 
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#00c87515,_transparent_70%)]" 
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        />
        
        <div className="max-w-5xl mx-auto relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-3 bg-[#00c875]/10 border border-[#00c875]/20 px-6 py-2.5 rounded-full text-[#00c875] text-[11px] font-black uppercase tracking-[0.25em] mb-12 shadow-sm italic">
               <Activity size={16} /> Engineering Protocol Active
            </div>
            <h1 className="text-6xl md:text-9xl font-black mb-10 tracking-tighter leading-[0.85]">
              Test with <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00c875] via-emerald-500 to-[#00c875]">precision.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="text-xl md:text-3xl text-gray-500 mb-16 max-w-4xl mx-auto font-medium leading-relaxed italic">
              Connect QA directly to engineering workflows with deep integration for Jira, GitHub, and automated testing.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={400}>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-8">
               <a href={DASHBOARD_URL} className="bg-[#00c875] text-[#181b34] px-14 py-6 rounded-[2.5rem] font-black text-2xl hover:brightness-110 hover:scale-105 transition-all shadow-2xl shadow-[#00c875]/40 active:scale-95 flex items-center justify-center">
                 Start Sprint Cycle
               </a>
               <a href={DASHBOARD_URL} className="px-10 py-6 border-2 border-gray-100 rounded-[2.5rem] font-black text-gray-400 hover:text-[#181b34] hover:border-[#181b34] transition-all flex items-center justify-center">
                 View Documentation
               </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* THE TICKET TABLE - REALISTIC DATA */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <ScrollReveal delay={600}>
          {/* Replaced ExecutionTicketTable with DetailedTicketTable */}
          <DetailedTicketTable />
        </ScrollReveal>
      </section>

      {/* Visual Workflow Diagram */}
      <section className="py-40 px-6 bg-slate-50 relative overflow-hidden border-y border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black mb-8 leading-tight">Universal Execution Pipeline.</h2>
            <p className="text-xl text-gray-500 font-medium italic">A frictionless horizontal flow connecting commit to release.</p>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            {[
              { title: "Code Commit", icon: <Terminal size={28} className="text-blue-500" />, desc: "Auto-trigger suite", color: "bg-blue-50" },
              { title: "Auto-Test Trigger", icon: <Zap size={28} className="text-yellow-500" />, desc: "Neural suite parsing", color: "bg-yellow-50" },
              { title: "AI Verification", icon: <Cpu size={28} className="text-indigo-500" />, desc: "Parity diff engine", color: "bg-indigo-50" },
              { title: "QA Approval", icon: <ShieldCheck size={28} className="text-[#00c875]" />, desc: "Manual final sign-off", color: "bg-emerald-50" },
              { title: "Deploy", icon: <CheckCircle2 size={28} className="text-[#6161ff]" />, desc: "Production push", color: "bg-indigo-50" },
            ].map((item, i) => (
              <React.Fragment key={i}>
                <ScrollReveal delay={i * 100} className="bg-white p-10 rounded-[2.5rem] flex-1 text-center shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all group cursor-pointer">
                  <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                    {item.icon}
                  </div>
                  <h4 className="text-base font-black mb-3 text-[#181b34] uppercase tracking-wide">{item.title}</h4>
                  <p className="text-[11px] text-gray-400 font-black uppercase tracking-[0.2em]">{item.desc}</p>
                </ScrollReveal>
                {i < 4 && (
                  <div className="hidden lg:block text-gray-200">
                    <ArrowRight size={28} />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Section: Bug Tracking & AI */}
      <section className="py-40 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-32 items-center">
          <ScrollReveal>
             <h2 className="text-5xl md:text-6xl font-black mb-10 leading-tight tracking-tight text-[#181b34]">Capture bugs <br /><span className="text-[#00c875]">before</span> they deploy.</h2>
             <p className="text-xl text-gray-500 mb-14 font-medium leading-relaxed italic">Identify every visual mismatch, API regression, and logic error with context-rich reporting and automated session state capturing.</p>
             <div className="space-y-8">
                {[
                  "Neural state mirroring of failed assertions",
                  "1:1 DOM comparisons across staging environments",
                  "Automated session recording for developer triage"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-5">
                    <div className="w-8 h-8 rounded-full bg-[#00c875]/10 text-[#00c875] flex items-center justify-center shrink-0 border border-[#00c875]/20 shadow-sm">
                      <Check size={16} strokeWidth={4} />
                    </div>
                    <span className="font-bold text-xl text-gray-700">{text}</span>
                  </div>
                ))}
             </div>
          </ScrollReveal>
          <ScrollReveal delay={300}>
             <div className="bg-slate-900 rounded-[3.5rem] p-12 shadow-[0_40px_100px_rgba(0,0,0,0.3)] border border-white/5 relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#00c875]/10 blur-3xl group-hover:bg-[#00c875]/25 transition-all duration-700" />
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-14 h-14 bg-[#00c875] text-[#181b34] rounded-2xl flex items-center justify-center shadow-lg shadow-[#00c875]/20">
                    <Code size={28} />
                  </div>
                  <div>
                    <span className="font-mono text-xs text-emerald-400 block tracking-widest uppercase">PSI_ORACLE_ENGINE</span>
                    <span className="font-mono text-[10px] text-gray-500 uppercase">BUG_REPORT_0922.JSON</span>
                  </div>
                </div>
                <div className="space-y-4 font-mono text-[13px] leading-relaxed">
                   <p className="text-gray-500">{"{"}</p>
                   <p className="text-indigo-400 ml-6">"incident": <span className="text-emerald-400">"DOM_MISMATCH_DETECTION"</span>,</p>
                   <p className="text-indigo-400 ml-6">"severity": <span className="text-red-400">"CRITICAL"</span>,</p>
                   <p className="text-indigo-400 ml-6">"context": <span className="text-gray-300">"CLUSTER_B_MIRROR"</span>,</p>
                   <p className="text-indigo-400 ml-6">"ai_verified": <span className="text-emerald-400">true</span>,</p>
                   <p className="text-indigo-400 ml-6">"timestamp": <span className="text-amber-300">"2025-03-12T12:44:02Z"</span></p>
                   <p className="text-gray-500">{"}"}</p>
                </div>
                <div className="mt-10 pt-10 border-t border-white/5">
                   <p className="text-xs text-white/40 italic leading-relaxed">"PSI Oracle detected a visual regression in the side navigation layout on mobile viewports. Layout parity diff: 14%."</p>
                </div>
             </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kanban Board Mockup - REALISTIC DATA */}
      <section className="py-40 px-6 bg-slate-50 relative overflow-hidden border-t border-gray-100">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-24">
            <h2 className="text-5xl md:text-6xl font-black mb-8 leading-tight tracking-tight text-[#181b34]">Stay aligned with Development.</h2>
            <p className="text-xl text-gray-500 font-medium italic">Integrated Kanban views that sync directly with engineering cycles and sprint planning.</p>
          </div>
          <ScrollReveal delay={200}>
            {/* Fix: Use FloatingKanban3D as KanbanBoardHighFidelity is not exported */}
            <FloatingKanban3D />
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ExecutionView;
