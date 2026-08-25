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
    setIsAiAssistantOpen
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
    { id: 'profile', label: 'Şirket Sicil & Danışman', icon: Building }
  ];

  const notifications = [
    { id: 1, title: 'Temmuz KDV-1 Beyannamesi', text: 'Taslak mizanla mutabık olarak hazırlandı, onayınız bekleniyor.', time: '2 saat önce', unread: true },
    { id: 2, title: '4691 Bordro Teşvik Onayı', text: '34 personel için ₺38.400 gelir vergisi terkin indirimi uygulandı.', time: '1 gün önce', unread: false },
    { id: 3, title: 'AWS Yurt Dışı Faturası', text: '₺142.850 tutarındaki fatura 2 No KDV tevkifatıyla işlendi.', time: '3 gün önce', unread: false }
  ];

  const Sidebar = (
    <div className="flex flex-col h-full">
      {/* Company Header */}
      <div className="p-4 border-b border-line">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-pine-700 text-white font-serif font-bold flex items-center justify-center text-sm shrink-0">
            TV
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-[13px] text-ink-900 truncate">{activeClient.shortName}</h3>
            <p className="text-[10px] text-ink-400 font-mono mt-0.5">VN: {activeClient.taxNumber}</p>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-success-deep">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              4691 Teknopark Aktif
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 mlabel">
          Müşteri Konsolu
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = portalTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setPortalTab(item.id);
                setMobileSidebarOpen(false);
              }}
              className={cn('nav-item', isActive && 'nav-item-active')}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge && (
                <span className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold shrink-0',
                  isActive ? 'bg-white/20 text-white' : 'bg-paper-200 text-ink-500'
                )}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* Assigned SMMM Card */}
      <div className="p-3 m-3 rounded-xl bg-paper-50 border border-line space-y-2.5">
        <div className="flex items-center gap-1.5 mlabel">
          <ShieldCheck className="w-3 h-3 text-pine-700" />
          <span>Sorumlu Mali Müşavir</span>
        </div>
        <div className="flex items-center gap-2.5">
          <img
            src={activeClient.assignedCPA.avatar}
            alt={activeClient.assignedCPA.name}
            className="w-9 h-9 rounded-lg object-cover border border-line"
          />
          <div className="min-w-0 text-xs">
            <p className="font-bold text-ink-900 truncate">{activeClient.assignedCPA.name}</p>
            <p className="text-[10px] text-ink-400 truncate font-mono">Vergi & Teknopark Direktörü</p>
          </div>
        </div>
        <button
          onClick={() => setPortalTab('tasks')}
          className="btn btn-outline btn-sm w-full"
        >
          Danışmana Doğrudan Yaz
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-[calc(100vh-2.75rem)] bg-paper-100 flex flex-col lg:flex-row">

      {/* Sidebar Desktop */}
      <aside className="hidden lg:block w-64 bg-white border-r border-line shrink-0 sticky top-11 h-[calc(100vh-2.75rem)]">
        {Sidebar}
      </aside>

      {/* Sidebar Mobile */}
      {mobileSidebarOpen && (
        <div className="lg:hidden fixed inset-0 z-50">
          <div
            className="absolute inset-0 bg-ink-950/50 backdrop-blur-sm animate-fade-in"
            onClick={() => setMobileSidebarOpen(false)}
          />
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-pop animate-slide-up">
            <div className="flex justify-end p-2">
              <button
                onClick={() => setMobileSidebarOpen(false)}
                className="p-2 rounded-lg text-ink-500 hover:bg-paper-100"
                title="Kapat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            {Sidebar}
          </aside>
        </div>
      )}

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Portal Top Bar */}
        <header className="h-14 bg-white/95 backdrop-blur border-b border-line px-4 sm:px-6 flex items-center justify-between sticky top-11 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="p-1.5 rounded-lg text-ink-500 lg:hidden hover:bg-paper-100"
              title="Menü"
            >
              <Menu className="w-5 h-5" />
            </button>
            <h2 className="font-bold text-ink-900 text-sm">
              {menuItems.find((m) => m.id === portalTab)?.label}
            </h2>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setPortalTab('documents')}
              className="btn btn-primary btn-sm"
            >
              <UploadCloud className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Evrak Yükle</span>
              <span className="sm:hidden">Yükle</span>
            </button>

            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="btn btn-outline btn-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-500" />
              <span className="hidden sm:inline">VELOX AI</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-ink-500 hover:text-ink-900 hover:bg-paper-100 relative transition-colors"
                title="Bildirimler"
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 bg-gold-500 rounded-full absolute top-1.5 right-1.5"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-pop border border-line p-3 space-y-2 animate-slide-down z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-line">
                    <span className="font-bold text-[13px] text-ink-900">Mali Bildirimler</span>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-[11px] font-mono text-ink-400 hover:text-ink-900"
                    >
                      Kapat
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {notifications.map((n) => (
                      <div key={n.id} className={cn(
                        'p-3 rounded-lg border',
                        n.unread ? 'bg-pine-50/60 border-pine-100' : 'bg-paper-50 border-line'
                      )}>
                        <p className="font-bold text-[13px] text-ink-900">{n.title}</p>
                        <p className="text-ink-500 text-[11px] mt-1 leading-relaxed">{n.text}</p>
                        <span className="text-[10px] font-mono text-ink-300 mt-1.5 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* User Profile */}
            <div className="flex items-center gap-2 pl-3 border-l border-line">
              <img
                src={activeClient.authorizedPerson.avatar}
                alt={activeClient.authorizedPerson.name}
                className="w-8 h-8 rounded-lg object-cover border border-line"
              />
              <span className="hidden md:inline font-medium text-ink-700 text-xs">
                {activeClient.authorizedPerson.name}
              </span>
            </div>
          </div>
        </header>

        {/* Active View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1200px] mx-auto">
            {portalTab === 'overview' && <PortalOverview />}
            {portalTab === 'documents' && <PortalDocuments />}
            {portalTab === 'tax-schedule' && <PortalTaxSchedule />}
            {portalTab === 'processes' && <PortalActiveProcesses />}
            {portalTab === 'tasks' && <PortalTasksAndTickets />}
            {portalTab === 'reports' && <PortalReports />}
            {portalTab === 'profile' && <PortalCompanyProfile />}
          </div>
        </main>

      </div>
    </div>
  );
}
