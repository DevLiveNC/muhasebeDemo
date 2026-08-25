import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Receipt,
  Scale,
  Users,
  LineChart,
  Building2,
  ShieldAlert,
  FileText,
  FlaskConical,
  Plane
} from 'lucide-react';

const iconMap = {
  Receipt,
  Scale,
  Users,
  LineChart,
  Building2,
  ShieldAlert,
  FileText,
  FlaskConical,
  Plane
};

export default function ServiceDetailModal() {
  const { selectedServiceDetail, setSelectedServiceDetail, setIsConsultationOpen } = useApp();

  if (!selectedServiceDetail) return null;

  const srv = selectedServiceDetail;
  const Icon = iconMap[srv.icon] || Receipt;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-white flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2.5 bg-pine-50 text-pine-700 rounded-lg border border-pine-100 shrink-0">
              <Icon className="w-5 h-5" />
            </div>
            <div className="min-w-0">
              <span className="badge badge-neutral">{srv.badge || srv.subtitle}</span>
              <h3 className="font-bold text-base text-ink-900 mt-1.5 leading-snug">{srv.title}</h3>
            </div>
          </div>

          <button
            onClick={() => setSelectedServiceDetail(null)}
            className="p-1 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors shrink-0"
            title="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto">
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-400">
              Mevzuat & Hizmet Kapsamı
            </h4>
            <p className="text-sm text-ink-600 mt-2.5 leading-relaxed">
              {srv.fullDesc}
            </p>
          </div>

          <div className="p-5 rounded-xl bg-paper-50 border border-line space-y-3">
            <h4 className="text-[10px] font-mono uppercase tracking-[0.16em] text-ink-400">
              Paket Detayları & Standartlar
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {srv.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 text-[13px] text-ink-700">
                  <div className="w-5 h-5 rounded bg-pine-50 text-pine-700 border border-pine-100 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3 h-3" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 p-3.5 rounded-lg bg-pine-50 border border-pine-100 text-xs text-pine-900 leading-relaxed">
            <ShieldCheck className="w-4 h-4 text-pine-700 shrink-0" />
            <span>Tüm denetimler TÜRMOB lisanslı SMMM ve KGK Bağımsız Denetçi güvencesindedir.</span>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-paper-50 border-t border-line flex flex-col sm:flex-row items-center justify-end gap-2 sm:gap-3">
          <button
            onClick={() => setSelectedServiceDetail(null)}
            className="btn btn-ghost btn-md w-full sm:w-auto"
          >
            Kapat
          </button>
          <button
            onClick={() => {
              setSelectedServiceDetail(null);
              setIsConsultationOpen(true);
            }}
            className="btn btn-primary btn-md w-full sm:w-auto"
          >
            <span>Teklif & Ön Görüşme Al</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
