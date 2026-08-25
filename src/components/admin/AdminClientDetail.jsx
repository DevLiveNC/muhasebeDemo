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
  Sparkles
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminClientDetail() {
  const {
    selectedClient,
    documents,
    tasks,
    payments,
    taxCalendar,
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
      text: "AWS yurt dışı faturası için 2 No'lu KDV matrahı hesaplandı ve 770.01 hesabına borç kaydedildi."
    }
  ]);

  const clientDocs = documents.filter((d) => d.clientId === selectedClient.id || d.clientId === 'all');
  const clientTasks = tasks.filter((t) => t.clientId === selectedClient.id || t.clientId === 'all');
  const clientPayments = payments.filter((p) => p.clientId === selectedClient.id);

  const subTabs = [
    { id: 'info', label: 'Firma & Sicil', icon: Building2 },
    { id: 'docs', label: 'Evraklar & OCR', icon: FileText, count: clientDocs.length },
    { id: 'tax-ops', label: 'Beyanname & SGK', icon: Calendar },
    { id: 'payments', label: 'Cari & e-SMM', icon: CreditCard },
    { id: 'tasks', label: 'Görevler', icon: CheckSquare, count: clientTasks.length },
    { id: 'notes', label: 'Denetim Notları', icon: StickyNote }
  ];

  const handleAddNote = (e) => {
    e.preventDefault();
    if (!newNote.trim()) return;
    setNotesList((prev) => [
      {
        id: Date.now(),
        author: 'SMMM Kemal Yıldız',
        date: '2026-08-25 ' + new Date().toTimeString().slice(0, 5),
        text: newNote
      },
      ...prev
    ]);
    setNewNote('');
    addToast('Denetim Notu Eklendi', 'Not, müşteri 360° dosyasına kaydedildi.', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Back + Header */}
      <div>
        <button
          onClick={() => setAdminTab('clients')}
          className="flex items-center gap-1.5 text-xs font-semibold text-ink-400 hover:text-pine-800 transition-colors mb-4"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Portföy Listesine Dön</span>
        </button>

        <div className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-xl bg-pine-700 text-white font-serif font-bold text-lg flex items-center justify-center shrink-0">
              {selectedClient.name.substring(0, 2).toUpperCase()}
            </div>
            <div className="min-w-0">
              <h1 className="font-serif text-xl sm:text-2xl text-ink-900 leading-tight">{selectedClient.name}</h1>
              <p className="text-xs text-ink-400 mt-1">
                {selectedClient.type} · {selectedClient.sector} · {selectedClient.taxOffice}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="badge badge-success">{selectedClient.status}</span>
                {selectedClient.eInvoice && <span className="badge badge-pine">E-Fatura</span>}
                {selectedClient.eLedger && <span className="badge badge-pine">E-Defter</span>}
                {selectedClient.missingDocsCount > 0 && (
                  <span className="badge badge-danger">{selectedClient.missingDocsCount} Eksik Evrak</span>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 shrink-0">
            <button
              onClick={() => sendMissingDocAlert(selectedClient.name, 'Bekleyen Evrak Kapsamı')}
              className="btn btn-outline btn-sm"
            >
              <Send className="w-3.5 h-3.5 text-pine-700" />
              <span>Evrak İste (SMS)</span>
            </button>
            <button
              onClick={() => addToast('360° Rapor Oluşturuldu', `${selectedClient.shortName} yıllık denetim raporu PDF olarak indirildi.`, 'success')}
              className="btn btn-primary btn-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span>360° Rapor</span>
            </button>
          </div>
        </div>
      </div>

      {/* Sub Tabs */}
      <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
        {subTabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeSubTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={cn(
                'chip shrink-0',
                isActive ? 'chip-active' : 'chip-idle'
              )}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span className={cn(
                  'font-mono text-[10px] font-bold px-1.5 py-0.5 rounded',
                  isActive ? 'bg-white/20' : 'bg-paper-200'
                )}>
                  {tab.count}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* ---- INFO ---- */}
      {activeSubTab === 'info' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-fade-in">
          <div className="lg:col-span-7 card p-6 space-y-5">
            <h3 className="font-bold text-ink-900 text-sm">Sicil & Mali Kimlik</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                ['Vergi Kimlik Numarası', selectedClient.taxNumber],
                ['Bağlı Vergi Dairesi', selectedClient.taxOffice],
                ['Ticaret Sicil No', selectedClient.tradeRegisterNo],
                ['MERSİS Numarası', selectedClient.mersisNo],
                ['Kuruluş Tarihi', selectedClient.foundedDate],
                ['Personel Sayısı', `${selectedClient.employeeCount} Çalışan`]
              ].map(([label, value], i) => (
                <div key={i} className="p-3.5 bg-paper-50 rounded-xl border border-line">
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block mb-1">{label}</span>
                  <span className="font-mono font-semibold text-ink-900 text-[13px] break-all">{value}</span>
                </div>
              ))}
            </div>

            <div className="p-4 bg-paper-50 rounded-xl border border-line">
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block mb-1">Adres</span>
              <p className="text-[13px] text-ink-700 leading-relaxed">{selectedClient.address}</p>
            </div>

            {/* Ledger entries */}
            <div>
              <h4 className="font-bold text-ink-900 text-sm mb-3">Son Yevmiye Kayıtları</h4>
              <div className="space-y-2.5">
                {(selectedClient.recentLedgerEntries || []).map((entry, i) => (
                  <div key={i} className="p-3.5 rounded-xl border border-line bg-white hover:border-pine-300 transition-colors">
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-mono text-[11px] font-bold text-pine-700">{entry.yevmiyeNo}</span>
                      <span className="font-mono text-[13px] font-bold text-ink-900">{entry.amount}</span>
                    </div>
                    <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">{entry.desc}</p>
                    <p className="text-[10px] font-mono text-ink-400 mt-1.5">
                      {entry.date} · {entry.debitAcc} → {entry.creditAcc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <div className="card p-6 space-y-4">
              <h3 className="font-bold text-ink-900 text-sm">Vergi & Teşvik Pozisyonu</h3>
              <div className="space-y-2.5">
                <div className="flex items-center justify-between p-3 rounded-lg bg-paper-50 border border-line text-[13px]">
                  <span className="text-ink-500">KDV-1</span>
                  <span className="badge badge-success">{selectedClient.kdvStatus.split(' (')[0]}</span>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg bg-paper-50 border border-line text-[13px]">
                  <span className="text-ink-500">SGK / Bordro</span>
                  <span className="badge badge-success">{selectedClient.sgkStatus.split(' (')[0]}</span>
                </div>
                <div className="p-3.5 rounded-lg bg-paper-50 border border-line">
                  <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-ink-400 block mb-2">
                    Uygulanan Teşvikler
                  </span>
                  <ul className="space-y-2">
                    {(selectedClient.applicableIncentives || []).map((inc, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs text-ink-600 leading-relaxed">
                        <Sparkles className="w-3 h-3 text-gold-500 shrink-0 mt-0.5" />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-6 space-y-3">
              <h3 className="font-bold text-ink-900 text-sm">Sorumlu Ekibiniz</h3>
              <div className="flex items-center gap-3">
                <img
                  src={selectedClient.assignedCPA.avatar}
                  alt={selectedClient.assignedCPA.name}
                  className="w-11 h-11 rounded-lg object-cover border border-line"
                />
                <div className="min-w-0">
                  <p className="font-bold text-[13px] text-ink-900">{selectedClient.assignedCPA.name}</p>
                  <p className="text-[11px] text-ink-400">{selectedClient.assignedCPA.title}</p>
                  <p className="text-[11px] font-mono text-ink-500 mt-0.5">{selectedClient.assignedCPA.email}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---- DOCS ---- */}
      {activeSubTab === 'docs' && (
        <div className="card p-6 space-y-4 animate-fade-in">
          <h3 className="font-bold text-ink-900 text-sm">Mükellef Evrak Havuzu ({clientDocs.length})</h3>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full text-left min-w-[640px]">
              <thead>
                <tr className="border-b border-line">
                  <th className="th">Belge</th>
                  <th className="th">Kategori</th>
                  <th className="th text-right">Tutar</th>
                  <th className="th">OCR</th>
                  <th className="th">Durum</th>
                  <th className="th text-right">İşlem</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {clientDocs.map((doc) => (
                  <tr key={doc.id} className="hover:bg-paper-50 transition-colors">
                    <td className="td font-semibold text-ink-900">
                      <span className="block truncate max-w-[220px]">{doc.name}</span>
                    </td>
                    <td className="td text-ink-500 whitespace-nowrap">{doc.category}</td>
                    <td className="td font-mono font-semibold text-ink-900 text-right">{doc.amount}</td>
                    <td className="td"><span className="badge badge-success">{doc.ocrConfidence}</span></td>
                    <td className="td">
                      <span className={cn(
                        'badge',
                        doc.status === 'Onaylandı' ? 'badge-success' : doc.status.includes('Eksik') ? 'badge-danger' : 'badge-warning'
                      )}>
                        {doc.status}
                      </span>
                    </td>
                    <td className="td text-right">
                      <button onClick={() => setSelectedDocForPreview(doc)} className="btn btn-outline btn-sm">
                        Önizle
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* ---- TAX OPS ---- */}
      {activeSubTab === 'tax-ops' && (
        <div className="card p-6 space-y-4 animate-fade-in">
          <h3 className="font-bold text-ink-900 text-sm">Dönemsel Beyan & SGK Adımları</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {taxCalendar.map((tax) => (
              <div key={tax.id} className={cn(
                'p-4 rounded-xl border space-y-2',
                tax.status === 'Tamamlandı' ? 'border-success/30 bg-success-soft/30' : 'border-line bg-paper-50'
              )}>
                <div className="flex items-center justify-between gap-2">
                  <span className="badge badge-neutral">{tax.type}</span>
                  <span className={cn(
                    'text-[11px] font-mono font-bold',
                    tax.status === 'Tamamlandı' ? 'text-success-deep' : 'text-ink-600'
                  )}>
                    {tax.status === 'Tamamlandı' ? 'Kapatıldı' : `${tax.remainingDays} Gün`}
                  </span>
                </div>
                <p className="font-semibold text-[13px] text-ink-900 leading-snug">{tax.title}</p>
                <p className="text-[11px] font-mono text-ink-400">Termin: {tax.deadline}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ---- PAYMENTS ---- */}
      {activeSubTab === 'payments' && (
        <div className="card p-6 space-y-4 animate-fade-in">
          <h3 className="font-bold text-ink-900 text-sm">Cari Hesap & e-SMM Makbuzları</h3>
          {clientPayments.length === 0 ? (
            <p className="text-sm text-ink-400 py-8 text-center">Bu mükellef için kayıtlı ödeme makbuzu bulunamadı.</p>
          ) : (
            <div className="overflow-x-auto -mx-6 px-6">
              <table className="w-full text-left min-w-[640px]">
                <thead>
                  <tr className="border-b border-line">
                    <th className="th">Dönem</th>
                    <th className="th">e-SMM No</th>
                    <th className="th text-right">Ücret</th>
                    <th className="th text-right">Toplam (KDV Dahil)</th>
                    <th className="th">Son Ödeme</th>
                    <th className="th">Durum</th>
                    <th className="th text-right">İşlem</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {clientPayments.map((p) => (
                    <tr key={p.id} className="hover:bg-paper-50 transition-colors">
                      <td className="td font-semibold text-ink-900 whitespace-nowrap">{p.period}</td>
                      <td className="td font-mono text-xs text-ink-500">{p.smmNo}</td>
                      <td className="td font-mono text-ink-700 text-right">{p.amount}</td>
                      <td className="td font-mono font-bold text-ink-900 text-right">{p.totalAmount}</td>
                      <td className="td font-mono text-xs text-ink-500 whitespace-nowrap">
                        {p.dueDate}{p.paidDate ? ` · ${p.paidDate}` : ''}
                      </td>
                      <td className="td">
                        <span className={cn(
                          'badge',
                          p.status === 'Ödendi' ? 'badge-success' : p.status === 'Gecikmede' ? 'badge-danger' : 'badge-warning'
                        )}>
                          {p.status}
                        </span>
                      </td>
                      <td className="td text-right">
                        <button onClick={() => setIsSmmModalOpen(p)} className="btn btn-outline btn-sm">
                          <Receipt className="w-3.5 h-3.5" />
                          Makbuz
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      )}

      {/* ---- TASKS ---- */}
      {activeSubTab === 'tasks' && (
        <div className="card p-6 space-y-4 animate-fade-in">
          <h3 className="font-bold text-ink-900 text-sm">Görevler & Hatırlatıcılar ({clientTasks.length})</h3>
          {clientTasks.length === 0 ? (
            <p className="text-sm text-ink-400 py-8 text-center">Bu mükellef için açık görev bulunamadı.</p>
          ) : (
            <div className="space-y-2.5">
              {clientTasks.map((t) => (
                <div key={t.id} className="p-4 rounded-xl border border-line bg-paper-50 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="min-w-0">
                    <p className="font-semibold text-[13px] text-ink-900">{t.title}</p>
                    <p className="text-[11px] font-mono text-ink-400 mt-1">
                      {t.assignedTo} · Son: {t.dueDate} · {t.category}
                    </p>
                  </div>
                  <span className={cn(
                    'badge shrink-0',
                    t.status === 'Tamamlandı' ? 'badge-success' : t.status === 'Yapılacak' ? 'badge-neutral' : 'badge-warning'
                  )}>
                    {t.status}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ---- NOTES ---- */}
      {activeSubTab === 'notes' && (
        <div className="card p-6 space-y-5 animate-fade-in">
          <h3 className="font-bold text-ink-900 text-sm">SMMM Denetim Notları</h3>

          <form onSubmit={handleAddNote} className="space-y-3">
            <textarea
              rows={2}
              placeholder="Yeni denetim notu yazın..."
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              className="input resize-none"
            />
            <div className="flex justify-end">
              <button type="submit" className="btn btn-primary btn-sm">
                <Send className="w-3.5 h-3.5" />
                <span>Notu Kaydet</span>
              </button>
            </div>
          </form>

          <div className="space-y-3">
            {notesList.map((note) => (
              <div key={note.id} className="p-4 rounded-xl border border-line bg-paper-50">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <span className="font-bold text-xs text-ink-900">{note.author}</span>
                  <span className="text-[10px] font-mono text-ink-400">{note.date}</span>
                </div>
                <p className="text-[13px] text-ink-600 leading-relaxed">{note.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
