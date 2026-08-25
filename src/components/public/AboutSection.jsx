import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Award, Lock, FileCheck2 } from 'lucide-react';

export default function AboutSection() {
  const { staff, firmInfo } = useApp();

  const standards = [
    {
      title: 'TÜRMOB & KGK Akredite Denetim',
      desc: 'Tüm beyanname ve bilanço süreçleri çifte kontrol süzgecinden ve YMM denetim protokolünden geçirilir.',
      icon: ShieldCheck
    },
    {
      title: 'Yapay Zeka Destekli OCR & Otomasyon',
      desc: 'Manuel veri girişini sıfırlayarak fatura ve ekstreleri 2.1 saniyelik şematron doğrulamasıyla işliyoruz.',
      icon: FileCheck2
    },
    {
      title: 'Maksimum Yasal Teşvik & İade',
      desc: '4691 Teknopark, 5746 Ar-Ge ve ihracat KDV iadelerini her ay şirketinizin nakit pozisyonuna kazandırıyoruz.',
      icon: Award
    },
    {
      title: 'Banka Seviyesinde ISO 27001 Güvenlik',
      desc: '256-bit SSL şifreleme, bağımsız yedekli bulut ve KVKK mevzuatına tam uyumlu gizlilik protokolü.',
      icon: Lock
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.08] scroll-mt-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Corporate Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
              Kurumsal Kimlik & Akreditasyon
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Mali müşavirliği bir yük olmaktan çıkarıp <br />
              <span className="font-editorial italic font-normal text-slate-200">büyüme kaldıracına</span> dönüştürüyoruz.
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              2016 yılında kurulan <strong>VELOX Mali Müşavirlik & Bağımsız Denetim A.Ş.</strong>, köklü vergi hukuku tecrübesini yeni nesil bulut teknolojileri ve analitik raporlama araçlarıyla harmanlayan öncü bir kurumdur.
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              TÜRMOB ve KGK Bağımsız Denetim yetkilerine sahip 28 kişilik uzman kadromuzla; teknoloji girişimlerinden e-ihracatçılara, KOBİ'lerden holding iştiraklerine kadar geniş bir portföye stratejik danışmanlık sağlıyoruz.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2 font-mono">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-2xl font-black text-white block">48+</span>
                <span className="text-[11px] text-slate-400">Kurumsal Mükellef</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-2xl font-black text-emerald-400 block">₺1.84 Mr+</span>
                <span className="text-[11px] text-slate-400">Yönetilen Hacim</span>
              </div>
            </div>
          </div>

          {/* Right Column: Standards Grid */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {standards.map((st, i) => {
              const Icon = st.icon;
              return (
                <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] space-y-2 hover:bg-white/[0.04] transition-all">
                  <div className="w-8 h-8 rounded-lg bg-white/[0.06] text-white flex items-center justify-center">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm text-white">{st.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>

        </div>

        {/* Leadership & Expert CPA Team */}
        <div className="mt-20 pt-12 border-t border-white/[0.08]">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">Sorumlu Ortaklar</span>
            <h3 className="text-2xl font-extrabold text-white">Kıdemli Danışman Kadromuz</h3>
            <p className="text-xs text-slate-400">Her mükellefimize özel atanan lisanslı SMMM ve YMM uzmanlarımız.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {staff.map((st) => (
              <div key={st.id} className="p-5 rounded-2xl bg-white/[0.02] border border-white/[0.08] text-center space-y-3 hover:bg-white/[0.04] transition-all">
                <img
                  src={st.avatar}
                  alt={st.name}
                  className="w-16 h-16 rounded-xl object-cover mx-auto border border-white/10 shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">{st.name}</h4>
                  <p className="text-[11px] text-slate-300 font-mono mt-0.5">{st.role}</p>
                  <p className="text-[10px] text-slate-400 mt-1 font-sans">{st.specialty}</p>
                  <span className="text-[9px] text-slate-500 font-mono block mt-2">{st.license}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
