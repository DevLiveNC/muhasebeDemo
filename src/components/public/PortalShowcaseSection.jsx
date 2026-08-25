import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  UploadCloud,
  FileCheck2,
  Calendar,
  LineChart,
  MessageSquare,
  ArrowRight,
  TrendingUp,
  Sparkles,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PortalShowcaseSection() {
  const { navigateToMode } = useApp();
  const [activeTab, setActiveTab] = useState('ocr');

  const tabs = [
    {
      id: 'ocr',
      icon: UploadCloud,
      title: 'Akıllı OCR & Otomatik Yevmiye',
      desc: 'Fatura ve ekstreleri yükleyin; sistem matrah, KDV oranı, tevkifat ve 120/320 cari hesaplarını 2.1 saniyede bağlasın.'
    },
    {
      id: 'tax',
      icon: Calendar,
      title: 'Canlı Vergi ve Beyan Takvimi',
      desc: 'KDV, Muhtasar ve SGK için yasal son günleri geri sayımla izleyin; sürpriz vergi ödemelerini 15 gün önceden görün.'
    },
    {
      id: 'cashflow',
      icon: LineChart,
      title: 'Sanal CFO & Nakit Runway Analitiği',
      desc: 'Gelir-gider dengesi, aylık nakit tüketimi (burn rate) ve kârlılık kırılımlarını anlık grafiklerle takip edin.'
    },
    {
      id: 'cpa',
      icon: MessageSquare,
      title: 'Atanmış SMMM & Danışman Masası',
      desc: 'Şirketinize özel atanan kıdemli mali müşavir ile doğrudan yazışın, faaliyet belgesi ve YMM tasdik raporu talep edin.'
    }
  ];

  return (
    <section id="portal-preview" className="py-20 md:py-28 bg-pine-800 scroll-mt-24 overflow-hidden">
      <div className="container-x">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-gold-300">
            Müşterilerimize Özel Dijital Deneyim
          </p>
          <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-[44px] leading-[1.08] tracking-tight">
            Şirketinizin mali kontrol merkezi: <em className="text-gold-300">VELOX Müşteri Konsolu</em>
          </h2>
          <p className="text-sm text-pine-200">
            Tarayıcınızdan veya mobil cihazınızdan tüm finansal ve resmi muhasebe işlemlerinizi
            tek ekranda yönetin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* Left: Feature Tabs */}
          <div className="lg:col-span-5 space-y-3">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isSelected = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    'w-full text-left p-5 rounded-xl border transition-all',
                    isSelected
                      ? 'bg-white border-white shadow-pop'
                      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
                  )}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      'w-9 h-9 rounded-lg flex items-center justify-center border shrink-0',
                      isSelected ? 'bg-pine-700 text-white border-pine-700' : 'bg-white/10 text-pine-100 border-white/10'
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <h3 className={cn('font-bold text-[15px]', isSelected ? 'text-ink-900' : 'text-white')}>
                      {tab.title}
                    </h3>
                  </div>
                  <p className={cn('text-xs leading-relaxed mt-2.5', isSelected ? 'text-ink-500' : 'text-pine-200')}>
                    {tab.desc}
                  </p>
                </button>
              );
            })}

            <button
              onClick={() => navigateToMode('portal')}
              className="w-full mt-2 py-3.5 bg-white hover:bg-paper-100 text-pine-900 font-bold text-[13px] rounded-xl shadow-pop flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <span>Müşteri Konsolu Canlı Demosunu Başlat</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Console Window */}
          <div className="lg:col-span-7 card overflow-hidden p-0 shadow-pop">
            {/* Window bar */}
            <div className="flex items-center justify-between px-5 py-3 bg-paper-100 border-b border-line text-xs">
              <div className="flex items-center gap-3 min-w-0">
                <div className="flex gap-1.5 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-line-strong"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-line-strong"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-line-strong"></span>
                </div>
                <span className="font-semibold text-ink-900 truncate">TechVision Bilişim A.Ş. — Müşteri Paneli</span>
              </div>
              <span className="flex items-center gap-1.5 font-mono text-[10px] font-semibold text-success-deep shrink-0">
                <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                4691 Teşvik Aktif
              </span>
            </div>

            {/* Dynamic content */}
            <div className="p-5 sm:p-6 min-h-[320px] bg-paper-50 animate-fade-in" key={activeTab}>

              {activeTab === 'ocr' && (
                <div className="space-y-4">
                  <div className="border-2 border-dashed border-line-strong bg-white rounded-xl p-7 text-center space-y-2">
                    <div className="w-11 h-11 rounded-xl bg-pine-50 text-pine-700 flex items-center justify-center mx-auto">
                      <UploadCloud className="w-5 h-5" />
                    </div>
                    <p className="font-bold text-sm text-ink-900">Faturayı Buraya Sürükleyin veya Seçin</p>
                    <p className="text-[11px] text-ink-400 font-mono">PDF, PNG, XML — Yapay Zeka OCR 2.1 Sn</p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-line flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <span className="font-mono text-xs text-ink-900 block truncate">AWS_EMEA_SARL_Temmuz.pdf</span>
                      <span className="text-[10px] text-ink-400">770.01 Bulut Sunucu / ₺142.850,00</span>
                    </div>
                    <span className="badge badge-success shrink-0">
                      <CheckCircle2 className="w-3 h-3" />
                      %99.9 OCR Okundu
                    </span>
                  </div>
                </div>
              )}

              {activeTab === 'tax' && (
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-xl border border-line flex items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-ink-900 block text-sm">Temmuz 2026 KDV-1 Beyannamesi</span>
                      <p className="text-xs text-ink-400 mt-0.5">Son Gün: 28 Ağustos 2026 (Kalan: 4 Gün)</p>
                    </div>
                    <span className="badge badge-success shrink-0">Taslak Onaylandı</span>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-line flex items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-ink-900 block text-sm">Muhtasar & SGK Prim Hizmet</span>
                      <p className="text-xs text-ink-400 mt-0.5">Son Gün: 26 Ağustos 2026 (Kalan: 2 Gün)</p>
                    </div>
                    <span className="badge badge-warning shrink-0">Tahakkuk Alındı</span>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-line flex items-center justify-between gap-3">
                    <div>
                      <span className="font-bold text-ink-900 block text-sm">Haziran 2026 Geçici Kurumlar</span>
                      <p className="text-xs text-ink-400 mt-0.5">Son Gün: 31 Temmuz 2026</p>
                    </div>
                    <span className="badge badge-neutral shrink-0">Dönem Kapatıldı</span>
                  </div>
                </div>
              )}

              {activeTab === 'cashflow' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 bg-white rounded-xl border border-line">
                      <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block">Nakit Runway</span>
                      <span className="font-mono text-2xl font-semibold text-ink-900 block mt-1">18.4 Ay</span>
                      <p className="text-[11px] text-success-deep font-semibold mt-1 flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" /> ₺845K Aylık Burn Rate
                      </p>
                    </div>
                    <div className="p-4 bg-white rounded-xl border border-line">
                      <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block">4691 Teşvik Avantajı</span>
                      <span className="font-mono text-2xl font-semibold text-pine-700 block mt-1">₺38.400</span>
                      <p className="text-[11px] text-ink-400 mt-1">34 personel stopaj muafiyeti</p>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-line">
                    <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block mb-3">
                      Aylık Nakit Akışı
                    </span>
                    <div className="flex items-end gap-1.5 h-20 border-b border-line">
                      {[42, 55, 48, 62, 70, 58, 76, 88].map((h, i) => (
                        <div
                          key={i}
                          style={{ height: `${h}%` }}
                          className={cn('flex-1 rounded-t-sm', i >= 6 ? 'bg-pine-600' : 'bg-pine-200')}
                        />
                      ))}
                    </div>
                    <div className="flex justify-between font-mono text-[9px] text-ink-300 mt-1.5">
                      <span>OCA</span><span>ŞUB</span><span>MAR</span><span>NİS</span>
                      <span>MAY</span><span>HZA</span><span>TEM</span><span>AGU</span>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'cpa' && (
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-4 bg-white rounded-xl border border-line">
                    <img
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                      alt="SMMM Kemal Yıldız"
                      className="w-11 h-11 rounded-lg object-cover border border-line"
                    />
                    <div>
                      <p className="font-bold text-ink-900 text-sm">SMMM Kemal Yıldız</p>
                      <p className="text-xs text-ink-400">Kıdemli Vergi & Teknopark Direktörü</p>
                      <span className="text-[10px] font-mono text-success-deep flex items-center gap-1 mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                        Çevrimiçi · Doğrudan Masası
                      </span>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-xl border border-line text-[13px] text-ink-700 leading-relaxed max-w-md">
                    <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 mb-1.5">
                      <Sparkles className="w-3 h-3 text-gold-500" />
                      SMMM Notu
                    </span>
                    "Kerem Bey merhaba, Teknopark kurumlar vergisi muafiyeti ve Temmuz bordroları onaylandı.
                    Herhangi bir evrak eksiğiniz bulunmamaktadır."
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
