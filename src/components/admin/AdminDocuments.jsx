import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Search,
  CheckCheck,
  Eye,
  Send
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminDocuments() {
  const {
    documents,
    approveDocument,
    setSelectedDocForPreview,
    sendMissingDocAlert,
    addToast
  } = useApp();

  const [activeTab, setActiveTab] = useState('all'); // 'all' | 'pending' | 'missing' | 'approved'
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Alış Faturası', 'Banka Ekstresi', 'Bordro / SGK', 'Gümrük / İhracat', 'POS / Z Raporu', 'Kira & Stopaj'];

  const filteredDocs = documents.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(search.toLowerCase()) ||
                          doc.client.toLowerCase().includes(search.toLowerCase()) ||
                          doc.amount.includes(search);
    const matchesCat = selectedCategory === 'all' || doc.category === selectedCategory;

    if (activeTab === 'approved') return matchesSearch && matchesCat && doc.status === 'Onaylandı';
    if (activeTab === 'pending') return matchesSearch && matchesCat && doc.status === 'İncelemede';
    if (activeTab === 'missing') return matchesSearch && matchesCat && (doc.status === 'Eksik / Talep Edildi' || doc.status.includes('Eksik'));
    return matchesSearch && matchesCat;
  });

  const handleBatchApprove = () => {
    filteredDocs.forEach((d) => {
      if (d.status !== 'Onaylandı') {
        approveDocument(d.id);
      }
    });
    addToast('Toplu onay', 'Seçilen belgeler muhasebe kaydına işlendi.', 'success');
  };

  const tabs = [
    { id: 'all', label: 'Tümü', count: documents.length },
    { id: 'pending', label: 'İncelemede', count: documents.filter((d) => d.status === 'İncelemede').length },
    { id: 'missing', label: 'Eksik', count: documents.filter((d) => d.status.includes('Eksik')).length },
    { id: 'approved', label: 'Onaylandı', count: documents.filter((d) => d.status === 'Onaylandı').length }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">Belgeler</h1>
          <p className="page-lead">Onay bekleyen fatura ve evraklar.</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => sendMissingDocAlert('Eksik evraklı müşteriler', 'Bekleyen evraklar')}
            className="btn btn-outline btn-sm"
          >
            <Send className="w-3.5 h-3.5 text-pine-700" />
            <span>Eksik evrak bildir</span>
          </button>
          <button
            onClick={handleBatchApprove}
            className="btn btn-primary btn-sm"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Toplu onay</span>
          </button>
        </div>
      </div>

      {/* Tabs + Filters */}
      <div className="card p-4 space-y-3">
        <div className="flex items-center gap-2 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={cn('chip shrink-0', activeTab === tab.id ? 'chip-active' : 'chip-idle')}
            >
              <span>{tab.label}</span>
              <span className={cn('font-mono text-[10px] font-bold px-1.5 py-0.5 rounded', activeTab === tab.id ? 'bg-white/20' : 'bg-paper-200')}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Belge, mükellef veya tutar ara..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input pl-9 py-2 text-[13px]"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="select py-2 text-[13px]"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'all' ? 'Tüm Kategoriler' : c}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[820px]">
            <thead>
              <tr className="border-b border-line bg-paper-50">
                <th className="th">Müşteri</th>
                <th className="th">Belge</th>
                <th className="th">Kategori</th>
                <th className="th text-right">Tutar</th>
                <th className="th">Okuma</th>
                <th className="th">Durum</th>
                <th className="th text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-paper-50 transition-colors">
                  <td className="td font-semibold text-ink-900 whitespace-nowrap">{doc.client.split(' ').slice(0, 2).join(' ')}</td>
                  <td className="td">
                    <span className="block truncate max-w-[200px]">{doc.name}</span>
                    <span className="text-[10px] font-mono text-ink-400">{doc.uploadDate}</span>
                  </td>
                  <td className="td text-ink-500 whitespace-nowrap">{doc.category}</td>
                  <td className="td font-mono font-semibold text-ink-900 text-right whitespace-nowrap">{doc.amount}</td>
                  <td className="td"><span className="status text-ink-700"><span className="dot dot-success"></span>{doc.ocrConfidence}</span></td>
                  <td className="td">
                    <span className="status text-ink-700">
                      <span className={cn('dot', doc.status === 'Onaylandı' ? 'dot-success' : doc.status.includes('Eksik') ? 'dot-danger' : 'dot-warning')}></span>{doc.status}
                    </span>
                  </td>
                  <td className="td text-right whitespace-nowrap">
                    <div className="flex items-center justify-end gap-1.5">
                      <button
                        onClick={() => setSelectedDocForPreview(doc)}
                        className="btn btn-ghost btn-sm"
                        title="Önizle"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      {doc.status !== 'Onaylandı' && (
                        <button
                          onClick={() => approveDocument(doc.id)}
                          className="btn btn-primary btn-sm"
                        >
                          Onayla
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
              {filteredDocs.length === 0 && (
                <tr>
                  <td colSpan={7} className="td text-center text-ink-400 py-10">
                    Seçili filtrede evrak bulunamadı.
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
