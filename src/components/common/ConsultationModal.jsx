import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Calendar,
  Clock,
  Building,
  User,
  Mail,
  Phone,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronLeft
} from 'lucide-react';
import confetti from 'canvas-confetti';
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
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
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
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-xl bg-[#0b0d13] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[92vh] transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-5 bg-black/60 text-white flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 text-white flex items-center justify-center border border-white/20">
              <Calendar className="w-4 h-4 text-slate-300" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Stratejik Mali Ön Görüşme</h3>
              <p className="text-[11px] text-slate-400 font-mono">Kıdemli SMMM & Vergi Ortağı ile 30 Dk Birebir Analiz</p>
            </div>
          </div>

          <button
            onClick={handleClose}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 overflow-y-auto flex-1 bg-[#0e1119]">
          {!isSubmitted ? (
            <div>
              {/* Progress Steps */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.06] text-xs font-mono">
                <div className={cn("flex items-center space-x-1.5", step >= 1 ? "text-white font-bold" : "text-slate-500")}>
                  <span className={cn("w-4 h-4 rounded flex items-center justify-center text-[10px]", step >= 1 ? "bg-white text-black font-bold" : "bg-white/10 text-slate-400")}>1</span>
                  <span>Şirket & Yetkili</span>
                </div>
                <div className="w-8 h-px bg-white/10"></div>
                <div className={cn("flex items-center space-x-1.5", step >= 2 ? "text-white font-bold" : "text-slate-500")}>
                  <span className={cn("w-4 h-4 rounded flex items-center justify-center text-[10px]", step >= 2 ? "bg-white text-black font-bold" : "bg-white/10 text-slate-400")}>2</span>
                  <span>Hizmetler & Randevu</span>
                </div>
              </div>

              {step === 1 && (
                <div className="space-y-4 animate-fade-in text-xs font-mono">
                  <div>
                    <label className="block text-slate-300 mb-1">Şirket Ünvanı *</label>
                    <input
                      type="text"
                      placeholder="Örn: TechNova Yazılım A.Ş."
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white font-sans text-xs"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 mb-1">Şirket Türü</label>
                      <select
                        value={formData.companyType}
                        onChange={(e) => setFormData({ ...formData, companyType: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-slate-200 focus:outline-none text-xs"
                      >
                        <option>Anonim Şirket (A.Ş.)</option>
                        <option>Limited Şirket (Ltd. Şti.)</option>
                        <option>Şahıs Şirketi</option>
                        <option>Yeni Kurulacak (Startup)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 mb-1">Çalışan Sayısı</label>
                      <select
                        value={formData.employeeCount}
                        onChange={(e) => setFormData({ ...formData, employeeCount: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-slate-200 focus:outline-none text-xs"
                      >
                        <option>1-4 Çalışan</option>
                        <option>5-20 Çalışan</option>
                        <option>21-50 Çalışan</option>
                        <option>50+ Çalışan</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Yetkili Adı Soyadı *</label>
                    <input
                      type="text"
                      placeholder="Örn: Ahmet Yılmaz"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white font-sans text-xs"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-slate-300 mb-1">E-Posta *</label>
                      <input
                        type="email"
                        placeholder="ahmet@sirketiniz.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Telefon *</label>
                      <input
                        type="tel"
                        placeholder="0532 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-white text-xs"
                      />
                    </div>
                  </div>

                  <div className="pt-4 flex justify-end">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="px-6 py-2.5 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-luxury transition-all"
                    >
                      <span>Devam Et</span>
                      <ArrowRight className="w-3.5 h-3.5 text-black" />
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <div className="space-y-4 animate-fade-in text-xs font-mono">
                  <div>
                    <label className="block text-slate-300 mb-2">İlgilendiğiniz Hizmet Alanları:</label>
                    <div className="grid grid-cols-2 gap-2">
                      {availableServices.map((srv, idx) => {
                        const isSelected = formData.services.includes(srv);
                        return (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={cn(
                              "p-2.5 rounded-lg border text-left text-xs transition-all flex items-center justify-between",
                              isSelected
                                ? "bg-white/10 border-white/30 text-white font-bold"
                                : "bg-black/40 border-white/[0.06] text-slate-400 hover:text-white"
                            )}
                          >
                            <span className="truncate">{srv}</span>
                            {isSelected && <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 ml-1" />}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div>
                      <label className="block text-slate-300 mb-1">Tercih Edilen Tarih</label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white focus:outline-none text-xs"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-300 mb-1">Saat Dilimi</label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg bg-black/60 border border-white/10 text-slate-200 focus:outline-none text-xs"
                      >
                        <option value="10:00">10:00 - 10:30</option>
                        <option value="11:30">11:30 - 12:00</option>
                        <option value="14:00">14:00 - 14:30</option>
                        <option value="16:00">16:00 - 16:30</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-1">Şirket Notları / Özel Talepler</label>
                    <textarea
                      rows={2}
                      placeholder="Şirketinizin mevcut mali durumu veya özel teşvik beklentileri..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg bg-black/40 border border-white/10 text-white placeholder-slate-500 focus:outline-none text-xs"
                    />
                  </div>

                  <div className="pt-4 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-3 py-1.5 text-slate-400 hover:text-white flex items-center space-x-1 text-xs"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                      <span>Geri</span>
                    </button>
                    <button
                      type="button"
                      onClick={handleSubmit}
                      className="px-5 py-2.5 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-luxury transition-all"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-black" />
                      <span>Randevuyu Onayla</span>
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="py-8 text-center space-y-4 animate-fade-in font-mono">
              <div className="w-14 h-14 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto shadow-cinema">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <div>
                <h3 className="text-base font-bold text-white font-sans">Mali Ön Görüşme Randevunuz Alındı</h3>
                <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto leading-relaxed">
                  Talebiniz SMMM yönetimine iletildi. Google Meet takvim daveti <strong>{formData.email || 'e-posta adresinize'}</strong> gönderildi.
                </p>
              </div>

              <div className="bg-black/50 p-4 rounded-xl border border-white/[0.08] max-w-sm mx-auto text-left text-xs space-y-1.5">
                <div className="flex justify-between text-slate-400">
                  <span>Tarih:</span>
                  <span className="font-bold text-white">{formData.preferredDate} - {formData.preferredTime}</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Danışman:</span>
                  <span className="font-bold text-white">SMMM Kemal Yıldız (Ortak)</span>
                </div>
                <div className="flex justify-between text-slate-400">
                  <span>Format:</span>
                  <span className="font-bold text-emerald-400">Google Meet / Birebir</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleClose}
                  className="px-6 py-2.5 bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wider rounded-lg text-xs transition-colors shadow-luxury"
                >
                  Tamamla ve Kapat
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
