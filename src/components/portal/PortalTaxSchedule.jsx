import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Clock,
  Download,
  CreditCard,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { cn } from '../../utils/cn';
import PageIntro from '../common/PageIntro';

export default function PortalTaxSchedule() {
  const { taxCalendar, addToast } = useApp();

  const handleDownloadSlip = (title) => {
    addToast('Ödeme bildirimi indirildi', `${title} PDF olarak indirildi.`, 'success');
  };

  const handleBankOrder = (title) => {
    addToast('Banka talimatı hazır', `${title} için EFT / havale talimatı oluşturuldu.`, 'info');
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <PageIntro
          title="Vergi takvimi"
          lead="Ödenecek vergiler ve son günler. Sürpriz yok."
        />

        <span className="badge badge-success self-start">
          <ShieldCheck className="w-3.5 h-3.5" />
          Gelir İdaresi ile uyumlu
        </span>
      </div>

      {/* Tax Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {taxCalendar.map((tax) => {
          const isUrgent = tax.remainingDays <= 4 && tax.remainingDays > 0;
          const isFinished = tax.status === 'Tamamlandı';

          return (
            <div
              key={tax.id}
              className={cn(
                'card p-6 space-y-4',
                isUrgent && 'border-warning/40 ring-1 ring-warning/20',
                isFinished && 'border-success/30'
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <span className="badge badge-neutral">{tax.type}</span>

                <div className="flex items-center gap-1.5 font-mono text-xs font-bold">
                  <Clock className={cn('w-3.5 h-3.5', isFinished ? 'text-success' : isUrgent ? 'text-warning' : 'text-ink-400')} />
                  <span className={cn(isFinished ? 'text-success-deep' : isUrgent ? 'text-warning-deep' : 'text-ink-600')}>
                    {isFinished ? 'Kapatıldı' : `${tax.remainingDays} Gün Kaldı`}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-bold text-ink-900 text-base leading-snug">{tax.title}</h3>
                <p className="text-xs text-ink-500 mt-1.5 leading-relaxed">{tax.description}</p>
                <span className="text-[10px] font-mono text-ink-400 mt-2 block">{tax.legalBasis}</span>
              </div>

              <div className="p-3.5 bg-paper-50 rounded-xl border border-line flex items-center justify-between text-xs">
                <div>
                  <span className="mlabel block mb-0.5">Yasal Son Gün</span>
                  <span className="font-mono font-bold text-ink-900">{tax.deadline}</span>
                </div>
                <div className="text-right">
                  <span className="mlabel block mb-0.5">Durum</span>
                  <span className={cn(
                    'font-bold flex items-center gap-1 justify-end',
                    isFinished ? 'text-success-deep' : 'text-ink-700'
                  )}>
                    {isFinished && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {tax.status}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownloadSlip(tax.title)}
                  className="btn btn-outline btn-sm flex-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Tahakkuk İndir</span>
                </button>
                <button
                  onClick={() => handleBankOrder(tax.title)}
                  className="btn btn-primary btn-sm flex-1"
                >
                  <CreditCard className="w-3.5 h-3.5" />
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
