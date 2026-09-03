import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Globe,
  Building2,
  ShieldCheck,
  Sparkles,
  Search,
  Info
} from 'lucide-react';
import { cn } from '../../utils/cn';
import BrandMark from './BrandMark';

export default function GlobalModeBar() {
  const {
    currentMode,
    setCurrentMode,
    setIsCommandPaletteOpen,
    setIsAiAssistantOpen,
    setIsDemoGuideOpen,
    firmInfo
  } = useApp();

  const modes = [
    { id: 'public', label: 'Web sitesi', short: 'Web', icon: Globe },
    { id: 'portal', label: 'Müşteri paneli', short: 'Müşteri', icon: Building2 },
    { id: 'admin', label: 'Ofis paneli', short: 'Ofis', icon: ShieldCheck }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-line">
      <div className="max-w-[1400px] mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11">

          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 pr-3 border-r border-line">
              <BrandMark size="sm" />
              <span className="hidden sm:inline text-[11px] font-semibold text-ink-900">
                {firmInfo.name} <span className="text-ink-400 font-medium">Mali</span>
              </span>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center bg-paper-200 p-0.5 rounded-lg border border-line">
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
                      'flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-md transition-all text-xs font-medium',
                      isActive
                        ? 'bg-pine-700 text-white shadow-sm font-semibold'
                        : 'text-ink-500 hover:text-ink-900 hover:bg-white'
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span className="hidden md:inline">{mode.label}</span>
                    <span className="md:hidden">{mode.short}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Tools */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white hover:bg-paper-100 text-ink-500 border border-line-strong transition-colors"
              title="Komut Paleti (Ctrl + K)"
            >
              <Search className="w-3.5 h-3.5 text-ink-400" />
              <span className="hidden lg:inline text-xs">Ara...</span>
              <kbd className="hidden sm:inline px-1.5 py-0.5 text-[9px] bg-paper-200 text-ink-500 rounded border border-line font-mono">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-pine-700 hover:bg-pine-700 text-white font-semibold text-xs transition-all shadow-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span className="hidden sm:inline">Asistan</span>
            </button>

            <button
              onClick={() => setIsDemoGuideOpen(true)}
              className="flex items-center gap-1 px-2 py-1 rounded-md text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors"
              title="Platform turu"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden md:inline text-[11px] font-medium">Platform turu</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
}
