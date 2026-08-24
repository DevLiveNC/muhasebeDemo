import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { UserCheck, Plus, Mail, Phone, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminStaff() {
  const { staff, addToast } = useApp();

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider border border-emerald-500/20">
              SMMM & Denetçi Kadrosu
            </span>
            <span className="text-slate-500 font-mono text-xs">TÜRMOB Ruhsatlı Uzmanlar</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Ekip & Denetçi Kapasite Yönetimi</h1>
          <p className="text-xs text-slate-400 font-mono">Mali müşavirler, vergi uzmanları, iş yükü doluluk oranları ve mükellef dağılımı</p>
        </div>

        <button
          onClick={() => {
            addToast('Personel Davet Linki', 'Yeni SMMM veya denetçi davet bağlantısı panoya kopyalandı.', 'info');
          }}
          className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
        >
          <Plus className="w-3.5 h-3.5 text-black" />
          <span>Yeni SMMM Davet Et</span>
        </button>
      </div>

      {/* Staff Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {staff.map((st) => (
          <div key={st.id} className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4 shadow-cinema">
            
            {/* Top Person Info */}
            <div className="flex items-start space-x-4">
              <img
                src={st.avatar}
                alt={st.name}
                className="w-14 h-14 rounded-xl object-cover border border-white/10 shadow-sm"
              />
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-bold text-base text-white">{st.name}</h3>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-white/10 text-slate-300">
                    {st.role}
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">{st.specialty}</p>
                <div className="flex items-center space-x-3 text-slate-500 text-[11px] font-mono pt-1">
                  <span>{st.email}</span>
                  <span>·</span>
                  <span>{st.phone}</span>
                </div>
              </div>
            </div>

            {/* Workload Progress Bar */}
            <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] space-y-2 text-xs font-mono">
              <div className="flex justify-between">
                <span className="text-slate-400">İş Yükü Kapasitesi:</span>
                <span className={cn("font-bold", st.workload > 85 ? "text-amber-400" : "text-emerald-400")}>
                  %{st.workload} (Kapasite)
                </span>
              </div>
              <div className="w-full h-1.5 bg-white/[0.06] rounded-full overflow-hidden">
                <div 
                  style={{ width: `${st.workload}%` }} 
                  className={cn("h-full rounded-full transition-all duration-500", st.workload > 85 ? "bg-amber-400" : "bg-white")}
                />
              </div>
            </div>

            {/* Quick Metrics */}
            <div className="grid grid-cols-2 gap-3 text-center text-xs font-mono">
              <div className="p-2.5 bg-black/40 rounded-xl border border-white/[0.06]">
                <span className="text-slate-500 text-[10px] block uppercase">Sorumlu Portföy</span>
                <span className="font-bold text-white text-sm">{st.clientsCount} Mükellef</span>
              </div>
              <div className="p-2.5 bg-black/40 rounded-xl border border-white/[0.06]">
                <span className="text-slate-500 text-[10px] block uppercase">Açık İş Emirleri</span>
                <span className="font-bold text-white text-sm">{st.activeTasks} Görev</span>
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
