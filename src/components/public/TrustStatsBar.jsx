import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Award, Clock, Users } from 'lucide-react';

export default function TrustStatsBar() {
  const { firmInfo } = useApp();

  const metrics = [
    {
      label: 'Yönetilen tutar',
      value: firmInfo.stats.managedCapital,
      sub: 'Banka ve vergi dairesi kayıtlı',
      icon: Award
    },
    {
      label: 'Beyan doğruluğu',
      value: firmInfo.stats.taxAuditAccuracy,
      sub: 'Ceza çıkmayan dosya oranı',
      icon: ShieldCheck
    },
    {
      label: 'Ortalama yanıt',
      value: firmInfo.stats.avgSlaMinutes,
      sub: 'Size atanan mali müşavir',
      icon: Clock
    },
    {
      label: 'Yıllık vergi tasarrufu',
      value: firmInfo.stats.totalTaxSavings,
      sub: 'Teknopark, Ar-Ge ve ihracat KDV',
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
                  <span className="text-[11px] font-medium text-pine-200">
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
          <p className="text-[11px] font-medium text-pine-300 mb-5">
            Gelir İdaresi, TÜRMOB ve banka altyapılarıyla uyumlu
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
