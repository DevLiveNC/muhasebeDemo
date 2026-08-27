import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Menu,
  X,
  Building2,
  ShieldCheck,
  Calendar,
  ArrowUpRight
} from 'lucide-react';

export default function PublicNavbar() {
  const {
    navigateToMode,
    setIsConsultationOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Hizmetler', href: '#services' },
    { label: 'Neden biz?', href: '#why-us' },
    { label: 'Müşteri paneli', href: '#portal-preview' },
    { label: 'Vergi hesaplama', href: '#calculator' },
    { label: 'Yazılar', href: '#blog' },
    { label: 'Hakkımızda', href: '#about' },
    { label: 'İletişim', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="sticky top-11 z-40 bg-paper-50/90 backdrop-blur-md border-b border-line">
      <div className="max-w-[1220px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Brand */}
          <a href="#top" onClick={(e) => handleScrollTo(e, '#top')} className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-lg bg-pine-700 text-white font-serif font-bold flex items-center justify-center text-lg shadow-sm group-hover:bg-pine-900 transition-colors">
              V
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-base tracking-[0.14em] text-ink-900">VELOX</span>
                <span className="text-[9px] px-1.5 py-0.5 bg-pine-50 text-pine-700 font-mono rounded border border-pine-100 tracking-[0.18em] uppercase">
                  Denetim
                </span>
              </div>
              <p className="text-[10px] text-ink-400 -mt-0.5">YMM & Mali Müşavirlik</p>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-6 text-[13px] font-medium text-ink-500">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-pine-800 transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pine-600 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => navigateToMode('portal')}
              className="btn btn-ghost btn-sm"
            >
              <Building2 className="w-3.5 h-3.5 text-pine-700" />
              <span>Müşteri girişi</span>
              <ArrowUpRight className="w-3 h-3" />
            </button>
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="btn btn-primary btn-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Görüşme alın</span>
            </button>
          </div>

          {/* Mobile Trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <button onClick={() => setIsConsultationOpen(true)} className="btn btn-primary btn-sm">
              Görüşme
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-ink-600 hover:bg-paper-200 transition-colors"
              title="Menü"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-line bg-white px-4 py-4 space-y-3 animate-slide-down">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block px-3 py-2 rounded-lg text-sm text-ink-700 hover:bg-paper-100 hover:text-pine-800 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-line grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToMode('portal');
              }}
              className="btn btn-outline btn-sm w-full"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Müşteri paneli</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToMode('admin');
              }}
              className="btn btn-outline btn-sm w-full"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-pine-700" />
              <span>Ofis paneli</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
