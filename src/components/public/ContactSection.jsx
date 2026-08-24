import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactSection() {
  const { firmInfo, addToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({ particleCount: 60, spread: 50 });
    } catch (e) {}
    addToast('Ön Görüşme Talebiniz Alındı', 'Kıdemli SMMM danışmanımız en kısa sürede sizinle iletişime geçecektir.', 'success');
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#08090d] scroll-mt-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
            İletişim & Danışmanlık Masası
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Şirketinizin finansal dönüşümünü <br />
            <span className="font-editorial italic font-normal text-slate-200">birlikte başlatalım.</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Ofislerimizi ziyaret edebilir, doğrudan SMMM masamıza bağlanabilir veya online ön görüşme planlayabilirsiniz.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          
          {/* Left Column: Office Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="p-6 rounded-2xl obsidian-card space-y-4 border border-white/[0.08]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block">
                Merkez Ofis
              </span>
              <div>
                <h4 className="font-bold text-base text-white">Levent Kanyon Ofis</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  {firmInfo.hq}
                </p>
              </div>

              <div className="pt-3 border-t border-white/[0.06] space-y-2 text-xs text-slate-300 font-mono">
                <div className="flex items-center space-x-2.5">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{firmInfo.phone}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <span>{firmInfo.email}</span>
                </div>
                <div className="flex items-center space-x-2.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Hafta İçi: 09:00 - 18:30</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-1.5 text-xs">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-widest block">Teknopark İrtibat Ofisi</span>
              <h5 className="font-bold text-white">İTÜ ARI Teknokent 3</h5>
              <p className="text-slate-400">{firmInfo.technoparkOffice}</p>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl obsidian-card border border-white/[0.08] shadow-cinema">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-300 mb-1">Adınız Soyadınız *</label>
                    <input
                      type="text"
                      placeholder="Örn: Caner Yılmaz"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-300 mb-1">Şirket Adı & Faaliyet *</label>
                    <input
                      type="text"
                      placeholder="Örn: Quantum Teknoloji A.Ş."
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block font-medium text-slate-300 mb-1">E-Posta *</label>
                    <input
                      type="email"
                      placeholder="caner@sirketiniz.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-slate-300 mb-1">Telefon Numarası *</label>
                    <input
                      type="tel"
                      placeholder="0532 000 00 00"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-medium text-slate-300 mb-1">Danışmanlık Talebiniz / Konu *</label>
                  <textarea
                    rows={3}
                    placeholder="Mevcut vergi durumu, Teknopark/Ar-Ge teşvikleri veya e-ihracat KDV iade beklentileriniz..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3 bg-white hover:bg-slate-200 text-black rounded-lg font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all shadow-luxury"
                  >
                    <Send className="w-3.5 h-3.5 text-black" />
                    <span>Ön Görüşme Talebini İlet</span>
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-10 text-center space-y-3 animate-fade-in">
                <div className="w-12 h-12 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-bold text-white text-base">Talebiniz SMMM Masasına İletildi</h4>
                <p className="text-xs text-slate-400 max-w-sm mx-auto leading-relaxed">
                  SMMM Kemal Yıldız ve vergi denetim ekibimiz mesajınızı incelemeye aldı. En geç 2 saat içinde aranacaksınız.
                </p>
              </div>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
