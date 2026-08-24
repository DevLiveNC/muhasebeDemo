import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Building2,
  FileText,
  Calendar,
  CreditCard,
  Sparkles,
  Users,
  Briefcase,
  ArrowRight,
  X,
  Compass,
  FileSpreadsheet,
  Zap,
  Layers
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function CommandPalette() {
  const {
    isCommandPaletteOpen,
    setIsCommandPaletteOpen,
    navigateToMode,
    openClientDetail,
    clients,
    setIsAiAssistantOpen,
    setIsConsultationOpen
  } = useApp();

  const [query, setQuery] = useState('');

  useEffect(() => {
    if (isCommandPaletteOpen) {
      setQuery('');
    }
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const quickActions = [
    {
      id: 'act-ai',
      title: 'Aura AI Finans & Mevzuat Asistanını Başlat',
      category: 'Yapay Zeka',
      icon: Sparkles,
      action: () => {
        setIsCommandPaletteOpen(false);
        setIsAiAssistantOpen(true);
      }
    },
    {
      id: 'act-consult',
      title: 'Mali Müşavirlik Ön Görüşme Randevusu Al',
      category: 'Hızlı İşlem',
      icon: Calendar,
      action: () => {
        setIsCommandPaletteOpen(false);
        setIsConsultationOpen(true);
      }
    },
    {
      id: 'act-portal-docs',
      title: 'Mükellef Portalı — e-Arşiv / Fatura OCR Masası',
      category: 'Mükellef Portalı',
      icon: FileSpreadsheet,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('portal', 'documents');
      }
    },
    {
      id: 'act-admin-calendar',
      title: 'SMMM Kokpiti — GİB & SGK Beyanname Takvimi',
      category: 'Yönetim Paneli',
      icon: Calendar,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('admin', 'calendar');
      }
    },
    {
      id: 'act-admin-docs',
      title: 'SMMM Kokpiti — Merkezi Evrak & OCR Onay Havuzu',
      category: 'Yönetim Paneli',
      icon: FileText,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('admin', 'documents');
      }
    },
    {
      id: 'act-admin-crm',
      title: 'SMMM Kokpiti — CRM & Lead Satış Hattı',
      category: 'Yönetim Paneli',
      icon: Briefcase,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('admin', 'crm');
      }
    }
  ];

  // Filter clients
  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.sector.toLowerCase().includes(query.toLowerCase()) ||
      c.taxNumber.includes(query)
  );

  // Filter actions
  const filteredActions = quickActions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-2xl bg-[#0b0d13] rounded-2xl shadow-2xl border border-white/10 overflow-hidden text-slate-100 transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-black/40">
          <Search className="w-4 h-4 text-slate-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Mükellef unvanı, VKN, evrak veya işlem ara... (örn: TechVision, 876045, KDV)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/[0.06]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4 font-mono text-xs">
          
          {/* Quick Actions */}
          {filteredActions.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                Hızlı İşlemler & Navigasyon
              </div>
              <div className="mt-1 space-y-1">
                {filteredActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-xl text-left text-xs text-slate-300 hover:bg-white/[0.04] hover:text-white transition-all group"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-lg bg-white/[0.04] border border-white/[0.06] group-hover:border-white/20 text-slate-400 group-hover:text-white">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-medium text-white font-sans text-xs">{action.title}</p>
                          <p className="text-[10px] text-slate-500">{action.category}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Clients Matching */}
          {filteredClients.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-bold tracking-wider text-slate-500 uppercase">
                Portföy Mükellefleri ({filteredClients.length})
              </div>
              <div className="mt-1 space-y-1">
                {filteredClients.map((client) => (
                  <button
                    key={client.id}
                    onClick={() => {
                      setIsCommandPaletteOpen(false);
                      openClientDetail(client.id);
                    }}
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-xs text-slate-300 hover:bg-white/[0.04] transition-all group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/10 text-white flex items-center justify-center font-bold text-xs">
                        {client.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center space-x-2">
                          <span className="font-bold text-white font-sans text-xs">{client.name}</span>
                          <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-slate-300">
                            {client.type}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 font-mono">
                          VKN: {client.taxNumber} · {client.taxOffice} · Sorumlu: {client.assignedCPA.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={cn(
                        "text-[10px] px-2 py-0.5 rounded font-mono font-bold",
                        client.missingDocsCount > 0 
                          ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" 
                          : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      )}>
                        {client.missingDocsCount > 0 ? `${client.missingDocsCount} Eksik Evrak` : 'Mizan Tam'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredActions.length === 0 && filteredClients.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-xs font-mono">
              "{query}" ile eşleşen bir kayıt bulunamadı.
            </div>
          )}

        </div>

        {/* Footer info */}
        <div className="px-4 py-2 bg-black/60 border-t border-white/[0.08] text-[11px] font-mono text-slate-400 flex items-center justify-between">
          <span>Kısayol: <kbd className="px-1 py-0.5 rounded bg-white/10 border border-white/20 text-slate-300">ESC</kbd> ile kapat</span>
          <span className="text-slate-400">VELOX Command Bar</span>
        </div>
      </div>
    </div>
  );
}
