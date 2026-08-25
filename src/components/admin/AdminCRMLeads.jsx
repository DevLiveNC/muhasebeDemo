import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, X, ChevronLeft, ChevronRight } from 'lucide-react';
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
    estimatedMonthly: '₺28.000',
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
    { id: 'Kazanıldı' }
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

  const stageIndex = (stageName) => stages.findIndex((s) => s.id === stageName);

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-950 tracking-tight">CRM & Satış Hattı</h1>
          <p className="text-xs text-ink-400 mt-1">Yeni mükellef adayları, teklif aşamaları ve potansiyel gelir hattı</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center bg-paper-200 p-0.5 rounded-lg border border-line">
            {['kanban', 'list'].map((mode) => (
              <button
                key={mode}
                onClick={() => setViewMode(mode)}
                className={cn(
                  'px-3 py-1 rounded-md text-xs font-medium transition-colors',
                  viewMode === mode ? 'bg-white text-ink-950 shadow-sm font-semibold' : 'text-ink-400 hover:text-ink-800'
                )}
              >
                {mode === 'kanban' ? 'Kanban' : 'Liste'}
              </button>
            ))}
          </div>
          <button
            onClick={() => setIsAddModalOpen(true)}
            className="btn btn-primary btn-sm"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Yeni Lead</span>
          </button>
        </div>
      </div>

      {viewMode === 'kanban' ? (
        <div className="overflow-x-auto -mx-4 px-4 pb-2">
          <div className="flex gap-4 min-w-[900px]">
            {stages.map((stage) => {
              const stageLeads = leadList.filter((l) => l.stage === stage.id);
              return (
                <div key={stage.id} className="w-[240px] shrink-0 bg-paper-200/60 rounded-xl p-3 space-y-3">
                  <div className="flex items-center justify-between px-1.5 pt-1">
                    <span className="text-xs font-bold text-ink-800">{stage.id}</span>
                    <span className="text-[10px] font-mono font-bold bg-white border border-line text-ink-500 px-1.5 py-0.5 rounded-full">
                      {stageLeads.length}
                    </span>
                  </div>

                  {stageLeads.map((lead) => {
                    const idx = stageIndex(lead.stage);
                    return (
                      <div key={lead.id} className="card p-3.5 space-y-2.5">
                        <div>
                          <h4 className="font-bold text-[13px] text-ink-950 leading-snug">{lead.companyName}</h4>
                          <p className="text-[11px] text-ink-400 mt-0.5">
                            {lead.contactPerson} · {lead.sector}
                          </p>
                        </div>
                        <div className="flex items-center justify-between text-[11px]">
                          <span className="font-mono font-bold text-pine-700">{lead.estimatedMonthly} / ay</span>
                          <span className="font-mono text-ink-400">{lead.appliedDate}</span>
                        </div>
                        <div className="flex items-center gap-1 pt-1 border-t border-line">
                          <button
                            disabled={idx === 0}
                            onClick={() => handleMoveStage(lead.id, stages[idx - 1].id)}
                            className="p-1.5 rounded text-ink-400 hover:text-ink-950 hover:bg-paper-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                            title="Önceki aşama"
                          >
                            <ChevronLeft className="w-3.5 h-3.5" />
                          </button>
                          <button
                            disabled={idx === stages.length - 1}
                            onClick={() => handleMoveStage(lead.id, stages[idx + 1].id)}
                            className="p-1.5 rounded text-ink-400 hover:text-ink-950 hover:bg-paper-100 disabled:opacity-30 disabled:pointer-events-none transition-colors"
                            title="Sonraki aşama"
                          >
                            <ChevronRight className="w-3.5 h-3.5" />
                          </button>
                          <span className="text-[10px] text-ink-300 ml-auto">{lead.employeeCount}</span>
                        </div>
                      </div>
                    );
                  })}

                  {stageLeads.length === 0 && (
                    <div className="p-4 rounded-lg border border-dashed border-line-strong text-center text-[11px] text-ink-400">
                      Lead yok
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="card overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[720px]">
              <thead>
                <tr className="border-b border-line bg-paper-50">
                  <th className="th">Şirket</th>
                  <th className="th">Yetkili</th>
                  <th className="th">Aşama</th>
                  <th className="th text-right">Tahmini Aylık</th>
                  <th className="th">Başvuru</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {leadList.map((lead) => (
                  <tr key={lead.id} className="hover:bg-paper-50 transition-colors">
                    <td className="td font-semibold text-ink-950">{lead.companyName}</td>
                    <td className="td text-ink-500">{lead.contactPerson}</td>
                    <td className="td">
                      <select
                        value={lead.stage}
                        onChange={(e) => handleMoveStage(lead.id, e.target.value)}
                        className="select w-auto py-1.5 text-xs"
                      >
                        {stages.map((s) => (
                          <option key={s.id} value={s.id}>{s.id}</option>
                        ))}
                      </select>
                    </td>
                    <td className="td font-mono font-semibold text-pine-700 text-right">{lead.estimatedMonthly}</td>
                    <td className="td font-mono text-xs text-ink-400">{lead.appliedDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Add Lead Modal */}
      {isAddModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-ink-950/50 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-pop border border-line overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-line flex items-center justify-between">
              <h3 className="font-bold text-ink-950 text-[15px]">Yeni Müşteri Adayı</h3>
              <button
                onClick={() => setIsAddModalOpen(false)}
                className="p-1 rounded text-ink-400 hover:text-ink-950 hover:bg-paper-100 transition-colors"
                title="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddLead} className="p-6 space-y-4 max-h-[65vh] overflow-y-auto">
              <div>
                <label className="label">Şirket Ünvanı *</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Solvy Enerji Teknolojileri A.Ş."
                  value={newLead.companyName}
                  onChange={(e) => setNewLead({ ...newLead, companyName: e.target.value })}
                  className="input"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">İletişim Kişisi</label>
                  <input
                    type="text"
                    value={newLead.contactPerson}
                    onChange={(e) => setNewLead({ ...newLead, contactPerson: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Unvanı</label>
                  <input
                    type="text"
                    value={newLead.title}
                    onChange={(e) => setNewLead({ ...newLead, title: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">E-Posta</label>
                  <input
                    type="email"
                    value={newLead.email}
                    onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Telefon</label>
                  <input
                    type="tel"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Sektör</label>
                  <input
                    type="text"
                    value={newLead.sector}
                    onChange={(e) => setNewLead({ ...newLead, sector: e.target.value })}
                    className="input"
                  />
                </div>
                <div>
                  <label className="label">Tahmini Aylık Gelir</label>
                  <input
                    type="text"
                    value={newLead.estimatedMonthly}
                    onChange={(e) => setNewLead({ ...newLead, estimatedMonthly: e.target.value })}
                    className="input font-mono"
                  />
                </div>
              </div>

              <div>
                <label className="label">Başlangıç Aşaması</label>
                <select
                  value={newLead.stage}
                  onChange={(e) => setNewLead({ ...newLead, stage: e.target.value })}
                  className="select"
                >
                  {stages.map((s) => (
                    <option key={s.id} value={s.id}>{s.id}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="btn btn-ghost btn-sm">
                  Vazgeç
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Lead'i Kaydet</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
