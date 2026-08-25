import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  FileText,
  Calendar,
  TrendingUp,
  CheckCircle2,
  UploadCloud,
  ArrowRight,
  Sparkles,
  Download,
  CreditCard,
  Zap,
  Clock,
  Terminal
} from 'lucide-react';
import { formatCurrency } from '../../utils/cn';

export default function PortalOverview() {
  const {
    clients,
    documents,
    taxCalendar,
    setPortalTab,
    setSelectedDocForPreview,
    setIsAiAssistantOpen,
    addToast
  } = useApp();

  const client = clients.find((c) => c.id === 'cli-1') || clients[0];
  const clientDocs = documents.filter((d) => d.clientId === 'cli-1');

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Banner */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] shadow-cinema flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              ● 4691 Teknopark Kurumlar Muafiyeti Aktif
            </span>
            <span className="text-slate-400 font-mono text-xs">{client.taxOffice}</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {client.name}
          </h1>
          <p className="text-xs text-slate-400">
            Ağustos 2026 mali dönemi mizan mutabakatı eksiksizdir. Q3 KDV iade dosyası YMM onayına sunuldu.
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setPortalTab('documents')}
            className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
          >
            <UploadCloud className="w-3.5 h-3.5 text-black" />
            <span>Evrak Yükle</span>
          </button>
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 rounded-lg text-xs font-medium border border-white/10 transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-slate-300" />
            <span>Aura AI Analizi</span>
          </button>
        </div>
      </div>

      {/* 4 Financial KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <div className="p-5 rounded-xl obsidian-card border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-widest">
            <span>Nakit Runway & Burn Rate</span>
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <div className="text-2xl font-extrabold text-white ledger-mono">{client.cashRunwayMonths}</div>
          <p className="text-[10px] text-slate-400 font-mono">Aylık Tüketim: {client.monthlyBurnRate}</p>
        </div>

        <div className="p-5 rounded-xl obsidian-card border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-widest">
            <span>4691 SGK & Bordro Teşviki</span>
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <div className="text-2xl font-extrabold text-emerald-400 ledger-mono">₺38,400 / Ay</div>
          <p className="text-[10px] text-slate-400 font-mono">34 Mühendis Gelir Stopaj Terkini</p>
        </div>

        <div className="p-5 rounded-xl obsidian-card border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-widest">
            <span>Temmuz KDV-1 Beyannamesi</span>
            <FileText className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <div className="text-xl font-bold text-white">Taslak Onaylandı</div>
          <p className="text-[10px] text-emerald-400 font-mono">GİB Onayına 4 Gün Kaldı</p>
        </div>

        <div className="p-5 rounded-xl obsidian-card border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-widest">
            <span>Q3 Net Hasılat</span>
            <CreditCard className="w-3.5 h-3.5 text-slate-400" />
          </div>
          <div className="text-2xl font-extrabold text-white ledger-mono">{client.quarterlyRevenue}</div>
          <p className="text-[10px] text-slate-400 font-mono">Faaliyet Kâr Marjı: {client.netMargin}</p>
        </div>

      </div>

      {/* 2-Column: Live Process Flow & Upcoming Regulatory Deadlines */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 7 Cols: Active Process Pipeline */}
        <div className="lg:col-span-7 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-sm">Dönemsel Beyanname ve Müşavirlik Süreçleri</h3>
              <p className="text-[11px] text-slate-400 font-mono">Ağustos 2026 İşlem Takibi</p>
            </div>
            <button
              onClick={() => setPortalTab('processes')}
              className="text-xs font-mono text-slate-300 hover:text-white flex items-center space-x-1"
            >
              <span>Detaylı Süreç Masası</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Temmuz 2026 KDV-1 Beyannamesi (0015)</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-200">
                  %85 Tamamlandı
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Teknopark KDV Geçici 20/1 yazılım istisnası kontrol edildi. GİB taslak onayında.</p>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[85%] h-full bg-white rounded-full"></div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Muhtasar ve SGK Prim Hizmet Bildirimi</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  %100 Tahakkuk Alındı
                </span>
              </div>
              <p className="text-[11px] text-slate-400">34 personel bordro icmali onaylandı, resmi tahakkuk sisteme yüklendi.</p>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-full h-full bg-emerald-400 rounded-full"></div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-bold text-white">Mayıs 2026 E-Defter Berat Yüklemesi</span>
                <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/10 text-slate-300">
                  %50 Şematron Kontrolünde
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Yevmiye ve Kebir berat dosyaları zaman damgası hazırlığında.</p>
              <div className="w-full h-1 bg-slate-800 rounded-full overflow-hidden">
                <div className="w-[50%] h-full bg-slate-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 5 Cols: Regulatory Tax Countdown */}
        <div className="lg:col-span-5 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-white text-sm">Resmi Vergi & SGK Terminleri</h3>
            <span className="text-[10px] font-mono text-slate-400">GİB Takvimi</span>
          </div>

          <div className="space-y-2.5 text-xs">
            {taxCalendar.slice(0, 3).map((tax) => (
              <div key={tax.id} className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] space-y-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">{tax.title}</span>
                  <span className="px-2 py-0.5 bg-white/10 text-slate-200 rounded text-[10px] font-mono">
                    {tax.remainingDays > 0 ? `${tax.remainingDays} Gün Kaldı` : 'Kapatıldı'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono">
                  <span>Termin: {tax.deadline}</span>
                  <span className="text-emerald-400">{tax.status}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setPortalTab('tax-schedule')}
            className="w-full py-2.5 bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 rounded-lg text-xs font-semibold border border-white/10 transition-colors flex items-center justify-center space-x-1.5"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Tüm Vergi Takvimini & Tahakkukları Aç</span>
          </button>
        </div>

      </div>

      {/* Recent Ledger Ingestion Activity */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-white text-sm">Son İşlenen Fatura ve Yevmiye Hareketleri</h3>
            <p className="text-[11px] text-slate-400 font-mono">OCR doğrulaması ve tekdüzen hesap eşleşmeleri</p>
          </div>
          <button
            onClick={() => setPortalTab('documents')}
            className="text-xs font-mono text-slate-300 hover:text-white flex items-center space-x-1"
          >
            <span>Tüm Arşiv ({clientDocs.length})</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
              <tr>
                <th className="p-3">Belge Adı</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Tarih</th>
                <th className="p-3">Tutar</th>
                <th className="p-3">OCR Skoru</th>
                <th className="p-3">Hesap Kodu</th>
                <th className="p-3 text-right">Önizle</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {clientDocs.map((doc) => (
                <tr key={doc.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-semibold text-white flex items-center space-x-2">
                    <FileText className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span className="truncate max-w-[220px] font-sans">{doc.name}</span>
                  </td>
                  <td className="p-3 text-slate-400 font-sans">{doc.category}</td>
                  <td className="p-3 text-slate-400">{doc.uploadDate}</td>
                  <td className="p-3 font-bold text-white">{doc.amount}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      ✓ {doc.ocrConfidence}
                    </span>
                  </td>
                  <td className="p-3 text-slate-400 text-[11px] truncate max-w-[150px]">{doc.assignedAccount}</td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => setSelectedDocForPreview(doc)}
                      className="px-2.5 py-1 bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 rounded text-[11px] font-sans transition-colors"
                    >
                      İncele
                    </button>
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
