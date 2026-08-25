import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Mail, Phone, MapPin, Building, CheckCircle2 } from 'lucide-react';

export default function PortalCompanyProfile() {
  const { clients, addToast } = useApp();
  const client = clients.find((c) => c.id === 'cli-1') || clients[0];

  const handleDirectConnect = () => {
    addToast('Görüşme Masası Açıldı', 'SMMM Kemal Yıldız ile doğrudan toplantı talebi iletildi.', 'info');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Şirket Sicil & Danışman Masası</h1>
        <p className="text-xs text-slate-400 font-mono">Resmi vergi dairesi kayıtları, MERSİS ve atanan SMMM direktörü</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Registry */}
        <div className="lg:col-span-7 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-5">
          <div className="flex items-center space-x-3 pb-4 border-b border-white/[0.08]">
            <div className="w-12 h-12 rounded-xl bg-white text-black font-black text-base flex items-center justify-center shadow-luxury">
              TV
            </div>
            <div>
              <h3 className="font-bold text-white text-base">{client.name}</h3>
              <p className="text-xs text-slate-400 font-mono">{client.type} · {client.sector}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div className="p-3 bg-black/40 rounded-xl border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 uppercase block">Vergi Kimlik Numarası</span>
              <span className="font-bold text-white text-sm">{client.taxNumber}</span>
            </div>

            <div className="p-3 bg-black/40 rounded-xl border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 uppercase block">Bağlı Vergi Dairesi</span>
              <span className="font-bold text-white text-sm">{client.taxOffice}</span>
            </div>

            <div className="p-3 bg-black/40 rounded-xl border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 uppercase block">Ticaret Sicil No</span>
              <span className="font-bold text-white">{client.tradeRegisterNo}</span>
            </div>

            <div className="p-3 bg-black/40 rounded-xl border border-white/[0.06]">
              <span className="text-[10px] text-slate-400 uppercase block">MERSİS Numarası</span>
              <span className="font-bold text-white text-[11px] truncate">{client.mersisNo}</span>
            </div>
          </div>

          <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] text-xs">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">Kayıtlı Tebligat & Faaliyet Adresi</span>
            <p className="text-slate-300 leading-relaxed font-sans">{client.address}</p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 text-[11px] font-mono">
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              ✓ E-Fatura & E-Arşiv
            </span>
            <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full border border-emerald-500/20">
              ✓ E-Defter Akredite
            </span>
            <span className="px-3 py-1 bg-white/10 text-slate-200 rounded-full border border-white/10">
              ✓ 4691 Teknopark Muafiyeti
            </span>
          </div>
        </div>

        {/* Right Column: CPA Card */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] shadow-cinema space-y-5">
            <div className="flex items-center space-x-1.5 text-[10px] font-mono uppercase tracking-widest text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Sorumlu Mali Müşavir</span>
            </div>

            <div className="flex items-center space-x-4">
              <img
                src={client.assignedCPA.avatar}
                alt=""
                className="w-14 h-14 rounded-xl object-cover border border-white/15 shadow-md"
              />
              <div>
                <h4 className="font-bold text-base text-white">{client.assignedCPA.name}</h4>
                <p className="text-xs text-slate-300 font-mono">{client.assignedCPA.title}</p>
                <span className="text-[10px] font-mono text-emerald-400 mt-1 block">● Çevrimiçi · Doğrudan Masası</span>
              </div>
            </div>

            <div className="space-y-2 text-xs text-slate-300 pt-2 border-t border-white/[0.06] font-mono">
              <div className="flex items-center space-x-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{client.assignedCPA.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{client.assignedCPA.phone}</span>
              </div>
            </div>

            <button
              onClick={handleDirectConnect}
              className="w-full py-2.5 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider shadow-luxury transition-all"
            >
              Doğrudan Masaya Bağlan
            </button>
          </div>

          {/* Authorized Rep */}
          <div className="p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">Şirket Yetkili Temsilcisi</span>
            <div className="flex items-center space-x-3">
              <img
                src={client.authorizedPerson.avatar}
                alt=""
                className="w-9 h-9 rounded-lg object-cover border border-white/10"
              />
              <div className="text-xs">
                <p className="font-bold text-white">{client.authorizedPerson.name}</p>
                <p className="text-slate-400">{client.authorizedPerson.title}</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
