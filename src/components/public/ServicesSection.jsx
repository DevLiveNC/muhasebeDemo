import React from 'react';
import { useApp } from '../../context/AppContext';
import { ArrowUpRight, FileText, Scale, FlaskConical, LineChart, Plane, Users } from 'lucide-react';

const ICONS = [FileText, Scale, FlaskConical, LineChart, Plane, Users];
const ICON_KEYS = ['FileText', 'Scale', 'FlaskConical', 'LineChart', 'Plane', 'Users'];

export default function ServicesSection() {
  const { services, setSelectedServiceDetail, setIsConsultationOpen } = useApp();

  return (
    <section id="services" className="py-20 md:py-28 bg-paper-100 scroll-mt-24">
      <div className="container-x">

        {/* Header */}
        <div className="section-head">
          <p className="eyebrow">01 / Kurumsal Mali Müşavirlik & Denetim Alanları</p>
          <h2>
            Şirketinizin tüm finansal döngüsü <em>tek bir konsolda</em> güvende.
          </h2>
          <p className="max-w-lg">
            Klasik defter tutmanın ötesinde; e-dönüşümden Ar-Ge vergi muafiyetlerine, ihracat KDV
            iadesinden sanal CFO danışmanlığına kadar 360° kurumsal müşavirlik.
          </p>
        </div>

        {/* Numbered Service Rows */}
        <div className="mt-12 border-t border-line-strong">
          {services.map((srv, idx) => {
            const Icon = ICONS[idx % ICONS.length];
            return (
              <article
                key={srv.id}
                onClick={() => setSelectedServiceDetail({ ...srv, icon: ICON_KEYS[idx % ICON_KEYS.length], badge: srv.subtitle })}
                className="group grid grid-cols-[44px_1fr_auto_28px] sm:grid-cols-[56px_44px_1fr_160px_28px] items-center gap-4 py-6 border-b border-line cursor-pointer transition-all hover:bg-white hover:px-3"
              >
                <span className="font-mono text-sm font-semibold text-ink-300 group-hover:text-pine-700 transition-colors">
                  {srv.number}
                </span>
                <div className="hidden sm:flex w-10 h-10 rounded-lg bg-pine-50 border border-pine-100 text-pine-700 items-center justify-center group-hover:bg-pine-700 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-serif text-[22px] text-ink-900 leading-tight">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-ink-500 mt-1.5 leading-relaxed max-w-xl">
                    {srv.shortDesc}
                  </p>
                </div>
                <span className="hidden sm:block text-[11px] font-mono text-ink-400 leading-relaxed">
                  {srv.subtitle}
                </span>
                <ArrowUpRight className="w-5 h-5 text-ink-300 group-hover:text-pine-700 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-ink-500">
            Hangi hizmetin sizin için doğru olduğu konusunda emin misiniz?
          </p>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="btn btn-outline btn-md"
          >
            <span>Bize Danışın</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
