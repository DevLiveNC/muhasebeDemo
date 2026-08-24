import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  Receipt,
  Scale,
  Users,
  LineChart,
  Building2,
  ShieldAlert
} from 'lucide-react';

const iconMap = {
  Receipt,
  Scale,
  Users,
  LineChart,
  Building2,
  ShieldAlert
};

export default function ServiceDetailModal() {
  const { selectedServiceDetail, setSelectedServiceDetail, setIsConsultationOpen } = useApp();

  if (!selectedServiceDetail) return null;

  const srv = selectedServiceDetail;
  const Icon = iconMap[srv.icon] || Receipt;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-2xl bg-[#0b0d13] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh] transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-5 bg-black/60 text-white flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-white/10 text-white rounded-lg border border-white/20">
              <Icon className="w-5 h-5" />
            </div>
            <div>
              <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-white/10 text-slate-300 rounded uppercase tracking-wider">
                {srv.badge}
              </span>
              <h3 className="font-bold text-base text-white mt-1">{srv.title}</h3>
            </div>
          </div>

          <button
            onClick={() => setSelectedServiceDetail(null)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-[#0e1119]">
          <div>
            <h4 className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Mevzuat & Hizmet Kapsamı</h4>
            <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed font-sans">
              {srv.fullDesc}
            </p>
          </div>

          {/* Included Features List */}
          <div className="p-5 rounded-xl bg-black/40 border border-white/[0.06] space-y-3 font-mono">
            <h4 className="text-[10px] uppercase tracking-wider text-slate-400">Paket Detayları & Standartlar</h4>
            <div className="grid grid-cols-1 gap-2">
              {srv.features.map((feature, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-xs text-slate-200">
                  <div className="w-4 h-4 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SLA & Security note */}
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-xs font-mono text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Tüm denetimler TÜRMOB lisanslı SMMM ve KGK Bağımsız Denetçi güvencesindedir.</span>
          </div>

          {/* Bottom Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-end space-y-2 sm:space-y-0 sm:space-x-3 pt-4 border-t border-white/[0.06]">
            <button
              onClick={() => setSelectedServiceDetail(null)}
              className="w-full sm:w-auto px-4 py-2 rounded-lg border border-white/10 text-slate-400 hover:text-white text-xs font-mono transition-colors"
            >
              Kapat
            </button>
            <button
              onClick={() => {
                setSelectedServiceDetail(null);
                setIsConsultationOpen(true);
              }}
              className="w-full sm:w-auto px-5 py-2.5 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-luxury transition-all font-mono"
            >
              <span>Teklif & Ön Görüşme Al</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
