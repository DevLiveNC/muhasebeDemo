import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import { cn, formatCurrency } from '../../utils/cn';

export default function TaxCalculatorSection() {
  const { setIsConsultationOpen } = useApp();

  const [companyType, setCompanyType] = useState('as');
  const [employees, setEmployees] = useState(16);
  const [monthlyInvoices, setMonthlyInvoices] = useState(85);
  const [hasIncentive, setHasIncentive] = useState(true);

  // Realistic Turkish tax incentive model
  const sgkSavingPerEmployee = hasIncentive ? 1850 : 950;
  const totalMonthlySgkSavings = employees * sgkSavingPerEmployee;
  const corporateTaxSaving = hasIncentive ? 65000 : 15000;
  const annualTotalBenefit = totalMonthlySgkSavings * 12 + corporateTaxSaving;
  const estimatedSmmFee = Math.max(9500, Math.round((employees * 380 + monthlyInvoices * 55) / 100) * 100);

  return (
    <section id="calculator" className="py-20 md:py-28 bg-paper-100 border-y border-line scroll-mt-24">
      <div className="container-x">

        {/* Header */}
        <div className="section-head text-center mx-auto">
          <p className="eyebrow">03 / İnteraktif Vergi & Teşvik Simülatörü</p>
          <h2>
            Şirketinizin potansiyel <em>vergi ve SGK tasarrufunu</em> hesaplayın.
          </h2>
          <p className="mx-auto">
            Personel sayısı, fatura hacmi ve Teknopark/Ar-Ge teşvik durumunuza göre VELOX ile
            elde edeceğiniz tahmini avantajı görün.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="max-w-4xl mx-auto mt-14 card p-6 sm:p-10 grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Controls */}
          <div className="md:col-span-7 space-y-6">

            <div>
              <label className="label">1. Şirket Statüsü</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'as', label: 'Anonim (A.Ş.)' },
                  { id: 'ltd', label: 'Limited (Ltd.)' },
                  { id: 'sahis', label: 'Şahıs / Startup' }
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setCompanyType(t.id)}
                    className={cn(
                      'py-2.5 px-2 rounded-lg font-semibold text-xs border text-center transition-all',
                      companyType === t.id
                        ? 'bg-pine-700 text-white border-pine-700 shadow-sm'
                        : 'bg-white text-ink-500 border-line-strong hover:border-pine-600 hover:text-pine-800'
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="label mb-0">2. Çalışan / Bordro Sayısı</span>
                <span className="font-bold text-ink-900 font-mono text-xs bg-paper-100 px-2 py-0.5 rounded border border-line">
                  {employees} Personel
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="label mb-0">3. Aylık Fatura & Belge Hacmi</span>
                <span className="font-bold text-ink-900 font-mono text-xs bg-paper-100 px-2 py-0.5 rounded border border-line">
                  ~{monthlyInvoices} Adet / Ay
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="400"
                step="5"
                value={monthlyInvoices}
                onChange={(e) => setMonthlyInvoices(parseInt(e.target.value))}
                className="w-full h-1.5 rounded-lg cursor-pointer"
              />
            </div>

            <label className="flex items-center justify-between gap-3 p-4 rounded-xl bg-paper-50 border border-line-strong cursor-pointer hover:border-pine-600 transition-colors">
              <div>
                <span className="font-bold text-ink-900 block text-sm">4691 Teknopark / 5746 Ar-Ge / E-İhracat İstisnası</span>
                <span className="text-xs text-ink-400">Yazılım teslim muafiyeti veya yurt dışı KDV istisnası</span>
              </div>
              <input
                type="checkbox"
                checked={hasIncentive}
                onChange={(e) => setHasIncentive(e.target.checked)}
                className="w-4 h-4 rounded cursor-pointer shrink-0"
              />
            </label>

          </div>

          {/* Results */}
          <div className="md:col-span-5 bg-pine-800 rounded-xl p-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-gold-300 block">
                Tahmini Mali Tasarruf Raporu
              </span>

              <div>
                <span className="text-pine-200 text-xs block">Yıllık Potansiyel Vergi & Teşvik Tasarrufu</span>
                <div className="font-mono text-3xl font-semibold text-white mt-1.5 tracking-tight">
                  {formatCurrency(annualTotalBenefit)}
                </div>
                <p className="text-[11px] text-pine-300 mt-1">
                  Aylık ortalama: {formatCurrency(totalMonthlySgkSavings)} SGK indirimi
                </p>
              </div>

              <div className="space-y-2.5 pt-4 border-t border-white/10 text-xs">
                <div className="flex justify-between gap-3">
                  <span className="text-pine-300">Önerilen Hizmet:</span>
                  <span className="font-bold text-white text-right">{employees > 20 ? 'Kurumsal CFO & Teşvik' : 'Büyüme & E-Dönüşüm'}</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-pine-300">Müşavirlik Bedeli:</span>
                  <span className="font-bold text-white font-mono">~{formatCurrency(estimatedSmmFee)} / ay</span>
                </div>
                <div className="flex justify-between gap-3">
                  <span className="text-pine-300">Yatırımın Geri Dönüşü:</span>
                  <span className="font-bold text-gold-300 font-mono">
                    %{Math.round((annualTotalBenefit / (estimatedSmmFee * 12)) * 100)} Net Getiri
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full py-3 bg-white hover:bg-paper-100 text-pine-900 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all active:scale-[0.99]"
            >
              <span>Bu Tasarruf Raporunu Al</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Disclaimer */}
        <p className="max-w-4xl mx-auto mt-6 flex items-center gap-2 text-[11px] text-ink-400">
          <ShieldCheck className="w-3.5 h-3.5 text-pine-600 shrink-0" />
          Simülasyon, 2026 yılı vergi mevzuatına göre ortalama katsayılar üzerinden hesaplanan tahmini değerlerdir.
          Kesin projeksiyon için ücretsiz ön görüşmede şirket verileriniz üzerinden raporlanır.
        </p>

      </div>
    </section>
  );
}
