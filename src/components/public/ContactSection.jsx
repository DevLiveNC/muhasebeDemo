import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Phone,
  Mail,
  Clock,
  MapPin,
  Send,
  CheckCircle2,
  ArrowUpRight
} from 'lucide-react';

export default function ContactSection() {
  const { firmInfo, addToast } = useApp();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    addToast(
      'Ön Görüşme Talebi Alındı',
      'SMMM ortağımız en geç 2 saat içinde sizinle iletişime geçecektir.',
      'success'
    );
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-pine-900 scroll-mt-24">
      <div className="container-x">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left: Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <p className="font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-gold-300">
                Bir Sonraki Adım
              </p>
              <h2 className="font-serif text-white text-3xl sm:text-4xl md:text-5xl leading-[1.08] tracking-tight mt-4">
                İşinizi büyütürken, <em className="text-gold-300">finansınızı bize bırakın.</em>
              </h2>
              <p className="text-sm text-pine-200 mt-5 leading-relaxed max-w-md">
                İlk görüşme ücretsizdir. Vergi durumunuzu, teşvik haklarınızı ve büyüme planınızı
                30 dakikada netleştiriyoruz.
              </p>
            </div>

            {/* Office card */}
            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-4">
              <div>
                <h4 className="font-bold text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-gold-300" />
                  Levent Kanyon Ofis
                </h4>
                <p className="text-xs text-pine-100 mt-1.5 leading-relaxed">{firmInfo.hq}</p>
              </div>

              <div className="pt-3 border-t border-white/10 space-y-2 text-xs text-pine-100 font-mono">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-gold-300" />
                  <span>{firmInfo.phone}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-gold-300" />
                  <span>{firmInfo.email}</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Clock className="w-3.5 h-3.5 text-gold-300" />
                  <span>Hafta İçi: 09:00 – 18:30</span>
                </div>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-1.5 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-[0.16em] text-gold-300 block">
                Teknopark İrtibat Ofisi
              </span>
              <h5 className="font-bold text-white text-sm">İTÜ ARI Teknokent 3</h5>
              <p className="text-pine-200 leading-relaxed">{firmInfo.technoparkOffice}</p>
            </div>
          </div>

          {/* Right: Form Card */}
          <div className="lg:col-span-7 card p-6 sm:p-8 shadow-pop">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl text-ink-950">Ön Görüşme Talebi</h3>
                  <p className="text-xs text-ink-400">
                    Formu doldurun; kıdemli SMMM ortağımız sizi arasın.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="label">Adınız Soyadınız *</label>
                    <input
                      type="text"
                      placeholder="Örn: Caner Yılmaz"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="label">Şirket Adı & Faaliyet *</label>
                    <input
                      type="text"
                      placeholder="Örn: Quantum Teknoloji A.Ş."
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="input"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="label">E-Posta *</label>
                    <input
                      type="email"
                      placeholder="caner@sirketiniz.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input"
                    />
                  </div>
                  <div>
                    <label className="label">Telefon Numarası *</label>
                    <input
                      type="tel"
                      placeholder="0532 000 00 00"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="input"
                    />
                  </div>
                </div>

                <div>
                  <label className="label">Danışmanlık Talebiniz / Konu *</label>
                  <textarea
                    rows={3}
                    placeholder="Mevcut vergi durumu, Teknopark/Ar-Ge teşvikleri veya e-ihracat KDV iade beklentileriniz..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input resize-none"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-md w-full">
                  <Send className="w-4 h-4" />
                  <span>Ön Görüşme Talebini İlet</span>
                </button>
              </form>
            ) : (
              <div className="py-12 text-center space-y-4 animate-fade-in">
                <div className="w-14 h-14 bg-success-soft text-success-deep rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h4 className="font-bold text-ink-950 text-lg">Talebiniz SMMM Masasına İletildi</h4>
                <p className="text-sm text-ink-500 max-w-sm mx-auto leading-relaxed">
                  SMMM Kemal Yıldız ve vergi denetim ekibimiz mesajınızı incelemeye aldı.
                  En geç 2 saat içinde aranacaksınız.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', company: '', email: '', phone: '', message: '' });
                  }}
                  className="btn btn-outline btn-sm"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>Yeni Talep Oluştur</span>
                </button>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
