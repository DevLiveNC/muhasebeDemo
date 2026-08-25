import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Download, ArrowUpRight } from 'lucide-react';

export default function PortalReports() {
  const { addToast } = useApp();
  const [selectedPeriod, setSelectedPeriod] = useState('2026-q2');

  const handleExportReport = (reportName) => {
    addToast('Mali Rapor İndirildi', `${reportName} PDF & Excel formatında cihazınıza aktarıldı.`, 'success');
  };

  const months = [
    { month: 'Ocak', inH: 55, outH: 35, revenue: '₺1.5M', cost: '₺820K' },
    { month: 'Şubat', inH: 65, outH: 38, revenue: '₺1.7M', cost: '₺840K' },
    { month: 'Mart', inH: 75, outH: 40, revenue: '₺2.0M', cost: '₺850K' },
    { month: 'Nisan', inH: 70, outH: 42, revenue: '₺1.9M', cost: '₺870K' },
    { month: 'Mayıs', inH: 88, outH: 45, revenue: '₺2.3M', cost: '₺890K' },
    { month: 'Haziran', inH: 96, outH: 48, revenue: '₺2.6M', cost: '₺910K' }
  ];

  const costs = [
    { label: 'Personel ve SGK Maliyeti', pct: 58, amount: '₺645K', color: 'bg-pine-600' },
    { label: 'Bulut Sunucu & SaaS Altyapısı', pct: 22, amount: '₺245K', color: 'bg-pine-300' },
    { label: 'Ofis & Operasyonel Gider', pct: 12, amount: '₺133K', color: 'bg-gold-400' },
    { label: 'Pazarlama & Büyüme', pct: 8, amount: '₺89K', color: 'bg-ink-300' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">Finansal Analiz & Sanal CFO Konsolu</h1>
          <p className="text-xs text-ink-400 mt-1">Gelir-gider tabloları, EBITDA kârlılık kırılımları ve nakit runway modelleri</p>
        </div>

        <div className="flex items-center gap-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="select w-auto text-xs font-mono py-2"
          >
            <option value="2026-q2">2026 - Q2 (Nis - May - Haz)</option>
            <option value="2026-q1">2026 - Q1 (Oca - Şub - Mar)</option>
            <option value="2025-yillik">2025 Yıllık Kesin Bilanço</option>
          </select>

          <button
            onClick={() => handleExportReport('TechVision_2026_Q2_CFO_Raporu')}
            className="btn btn-primary btn-sm shrink-0"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Mali Raporu İndir</span>
          </button>
        </div>
      </div>

      {/* Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-6 space-y-1.5">
          <span className="kpi-label">Net Dönem Hasılatı</span>
          <p className="font-mono text-3xl font-semibold text-ink-900 tracking-tight">₺5.420.000</p>
          <span className="text-[11px] text-success-deep font-semibold flex items-center gap-1 font-mono">
            <ArrowUpRight className="w-3.5 h-3.5" />
            +%28.4 Çeyreklik Büyüme
          </span>
        </div>

        <div className="card p-6 space-y-1.5">
          <span className="kpi-label">Faaliyet Kâr Marjı (EBITDA)</span>
          <p className="font-mono text-3xl font-semibold text-pine-700 tracking-tight">%36.8</p>
          <span className="text-[11px] text-ink-400 font-mono">Sektör ortalaması %22</span>
        </div>

        <div className="card p-6 space-y-1.5">
          <span className="kpi-label">4691 Teşvik Kazancı</span>
          <p className="font-mono text-3xl font-semibold text-ink-900 tracking-tight">₺198.400</p>
          <span className="text-[11px] text-ink-400 font-mono">Teknopark & Ar-Ge İndirimi</span>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Revenue Stream */}
        <div className="lg:col-span-7 card p-6 space-y-5">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <h3 className="font-bold text-ink-900 text-sm">Aylık Gelir - Gider ve Nakit Akışı</h3>
            <div className="flex items-center gap-4 text-[11px] font-mono text-ink-500">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-pine-600"></span>
                Gelir
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-ink-300"></span>
                Gider
              </span>
            </div>
          </div>

          <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2 border-b border-line">
            {months.map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 group cursor-pointer" title={`Gelir: ${bar.revenue} / Gider: ${bar.cost}`}>
                <div className="w-full flex items-end justify-center gap-1.5 h-32">
                  <div
                    style={{ height: `${bar.inH}%` }}
                    className="w-1/2 bg-pine-600 rounded-t transition-all group-hover:bg-pine-700"
                  />
                  <div
                    style={{ height: `${bar.outH}%` }}
                    className="w-1/2 bg-ink-300/70 rounded-t transition-all group-hover:bg-ink-300"
                  />
                </div>
                <span className="text-[10px] font-mono text-ink-400">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Cost Breakdown */}
        <div className="lg:col-span-5 card p-6 space-y-5">
          <h3 className="font-bold text-ink-900 text-sm">Gider Dağılımı (Q2 2026)</h3>

          <div className="space-y-4">
            {costs.map((c, i) => (
              <div key={i}>
                <div className="flex justify-between text-[13px] mb-1.5">
                  <span className="text-ink-600">{c.label}</span>
                  <span className="font-mono font-bold text-ink-900">
                    %{c.pct} <span className="text-ink-400 font-medium">({c.amount})</span>
                  </span>
                </div>
                <div className="progress">
                  <div style={{ width: `${c.pct}%` }} className={`h-full rounded-full ${c.color}`} />
                </div>
              </div>
            ))}
          </div>

          <div className="p-3.5 rounded-xl bg-pine-50 border border-pine-100 text-[12px] text-pine-900 leading-relaxed">
            <strong>Sanal CFO Notu:</strong> Bulut altyapı giderindeki artış, AWS taahhütli
            kapasiteye geçişle 2026 Q3'te ~%15 düşürülebilir.
          </div>
        </div>

      </div>

    </div>
  );
}
