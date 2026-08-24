import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CreditCard,
  Plus,
  Receipt,
  Download,
  CheckCircle2,
  AlertTriangle,
  Send,
  Printer,
  Sparkles,
  ArrowUpRight,
  TrendingUp,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminPayments() {
  const { payments, setIsSmmModalOpen, addToast } = useApp();
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredPayments = payments.filter((p) => {
    if (filterStatus === 'all') return true;
    return p.status === filterStatus;
  });

  const handleSendReminder = (client) => {
    addToast('Ödeme Hatırlatması İletildi', `${client} finans birimine online ödeme bağlantılı SMS ve e-posta iletildi.`, 'info');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider border border-emerald-500/20">
              GİB e-SMM Entegrasyonu
            </span>
            <span className="text-slate-500 font-mono text-xs">Cari Hesap & Tahsilat Kokpiti</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Müşavirlik Ücretleri & e-SMM Yönetimi</h1>
          <p className="text-xs text-slate-400 font-mono">Aylık SMMM müşavirlik sözleşmeleri, stopaj tevkifatı ve tahsilat takibi</p>
        </div>

        <div className="flex items-center space-x-2">
          <span className="px-3 py-1.5 rounded-xl bg-white/[0.04] text-slate-300 font-mono text-xs border border-white/[0.08] flex items-center space-x-1.5">
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Ağustos Tahsilat: %95.1</span>
          </span>
        </div>
      </div>

      {/* 3 Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Toplam Kesilen e-SMM (Ağustos)</span>
          <p className="text-2xl font-bold font-mono text-white">₺720,000</p>
          <p className="text-[11px] font-mono text-slate-400">48 Portföy Mükellefi</p>
        </div>

        <div className="p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Tahsil Edilen Tutar</span>
          <p className="text-2xl font-bold font-mono text-emerald-400">₺684,500</p>
          <p className="text-[11px] font-mono text-emerald-400/80">✓ 44 Mükellef Cari Kapandı</p>
        </div>

        <div className="p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-1">
          <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Geciken / Açık Bakiye</span>
          <p className="text-2xl font-bold font-mono text-amber-400">₺35,500</p>
          <p className="text-[11px] font-mono text-amber-400/80">4 Şirket Beklemede</p>
        </div>
      </div>

      {/* Filter & Table */}
      <div className="rounded-2xl obsidian-card border border-white/[0.08] overflow-hidden shadow-cinema">
        <div className="p-4 border-b border-white/[0.06] flex items-center justify-between">
          <h3 className="font-bold text-white text-sm">Resmi Serbest Meslek Makbuzları (e-SMM)</h3>
          
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-3 py-1.5 bg-black/60 border border-white/10 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
          >
            <option value="all">Tüm Durumlar</option>
            <option value="Ödendi">Ödenenler (Tahsil Edildi)</option>
            <option value="Gecikmede">Gecikmede</option>
            <option value="Beklemede">Beklemede</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
              <tr>
                <th className="p-3.5">Mükellef Unvanı</th>
                <th className="p-3.5">e-SMM Seri & No</th>
                <th className="p-3.5">Dönem</th>
                <th className="p-3.5">Brüt Ücret</th>
                <th className="p-3.5">KDV & Stopaj Tevkifatı</th>
                <th className="p-3.5">Net Tahsil Edilecek</th>
                <th className="p-3.5">Durum</th>
                <th className="p-3.5 text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filteredPayments.map((pay) => (
                <tr key={pay.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3.5 font-bold text-white font-sans">{pay.client}</td>
                  <td className="p-3.5 text-slate-400">{pay.smmNo}</td>
                  <td className="p-3.5 text-slate-500">{pay.period}</td>
                  <td className="p-3.5 text-slate-300">{pay.amount}</td>
                  <td className="p-3.5 text-slate-400">{pay.vatAmount}</td>
                  <td className="p-3.5 font-bold text-white">{pay.totalAmount}</td>
                  <td className="p-3.5">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold",
                      pay.status === 'Ödendi' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : pay.status === 'Gecikmede'
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    )}>
                      {pay.status}
                    </span>
                  </td>
                  <td className="p-3.5 text-right space-x-1.5">
                    <button
                      onClick={() => setIsSmmModalOpen(pay)}
                      className="px-2.5 py-1 bg-white/[0.06] hover:bg-white/10 text-slate-200 rounded text-xs transition-colors inline-flex items-center space-x-1"
                    >
                      <Receipt className="w-3.5 h-3.5" />
                      <span>e-SMM İncele</span>
                    </button>
                    {pay.status !== 'Ödendi' && (
                      <button
                        onClick={() => handleSendReminder(pay.client)}
                        className="px-2 py-1 bg-white hover:bg-slate-200 text-black font-bold rounded text-[11px] transition-colors"
                      >
                        Hatırlat
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
