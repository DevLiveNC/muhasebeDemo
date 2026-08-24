import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck } from 'lucide-react';

export default function PublicFooter() {
  const { navigateToMode, setIsConsultationOpen } = useApp();

  return (
    <footer className="bg-[#050608] text-slate-400 border-t border-white/[0.08] text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-7 h-7 rounded-md bg-white text-black font-black flex items-center justify-center text-xs">
                V
              </div>
              <span className="font-extrabold text-base tracking-wider text-white">VELOX <span className="text-slate-400 font-normal">DENETİM</span></span>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              TÜRMOB ve KGK yetkili Serbest Muhasebeci Mali Müşavirlik & Bağımsız Denetim A.Ş. Yeni nesil finansal modelleme ve vergi optimizasyonu.
            </p>

            <div className="text-[11px] font-mono text-slate-400 space-y-1 pt-2">
              <p>📍 Kanyon Ofis K:12 Levent / İstanbul</p>
              <p>📞 +90 (212) 809 45 00 · partner@veloxfinans.com</p>
            </div>
          </div>

          {/* Hizmetler */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-widest text-[10px] font-mono">Hizmet Kapsamı</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">E-Fatura & E-Defter</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Kurumlar Vergisi Denetimi</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">4691 & 5746 Ar-Ge Teşviki</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Sanal CFO & Nakit Runway</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">İhracat KDV İadesi</a></li>
            </ul>
          </div>

          {/* Konsollar */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-widest text-[10px] font-mono">Konsol & Paneller</h4>
            <ul className="space-y-2 text-slate-400 text-xs">
              <li>
                <button onClick={() => navigateToMode('portal')} className="hover:text-white text-left transition-colors">
                  🏢 Müşteri Konsolu (TechVision A.Ş.)
                </button>
              </li>
              <li>
                <button onClick={() => navigateToMode('admin')} className="hover:text-white text-left transition-colors">
                  ⚡ SMMM Yönetim Masası
                </button>
              </li>
              <li>
                <button onClick={() => setIsConsultationOpen(true)} className="hover:text-white text-left transition-colors">
                  📅 Ön Görüşme Randevusu
                </button>
              </li>
              <li><a href="#calculator" className="hover:text-white transition-colors">📊 Vergi Tasarruf Simülatörü</a></li>
            </ul>
          </div>

          {/* Akreditasyon */}
          <div className="space-y-3">
            <h4 className="font-bold text-white uppercase tracking-widest text-[10px] font-mono">Akreditasyon</h4>
            <div className="space-y-2 text-[11px] font-mono text-slate-400">
              <p>✓ TÜRMOB Ruhsat No: 349102</p>
              <p>✓ KGK Bağımsız Denetim BDK/2018-41</p>
              <p>✓ ISO 27001 Bilgi Güvenliği</p>
              <p>✓ 256-Bit SSL EV Şifreleme</p>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>© 2026 VELOX Mali Müşavirlik A.Ş. Tüm hakları saklıdır.</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-white">KVKK Aydınlatma</a>
            <a href="#" className="hover:text-white">Gizlilik Taahhüdü</a>
            <a href="#" className="hover:text-white">GİB Standartları</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
