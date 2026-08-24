import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminCRMLeads() {
  const { leads, addToast } = useApp();
  const [leadList, setLeadList] = useState(leads);
  const [viewMode, setViewMode] = useState('kanban'); // 'kanban' | 'list'
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const [newLead, setNewLead] = useState({
    companyName: '',
    contactPerson: '',
    title: 'Kurucu',
    email: '',
    phone: '',
    companyType: 'Anonim Şirket (A.Ş.)',
    sector: 'Yazılım',
    estimatedMonthly: '₺28,000',
    employeeCount: '15 Personel',
    stage: 'Yeni Başvuru',
    appliedDate: 'Bugün',
    notes: 'Web ön görüşme formu başvurusu.'
  });

  const stages = [
    { id: 'Yeni Başvuru' },
    { id: 'Ön Görüşme Yapıldı' },
    { id: 'Teklif Gönderildi' },
    { id: 'Sözleşme Aşaması' },
    { id: 'Kazanıldı' },
  ];

  const handleMoveStage = (leadId, nextStage) => {
    setLeadList((prev) =>
      prev.map((l) => (l.id === leadId ? { ...l, stage: nextStage } : l))
    );
    addToast('Aşama Değiştirildi', `Lead "${nextStage}" aşamasına taşındı.`, 'success');
  };

  const handleAddLead = (e) => {
    e.preventDefault();
    if (!newLead.companyName.trim()) return;

    setLeadList([
      { ...newLead, id: `lead-${Date.now()}` },
      ...leadList
    ]);
    setIsAddModalOpen(false);
    addToast('Yeni Müşteri Adayı Eklendi', `${newLead.companyName} CRM hattına işlendi.`, 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">CRM & Satış Hattı</h1>
          <p className="text-xs text-slate-400 font-mono">Yeni potansiyel mükellefler, teklif ve sözleşme aşamaları</p>
        </div>

        <div className="flex items-center space-x-2">
          <div className="flex bg-black/40 p-1 rounded-lg border border-white/10 font-mono text-[11px]">
            <button
              onClick={() => setViewMode('kanban')}
              className={cn("px-3 py-1 rounded transition-colors", viewMode === 'kanban' ? "bg-white text-black font-bold" : "text-slate-400")}
            >
              Kanban Pano
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={cn("px-3 py-1 rounded transition-colors", viewMode === 'list' ? "bg-white text-black font-bold" : "text-slate-400")}
            >
              Liste
            </button>
          </div>

          <button
            onClick={() => setIsAddModalOpen(true)}
            className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
          >
            <Plus className="w-3.5 h-3.5 text-black" />
            <span>Yeni Lead Ekle</span>
          </button>
        </div>
      </div>

      {/* Kanban View */}
      {viewMode === 'kanban' && (
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 overflow-x-auto pb-4">
          {stages.map((stage) => {
            const stageLeads = leadList.filter((l) => l.stage === stage.id);
            return (
              <div key={stage.id} className="p-3 rounded-2xl obsidian-card border border-white/[0.08] flex flex-col space-y-3 min-w-[240px]">
                
                <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs font-mono">
                  <span className="font-bold text-white text-[11px]">{stage.id}</span>
                  <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 font-bold text-[10px]">
                    {stageLeads.length}
                  </span>
                </div>

                <div className="space-y-3 flex-1">
                  {stageLeads.map((lead) => (
                    <div
                      key={lead.id}
                      className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-2 hover:border-white/20 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.06]">
                          {lead.sector}
                        </span>
                        <span className="font-bold text-emerald-400 font-mono text-xs">{lead.estimatedMonthly}</span>
                      </div>

                      <h4 className="font-bold text-white text-xs leading-snug">{lead.companyName}</h4>
                      <p className="text-[11px] text-slate-400">Yetkili: {lead.contactPerson}</p>

                      <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
                        <span className="text-slate-500">{lead.appliedDate}</span>

                        <select
                          value={lead.stage}
                          onChange={(e) => handleMoveStage(lead.id, e.target.value)}
                          className="bg-black/60 border border-white/10 rounded px-1.5 py-0.5 text-[10px] text-slate-300 font-medium"
                        >
                          {stages.map((s) => (
                            <option key={s.id} value={s.id}>{s.id}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  ))}

                  {stageLeads.length === 0 && (
                    <div className="py-8 text-center text-slate-600 text-xs font-mono">
                      Bu aşamada lead yok
                    </div>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      )}

      {/* List View */}
      {viewMode === 'list' && (
        <div className="p-1 rounded-2xl obsidian-card border border-white/[0.08] overflow-hidden shadow-cinema">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
              <tr>
                <th className="p-3.5">Şirket Adı</th>
                <th className="p-3.5">Yetkili</th>
                <th className="p-3.5">Sektör & Personel</th>
                <th className="p-3.5">Tahmini Ücret</th>
                <th className="p-3.5">Aşama</th>
                <th className="p-3.5">Tarih</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {leadList.map((lead) => (
                <tr key={lead.id} className="hover:bg-white/[0.02] transition-colors">
                  <td className="p-3.5 font-bold text-white font-sans">{lead.companyName}</td>
                  <td className="p-3.5 text-slate-300">{lead.contactPerson} ({lead.phone})</td>
                  <td className="p-3.5 text-slate-400">{lead.sector} · {lead.employeeCount}</td>
                  <td className="p-3.5 font-bold text-emerald-400">{lead.estimatedMonthly} / ay</td>
                  <td className="p-3.5">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-slate-200">
                      {lead.stage}
                    </span>
                  </td>
                  <td className="p-3.5 text-slate-500">{lead.appliedDate}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#0e1119] rounded-2xl p-6 space-y-4 shadow-2xl border border-white/10 animate-slide-down">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="font-bold text-base text-white">Yeni Müşteri Adayı Ekle</h3>
              <button onClick={() => setIsAddModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleAddLead} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">Şirket Adı *</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Quantum Finans Ltd."
                  value={newLead.companyName}
                  onChange={(e) => setNewLead({ ...newLead, companyName: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Yetkili Kişi</label>
                  <input
                    type="text"
                    placeholder="Ad Soyad"
                    value={newLead.contactPerson}
                    onChange={(e) => setNewLead({ ...newLead, contactPerson: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-sans"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Telefon</label>
                  <input
                    type="text"
                    placeholder="0532..."
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-mono"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Sektör</label>
                  <input
                    type="text"
                    value={newLead.sector}
                    onChange={(e) => setNewLead({ ...newLead, sector: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                  />
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Tahmini Ücret</label>
                  <input
                    type="text"
                    value={newLead.estimatedMonthly}
                    onChange={(e) => setNewLead({ ...newLead, estimatedMonthly: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-mono"
                  />
                </div>
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsAddModalOpen(false)}
                  className="px-4 py-2 bg-white/[0.04] text-slate-300 rounded-lg"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-black font-bold uppercase tracking-wider rounded-lg shadow-sm"
                >
                  Leadi Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
