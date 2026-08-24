import React from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Globe, 
  Building2, 
  ShieldCheck, 
  Sparkles, 
  Search, 
  Info, 
  ArrowRight,
  Terminal
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function GlobalModeBar() {
  const { 
    currentMode, 
    setCurrentMode, 
    setIsCommandPaletteOpen, 
    setIsAiAssistantOpen,
    setIsDemoGuideOpen
  } = useApp();

  const modes = [
    {
      id: 'public',
      label: 'Kurumsal Web Sitesi',
      badge: 'Vitrini & Danışmanlık',
      icon: Globe,
    },
    {
      id: 'portal',
      label: 'Müşteri Konsolu',
      badge: 'TechVision A.Ş.',
      icon: Building2,
    },
    {
      id: 'admin',
      label: 'SMMM Yönetim Paneli',
      badge: 'Yönetici Masası',
      icon: ShieldCheck,
    }
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#07080c] text-white border-b border-white/[0.08] backdrop-blur-xl shadow-2xl">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 text-xs">
          
          {/* Brand mark */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 pr-3 border-r border-white/10">
              <div className="w-5 h-5 rounded-md bg-white text-black font-black flex items-center justify-center text-[11px] tracking-tighter">
                V
              </div>
              <span className="font-bold tracking-widest text-white text-[11px] uppercase font-mono hidden sm:inline">
                VELOX <span className="text-slate-400 font-normal">MALİ KONSOL</span>
              </span>
            </div>

            {/* Mode Switcher Buttons */}
            <div className="flex items-center bg-black/60 p-0.5 rounded-lg border border-white/[0.08]">
              {modes.map((mode) => {
                const Icon = mode.icon;
                const isActive = currentMode === mode.id;
                return (
                  <button
                    key={mode.id}
                    onClick={() => {
                      setCurrentMode(mode.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={cn(
                      "flex items-center space-x-1.5 px-2.5 sm:px-3 py-1 rounded-md transition-all text-xs font-medium",
                      isActive 
                        ? "bg-slate-800 text-white shadow-inner-line font-semibold border border-white/15" 
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/[0.04]"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">{mode.label}</span>
                    <span className="md:hidden">
                      {mode.id === 'public' ? 'Web' : mode.id === 'portal' ? 'Müşteri' : 'SMMM'}
                    </span>
                    {isActive && (
                      <span className="hidden xl:inline-block px-1.5 py-0.2 bg-white/10 text-[9px] rounded font-mono text-slate-300">
                        {mode.badge}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Tools */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Quick Command Palette Button */}
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] transition-colors"
              title="Komut Paleti (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden lg:inline text-slate-300">Arama...</span>
              <kbd className="hidden sm:inline px-1 py-0.2 text-[9px] bg-black/60 text-slate-400 rounded border border-white/10 font-mono">
                ⌘K
              </kbd>
            </button>

            {/* AI Assistant */}
            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="flex items-center space-x-1.5 px-2.5 py-1 rounded-md bg-white text-black hover:bg-slate-200 font-semibold text-xs transition-all shadow-sm group"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-900" />
              <span className="hidden sm:inline">Aura AI</span>
              <span className="text-[9px] bg-black text-white px-1 py-0.2 rounded font-mono">
                Zeka
              </span>
            </button>

            {/* Demo Presentation Guide */}
            <button
              onClick={() => setIsDemoGuideOpen(true)}
              className="flex items-center space-x-1 px-2 py-1 rounded-md text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 transition-colors"
              title="Sunum Rehberi"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden xl:inline font-medium text-[11px]">Sunum Notları</span>
            </button>

          </div>

        </div>
      </div>
    </header>
  );
}
