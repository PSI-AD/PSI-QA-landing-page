
import React, { useState, useEffect } from 'react';
import ProjectsTasksView from './components/ProjectsTasksView';
import ProductDevView from './components/ProductDevView';
import { BarChart3, PlayCircle, Moon, Sun, X, ArrowUp } from 'lucide-react';
import { FooterLogoStrip } from './components/Mockups';

const DASHBOARD_URL = "https://psi-qa.web.app/dashboard";

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<'projects' | 'product'>('projects');
  const [darkMode, setDarkMode] = useState(true);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeView]);

  const Modal = ({ title, content, onClose }: { title: string, content: string, onClose: () => void }) => (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#1A1C24] rounded-[2.5rem] shadow-2xl p-10 border border-gray-100 dark:border-white/10 animate-in zoom-in-95 duration-200">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-black text-gray-900 dark:text-white">{title}</h3>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 dark:hover:bg-white/5 rounded-xl transition-colors text-gray-900 dark:text-white">
            <X size={24} />
          </button>
        </div>
        <div className="text-gray-600 dark:text-gray-400 font-medium leading-relaxed max-h-[60vh] overflow-y-auto custom-scrollbar pr-4">
          <p className="mb-4">{content}</p>
          <p>Last Updated: October 2024. PSI QA is committed to maintaining the highest standards of data integrity and operational security.</p>
        </div>
      </div>
    </div>
  );

  const getModalContent = (type: string) => {
    switch (type) {
      case 'Privacy': return "Our Privacy Policy outlines how PSI QA collects, uses, and protects your information. We utilize industry-standard encryption for all data at rest and in transit.";
      case 'Terms': return "By using the PSI QA platform, you agree to our Terms of Service. This includes our fair use policies for automated nodes and subscription management.";
      case 'Security': return "PSI QA is SOC2 Type II and ISO 27001 compliant. Every audit node is isolated in a secure container environment.";
      default: return "";
    }
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className={`min-h-screen transition-colors duration-300 font-sans overflow-x-hidden ${darkMode ? 'dark bg-[#0F111A] text-white' : 'bg-slate-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] text-slate-900'
        }`}>

        {/* Header - Stacking Layout for Mobile */}
        <header className={`sticky top-0 z-[100] w-full border-b transition-all duration-500 backdrop-blur-3xl ${darkMode ? 'bg-[#0F111A]/80 border-white/5 shadow-2xl shadow-black/40' : 'bg-white/80 border-gray-200 shadow-sm'
          }`}>
          <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.05] pointer-events-none" />
          <div className={`h-1.5 w-full transition-colors duration-500 relative z-10 ${activeView === 'projects' ? 'bg-[#6161ff]' : 'bg-[#00c875]'}`} />

          <div className="max-w-7xl mx-auto px-6 md:px-8 py-4 md:h-24 flex flex-col md:flex-row justify-between items-center gap-6 relative z-10">
            {/* Logo */}
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => { setActiveView('projects'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center font-black italic shadow-2xl transition-all duration-500 transform group-hover:rotate-6 ${activeView === 'projects' ? 'bg-[#6161ff] text-white shadow-[#6161ff]/40' : 'bg-[#00c875] text-[#0F111A] shadow-[#00c875]/40'
                }`}>
                QA
              </div>
              <div className="flex flex-col">
                <span className={`text-2xl font-black tracking-tighter leading-none ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  PSI <span className={activeView === 'projects' ? 'text-[#6161ff]' : 'text-[#00c875]'}>QA</span>
                </span>
                <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-400 mt-1">Ecosystem</span>
              </div>
            </div>

            {/* View Toggle */}
            <div className={`flex p-1.5 rounded-[1.5rem] border shadow-inner w-full md:w-auto overflow-x-auto no-scrollbar ${darkMode ? 'bg-white/5 border-white/10' : 'bg-gray-100/80 border-gray-200'}`}>
              <button
                onClick={() => setActiveView('projects')}
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 md:px-8 py-3 rounded-2xl transition-all duration-300 font-black text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap ${activeView === 'projects'
                  ? (darkMode ? 'bg-white/10 text-white shadow-xl border border-white/10' : 'bg-white text-[#6161ff] shadow-xl border border-transparent')
                  : 'text-gray-400 hover:text-[#6161ff]'
                  }`}
              >
                <BarChart3 size={14} />
                <span className="hidden md:inline">Strategy</span>
              </button>
              <button
                onClick={() => setActiveView('product')}
                className={`flex-1 md:flex-none flex items-center justify-center gap-3 px-6 md:px-8 py-3 rounded-2xl transition-all duration-300 font-black text-[10px] md:text-xs uppercase tracking-widest whitespace-nowrap ${activeView === 'product'
                  ? (darkMode ? 'bg-white/10 text-white shadow-xl border border-white/10' : 'bg-white text-[#00c875] shadow-xl border border-transparent')
                  : 'text-gray-400 hover:text-[#00c875]'
                  }`}
              >
                <PlayCircle size={14} />
                <span className="hidden md:inline">Execution</span>
              </button>
            </div>

            {/* Header Controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-2xl transition-all group ${darkMode ? 'text-yellow-400 hover:bg-white/10' : 'text-gray-400 hover:bg-gray-100'}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <div className="w-px h-8 bg-gray-200 dark:bg-white/10" />
              <a href={DASHBOARD_URL} className={`px-6 py-3 rounded-2xl font-black text-[10px] uppercase tracking-widest transition-all shadow-xl hover:brightness-110 active:scale-95 flex items-center justify-center ${activeView === 'projects'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-[#00c875] text-[#0F111A]'
                }`}>
                <span className="hidden md:inline">Login</span>
                <span className="md:hidden">Log</span>
              </a>
            </div>
          </div>
        </header>

        <main className="relative z-10">
          <div key={activeView} className="animate-in fade-in slide-in-from-bottom-8 duration-700 ease-out">
            {activeView === 'projects' ? <ProjectsTasksView /> : <ProductDevView />}
          </div>
        </main>

        {/* Footer */}
        <footer className={`transition-all duration-500 relative overflow-hidden border-t ${darkMode ? 'bg-[#0F111A] border-white/5 text-white' : 'bg-white border-gray-100 text-gray-900'
          }`}>
          <div className="absolute inset-0 z-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
          <FooterLogoStrip />

          <div className="max-w-7xl mx-auto px-8 py-20 flex flex-col lg:flex-row justify-between items-start gap-16 relative z-10">
            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black italic text-lg border ${darkMode ? 'bg-white/10 text-white border-white/10' : 'bg-gray-900 text-white border-gray-800'
                  }`}>QA</div>
                <span className="text-3xl font-black tracking-tighter">PSI QA</span>
              </div>
              <p className={`text-sm font-medium max-w-sm leading-relaxed ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Automated high-precision regression for global enterprise audit operations.
              </p>
              <div className="flex gap-4 mt-4">
                <a href={DASHBOARD_URL} className={`h-12 px-8 border rounded-xl font-black text-[10px] uppercase tracking-[0.2em] transition-all flex items-center justify-center ${darkMode ? 'bg-white/10 hover:bg-white text-white hover:text-[#0F111A] border-white/10' : 'bg-white hover:bg-gray-900 text-gray-900 hover:text-white border-gray-200'
                  }`}>Demo</a>
                <a href={DASHBOARD_URL} className="h-12 px-8 bg-[#6161ff] text-white rounded-xl font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center shadow-lg shadow-[#6161ff]/20">Get Started</a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-20">
              <div className="flex flex-col gap-5">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#6161ff] mb-2">Platform</p>
                {['Strategy Hub', 'Execution Engine', 'Audit Logs', 'ROI Analysis'].map(item => (
                  <a key={item} href="#" className={`text-sm font-bold transition-all hover:translate-x-1 ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#6161ff]'
                    }`}>
                    {item}
                  </a>
                ))}
              </div>
              <div className="flex flex-col gap-5">
                <p className="text-[11px] font-black uppercase tracking-widest text-[#00c875] mb-2">Enterprise</p>
                {['Security', 'WCAG Audits', 'Custom SLAs', 'Performance Hub'].map(i => (
                  <a key={i} className={`text-sm font-bold transition-all hover:translate-x-1 cursor-pointer ${darkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-[#00c875]'
                    }`}>{i}</a>
                ))}
              </div>
              <div className="col-span-2 md:col-span-1 flex flex-col gap-5">
                <p className={`text-[11px] font-black uppercase tracking-widest mb-2 ${darkMode ? 'text-white/40' : 'text-gray-400'}`}>Network</p>
                <div className={`flex items-center gap-3 text-[10px] font-black px-5 py-3 rounded-2xl border shadow-inner ${darkMode ? 'text-[#00c875] bg-[#00c875]/10 border-[#00c875]/20' : 'text-[#00c875] bg-[#00c875]/5 border-[#00c875]/10'
                  }`}>
                  <div className="w-2 h-2 rounded-full bg-[#00c875] animate-pulse" />
                  STABLE: 100%
                </div>
              </div>
            </div>
          </div>

          <div className={`max-w-7xl mx-auto py-10 border-t px-8 flex flex-col sm:flex-row justify-between text-[10px] font-black uppercase tracking-widest gap-6 ${darkMode ? 'border-white/5 text-gray-500' : 'border-gray-100 text-gray-400'
            }`}>
            <div className="flex gap-8 md:gap-12">
              <span>© 2025 PSI QA GLOBAL</span>
              <span className="hidden sm:inline">ALL RIGHTS RESERVED</span>
            </div>
            <div className="flex gap-8">
              <button onClick={() => setActiveModal('Security')} className="hover:text-[#6161ff]">Security</button>
              <button onClick={() => setActiveModal('Privacy')} className="hover:text-[#6161ff]">Privacy</button>
              <button onClick={() => setActiveModal('Terms')} className="hover:text-[#6161ff]">Terms</button>
            </div>
          </div>
        </footer>

        {activeModal && (
          <Modal title={activeModal} content={getModalContent(activeModal)} onClose={() => setActiveModal(null)} />
        )}

        {/* Back To Top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className={`fixed bottom-8 right-8 p-4 bg-blue-600 text-white rounded-full shadow-2xl transition-all duration-500 z-50 hover:bg-blue-700 hover:scale-110 ${showBackToTop ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
        >
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;
