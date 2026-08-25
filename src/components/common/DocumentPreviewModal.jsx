import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  X,
  Download,
  Printer,
  CheckCircle2,
  Sparkles,
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
  const isApproved = doc.status === 'Onaylandı';

  const handleDownload = () => {
    addToast('GİB e-Belge İndirildi', `${doc.name} PDF formatında indiriliyor.`, 'info');
  };

  const handlePrint = () => {
    addToast('Yazıcı Kuyruğuna Alındı', `${doc.name} resmi e-Arşiv formatında hazırlandı.`, 'info');
  };

  const handleClose = () => setSelectedDocForPreview(null);

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-3xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-3 min-w-0">
            <div className="p-2 bg-pine-50 text-pine-700 rounded-lg border border-pine-100 shrink-0">
              <FileText className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <h3 className="font-bold text-sm text-ink-900 truncate">{doc.name}</h3>
                <span className="badge badge-neutral">{doc.category}</span>
              </div>
              <p className="text-[11px] text-ink-400 font-mono truncate">{doc.client} · Yükleme: {doc.uploadDate}</p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 shrink-0">
            <button onClick={handleDownload} className="p-1.5 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors" title="İndir">
              <Download className="w-4 h-4" />
            </button>
            <button onClick={handlePrint} className="p-1.5 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors" title="Yazdır">
              <Printer className="w-4 h-4" />
            </button>
            <button onClick={handleClose} className="p-1.5 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors" title="Kapat">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-12 gap-6">

          {/* Document sheet */}
          <div className="md:col-span-7">
            <div className="border border-line rounded-xl overflow-hidden">
              <div className="bg-pine-700 px-5 py-3 flex items-center justify-between">
                <span className="font-mono text-[10px] tracking-[0.16em] uppercase text-white/90">e-Arşiv Fatura / Makbuz</span>
                <span className="font-mono text-[10px] text-pine-200">{doc.uploadDate}</span>
              </div>
              <div className="p-6 space-y-4 bg-paper-50">
                <div>
                  <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-400">Tedarikçi</p>
                  <p className="font-bold text-ink-900 text-sm mt-1">{doc.supplier || doc.client}</p>
                </div>

                <div className="flex items-end gap-6 pt-2 border-t border-line">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-ink-400">Fatura Tutarı</p>
                    <p className="font-mono text-3xl font-semibold text-ink-900 tracking-tight mt-1">{doc.amount}</p>
                  </div>
                  <span className={cn('badge mb-1', isApproved ? 'badge-success' : 'badge-warning')}>
                    {isApproved && <CheckCircle2 className="w-3 h-3" />}
                    {doc.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-3 pt-2 border-t border-line">
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400">KDV</p>
                    <p className="font-mono font-semibold text-ink-900 text-sm mt-0.5">{doc.vatAmount || '-'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400">Oran</p>
                    <p className="font-mono font-semibold text-ink-900 text-sm mt-0.5">{doc.vatRate || '-'}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400">Dosya</p>
                    <p className="font-mono font-semibold text-ink-900 text-sm mt-0.5">{doc.fileSize || '-'}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* OCR & processing panel */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-4 rounded-xl bg-success-soft border border-success/20 flex items-center gap-3">
              <div className="p-2 bg-white rounded-lg text-success-deep shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <p className="font-bold text-xs text-success-deep">OCR Doğrulandı · {doc.ocrConfidence}</p>
                <p className="text-[11px] text-ink-600 mt-0.5">Matrah, KDV ve tevkifat alanları şematron ile kontrol edildi.</p>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-line bg-paper-50 space-y-2.5">
              <div className="flex items-start gap-2.5">
                <Tag className="w-3.5 h-3.5 text-pine-700 shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <p className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400">Atanan Hesap</p>
                  <p className="text-[13px] font-semibold text-ink-900 mt-0.5 leading-snug">{doc.assignedAccount || 'Tekdüzen eşlemesi bekleniyor'}</p>
                </div>
              </div>
            </div>

            {doc.notes && (
              <div className="p-4 rounded-xl bg-gold-50 border border-gold-200">
                <p className="text-[10px] font-mono uppercase tracking-[0.14em] text-gold-700 flex items-center gap-1.5 mb-1.5">
                  <Sparkles className="w-3 h-3" />
                  AI İşlem Notu
                </p>
                <p className="text-xs text-gold-700 leading-relaxed">{doc.notes}</p>
              </div>
            )}

            <div className="flex flex-col gap-2">
              {!isApproved && (
                <button
                  onClick={() => {
                    approveDocument(doc.id);
                    handleClose();
                  }}
                  className="btn btn-primary btn-md w-full"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Yevmiyeye İşle & Onayla</span>
                </button>
              )}
              <button onClick={handleDownload} className="btn btn-outline btn-md w-full">
                <Download className="w-4 h-4 text-pine-700" />
                <span>PDF İndir</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
