import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Download, ArrowUpRight } from 'lucide-react';
import { formatCurrency } from '../../utils/cn';

export default function PortalReports() {
  const { addToast } = useApp();
  const [selectedPeriod, setSelectedPeriod] = useState('2026-q2');

  const handleExportReport = (reportName) => {
    addToast('Mali Rapor İndirildi', `${reportName} PDF & Excel formatında cihazınıza aktarıldı.`, 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Finansal Analiz & Sanal CFO Konsolu</h1>
          <p className="text-xs text-slate-400 font-mono">Gelir-gider tabloları, EBITDA kârlılık kırılımları ve nakit runway modelleri</p>
        </div>

        <div className="flex items-center space-x-2">
          <select
            value={selectedPeriod}
            onChange={(e) => setSelectedPeriod(e.target.value)}
            className="px-3 py-2 bg-black/40 border border-white/10 rounded-lg text-xs font-mono text-white focus:outline-none"
          >
            <option value="2026-q2">2026 - Q2 (Nis - May - Haz)</option>
            <option value="2026-q1">2026 - Q1 (Oca - Şub - Mar)</option>
            <option value="2025-yillik">2025 Yıllık Kesin Bilanço</option>
          </select>

          <button
            onClick={() => handleExportReport('TechVision_2026_Q2_CFO_Raporu')}
            className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
          >
            <Download className="w-3.5 h-3.5 text-black" />
            <span>Mali Raporu İndir</span>
          </button>
        </div>
      </div>

      {/* 3 Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono text-slate-400">Net Dönem Hasılatı</span>
          <p className="text-3xl font-black text-white ledger-mono">₺5,420,000</p>
          <span className="text-[11px] text-emerald-400 font-semibold flex items-center space-x-1 font-mono">
            <ArrowUpRight className="w-3.5 h-3.5" />
            <span>+%28.4 Çeyreklik Büyüme</span>
          </span>
        </div>

        <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono text-slate-400">Faaliyet Kâr Marjı (EBITDA)</span>
          <p className="text-3xl font-black text-emerald-400 ledger-mono">%36.8</p>
          <span className="text-[11px] text-slate-400 font-mono">Sektör ortalaması %22</span>
        </div>

        <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono text-slate-400">4691 Teşvik Kazancı</span>
          <p className="text-3xl font-black text-white ledger-mono">₺198,400</p>
          <span className="text-[11px] text-slate-300 font-mono">Teknopark & Ar-Ge İndirimi</span>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Monthly Revenue Stream */}
        <div className="lg:col-span-7 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white text-sm">Aylık Gelir - Gider ve Nakit Akışı</h3>
            <div className="flex items-center space-x-3 text-xs font-mono">
              <span className="flex items-center space-x-1 text-white">
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Gelir</span>
              </span>
              <span className="flex items-center space-x-1 text-slate-500">
                <span className="w-2 h-2 rounded-full bg-slate-600"></span>
                <span>Gider</span>
              </span>
            </div>
          </div>

          <div className="h-44 flex items-end justify-between gap-3 pt-4 px-2 border-b border-white/[0.06]">
            {[
              { month: 'Ocak', inH: 55, outH: 35, revenue: '₺1.5M', cost: '₺820K' },
              { month: 'Şubat', inH: 65, outH: 38, revenue: '₺1.7M', cost: '₺840K' },
              { month: 'Mart', inH: 75, outH: 40, revenue: '₺2.0M', cost: '₺850K' },
              { month: 'Nisan', inH: 70, outH: 42, revenue: '₺1.9M', cost: '₺870K' },
              { month: 'Mayıs', inH: 88, outH: 45, revenue: '₺2.3M', cost: '₺890K' },
              { month: 'Haziran', inH: 96, outH: 48, revenue: '₺2.6M', cost: '₺910K' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer font-mono">
                <div className="w-full flex items-end justify-center gap-1.5 h-32">
                  <div 
                    style={{ height: `${bar.inH}%` }} 
                    className="w-1/2 bg-white rounded-t transition-all group-hover:bg-slate-200"
                    title={`Gelir: ${bar.revenue}`}
                  />
                  <div 
                    style={{ height: `${bar.outH}%` }} 
                    className="w-1/2 bg-slate-700 rounded-t transition-all group-hover:bg-slate-600"
                    title={`Gider: ${bar.cost}`}
                  />
                </div>
                <span className="text-[10px] text-slate-400">{bar.month}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Cost Breakdown */}
        <div className="lg:col-span-5 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
          <h3 className="font-bold text-white text-sm">Gider Dağılımı (Q2 2026)</h3>

          <div className="space-y-3 text-xs">
            <div>
              <div className="flex justify-between font-mono text-slate-300 mb-1">
                <span>Personel ve SGK Maliyeti</span>
                <span className="text-white font-bold">58% (₺645K)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[58%] h-full bg-white rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-mono text-slate-300 mb-1">
                <span>Bulut Sunucu & SaaS Altyapısı</span>
                <span className="text-white font-bold">22% (₺245K)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[22%] h-full bg-slate-400 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-mono text-slate-300 mb-1">
                <span>Ofis & Operasyonel Gider</span>
                <span className="text-white font-bold">12% (₺133K)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[12%] h-full bg-emerald-400 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between font-mono text-slate-300 mb-1">
                <span>Pazarlama & Büyüme</span>
                <span className="text-white font-bold">8% (₺89K)</span>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[8%] h-full bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
