import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Mail, Phone, MapPin, CheckCircle2 } from 'lucide-react';
import PageIntro from '../common/PageIntro';

export default function PortalCompanyProfile() {
  const { clients, addToast } = useApp();
  const client = clients.find((c) => c.id === 'cli-1') || clients[0];

  const handleDirectConnect = () => {
    addToast('Görüşme isteği gönderildi', `${client.assignedCPA.name} ile toplantı talebi iletildi.`, 'info');
  };

  const registryFields = [
    { label: 'Vergi numarası', value: client.taxNumber },
    { label: 'Vergi dairesi', value: client.taxOffice },
    { label: 'Ticaret sicil no', value: client.tradeRegisterNo },
    { label: 'MERSİS', value: client.mersisNo }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

        <PageIntro
          title="Şirket"
          lead="Sicil bilgileri ve size atanan mali müşavir."
        />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Registry */}
        <div className="lg:col-span-7 card p-6 space-y-5 self-start">
          <div className="flex items-center gap-3.5 pb-4 border-b border-line">
            <div className="w-12 h-12 rounded-xl bg-pine-700 text-white font-serif font-bold text-base flex items-center justify-center shrink-0">
              TV
            </div>
            <div className="min-w-0">
              <h3 className="font-bold text-ink-900 text-base leading-snug">{client.name}</h3>
              <p className="text-xs text-ink-400 mt-0.5">{client.type} · {client.sector}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {registryFields.map((f, i) => (
              <div key={i} className="p-3.5 bg-paper-50 rounded-xl border border-line">
                <span className="mlabel block mb-1">
                  {f.label}
                </span>
                <span className="font-mono font-semibold text-ink-900 text-sm break-all">{f.value}</span>
              </div>
            ))}
          </div>

          <div className="p-4 bg-paper-50 rounded-xl border border-line">
            <span className="mlabel flex items-center gap-1.5 block mb-1.5">
              <MapPin className="w-3 h-3 text-pine-700" />
              Kayıtlı Tebligat & Faaliyet Adresi
            </span>
            <p className="text-[13px] text-ink-700 leading-relaxed">{client.address}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            <span className="badge badge-success">
              <CheckCircle2 className="w-3 h-3" />
              E-Fatura & E-Arşiv
            </span>
            <span className="badge badge-success">
              <CheckCircle2 className="w-3 h-3" />
              E-Defter Akredite
            </span>
            <span className="badge badge-pine">
              <CheckCircle2 className="w-3 h-3" />
              4691 Teknopark Muafiyeti
            </span>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-4">

          {/* CPA Card */}
          <div className="card p-6 space-y-5">
            <div className="flex items-center gap-1.5 text-[11px] font-semibold text-pine-700">
              <ShieldCheck className="w-4 h-4" />
              <span>Sorumlu Mali Müşavir</span>
            </div>

            <div className="flex items-center gap-4">
              <img
                src={client.assignedCPA.avatar}
                alt={client.assignedCPA.name}
                className="w-14 h-14 rounded-xl object-cover border border-line"
              />
              <div className="min-w-0">
                <h4 className="font-bold text-base text-ink-900">{client.assignedCPA.name}</h4>
                <p className="text-xs text-ink-500 mt-0.5">{client.assignedCPA.title}</p>
                <span className="text-[11px] font-mono text-success-deep mt-1.5 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
                  Çevrimiçi · Doğrudan Masası
                </span>
              </div>
            </div>

            <div className="space-y-2.5 text-[13px] text-ink-600 pt-2 border-t border-line">
              <div className="flex items-center gap-2.5">
                <Mail className="w-3.5 h-3.5 text-ink-400" />
                <span className="font-mono text-xs">{client.assignedCPA.email}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-3.5 h-3.5 text-ink-400" />
                <span className="font-mono text-xs">{client.assignedCPA.phone}</span>
              </div>
            </div>

            <button
              onClick={handleDirectConnect}
              className="btn btn-primary btn-md w-full"
            >
              Doğrudan Masaya Bağlan
            </button>
          </div>

          {/* Authorized Rep */}
          <div className="card p-5 space-y-3">
            <span className="mlabel block">
              Şirket Yetkili Temsilcisi
            </span>
            <div className="flex items-center gap-3">
              <img
                src={client.authorizedPerson.avatar}
                alt={client.authorizedPerson.name}
                className="w-10 h-10 rounded-lg object-cover border border-line"
              />
              <div className="text-[13px] min-w-0">
                <p className="font-bold text-ink-900">{client.authorizedPerson.name}</p>
                <p className="text-ink-400 text-xs">{client.authorizedPerson.title}</p>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
