import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CheckSquare,
  Plus,
  Clock,
  User,
  Calendar,
  AlertTriangle,
  CheckCircle2,
  Filter,
  Layers,
  Sparkles
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminTasks() {
  const { tasks, updateTaskStatus, addToast } = useApp();
  const [filterStaff, setFilterStaff] = useState('all');
  const [filterPriority, setFilterPriority] = useState('all');
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);

  const [newTask, setNewTask] = useState({
    title: '',
    client: 'TechVision Yazılım & Yapay Zeka A.Ş.',
    assignedTo: 'SMMM Kemal Yıldız',
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
  };

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 font-mono text-[10px] uppercase tracking-wider border border-white/10">
              Operasyonel İş Emirleri
            </span>
            <span className="text-slate-500 font-mono text-xs">4 Denetçi / 48 Aktif İşlem</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Görevler & SMMM İş Takip Masası</h1>
          <p className="text-xs text-slate-400 font-mono">Personele atanan beyanname, YMM tasdik, e-Defter berat ve mizan kontrolleri</p>
        </div>

        <button
          onClick={() => setIsNewModalOpen(true)}
          className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-luxury transition-all"
        >
          <Plus className="w-3.5 h-3.5 text-black" />
          <span>Yeni Görev Ata</span>
        </button>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-wrap gap-2">
        <select
          value={filterStaff}
          onChange={(e) => setFilterStaff(e.target.value)}
          className="px-3 py-2 bg-black/60 border border-white/10 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
        >
          <option value="all">Tüm Denetçiler (Hepsi)</option>
          <option value="Kemal">SMMM Kemal Yıldız (Ortak)</option>
          <option value="Elif">SMMM Elif Kaya (Kıdemli)</option>
          <option value="Burak">SMMM Burak Demir (Kıdemli)</option>
          <option value="Zeynep">SMMM Zeynep Aydın (Bordro Uzmanı)</option>
        </select>

        <select
          value={filterPriority}
          onChange={(e) => setFilterPriority(e.target.value)}
          className="px-3 py-2 bg-black/60 border border-white/10 rounded-xl text-xs font-mono text-slate-300 focus:outline-none"
        >
          <option value="all">Tüm Öncelikler</option>
          <option value="Acil">Acil (Yasal Süreli)</option>
          <option value="Normal">Normal Öncelik</option>
        </select>
      </div>

      {/* Kanban Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 overflow-x-auto pb-4">
        {statuses.map((status) => {
          const columnTasks = filteredTasks.filter((t) => t.status === status);
          return (
            <div key={status} className="p-3 rounded-2xl obsidian-card border border-white/[0.08] flex flex-col space-y-3 min-w-[240px]">
              
              {/* Status Header */}
              <div className="flex items-center justify-between pb-2 border-b border-white/[0.06] text-xs font-mono">
                <span className="font-bold text-white text-[11px]">{status}</span>
                <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 font-bold text-[10px]">
                  {columnTasks.length}
                </span>
              </div>

              {/* Task Cards */}
              <div className="space-y-3 flex-1">
                {columnTasks.map((task) => (
                  <div
                    key={task.id}
                    className="p-3.5 rounded-xl bg-black/40 border border-white/[0.06] space-y-2.5 hover:border-white/20 transition-all group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-mono text-slate-400 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.06]">
                        {task.category}
                      </span>
                      <span className={cn(
                        "text-[10px] font-mono font-bold px-1.5 py-0.5 rounded",
                        task.priority === 'Acil' ? "bg-rose-500/10 text-rose-400 border border-rose-500/20" : "bg-white/10 text-slate-400"
                      )}>
                        {task.priority}
                      </span>
                    </div>

                    <h4 className="font-bold text-white text-xs leading-snug group-hover:text-slate-100">{task.title}</h4>
                    <p className="text-[11px] text-slate-400 truncate">{task.client}</p>

                    <div className="space-y-1">
                      <div className="flex justify-between text-[10px] font-mono text-slate-400">
                        <span>Tamamlanma:</span>
                        <span className="font-bold text-white">%{task.progress}</span>
                      </div>
                      <div className="w-full h-1 bg-white/[0.06] rounded-full overflow-hidden">
                        <div 
                          style={{ width: `${task.progress}%` }} 
                          className={cn("h-full rounded-full transition-all duration-500", task.progress === 100 ? "bg-emerald-400" : "bg-white")}
                        />
                      </div>
                    </div>

                    <div className="pt-2 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono">
                      <span className="text-slate-500">Termin: {task.dueDate}</span>
                      
                      <select
                        value={task.status}
                        onChange={(e) => updateTaskStatus(task.id, e.target.value)}
                        className="bg-black/60 border border-white/10 rounded px-1.5 py-0.5 text-[10px] text-slate-300 font-medium"
                      >
                        {statuses.map((s) => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                ))}

                {columnTasks.length === 0 && (
                  <div className="py-8 text-center text-slate-600 text-xs font-mono">
                    Görev bulunmuyor
                  </div>
                )}
              </div>

            </div>
          );
        })}
      </div>

      {/* New Task Modal */}
      {isNewModalOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="w-full max-w-md bg-[#0e1119] rounded-2xl p-6 space-y-4 shadow-2xl border border-white/10 animate-slide-down">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
              <h3 className="font-bold text-base text-white">Personele Yeni Görev Ata</h3>
              <button onClick={() => setIsNewModalOpen(false)} className="text-slate-400 hover:text-white">✕</button>
            </div>

            <form onSubmit={handleCreateTask} className="space-y-3 text-xs">
              <div>
                <label className="block font-medium text-slate-300 mb-1">Görev Başlığı *</label>
                <input
                  type="text"
                  required
                  placeholder="Örn: Temmuz 2026 KDV-1 mutabakatı ve GİB onayı"
                  value={newTask.title}
                  onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-sans"
                />
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">İlgili Mükellef</label>
                <input
                  type="text"
                  value={newTask.client}
                  onChange={(e) => setNewTask({ ...newTask, client: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-sans"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Sorumlu SMMM</label>
                  <select
                    value={newTask.assignedTo}
                    onChange={(e) => setNewTask({ ...newTask, assignedTo: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-sans"
                  >
                    <option>SMMM Kemal Yıldız</option>
                    <option>SMMM Elif Kaya</option>
                    <option>SMMM Burak Demir</option>
                    <option>SMMM Zeynep Aydın</option>
                  </select>
                </div>
                <div>
                  <label className="block font-medium text-slate-300 mb-1">Öncelik Seviyesi</label>
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-sans"
                  >
                    <option>Acil</option>
                    <option>Normal</option>
                    <option>Düşük</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block font-medium text-slate-300 mb-1">Yasal Son Teslim Tarihi (Termin)</label>
                <input
                  type="date"
                  value={newTask.dueDate}
                  onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg bg-black/50 border border-white/10 focus:outline-none focus:border-white text-white font-mono"
                />
              </div>

              <div className="pt-2 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setIsNewModalOpen(false)}
                  className="px-4 py-2 bg-white/[0.04] text-slate-300 rounded-lg"
                >
                  İptal
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-white text-black font-bold uppercase tracking-wider rounded-lg shadow-sm"
                >
                  İş Emrini Kaydet
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
