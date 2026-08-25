import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  Plus,
  ArrowRight,
  Download,
  X
} from 'lucide-react';
import { cn } from '../../utils/cn';

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
    quarterlyRevenue: '₺2.500.000'
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

    addNewClient({
      ...newCompany,
      shortName: newCompany.shortName || newCompany.name.split(' ')[0] + ' ' + (newCompany.name.split(' ').slice(-1)[0] || 'A.Ş.')
    });
    setIsAddModalOpen(false);
    setNewCompany((prev) => ({ ...prev, name: '', shortName: '' }));
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">Müşteri Portföy Masası</h1>
          <p className="text-xs text-ink-400 mt-1">Kayıtlı 48 şirket, vergi dairesi durumları ve SMMM atamaları</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => addToast('Excel Aktarımı', 'Tüm portföy Excel formatında indirildi.', 'success')}
            className="btn btn-outline btn-sm"
          >
            <Download className="w-3.5 h-3.5 text-pine-700" />
            <span>Excel İndir</span>
          </button>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn btn-primary btn-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Yeni Müşteri Ekle</span>
          </button>
        </div>
      </div>

      {/* Filters */}
      <div className="card p-4 flex flex-col sm:flex-row gap-3">
        <div className="relative flex-1">
          <Search className="w-3.5 h-3.5 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Unvan, VKN veya sektör ile ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input pl-9 py-2 text-[13px]"
          />
        </div>
        <select
          value={filterType}
          onChange={(e) => setFilterType(e.target.value)}
          className="select sm:w-56 py-2 text-[13px]"
        >
          <option value="all">Tüm Şirket Türleri</option>
          <option value="Anonim">Anonim Şirket (A.Ş.)</option>
          <option value="Limited">Limited Şirket (Ltd. Şti.)</option>
        </select>
      </div>

      {/* Clients Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[760px]">
            <thead>
              <tr className="border-b border-line bg-paper-50">
                <th className="th">Mükellef</th>
                <th className="th">Sektör</th>
                <th className="th">KDV-1 Durumu</th>
                <th className="th">Sorumlu SMMM</th>
                <th className="th text-right">Aylık Ücret</th>
                <th className="th">Evrak</th>
                <th className="th text-right"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filteredClients.map((cl) => (
                <tr
                  key={cl.id}
                  onClick={() => openClientDetail(cl.id)}
                  className="hover:bg-paper-50 transition-colors cursor-pointer group"
                >
                  <td className="td">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-pine-50 border border-pine-100 text-pine-800 font-bold text-xs flex items-center justify-center shrink-0">
                        {cl.name.substring(0, 2).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-[13px] text-ink-900 truncate max-w-[220px]">{cl.shortName}</h4>
                        <p className="text-[11px] font-mono text-ink-400 truncate">
                          VN: {cl.taxNumber} · {cl.taxOffice}
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="td text-ink-500 whitespace-nowrap">{cl.sector}</td>
                  <td className="td whitespace-nowrap">
                    <span className="status text-ink-700">
                      <span className={cn('dot', cl.kdvStatus.includes('Onaylandı') ? 'dot-success' : 'dot-neutral')}></span>{cl.kdvStatus.split(' ')[0]}
                    </span>
                  </td>
                  <td className="td text-ink-500 whitespace-nowrap">{cl.assignedCPA.name}</td>
                  <td className="td font-mono font-semibold text-ink-900 text-right whitespace-nowrap">
                    {formatNumber(cl.monthlyFee)}
                  </td>
                  <td className="td">
                    <span className="status text-ink-700">
                      <span className={cn('dot', cl.missingDocsCount > 0 ? 'dot-danger' : 'dot-success')}></span>{cl.missingDocsCount > 0 ? `${cl.missingDocsCount} Eksik` : 'Eksiksiz'}
                    </span>
                  </td>
                  <td className="td text-right">
                    <ArrowRight className="w-4 h-4 text-ink-300 group-hover:text-pine-700 group-hover:translate-x-0.5 transition-all inline" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Client Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-ink-950/50 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-line flex items-center justify-between">
              <div>
                <h3 className="font-bold text-ink-900 text-[15px]">Yeni Mükellef Kaydı</h3>
                <p className="text-[11px] text-ink-400 mt-0.5">Portföye eklenen müşteriye ilk açılış bildirimleri otomatik gider.</p>
              </div>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors"
                title="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateClient} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
              <div>
                <label className="label">Şirket Ünvanı *</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Solvy Enerji Teknolojileri A.Ş."
                  value={newCompany.name}
                  onChange={(e) => setNewCompany({ ...newCompany, name: e.target.value })}
                  className="input"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="label">Kısa Ad</label>
                  <input
                    type="text"
                    placeholder="Örn: Solvy A.Ş."
                    value={newCompany.shortName}
                    onChange={(e) => setNewCompany({ ...newCompany, shortName: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Şirket Türü</label>
                  <select
                    value={newCompany.type}
                    onChange={(e) => setNewCompany({ ...newCompany, type: e.target.value })}
                    className="select"
                  >
                    <option>Anonim Şirket (A.Ş.)</option>
                    <option>Limited Şirket (Ltd. Şti.)</option>
                  </select>
                </div>
                <div>
                  <label className="label">Sektör</label>
                  <input
                    type="text"
                    value={newCompany.sector}
                    onChange={(e) => setNewCompany({ ...newCompany, sector: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Vergi Dairesi</label>
                  <input
                    type="text"
                    value={newCompany.taxOffice}
                    onChange={(e) => setNewCompany({ ...newCompany, taxOffice: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Vergi No (VKN)</label>
                  <input
                    type="text"
                    value={newCompany.taxNumber}
                    onChange={(e) => setNewCompany({ ...newCompany, taxNumber: e.target.value })}
                    className="input font-mono"
                  />
                </div>
                <div>
                  <label className="label">Personel Sayısı</label>
                  <input
                    type="number"
                    min="1"
                    value={newCompany.employeeCount}
                    onChange={(e) => setNewCompany({ ...newCompany, employeeCount: parseInt(e.target.value) || 1 })}
                    className="input font-mono"
                  />
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="btn btn-ghost btn-sm"
                >
                  Vazgeç
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Müşteriyi Portföye Ekle</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

function formatNumber(n) {
  return '₺' + new Intl.NumberFormat('tr-TR').format(n);
}
