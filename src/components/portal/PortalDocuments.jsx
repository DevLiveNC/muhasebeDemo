import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  UploadCloud,
  Folder,
  Search,
  Sparkles,
  Plus
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PortalDocuments() {
  const {
    documents,
    addNewDocument,
    setSelectedDocForPreview
  } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFolder, setSelectedFolder] = useState('all');
  const [isUploading, setIsUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);

  const clientDocs = documents.filter((d) => d.clientId === 'cli-1' || d.clientId === 'all');

  const folders = [
    { id: 'all', name: 'Tüm Belgeler & Yevmiye' },
    { id: 'Alış Faturası', name: 'Alış Faturaları (770 Hesaplar)' },
    { id: 'Banka Ekstresi', name: 'Banka Ekstreleri (102 Hesap)' },
    { id: 'Bordro / SGK', name: 'Personel & 4691 Bordro İcmalleri' }
  ];

  const filteredDocs = clientDocs.filter((d) => {
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          d.amount.includes(searchQuery);
    const matchesFolder = selectedFolder === 'all' || d.category === selectedFolder;
    return matchesSearch && matchesFolder;
  });

  const handleSimulateUpload = (filename = 'Turkcell_Superonline_Temmuz.pdf', category = 'Alış Faturası', amount = '₺4.250,00') => {
    setIsUploading(true);
    setTimeout(() => {
      addNewDocument({
        name: filename,
        category: category,
        client: 'TechVision Bilişim ve Yapay Zeka A.Ş.',
        clientId: 'cli-1',
        amount: amount,
        vatAmount: '₺850,00',
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
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">Belgelerim ve Dijital Arşiv</h1>
          <p className="text-xs text-ink-400 mt-1">Faturalar, banka ekstreleri, SGK bordroları ve resmi tahakkuk kayıtları</p>
        </div>

        <button
          onClick={() => handleSimulateUpload('Google_Workspace_Temmuz_2026.pdf', 'Alış Faturası', '₺18.400,00')}
          disabled={isUploading}
          className="btn btn-primary btn-sm shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
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
          handleSimulateUpload('Suruklenen_Fatura_Temmuz.pdf', 'Alış Faturası', '₺12.900,00');
        }}
        className={cn(
          'p-8 rounded-xl border-2 border-dashed transition-all text-center space-y-3 bg-white',
          dragOver
            ? 'border-pine-600 bg-pine-50'
            : 'border-line-strong hover:border-pine-600'
        )}
      >
        <div className="w-11 h-11 rounded-xl bg-pine-50 text-pine-700 flex items-center justify-center mx-auto">
          {isUploading ? (
            <Sparkles className="w-5 h-5" />
          ) : (
            <UploadCloud className="w-5 h-5" />
          )}
        </div>

        <div>
          <h3 className="font-bold text-ink-900 text-sm">
            {isUploading ? 'Yapay Zeka Faturayı Okuyor ve Doğruluyor...' : 'Evraklarınızı Buraya Sürükleyin veya Tıklayın'}
          </h3>
          <p className="text-[11px] text-ink-400 font-mono mt-1">
            PDF, PNG, JPEG, Excel, E-Arşiv XML (Maks. 50 MB) — Otomatik OCR 2.1 Sn
          </p>
        </div>

        <button
          onClick={() => handleSimulateUpload('Ofis_Kira_Gider_Makbuzu.pdf', 'Alış Faturası', '₺35.000,00')}
          disabled={isUploading}
          className="btn btn-outline btn-sm"
        >
          {isUploading ? 'OCR İşleniyor (%99.9)...' : 'Dosya Seç & Yükle'}
        </button>
      </div>

      {/* Folders & Documents */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Folders */}
        <div className="lg:col-span-4 card p-5 space-y-2 self-start">
          <span className="mlabel block px-2 mb-2">
            Arşiv Klasörleri
          </span>
          {folders.map((folder) => {
            const count = folder.id === 'all'
              ? clientDocs.length
              : clientDocs.filter((d) => d.category === folder.id).length;
            const isSelected = selectedFolder === folder.id;
            return (
              <button
                key={folder.id}
                onClick={() => setSelectedFolder(folder.id)}
                className={cn(
                  'w-full flex items-center justify-between p-3 rounded-lg text-[13px] font-medium transition-colors',
                  isSelected
                    ? 'bg-pine-700 text-white shadow-sm'
                    : 'text-ink-600 hover:bg-paper-100'
                )}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <Folder className={cn('w-3.5 h-3.5 shrink-0', isSelected ? 'text-white' : 'text-ink-400')} />
                  <span className="truncate">{folder.name}</span>
                </div>
                <span className={cn(
                  'px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold shrink-0',
                  isSelected ? 'bg-white/20 text-white' : 'bg-paper-200 text-ink-500'
                )}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Documents Table */}
        <div className="lg:col-span-8 card p-5 space-y-4">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-ink-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Belge adı, tedarikçi veya tutar ile filtrele..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input pl-9 py-2 text-[13px]"
            />
          </div>

          <div className="overflow-x-auto -mx-5 px-5">
            <table className="w-full text-left min-w-[560px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="th">Belge Adı</th>
                  <th className="th">Kategori</th>
                  <th className="th">Tarih</th>
                  <th className="th text-right">Tutar</th>
                  <th className="th">OCR</th>
                  <th className="th text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filteredDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-paper-50 transition-colors">
                    <td className="td">
                      <div className="flex items-center gap-2">
                        <FileText className="w-3.5 h-3.5 text-pine-700 shrink-0" />
                        <span className="truncate max-w-[180px] font-semibold text-ink-900">{doc.name}</span>
                      </div>
                    </td>
                    <td className="td text-ink-500 whitespace-nowrap">{doc.category}</td>
                    <td className="td font-mono text-xs text-ink-500 whitespace-nowrap">{doc.uploadDate}</td>
                    <td className="td font-mono font-semibold text-ink-900 text-right whitespace-nowrap">{doc.amount}</td>
                    <td className="td">
                      <span className="status text-ink-700"><span className="dot dot-success"></span>{doc.ocrConfidence}</span>
                    </td>
                    <td className="td text-right">
                      <button
                        onClick={() => setSelectedDocForPreview(doc)}
                        className="btn btn-outline btn-sm"
                      >
                        Önizle
                      </button>
                    </td>
                  </tr>
                ))}
                {filteredDocs.length === 0 && (
                  <tr>
                    <td colSpan={6} className="td text-center text-ink-400 py-10">
                      Bu klasörde ve filtrede belge bulunamadı.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>

    </div>
  );
}
