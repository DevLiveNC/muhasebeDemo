import React from 'react';
import { useApp } from '../../context/AppContext';
import { Check, X, ArrowRight } from 'lucide-react';

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
      velox: 'Atanmış kıdemli SMMM + 12 dakika altında yanıt süreli doğrudan destek masası ve 7/24 AI terminali'
    },
    {
      feature: 'Finansal Karar & Sanal CFO',
      traditional: 'Sadece geriye dönük yasal defter kaydı; geleceğe dair hiçbir finansal içgörü yok',
      velox: 'Sanal CFO paneli, 90 günlük nakit akışı (cash runway) simülasyonu ve birim kârlılık analitiği'
    },
    {
      feature: 'Mevzuat & Teşvik Optimizasyonu',
      traditional: 'Standart işlemler; gözden kaçan Ar-Ge, Teknopark ve SGK istihdam muafiyetleri',
      velox: 'Otomatik teşvik tarama algoritması ile her ay 4691, 5746 ve ihracat KDV iadelerinin eksiksiz işletilmesi'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-y border-line scroll-mt-24">
      <div className="container-x">

        {/* Header */}
        <div className="section-head text-center mx-auto">
          <p className="eyebrow">02 / Değer Önerimiz ve Kurumsal Farkımız</p>
          <h2>
            Neden 48+ teknoloji ve ihracat şirketi <em>VELOX'a emanet etti?</em>
          </h2>
          <p className="mx-auto">
            Eski usul muhasebe anlayışıyla modern büyüme yönetilemez. Şirketinizin ihtiyacı olan
            hız, şeffaflık ve finansal zekayı sunuyoruz.
          </p>
        </div>

        {/* Comparison Matrix */}
        <div className="mt-14 rounded-2xl border border-line overflow-hidden shadow-card bg-white">

          <div className="grid grid-cols-1 md:grid-cols-12 bg-paper-100 text-[11px] font-mono py-3.5 px-6 border-b border-line">
            <div className="md:col-span-4 uppercase tracking-[0.12em] text-ink-400 font-semibold">Değerlendirme Kriteri</div>
            <div className="hidden md:block md:col-span-4 uppercase tracking-[0.12em] text-ink-400 font-semibold">Geleneksel Muhasebe</div>
            <div className="hidden md:block md:col-span-4 uppercase tracking-[0.12em] text-pine-700 font-bold">VELOX Finansal Zeka</div>
          </div>

          <div className="divide-y divide-line">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-paper-50 transition-colors">
                <div className="md:col-span-4">
                  <span className="font-bold text-[15px] text-ink-950">{row.feature}</span>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-ink-400 p-3 rounded-xl bg-danger-soft/40 border border-danger/10 md:bg-transparent md:p-0 md:border-0">
                  <div className="w-5 h-5 rounded-full bg-danger-soft text-danger-deep flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3 h-3" />
                  </div>
                  <span className="leading-relaxed text-xs">{row.traditional}</span>
                </div>

                <div className="md:col-span-4 flex items-start gap-2.5 text-ink-700 p-3 md:p-2.5 rounded-xl bg-pine-50/70 border border-pine-100">
                  <div className="w-5 h-5 rounded-full bg-pine-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="leading-relaxed text-xs font-medium text-pine-900">{row.velox}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-pine-50 border border-pine-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[15px] text-ink-950">Mevcut muhasebenizden VELOX'a geçiş 24 saatte tamamlanır.</h4>
            <p className="text-sm text-ink-500 mt-1">
              Eski mali müşaviriniz ile devir teslim tutanaklarını ve GİB yetkilendirmesini ekibimiz yönetir.
            </p>
          </div>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="btn btn-primary btn-md shrink-0"
          >
            <span>Geçiş Sürecini Başlat</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
