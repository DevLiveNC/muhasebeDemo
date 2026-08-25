import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Award, Clock, Users, ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function TrustStatsBar() {
  const { firmInfo } = useApp();

  const metrics = [
    {
      label: 'Yıllık Yönetilen Finansal Hacim',
      value: firmInfo.stats.managedCapital,
      sub: 'GİB ve Banka Mutabakatlı Portföy',
      icon: Award
    },
    {
      label: 'Vergi Denetim & Beyan Doğruluğu',
      value: firmInfo.stats.taxAuditAccuracy,
      sub: 'Sıfır İnceleme Cezası Güvencesi',
      icon: ShieldCheck
    },
    {
      label: 'Ortalama Danışman Yanıt Süresi',
      value: firmInfo.stats.avgSlaMinutes,
      sub: 'Atanmış Kıdemli SMMM Masası',
      icon: Clock
    },
    {
      label: 'Sağlanan Yıllık Vergi Teşviki',
      value: firmInfo.stats.totalTaxSavings,
      sub: '4691, 5746 ve İhracat KDV İadesi',
      icon: Users
    }
  ];

  const partners = [
    'Gelir İdaresi Başkanlığı (GİB)',
    'TÜRMOB Ruhsatlı',
    'KGK Bağımsız Denetim',
    'QNB e-Finans',
    'Logo Yazılım',
    'Türkiye İş Bankası',
    'Garanti BBVA',
    'Yapı Kredi'
  ];

  return (
    <section className="py-14 bg-[#090b10] border-b border-white/[0.08] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all space-y-1.5"
            >
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                {item.label}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold text-white ledger-mono tracking-tight">
                {item.value}
              </div>
              <p className="text-xs text-slate-400 font-normal">{item.sub}</p>
            </div>
          ))}
        </div>

        {/* Regulatory & Institutional Accreditation */}
        <div className="mt-10 pt-8 border-t border-white/[0.06] text-center">
          <p className="text-[10px] font-mono uppercase tracking-widest text-slate-400 mb-5">
            Resmi Mali Standartlar ve Bankacılık Altyapılarıyla %100 Uyumlu
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-slate-400 font-mono">
            {partners.map((partner, i) => (
              <div key={i} className="flex items-center space-x-1.5 px-3 py-1 rounded-md bg-white/[0.02] border border-white/[0.06]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
