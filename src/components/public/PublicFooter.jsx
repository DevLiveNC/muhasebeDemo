import React from 'react';
import { useApp } from '../../context/AppContext';
import BrandMark from '../common/BrandMark';

export default function PublicFooter() {
  const { navigateToMode, setIsConsultationOpen, firmInfo } = useApp();

  return (
    <footer className="bg-pine-900 text-pine-200 text-xs">
      <div className="container-x py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand + contact */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <BrandMark size="md" tone="inverse" />
              <span className="font-bold text-base text-white">
                {firmInfo.name}
              </span>
            </div>

            <p className="text-xs text-pine-300 leading-relaxed max-w-sm">
              {firmInfo.legalName}
              <br />
              {firmInfo.tagline}.
            </p>

            <address className="not-italic space-y-1.5 text-[11px] text-pine-300 pt-1">
              <p>{firmInfo.hq}</p>
              <p>{firmInfo.technoparkOffice}</p>
              <p className="pt-1">
                <a href={`tel:${firmInfo.phone.replace(/[^+\d]/g, '')}`} className="text-pine-100 hover:text-white transition-colors">
                  {firmInfo.phone}
                </a>
                {' · '}
                <a href={`mailto:${firmInfo.email}`} className="text-pine-100 hover:text-white transition-colors">
                  {firmInfo.email}
                </a>
              </p>
              <p>Pazartesi – Cuma · 09:00 – 18:30</p>
            </address>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold text-white/80">Hizmetler</h4>
            <ul className="space-y-2 text-pine-300">
              <li><a href="#services" className="hover:text-white transition-colors">e-Fatura ve e-Defter</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Vergi beyanı</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Teknopark ve Ar-Ge indirimi</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Nakit ve finans raporu</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">İhracat KDV iadesi</a></li>
            </ul>
          </div>

          {/* Consoles */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold text-white/80">Paneller</h4>
            <ul className="space-y-2 text-pine-300">
              <li>
                <button onClick={() => navigateToMode('portal')} className="hover:text-white transition-colors">
                  Müşteri paneli
                </button>
              </li>
              <li>
                <button onClick={() => navigateToMode('admin')} className="hover:text-white transition-colors">
                  Ofis paneli
                </button>
              </li>
              <li>
                <button onClick={() => setIsConsultationOpen(true)} className="hover:text-white transition-colors">
                  Ücretsiz görüşme
                </button>
              </li>
            </ul>
          </div>

          {/* Accreditation */}
          <div className="space-y-3">
            <h4 className="text-[11px] font-semibold text-white/80">Ruhsatlar</h4>
            <ul className="space-y-2.5 text-pine-300">
              {firmInfo.licenses.map((lic) => (
                <li key={lic.no} className="leading-relaxed">
                  <span className="block text-pine-100">{lic.title}</span>
                  <span className="font-mono text-[10px] text-pine-400">No: {lic.no}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-pine-400">
            © 2026 {firmInfo.legalName} Tüm hakları saklıdır.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[11px] text-pine-300 hover:text-white transition-colors"
          >
            Başa dön ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
