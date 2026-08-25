import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  FileText,
  CheckCircle2,
  Download,
  Printer,
  Sparkles,
  QrCode,
  Building,
  Calendar,
  CreditCard,
  ShieldCheck,
  Tag,
  Zap
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function DocumentPreviewModal() {
  const {
    selectedDocForPreview,
    setSelectedDocForPreview,
    approveDocument,
    addToast
  } = useApp();

  if (!selectedDocForPreview) return null;

  const doc = selectedDocForPreview;

  const handleDownload = () => {
    addToast('GİB e-Belge İndirildi', `${doc.name} PDF formatında indiriliyor.`, 'info');
  };

  const handlePrint = () => {
    addToast('Yazıcı Kuyruğuna Alındı', `${doc.name} resmi e-Arşiv formatında hazırlandı.`, 'info');
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-3xl bg-[#0b0d13] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh] transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-black/60 text-white flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white/10 text-white rounded-lg border border-white/20">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm text-white font-sans">{doc.name}</h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-white/10 text-slate-300 rounded border border-white/10">
                  {doc.category}
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">{doc.client} · Yükleme: {doc.uploadDate}</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleDownload}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="İndir"
            >
              <Download className="w-4 h-4" />
            </button>
            <button
              onClick={handlePrint}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Yazdır"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedDocForPreview(null)}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Content Body: Two columns */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6 bg-[#0e1119]">
          
          {/* Left Column: Simulated Digital Document Preview */}
          <div className="md:col-span-7 bg-[#11141d] p-5 rounded-xl border border-white/[0.08] shadow-cinema space-y-4 font-mono text-slate-300 text-xs">
            {/* Header of Simulated Invoice */}
            <div className="flex justify-between items-start border-b border-white/[0.06] pb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 bg-white text-black rounded flex items-center justify-center font-bold text-[11px]">
                    V
                  </div>
                  <span className="font-bold text-xs tracking-wider text-white font-sans">GİB E-FATURA / E-ARŞİV</span>
                </div>
                <p className="text-[10px] text-slate-500 mt-1">ETTN: 4a9f-81b2-990c-7832</p>
                <p className="text-[10px] text-slate-500">Düzenleme: {doc.uploadDate}</p>
              </div>
              <div className="text-right">
                <QrCode className="w-10 h-10 text-slate-400 inline-block" />
                <span className="block text-[9px] text-emerald-400 font-mono">GİB Onaylı</span>
              </div>
            </div>

            {/* Supplier & Customer */}
            <div className="grid grid-cols-2 gap-3 bg-black/40 p-3 rounded-lg border border-white/[0.06]">
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase block">Tedarikçi / Düzenleyen</span>
                <p className="font-bold text-white mt-0.5 font-sans text-xs">{doc.supplier || 'Kurumsal Sağlayıcı'}</p>
                <p className="text-slate-500 text-[10px]">VKN: 9948201948</p>
              </div>
              <div>
                <span className="text-[9px] text-slate-500 font-bold uppercase block">Mükellef / Alıcı</span>
                <p className="font-bold text-white mt-0.5 font-sans text-xs">{doc.client}</p>
                <p className="text-slate-500 text-[10px]">Durum: e-Fatura Aktif</p>
              </div>
            </div>

            {/* Items Table Mock */}
            <div className="border border-white/[0.06] rounded-lg overflow-hidden">
              <table className="w-full text-left text-[11px]">
                <thead className="bg-white/[0.03] text-slate-400 uppercase text-[9px]">
                  <tr>
                    <th className="p-2">Hizmet / Mal Tanımı</th>
                    <th className="p-2 text-right">KDV</th>
                    <th className="p-2 text-right">Tutar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  <tr>
                    <td className="p-2 text-slate-300 font-sans">{doc.name.replace('.pdf', '').replace('.xlsx', '')}</td>
                    <td className="p-2 text-right text-slate-400">{doc.vatRate}</td>
                    <td className="p-2 text-right font-bold text-white">{doc.amount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary Totals */}
            <div className="space-y-1 pt-2 border-t border-white/[0.06] text-xs">
              <div className="flex justify-between text-slate-400">
                <span>Ara Toplam (Matrah):</span>
                <span className="text-slate-200">{doc.amount}</span>
              </div>
              <div className="flex justify-between text-slate-400">
                <span>Hesaplanan KDV ({doc.vatRate}):</span>
                <span className="text-slate-200">{doc.vatAmount}</span>
              </div>
              <div className="flex justify-between text-white font-bold text-sm pt-1 border-t border-white/[0.08]">
                <span className="font-sans">Genel Toplam:</span>
                <span className="text-emerald-400">{doc.amount}</span>
              </div>
            </div>

            {/* Verification Watermark */}
            <div className="flex items-center justify-between text-[10px] text-slate-500 bg-black/40 p-2 rounded">
              <span className="flex items-center space-x-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Velox AI Neural OCR Doğrulandı</span>
              </span>
              <span>{doc.fileSize}</span>
            </div>
          </div>

          {/* Right Column: OCR Extraction & Accounting Coding */}
          <div className="md:col-span-5 space-y-4">
            
            {/* AI OCR Confidence Card */}
            <div className="p-4 rounded-xl obsidian-card border border-white/[0.08] shadow-cinema space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-white font-sans font-bold">
                  <Zap className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Neural OCR Çıkarımı</span>
                </div>
                <span className="px-2 py-0.5 bg-emerald-500/10 text-emerald-400 font-bold text-[10px] rounded border border-emerald-500/20">
                  {doc.ocrConfidence || '%99.2'}
                </span>
              </div>
              
              <div className="space-y-2 text-slate-300">
                <div className="flex justify-between py-1 border-b border-white/[0.06]">
                  <span className="text-slate-500">Tekdüzen Hesap:</span>
                  <span className="text-white font-bold">{doc.assignedAccount}</span>
                </div>
                <div className="flex justify-between py-1 border-b border-white/[0.06]">
                  <span className="text-slate-500">Mizan Durumu:</span>
                  <span className={cn(
                    "font-bold px-2 py-0.5 rounded text-[10px]",
                    doc.status === 'Onaylandı' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                  )}>
                    {doc.status}
                  </span>
                </div>
              </div>

              {doc.notes && (
                <div className="p-2.5 bg-black/50 rounded-lg text-[11px] text-slate-400 border border-white/[0.06]">
                  <span className="font-bold text-slate-300 block mb-0.5">SMMM Denetçi Notu:</span>
                  {doc.notes}
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              {doc.status !== 'Onaylandı' && (
                <button
                  onClick={() => {
                    approveDocument(doc.id);
                    setSelectedDocForPreview(null);
                  }}
                  className="w-full py-2.5 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-luxury transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-black" />
                  <span>Onayla ve Yevmiyeye Kaydet</span>
                </button>
              )}

              <button
                onClick={() => setSelectedDocForPreview(null)}
                className="w-full py-2 bg-white/[0.04] hover:bg-white/10 text-slate-400 hover:text-white rounded-lg text-xs font-mono transition-colors"
              >
                Pencereyi Kapat
              </button>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
