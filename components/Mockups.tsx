
import React from 'react';
import {
  ShieldCheck, Bug, CheckCircle2, Clock, Zap,
  Terminal, TrendingUp, Users, Cpu, Layout, Activity,
  Scale, ArrowRight, MessageSquare, Paperclip, Check, ShieldAlert,
  Code, Server, Globe, Shield, Target, MousePointer2, Box, Cloud, Rocket, ScanEye,
  Layers, Timer, UserCheck, Database, LineChart, MapPin, FileCode, Coffee, Package,
  Lock, HardDrive, Smartphone, Sparkles, AlertCircle
} from 'lucide-react';

const DASHBOARD_URL = "https://psi-qa.web.app/dashboard";

const Avatar = ({ color, name, size = "w-7 h-7" }: { color: string, name: string, size?: string }) => (
  <div className={`group relative ${size} rounded-full border-2 border-white dark:border-white/10 shadow-sm flex items-center justify-center text-[10px] font-bold text-white cursor-pointer hover:scale-110 transition-transform ${color}`}>
    {name.charAt(0)}
    <div className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-[8px] rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-50">
      {name}
    </div>
  </div>
);

export const InteractiveFeatureCard = ({ icon: Icon, title, desc, colorClass, isLarge = false }: any) => (
  <div className={`
    ${isLarge ? 'md:col-span-2' : ''} 
    relative p-10 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] overflow-hidden group cursor-pointer transition-all duration-500
    hover:translate-y-[-10px] hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)]
    ${colorClass}
  `}>
    <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-white/20 transition-all duration-700" />
    <div className="relative z-10 flex flex-col h-full">
      <div className="mb-8 md:mb-10 text-white/50 group-hover:text-white group-hover:scale-110 transition-all duration-500 origin-left">
        <Icon size={isLarge ? 48 : 40} className="group-hover:animate-pulse" />
      </div>
      <h3 className={`${isLarge ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-black mb-4 md:mb-6 tracking-tight text-white`}>
        {title}
      </h3>
      <p className={`text-white/70 font-medium ${isLarge ? 'text-lg md:text-xl' : 'text-base md:text-lg'} leading-relaxed mb-auto`}>
        {desc}
      </p>
      <div className="mt-8 md:mt-12 flex items-center gap-3 text-white font-black text-[10px] md:text-xs uppercase tracking-widest opacity-0 group-hover:opacity-100 translate-x-[-20px] group-hover:translate-x-0 transition-all duration-500">
        Learn More <ArrowRight size={16} />
      </div>
    </div>
  </div>
);

export const FeatureBentoGrid = () => (
  <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 text-left">
    <InteractiveFeatureCard
      isLarge
      icon={Layers}
      title="Multi-Layer Parity Engine"
      desc="Verify production against staging with deep DOM and API comparison logic that detects even 1px deviations instantly."
      colorClass="bg-[#6161ff] shadow-2xl shadow-[#6161ff]/20"
    />
    <InteractiveFeatureCard
      icon={Zap}
      title="Turbo Suites"
      desc="Execute 10k+ tests in under 3 minutes using our proprietary grid network."
      colorClass="bg-gray-800 dark:bg-[#1A1C24] border border-white/5 hover:border-[#6161ff]/50 shadow-xl"
    />
    <InteractiveFeatureCard
      icon={Cpu}
      title="AI Triage"
      desc="Automatically categorize and route bugs based on historical resolution data."
      colorClass="bg-gray-900 dark:bg-[#0F111A] border border-white/5 shadow-inner"
    />
    <InteractiveFeatureCard
      isLarge
      icon={ShieldCheck}
      title="Compliance Vault"
      desc="Every audit is cryptographically signed and stored for instant SOC2/ISO compliance reporting and regulatory transparency."
      colorClass="bg-[#00c875] shadow-2xl shadow-[#00c875]/20"
    />
  </div>
);

export const GoogleProductionBento = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
    {[
      { title: "Firebase Auth", icon: <Lock className="text-blue-500" />, desc: "Secure identity management.", border: "border-l-4 border-blue-500" },
      { title: "Cloud Firestore", icon: <HardDrive className="text-orange-500" />, desc: "Real-time NoSQL scalability.", border: "border-l-4 border-orange-500" },
      { title: "Google Hosting", icon: <Globe className="text-blue-400" />, desc: "Global CDN edges for speed.", border: "border-l-4 border-blue-400" },
      { title: "Anti-Gravity", icon: <Zap className="text-green-500" />, desc: "Advanced load stability.", border: "border-l-4 border-green-500" },
      { title: "Gemini AI", icon: <Sparkles className="text-purple-500" />, desc: "Automated audit reporting.", border: "border-l-4 border-purple-500" },
      { title: "Cloud Functions", icon: <Code className="text-blue-600" />, desc: "Instant serverless execution.", border: "border-l-4 border-blue-600" },
      { title: "Crashlytics", icon: <AlertCircle className="text-orange-600" />, desc: "Real-time stability monitoring.", border: "border-l-4 border-orange-600" },
      { title: "Google Cloud", icon: <Cloud className="text-blue-500" />, desc: "Enterprise infrastructure.", border: "border-l-4 border-blue-500" }
    ].map((item, i) => (
      <div key={i} className={`
        bg-white dark:bg-[#1A1C24] p-8 rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-6 group border border-gray-100 dark:border-white/5
        ${item.border}
      `}>
        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
          {item.icon}
        </div>
        <div>
          <h4 className="text-xl font-black text-gray-900 dark:text-white mb-2">{item.title}</h4>
          <p className="text-gray-500 dark:text-gray-400 text-sm font-medium leading-relaxed">{item.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export const CompactVelocityCard = () => (
  <div className="w-full bg-white dark:bg-[#1A1C24] rounded-[2.5rem] md:rounded-[3rem] border border-gray-200 dark:border-white/5 shadow-2xl relative overflow-hidden text-left p-0">
    <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
      <svg width="100%" height="100%">
        <pattern id="data-stream" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="currentColor" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#data-stream)" />
      </svg>
    </div>

    <div className="p-8 md:p-10 relative z-10">
      <div className="flex justify-between items-start mb-10 md:mb-12">
        <div className="space-y-1">
          <p className="text-[10px] font-black text-gray-400 dark:text-white/30 uppercase tracking-[0.3em]">System Performance</p>
          <h4 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white tracking-tight">Audit Throughput</h4>
        </div>
        <div className="flex flex-col items-end">
          <div className="px-4 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 rounded-full font-black text-[9px] md:text-[10px] uppercase tracking-widest shadow-[0_0_20px_rgba(16,185,129,0.2)] animate-pulse flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            4X VELOCITY PEAK
          </div>
        </div>
      </div>

      <div className="relative h-40 md:h-48 w-full mb-10 md:mb-12">
        <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150">
          <defs>
            <linearGradient id="velocity-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#10B981" />
              <stop offset="100%" stopColor="#22D3EE" />
            </linearGradient>
            <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#10B981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="0" />
            </linearGradient>
            <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>
          <path d="M 0 140 Q 100 135 200 75 T 400 20 L 400 150 L 0 150 Z" fill="url(#area-gradient)" className="opacity-60" />
          <line x1="0" y1="140" x2="400" y2="140" stroke="currentColor" strokeWidth="1" strokeDasharray="6,6" opacity="0.1" />
          <path d="M 0 140 Q 100 135 200 75 T 400 20" fill="none" stroke="url(#velocity-gradient)" strokeWidth="5" strokeLinecap="round" filter="url(#neon-glow)" style={{ strokeDasharray: 1000, strokeDashoffset: 0 }} />
          {[100, 200, 300, 400].map((x, i) => {
            const y = x === 100 ? 135 : x === 200 ? 75 : x === 300 ? 47.5 : 20;
            return (
              <g key={i}>
                <circle cx={x} cy={y} r="4" fill="currentColor" className="opacity-20 animate-ping" />
                <circle cx={x} cy={y} r="2.5" fill="currentColor" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>

    <div className="bg-gray-50 dark:bg-white/5 border-t border-gray-100 dark:border-white/5 p-8 md:p-10 flex flex-col sm:flex-row items-center justify-between gap-8 sm:gap-0">
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 border border-emerald-500/20">
          <Timer size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 dark:text-white/30 uppercase tracking-widest mb-1">Cycle Duration</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">14m</span>
            <span className="text-sm font-bold text-emerald-500">(-82%)</span>
          </div>
        </div>
      </div>
      <div className="hidden sm:block h-10 w-px bg-gray-200 dark:bg-white/10 mx-6" />
      <div className="flex items-center gap-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20">
          <UserCheck size={24} />
        </div>
        <div>
          <p className="text-[10px] font-black text-gray-400 dark:text-white/30 uppercase tracking-widest mb-1">Human Effort</p>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white">Zero</span>
            <span className="text-sm font-bold text-indigo-500">Verified</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const StrategyGlassDashboard = () => (
  <div className="relative w-full max-w-2xl transform perspective-1000 rotate-y-[-12deg] rotate-x-[6deg] hover:rotate-0 transition-transform duration-700 ease-out hidden md:block">
    <div className="bg-white/80 dark:bg-[#1A1C24] backdrop-blur-2xl border border-gray-200 dark:border-white/10 p-10 rounded-[3rem] shadow-2xl text-gray-900 dark:text-white overflow-hidden text-left">
      <div className="flex justify-between items-start mb-10">
        <div>
          <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400 dark:text-white/40 mb-2">Executive Summary</h4>
          <p className="text-2xl md:text-3xl font-black tracking-tight">Audit Protocol v4.2</p>
        </div>
        <div className="flex gap-2.5">
          <div className="w-3.5 h-3.5 rounded-full bg-red-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-yellow-400" />
          <div className="w-3.5 h-3.5 rounded-full bg-green-400" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-8 mb-10">
        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-7 border border-gray-100 dark:border-white/5 shadow-inner">
          <div className="flex justify-between items-center mb-5">
            <span className="text-[10px] font-black text-gray-400 dark:text-white/40 uppercase tracking-widest">Readiness</span>
            <CheckCircle2 size={16} className="text-[#00c875]" />
          </div>
          <div className="text-4xl md:text-5xl font-black mb-3 tracking-tighter">98.4%</div>
          <div className="h-2 w-full bg-gray-200 dark:bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-[#00c875] w-[98.4%]" />
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-white/5 rounded-3xl p-7 border border-gray-100 dark:border-white/5 shadow-inner">
          <div className="flex justify-between items-center mb-5">
            <span className="text-[10px] font-black text-gray-400 dark:text-white/40 uppercase tracking-widest">Parity</span>
            <ShieldCheck size={16} className="text-[#6161ff]" />
          </div>
          <div className="text-4xl md:text-5xl font-black mb-3 tracking-tighter">100%</div>
          <p className="text-[11px] font-bold text-[#6161ff] uppercase tracking-widest">Verified</p>
        </div>
      </div>
    </div>
  </div>
);

export const CodePipelineVisual = () => (
  <div className="relative w-full py-16 md:py-20 px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-12">
    <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#6161ff]/20 to-transparent -translate-y-1/2 hidden md:block" />
    <div className="absolute top-1/2 left-0 w-full flex justify-between px-20 -translate-y-1/2 hidden md:flex pointer-events-none">
      <div className="w-2 h-2 rounded-full bg-[#6161ff] animate-ping" />
      <div className="w-2 h-2 rounded-full bg-[#6161ff] animate-ping delay-100" />
      <div className="w-2 h-2 rounded-full bg-[#6161ff] animate-ping delay-200" />
    </div>
    {[
      { name: "React", icon: <Box className="w-10 h-10 text-cyan-400" />, desc: "Component Isolation", color: "from-cyan-500/20" },
      { name: "TypeScript", icon: <FileCode className="w-10 h-10 text-blue-500" />, desc: "Type-Safe Contracts", color: "from-blue-500/20" },
      { name: "Java", icon: <Coffee className="w-10 h-10 text-red-500" />, desc: "Backend Stability", color: "from-red-500/20" }
    ].map((node, i) => (
      <div key={i} className="relative z-10 flex flex-col items-center group bg-white dark:bg-[#1A1C24] p-6 rounded-3xl border border-gray-100 dark:border-white/5 shadow-xl">
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${node.color} to-transparent border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform cursor-pointer relative mb-6`}>
          {node.icon}
        </div>
        <div className="text-center">
          <h5 className="text-xl font-black text-gray-900 dark:text-white mb-1">{node.name}</h5>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">{node.desc}</p>
        </div>
      </div>
    ))}
  </div>
);

export const DeploymentOptimizationVisual = () => (
  <div className="relative w-full bg-white dark:bg-[#1A1C24] rounded-[2.5rem] border border-gray-200 dark:border-white/5 p-8 md:p-10 overflow-hidden shadow-2xl">
    <div className="flex justify-between items-end mb-10 md:mb-12">
      <div>
        <h4 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white tracking-tight">Deployment</h4>
        <p className="text-[10px] font-black text-gray-400 dark:text-white/30 uppercase tracking-[0.3em] mt-2">Efficiency</p>
      </div>
      <div className="text-right">
        <span className="text-3xl md:text-4xl font-black text-emerald-500 tracking-tighter">-82%</span>
      </div>
    </div>
    <div className="space-y-8">
      <div className="space-y-3">
        <div className="flex justify-between text-[9px] font-black uppercase text-gray-400 tracking-widest">
          <span>Manual Legacy</span>
          <span>48 Hours</span>
        </div>
        <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-red-500/30 w-full" />
        </div>
      </div>
      <div className="space-y-3">
        <div className="flex justify-between text-[9px] font-black uppercase text-emerald-500 tracking-widest">
          <span>PSI QA Engine</span>
          <span>14 Minutes</span>
        </div>
        <div className="h-4 w-full bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden relative">
          <div className="h-full bg-emerald-500 w-[5%] shadow-[0_0_20px_rgba(16,185,129,0.3)]" />
        </div>
      </div>
    </div>
  </div>
);

export const FooterLogoStrip = () => (
  <div className="w-full py-12 md:py-16 border-b border-gray-100 dark:border-white/5 bg-gray-50/50 dark:bg-[#0B0C14] backdrop-blur-sm">
    <div className="max-w-7xl mx-auto px-8">
      <p className="text-center text-[10px] uppercase font-black tracking-[0.6em] text-gray-400 dark:text-white/20 mb-10 md:mb-14">Seamlessly Integrated With</p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 hover:opacity-100 transition-opacity duration-500">
        {[
          { name: "Jira", icon: Layout, color: "text-[#0052CC]" },
          { name: "Slack", icon: MessageSquare, color: "text-[#E01E5A]" },
          { name: "GitHub", icon: FileCode, color: "text-black dark:text-white" },
          { name: "GitLab", icon: FileCode, color: "text-[#FC6D26]" },
          { name: "Jenkins", icon: Server, color: "text-[#D33833]" },
          { name: "Docker", icon: Box, color: "text-[#2496ED]" },
          { name: "AWS", icon: Cloud, color: "text-[#FF9900]" },
          { name: "Selenium", icon: Zap, color: "text-[#43B02A]" },
        ].map((brand) => (
          <div key={brand.name} className="flex items-center gap-3 group cursor-pointer">
            <brand.icon className={`w-6 h-6 ${brand.color} saturate-0 group-hover:saturate-100 transition-all duration-300`} />
            <span className={`font-black text-xl tracking-tighter text-gray-300 dark:text-gray-600 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300`}>{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const ROIImpactStrip = () => (
  <div id="impact" className="w-full py-16 md:py-28 bg-white dark:bg-[#1A1C24] border border-gray-200 dark:border-white/5 rounded-[3rem] md:rounded-[4rem] relative shadow-xl overflow-hidden text-center">
    <div className="mb-16">
      <h3 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white tracking-tighter mb-4">Proven Impact at Scale</h3>
      <p className="text-slate-500 dark:text-gray-400 text-lg font-medium italic">Real-world performance metrics from our global audit network.</p>
    </div>
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
      {[
        { val: "47", label: "Protected Sites", sub: "Enterprise Domains", color: "text-[#6161ff]" },
        { val: "12,450", label: "Weekly Tests", sub: "Automated Executions", color: "text-[#00c875]" },
        { val: "0.01%", label: "Error Rate", sub: "Production Leaks", color: "text-red-500" },
        { val: "$1.2M", label: "Saved ROI", sub: "Eng. Cost Annualized", color: "text-amber-500" },
      ].map((stat, i) => (
        <div key={i} className="break-words">
          <p className={`text-5xl md:text-7xl font-black mb-2 ${stat.color} tracking-tighter`}>{stat.val}</p>
          <p className="text-[12px] font-black uppercase tracking-[0.2em] text-slate-900 dark:text-white mb-1">{stat.label}</p>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{stat.sub}</p>
        </div>
      ))}
    </div>
  </div>
);

export const DetailedTicketTable = () => (
  <div id="audit-log" className="w-full bg-white dark:bg-[#1A1C24] rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl border border-gray-100 dark:border-white/5 overflow-hidden text-left">
    <div className="px-8 md:px-12 py-8 md:py-10 border-b border-gray-100 dark:border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
      <div className="flex items-center gap-6">
        <div className="w-2 h-14 bg-[#6161ff] rounded-full" />
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-gray-900 dark:text-white tracking-tight">Detailed Audit Log</h3>
          <p className="text-[10px] font-black text-gray-400 dark:text-white/20 uppercase tracking-[0.3em] mt-2">Verification Suite</p>
        </div>
      </div>
      <div className="px-6 py-3 bg-[#6161ff]/10 rounded-2xl text-[10px] font-black uppercase text-[#6161ff] tracking-[0.2em] border border-[#6161ff]/20">
        Status: Verified
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="bg-gray-50 dark:bg-white/5 text-[9px] font-black text-gray-400 dark:text-white/30 uppercase tracking-[0.3em] border-b border-gray-100 dark:border-white/5">
            <th className="px-8 md:px-12 py-6 text-left whitespace-nowrap">Target</th>
            <th className="px-6 md:px-8 py-6 text-left whitespace-nowrap">Result</th>
            <th className="px-10 md:px-12 py-6 text-right whitespace-nowrap">Timestamp</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-white/5">
          {[
            { target: "Authentication Flow", result: "Passed", color: "text-[#00c875]", time: "12:44:02" },
            { target: "Checkout API Latency", result: "Warning", color: "text-amber-500", time: "12:43:15" },
            { target: "Mobile Header Parity", result: "Passed", color: "text-[#00c875]", time: "12:40:55" },
          ].map((row, i) => (
            <tr key={i} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors group">
              <td className="px-8 md:px-12 py-7 font-black text-gray-700 dark:text-white/70 group-hover:text-[#6161ff] text-sm md:text-base">{row.target}</td>
              <td className={`px-6 md:px-8 py-7 font-black uppercase text-[10px] tracking-widest ${row.color}`}>{row.result}</td>
              <td className="px-8 md:px-12 py-7 text-right font-black text-[10px] text-gray-400 dark:text-white/20">{row.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export const FloatingKanban3D = () => (
  <div className="relative w-full max-w-4xl mx-auto py-10 perspective-1000 hidden md:block">
    <div className="grid grid-cols-3 gap-8 transform rotate-x-[6deg] -rotate-y-[12deg]">
      {[
        {
          title: 'To Do',
          color: 'bg-[#6161ff]',
          cards: [
            { id: 101, text: "API Latency Check", tag: "High Priority", tagColor: "bg-red-500/10 text-red-500" },
            { id: 102, text: "UI Parity Audit", tag: "Visual", tagColor: "bg-purple-500/10 text-purple-500" }
          ]
        },
        {
          title: 'In Review',
          color: 'bg-amber-400',
          cards: [
            { id: 103, text: "Database Integrity", tag: "Backend", tagColor: "bg-blue-500/10 text-blue-500" },
            { id: 104, text: "Auth Token Expiry", tag: "Security", tagColor: "bg-amber-500/10 text-amber-500" }
          ]
        },
        {
          title: 'Verified',
          color: 'bg-[#00c875]',
          cards: [
            { id: 105, text: "Payment Gateway Regression", tag: "Critical", tagColor: "bg-emerald-500/10 text-emerald-500" },
            { id: 106, text: "Load Balancer Stress Test", tag: "DevOps", tagColor: "bg-cyan-500/10 text-cyan-500" }
          ]
        }
      ].map((col) => (
        <div key={col.title} className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-[2rem] shadow-2xl flex flex-col gap-8">
          <div className="flex justify-between items-center mb-2">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-gray-400 dark:text-white/40">{col.title}</h5>
            <div className={`w-2 h-2 rounded-full ${col.color}`} />
          </div>
          {col.cards.map((card) => (
            <div key={card.id} className="bg-white dark:bg-[#1A1C24] p-5 rounded-2xl border border-gray-100 dark:border-white/5 shadow-md hover:-translate-y-1 transition-transform cursor-pointer group">
              <div className="flex justify-between items-start mb-3">
                <span className={`px-2 py-1 rounded text-[8px] font-black uppercase tracking-wider ${card.tagColor}`}>{card.tag}</span>
                <div className="h-1.5 w-1.5 rounded-full bg-gray-200 dark:bg-white/10 group-hover:bg-[#6161ff] transition-colors" />
              </div>
              <p className="text-xs font-bold text-gray-700 dark:text-white/90 tracking-tight leading-snug">{card.text}</p>
              <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-50 dark:border-white/5">
                <div className="flex -space-x-1">
                  <div className="w-5 h-5 rounded-full bg-indigo-500 border border-white dark:border-[#1A1C24]" />
                  <div className="w-5 h-5 rounded-full bg-teal-500 border border-white dark:border-[#1A1C24]" />
                </div>
                <Clock size={12} className="text-gray-300 dark:text-white/10" />
              </div>
            </div>
          ))}
          <div className="p-4 border-2 border-dashed border-gray-100 dark:border-white/5 rounded-2xl flex items-center justify-center text-gray-200 dark:text-white/10 mt-auto">
            <Layout size={16} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

export const FullToolchainGrid = () => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
    {[
      { name: 'Jira', icon: Layout, color: 'text-[#0052CC]' },
      { name: 'GitHub', icon: FileCode, color: 'text-slate-900 dark:text-white' },
      { name: 'Jenkins', icon: Server, color: 'text-[#D33833]' },
      { name: 'Slack', icon: MessageSquare, color: 'text-[#E01E5A]' },
      { name: 'Docker', icon: Box, color: 'text-[#2496ED]' },
      { name: 'AWS', icon: Cloud, color: 'text-[#FF9900]' },
      { name: 'Azure', icon: Cloud, color: 'text-[#0078D4]' },
      { name: 'Selenium', icon: Zap, color: 'text-[#43B02A]' },
      { name: 'Cypress', icon: Terminal, color: 'text-slate-900 dark:text-white' },
      { name: 'Postman', icon: Rocket, color: 'text-[#FF6C37]' },
      { name: 'Sentry', icon: ShieldAlert, color: 'text-[#FB4226]' },
      { name: 'Datadog', icon: Activity, color: 'text-[#632CA6]' }
    ].map((tool, i) => (
      <div key={i} className="bg-white dark:bg-[#1A1C24] border border-gray-200 dark:border-white/5 p-8 rounded-[2rem] flex flex-col items-center gap-6 hover:shadow-2xl transition-all group cursor-pointer hover:-translate-y-2">
        <tool.icon className={`w-12 h-12 ${tool.color} drop-shadow-lg`} />
        <span className="text-[11px] font-black uppercase tracking-widest text-slate-900 dark:text-white">{tool.name}</span>
      </div>
    ))}
  </div>
);
