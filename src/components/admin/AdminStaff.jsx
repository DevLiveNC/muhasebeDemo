import React from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, Mail, Phone } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminStaff() {
  const { staff, addToast } = useApp();

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-pine">SMMM & Denetçi Kadrosu</span>
            <span className="text-ink-400 font-mono text-xs">TÜRMOB Ruhsatlı Uzmanlar</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-950 tracking-tight mt-1.5">
            Ekip & Denetçi Kapasite Yönetimi
          </h1>
          <p className="text-xs text-ink-400 mt-1">
            Mali müşavirler, vergi uzmanları, iş yükü doluluk oranları ve mükellef dağılımı
          </p>
        </div>

        <button
          onClick={() => {
            addToast('Personel Davet Linki', 'Yeni SMMM veya denetçi davet bağlantısı panoya kopyalandı.', 'info');
          }}
          className="btn btn-primary btn-sm shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Yeni SMMM Davet Et</span>
        </button>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {staff.map((st) => (
          <div key={st.id} className="card p-6 space-y-4">

            {/* Person Info */}
            <div className="flex items-start gap-4">
              <img
                src={st.avatar}
                alt={st.name}
                className="w-14 h-14 rounded-xl object-cover border border-line"
              />
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="font-bold text-ink-950">{st.name}</h3>
                  <span className="badge badge-neutral shrink-0">{st.role}</span>
                </div>
                <p className="text-xs text-ink-500">{st.specialty}</p>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-ink-400 text-[11px] font-mono pt-1">
                  <span className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    {st.email}
                  </span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3" />
                    {st.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Workload */}
            <div className="p-4 bg-paper-50 rounded-xl border border-line space-y-2">
              <div className="flex justify-between text-xs">
                <span className="text-ink-500">İş Yükü Kapasitesi:</span>
                <span className={cn('font-mono font-bold', st.workload > 85 ? 'text-warning-deep' : 'text-success-deep')}>
                  %{st.workload}
                </span>
              </div>
              <div className="progress">
                <div
                  style={{ width: `${st.workload}%` }}
                  className={cn('progress-bar', st.workload > 85 && 'progress-bar-warning')}
                />
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-paper-50 rounded-xl border border-line text-center">
                <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block">Sorumlu Portföy</span>
                <span className="font-mono font-bold text-ink-950 text-sm block mt-1">{st.clientsCount} Mükellef</span>
              </div>
              <div className="p-3 bg-paper-50 rounded-xl border border-line text-center">
                <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block">Açık İş Emirleri</span>
                <span className="font-mono font-bold text-ink-950 text-sm block mt-1">{st.activeTasks} Görev</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
