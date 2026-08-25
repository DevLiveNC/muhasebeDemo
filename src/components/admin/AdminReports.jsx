import React from 'react';
import { useApp } from '../../context/AppContext';
import { BarChart3, TrendingUp, Download, PieChart, Users, Award, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function AdminReports() {
  const { addToast } = useApp();

  const handleExport = (name) => {
    addToast('Yönetim Raporu Oluşturuldu', `${name} PDF formatında indirildi.`, 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider border border-emerald-500/20">
              Yönetici Analitik Kokpiti
            </span>
            <span className="text-slate-500 font-mono text-xs">2026 Mali Yıl</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Yönetim Raporları & Firma Analitiği</h1>
          <p className="text-xs text-slate-400 font-mono">Portföy büyümesi, SMMM operasyon verimliliği ve kârlılık metrikleri</p>
        </div>

        <button
          onClick={() => handleExport('VELOX_2026_Yonetici_Konsolide_Raporu')}
          className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
        >
          <Download className="w-3.5 h-3.5 text-black" />
          <span>Konsolide PDF Raporunu İndir</span>
        </button>
      </div>

      {/* 3 Analytics Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Mükellef Sadakat Oranı (Retention)</span>
          <p className="text-2xl font-bold font-mono text-emerald-400">%98.4</p>
          <p className="text-[11px] font-mono text-slate-400">Sektör ortalaması %82</p>
        </div>

        <div className="p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Ortalama OCR Fatura İndeksleme</span>
          <p className="text-2xl font-bold font-mono text-white">2.1 Saniye / Fatura</p>
          <p className="text-[11px] font-mono text-slate-400">Neural OCR & Tekdüzen AI Eşleme</p>
        </div>

        <div className="p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Mükellef Başına Ortalama Gelir (ARPU)</span>
          <p className="text-2xl font-bold font-mono text-white">₺18,500 / Ay</p>
          <p className="text-[11px] font-mono text-emerald-400/80">+%22 Büyüme (Yıllık)</p>
        </div>
      </div>

      {/* Visual Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left: Monthly Revenue Growth */}
        <div className="lg:col-span-7 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-5 shadow-cinema">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white text-sm sm:text-base">Mali Müşavirlik Ciro Gelişimi (2026)</h3>
            <span className="text-xs font-mono text-emerald-400">Toplam: ₺7.8M (YTD)</span>
          </div>

          <div className="h-48 flex items-end justify-between gap-3 pt-4 px-2 border-b border-white/[0.06]">
            {[
              { m: 'Oca', h: 60, val: '₺580K' },
              { m: 'Şub', h: 65, val: '₺610K' },
              { m: 'Mar', h: 72, val: '₺640K' },
              { m: 'Nis', h: 76, val: '₺660K' },
              { m: 'May', h: 84, val: '₺690K' },
              { m: 'Haz', h: 88, val: '₺710K' },
              { m: 'Tem', h: 95, val: '₺720K' },
            ].map((bar, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-1.5 group cursor-pointer">
                <div 
                  style={{ height: `${bar.h}%` }}
                  className="w-full bg-white/[0.15] border border-white/20 rounded-t group-hover:bg-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all"
                  title={bar.val}
                />
                <span className="text-[10px] font-mono text-slate-500 group-hover:text-white transition-colors">{bar.m}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Portfolio by Sector */}
        <div className="lg:col-span-5 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4 shadow-cinema">
          <h3 className="font-bold text-white text-sm sm:text-base">Portföy Sektörel Dağılımı</h3>

          <div className="space-y-3.5 text-xs font-mono">
            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Teknoloji & SaaS (Teknopark)</span>
                <span className="font-bold text-white">42% (20 Şirket)</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="w-[42%] h-full bg-white rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>E-Ticaret & E-İhracat</span>
                <span className="font-bold text-white">28% (14 Şirket)</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="w-[28%] h-full bg-slate-300 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Lojistik & Dış Ticaret</span>
                <span className="font-bold text-white">18% (9 Şirket)</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="w-[18%] h-full bg-emerald-400 rounded-full"></div>
              </div>
            </div>

            <div>
              <div className="flex justify-between text-slate-300 mb-1">
                <span>Hizmet & Mimarlık</span>
                <span className="font-bold text-white">12% (5 Şirket)</span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div className="w-[12%] h-full bg-amber-400 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
