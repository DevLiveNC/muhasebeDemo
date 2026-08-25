import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Settings, ShieldCheck, Key, Smartphone, Building, CheckCircle2, Lock, Zap, Server } from 'lucide-react';

export default function AdminSettings() {
  const { firmInfo, addToast } = useApp();

  const handleSaveSettings = (e) => {
    e.preventDefault();
    addToast('Sistem Ayarları Güncellendi', 'GİB API, SSL sertifikaları ve veri entegrasyon parametreleri kaydedildi.', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/[0.06]">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider border border-emerald-500/20">
            Sistem Mimarisi & Güvenlik
          </span>
          <span className="text-slate-500 font-mono text-xs">AES-256 E2E Encryption</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Sistem & Entegrasyon Parametreleri</h1>
        <p className="text-xs text-slate-400 font-mono">GİB, SGK, E-Devlet API bağlantıları, SMS ağ geçitleri ve kurumsal SMMM yetkilendirmeleri</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 7 Cols: API Integrations */}
        <div className="lg:col-span-7 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-5 shadow-cinema">
          <h3 className="font-bold text-white text-sm border-b border-white/[0.06] pb-2">Resmi Kurum API Entegrasyonları</h3>

          <div className="space-y-3">
            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Gelir İdaresi Başkanlığı (GİB) Entegratör API</span>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">E-Fatura, E-Arşiv ve E-Defter berat gönderim hattı</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs rounded border border-emerald-500/20">
                ● Bağlı (Aktif)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">SGK İşe Giriş / Çıkış & Teşvik Motoru</span>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">Otomatik teşvik tarama ve bildirim servisi</p>
              </div>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs rounded border border-emerald-500/20">
                ● Bağlı (Aktif)
              </span>
            </div>

            <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] flex items-center justify-between">
              <div>
                <span className="font-bold text-white block">Netgsm / İletiMerkezi SMS Ağ Geçidi</span>
                <p className="text-xs text-slate-400 mt-0.5 font-mono">Mükelleflere eksik evrak ve vergi bildirim SMS'leri</p>
              </div>
              <span className="px-3 py-1 bg-white/10 text-slate-300 font-mono font-bold text-xs rounded border border-white/10">
                ● 14,250 SMS Kredisi
              </span>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Office Details & Security */}
        <div className="lg:col-span-5 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4 shadow-cinema">
          <h3 className="font-bold text-white text-sm border-b border-white/[0.06] pb-2">SMMM Ruhsat & Güvenlik</h3>

          <div className="space-y-3 text-xs font-mono text-slate-300">
            <div className="flex justify-between py-1 border-b border-white/[0.06]">
              <span className="text-slate-400">Kurumsal Ünvan:</span>
              <span className="font-bold text-white">{firmInfo.legalName}</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.06]">
              <span className="text-slate-400">TÜRMOB Ruhsat No:</span>
              <span className="font-bold text-white">349102</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.06]">
              <span className="text-slate-400">2FA Çift Aşamalı Doğrulama:</span>
              <span className="text-emerald-400 font-bold">Aktif (Zorunlu)</span>
            </div>
            <div className="flex justify-between py-1 border-b border-white/[0.06]">
              <span className="text-slate-400">Veri Şifreleme Standardı:</span>
              <span className="text-white">AES-256 / SSL EV</span>
            </div>
          </div>

          <div className="pt-3">
            <button
              onClick={handleSaveSettings}
              className="w-full py-2.5 bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wider rounded-lg text-xs shadow-luxury transition-colors"
            >
              Ayarları Güncelle
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
