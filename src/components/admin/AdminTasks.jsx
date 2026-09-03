import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Plus, X, Calendar } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminTasks() {
  const { tasks, staff, updateTaskStatus, addToast, demoAdmin } = useApp();
  const [filterStaff, setFilterStaff] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const [newTask, setNewTask] = useState({
    title: '',
    client: 'TechVision Yazılım & Yapay Zeka A.Ş.',
    assignedTo: demoAdmin.name,
    dueDate: '2026-08-28',
    priority: 'Acil',
    category: 'Vergi Beyannamesi',
    description: ''
  });

  const statuses = ['Yapılacak', 'İnceleniyor', 'Müşteri Onayında', 'Tamamlandı'];

  const filteredTasks = tasks.filter((t) => {
    const matchesStaff = filterStaff === 'all' || t.assignedTo.includes(filterStaff);
    const matchesPriority = filterPriority === 'all' || t.priority === filterPriority;
    return matchesStaff && matchesPriority;
  });

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!newTask.title.trim()) return;

    addToast('İş Emri Atandı', `"${newTask.title}" görevi ${newTask.assignedTo} sorumluluğuna verildi.`, 'success');
    setIsNewModalOpen(false);
    setNewTask((prev) => ({ ...prev, title: '', description: '' }));
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-neutral">Görevler</span>
            <span className="text-ink-400 text-xs">{staff.length} kişi / {tasks.length} açık iş</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight mt-1.5">İşler</h1>
          <p className="page-lead">Ekibin üzerindeki görevler.</p>
        </div>

        <button
          onClick={() => setIsNewModalOpen(true)}
          className="btn btn-primary btn-sm shrink-0"
        >
          <Plus className="w-3.5 h-3.5" />
          <span>Yeni iş</span>
        </button>
      </div>

      {/* Filters */}
      <div className="card p-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
        <select
          value={filterStaff}
          onChange={(e) => setFilterStaff(e.target.value)}
          className="select py-2 text-[13px]"
        >
          <option value="all">Tüm Denetçiler</option>
          {staff.map((s) => (
            <option key={s.id} value={s.name}>{s.name}</option>
          ))}
        </select>
        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="select py-2 text-[13px]"
        >
          <option value="all">Tüm Öncelikler</option>
          <option value="Acil">Acil</option>
          <option value="Yüksek">Yüksek</option>
          <option value="Normal">Normal</option>
        </select>
      </div>

      {/* Tasks Table */}
      <div className="card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[860px]">
            <thead>
              <tr className="border-b border-line bg-paper-50">
                <th className="th">Görev</th>
                <th className="th">Müşteri</th>
                <th className="th">Sorumlu</th>
                <th className="th">Son Tarih</th>
                <th className="th">Öncelik</th>
                <th className="th">Kategori</th>
                <th className="th text-right">Durum</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {filteredTasks.map((t) => (
                <tr key={t.id} className="hover:bg-paper-50 transition-colors">
                  <td className="td">
                    <span className="font-semibold text-ink-900 block max-w-[240px] truncate">{t.title}</span>
                  </td>
                  <td className="td text-ink-500 whitespace-nowrap">{t.client.split(' ').slice(0, 2).join(' ')}</td>
                  <td className="td text-ink-500 whitespace-nowrap">{t.assignedTo}</td>
                  <td className="td font-mono text-xs text-ink-500 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-3 h-3 text-ink-300" />
                      {t.dueDate}
                    </span>
                  </td>
                  <td className="td">
                    <span className="status text-ink-700">
                      <span className={cn('dot', t.priority === 'Acil' ? 'dot-danger' : t.priority === 'Yüksek' ? 'dot-warning' : 'dot-neutral')}></span>{t.priority}
                    </span>
                  </td>
                  <td className="td text-ink-500 whitespace-nowrap">{t.category}</td>
                  <td className="td text-right">
                    <select
                      value={t.status}
                      onChange={(e) => updateTaskStatus(t.id, e.target.value)}
                      className={cn(
                        'select w-auto py-1.5 text-xs',
                        t.status === 'Tamamlandı' && 'text-success-deep font-bold'
                      )}
                    >
                      {statuses.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </td>
                </tr>
              ))}
              {filteredTasks.length === 0 && (
                <tr>
                  <td colSpan={7} className="td text-center text-ink-400 py-10">
                    Seçili filtrede görev bulunamadı.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* New Task Modal */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-ink-950/50 backdrop-blur-sm animate-fade-in">
          <div
            className="w-full max-w-md bg-white rounded-2xl shadow-pop border border-line overflow-hidden animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 border-b border-line flex items-center justify-between">
              <h3 className="font-bold text-ink-900 text-[15px]">Yeni İş Emri Oluştur</h3>
              <button
                onClick={() => setIsNewModalOpen(false)}
                className="p-1 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors"
                title="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleCreateTask} className="p-6 space-y-4">
              <div>
                <label className="label">Görev Başlığı *</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Ağustos KDV-1 taslak mizan kontrolü"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="input"
                  autoFocus
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="label">Sorumlu Denetçi</label>
                  <select
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                    className="select"
                  >
                    {staff.map((s) => (
                      <option key={s.id} value={s.name}>{s.name}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="label">Son Tarih</label>
                  <input
                    type="date"
                    value={newTask.dueDate}
                    onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                    className="input font-mono"
                  />
                </div>
                <div>
                  <label className="label">Öncelik</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="select"
                  >
                    <option>Acil</option>
                    <option>Yüksek</option>
                    <option>Normal</option>
                  </select>
                </div>
                <div>
                  <label className="label">Kategori</label>
                  <select
                    value={newTask.category}
                    onChange={(e) => setNewTask({ ...newTask, category: e.target.value })}
                    className="select"
                  >
                    <option>Vergi Beyannamesi</option>
                    <option>Evrak İşleme</option>
                    <option>Denetim & Tasdik</option>
                    <option>Müşteri İlişkisi</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="label">Açıklama</label>
                <textarea
                  rows={2}
                  value={newTask.description}
                  onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                  className="input resize-none"
                  placeholder="İş emri detayları..."
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-1">
                <button type="button" onClick={() => setIsNewModalOpen(false)} className="btn btn-ghost btn-sm">
                  Vazgeç
                </button>
                <button type="submit" className="btn btn-primary btn-sm">
                  <Plus className="w-3.5 h-3.5" />
                  <span>İş Emrini Ata</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
