import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Calendar,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Send,
  Download,
  ShieldCheck,
  Building,
  Users,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminTaxCalendar() {
  const { taxCalendar, clients, sendMissingDocAlert, addToast } = useApp();

  const handleBulkReminder = (taxTitle) => {
    sendMissingDocAlert('Kalan Mükellefler', taxTitle);
    addToast('GİB Hatırlatma Bildirimi Gönderildi', `${taxTitle} için kalan tüm şirketlere SMS ve e-posta ihtar gönderildi.`, 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider border border-emerald-500/20">
              GİB & SGK Otomasyonu
            </span>
            <span className="text-slate-500 font-mono text-xs">VUK 213 & 5510 Sayılı Kanun Uyumlu</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Resmi Vergi & Yasal Beyan Takvimi</h1>
          <p className="text-xs text-slate-400 font-mono">2026 Gelir İdaresi Başkanlığı, SGK ve Ticaret Sicil bildirim terminleri</p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] text-slate-300 font-mono text-xs border border-white/[0.08] flex items-center space-x-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>%99.98 Zamanında Beyan Başarısı</span>
          </span>
        </div>
      </div>

      {/* Tax Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {taxCalendar.map((tax) => {
          const isUrgent = tax.remainingDays <= 4 && tax.remainingDays > 0;
          const isDone = tax.status === 'Tamamlandı';
          const completionRate = Math.round((tax.completedClients / tax.totalClients) * 100);

          return (
            <div
              key={tax.id}
              className={cn(
                "p-6 rounded-2xl obsidian-card border transition-all space-y-4 shadow-cinema",
                isUrgent ? "border-amber-500/40 bg-amber-500/[0.02]" : "border-white/[0.08]"
              )}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between font-mono text-[10px]">
                <span className="px-2.5 py-0.5 rounded bg-white/10 text-slate-300">
                  {tax.type}
                </span>

                <span className={cn(
                  "px-2.5 py-0.5 rounded font-bold",
                  isDone 
                    ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" 
                    : isUrgent 
                    ? "bg-amber-500/10 text-amber-400 border border-amber-500/20" 
                    : "bg-white/10 text-slate-300"
                )}>
                  {isDone ? '✓ %100 Beyan Edildi' : `${tax.remainingDays} Gün Kaldı (Son Gün: ${tax.deadline})`}
                </span>
              </div>

              {/* Title & Desc */}
              <div>
                <h3 className="font-bold text-white text-sm sm:text-base">{tax.title}</h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">{tax.description}</p>
              </div>

              {/* Progress Bar for Clients */}
              <div className="space-y-2 p-3.5 bg-black/40 rounded-xl border border-white/[0.06] font-mono">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Portföy Beyan Oranı:</span>
                  <span className="text-white font-bold">{tax.completedClients} / {tax.totalClients} Şirket (%{completionRate})</span>
                </div>
                <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${completionRate}%` }} 
                    className={cn("h-full rounded-full transition-all duration-500", completionRate === 100 ? "bg-emerald-400" : "bg-white")}
                  />
                </div>
                {tax.criticalClients > 0 && (
                  <p className="text-[11px] text-amber-400 font-mono pt-1 flex items-center space-x-1">
                    <span>⚠️ {tax.criticalClients} şirkette eksik evrak nedeniyle onay bekliyor.</span>
                  </p>
                )}
              </div>

              {/* Actions */}
              {!isDone && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => handleBulkReminder(tax.title)}
                    className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
                  >
                    <Send className="w-3.5 h-3.5 text-black" />
                    <span>Kalan {tax.totalClients - tax.completedClients} Şirkete Hatırlat</span>
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
