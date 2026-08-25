import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Building2,
  FileText,
  Calendar,
  Sparkles,
  Briefcase,
  ArrowRight,
  X,
  FileSpreadsheet
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
    if (isCommandPaletteOpen) setQuery('');
  }, [isCommandPaletteOpen]);

  if (!isCommandPaletteOpen) return null;

  const quickActions = [
    {
      id: 'act-ai',
      title: 'VELOX AI Finans & Mevzuat Asistanını Başlat',
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
      title: 'Müşteri Konsolu — e-Arşiv / Fatura OCR Masası',
      category: 'Müşteri Konsolu',
      icon: FileSpreadsheet,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('portal', 'documents');
      }
    },
    {
      id: 'act-admin-calendar',
      title: 'SMMM Paneli — GİB & SGK Beyanname Takvimi',
      category: 'Yönetim Paneli',
      icon: Calendar,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('admin', 'calendar');
      }
    },
    {
      id: 'act-admin-docs',
      title: 'SMMM Paneli — Merkezi Evrak & OCR Onay Havuzu',
      category: 'Yönetim Paneli',
      icon: FileText,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('admin', 'documents');
      }
    },
    {
      id: 'act-admin-crm',
      title: 'SMMM Paneli — CRM & Lead Satış Hattı',
      category: 'Yönetim Paneli',
      icon: Briefcase,
      action: () => {
        setIsCommandPaletteOpen(false);
        navigateToMode('admin', 'crm');
      }
    }
  ];

  const filteredClients = clients.filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.sector.toLowerCase().includes(query.toLowerCase()) ||
      c.taxNumber.includes(query)
  );

  const filteredActions = quickActions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-[999] flex items-start justify-center pt-20 px-4 bg-ink-950/50 backdrop-blur-sm animate-fade-in font-sans">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-line bg-paper-50">
          <Search className="w-4 h-4 text-ink-400 mr-3 shrink-0" />
          <input
            type="text"
            placeholder="Mükellef unvanı, VKN, evrak veya işlem ara... (örn: TechVision, 876045, KDV)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm text-ink-950 placeholder-ink-300 focus:outline-none font-mono"
            autoFocus
          />
          <button
            onClick={() => setIsCommandPaletteOpen(false)}
            className="p-1 rounded text-ink-400 hover:text-ink-950 hover:bg-paper-200 transition-colors"
            title="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-3 space-y-4">

          {filteredActions.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono font-semibold tracking-[0.14em] text-ink-400 uppercase">
                Hızlı İşlemler & Navigasyon
              </div>
              <div className="mt-1 space-y-1">
                {filteredActions.map((action) => {
                  const Icon = action.icon;
                  return (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-left hover:bg-paper-100 transition-colors group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-paper-100 border border-line group-hover:border-pine-300 group-hover:bg-pine-50 text-ink-500 group-hover:text-pine-700 transition-colors">
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div>
                          <p className="font-semibold text-[13px] text-ink-950">{action.title}</p>
                          <p className="text-[11px] text-ink-400">{action.category}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-ink-300 group-hover:text-pine-700 group-hover:translate-x-1 transition-all" />
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {filteredClients.length > 0 && (
            <div>
              <div className="px-3 py-1 text-[10px] font-mono font-semibold tracking-[0.14em] text-ink-400 uppercase">
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
                    className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-left hover:bg-paper-100 transition-colors group"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-pine-50 border border-pine-100 text-pine-800 flex items-center justify-center font-bold text-xs shrink-0">
                        {client.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-[13px] text-ink-950 truncate">{client.name}</span>
                          <span className="badge badge-neutral shrink-0">{client.type}</span>
                        </div>
                        <p className="text-[11px] text-ink-400 font-mono truncate">
                          VKN: {client.taxNumber} · {client.taxOffice} · Sorumlu: {client.assignedCPA.name}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className={cn(
                        'badge',
                        client.missingDocsCount > 0 ? 'badge-danger' : 'badge-success'
                      )}>
                        {client.missingDocsCount > 0 ? `${client.missingDocsCount} Eksik Evrak` : 'Mizan Tam'}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5 text-ink-300 group-hover:text-pine-700 group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredActions.length === 0 && filteredClients.length === 0 && (
            <div className="py-12 text-center text-ink-400 text-sm">
              "{query}" ile eşleşen bir kayıt bulunamadı.
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="px-4 py-2 bg-paper-50 border-t border-line text-[11px] text-ink-400 flex items-center justify-between">
          <span>
            Kısayol: <kbd className="px-1.5 py-0.5 rounded bg-paper-200 border border-line text-ink-500 font-mono">ESC</kbd> ile kapat
          </span>
          <span className="font-mono text-[10px] tracking-widest uppercase">VELOX Command Bar</span>
        </div>
      </div>
    </div>
  );
}
