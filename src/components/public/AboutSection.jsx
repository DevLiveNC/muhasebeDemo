import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Award, Lock, FileCheck2, MapPin } from 'lucide-react';

export default function AboutSection() {
  const { staff, firmInfo } = useApp();

  const standards = [
    {
      title: 'Ruhsatlı denetim',
      desc: 'Beyan ve bilanço çift kontrolden geçer. Yeminli mali müşavir protokolü uygulanır.',
      icon: ShieldCheck
    },
    {
      title: 'Fatura otomatik okunur',
      desc: 'Elle veri girişi yok. Fatura ve ekstre yaklaşık 2 saniyede işlenir.',
      icon: FileCheck2
    },
    {
      title: 'Vergi indirimleri takipte',
      desc: 'Teknopark, Ar-Ge ve ihracat KDV iadesini her ay nakit olarak gösteririz.',
      icon: Award
    },
    {
      title: 'Banka seviyesinde güvenlik',
      desc: 'Şifreli bağlantı, yedekli bulut ve KVKK uyumlu gizlilik.',
      icon: Lock
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-white border-y border-line scroll-mt-24">
      <div className="container-x">

        {/* Corporate Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          <div className="lg:col-span-6 space-y-6">
            <p className="mlabel text-pine-700">Hakkımızda</p>

            <h2 className="font-serif text-ink-900 text-3xl sm:text-4xl md:text-[44px] leading-[1.08] tracking-tight">
              Mali müşavirliği yük olmaktan çıkarıp <em className="text-pine-700">büyüme aracına</em> çeviriyoruz.
            </h2>

            <p className="text-sm text-ink-600 leading-relaxed">
              2016 yılında kurulan <strong className="text-ink-900">{firmInfo.legalName}</strong>,
              vergi hukuku deneyimini sade bir dijital panel ve net raporlarla birleştirir.
            </p>
            <p className="text-sm text-ink-500 leading-relaxed">
              TÜRMOB ve KGK yetkili 28 kişilik ekibimiz; teknoloji girişimlerinden e-ihracatçılara,
              KOBİ'lerden holding iştiraklerine kadar şirketlere mali danışmanlık verir.
            </p>

            {/* Licenses */}
            <div className="space-y-2.5 pt-2">
              {firmInfo.licenses.map((lic) => (
                <div key={lic.no} className="flex items-center gap-3 p-3.5 rounded-xl bg-paper-50 border border-line">
                  <ShieldCheck className="w-4 h-4 text-pine-700 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-[13px] font-semibold text-ink-900 truncate">{lic.title}</p>
                    <p className="text-[10px] font-mono text-ink-400 mt-0.5">Ruhsat / Yetki No: {lic.no}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Offices */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-line">
                <span className="mlabel flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-pine-700" /> Ana Ofis
                </span>
                <p className="text-xs text-ink-700 mt-1.5 leading-relaxed">{firmInfo.hq}</p>
              </div>
              <div className="p-4 rounded-xl border border-line">
                <span className="mlabel flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-pine-700" /> Teknopark Ofisi
                </span>
                <p className="text-xs text-ink-700 mt-1.5 leading-relaxed">{firmInfo.technoparkOffice}</p>
              </div>
            </div>
          </div>

          {/* Standards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 self-start">
            {standards.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="card card-hover p-5 space-y-3">
                  <div className="w-9 h-9 rounded-lg bg-pine-50 border border-pine-100 text-pine-700 flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-ink-900">{st.title}</h4>
                  <p className="text-xs text-ink-500 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team */}
        <div className="mt-20 pt-12 border-t border-line">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <p className="mlabel text-pine-700">Ortaklar</p>
            <h3 className="font-serif text-3xl text-ink-900">Kıdemli danışman kadromuz</h3>
            <p className="text-sm text-ink-500">
              Her şirkete atanan lisanslı mali müşavir.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {staff.map((st) => (
              <div key={st.id} className="card card-hover p-5 text-center space-y-3">
                <img
                  src={st.avatar}
                  alt={st.name}
                  className="w-16 h-16 rounded-xl object-cover mx-auto border border-line"
                />
                <div>
                  <h4 className="font-bold text-sm text-ink-900">{st.name}</h4>
                  <p className="text-[11px] font-mono text-pine-700 mt-0.5">{st.role}</p>
                  <p className="text-[11px] text-ink-400 mt-1 leading-relaxed">{st.specialty}</p>
                  {st.license && (
                    <span className="text-[9px] text-ink-400 font-mono block mt-2">{st.license}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
