import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { MessageSquare, Plus, CheckCircle2, Clock } from 'lucide-react';
import { cn } from '../../utils/cn';

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
    addToast('Talebiniz İletildi', 'Mali müşaviriniz en kısa sürede dönüş sağlayacaktır.', 'success');
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">SMMM Danışman Masası & Talepler</h1>
          <p className="text-xs text-slate-400 font-mono">Bordro, faaliyet belgesi, mizan ve özel vergi denetim talepleriniz</p>
        </div>

        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
        >
          <Plus className="w-3.5 h-3.5 text-black" />
          <span>Yeni Talep Oluştur</span>
        </button>
      </div>

      {/* Ticket List */}
      <div className="space-y-4">
        {tickets.map((tck) => (
          <div key={tck.id} className="p-6 rounded-2xl obsidian-card border border-white/[0.08] shadow-cinema space-y-3">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center space-x-2">
                <span className="font-mono text-[10px] font-bold bg-white/[0.06] text-white px-2 py-0.5 rounded border border-white/10">
                  {tck.id}
                </span>
                <span className="text-xs text-slate-400 font-mono">{tck.category}</span>
              </div>

              <div className="flex items-center space-x-2 font-mono text-[11px]">
                <span className={cn(
                  "px-2.5 py-0.5 rounded-full font-semibold",
                  tck.status === 'Tamamlandı' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 'bg-white/10 text-slate-200'
                )}>
                  {tck.status}
                </span>
                <span className="text-slate-500">{tck.createdDate}</span>
              </div>
            </div>

            <h3 className="font-bold text-white text-sm sm:text-base">{tck.subject}</h3>

            <div className="p-3.5 bg-black/40 rounded-xl border border-white/[0.06] text-xs text-slate-300 flex items-start space-x-2.5">
              <MessageSquare className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
              <span><strong>Son Yanıt:</strong> {tck.lastReply}</span>
            </div>
          </div>
        ))}
      </div>

      {/* New Ticket Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-lg bg-[#0e1119] rounded-2xl p-6 space-y-4 shadow-2xl border border-white/10 animate-slide-down">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="font-bold text-base text-white">SMMM Danışmanına Talep Aç</h3>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateTicket} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">Talep Başlığı *</label>
                <input
                  type="text"
                  placeholder="Örn: 2026 Q2 Mizan ve Bilanço Özeti İstemi"
                  required
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">Kategori</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                >
                  <option>Bordro / SGK</option>
                  <option>Vergi & Beyanname</option>
                  <option>Resmi Evrak & Faaliyet Belgesi</option>
                  <option>KDV İade Süreci</option>
                  <option>Genel Danışmanlık</option>
                </select>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">Detaylı Açıklama</label>
                <textarea
                  rows={3}
                  placeholder="İhtiyacınız olan resmi evrak veya analizi yazabilirsiniz..."
                  value={newDetails}
                  onChange={(e) => setNewDetails(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] rounded-lg"
                >
                  Vazgeç
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-black font-bold uppercase tracking-wider rounded-lg shadow-sm"
                >
                  Talebi İlet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
