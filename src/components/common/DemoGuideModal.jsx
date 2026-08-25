import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Info, Globe, Building2, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

const GUIDE = [
  {
    icon: Globe,
    title: '1 · Kurumsal Web Sitesi',
    lines: [
      'Ziyaretçi, hizmet kapsamını, kurumsal akreditasyonları ve referansları tek sayfada görür.',
      'Vergi Simülatörü ile şirket büyüklüğüne göre tasarruf projeksiyonu anında hesaplanır.',
      '"Ön Görüşme Al" butonu SMMM masasına doğrudan randevu talebi düşer.',
      'Müşteri Girişi ile canlı portal demosuna, SMMM Masası ile yönetim kokpitine geçilir.'
    ]
  },
  {
    icon: Building2,
    title: '2 · Müşteri Konsolu',
    lines: [
      'Kokpitte nakit runway, 4691 teşviki, KDV durumu ve çeyrek hasılat 4 KPI ile özetlenir.',
      'Belgeler sekmesinden fatura sürüklenebilir; OCR 2.1 sn içinde tekdüzen kodlar.',
      'Vergi takviminde acil terminler amber renkle uyarı verir; tahakkuk ve banka talimatı tek tıkla inir.',
      'Canlı süreçler, SMMM adımlarını müşteriye şeffaf biçimde görüntüler.'
    ]
  },
  {
    icon: ShieldCheck,
    title: '3 · SMMM Yönetim Paneli',
    lines: [
      'Genel kokpit 6 KPI, kritik evrak uyarısı, portföy durumu ve ekip iş yükünü birleştirir.',
      'Evrak & OCR Masası\'nda tekil ve toplu yevmiye onayı yapılır.',
      'CRM kanbanında leadler aşama aşama taşınır; 360° müşteri kartı altı sekmede derinlemesine incelenebilir.',
      'Tahsilat ekranında e-SMM makbuzları GİB formatında görüntülenir ve indirilir.'
    ]
  },
  {
    icon: Sparkles,
    title: '4 · VELOX AI Asistanı',
    lines: [
      'Portföy geneli evrak eksiği, gecikme risk matrisi ve günün iş planı saniyeler içinde özetlenir.',
      'Yapılandırılmış cevaplar aksiyon butonlarıyla birleşir (örn: SMS hatırlatma gönder).',
      'TechVision 360° sorusu, müşteri kartını doğrudan açan kısayol sunar.',
      '⌘K komut paleti ile herhangi bir modda mükellef, evrak veya menüye anında sıçranır.'
    ]
  }
];

export default function DemoGuideModal() {
  const { isDemoGuideOpen, setIsDemoGuideOpen, navigateToMode } = useApp();

  if (!isDemoGuideOpen) return null;

  const modes = [
    { id: 'public', label: 'Web Sitesi' },
    { id: 'portal', label: 'Müşteri Konsolu' },
    { id: 'admin', label: 'SMMM Paneli' }
  ];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-pine-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 text-gold-300 flex items-center justify-center border border-white/10">
              <Info className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Sunum Rehberi & Demo Notları</h3>
              <p className="text-[11px] text-pine-200 font-mono">VELOX platformunun 4 katmanı, 90 saniyede</p>
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

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-5">
          {GUIDE.map((section) => {
            const Icon = section.icon;
            return (
              <div key={section.title} className="card p-5 space-y-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-pine-50 border border-pine-100 text-pine-700 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-[14px] text-ink-900">{section.title}</h4>
                </div>
                <ul className="space-y-2">
                  {section.lines.map((line, i) => (
                    <li key={i} className="text-[13px] text-ink-600 leading-relaxed flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-pine-600 mt-2 shrink-0"></span>
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-paper-50 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5">
            {modes.map((m, i) => (
              <React.Fragment key={m.id}>
                <button
                  onClick={() => {
                    navigateToMode(m.id);
                    setIsDemoGuideOpen(false);
                  }}
                  className="btn btn-outline btn-sm"
                >
                  {m.label}
                </button>
                {i < modes.length - 1 && <ArrowRight className="w-3 h-3 text-ink-300" />}
              </React.Fragment>
            ))}
          </div>
          <button
            onClick={() => setIsDemoGuideOpen(false)}
            className="btn btn-primary btn-sm"
          >
            Sunumu Başlat
          </button>
        </div>
      </div>
    </div>
  );
}
