import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  TrendingUp,
  Building2,
  CalendarDays,
  Sparkles,
  FileCheck2
} from 'lucide-react';
import { cn } from '../../utils/cn';

const BARS = [35, 48, 43, 67, 59, 82, 72, 94, 78, 100];

export default function HeroSection() {
  const {
    navigateToMode,
    setIsConsultationOpen,
    firmInfo
  } = useApp();

  const [activeTab, setActiveTab] = useState('performance');

  const tabs = [
    { id: 'performance', label: 'Performans' },
    { id: 'tax', label: 'Vergi & Teşvik' },
    { id: 'ocr', label: 'OCR Kayıtları' }
  ];

  return (
    <section className="relative overflow-hidden bg-paper-50 border-b border-line">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.5]"
        style={{
          backgroundImage: 'radial-gradient(#E6E2D6 1px, transparent 1px)',
          backgroundSize: '28px 28px'
        }}
      />

      <div className="container-x relative pt-14 pb-20 md:pt-20 md:pb-24">

        {/* Accreditation Badge */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-line shadow-card text-xs">
            <span className="w-2 h-2 rounded-full bg-success animate-pulse"></span>
            <span className="font-mono text-[11px] text-ink-400">TÜRMOB Ruhsat No: 349102 · KGK Bağımsız Denetim</span>
            <span className="w-1 h-1 rounded-full bg-line-strong hidden sm:block"></span>
            <span className="font-semibold text-ink-800 hidden sm:inline">Kurumsal Mali Müşavirlik</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Copy */}
          <div className="space-y-7">
            <h1 className="font-serif text-ink-900 text-[44px] sm:text-6xl md:text-[68px] leading-[1.04] tracking-tight">
              Muhasebenizi değil,
              <br />
              <em className="text-pine-600">işinizi büyütmeye</em>
              <br />
              odaklanın.
            </h1>

            <p className="text-base sm:text-lg text-ink-500 max-w-xl leading-relaxed">
              {firmInfo.subSlogan}
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 pt-2">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="btn btn-primary btn-md w-full sm:w-auto text-[13px]"
              >
                <span>Ücretsiz Mali Ön Görüşme Al</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => navigateToMode('portal')}
                className="btn btn-outline btn-md w-full sm:w-auto text-[13px]"
              >
                <Building2 className="w-4 h-4 text-pine-700" />
                <span>Müşteri Konsolunu İncele</span>
              </button>
              <button
                onClick={() => navigateToMode('admin')}
                className="btn btn-ghost btn-md w-full sm:w-auto text-[13px]"
              >
                <ShieldCheck className="w-4 h-4 text-pine-700" />
                <span>SMMM Yönetim Masası</span>
              </button>
            </div>

            {/* Trust Guarantees */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-1 text-xs font-medium text-ink-600">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-pine-600" />
                GİB & E-Defter %100 Entegre
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-pine-600" />
                Sıfır Ceza & Hata Güvencesi
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-pine-600" />
                Atanmış Kıdemli SMMM Masası
              </span>
            </div>
          </div>

          {/* Right: Report Visual */}
          <div className="relative">
            <div className="card overflow-hidden p-0 rotate-0">
              {/* Report top bar */}
              <div className="bg-pine-700 px-5 py-3 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/90">
                  VELOX / Finansal Rapor
                </span>
                <span className="font-mono text-[10px] text-pine-200">AĞUSTOS 2026</span>
              </div>

              {/* Report body */}
              <div className="p-6 sm:p-7 space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-[22px] text-ink-900">İşletme performansı</h3>
                  <div className="flex items-center gap-1 bg-paper-200 p-0.5 rounded-lg border border-line text-[11px]">
                    {tabs.map((t) => (
                      <button
                        key={t.id}
                        onClick={() => setActiveTab(t.id)}
                        className={cn(
                          'px-2.5 py-1 rounded-md font-medium transition-colors',
                          activeTab === t.id ? 'bg-white text-pine-800 shadow-sm font-semibold' : 'text-ink-400 hover:text-ink-800'
                        )}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="kpi-label mb-1">Net Dönem Hasılatı</p>
                  <div className="flex items-end gap-3">
                    <span className="font-mono text-[32px] font-semibold text-ink-900 tracking-tight leading-none">₺842.600</span>
                    <span className="badge badge-success mb-1">
                      <TrendingUp className="w-3 h-3" />
                      +18,4%
                    </span>
                  </div>
                </div>

                {activeTab === 'performance' && (
                  <div className="space-y-2">
                    <div className="flex items-end gap-1.5 h-24 border-b border-line pb-0">
                      {BARS.map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={cn(
                            'flex-1 rounded-t-sm transition-colors',
                            i % 3 === 1 ? 'bg-pine-600' : 'bg-pine-200'
                          )}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between font-mono text-[9px] text-ink-300">
                      <span>OCA</span><span>ŞUB</span><span>MAR</span><span>NİS</span><span>MAY</span>
                      <span>HZA</span><span>TEM</span><span>AGU</span><span>EYL</span><span>EKI</span>
                    </div>
                  </div>
                )}

                {activeTab === 'tax' && (
                  <div className="space-y-2">
                    {[
                      { label: '4691 Teknopark Kurumlar İstisnası', value: '₺38.400 / ay', ok: true },
                      { label: 'KDV Geçici 20/1 Yazılım İstisnası', value: '%0 KDV', ok: true },
                      { label: 'Ar-Ge Bordro Stopaj Terkini', value: '34 personel', ok: true }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-paper-50 border border-line text-xs">
                        <span className="text-ink-600 font-medium">{row.label}</span>
                        <span className="font-mono font-semibold text-pine-800 flex items-center gap-1.5">
                          <FileCheck2 className="w-3.5 h-3.5 text-success" />
                          {row.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'ocr' && (
                  <div className="space-y-2">
                    {[
                      { file: 'AWS_EMEA_SARL_Temmuz.pdf', code: '770.01 Bulut Sunucu', amt: '₺142.850' },
                      { file: 'Garanti_Ekstre_20.08.pdf', code: '102.01 Ticari Mevduat', amt: '₺650.000' }
                    ].map((row, i) => (
                      <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-paper-50 border border-line text-xs">
                        <div className="min-w-0">
                          <p className="font-mono text-[11px] text-ink-900 truncate">{row.file}</p>
                          <p className="text-[10px] text-ink-400 mt-0.5">{row.code}</p>
                        </div>
                        <div className="text-right shrink-0">
                          <p className="font-mono font-semibold text-ink-900">{row.amt}</p>
                          <span className="text-[9px] font-mono text-success flex items-center gap-1 justify-end">
                            <Sparkles className="w-2.5 h-2.5" /> %99.9 OCR
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Report footer */}
                <div className="flex items-center justify-between pt-3 border-t border-line">
                  <span className="text-[10px] font-mono tracking-[0.12em] uppercase text-ink-400">Net Nakit Pozisyonu</span>
                  <span className="font-mono text-sm font-bold text-pine-800">₺216.480</span>
                </div>
              </div>
            </div>

            {/* Floating note card */}
            <div className="absolute -bottom-6 -left-3 sm:-left-6 bg-pine-700 text-white rounded-xl p-4 shadow-pop flex items-start gap-3 max-w-[240px]">
              <CalendarDays className="w-4 h-4 text-gold-300 shrink-0 mt-0.5" />
              <div>
                <p className="text-[9px] font-mono tracking-[0.14em] uppercase text-pine-200">Yaklaşan Yükümlülük</p>
                <p className="text-[13px] font-semibold mt-1">Muhtasar & SGK · 26 gün</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
