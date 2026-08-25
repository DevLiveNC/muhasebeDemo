import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Receipt, TrendingUp } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminPayments() {
  const { payments, setIsSmmModalOpen } = useApp();
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredPayments = payments.filter(
    (p) => filterStatus === 'all' || p.status === filterStatus
  );

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-neutral">Tahsilat & e-SMM</span>
            <span className="text-ink-400 font-mono text-xs">Ağustos 2026 Dönemi</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-950 tracking-tight mt-1.5">
            Müşavirlik Ücreti Tahsilatları
          </h1>
        </div>

        <span className="badge badge-success self-start">
          <TrendingUp className="w-3 h-3" />
          Ağustos Tahsilat: %95.1
        </span>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="card p-5 space-y-1.5">
          <span className="kpi-label">Toplam Kesilen e-SMM (Ağustos)</span>
          <p className="font-mono text-2xl font-semibold text-ink-950 tracking-tight">₺720.000</p>
          <p className="text-[11px] font-mono text-ink-400">48 Portföy Mükellefi</p>
        </div>
        <div className="card p-5 space-y-1.5">
          <span className="kpi-label">Tahsil Edilen Tutar</span>
          <p className="font-mono text-2xl font-semibold text-pine-700 tracking-tight">₺684.500</p>
          <p className="text-[11px] font-mono text-success-deep">✓ 44 Mükellef Cari Kapandı</p>
        </div>
        <div className="card p-5 space-y-1.5">
          <span className="kpi-label">Geciken / Açık Bakiye</span>
          <p className="font-mono text-2xl font-semibold text-warning-deep tracking-tight">₺35.500</p>
          <p className="text-[11px] font-mono text-warning-deep/70">4 Şirket Beklemede</p>
        </div>
      </div>

      {/* Filter & Table */}
      <div className="card overflow-hidden">
        <div className="p-4 border-b border-line flex items-center justify-between gap-3 flex-wrap">
          <h3 className="font-bold text-ink-950 text-sm">Resmi Serbest Meslek Makbuzları (e-SMM)</h3>

          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="select w-auto py-2 text-xs font-mono"
          >
            <option value="all">Tüm Durumlar</option>
            <option value="Ödendi">Ödenenler (Tahsil Edildi)</option>
            <option value="Gecikmede">Gecikmede</option>
            <option value="Beklemede">Beklemede</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead>
              <tr className="border-b border-line bg-paper-50">
                <th className="th">Mükellef Unvanı</th>
                <th className="th">e-SMM Seri & No</th>
                <th className="th">Dönem</th>
                <th className="th text-right">Brüt Ücret</th>
                <th className="th text-right">KDV</th>
                <th className="th text-right">Toplam</th>
                <th className="th">Son Ödeme</th>
                <th className="th">Durum</th>
                <th className="th text-right">Makbuz</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filteredPayments.map((p) => (
                <tr key={p.id} className="hover:bg-paper-50 transition-colors">
                  <td className="td">
                    <span className="font-semibold text-ink-950 block max-w-[200px] truncate">{p.client}</span>
                  </td>
                  <td className="td font-mono text-xs text-ink-500 whitespace-nowrap">{p.smmNo}</td>
                  <td className="td text-ink-500 whitespace-nowrap">{p.period}</td>
                  <td className="td font-mono text-ink-700 text-right whitespace-nowrap">{p.amount}</td>
                  <td className="td font-mono text-ink-500 text-right whitespace-nowrap">{p.vatAmount}</td>
                  <td className="td font-mono font-bold text-ink-950 text-right whitespace-nowrap">{p.totalAmount}</td>
                  <td className="td font-mono text-xs text-ink-500 whitespace-nowrap">{p.dueDate}</td>
                  <td className="td">
                    <span className={cn(
                      'badge',
                      p.status === 'Ödendi' ? 'badge-success' : p.status === 'Gecikmede' ? 'badge-danger' : 'badge-warning'
                    )}>
                      {p.status}
                    </span>
                  </td>
                  <td className="td text-right">
                    <button
                      onClick={() => setIsSmmModalOpen(p)}
                      className="btn btn-outline btn-sm"
                    >
                      <Receipt className="w-3.5 h-3.5" />
                      <span>İncele</span>
                    </button>
                  </td>
                </tr>
              ))}
              {filteredPayments.length === 0 && (
                <tr>
                  <td colSpan={9} className="td text-center text-ink-400 py-10">
                    Seçili durumda makbuz bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
