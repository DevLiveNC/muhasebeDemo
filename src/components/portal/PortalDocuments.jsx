import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  UploadCloud,
  Folder,
  Search,
  CheckCircle2,
  Sparkles,
  Plus
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PortalDocuments() {
  const {
    documents,
    addNewDocument,
    setSelectedDocForPreview,
    addToast
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('all');
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const clientDocs = documents.filter((d) => d.clientId === 'cli-1' || d.clientId === 'all');

  const folders = [
    { id: 'all', name: 'Tüm Belgeler & Yevmiye', count: clientDocs.length },
    { id: 'Alış Faturası', name: 'Alış Faturaları (770 Hesaplar)', count: clientDocs.filter(d => d.category === 'Alış Faturası').length },
    { id: 'Banka Ekstresi', name: 'Banka Ekstreleri (102 Hesap)', count: clientDocs.filter(d => d.category === 'Banka Ekstresi').length },
    { id: 'Bordro / SGK', name: 'Personel & 4691 Bordro İcmalleri', count: clientDocs.filter(d => d.category === 'Bordro / SGK').length },
  ];

  const filteredDocs = clientDocs.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.amount.includes(searchQuery);
    const matchesFolder = selectedFolder === 'all' || d.category === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  const handleSimulateUpload = (filename = 'Turkcell_Superonline_Temmuz.pdf', category = 'Alış Faturası', amount = '₺4,250.00') => {
    setIsUploading(true);
    setTimeout(() => {
      addNewDocument({
        name: filename,
        category: category,
        client: 'TechVision Bilişim ve Yapay Zeka A.Ş.',
        clientId: 'cli-1',
        amount: amount,
        vatAmount: '₺850.00',
        vatRate: '%20',
        status: 'Onaylandı',
        ocrConfidence: '%99.9',
        fileSize: '640 KB',
        supplier: 'Turkcell İletişim Hizmetleri A.Ş.',
        assignedAccount: '770.03.001 Haberleşme ve Veri Hattı Giderleri',
        notes: 'Yapay zeka OCR tarafından otomatik okundu ve 770.03 hesabına işlendi.'
      });
      setIsUploading(false);
    }, 1200);
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Belgelerim ve Dijital Arşiv</h1>
          <p className="text-xs text-slate-400 font-mono">Faturalar, banka ekstreleri, SGK bordroları ve resmi tahakkuk kayıtları</p>
        </div>

        <button
          onClick={() => handleSimulateUpload('Google_Workspace_Temmuz_2026.pdf', 'Alış Faturası', '₺18,400.00')}
          disabled={isUploading}
          className="px-4 py-2 bg-white hover:bg-slate-200 disabled:opacity-50 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
        >
          <Plus className="w-3.5 h-3.5 text-black" />
          <span>Fatura Yükle (OCR Demo)</span>
        </button>
      </div>

      {/* Drag & Drop Zone */}
      <div
        onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleSimulateUpload('Suruklenen_Fatura_Temmuz.pdf', 'Alış Faturası', '₺12,900.00');
        }}
        className={cn(
          "p-7 rounded-2xl border-2 border-dashed transition-all text-center space-y-3 obsidian-card",
          dragOver 
            ? "border-white bg-white/[0.08]" 
            : "border-white/15 hover:border-white/30"
        )}
      >
        <div className="w-10 h-10 rounded-xl bg-white/[0.05] text-slate-300 flex items-center justify-center mx-auto">
          {isUploading ? (
            <Sparkles className="w-5 h-5 text-white animate-spin" />
          ) : (
            <UploadCloud className="w-5 h-5 text-white" />
          )}
        </div>

        <div>
          <h3 className="font-bold text-white text-sm">
            {isUploading ? 'Yapay Zeka Faturayı Okuyor ve Doğruluyor...' : 'Evraklarınızı Buraya Sürükleyin veya Tıklayın'}
          </h3>
          <p className="text-[11px] text-slate-400 font-mono mt-0.5">
            PDF, PNG, JPEG, Excel, E-Arşiv XML (Maks. 50 MB) — Otomatik OCR 2.1 Sn
          </p>
        </div>

        <div className="pt-1">
          <button
            onClick={() => handleSimulateUpload('Ofis_Kira_Gider_Makbuzu.pdf', 'Alış Faturası', '₺35,000.00')}
            disabled={isUploading}
            className="px-5 py-2 bg-white/[0.08] hover:bg-white/[0.15] text-white rounded-lg text-xs font-semibold border border-white/10 transition-colors"
          >
            {isUploading ? 'OCR İşleniyor (%99.9)...' : 'Dosya Seç & Yükle'}
          </button>
        </div>
      </div>

      {/* Folders & Documents View */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Folders */}
        <div className="lg:col-span-4 p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400 block px-2 mb-3">Arşiv Klasörleri</span>
          {folders.map((folder) => {
            const isSelected = selectedFolder === folder.id;
            return (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={cn(
                  "w-full flex items-center justify-between p-3 rounded-xl text-xs font-medium transition-colors",
                  isSelected
                    ? "bg-white text-black font-bold shadow-sm"
                    : "text-slate-300 hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center space-x-2.5">
                  <Folder className={cn("w-3.5 h-3.5", isSelected ? "text-black" : "text-slate-400")} />
                  <span>{folder.name}</span>
                </div>
                <span className={cn(
                  "px-2 py-0.5 rounded-full text-[10px] font-mono font-bold",
                  isSelected ? "bg-black text-white" : "bg-white/10 text-slate-300"
                )}>
                  {folder.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right Column: Documents Table */}
        <div className="lg:col-span-8 p-5 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
          
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Belge adı, tedarikçi veya tutar ile filtrele..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-black/40 border border-white/[0.08] rounded-xl text-xs text-white placeholder-slate-500 focus:outline-none focus:border-white/30"
            />
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs font-mono">
              <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
                <tr>
                  <th className="p-3">Belge Adı</th>
                  <th className="p-3">Kategori</th>
                  <th className="p-3">Tarih</th>
                  <th className="p-3">Tutar</th>
                  <th className="p-3">OCR</th>
                  <th className="p-3 text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-white/[0.02] transition-colors">
                    <td className="p-3 font-semibold text-white flex items-center space-x-2">
                      <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                      <span className="truncate max-w-[180px] font-sans">{doc.name}</span>
                    </td>
                    <td className="p-3 text-slate-400 font-sans">{doc.category}</td>
                    <td className="p-3 text-slate-400">{doc.uploadDate}</td>
                    <td className="p-3 font-bold text-white">{doc.amount}</td>
                    <td className="p-3">
                      <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                        {doc.ocrConfidence}
                      </span>
                    </td>
                    <td className="p-3 text-right">
                      <button
                        onClick={() => setSelectedDocForPreview(doc)}
                        className="px-2.5 py-1 bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 rounded text-[11px] font-sans transition-colors"
                      >
                        Önizle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

        </div>

      </div>

    </div>
  );
}
