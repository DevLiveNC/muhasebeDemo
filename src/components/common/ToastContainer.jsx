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
        let colorClasses = "border-emerald-500/30 bg-[#0e1119]/95 text-white shadow-2xl";
        let iconColor = "text-emerald-400";

        if (toast.type === 'error') {
          Icon = AlertCircle;
          colorClasses = "border-rose-500/30 bg-[#0e1119]/95 text-white shadow-2xl";
          iconColor = "text-rose-400";
        } else if (toast.type === 'warning') {
          Icon = AlertTriangle;
          colorClasses = "border-amber-500/30 bg-[#0e1119]/95 text-white shadow-2xl";
          iconColor = "text-amber-400";
        } else if (toast.type === 'info') {
          Icon = Info;
          colorClasses = "border-white/20 bg-[#0e1119]/95 text-white shadow-2xl";
          iconColor = "text-slate-300";
        }

        return (
          <div
            key={toast.id}
            className={cn(
              "pointer-events-auto flex items-start space-x-3 p-4 rounded-xl border backdrop-blur-md transition-all duration-300 animate-slide-down",
              colorClasses
            )}
          >
            <div className={cn("p-1 rounded-lg shrink-0 mt-0.5", iconColor)}>
              <Icon className="w-4 h-4" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-xs font-bold text-white font-sans">{toast.title}</h4>
              <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed font-mono">{toast.message}</p>
            </div>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-slate-500 hover:text-white p-1 rounded transition-colors"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        );
      })}
    </div>
  );
}
