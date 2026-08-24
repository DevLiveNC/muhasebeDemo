import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  Search,
  Filter,
  CheckCircle2,
  AlertTriangle,
  Send,
  Eye,
  Sparkles,
  Download,
  CheckCheck,
  Zap,
  Layers,
  ArrowUpRight,
  ShieldCheck
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
    addToast('Toplu Yevmiye Onayı', 'Filtrelenen tüm belgeler resmi Tekdüzen yevmiye defterine işlendi.', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider border border-emerald-500/20">
              GİB e-Defter & OCR Entegrasyonu
            </span>
            <span className="text-slate-500 font-mono text-xs">v4.2 Neural OCR</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Merkezi Evrak & Akıllı OCR Havuzu</h1>
          <p className="text-xs text-slate-400 font-mono">Tüm portföyden gelen e-Arşiv, e-Fatura, banka MT940 ve bordro kayıtları</p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => sendMissingDocAlert('Tüm Eksik Evraklı Mükellefler', 'Temmuz 2026 KDV & Stopaj Beyannamesi Evrakları')}
            className="px-3.5 py-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 text-amber-300 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center space-x-1.5 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Toplu SMS / Mail İhtar</span>
          </button>

          <button
            onClick={handleBatchApprove}
            className="px-3.5 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
          >
            <CheckCheck className="w-3.5 h-3.5" />
            <span>Toplu Yevmiyeye İşle</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {[
          { id: 'all', label: 'Tüm Belgeler', count: documents.length },
          { id: 'missing', label: 'Eksik / Kritik Evraklar', count: documents.filter(d => d.status.includes('Eksik')).length, alert: true },
          { id: 'pending', label: 'OCR & İnceleme Bekleyenler', count: documents.filter(d => d.status === 'İncelemede').length },
          { id: 'approved', label: 'Yevmiyeye İşlenenler', count: documents.filter(d => d.status === 'Onaylandı').length },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={cn(
              "flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all border",
              activeTab === tab.id
                ? "bg-white text-black border-white font-bold shadow-luxury"
                : "bg-white/[0.02] text-slate-400 hover:text-white border-white/[0.08]"
            )}
          >
            <span>{tab.label}</span>
            <span className={cn(
              "px-1.5 py-0.2 rounded text-[10px] font-bold",
              tab.alert 
                ? "bg-rose-500/20 text-rose-400 border border-rose-500/30" 
                : activeTab === tab.id 
                ? "bg-black/20 text-black font-bold" 
                : "bg-white/10 text-slate-300"
            )}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Filters Bar */}
      <div className="p-3 rounded-2xl obsidian-card border border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Belge adı, mükellef unvanı veya tutar ara..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/10 rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white font-mono"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 bg-black/60 border border-white/10 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
          >
            {categories.map((cat) => (
              <option key={cat} value={cat}>{cat === 'all' ? 'Tüm Kategoriler' : cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Documents Table */}
      <div className="rounded-2xl obsidian-card border border-white/[0.08] overflow-hidden shadow-cinema">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
              <tr>
                <th className="p-3.5">Mükellef Unvanı</th>
                <th className="p-3.5">Evrak & Seri No</th>
                <th className="p-3.5">Kategori</th>
                <th className="p-3.5">Tutar (Matrah & KDV)</th>
                <th className="p-3.5">Önerilen Tekdüzen Kodu</th>
                <th className="p-3.5">Neural OCR Güven</th>
                <th className="p-3.5">Durum</th>
                <th className="p-3.5 text-right">Mizan / Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filteredDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-white/[0.02] transition-colors group">
                  <td className="p-3.5 font-bold text-white font-sans">{doc.client}</td>
                  
                  <td className="p-3.5 text-slate-300">
                    <div className="flex items-center space-x-2">
                      <FileText className="w-3.5 h-3.5 text-slate-400 group-hover:text-white transition-colors" />
                      <span className="truncate max-w-[180px] text-white font-medium">{doc.name}</span>
                    </div>
                  </td>

                  <td className="p-3.5 text-slate-400">{doc.category}</td>

                  <td className="p-3.5">
                    <span className="font-bold text-white block">{doc.amount}</span>
                    <span className="text-[10px] text-slate-500">{doc.vatAmount} ({doc.vatRate})</span>
                  </td>

                  <td className="p-3.5 text-slate-300 text-[11px] truncate max-w-[150px]">
                    <span className="px-1.5 py-0.5 bg-white/[0.04] border border-white/[0.08] rounded text-slate-300">
                      {doc.assignedAccount}
                    </span>
                  </td>

                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] font-bold border border-emerald-500/20">
                      ✓ {doc.ocrConfidence}
                    </span>
                  </td>

                  <td className="p-3.5">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold",
                      doc.status === 'Onaylandı' 
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' 
                        : doc.status.includes('Eksik')
                        ? 'bg-rose-500/10 text-rose-400 border border-rose-500/20'
                        : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                    )}>
                      {doc.status}
                    </span>
                  </td>

                  <td className="p-3.5 text-right space-x-1.5">
                    <button
                      onClick={() => setSelectedDocForPreview(doc)}
                      className="px-2.5 py-1 bg-white/[0.06] hover:bg-white/10 text-slate-200 rounded text-xs transition-colors"
                    >
                      OCR İncele
                    </button>
                    {doc.status !== 'Onaylandı' && (
                      <button
                        onClick={() => approveDocument(doc.id)}
                        className="px-2.5 py-1 bg-white text-black font-bold uppercase tracking-wider rounded text-[11px] hover:bg-slate-200 transition-colors"
                      >
                        Yevmiyeye Al
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
