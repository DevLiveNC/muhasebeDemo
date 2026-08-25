import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  Search,
  Plus,
  ArrowRight,
  Download,
  Building2
} from 'lucide-react';
import { cn, formatCurrency } from '../../utils/cn';

export default function AdminClients() {
  const { clients, openClientDetail, addNewClient, addToast } = useApp();

  const [search, setSearch] = useState('');
  const [filterType, setFilterType] = useState('all');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newCompany, setNewCompany] = useState({
    name: '',
    shortName: '',
    type: 'Anonim Şirket (A.Ş.)',
    sector: 'Yazılım & Bilişim',
    taxOffice: 'Maslak V.D.',
    taxNumber: '9988776655',
    tradeRegisterNo: '123456-1',
    mersisNo: '0998877665500001',
    employeeCount: 15,
    monthlyFee: 20000,
    authorizedPerson: {
      name: 'Deniz Kaya',
      title: 'Genel Müdür',
      email: 'deniz@sirket.com',
      phone: '+90 532 111 22 33',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    assignedCPA: {
      name: 'SMMM Kemal Yıldız',
      title: 'Kıdemli Vergi Direktörü',
      email: 'kemal.yildiz@veloxfinans.com',
      phone: '+90 212 809 45 11',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    notes: 'Yeni eklenen müşteri.',
    kdvStatus: 'Hazırlanıyor',
    sgkStatus: 'Hazırlanıyor',
    quarterlyRevenue: '₺2,500,000'
  });

  const filteredClients = clients.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
                          c.taxNumber.includes(search) ||
                          c.sector.toLowerCase().includes(search.toLowerCase());
    const matchesType = filterType === 'all' || c.type.includes(filterType);
    return matchesSearch && matchesType;
  });

  const handleCreateClient = (e) => {
    e.preventDefault();
    if (!newCompany.name.trim()) return;

    addNewClient(newCompany);
    setIsAddModalOpen(false);
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Müşteri Portföy Masası</h1>
          <p className="text-xs text-slate-400 font-mono">Kayıtlı 48 şirket, vergi dairesi durumları ve SMMM atamaları</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => addToast('Excel Aktarımı', 'Tüm portföy Excel formatında indirildi.', 'success')}
            className="px-3.5 py-2 bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 rounded-lg text-xs font-semibold border border-white/10 flex items-center space-x-1.5 transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Excel Dışa Aktar</span>
          </button>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
          >
            <Plus className="w-3.5 h-3.5 text-black" />
            <span>Yeni Şirket Ekle</span>
          </button>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="p-4 rounded-2xl obsidian-card border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Şirket adı, Vergi No, Sektör veya Vergi Dairesi ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/[0.08] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/30 font-sans"
          />
        </div>

        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="px-3 py-2 bg-black/40 border border-white/[0.08] rounded-xl text-xs font-mono text-white focus:outline-none"
        >
          <option value="all">Tüm Şirket Türleri</option>
          <option value="Anonim">Anonim Şirket (A.Ş.)</option>
          <option value="Limited">Limited Şirket (Ltd.)</option>
        </select>
      </div>

      {/* Data Table */}
      <div className="p-1 rounded-2xl obsidian-card border border-white/[0.08] overflow-hidden shadow-cinema">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
              <tr>
                <th className="p-3.5">Firma / Ünvan</th>
                <th className="p-3.5">Vergi Dairesi & No</th>
                <th className="p-3.5">Personel</th>
                <th className="p-3.5">Aylık Ücret</th>
                <th className="p-3.5">Sorumlu SMMM</th>
                <th className="p-3.5">Evrak Durumu</th>
                <th className="p-3.5">KDV-1 Durumu</th>
                <th className="p-3.5 text-right">360° İncele</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filteredClients.map((client) => (
                <tr 
                  key={client.id}
                  onClick={() => openClientDetail(client.id)}
                  className="hover:bg-white/[0.02] transition-colors cursor-pointer group"
                >
                  <td className="p-3.5 font-bold text-white flex items-center space-x-2.5">
                    <div className="w-8 h-8 rounded-lg bg-white text-black font-black text-xs flex items-center justify-center shrink-0">
                      {client.name.substring(0, 2).toUpperCase()}
                    </div>
                    <div>
                      <p className="font-sans text-xs group-hover:text-slate-200 transition-colors">{client.name}</p>
                      <span className="text-[10px] text-slate-500 font-normal font-sans">{client.sector}</span>
                    </div>
                  </td>

                  <td className="p-3.5 text-slate-300">
                    <p className="font-bold text-white">{client.taxNumber}</p>
                    <span className="text-[10px] text-slate-500 font-sans">{client.taxOffice}</span>
                  </td>

                  <td className="p-3.5 text-slate-300">
                    {client.employeeCount} Personel
                  </td>

                  <td className="p-3.5 font-bold text-white">
                    {formatCurrency(client.monthlyFee)}
                  </td>

                  <td className="p-3.5 text-slate-300 font-sans">
                    {client.assignedCPA.name.split(' ')[1]} {client.assignedCPA.name.split(' ')[2]}
                  </td>

                  <td className="p-3.5">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold font-sans",
                      client.missingDocsCount > 0 
                        ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" 
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    )}>
                      {client.missingDocsCount > 0 ? `${client.missingDocsCount} Eksik` : 'Tam'}
                    </span>
                  </td>

                  <td className="p-3.5 text-slate-300 font-sans text-[11px]">
                    {client.kdvStatus}
                  </td>

                  <td className="p-3.5 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openClientDetail(client.id);
                      }}
                      className="px-2.5 py-1 bg-white/[0.06] hover:bg-white/[0.15] text-slate-200 rounded text-xs font-sans font-semibold inline-flex items-center space-x-1"
                    >
                      <span>Masayı Aç</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Client Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-xl bg-[#0e1119] rounded-2xl p-6 space-y-4 shadow-2xl border border-white/10 animate-slide-down">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="font-bold text-base text-white">Portföye Yeni Mükellef Ekle</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateClient} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">Şirket Resmi Ünvanı *</label>
                <input
                  type="text"
                  placeholder="Örn: Solvy Enerji Teknolojileri A.Ş."
                  required
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value, shortName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Şirket Türü</label>
                  <select
                    value={newCompany.type}
                    onChange={(e) => setNewCompany({ ...newCompany, type: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                  >
                    <option>Anonim Şirket (A.Ş.)</option>
                    <option>Limited Şirket (Ltd. Şti.)</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Vergi Kimlik No *</label>
                  <input
                    type="text"
                    required
                    value={newCompany.taxNumber}
                    onChange={(e) => setNewCompany({ ...newCompany, taxNumber: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Aylık Ücret (₺)</label>
                  <input
                    type="number"
                    value={newCompany.monthlyFee}
                    onChange={(e) => setNewCompany({ ...newCompany, monthlyFee: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-mono"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Personel Sayısı</label>
                  <input
                    type="number"
                    value={newCompany.employeeCount}
                    onChange={(e) => setNewCompany({ ...newCompany, employeeCount: parseInt(e.target.value) || 0 })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                  />
                </div>
              </div>

              <div className="pt-3 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-white/[0.04] text-slate-300 rounded-lg"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-black font-bold uppercase tracking-wider rounded-lg shadow-sm"
                >
                  Mükellefi Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
