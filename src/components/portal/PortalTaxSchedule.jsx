import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  Clock,
  Download,
  CreditCard,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PortalTaxSchedule() {
  const { taxCalendar, addToast } = useApp();

  const handleDownloadSlip = (title) => {
    addToast('Tahakkuk Fişi İndirildi', `${title} resmi GİB tahakkuk fişi PDF olarak indirildi.`, 'success');
  };

  const handleBankOrder = (title) => {
    addToast('Banka Ödeme Talimatı Hazırlandı', `${title} için kurumsal EFT/Havale talimat formatı oluşturuldu.`, 'info');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Resmi Vergi ve SGK Takvimi</h1>
          <p className="text-xs text-slate-400 font-mono">Gelir İdaresi Başkanlığı yasal bildirim son günleri ve onaylı tahakkuk fişleri</p>
        </div>

        <span className="px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono text-xs border border-emerald-500/20 flex items-center space-x-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>GİB E-Beyanname Tam Uyumlu</span>
        </span>
      </div>

      {/* Tax Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {taxCalendar.map((tax) => {
          const isUrgent = tax.remainingDays <= 4 && tax.remainingDays > 0;
          const isFinished = tax.status === 'Tamamlandı';

          return (
            <div
              key={tax.id}
              className={cn(
                "p-6 rounded-2xl obsidian-card border space-y-4 shadow-cinema",
                isUrgent ? "border-amber-500/40" : "border-white/[0.08]"
              )}
            >
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-0.5 rounded text-[10px] font-mono bg-white/[0.05] text-slate-300 border border-white/10">
                  {tax.type}
                </span>

                <div className="flex items-center space-x-1.5 font-mono">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className={cn(
                    "text-xs font-bold",
                    isFinished ? "text-emerald-400" : isUrgent ? "text-amber-400" : "text-slate-300"
                  )}>
                    {isFinished ? '✓ Kapatıldı' : `${tax.remainingDays} Gün Kaldı`}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-white text-base">{tax.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{tax.description}</p>
                <span className="text-[10px] font-mono text-slate-500 mt-2 block">{tax.legalBasis}</span>
              </div>

              <div className="p-3 bg-black/40 rounded-xl border border-white/[0.06] flex items-center justify-between text-xs font-mono">
                <div>
                  <span className="text-[10px] uppercase text-slate-400 block">Yasal Son Gün</span>
                  <span className="font-bold text-white">{tax.deadline}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase text-slate-400 block">Durum</span>
                  <span className={isFinished ? "text-emerald-400 font-bold" : "text-slate-300 font-bold"}>
                    {tax.status}
                  </span>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between gap-2 border-t border-white/[0.06]">
                <button
                  onClick={() => handleDownloadSlip(tax.title)}
                  className="flex-1 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 rounded-lg text-xs font-semibold flex items-center justify-center space-x-1.5 border border-white/10 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tahakkuk İndir</span>
                </button>
                <button
                  onClick={() => handleBankOrder(tax.title)}
                  className="flex-1 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-1.5 transition-all shadow-luxury"
                >
                  <CreditCard className="w-3.5 h-3.5 text-black" />
                  <span>Banka Talimatı</span>
                </button>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
