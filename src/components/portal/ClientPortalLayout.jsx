import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  FileText,
  Calendar,
  Layers,
  MessageSquare,
  BarChart3,
  Building,
  UploadCloud,
  Bell,
  Search,
  Sparkles,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../../utils/cn';

// Sub views
import PortalOverview from './PortalOverview';
import PortalDocuments from './PortalDocuments';
import PortalTaxSchedule from './PortalTaxSchedule';
import PortalActiveProcesses from './PortalActiveProcesses';
import PortalTasksAndTickets from './PortalTasksAndTickets';
import PortalReports from './PortalReports';
import PortalCompanyProfile from './PortalCompanyProfile';

export default function ClientPortalLayout() {
  const {
    portalTab,
    setPortalTab,
    clients,
    setIsAiAssistantOpen,
    setIsCommandPaletteOpen
  } = useApp();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  // Active client: TechVision A.Ş.
  const activeClient = clients.find((c) => c.id === 'cli-1') || clients[0];

  const menuItems = [
    { id: 'overview', label: 'Mali Kokpit', icon: LayoutDashboard },
    { id: 'documents', label: 'Belgeler & Yevmiye', icon: FileText, badge: '4' },
    { id: 'tax-schedule', label: 'Vergi ve Beyan Takvimi', icon: Calendar, badge: '4 Gün' },
    { id: 'processes', label: 'Canlı Beyan Süreçleri', icon: Layers },
    { id: 'tasks', label: 'Talepler & SMMM Masası', icon: MessageSquare },
    { id: 'reports', label: 'Nakit Runway & Raporlar', icon: BarChart3 },
    { id: 'profile', label: 'Şirket Sicil & Danışman', icon: Building },
  ];

  const notifications = [
    { id: 1, title: 'Temmuz KDV-1 Beyannamesi', text: 'Taslak mizanla mutabık olarak hazırlandı, onayınız bekleniyor.', time: '2 saat önce', unread: true },
    { id: 2, title: '4691 Bordro Teşvik Onayı', text: '34 personel için ₺38,400 gelir vergisi terkin indirimi uygulandı.', time: '1 gün önce', unread: false },
    { id: 3, title: 'AWS Yurt Dışı Faturası', text: '₺142,850 tutarındaki fatura 2 No KDV tevkifatıyla işlendi.', time: '3 gün önce', unread: false }
  ];

  return (
    <div className="min-h-[calc(100vh-2.75rem)] bg-[#08090d] flex flex-col lg:flex-row text-slate-100 font-sans">
      
      {/* Sidebar Desktop */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0a0c12] border-r border-white/[0.08] shrink-0">
        
        {/* Company Header */}
        <div className="p-4 border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-white text-black font-black flex items-center justify-center text-xs shadow-luxury">
              TV
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-xs text-white truncate">{activeClient.shortName}</h3>
              <p className="text-[10px] text-slate-400 font-mono">VN: {activeClient.taxNumber}</p>
              <span className="inline-flex items-center space-x-1 text-[9px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>4691 Teknopark Aktif</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 px-3 space-y-1">
          <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-slate-400">
            Müşteri Konsolu
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = portalTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setPortalTab(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all",
                  isActive
                    ? "bg-white text-black font-bold shadow-luxury"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]"
                )}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded font-mono font-bold",
                    isActive ? "bg-black text-white" : "bg-white/10 text-slate-300"
                  )}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Assigned SMMM Card */}
        <div className="p-3 m-3 rounded-xl bg-white/[0.02] border border-white/[0.08] space-y-2">
          <div className="flex items-center space-x-1.5 text-[9px] font-mono uppercase tracking-widest text-slate-400">
            <ShieldCheck className="w-3 h-3 text-emerald-400" />
            <span>Sorumlu Mali Müşavir</span>
          </div>
          <div className="flex items-center space-x-2.5">
            <img
              src={activeClient.assignedCPA.avatar}
              alt=""
              className="w-8 h-8 rounded-lg object-cover border border-white/10"
            />
            <div className="min-w-0 text-xs">
              <p className="font-bold text-white truncate">{activeClient.assignedCPA.name}</p>
              <p className="text-[10px] text-slate-400 truncate font-mono">Vergi & Teknopark Direktörü</p>
            </div>
          </div>
          <button
            onClick={() => setPortalTab('tasks')}
            className="w-full py-1.5 bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 rounded-lg text-[11px] font-medium transition-colors border border-white/[0.08]"
          >
            Danışmana Doğrudan Yaz
          </button>
        </div>

      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Portal Top Bar */}
        <header className="h-14 bg-[#0a0c12] border-b border-white/[0.08] px-4 sm:px-6 flex items-center justify-between sticky top-11 z-30">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="p-1.5 rounded-lg text-slate-400 lg:hidden hover:bg-white/10"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <h2 className="font-bold text-white text-sm">
                {menuItems.find((m) => m.id === portalTab)?.label}
              </h2>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
            <button
              onClick={() => setPortalTab('documents')}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wider text-[11px] shadow-sm transition-all"
            >
              <UploadCloud className="w-3.5 h-3.5 text-black" />
              <span>Evrak Yükle</span>
            </button>

            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.1] text-slate-200 border border-white/[0.08] font-medium transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-slate-300" />
              <span className="hidden sm:inline">Aura AI Masası</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] relative"
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 bg-emerald-400 rounded-full absolute top-1 right-1"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-[#0f121a] rounded-xl shadow-2xl border border-white/10 p-3 space-y-2 text-xs z-50 animate-slide-down">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-bold text-white">Mali Bildirimler</span>
                    <button onClick={() => setShowNotifications(false)} className="text-[10px] font-mono text-slate-400">Kapat</button>
                  </div>
                  <div className="space-y-1.5">
                    {notifications.map((n) => (
                      <div key={n.id} className="p-2 rounded-lg bg-white/[0.03] border border-white/[0.04]">
                        <p className="font-bold text-white">{n.title}</p>
                        <p className="text-slate-400 text-[11px] mt-0.5">{n.text}</p>
                        <span className="text-[9px] font-mono text-slate-500 mt-1 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2 pl-2 border-l border-white/10">
              <img
                src={activeClient.authorizedPerson.avatar}
                alt=""
                className="w-7 h-7 rounded-lg object-cover border border-white/10"
              />
              <span className="hidden md:inline font-medium text-slate-300 text-xs">
                {activeClient.authorizedPerson.name}
              </span>
            </div>
          </div>
        </header>

        {/* Mobile menu dropdown */}
        {mobileSidebarOpen && (
          <div className="lg:hidden bg-[#0c0e16] p-4 space-y-1 border-b border-white/10 text-xs">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setPortalTab(item.id);
                  setMobileSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium",
                  portalTab === item.id ? "bg-white text-black font-bold" : "text-slate-300 hover:bg-white/[0.04]"
                )}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Portal Main Body */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 max-w-7xl">
          {portalTab === 'overview' && <PortalOverview />}
          {portalTab === 'documents' && <PortalDocuments />}
          {portalTab === 'tax-schedule' && <PortalTaxSchedule />}
          {portalTab === 'processes' && <PortalActiveProcesses />}
          {portalTab === 'tasks' && <PortalTasksAndTickets />}
          {portalTab === 'reports' && <PortalReports />}
          {portalTab === 'profile' && <PortalCompanyProfile />}
        </main>

      </div>

    </div>
  );
}
