import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  Download,
  Printer,
  QrCode,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function SmmReceiptModal() {
  const { isSmmModalOpen, setIsSmmModalOpen, addToast, firmInfo, demoAdmin } = useApp();

  if (!isSmmModalOpen) return null;

  const payment = isSmmModalOpen;

  const handleDownload = () => {
    addToast('GİB e-SMM İndirildi', `${payment.smmNo}.pdf olarak indirildi.`, 'success');
  };

  const handlePrint = () => {
    addToast('Yazdırma Kuyruğuna Alındı', `${payment.smmNo} e-Arşiv formatında yazdırılıyor.`, 'info');
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-2.5 min-w-0">
            <ShieldCheck className="w-4 h-4 text-pine-700 shrink-0" />
            <h3 className="font-bold text-sm text-ink-900 font-mono truncate">
              GİB e-SMM Makbuzu ({payment.smmNo})
            </h3>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <button onClick={handleDownload} className="p-1.5 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors" title="İndir">
              <Download className="w-4 h-4" />
            </button>
            <button onClick={handlePrint} className="p-1.5 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors" title="Yazdır">
              <Printer className="w-4 h-4" />
            </button>
            <button onClick={() => setIsSmmModalOpen(null)} className="p-1.5 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors" title="Kapat">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Receipt */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="bg-paper-50 p-6 rounded-xl border border-line space-y-4">

            {/* Top Bar */}
            <div className="flex justify-between items-start border-b border-line pb-4 gap-4">
              <div className="min-w-0">
                <span className="font-bold text-sm text-ink-900 tracking-wide">GİB E-SERBEST MESLEK MAKBUZU</span>
                <p className="text-[10px] text-ink-400 font-mono mt-1.5">GİB İmzalı ETTN: 2026-SMM-{payment.id}</p>
                <p className="text-[10px] text-ink-400 font-mono">Düzenleme Tarihi: {payment.issueDate}</p>
              </div>
              <div className="text-right shrink-0">
                <QrCode className="w-10 h-10 text-ink-400 inline-block" />
                <span className="block text-[9px] font-mono text-success-deep mt-1">GİB Dijital İmzalı</span>
              </div>
            </div>

            {/* Parties */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-lg border border-line">
              <div>
                <span className="font-bold text-ink-400 uppercase text-[9px] font-mono tracking-[0.12em] block">Düzenleyen (SMMM)</span>
                <p className="font-bold text-ink-900 mt-1 text-[13px]">{firmInfo.legalName}</p>
                <p className="text-ink-500 text-xs">{demoAdmin.name} (Ruhsat: {demoAdmin.licenseNo})</p>
                <p className="text-ink-400 text-xs font-mono">Maslak V.D. - 8290192831</p>
              </div>
              <div>
                <span className="font-bold text-ink-400 uppercase text-[9px] font-mono tracking-[0.12em] block">Hizmeti Alan (Mükellef)</span>
                <p className="font-bold text-ink-900 mt-1 text-[13px]">{payment.client}</p>
                <p className="text-ink-500 text-xs">Dönem: {payment.period}</p>
                <p className="text-ink-400 text-xs">
                  Durum:{' '}
                  <span className={cn(
                    'font-bold',
                    payment.status === 'Ödendi' ? 'text-success-deep' : payment.status === 'Gecikmede' ? 'text-danger' : 'text-warning-deep'
                  )}>
                    {payment.status}
                  </span>
                </p>
              </div>
            </div>

            {/* Calculations */}
            <div className="overflow-x-auto">
              <table className="w-full text-left border border-line rounded-lg overflow-hidden min-w-[480px] bg-white">
                <thead className="bg-paper-100 text-ink-400 text-[9px] font-mono uppercase tracking-[0.1em]">
                  <tr>
                    <th className="p-2.5">Açıklama</th>
                    <th className="p-2.5 text-right">Brüt Ücret</th>
                    <th className="p-2.5 text-right">KDV (%20)</th>
                    <th className="p-2.5 text-right">Toplam</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line text-[11px]">
                  <tr>
                    <td className="p-2.5 text-ink-600">{payment.period} SMMM Mali Müşavirlik & Vergi Denetim</td>
                    <td className="p-2.5 text-right font-mono text-ink-700">{payment.amount}</td>
                    <td className="p-2.5 text-right font-mono text-success-deep">{payment.vatAmount}</td>
                    <td className="p-2.5 text-right font-mono font-bold text-ink-900">{payment.totalAmount}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Summary */}
            <div className="flex justify-between items-center pt-2 border-t border-line">
              <div className="flex items-center gap-1.5 text-success-deep text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>GİB Portalı ve e-Defter sistemine işlenmiştir.</span>
              </div>
              <div className="text-right">
                <span className="text-ink-400 text-xs mr-2">Net Tutar:</span>
                <span className="font-mono font-bold text-ink-900">{payment.totalAmount}</span>
              </div>
            </div>

            {/* Method */}
            <div className="flex items-center justify-between text-[11px] font-mono text-ink-500 bg-white p-3 rounded-lg border border-line">
              <span>Ödeme Yöntemi:</span>
              <span className="font-bold text-ink-900">{payment.method}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
