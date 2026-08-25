import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Calendar,
  CheckCircle2,
  ArrowRight,
  ChevronLeft
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ConsultationModal() {
  const { isConsultationOpen, setIsConsultationOpen, addToast } = useApp();

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    companyType: 'Anonim Şirket (A.Ş.)',
    fullName: '',
    email: '',
    phone: '',
    employeeCount: '5-20 Çalışan',
    services: ['E-Fatura / E-Defter Berat', 'Tekdüzen Genel Muhasebe & Vergi'],
    preferredDate: '2026-08-27',
    preferredTime: '14:00',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isConsultationOpen) return null;

  const handleClose = () => {
    setIsConsultationOpen(false);
    setTimeout(() => {
      setStep(1);
      setIsSubmitted(false);
    }, 300);
  };

  const toggleService = (srv) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);

    try {
    } catch (err) {
      // fallback
    }

    addToast('Ön Görüşme Talebiniz Alındı', 'Kıdemli SMMM ortağımız randevu saatinde sizinle online bağlantı kuracaktır.', 'success');
  };

  const availableServices = [
    'Tekdüzen Genel Muhasebe & Vergi',
    'E-Fatura / E-Defter Berat',
    'Bordrolama & 5510 Teşvik',
    'Sanal CFO & IFRS Raporlama',
    'Şirket Kuruluşu & Sermaye',
    'Ar-Ge 5746 / 4691 Teşvik'
  ];

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col max-h-[92vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-pine-50 border border-pine-100 text-pine-700 flex items-center justify-center">
              <Calendar className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-ink-900">Stratejik Mali Ön Görüşme</h3>
              <p className="text-[11px] text-ink-400">Kıdemli SMMM & Vergi Ortağı ile 30 Dk Birebir Analiz</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors"
            title="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {!isSubmitted ? (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-line">
                <div className={cn('flex items-center gap-1.5', step >= 1 ? 'text-ink-900 font-bold' : 'text-ink-300')}>
                  <span className={cn(
                    'w-5 h-5 rounded flex items-center justify-center text-[10px]',
                    step >= 1 ? 'bg-pine-700 text-white font-bold' : 'bg-paper-200 text-ink-400'
                  )}>
                    1
                  </span>
                  <span className="text-xs">Şirket & Yetkili</span>
                </div>
                <div className="w-8 h-px bg-line-strong"></div>
                <div className={cn('flex items-center gap-1.5', step >= 2 ? 'text-ink-900 font-bold' : 'text-ink-300')}>
                  <span className={cn(
                    'w-5 h-5 rounded flex items-center justify-center text-[10px]',
                    step >= 2 ? 'bg-pine-700 text-white font-bold' : 'bg-paper-200 text-ink-400'
                  )}>
                    2
                  </span>
                  <span className="text-xs">Hizmetler & Randevu</span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-fade-in">
                  <div>
                    <label className="label">Şirket Ünvanı *</label>
                    <input
                      type="text"
                      placeholder="Örn: TechNova Yazılım A.Ş."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="input"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label">Şirket Türü</label>
                      <select
                        value={formData.companyType}
                        onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                        className="select"
                      >
                        <option>Anonim Şirket (A.Ş.)</option>
                        <option>Limited Şirket (Ltd. Şti.)</option>
                        <option>Şahıs Şirketi</option>
                      </select>
                    </div>
                    <div>
                      <label className="label">Çalışan Sayısı</label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                        className="select"
                      >
                        <option>1-5 Çalışan</option>
                        <option>5-20 Çalışan</option>
                        <option>20-50 Çalışan</option>
                        <option>50+ Çalışan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label">Yetkili Adı Soyadı *</label>
                    <input
                      type="text"
                      placeholder="Örn: Deniz Kaya"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="input"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label">E-Posta *</label>
                      <input
                        type="email"
                        placeholder="deniz@sirket.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="input"
                        required
                      />
                    </div>
                    <div>
                      <label className="label">Telefon *</label>
                      <input
                        type="tel"
                        placeholder="0532 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="input"
                        required
                      />
                    </div>
                  </div>

                  <button
                    onClick={() => setStep(2)}
                    className="btn btn-primary btn-md w-full"
                  >
                    <span>Devam Et</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-4 animate-fade-in">
                  <div>
                    <label className="label">İlgilendiğiniz Hizmetler</label>
                    <div className="space-y-2">
                      {availableServices.map((srv) => {
                        const selected = formData.services.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={cn(
                              'w-full flex items-center gap-2.5 p-3 rounded-lg border text-left text-[13px] transition-colors',
                              selected
                                ? 'bg-pine-50 border-pine-300 text-pine-900 font-semibold'
                                : 'bg-white border-line-strong text-ink-600 hover:border-pine-600'
                            )}
                          >
                            <span className={cn(
                              'w-4 h-4 rounded border flex items-center justify-center shrink-0',
                              selected ? 'bg-pine-700 border-pine-700 text-white' : 'border-line-strong'
                            )}>
                              {selected && <CheckCircle2 className="w-3 h-3" />}
                            </span>
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="label">Tercih Edilen Tarih</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="input font-mono"
                      />
                    </div>
                    <div>
                      <label className="label">Tercih Edilen Saat</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="select"
                      >
                        <option value="10:00">10:00</option>
                        <option value="11:30">11:30</option>
                        <option value="14:00">14:00</option>
                        <option value="15:30">15:30</option>
                        <option value="17:00">17:00</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label">Notunuz (İsteğe Bağlı)</label>
                    <textarea
                      rows={2}
                      placeholder="Vergi durumunuza dair kısaca bilgi verebilirsiniz..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="input resize-none"
                    />
                  </div>

                  <div className="flex items-center gap-2 pt-1">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="btn btn-ghost btn-md"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Geri</span>
                    </button>
                    <button type="submit" className="btn btn-primary btn-md flex-1">
                      <Calendar className="w-4 h-4" />
                      <span>Randevuyu Onayla</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          ) : (
            <div className="py-8 text-center space-y-4 animate-fade-in">
              <div className="w-14 h-14 bg-success-soft text-success-deep rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h4 className="font-serif text-2xl text-ink-900">Talebiniz Alındı!</h4>
              <p className="text-sm text-ink-500 max-w-sm mx-auto leading-relaxed">
                <strong className="text-ink-900">{formData.companyName || 'Şirketiniz'}</strong> için{' '}
                <strong className="text-ink-900">{formData.preferredDate} {formData.preferredTime}</strong> randevusu
                kıdemli SMMM ortağımıza iletildi. Doğrulama e-postası{' '}
                <strong className="text-ink-900">{formData.email || 'e-posta adresinize'}</strong> gönderildi.
              </p>
              <div className="p-4 rounded-xl bg-paper-50 border border-line text-left max-w-sm mx-auto">
                <p className="mlabel mb-2">Seçilen Hizmetler</p>
                <div className="flex flex-wrap gap-1.5">
                  {formData.services.map((srv) => (
                    <span key={srv} className="badge badge-pine">{srv}</span>
                  ))}
                  {formData.services.length === 0 && (
                    <span className="text-xs text-ink-400">Genel danışmanlık</span>
                  )}
                </div>
              </div>
              <button
                onClick={handleClose}
                className="btn btn-primary btn-md w-full sm:w-auto"
              >
                <span>Anladım, Kapat</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
