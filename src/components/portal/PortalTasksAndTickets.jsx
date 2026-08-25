import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageSquare, Plus, X } from 'lucide-react';
import { cn } from '../../utils/cn';

const CATEGORIES = [
  'Vergi & Beyanname',
  'Bordro & Teşvik',
  'Resmi Yazışma & Denetim',
  'E-Dönüşüm & Belgeler',
  'Diğer'
];

export default function PortalTasksAndTickets() {
  const { addToast } = useApp();

  const [tickets, setTickets] = useState([
    {
      id: 'TCK-2026-89',
      subject: 'Temmuz Ayı 4691 Personel Bordro İcmali E-İmzalı Nüshası',
      category: 'Bordro & Teşvik',
      createdDate: '2026-08-20',
      status: 'Tamamlandı',
      priority: 'Normal',
      lastReply: 'SMMM Kemal Yıldız: İmzalı bordro icmali "Belgelerim" klasörüne yüklendi.'
    },
    {
      id: 'TCK-2026-92',
      subject: 'Yatırım Turu Due Diligence İçin Güncel Borcu Yoktur & Mizan Özeti',
      category: 'Resmi Yazışma & Denetim',
      createdDate: '2026-08-22',
      status: 'İşleniyor',
      priority: 'Yüksek',
      lastReply: 'SMMM Elif Kaya: GİB ve SGK sisteminden barkodlu borcu yoktur yazıları indirildi.'
    }
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newSubject, setNewSubject] = useState('');
  const [newCategory, setNewCategory] = useState('Vergi & Beyanname');
  const [newDetails, setNewDetails] = useState('');

  const handleCreateTicket = (e) => {
    e.preventDefault();
    if (!newSubject.trim()) return;

    const newTicket = {
      id: `TCK-2026-${Math.floor(100 + Math.random() * 900)}`,
      subject: newSubject,
      category: newCategory,
      createdDate: 'Bugün',
      status: 'İşleniyor',
      priority: 'Normal',
      lastReply: 'Talep SMMM Kemal Yıldız havuzuna iletildi.'
    };

    setTickets([newTicket, ...tickets]);
    setIsModalOpen(false);
    setNewSubject('');
    setNewDetails('');
    addToast('Talebiniz İletildi', 'Mali müşaviriniz en kısa sürede dönüş yapacaktır.', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">SMMM Danışman Masası & Talepler</h1>
          <p className="text-xs text-ink-400 mt-1">Bordro, faaliyet belgesi, mizan ve özel vergi denetim talepleriniz</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="btn btn-primary btn-sm shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Yeni Talep Oluştur</span>
        </button>
      </div>

      {/* Ticket List */}
      <div className="space-y-4">
        {tickets.map((tck) => (
          <div key={tck.id} className="card p-6 space-y-3.5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-[11px] font-semibold text-ink-500 bg-paper-100 border border-line px-2 py-0.5 rounded">
                  {tck.id}
                </span>
                <span className="badge badge-neutral">{tck.category}</span>
                {tck.priority === 'Yüksek' && <span className="badge badge-warning">Yüksek Öncelik</span>}
              </div>

              <div className="flex items-center gap-2">
                <span className={cn('badge', tck.status === 'Tamamlandı' ? 'badge-success' : 'badge-pine')}>
                  {tck.status}
                </span>
                <span className="text-[11px] font-mono text-ink-400">{tck.createdDate}</span>
              </div>
            </div>

            <h3 className="font-bold text-ink-900 text-[15px] leading-snug">{tck.subject}</h3>

            <div className="p-4 bg-paper-50 rounded-xl border border-line text-[13px] text-ink-600 flex items-start gap-2.5">
              <MessageSquare className="w-4 h-4 text-pine-700 shrink-0 mt-0.5" />
              <span><strong className="text-ink-900">Son Yanıt:</strong> {tck.lastReply}</span>
            </div>
          </div>
        ))}
      </div>

      {/* New Ticket Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-ink-950/50 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-lg bg-white rounded-2xl shadow-pop border border-line p-6 space-y-4 animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-line pb-3.5">
              <h3 className="font-bold text-base text-ink-900">SMMM Danışmanına Talep Aç</h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-1 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors"
                title="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-4">
              <div>
                <label className="label">Talep Başlığı *</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Faaliyet belgesi tescil onayı"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="input"
                  autoFocus
                />
              </div>

              <div>
                <label className="label">Talep Kategorisi</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="select"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="label">Detay / Açıklama</label>
                <textarea
                  rows={3}
                  placeholder="Talebinize ilişkin detayları yazın..."
                  value={newDetails}
                  onChange={(e) => setNewDetails(e.target.value)}
                  className="input resize-none"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="btn btn-ghost btn-sm"
                >
                  Vazgeç
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  <Plus className="w-3.5 h-3.5" />
                  <span>Talebi Gönder</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
