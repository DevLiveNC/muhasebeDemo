import React from 'react';
import { useApp } from '../../context/AppContext';
import { Check, X, ShieldCheck, ArrowRight } from 'lucide-react';

export default function WhyUsSection() {
  const { setIsConsultationOpen } = useApp();

  const comparisonRows = [
    {
      feature: 'Evrak ve Fatura Teslimi',
      traditional: 'Ay sonunda poşet/kurye ile fiziksel evrak trafiği veya kaybolan WhatsApp fotoğrafları',
      velox: 'Mobil ve web portalından tek tıkla yükleme, 2.1 sn yapay zeka OCR otomatik tekdüzen kodlaması'
    },
    {
      feature: 'Vergi ve Beyanname Şeffaflığı',
      traditional: 'Son gün çıkan sürpriz vergi ödemeleri ve gerekçesi anlaşılmayan tahakkuk fişleri',
      velox: 'Canlı vergi takvimi, 15 gün önceden tahmini vergi projeksiyonu ve otomatik bildirimler'
    },
    {
      feature: 'Mali Müşavire Erişim & SLA',
      traditional: 'Ulaşılamayan telefonlar, cevapsız e-postalar ve mesai saatleri dışı kapalılık',
      velox: 'Atanmış kıdemli SMMM + <12 dakika yanıt süreli doğrudan destek masası ve 7/24 Aura AI terminali'
    },
    {
      feature: 'Finansal Karar & Sanal CFO',
      traditional: 'Sadece geriye dönük yasal defter kaydı; geleceğe dair hiçbir finansal içgörü yok',
      velox: 'Sanal CFO paneli, 90 günlük nakit akış (cash runway) simülasyonu ve birim kârlılık analitiği'
    },
    {
      feature: 'Mevzuat & Teşvik Optimizasyonu',
      traditional: 'Standart işlemler; gözden kaçan Ar-Ge, Teknopark ve SGK istihdam muafiyetleri',
      velox: 'Otomatik teşvik tarama algoritması ile her ay 4691, 5746 ve ihracat KDV iadelerinin eksiksiz işletilmesi'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#08090d] border-b border-white/[0.08] scroll-mt-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
            Değer Önerimiz ve Kurumsal Farkımız
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Neden 48+ teknoloji ve ihracat şirketi <br />
            <span className="font-editorial italic font-normal text-slate-200">VELOX'a emanet etti?</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Eski usul muhasebe anlayışıyla modern büyüme yönetilemez. Şirketinizin ihtiyacı olan hız, şeffaflık ve finansal zekayı sunuyoruz.
          </p>
        </div>

        {/* Matrix */}
        <div className="rounded-2xl border border-white/[0.08] overflow-hidden bg-black/40 shadow-cinema">
          
          <div className="grid grid-cols-1 md:grid-cols-12 bg-white/[0.03] text-xs font-mono py-3.5 px-6 border-b border-white/[0.08]">
            <div className="md:col-span-4 uppercase tracking-widest text-slate-400">Değerlendirme Kriteri</div>
            <div className="hidden md:block md:col-span-4 uppercase tracking-widest text-slate-400">Geleneksel Muhasebe</div>
            <div className="hidden md:block md:col-span-4 uppercase tracking-widest text-emerald-400 font-bold">VELOX Finansal Zeka</div>
          </div>

          <div className="divide-y divide-white/[0.06] text-xs sm:text-sm">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-white/[0.02] transition-colors">
                
                <div className="md:col-span-4">
                  <span className="font-bold text-white block text-sm">{row.feature}</span>
                </div>

                <div className="md:col-span-4 flex items-start space-x-2.5 text-slate-400 bg-rose-950/10 md:bg-transparent p-3 md:p-0 rounded-xl border md:border-0 border-rose-500/20">
                  <div className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed text-xs">{row.traditional}</span>
                </div>

                <div className="md:col-span-4 flex items-start space-x-2.5 text-slate-200 bg-emerald-950/20 md:bg-emerald-950/10 p-3 md:p-2.5 rounded-xl border border-emerald-500/20">
                  <div className="w-5 h-5 rounded-full bg-emerald-500 text-black flex items-center justify-center shrink-0 mt-0.5 font-bold">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span className="leading-relaxed text-xs text-emerald-200 font-medium">{row.velox}</span>
                </div>

              </div>
            ))}
          </div>

        </div>

        {/* Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-sm text-white">Mevcut muhasebenizden VELOX'a geçiş 24 saatte tamamlanır.</h4>
            <p className="text-xs text-slate-400 mt-1">Eski mali müşaviriniz ile devir teslim tutanaklarını ve GİB yetkilendirmesini ekibimiz yönetir.</p>
          </div>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="px-6 py-2.5 bg-white hover:bg-slate-200 text-black rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 transition-all"
          >
            Geçiş Sürecini Başlat
          </button>
        </div>

      </div>
    </section>
  );
}
