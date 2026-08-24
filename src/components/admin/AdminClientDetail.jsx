import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Building2,
  FileText,
  CreditCard,
  CheckSquare,
  StickyNote,
  Send,
  ArrowLeft,
  Calendar,
  Receipt,
  ShieldCheck
} from 'lucide-react';
import { cn, formatCurrency } from '../../utils/cn';

export default function AdminClientDetail() {
  const {
    selectedClient,
    documents,
    tasks,
    payments,
    setAdminTab,
    setSelectedDocForPreview,
    setIsSmmModalOpen,
    sendMissingDocAlert,
    addToast
  } = useApp();

  const [activeSubTab, setActiveSubTab] = useState('info');
  const [newNote, setNewNote] = useState('');
  const [notesList, setNotesList] = useState([
    {
      id: 1,
      author: 'SMMM Kemal Yıldız',
      date: '2026-08-22 14:30',
      text: '4691 Teknopark Ar-Ge gelir vergisi istisnası bordro icmaline uygulandı. YMM Tasdik raporu Q3 KDV iadesi için hazırlandı.'
    },
    {
      id: 2,
      author: 'SMMM Burak Demir',
      date: '2026-08-15 10:15',
      text: 'AWS yurt dışı faturası için 2 No\'lu KDV matrahı hesaplandı ve 770.01 hesabına borç kaydedildi.'
    }
  ]);

  const clientDocs = documents.filter((d) => d.clientId === selectedClient.id || d.clientId === 'all');
  const clientTasks = tasks.filter((t) => t.clientId === selectedClient.id || t.clientId === 'all');
  const clientPayments = payments.filter((p) => p.clientId === selectedClient.id);

  const subTabs = [
    { id: 'info', label: 'Firma & Sicil Bilgileri', icon: Building2 },
    { id: 'docs', label: 'Evraklar & OCR Masası', icon: FileText, count: clientDocs.length },
    { id: 'tax-ops', label: 'Beyanname & SGK Adımları', icon: Calendar },
    { id: 'payments', label: 'Cari Hesap & e-SMM', icon: CreditCard },
    { id: 'tasks', label: 'Görevler & Hatırlatıcılar', icon: CheckSquare, count: clientTasks.length },
    { id: 'notes', label: 'SMMM Denetim Notları', icon: StickyNote },
  ];

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;

    setNotesList([
      {
        id: Date.now(),
        author: 'SMMM Kemal Yıldız',
        date: 'Bugün ' + new Date().toLocaleTimeString('tr-TR', { hour: '2-digit', minute: '2-digit' }),
        text: newNote
      },
      ...notesList
    ]);
    setNewNote('');
    addToast('Denetim Notu İşlendi', 'Mali müşavir çalışma kağıtlarına yeni kayıt eklendi.', 'success');
  };

  const handleIssueSmm = () => {
    const paymentItem = clientPayments[0] || {
      id: `pay-${Date.now()}`,
      client: selectedClient.name,
      period: 'Ağustos 2026',
      amount: formatCurrency(selectedClient.monthlyFee),
      vatAmount: formatCurrency(selectedClient.monthlyFee * 0.20),
      totalAmount: formatCurrency(selectedClient.monthlyFee * 1.20),
      smmNo: `SMM2026-${Math.floor(100000 + Math.random() * 900000)}`,
      issueDate: '2026-08-24',
      status: 'Ödendi'
    };
    setIsSmmModalOpen(paymentItem);
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Bar */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => setAdminTab('clients')}
          className="flex items-center space-x-1.5 text-xs text-slate-400 hover:text-white font-mono transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Tüm Portföy Listesine Dön</span>
        </button>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => sendMissingDocAlert(selectedClient.shortName, 'Eksik Evrak Listesi')}
            className="px-3 py-1.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 font-mono text-xs border border-amber-500/30 flex items-center space-x-1.5 transition-colors"
          >
            <Send className="w-3.5 h-3.5" />
            <span>SMS / WhatsApp ile Evrak İste</span>
          </button>

          <button
            onClick={handleIssueSmm}
            className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wider text-xs flex items-center space-x-1.5 shadow-luxury transition-all"
          >
            <Receipt className="w-3.5 h-3.5 text-black" />
            <span>e-SMM Kes & Görüntüle</span>
          </button>
        </div>
      </div>

      {/* 360° Header Banner */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] shadow-cinema flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start space-x-4">
          <div className="w-14 h-14 rounded-xl bg-white text-black font-black text-xl flex items-center justify-center shadow-luxury">
            {selectedClient.name.substring(0, 2).toUpperCase()}
          </div>
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-lg sm:text-xl font-bold text-white tracking-tight">{selectedClient.name}</h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white/[0.06] text-slate-300 border border-white/10">
                {selectedClient.type}
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              VN: <strong className="text-white">{selectedClient.taxNumber}</strong> · {selectedClient.taxOffice} · {selectedClient.sector}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs border-t md:border-t-0 md:border-l border-white/[0.08] pt-3 md:pt-0 md:pl-6 font-mono">
          <div>
            <span className="text-[10px] uppercase text-slate-400 block">Aylık Ücret</span>
            <span className="font-bold text-white text-sm">{formatCurrency(selectedClient.monthlyFee)}</span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-slate-400 block">Evrak Durumu</span>
            <span className={cn(
              "font-bold text-xs px-2 py-0.5 rounded",
              selectedClient.missingDocsCount > 0 ? "bg-rose-500/20 text-rose-300" : "bg-emerald-500/20 text-emerald-300"
            )}>
              {selectedClient.missingDocsCount > 0 ? `${selectedClient.missingDocsCount} Eksik` : 'Eksiksiz'}
            </span>
          </div>
          <div>
            <span className="text-[10px] uppercase text-slate-400 block">Sorumlu SMMM</span>
            <span className="font-bold text-white font-sans">{selectedClient.assignedCPA.name.split(' ')[1]} {selectedClient.assignedCPA.name.split(' ')[2]}</span>
          </div>
        </div>
      </div>

      {/* Sub Tabs Bar */}
      <div className="flex flex-wrap gap-1.5 border-b border-white/[0.08] pb-2">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={cn(
                "flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all",
                isSelected
                  ? "bg-white text-black font-bold shadow-luxury"
                  : "bg-white/[0.02] text-slate-400 hover:text-white border border-white/[0.06]"
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={cn("px-1.5 py-0.2 rounded font-mono text-[10px] font-bold", isSelected ? "bg-black text-white" : "bg-white/10 text-slate-300")}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Sub Tab View */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08]">
        
        {activeSubTab === 'info' && (
          <div className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              <div className="space-y-3">
                <h3 className="font-bold text-white text-sm border-b border-white/[0.08] pb-2">Resmi Şirket & Sicil Bilgileri</h3>
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">Vergi Dairesi & No:</span>
                    <span className="font-bold text-white">{selectedClient.taxOffice} — {selectedClient.taxNumber}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">Ticaret Sicil No:</span>
                    <span className="text-white">{selectedClient.tradeRegisterNo}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">MERSİS Numarası:</span>
                    <span className="text-white text-[11px] truncate">{selectedClient.mersisNo}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">Kuruluş Tarihi:</span>
                    <span className="text-white">{selectedClient.foundedDate}</span>
                  </div>
                  <div className="flex justify-between py-1.5 border-b border-white/[0.04]">
                    <span className="text-slate-400">Tebligat Adresi:</span>
                    <span className="text-white max-w-xs text-right font-sans">{selectedClient.address}</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-bold text-white text-sm border-b border-white/[0.08] pb-2">Yetkili Kişi & Atanan SMMM</h3>
                
                <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] flex items-center space-x-3">
                  <img
                    src={selectedClient.authorizedPerson.avatar}
                    alt=""
                    className="w-10 h-10 rounded-lg object-cover border border-white/10"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-white">{selectedClient.authorizedPerson.name}</p>
                    <p className="text-slate-400">{selectedClient.authorizedPerson.title}</p>
                    <p className="text-slate-500 font-mono text-[10px] mt-0.5">{selectedClient.authorizedPerson.phone}</p>
                  </div>
                </div>

                <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] flex items-center space-x-3">
                  <img
                    src={selectedClient.assignedCPA.avatar}
                    alt=""
                    className="w-10 h-10 rounded-lg object-cover border border-white/10"
                  />
                  <div className="text-xs">
                    <p className="font-bold text-white">{selectedClient.assignedCPA.name}</p>
                    <p className="text-slate-400 font-mono">{selectedClient.assignedCPA.title}</p>
                  </div>
                </div>
              </div>

            </div>

            <div className="p-4 bg-black/40 rounded-xl border border-white/[0.06] space-y-1">
              <span className="font-mono text-[10px] uppercase text-emerald-400 block font-bold">Uygulanan Mevzuat ve Vergi Teşvikleri:</span>
              <p className="text-xs text-slate-300 leading-relaxed">{selectedClient.notes}</p>
            </div>
          </div>
        )}

        {activeSubTab === 'docs' && (
          <div className="space-y-4 animate-fade-in">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-sm">Müşteriye Ait Belgeler ({clientDocs.length})</h3>
              <button
                onClick={() => sendMissingDocAlert(selectedClient.shortName, 'Eksik Evrak')}
                className="px-3 py-1.5 bg-amber-500 hover:bg-amber-400 text-black font-bold uppercase tracking-wider text-[11px] rounded-lg transition-colors"
              >
                Eksik Evrak İste
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs font-mono">
                <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
                  <tr>
                    <th className="p-3">Belge Adı</th>
                    <th className="p-3">Kategori</th>
                    <th className="p-3">Tutar</th>
                    <th className="p-3">OCR Skoru</th>
                    <th className="p-3">Durum</th>
                    <th className="p-3 text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {clientDocs.map((doc) => (
                    <tr key={doc.id} className="hover:bg-white/[0.02] transition-colors">
                      <td className="p-3 font-semibold text-white flex items-center space-x-2">
                        <FileText className="w-3.5 h-3.5 text-indigo-400" />
                        <span className="font-sans">{doc.name}</span>
                      </td>
                      <td className="p-3 text-slate-400 font-sans">{doc.category}</td>
                      <td className="p-3 font-bold text-white">{doc.amount}</td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-bold border border-emerald-500/20">
                          {doc.ocrConfidence}
                        </span>
                      </td>
                      <td className="p-3">
                        <span className="px-2 py-0.5 rounded text-[10px] font-sans font-semibold bg-white/10 text-slate-200">
                          {doc.status}
                        </span>
                      </td>
                      <td className="p-3 text-right">
                        <button
                          onClick={() => setSelectedDocForPreview(doc)}
                          className="px-2.5 py-1 bg-white/[0.06] hover:bg-white/[0.12] text-slate-200 rounded text-xs font-sans font-semibold"
                        >
                          İncele & Onayla
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {activeSubTab === 'tax-ops' && (
          <div className="space-y-4 animate-fade-in text-xs">
            <h3 className="font-bold text-white text-sm">Ağustos 2026 Beyanname ve SGK Takibi</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="flex justify-between font-bold text-white">
                  <span>KDV-1 Beyannamesi</span>
                  <span className="text-emerald-400 font-mono">{selectedClient.kdvStatus}</span>
                </div>
                <p className="text-slate-400">Matrah ve indirim KDV mutabakatı yapıldı. Son bildirim: 28 Ağustos 2026.</p>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/[0.06] space-y-2">
                <div className="flex justify-between font-bold text-white">
                  <span>SGK ve Muhtasar Beyanı</span>
                  <span className="text-emerald-400 font-mono">{selectedClient.sgkStatus}</span>
                </div>
                <p className="text-slate-400">{selectedClient.employeeCount} çalışan bordrosu üzerinden teşvikli onaylandı.</p>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'payments' && (
          <div className="space-y-4 animate-fade-in text-xs">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-white text-sm">Cari Hesap ve Müşavirlik Makbuzları</h3>
              <button
                onClick={handleIssueSmm}
                className="px-3.5 py-1.5 bg-white text-black font-bold uppercase tracking-wider text-[11px] rounded-lg"
              >
                Yeni e-SMM Düzenle
              </button>
            </div>

            <div className="p-4 bg-black/40 rounded-xl border border-white/[0.06] flex items-center justify-between font-mono">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Güncel Bakiye:</span>
                <span className="font-extrabold text-base text-white">{formatCurrency(selectedClient.balance)}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase">Aylık Müşavirlik:</span>
                <span className="font-bold text-emerald-400 text-base">{formatCurrency(selectedClient.monthlyFee)}</span>
              </div>
            </div>
          </div>
        )}

        {activeSubTab === 'tasks' && (
          <div className="space-y-3 animate-fade-in text-xs">
            <h3 className="font-bold text-white text-sm">Müşteriye Özel Görevler ({clientTasks.length})</h3>
            <div className="space-y-2">
              {clientTasks.map((t) => (
                <div key={t.id} className="p-3 bg-black/40 rounded-xl border border-white/[0.06] flex items-center justify-between font-mono">
                  <div>
                    <span className="font-bold text-white font-sans text-xs">{t.title}</span>
                    <p className="text-slate-400 text-[10px]">Termin: {t.dueDate} · Sorumlu: {t.assignedTo}</p>
                  </div>
                  <span className="px-2 py-0.5 bg-white/10 text-slate-300 font-semibold rounded text-[10px]">
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSubTab === 'notes' && (
          <div className="space-y-4 animate-fade-in text-xs">
            <h3 className="font-bold text-white text-sm">SMMM Çalışma Kağıtları ve Denetim Notları</h3>
            
            <form onSubmit={handleAddNote} className="flex gap-2">
              <input
                type="text"
                placeholder="Bu mükellef için denetim notu veya YMM tasdik kaydı ekleyin..."
                value={newNote}
                onChange={(e) => setNewNote(e.target.value)}
                className="flex-1 px-3 py-2 bg-black/50 border border-white/10 rounded-lg text-xs text-white focus:outline-none focus:border-white font-sans"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-white text-black font-bold uppercase tracking-wider text-[11px] rounded-lg shrink-0"
              >
                Notu Kaydet
              </button>
            </form>

            <div className="space-y-2 pt-2">
              {notesList.map((n) => (
                <div key={n.id} className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] space-y-1">
                  <div className="flex justify-between text-slate-400 text-[11px] font-mono">
                    <span className="font-bold text-white">{n.author}</span>
                    <span>{n.date}</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed font-sans">{n.text}</p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>

    </div>
  );
}
