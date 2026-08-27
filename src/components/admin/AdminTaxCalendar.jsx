import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Clock,
  CheckCircle2,
  Send,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminTaxCalendar() {
  const { taxCalendar, sendMissingDocAlert, addToast } = useApp();

  const handleBulkReminder = (taxTitle) => {
    sendMissingDocAlert('Kalan müşteriler', taxTitle);
    addToast('Hatırlatma gönderildi', `${taxTitle} için kalan şirketlere SMS ve e-posta gitti.`, 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-pine">Vergi ve SGK</span>
            <span className="text-ink-400 text-xs">2026 yasal takvim</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight mt-1.5">
            Vergi takvimi
          </h1>
          <p className="page-lead">Tüm müşteriler için son günler ve hatırlatmalar.</p>
        </div>

        <span className="badge badge-success self-start">
          <ShieldCheck className="w-3.5 h-3.5" />
          Otomatik beyan açık
        </span>
      </div>

      {/* Tax Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {taxCalendar.map((tax) => {
          const isUrgent = tax.remainingDays <= 4 && tax.remainingDays > 0;
          const isDone = tax.status === 'Tamamlandı';
          const completionRate = tax.totalClients
            ? Math.round((tax.completedClients / tax.totalClients) * 100)
            : 0;
          const remaining = tax.totalClients
            ? tax.totalClients - tax.completedClients
            : 0;

          return (
            <div
              key={tax.id}
              className={cn(
                'card p-6 space-y-4 transition-all',
                isUrgent && !isDone && 'border-warning/40 ring-1 ring-warning/20',
                isDone && 'border-success/30'
              )}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between gap-3 font-mono text-[11px]">
                <span className="badge badge-neutral">{tax.type}</span>

                <span className={cn(
                  'badge font-bold',
                  isDone ? 'badge-success' : isUrgent ? 'badge-warning' : 'badge-neutral'
                )}>
                  <Clock className="w-3 h-3" />
                  {isDone ? '%100 Beyan Edildi' : `${tax.remainingDays} Gün Kaldı (Son: ${tax.deadline})`}
                </span>
              </div>

              {/* Title */}
              <div>
                <h3 className="font-bold text-ink-900 text-[15px] leading-snug">{tax.title}</h3>
                <p className="text-xs text-ink-500 mt-1.5 leading-relaxed">{tax.description}</p>
                <p className="text-[10px] font-mono text-ink-400 mt-1.5">{tax.legalBasis}</p>
              </div>

              {/* Portfolio Progress */}
              <div className="space-y-2 p-4 bg-paper-50 rounded-xl border border-line">
                <div className="flex justify-between text-xs">
                  <span className="text-ink-500">Portföy Beyan Oranı:</span>
                  <span className={cn('font-mono font-bold', isDone ? 'text-success-deep' : 'text-ink-900')}>
                    %{completionRate}
                  </span>
                </div>
                <div className="progress">
                  <div
                    style={{ width: `${completionRate}%` }}
                    className={cn('progress-bar', isDone && 'progress-bar-success')}
                  />
                </div>
                <p className="text-[10px] font-mono text-ink-400">
                  {tax.completedClients}/{tax.totalClients} şirket tamamlandı
                </p>
              </div>

              {/* Actions */}
              {!isDone && remaining > 0 && (
                <button
                  onClick={() => handleBulkReminder(tax.title)}
                  className="btn btn-outline btn-sm w-full"
                >
                  <Send className="w-3.5 h-3.5 text-pine-700" />
                  <span>Kalan {remaining} Şirkete Hatırlat</span>
                </button>
              )}
              {isDone && (
                <div className="flex items-center gap-2 text-xs font-mono text-success-deep">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Tüm portföy beyanları kapandı.</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
