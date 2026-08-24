import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  FileCheck2,
  Clock,
  Building2,
  Zap,
  Terminal,
  Layers,
  Sparkles,
  Lock,
  FileSpreadsheet
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function HeroSection() {
  const {
    navigateToMode,
    setIsConsultationOpen,
    setIsAiAssistantOpen,
    firmInfo
  } = useApp();

  const [activeLedgerTab, setActiveLedgerTab] = useState('journal'); // 'journal' | 'tax' | 'ocr'

  const liveTransactions = [
    {
      code: "770.01.002",
      account: "Bulut Sunucu ve Altyapı",
      party: "AWS EMEA SARL (Lüksemburg)",
      debit: "₺142,850.00",
      credit: "-",
      taxNote: "2 No KDV Tevkifatı (%20) İşlendi",
      status: "GİB Doğrulandı"
    },
    {
      code: "102.01.001",
      account: "Garanti BBVA Ticari Mevduat",
      party: "Enterprise SaaS Sözleşmesi",
      debit: "₺650,000.00",
      credit: "-",
      taxNote: "Geçici 20/1 Yazılım İstisnası (%0 KDV)",
      status: "Tahsil Edildi"
    },
    {
      code: "770.02.001",
      account: "Ar-Ge Personel Bordro İcmali",
      party: "34 Yazılım Mühendisi",
      debit: "₺645,000.00",
      credit: "-",
      taxNote: "4691 Sayılı Kanun ₺38,400 Terkin",
      status: "SGK Onaylı"
    }
  ];

  return (
    <section className="relative overflow-hidden pt-16 pb-24 md:pt-24 md:pb-32 bg-[#08090d] text-slate-100 border-b border-white/[0.08]">
      
      {/* Background Architectural Glows & Grid */}
      <div className="absolute inset-0 bg-cinematic-grid opacity-60 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[550px] bg-radial-luxury pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[350px] bg-radial-emerald pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Regulatory Accreditation Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-300 backdrop-blur-md hover:border-white/20 transition-all">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span className="text-slate-400 font-mono text-[11px]">TÜRMOB Ruhsat No: 349102 · KGK Bağımsız Denetim</span>
            <span className="text-white font-semibold hidden sm:inline">Kurumsal Mali Müşavirlik</span>
          </div>
        </div>

        {/* Hero Headline & Subhead */}
        <div className="text-center max-w-4xl mx-auto mt-8 space-y-6">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08]">
            Muhasebenizi değil, <br />
            <span className="font-editorial italic font-normal text-slate-200">işinizi büyütmeye</span> odaklanın.
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Teknopark muafiyetleri, Ar-Ge teşvikleri, ihracat KDV iadesi ve 90 günlük nakit akışını tek bir rafine dijital konsolda yöneten yeni nesil mali müşavirlik.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-4">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-luxury transition-all active:scale-95"
            >
              <span>Ücretsiz Mali Ön Görüşme Al</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>

            <button
              onClick={() => navigateToMode('portal')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-slate-200 font-semibold text-xs border border-white/10 flex items-center justify-center space-x-2 transition-all"
            >
              <Building2 className="w-4 h-4 text-slate-400" />
              <span>Müşteri Konsolunu İncele</span>
            </button>

            <button
              onClick={() => navigateToMode('admin')}
              className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 font-semibold text-xs border border-white/10 flex items-center justify-center space-x-2 transition-all"
            >
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>SMMM Yönetim Masası</span>
            </button>
          </div>

          {/* Trust Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-3 text-xs text-slate-400 font-medium">
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>GİB & E-Defter %100 Entegre</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Sıfır Ceza & Hata Güvencesi</span>
            </span>
            <span className="flex items-center space-x-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Atanmış Kıdemli SMMM Masası</span>
            </span>
          </div>
        </div>

        {/* Cinematic Live Financial Terminal Mockup */}
        <div className="mt-14 max-w-5xl mx-auto">
          <div className="obsidian-card rounded-2xl p-1 shadow-cinema overflow-hidden">
            
            {/* Top Terminal Bar */}
            <div className="px-4 py-3 bg-[#0d1017] rounded-t-xl flex items-center justify-between border-b border-white/[0.08] text-xs">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-700"></div>
                </div>
                <div className="h-4 w-[1px] bg-white/10"></div>
                <span className="text-slate-300 font-mono text-[11px] flex items-center space-x-1.5">
                  <Terminal className="w-3.5 h-3.5 text-indigo-400" />
                  <span>velox.financial / terminal — TechVision Bilişim A.Ş.</span>
                </span>
              </div>

              {/* Sub Mode Switches in Terminal */}
              <div className="flex items-center space-x-1 bg-black/50 p-1 rounded-lg border border-white/[0.06] text-[11px]">
                <button
                  onClick={() => setActiveLedgerTab('journal')}
                  className={cn(
                    "px-2.5 py-0.5 rounded font-medium transition-colors",
                    activeLedgerTab === 'journal' ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"
                  )}
                >
                  Yevmiye Kayıtları
                </button>
                <button
                  onClick={() => setActiveLedgerTab('tax')}
                  className={cn(
                    "px-2.5 py-0.5 rounded font-medium transition-colors",
                    activeLedgerTab === 'tax' ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"
                  )}
                >
                  Vergi & Teşvik
                </button>
                <button
                  onClick={() => setActiveLedgerTab('ocr')}
                  className={cn(
                    "px-2.5 py-0.5 rounded font-medium transition-colors",
                    activeLedgerTab === 'ocr' ? "bg-white/15 text-white" : "text-slate-400 hover:text-white"
                  )}
                >
                  OCR Tarayıcı
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div className="p-4 sm:p-6 bg-[#090b10] space-y-4">
              
              {/* 3 Executive Financial Metric Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                    <span>Nakit Runway & Likidite</span>
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                  </div>
                  <p className="text-xl font-bold text-white ledger-mono">18.4 Ay</p>
                  <p className="text-[10px] text-emerald-400 font-medium">₺5,420,000 Q3 Hasılatı</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                    <span>4691 Teşvik Kazancı</span>
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  </div>
                  <p className="text-xl font-bold text-white ledger-mono">₺38,400 / Ay</p>
                  <p className="text-[10px] text-slate-400">34 Yazılım Personeli</p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 uppercase tracking-wider font-mono">
                    <span>KDV-1 Beyanname Durumu</span>
                    <FileCheck2 className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <p className="text-xl font-bold text-white">Taslak Onaylandı</p>
                  <p className="text-[10px] text-emerald-400">GİB Onayına 4 Gün Kaldı</p>
                </div>
              </div>

              {/* Dynamic Tab Content Inside Hero Terminal */}
              {activeLedgerTab === 'journal' && (
                <div className="space-y-3 pt-2 animate-fade-in">
                  <div className="flex items-center justify-between text-xs text-slate-400 px-2 font-mono">
                    <span>Canlı Çift Taraflı Yevmiye Akışı (Tekdüzen Hesap Planı)</span>
                    <span className="text-emerald-400">● 2.1 Sn Otomatik Eşleşme</span>
                  </div>

                  <div className="overflow-x-auto rounded-xl border border-white/[0.06] bg-black/40">
                    <table className="w-full text-left text-xs ledger-mono">
                      <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] font-semibold border-b border-white/[0.06]">
                        <tr>
                          <th className="p-2.5">Hesap Kodu</th>
                          <th className="p-2.5">Hesap Açıklaması & Karşı Taraf</th>
                          <th className="p-2.5">Tutar</th>
                          <th className="p-2.5">Mevzuat Notu</th>
                          <th className="p-2.5 text-right">Durum</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/[0.04]">
                        {liveTransactions.map((tx, idx) => (
                          <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                            <td className="p-2.5 font-bold text-indigo-400">{tx.code}</td>
                            <td className="p-2.5 text-slate-200">
                              <span className="font-semibold block">{tx.account}</span>
                              <span className="text-[10px] text-slate-500 font-sans">{tx.party}</span>
                            </td>
                            <td className="p-2.5 font-bold text-white">{tx.debit}</td>
                            <td className="p-2.5 text-[11px] text-slate-400 font-sans">{tx.taxNote}</td>
                            <td className="p-2.5 text-right">
                              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                                {tx.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {activeLedgerTab === 'tax' && (
                <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-3 animate-fade-in text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 uppercase font-mono block">Kurumlar Vergisi İstisnası</span>
                      <p className="font-bold text-white text-sm mt-0.5">%100 Muafiyet (4691 Sayılı Kanun)</p>
                      <p className="text-[11px] text-slate-400 mt-1">Yazılım ve lisans gelirleri matrahtan tam düşüldü.</p>
                    </div>

                    <div className="p-3 bg-white/[0.02] rounded-lg border border-white/[0.06]">
                      <span className="text-[10px] text-slate-400 uppercase font-mono block">Yurt Dışı KDV İade Alacağı</span>
                      <p className="font-bold text-emerald-400 text-sm mt-0.5">₺142,500 Mahsup Bekliyor</p>
                      <p className="text-[11px] text-slate-400 mt-1">Q3 YMM tasdik raporu Gelir İdaresi'ne iletildi.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeLedgerTab === 'ocr' && (
                <div className="p-5 rounded-xl bg-black/40 border border-white/[0.06] text-center space-y-2 animate-fade-in text-xs">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.05] text-slate-300 flex items-center justify-center mx-auto">
                    <FileSpreadsheet className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h4 className="font-bold text-white text-sm">Akıllı E-Arşiv & Fatura OCR Motoru</h4>
                  <p className="text-slate-400 text-xs max-w-md mx-auto">
                    PDF veya XML faturayı bırakın; yapay zeka matrah, KDV, tevkifat ve 120/320 cari hesap kodunu 2.1 saniyede çıkarsın.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
