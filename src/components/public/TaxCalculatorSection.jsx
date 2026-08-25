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
    <section id="calculator" className="py-20 md:py-28 bg-[#08090d] border-b border-white/[0.08] scroll-mt-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
            İnteraktif Vergi & Teşvik Simülatörü
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Şirketinizin potansiyel <br />
            <span className="font-editorial italic font-normal text-slate-200">vergi ve SGK tasarrufunu</span> hesaplayın.
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Personel sayısı, fatura hacmi ve Teknopark/Ar-Ge teşvik durumunuza göre VELOX ile elde edeceğiniz tahmini avantajı görün.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="max-w-4xl mx-auto rounded-2xl obsidian-card p-6 sm:p-10 border border-white/[0.08] shadow-cinema grid grid-cols-1 md:grid-cols-12 gap-8 text-xs">
          
          {/* Controls */}
          <div className="md:col-span-7 space-y-6">
            
            {/* Company type */}
            <div>
              <label className="block font-mono text-[10px] uppercase tracking-widest text-slate-400 mb-2">
                1. Şirket Statüsü
              </label>
              <div className="grid grid-cols-3 gap-2 text-xs">
                {[
                  { id: 'as', label: 'Anonim (A.Ş.)' },
                  { id: 'ltd', label: 'Limited (Ltd.)' },
                  { id: 'sahis', label: 'Şahıs / Startup' },
                ].map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setCompanyType(t.id)}
                    className={cn(
                      "py-2.5 px-2 rounded-lg font-semibold border text-center transition-all",
                      companyType === t.id
                        ? "bg-white text-black border-white shadow-sm"
                        : "bg-white/[0.02] text-slate-300 border-white/[0.08] hover:bg-white/[0.06]"
                    )}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Slider: Employees */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">2. Çalışan / Bordro Sayısı</span>
                <span className="font-bold text-white font-mono text-xs bg-white/[0.06] px-2 py-0.5 rounded border border-white/10">
                  {employees} Personel
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="100"
                value={employees}
                onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Slider: Invoices */}
            <div className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">3. Aylık Fatura & Belge Hacmi</span>
                <span className="font-bold text-white font-mono text-xs bg-white/[0.06] px-2 py-0.5 rounded border border-white/10">
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
                className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-white"
              />
            </div>

            {/* Checkbox: Incentive status */}
            <div className="pt-2">
              <label className="flex items-center justify-between p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.08] cursor-pointer hover:bg-white/[0.04] transition-colors">
                <div>
                  <span className="font-bold text-white block">4691 Teknopark / 5746 Ar-Ge / E-İhracat İstisnası</span>
                  <span className="text-[11px] text-slate-400">Yazılım teslim muafiyeti veya yurt dışı KDV istisnası</span>
                </div>
                <input
                  type="checkbox"
                  checked={hasIncentive}
                  onChange={(e) => setHasIncentive(e.target.checked)}
                  className="w-4 h-4 rounded text-white focus:ring-white accent-white cursor-pointer"
                />
              </label>
            </div>

          </div>

          {/* Results Box */}
          <div className="md:col-span-5 bg-black/60 rounded-xl p-6 border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block">
                Tahmini Mali Tasarruf Raporu
              </span>

              <div>
                <span className="text-slate-400 text-xs block">Yıllık Potansiyel Vergi & Teşvik Tasarrufu</span>
                <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 ledger-mono mt-1">
                  {formatCurrency(annualTotalBenefit)}
                </div>
                <p className="text-[11px] text-slate-400 mt-0.5">Aylık ortalama: {formatCurrency(totalMonthlySgkSavings)} SGK indirimi</p>
              </div>

              <div className="space-y-2 pt-3 border-t border-white/[0.08] text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-400">Önerilen Hizmet:</span>
                  <span className="font-bold text-white">{employees > 20 ? 'Kurumsal CFO & Teşvik' : 'Büyüme & E-Dönüşüm'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Müşavirlik Bedeli:</span>
                  <span className="font-bold text-white ledger-mono">~{formatCurrency(estimatedSmmFee)} / ay</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Yatırımın Geri Dönüşü:</span>
                  <span className="font-bold text-emerald-400 ledger-mono">%{Math.round((annualTotalBenefit / (estimatedSmmFee * 12)) * 100)} Net Getiri</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsConsultationOpen(true)}
              className="w-full py-3 bg-white hover:bg-slate-200 text-black rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-luxury"
            >
              <span>Bu Tasarruf Raporunu Al</span>
              <ArrowRight className="w-4 h-4 text-black" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
