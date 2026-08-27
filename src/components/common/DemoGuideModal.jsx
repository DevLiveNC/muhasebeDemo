import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Info, Globe, Building2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const GUIDE = [
  {
    icon: Globe,
    title: '1 · Web sitesi',
    lines: [
      'Ziyaretçi hizmetleri, ekibi ve referansları tek sayfada görür.',
      'Vergi hesaplama ile tahmini tasarrufu hemen çıkarır.',
      '“Görüşme alın” formu mali müşavire randevu düşürür.',
      'Müşteri girişi panele, ofis paneli de yönetim ekranına geçer.'
    ]
  },
  {
    icon: Building2,
    title: '2 · Müşteri paneli',
    lines: [
      'Ana sayfada kalan nakit, vergi indirimi, KDV durumu ve çeyrek satış özetlenir.',
      'Belgelerden fatura yüklenir; sistem birkaç saniyede okur.',
      'Vergi takviminde yaklaşan son günler sarı uyarı verir.',
      'Süreçler, mali müşavirin attığı adımları şeffaf gösterir.'
    ]
  },
  {
    icon: ShieldCheck,
    title: '3 · Ofis paneli',
    lines: [
      'Özet: 6 sayı, eksik evrak uyarısı, müşteri listesi ve ekip yükü.',
      'Belgelerde tekil veya toplu onay yapılır.',
      'Adaylar kartlarda ilerler; müşteri kartında detay incelenir.',
      'Tahsilatta e-SMM makbuzları açılır ve indirilir.'
    ]
  },
  {
    icon: Sparkles,
    title: '4 · VELOX AI',
    lines: [
      'Eksik evrak, gecikme riski ve günün iş listesi saniyeler içinde özetlenir.',
      'Cevaplar aksiyon butonlarıyla gelir (ör. hatırlatma gönder).',
      'TechVision sorusu müşteri kartını doğrudan açar.',
      '⌘K ile herhangi bir modda şirket, belge veya menüye atlanır.'
    ]
  }
];

export default function DemoGuideModal() {
  const { isDemoGuideOpen, setIsDemoGuideOpen, navigateToMode } = useApp();

  if (!isDemoGuideOpen) return null;

  const modes = [
    { id: 'public', label: 'Web sitesi' },
    { id: 'portal', label: 'Müşteri paneli' },
    { id: 'admin', label: 'Ofis paneli' }
  ];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-6 py-4 bg-pine-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 text-gold-300 flex items-center justify-center border border-white/10">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Sunum notları</h3>
              <p className="text-[11px] text-pine-200">VELOX’un 4 katmanı, 90 saniyede</p>
            </div>
          </div>
          <button
            onClick={() => setIsDemoGuideOpen(false)}
            className="p-1 rounded text-pine-200 hover:text-white hover:bg-white/10 transition-colors"
            title="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-5">
          {GUIDE.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.title} className="flex gap-4">
                <div className="w-9 h-9 rounded-lg bg-pine-50 border border-pine-100 text-pine-700 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-bold text-sm text-ink-900">{block.title}</h4>
                  <ul className="mt-2 space-y-1.5 text-[13px] text-ink-600 leading-relaxed">
                    {block.lines.map((line) => (
                      <li key={line}>· {line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="px-6 py-4 border-t border-line flex flex-wrap gap-2">
          {modes.map((m) => (
            <button
              key={m.id}
              onClick={() => {
                setIsDemoGuideOpen(false);
                navigateToMode(m.id);
              }}
              className="btn btn-outline btn-sm"
            >
              <span>{m.label}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
