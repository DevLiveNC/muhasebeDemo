import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, AlertCircle, Info, X, AlertTriangle } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ToastContainer() {
  const { toasts, removeToast } = useApp();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex flex-col space-y-2 max-w-md w-full pointer-events-none px-3 font-sans">
      {toasts.map((toast) => {
        let Icon = CheckCircle2;
        let accent = 'border-l-success';
        let iconWrap = 'bg-success-soft text-success-deep';

        if (toast.type === 'error') {
          Icon = AlertCircle;
          accent = 'border-l-danger';
          iconWrap = 'bg-danger-soft text-danger-deep';
        } else if (toast.type === 'warning') {
          Icon = AlertTriangle;
          accent = 'border-l-warning';
          iconWrap = 'bg-warning-soft text-warning-deep';
        } else if (toast.type === 'info') {
          Icon = Info;
          accent = 'border-l-pine-500';
          iconWrap = 'bg-pine-50 text-pine-700';
        }

        return (
          <div
            key={toast.id}
            className={cn(
              'pointer-events-auto flex items-start gap-3 p-4 rounded-xl border border-line border-l-4 bg-white shadow-pop animate-slide-up',
              accent
            )}
          >
            <div className={cn('p-1.5 rounded-lg shrink-0', iconWrap)}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-ink-950">{toast.title}</h4>
              <p className="text-[11px] text-ink-500 mt-0.5 leading-relaxed">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="p-1 rounded text-ink-300 hover:text-ink-950 hover:bg-paper-100 transition-colors"
              title="Kapat"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
