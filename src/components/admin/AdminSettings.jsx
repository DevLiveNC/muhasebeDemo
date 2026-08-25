import React from 'react';
import { useApp } from '../../context/AppContext';
import { ShieldCheck, Smartphone, Server } from 'lucide-react';

export default function AdminSettings() {
  const { firmInfo, addToast } = useApp();

  const handleSaveSettings = () => {
    addToast('Sistem Ayarları Güncellendi', 'GİB API, SSL sertifikaları ve veri entegrasyon parametreleri kaydedildi.', 'success');
  };

  const integrations = [
    {
      title: 'Gelir İdaresi Başkanlığı (GİB) Entegratör API',
      desc: 'E-Fatura, E-Arşiv ve E-Defter berat gönderim hattı',
      status: 'Bağlı (Aktif)',
      ok: true
    },
    {
      title: 'SGK İşe Giriş / Çıkış & Teşvik Motoru',
      desc: 'Otomatik teşvik tarama ve bildirim servisi',
      status: 'Bağlı (Aktif)',
      ok: true
    },
    {
      title: 'Netgsm / İletiMerkezi SMS Ağ Geçidi',
      desc: 'Mükelleflere eksik evrak ve vergi bildirim SMS\'leri',
      status: '14.250 SMS Kredisi',
      ok: false
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div>
        <div className="flex flex-wrap items-center gap-2">
          <span className="badge badge-pine">Sistem Mimarisi & Güvenlik</span>
          <span className="text-ink-400 font-mono text-xs">AES-256 E2E Encryption</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-ink-950 tracking-tight mt-2">
          Sistem & Entegrasyon Parametreleri
        </h1>
        <p className="text-xs text-ink-400 mt-1">
          GİB, SGK, E-Devlet API bağlantıları, SMS ağ geçitleri ve kurumsal SMMM yetkilendirmeleri
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Integrations */}
        <div className="lg:col-span-7 card p-6 space-y-4 self-start">
          <h3 className="font-bold text-ink-950 text-sm border-b border-line pb-3">
            Resmi Kurum API Entegrasyonları
          </h3>

          <div className="space-y-3">
            {integrations.map((int, i) => (
              <div key={i} className="p-4 rounded-xl bg-paper-50 border border-line flex items-center justify-between gap-3">
                <div className="min-w-0">
                  <span className="font-bold text-[13px] text-ink-950 block">{int.title}</span>
                  <p className="text-xs text-ink-400 mt-1 font-mono">{int.desc}</p>
                </div>
                <span className={int.ok ? 'badge badge-success shrink-0' : 'badge badge-neutral shrink-0 font-mono'}>
                  {int.ok && <span className="w-1.5 h-1.5 rounded-full bg-success"></span>}
                  {int.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Security */}
        <div className="lg:col-span-5 card p-6 space-y-4 self-start">
          <h3 className="font-bold text-ink-950 text-sm border-b border-line pb-3">SMMM Ruhsat & Güvenlik</h3>

          <div className="space-y-0 text-[13px] divide-y divide-line">
            <div className="flex justify-between items-start gap-4 py-2.5">
              <span className="text-ink-500 shrink-0">Kurumsal Ünvan:</span>
              <span className="font-bold text-ink-950 text-right">{firmInfo.legalName}</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2.5">
              <span className="text-ink-500">TÜRMOB Ruhsat No:</span>
              <span className="font-mono font-bold text-ink-950">349102</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2.5">
              <span className="text-ink-500">2FA Çift Aşamalı Doğrulama:</span>
              <span className="text-success-deep font-bold flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5" />
                Aktif (Zorunlu)
              </span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2.5">
              <span className="text-ink-500">Veri Şifreleme Standardı:</span>
              <span className="font-mono font-semibold text-ink-950">AES-256 / SSL EV</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2.5">
              <span className="text-ink-500 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-ink-400" />
                Veri Merkezi:
              </span>
              <span className="font-mono font-semibold text-ink-950">TR-West (İstanbul)</span>
            </div>
            <div className="flex justify-between items-center gap-4 py-2.5">
              <span className="text-ink-500 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-ink-400" />
                Mobil Uygulama:
              </span>
              <span className="font-mono font-semibold text-ink-950">v4.2.1 (Play Store)</span>
            </div>
          </div>

          <button
            onClick={handleSaveSettings}
            className="btn btn-primary btn-md w-full"
          >
            Ayarları Güncelle
          </button>
        </div>

      </div>

    </div>
  );
}
