import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  CheckSquare,
  FileText,
  Calendar,
  CreditCard,
  TrendingUp,
  AlertTriangle,
  Sparkles,
  ArrowRight,
  Send,
  ShieldCheck,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminDashboard() {
  const {
    clients,
    tasks,
    documents,
    taxCalendar,
    payments,
    staff,
    setAdminTab,
    openClientDetail,
    sendMissingDocAlert,
    setIsAiAssistantOpen,
    setSelectedDocForPreview
  } = useApp();

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Header */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] shadow-cinema flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1">
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-slate-300 border border-white/10">
              SMMM Yönetici Kokpiti
            </span>
            <span className="text-slate-400 font-mono text-xs">Ağustos 2026 Beyan Dönemi</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            Hoş Geldiniz, SMMM Kemal Yıldız
          </h1>
          <p className="text-xs text-slate-400">
            Portföydeki 48 kurumsal mükellefin 44'ünde mizan mutabakatı tamamlandı. Bu hafta 12 KDV-1 beyannamesi onay bekliyor.
          </p>
        </div>

        <div className="flex items-center space-x-2 shrink-0">
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
          >
            <Sparkles className="w-3.5 h-3.5 text-black" />
            <span>Aura AI Masası</span>
          </button>
          <button
            onClick={() => setAdminTab('calendar')}
            className="px-4 py-2 bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 rounded-lg text-xs font-medium border border-white/10 transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Vergi Takvimi</span>
          </button>
        </div>
      </div>

      {/* 6 Key Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-6 gap-3 sm:gap-4">
        
        <div 
          onClick={() => setAdminTab('clients')}
          className="p-4 rounded-xl obsidian-card border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-1"
        >
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            <span>Toplam Portföy</span>
            <Users className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-2xl font-black text-white ledger-mono">48</p>
          <p className="text-[10px] text-emerald-400 font-mono">+3 Bu Çeyrek Yeni</p>
        </div>

        <div 
          onClick={() => setAdminTab('tasks')}
          className="p-4 rounded-xl obsidian-card border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-1"
        >
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            <span>Açık Görevler</span>
            <CheckSquare className="w-3.5 h-3.5 text-indigo-400" />
          </div>
          <p className="text-2xl font-black text-white ledger-mono">19</p>
          <p className="text-[10px] text-amber-400 font-mono">5 Acil Öncelikli</p>
        </div>

        <div 
          onClick={() => setAdminTab('documents')}
          className="p-4 rounded-xl obsidian-card border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-1"
        >
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            <span>Eksik Evrak</span>
            <FileText className="w-3.5 h-3.5 text-rose-400" />
          </div>
          <p className="text-2xl font-black text-rose-400 ledger-mono">6 Belge</p>
          <p className="text-[10px] text-rose-400 font-mono">2 Mükellefte Kritik</p>
        </div>

        <div 
          onClick={() => setAdminTab('calendar')}
          className="p-4 rounded-xl obsidian-card border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-1"
        >
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            <span>Son 4 Gün (KDV)</span>
            <Calendar className="w-3.5 h-3.5 text-amber-400" />
          </div>
          <p className="text-2xl font-black text-white ledger-mono">12 Beyan</p>
          <p className="text-[10px] text-emerald-400 font-mono">41/48 Tamamlandı</p>
        </div>

        <div 
          onClick={() => setAdminTab('payments')}
          className="p-4 rounded-xl obsidian-card border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-1"
        >
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            <span>Aylık Tahsilat</span>
            <CreditCard className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          <p className="text-2xl font-black text-emerald-400 ledger-mono">%95.1</p>
          <p className="text-[10px] text-slate-400 font-mono">₺684K / ₺720K</p>
        </div>

        <div 
          onClick={() => setAdminTab('crm')}
          className="p-4 rounded-xl obsidian-card border border-white/[0.08] hover:border-white/20 transition-all cursor-pointer space-y-1"
        >
          <div className="flex items-center justify-between text-slate-400 text-[10px] font-mono uppercase tracking-wider">
            <span>Satış Hattı (CRM)</span>
            <TrendingUp className="w-3.5 h-3.5 text-white" />
          </div>
          <p className="text-2xl font-black text-white ledger-mono">3 Lead</p>
          <p className="text-[10px] text-emerald-400 font-mono">₺82.5K / Ay Potansiyel</p>
        </div>

      </div>

      {/* Critical Alert Bar */}
      <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex flex-col md:flex-row md:items-center justify-between gap-3 text-xs">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-amber-500/20 text-amber-400 rounded-lg shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-amber-200">Kritik Beyan Öncesi Eksik Evrak Uyarısı</h4>
            <p className="text-slate-400 mt-0.5">
              <strong>Artisan Gurme Gıda Ltd.</strong> (İhracat GÇB) ve <strong>Pulse Dijital Medya Ltd.</strong> (Meta 2 No KDV) için evraklar eksiktir.
            </p>
          </div>
        </div>

        <button
          onClick={() => sendMissingDocAlert('Artisan & Pulse', 'Temmuz KDV-1 & Tevkifat Evrakları')}
          className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-[11px] rounded-lg flex items-center space-x-1.5 shrink-0 transition-all shadow-sm"
        >
          <Send className="w-3.5 h-3.5 text-black" />
          <span>Toplu SMS / WhatsApp İlet</span>
        </button>
      </div>

      {/* 2-Column: Client Portfolio & Staff Capacity */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left 7 Cols: Client Portfolio Status */}
        <div className="lg:col-span-7 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-sm">Müşteri Portföyü ve Dönem Durumu</h3>
              <p className="text-[11px] text-slate-400 font-mono">KDV-1, SGK ve Mizan Tamamlanma Hızı</p>
            </div>
            <button
              onClick={() => setAdminTab('clients')}
              className="text-xs font-mono text-slate-300 hover:text-white flex items-center space-x-1"
            >
              <span>Tümünü Listele (48)</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="divide-y divide-white/[0.06] text-xs font-mono">
            {clients.slice(0, 5).map((cl) => (
              <div 
                key={cl.id} 
                className="py-3 flex items-center justify-between hover:bg-white/[0.02] p-2 rounded-xl transition-colors cursor-pointer"
                onClick={() => openClientDetail(cl.id)}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-white text-black font-black text-xs flex items-center justify-center">
                    {cl.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-white font-sans text-xs">{cl.shortName}</h4>
                    <p className="text-slate-400 text-[10px]">
                      VN: {cl.taxNumber} · Sorumlu: {cl.assignedCPA.name.split(' ')[1]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <span className={cn(
                      "text-[10px] px-2 py-0.5 rounded font-bold",
                      cl.missingDocsCount > 0 
                        ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" 
                        : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    )}>
                      {cl.missingDocsCount > 0 ? `${cl.missingDocsCount} Eksik` : 'Eksiksiz'}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-0.5 font-sans">KDV: {cl.kdvStatus.split(' ')[0]}</span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right 5 Cols: Staff Workload */}
        <div className="lg:col-span-5 p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-white text-sm">SMMM Ekip İş Yükü</h3>
              <p className="text-[11px] text-slate-400 font-mono">Kapasite ve şirket dağılımı</p>
            </div>
            <button
              onClick={() => setAdminTab('staff')}
              className="text-xs font-mono text-slate-300 hover:text-white"
            >
              Yönet
            </button>
          </div>

          <div className="space-y-4 text-xs">
            {staff.map((st) => (
              <div key={st.id} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <img src={st.avatar} alt="" className="w-5 h-5 rounded-md object-cover" />
                    <span className="font-bold text-white font-sans">{st.name}</span>
                  </div>
                  <div className="text-right font-mono text-[11px]">
                    <span className="text-white">{st.clientsCount} Şirket</span>
                    <span className="text-slate-400 ml-1">({st.workload}%)</span>
                  </div>
                </div>
                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    style={{ width: `${st.workload}%` }}
                    className={cn(
                      "h-full rounded-full",
                      st.workload > 80 ? "bg-amber-400" : "bg-white"
                    )}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-white/[0.06]">
            <div className="flex items-center justify-between text-xs text-slate-400 bg-black/40 p-3 rounded-xl font-mono">
              <span>Toplam Ekip Verimlilik Skoru:</span>
              <span className="font-bold text-emerald-400">%94.2 (Mükemmel)</span>
            </div>
          </div>
        </div>

      </div>

      {/* Central Document Ingestion Table */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-white text-sm">Merkezi Evrak Havuzu ve OCR Kayıtları</h3>
            <p className="text-[11px] text-slate-400 font-mono">Son 24 saatte sisteme iletilen fatura ve ekstreler</p>
          </div>
          <button
            onClick={() => setAdminTab('documents')}
            className="text-xs font-mono text-slate-300 hover:text-white flex items-center space-x-1"
          >
            <span>Evrak Masasını Aç</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
              <tr>
                <th className="p-3">Müşteri</th>
                <th className="p-3">Evrak Adı</th>
                <th className="p-3">Kategori</th>
                <th className="p-3">Tutar</th>
                <th className="p-3">OCR Skoru</th>
                <th className="p-3">Durum</th>
                <th className="p-3 text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {documents.slice(0, 5).map((doc) => (
                <tr key={doc.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3 font-bold text-white font-sans">{doc.client.split(' ')[0]}</td>
                  <td className="p-3 text-slate-300 truncate max-w-[200px] font-sans">{doc.name}</td>
                  <td className="p-3 text-slate-400 font-sans">{doc.category}</td>
                  <td className="p-3 font-bold text-white">{doc.amount}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                      {doc.ocrConfidence}
                    </span>
                  </td>
                  <td className="p-3">
                    <span className={cn(
                      "px-2 py-0.5 rounded text-[10px] font-bold font-sans",
                      doc.status === 'Onaylandı' ? 'bg-emerald-500/10 text-emerald-400' : 'bg-amber-500/10 text-amber-300'
                    )}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => setSelectedDocForPreview(doc)}
                      className="px-2.5 py-1 bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 rounded text-[11px] font-sans"
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
