import React from 'react';
import { useApp } from '../../context/AppContext';
import { Download, Award } from 'lucide-react';

export default function AdminReports() {
  const { addToast } = useApp();

  const handleExport = (name) => {
    addToast('Yönetim Raporu Oluşturuldu', `${name} PDF formatında indirildi.`, 'success');
  };

  const growth = [
    { month: 'Mart', value: 40 },
    { month: 'Nisan', value: 43 },
    { month: 'Mayıs', value: 45 },
    { month: 'Haziran', value: 46 },
    { month: 'Temmuz', value: 47 },
    { month: 'Ağustos', value: 48 }
  ];

  const revenueMix = [
    { label: 'Tekdüzen Muhasebe & Vergi', pct: 46, amount: '₺850K' },
    { label: 'E-Dönüşüm & Berat Yönetimi', pct: 22, amount: '₺403K' },
    { label: 'Teşvik & İade Danışmanlığı', pct: 18, amount: '₺329K' },
    { label: 'Sanal CFO & Raporlama', pct: 14, amount: '₺256K' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-pine">Yönetici Analitik Kokpiti</span>
            <span className="text-ink-400 font-mono text-xs">2026 Mali Yıl</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-950 tracking-tight mt-1.5">
            Yönetim Raporları & Firma Analitiği
          </h1>
          <p className="text-xs text-ink-400 mt-1">Portföy büyümesi, SMMM operasyon verimliliği ve kârlılık metrikleri</p>
        </div>

        <button
          onClick={() => handleExport('VELOX_2026_Yonetici_Konsolide_Raporu')}
          className="btn btn-primary btn-sm shrink-0"
        >
          <Download className="w-3.5 h-3.5" />
          <span>Konsolide PDF İndir</span>
        </button>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-5 space-y-1.5">
          <span className="kpi-label">Mükellef Sadakat Oranı (Retention)</span>
          <p className="font-mono text-2xl font-semibold text-pine-700 tracking-tight">%98.4</p>
          <p className="text-[11px] font-mono text-ink-400">Sektör ortalaması %82</p>
        </div>
        <div className="card p-5 space-y-1.5">
          <span className="kpi-label">Ortalama OCR Fatura İndeksleme</span>
          <p className="font-mono text-2xl font-semibold text-ink-950 tracking-tight">2.1 Saniye / Fatura</p>
          <p className="text-[11px] font-mono text-ink-400">Neural OCR & Tekdüzen AI Eşleme</p>
        </div>
        <div className="card p-5 space-y-1.5">
          <span className="kpi-label">Mükellef Başına Ortalama Gelir (ARPU)</span>
          <p className="font-mono text-2xl font-semibold text-ink-950 tracking-tight">₺18.500 / Ay</p>
          <p className="text-[11px] font-mono text-success-deep">+%22 Büyüme (Yıllık)</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Portfolio Growth */}
        <div className="lg:col-span-7 card p-6 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-ink-950 text-sm">Portföy Büyümesi (Son 6 Ay)</h3>
            <span className="badge badge-success">+8 Yeni Mükellef</span>
          </div>

          <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2 border-b border-line">
            {growth.map((g, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer">
                <span className="text-[10px] font-mono text-ink-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.value}
                </span>
                <div
                  style={{ height: `${(g.value / 48) * 100}%` }}
                  className="w-full max-w-[42px] bg-pine-600 group-hover:bg-pine-700 rounded-t transition-colors"
                />
                <span className="text-[10px] font-mono text-ink-400">{g.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Mix */}
        <div className="lg:col-span-5 card p-6 space-y-5">
          <h3 className="font-bold text-ink-950 text-sm">Hizmet Gelir Dağılımı (Ağustos)</h3>

          <div className="space-y-4">
            {revenueMix.map((r, i) => (
              <div key={i}>
                <div className="flex justify-between text-[13px] mb-1.5">
                  <span className="text-ink-600">{r.label}</span>
                  <span className="font-mono font-bold text-ink-950">
                    %{r.pct} <span className="text-ink-400 font-medium">({r.amount})</span>
                  </span>
                </div>
                <div className="progress">
                  <div
                    style={{ width: `${r.pct}%` }}
                    className={`h-full rounded-full ${['bg-pine-600', 'bg-pine-400', 'bg-gold-400', 'bg-pine-200'][i]}`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-pine-50 border border-pine-100 text-[12px] text-pine-900 leading-relaxed flex items-start gap-2.5">
            <Award className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
            <span>
              <strong>Yıllık Hedef:</strong> Yıllık ₺14,2M ciro hedefinin %91,3'ü
              karşılandı; Q4 hedefi ₺1,6M.
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
