import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Download, Printer, ShieldCheck, QrCode, CheckCircle2 } from 'lucide-react';

export default function SmmReceiptModal() {
  const { isSmmModalOpen, setIsSmmModalOpen, addToast } = useApp();

  if (!isSmmModalOpen) return null;

  const payment = isSmmModalOpen;

  const handlePrint = () => {
    addToast('Yazdırılıyor', `${payment.smmNo} numaralı e-SMM makbuzu yazıcıya gönderildi.`, 'info');
  };

  const handleDownload = () => {
    addToast('GİB e-SMM İndirildi', `${payment.smmNo}.pdf olarak indirildi.`, 'success');
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-2xl bg-[#0b0d13] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh] transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-black/60 text-white flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <h3 className="font-bold text-sm text-white font-mono">GİB e-SMM Makbuzu ({payment.smmNo})</h3>
          </div>
          <div className="flex items-center space-x-1.5">
            <button onClick={handleDownload} className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06]">
              <Download className="w-4 h-4" />
            </button>
            <button onClick={handlePrint} className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06]">
              <Printer className="w-4 h-4" />
            </button>
            <button onClick={() => setIsSmmModalOpen(null)} className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06]">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Makbuz İçeriği */}
        <div className="p-6 overflow-y-auto bg-[#0e1119] space-y-4 text-xs font-mono">
          <div className="bg-[#11141d] p-6 rounded-xl border border-white/[0.08] shadow-cinema space-y-4">
            
            {/* Top Bar */}
            <div className="flex justify-between items-start border-b border-white/[0.06] pb-4">
              <div>
                <span className="font-bold text-sm text-white tracking-wider font-sans">GİB E-SERBEST MESLEK MAKBUZU</span>
                <p className="text-[10px] text-slate-500 mt-1">GİB İmzalı ETTN: 2026-SMM-{payment.id}</p>
                <p className="text-[10px] text-slate-500">Düzenleme Tarihi: {payment.issueDate}</p>
              </div>
              <div className="text-right">
                <QrCode className="w-10 h-10 text-slate-400 inline-block" />
                <span className="block text-[9px] text-emerald-400 font-mono">GİB Dijital İmzalı</span>
              </div>
            </div>

            {/* Parties */}
            <div className="grid grid-cols-2 gap-4 bg-black/40 p-4 rounded-lg border border-white/[0.06] text-xs">
              <div>
                <span className="font-bold text-slate-500 uppercase text-[9px] block">Düzenleyen (SMMM)</span>
                <p className="font-bold text-white mt-0.5 font-sans">VELOX MALİ MÜŞAVİRLİK A.Ş.</p>
                <p className="text-slate-400">SMMM Kemal Yıldız (Ruhsat: 349102)</p>
                <p className="text-slate-500">Maslak V.D. - 8290192831</p>
              </div>
              <div>
                <span className="font-bold text-slate-500 uppercase text-[9px] block">Hizmeti Alan (Mükellef)</span>
                <p className="font-bold text-white mt-0.5 font-sans">{payment.client}</p>
                <p className="text-slate-400">Dönem: {payment.period}</p>
                <p className="text-slate-500">Durum: <span className="text-emerald-400 font-bold">{payment.status}</span></p>
              </div>
            </div>

            {/* Calculations Table */}
            <table className="w-full text-left border border-white/[0.06] rounded-lg overflow-hidden">
              <thead className="bg-white/[0.03] text-slate-400 text-[9px] uppercase">
                <tr>
                  <th className="p-2.5">Açıklama</th>
                  <th className="p-2.5 text-right">Brüt Ücret</th>
                  <th className="p-2.5 text-right">KDV (%20)</th>
                  <th className="p-2.5 text-right">Stopaj Tevkifatı</th>
                  <th className="p-2.5 text-right">Net Tahsil Edilen</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04] text-[11px]">
                <tr>
                  <td className="p-2.5 text-slate-300 font-sans">{payment.period} SMMM Mali Müşavirlik & Vergi Denetim</td>
                  <td className="p-2.5 text-right text-slate-300">{payment.amount}</td>
                  <td className="p-2.5 text-right text-emerald-400">{payment.vatAmount}</td>
                  <td className="p-2.5 text-right text-rose-400">-{payment.vatAmount}</td>
                  <td className="p-2.5 text-right font-bold text-white">{payment.amount}</td>
                </tr>
              </tbody>
            </table>

            {/* Summary */}
            <div className="flex justify-between items-center pt-2 border-t border-white/[0.06]">
              <div className="flex items-center space-x-1 text-emerald-400 text-[11px]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>GİB Portalı ve e-Defter sistemine işlenmiştir.</span>
              </div>
              <div className="text-right">
                <span className="text-slate-400 text-xs mr-2">Net Tutar:</span>
                <span className="text-sm font-bold text-white">{payment.totalAmount}</span>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-black/60 border-t border-white/[0.08] flex justify-end">
          <button
            onClick={() => setIsSmmModalOpen(null)}
            className="px-5 py-2 rounded-lg bg-white hover:bg-slate-200 text-black text-xs font-bold uppercase tracking-wider transition-colors"
          >
            Kapat
          </button>
        </div>
      </div>
    </div>
  );
}
