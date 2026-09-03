import React from 'react';
import { useApp } from '../../context/AppContext';
import { Check, X, ArrowRight } from 'lucide-react';

export default function WhyUsSection() {
  const { setIsConsultationOpen, firmInfo } = useApp();

  const comparisonRows = [
    {
      feature: 'Fatura ve evrak',
      traditional: 'Ay sonunda poşet, kurye veya kaybolan WhatsApp fotoğrafları',
      ours: 'Telefondan veya bilgisayardan yükleyin. Sistem 2 saniyede okur, muhasebeye işler.'
    },
    {
      feature: 'Vergi ve beyan',
      traditional: 'Son gün çıkan sürpriz vergi ve anlaşılmayan ödeme fişleri',
      ours: 'Takvimde son günleri görün. 15 gün önce tahmini tutarı öğrenin.'
    },
    {
      feature: 'Mali müşavire ulaşmak',
      traditional: 'Cevapsız telefon, geciken e-posta, mesai dışı sessizlik',
      ours: 'Size atanan mali müşavir + 12 dakikada yanıt. Gece de asistan açık.'
    },
    {
      feature: 'Karar için sayı',
      traditional: 'Sadece geçmişe dönük defter. Yarın için içgörü yok.',
      ours: 'Kasadaki paranın kaç ay yeteceği, kâr marjı ve nakit planı.'
    },
    {
      feature: 'Vergi indirimleri',
      traditional: 'Standart işlem. Teknopark, Ar-Ge ve ihracat KDV kaçabilir.',
      ours: 'Her ay uygun indirimleri tarar, dosyalar, nakit olarak gösteririz.'
    }
  ];

  return (
    <section id="why-us" className="py-20 md:py-28 bg-white border-y border-line scroll-mt-24">
      <div className="container-x">

        {/* Header */}
        <div className="section-head text-center mx-auto">
          <p className="mlabel text-pine-700">Neden biz?</p>
          <h2>
            48 şirket mali işini <em>neden {firmInfo.name}'ye verdi?</em>
          </h2>
          <p className="mx-auto">
            Eski usul muhasebe büyümeyi yavaşlatır. Size hız, net rakam ve zamanında beyan gerekir.
          </p>
        </div>

        {/* Comparison Matrix */}
        <div className="mt-14 rounded-2xl border border-line overflow-hidden shadow-card bg-white">

          <div className="grid grid-cols-1 md:grid-cols-12 bg-paper-100 text-[11px] py-3.5 px-6 border-b border-line">
            <div className="md:col-span-4 text-ink-400 font-semibold">Konu</div>
            <div className="hidden md:block md:col-span-4 text-ink-400 font-semibold">Klasik muhasebe</div>
            <div className="hidden md:block md:col-span-4 text-pine-700 font-bold">{firmInfo.name}</div>
          </div>

          <div className="divide-y divide-line">
            {comparisonRows.map((row, idx) => (
              <div key={idx} className="grid grid-cols-1 md:grid-cols-12 p-5 sm:p-6 items-center gap-4 hover:bg-paper-50 transition-colors">
                <div className="md:col-span-4">
                  <span className="font-bold text-[15px] text-ink-900">{row.feature}</span>
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
                  <span className="leading-relaxed text-xs font-medium text-pine-900">{row.ours}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Callout */}
        <div className="mt-10 p-6 rounded-2xl bg-pine-50 border border-pine-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h4 className="font-bold text-[15px] text-ink-900">Mevcut muhasebenizden geçiş 24 saatte biter.</h4>
            <p className="text-sm text-ink-500 mt-1">
              Eski mali müşavirinizle teslimatı ve Gelir İdaresi yetkisini biz yönetiriz.
            </p>
          </div>
          <button
            onClick={() => setIsConsultationOpen(true)}
            className="btn btn-primary btn-md shrink-0"
          >
            <span>Geçişe başlayın</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
