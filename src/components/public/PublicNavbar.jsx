import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Menu,
  X,
  Building2,
  ShieldCheck,
  Calendar,
  Sparkles
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PublicNavbar() {
  const {
    navigateToMode,
    setIsConsultationOpen,
    setIsAiAssistantOpen
  } = useApp();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Hizmet Kapsamı', href: '#services' },
    { label: 'Neden Velox?', href: '#why-us' },
    { label: 'Dijital Konsol', href: '#portal-preview' },
    { label: 'Vergi Simülatörü', href: '#calculator' },
    { label: 'Mevzuat & Blog', href: '#blog' },
    { label: 'Kurumsal & Ekip', href: '#about' },
    { label: 'İletişim', href: '#contact' },
  ];

  const handleScrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="sticky top-11 z-40 bg-[#08090d]/90 backdrop-blur-xl border-b border-white/[0.08] transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Brand Logo */}
          <div className="flex items-center space-x-3">
            <a href="#" className="flex items-center space-x-2.5 group">
              <div className="w-8 h-8 rounded-lg bg-white text-black flex items-center justify-center font-black text-sm shadow-luxury group-hover:bg-slate-200 transition-all">
                V
              </div>
              <div>
                <div className="flex items-center space-x-1.5">
                  <span className="font-extrabold text-base tracking-wider text-white">VELOX</span>
                  <span className="text-[9px] px-1.5 py-0.2 bg-white/10 text-slate-300 font-mono rounded tracking-widest uppercase">
                    DENETİM
                  </span>
                </div>
                <p className="text-[9px] text-slate-400 font-mono uppercase tracking-wider -mt-0.5">YMM & Mali Müşavirlik</p>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 text-xs font-medium text-slate-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="hover:text-white transition-colors py-1 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3 text-xs">
            <button
              onClick={() => navigateToMode('portal')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] font-medium transition-colors border border-white/[0.08]"
            >
              <Building2 className="w-3.5 h-3.5 text-slate-400" />
              <span>Müşteri Konsolu</span>
            </button>

            <button
              onClick={() => navigateToMode('admin')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/[0.06] font-medium transition-colors border border-white/[0.08]"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SMMM Masası</span>
            </button>

            <button
              onClick={() => setIsConsultationOpen(true)}
              className="flex items-center space-x-1.5 px-4 py-1.5 rounded-lg bg-white hover:bg-slate-200 text-black font-bold text-xs uppercase tracking-wider shadow-luxury transition-all active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-black" />
              <span>Ön Görüşme Al</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => setIsConsultationOpen(true)}
              className="px-3 py-1.5 bg-white text-black rounded-lg text-xs font-bold"
            >
              Ön Görüşme
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-white/10 bg-[#0c0e14] px-4 py-4 space-y-3 animate-slide-down text-xs">
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleScrollTo(e, link.href)}
                className="block px-3 py-2 rounded-lg text-slate-200 hover:bg-white/[0.06]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToMode('portal');
              }}
              className="w-full py-2 rounded-lg border border-white/10 text-slate-200 font-medium flex items-center justify-center space-x-1"
            >
              <Building2 className="w-3.5 h-3.5" />
              <span>Müşteri Konsolu</span>
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                navigateToMode('admin');
              }}
              className="w-full py-2 rounded-lg border border-white/10 text-slate-200 font-medium flex items-center justify-center space-x-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SMMM Masası</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
