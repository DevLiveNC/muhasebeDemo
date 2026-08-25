import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Award, Clock, Users } from 'lucide-react';

export default function TrustStatsBar() {
  const { firmInfo } = useApp();

  const metrics = [
    {
      label: 'Yıllık Yönetilen Finansal Hacim',
      value: firmInfo.stats.managedCapital,
      sub: 'GİB ve banka mutabakatlı portföy',
      icon: Award
    },
    {
      label: 'Vergi Denetim & Beyan Doğruluğu',
      value: firmInfo.stats.taxAuditAccuracy,
      sub: 'Sıfır inceleme cezası güvencesi',
      icon: ShieldCheck
    },
    {
      label: 'Ortalama Danışman Yanıt Süresi',
      value: firmInfo.stats.avgSlaMinutes,
      sub: 'Atanmış kıdemli SMMM masası',
      icon: Clock
    },
    {
      label: 'Sağlanan Yıllık Vergi Teşviki',
      value: firmInfo.stats.totalTaxSavings,
      sub: '4691, 5746 ve ihracat KDV iadesi',
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
    <section className="py-14 bg-pine-800">
      <div className="container-x">

        {/* Metric Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-xl overflow-hidden border border-white/10">
          {metrics.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-pine-800 p-5 sm:p-6 space-y-2 hover:bg-pine-700 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.14em] text-pine-200">
                    {item.label}
                  </span>
                  <Icon className="w-4 h-4 text-gold-300" />
                </div>
                <div className="font-mono text-2xl sm:text-3xl font-semibold text-white tracking-tight">
                  {item.value}
                </div>
                <p className="text-xs text-pine-300">{item.sub}</p>
              </div>
            );
          })}
        </div>

        {/* Accreditation Row */}
        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-[10px] font-mono uppercase tracking-[0.16em] text-pine-300 mb-5">
            Resmi Mali Standartlar ve Bankacılık Altyapılarıyla %100 Uyumlu
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-pine-100"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold-300"></span>
                <span>{partner}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
