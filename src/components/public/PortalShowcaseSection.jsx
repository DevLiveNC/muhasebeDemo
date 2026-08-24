import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  UploadCloud,
  FileCheck2,
  Calendar,
  LineChart,
  MessageSquare,
  ShieldCheck,
  Building2,
  ArrowRight,
  TrendingUp
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PortalShowcaseSection() {
  const { navigateToMode } = useApp();
  const [activeTab, setActiveTab] = useState('ocr');

  const tabs = [
    {
      id: 'ocr',
      title: 'Akıllı OCR & Otomatik Yevmiye',
      desc: 'Fatura ve ekstreleri yükleyin; sistem matrah, KDV oranı, tevkifat ve 120/320 cari hesaplarını 2.1 saniyede bağlasın.'
    },
    {
      id: 'tax',
      title: 'Canlı Vergi ve Beyan Takvimi',
      desc: 'KDV, Muhtasar ve SGK için yasal son günleri geri sayımla izleyin; sürpriz vergi ödemelerini 15 gün önceden görün.'
    },
    {
      id: 'cashflow',
      title: 'Sanal CFO & Nakit Runway Analitiği',
      desc: 'Gelir-gider dengesi, aylık nakit tüketimi (burn rate) ve kârlılık kırılımlarını anlık grafiklerle takip edin.'
    },
    {
      id: 'cpa',
      title: 'Atanmış SMMM & Danışman Masası',
      desc: 'Şirketinize özel atanan kıdemli mali müşavir ile doğrudan yazışın, faaliyet belgesi ve YMM tasdik raporu talep edin.'
    }
  ];

  return (
    <section id="portal-preview" className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.08] scroll-mt-16 text-slate-100 relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
            Müşterilerimize Özel Dijital Deneyim
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Şirketinizin mali kontrol merkezi: <br />
            <span className="font-editorial italic font-normal text-slate-200">VELOX Müşteri Konsolu</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Tarayıcınızdan veya mobil cihazınızdan tüm finansal ve resmi muhasebe işlemlerinizi tek ekranda yönetin.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Feature Buttons */}
          <div className="lg:col-span-5 space-y-3">
            {tabs.map((tab) => {
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "w-full text-left p-5 rounded-xl border transition-all text-xs space-y-1.5",
                    isSelected
                      ? "bg-white/[0.06] border-white/20 shadow-luxury"
                      : "bg-white/[0.02] border-white/[0.06] hover:bg-white/[0.04] text-slate-400"
                  )}
                >
                  <h3 className={cn("font-bold text-sm", isSelected ? "text-white" : "text-slate-300")}>
                    {tab.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tab.desc}
                  </p>
                </button>
              );
            })}

            <div className="pt-2">
              <button
                onClick={() => navigateToMode('portal')}
                className="w-full py-3.5 bg-white hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider rounded-xl shadow-luxury flex items-center justify-center space-x-2 transition-all"
              >
                <Building2 className="w-4 h-4 text-black" />
                <span>Müşteri Konsolu Canlı Demosunu Başlat</span>
                <ArrowRight className="w-4 h-4 text-black" />
              </button>
            </div>
          </div>

          {/* Right Column: Simulated Live Console View */}
          <div className="lg:col-span-7 obsidian-card rounded-2xl p-5 border border-white/[0.08] shadow-cinema">
            
            {/* Top status */}
            <div className="flex items-center justify-between pb-3 border-b border-white/[0.08] text-xs text-slate-400 font-mono">
              <span className="text-white font-semibold">TechVision Bilişim A.Ş. — Müşteri Paneli</span>
              <span className="text-emerald-400">● 4691 Teşvik Aktif</span>
            </div>

            {/* Dynamic Card Content */}
            <div className="pt-5 min-h-[300px] text-xs">
              
              {activeTab === 'ocr' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="border-2 border-dashed border-white/20 bg-white/[0.02] rounded-xl p-6 text-center space-y-2">
                    <UploadCloud className="w-8 h-8 text-slate-300 mx-auto" />
                    <p className="font-bold text-white text-sm">Faturayı Buraya Sürükleyin veya Seçin</p>
                    <p className="text-[11px] text-slate-400 font-mono">PDF, PNG, XML — Yapay Zeka OCR 2.1 Sn</p>
                  </div>

                  <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <span className="font-mono text-white text-xs block">AWS_EMEA_SARL_Temmuz.pdf</span>
                      <span className="text-[10px] text-slate-400">770.01 Bulut Sunucu / ₺142,850.00</span>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/20">
                      ✓ %99.9 OCR Okundu
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'tax' && (
                <div className="space-y-3 animate-fade-in">
                  <div className="p-4 bg-black/40 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block text-sm">Temmuz 2026 KDV-1 Beyannamesi</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Son Gün: 28 Ağustos 2026 (Kalan: 4 Gün)</p>
                    </div>
                    <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-400 rounded-full font-mono text-[11px] font-semibold border border-emerald-500/20">
                      Taslak Onaylandı
                    </span>
                  </div>

                  <div className="p-4 bg-black/40 rounded-xl border border-white/[0.06] flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white block text-sm">Muhtasar & SGK Prim Hizmet</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Son Gün: 26 Ağustos 2026 (Kalan: 2 Gün)</p>
                    </div>
                    <span className="px-2.5 py-1 bg-white/10 text-white rounded-full font-mono text-[11px] font-semibold">
                      Tahakkuk Alındı
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'cashflow' && (
                <div className="space-y-4 animate-fade-in">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06]">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">Nakit Runway</span>
                      <span className="text-xl font-bold text-white ledger-mono">18.4 Ay</span>
                      <p className="text-[10px] text-emerald-400 mt-0.5">₺845K Aylık Burn Rate</p>
                    </div>
                    <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06]">
                      <span className="text-[10px] uppercase font-mono text-slate-400 block">4691 Teşvik Avantajı</span>
                      <span className="text-xl font-bold text-emerald-400 ledger-mono">₺38,400</span>
                      <p className="text-[10px] text-slate-400 mt-0.5">34 personel stopaj muafiyeti</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cpa' && (
                <div className="space-y-3 animate-fade-in">
                  <div className="flex items-center space-x-3 p-3.5 bg-black/40 rounded-xl border border-white/[0.06]">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                      alt="SMMM Kemal Yıldız"
                      className="w-10 h-10 rounded-lg object-cover border border-white/10"
                    />
                    <div>
                      <p className="font-bold text-white">SMMM Kemal Yıldız</p>
                      <p className="text-[11px] text-slate-400">Kıdemli Vergi & Teknopark Direktörü</p>
                    </div>
                  </div>

                  <div className="p-3.5 bg-white/[0.02] rounded-xl border border-white/[0.06] text-xs text-slate-300 leading-relaxed font-sans">
                    "Kerem Bey merhaba, Teknopark kurumlar vergisi muafiyeti ve Temmuz bordroları onaylandı. Herhangi bir evrak eksiğiniz bulunmamaktadır."
                  </div>
                </div>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
