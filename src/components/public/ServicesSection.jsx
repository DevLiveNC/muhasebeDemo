import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function ServicesSection() {
  const { services, setSelectedServiceDetail, setIsConsultationOpen } = useApp();

  return (
    <section id="services" className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.08] scroll-mt-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
              Kurumsal Mali Müşavirlik & Denetim Alanları
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Şirketinizin tüm finansal döngüsü <br />
              <span className="font-editorial italic font-normal text-slate-200">tek bir konsolda</span> güvende.
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
            Klasik defter tutmanın ötesinde; e-dönüşümden Ar-Ge vergi muafiyetlerine, ihracat KDV iadesinden sanal CFO danışmanlığına kadar 360° kurumsal müşavirlik.
          </p>
        </div>

        {/* Services Grid (Numbered Luxury Cards) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all flex flex-col justify-between group space-y-6"
            >
              <div className="space-y-4">
                {/* Top Number & Subtitle */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xl font-bold text-slate-400 group-hover:text-white transition-colors">
                    {srv.number}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    {srv.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-slate-100 transition-colors">
                  {srv.title}
                </h3>

                {/* Short Desc */}
                <p className="text-xs text-slate-400 leading-relaxed">
                  {srv.shortDesc}
                </p>

                {/* Key Checklist */}
                <div className="space-y-2 pt-3 border-t border-white/[0.06] text-xs text-slate-300">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <button
                  onClick={() => setSelectedServiceDetail(srv)}
                  className="text-xs font-semibold text-white group-hover:text-slate-200 flex items-center space-x-1.5 transition-colors"
                >
                  <span>Hizmet Kapsamı & Şartlar</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => setIsConsultationOpen(true)}
                  className="text-xs font-mono text-slate-400 hover:text-white px-2.5 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                >
                  Teklif Al
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
