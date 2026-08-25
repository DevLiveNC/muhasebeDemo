import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck } from 'lucide-react';

export default function PublicFooter() {
  const { navigateToMode, setIsConsultationOpen } = useApp();

  return (
    <footer className="bg-pine-950 text-pine-200 text-xs">
      <div className="container-x py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">

          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-white text-pine-900 font-serif font-bold flex items-center justify-center text-sm">
                V
              </div>
              <span className="font-extrabold text-base tracking-[0.14em] text-white">
                VELOX <span className="text-pine-300 font-medium">DENETİM</span>
              </span>
            </div>

            <p className="text-xs text-pine-300 leading-relaxed max-w-sm">
              TÜRMOB ve KGK yetkili Serbest Muhasebeci Mali Müşavirlik & Bağımsız Denetim A.Ş.
              Yeni nesil finansal modelleme ve vergi optimizasyonu.
            </p>

            <div className="text-[11px] font-mono text-pine-300 space-y-1.5 pt-2">
              <p>Büyükdere Cad. No: 195 Kanyon Ofis K:12, Levent / İstanbul</p>
              <p>+90 (212) 809 45 00 · partner@veloxfinans.com</p>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-[0.16em] text-[10px] font-mono">Hizmet Kapsamı</h4>
            <ul className="space-y-2 text-pine-300">
              <li><a href="#services" className="hover:text-white transition-colors">E-Fatura & E-Defter</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Kurumlar Vergisi Denetimi</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">4691 & 5746 Ar-Ge Teşviki</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sanal CFO & Nakit Runway</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">İhracat KDV İadesi</a></li>
            </ul>
          </div>

          {/* Consoles */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-[0.16em] text-[10px] font-mono">Konsol & Paneller</h4>
            <ul className="space-y-2 text-pine-300">
              <li>
                <button onClick={() => navigateToMode('portal')} className="hover:text-white transition-colors">
                  Müşteri Konsolu
                </button>
              </li>
              <li>
                <button onClick={() => navigateToMode('admin')} className="hover:text-white transition-colors">
                  SMMM Yönetim Paneli
                </button>
              </li>
              <li>
                <button onClick={() => setIsConsultationOpen(true)} className="hover:text-white transition-colors">
                  Ön Görüşme Talebi
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-[0.16em] text-[10px] font-mono">Yasal & Akreditasyon</h4>
            <ul className="space-y-2 text-pine-300">
              <li className="flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-300 shrink-0 mt-0.5" />
                TÜRMOB Ruhsat No: 349102
              </li>
              <li className="flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-300 shrink-0 mt-0.5" />
                KGK BDK/2018-41
              </li>
              <li className="flex items-start gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-gold-300 shrink-0 mt-0.5" />
                GİB Özel Entegratör
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-pine-400">
            © 2026 Velox Bağımsız Denetim ve Yeminli Mali Müşavirlik A.Ş. Tüm hakları saklıdır.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-[11px] font-mono text-pine-300 hover:text-white transition-colors"
          >
            Başa dön ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
