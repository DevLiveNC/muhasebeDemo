import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Sparkles,
  Globe,
  Building2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  HelpCircle,
  Zap,
  LayoutDashboard
} from 'lucide-react';

export default function DemoGuideModal() {
  const { isDemoGuideOpen, setIsDemoGuideOpen, navigateToMode } = useApp();

  if (!isDemoGuideOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-3xl bg-[#0b0d13] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[92vh] transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-black/60 text-white flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 text-white rounded-lg border border-white/20">
              <Sparkles className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Mükellef Sunumu & Platform Mimarisi</h3>
              <p className="text-xs text-slate-400 font-mono">Yüksek etkili kurumsal sunum için 3 modüllü akış</p>
            </div>
          </div>

          <button
            onClick={() => setIsDemoGuideOpen(false)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 overflow-y-auto bg-[#0e1119]">
          <div className="p-4 bg-black/40 rounded-xl border border-white/[0.08] text-xs text-slate-300 font-mono leading-relaxed">
            <strong className="text-white">Sunum Konsepti:</strong> Bu platform, geleneksel mali müşavirlik ofisini Linear/Stripe kalitesinde <strong>"Yeni Nesil Dijital Kurumsal Finans & Mali Yönetim Merkezi"</strong> seviyesine taşır. Tüm modüller, gerçekçi Türk vergi mevzuatı (Tekdüzen, GİB, 5746 Ar-Ge) verileriyle canlı çalışır.
          </div>

          {/* 3 Pillar Showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 font-mono">
            {/* Step 1 */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
                  <Globe className="w-3.5 h-3.5 text-white" />
                  <span className="text-white font-bold">1. Kurumsal Vitrin</span>
                </div>
                <h4 className="font-bold text-white text-xs font-sans">Public Web Sitesi</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  "Finansal mimari & denetim" mesajı, hizmetler, interaktif vergi hesaplayıcı ve ön görüşme randevu akışı.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsDemoGuideOpen(false);
                  navigateToMode('public');
                }}
                className="w-full py-2 bg-white/[0.06] hover:bg-white/10 text-white rounded text-xs border border-white/10 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>Web Sitesini İncele</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

            {/* Step 2 */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
                  <Building2 className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400 font-bold">2. Mükellef Portalı</span>
                </div>
                <h4 className="font-bold text-white text-xs font-sans">TechVision A.Ş. Portalı</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  Şirket yöneticisinin gördüğü ekran: Bekleyen evrak OCR dropzone, canlı KDV/SGK sayacı, nakit pisti ve SMMM destek hattı.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsDemoGuideOpen(false);
                  navigateToMode('portal');
                }}
                className="w-full py-2 bg-white text-black font-bold uppercase tracking-wider rounded text-xs flex items-center justify-center space-x-1.5 shadow-luxury transition-colors"
              >
                <span>Mükellef Portalına Git</span>
                <ArrowRight className="w-3 h-3 text-black" />
              </button>
            </div>

            {/* Step 3 */}
            <div className="p-4 rounded-xl border border-white/[0.08] bg-black/40 flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-center space-x-1.5 text-slate-400 text-xs mb-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                  <span className="text-white font-bold">3. SMMM Kokpiti</span>
                </div>
                <h4 className="font-bold text-white text-xs font-sans">Yönetici Paneli</h4>
                <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">
                  SMMM ve ekibinin çalışma kokpiti: 360° Mükellef Kartı, OCR Onay Masası, CRM Hattı, Vergi Takvimi ve e-SMM.
                </p>
              </div>
              <button
                onClick={() => {
                  setIsDemoGuideOpen(false);
                  navigateToMode('admin');
                }}
                className="w-full py-2 bg-white/[0.06] hover:bg-white/10 text-white rounded text-xs border border-white/10 flex items-center justify-center space-x-1.5 transition-colors"
              >
                <span>SMMM Paneline Git</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Interactive Highlights Tips */}
          <div className="space-y-2.5 font-mono">
            <h4 className="font-bold text-white text-xs uppercase tracking-wider">Sunumda Öne Çıkarabileceğiniz Özellikler:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">Aura AI Asistan:</strong> Sağ üstten veya '⌘K' ile AI asistanını açıp geciken işlemleri listeyin.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">OCR Doğrulama:</strong> Evrak yönetiminde herhangi bir faturaya tıklayıp %99.2 OCR okumasını ve tek tıkla yevmiyeye almayı gösterin.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">360° Mükellef Kartı:</strong> TechVision A.Ş.'ye tıklayarak Tekdüzen yevmiye kayıtları, SGK bordroları ve denetçi notlarını sergileyin.</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                <span><strong className="text-white">GİB Vergi Takvimi:</strong> Tüm beyanname son günlerini ve kalan gün sayaçlarını canlı gösterin.</span>
              </div>
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              onClick={() => setIsDemoGuideOpen(false)}
              className="px-6 py-2.5 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider shadow-luxury"
            >
              Anladım, Sunuma Başla
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
