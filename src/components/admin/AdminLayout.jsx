import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Users,
  Briefcase,
  Building2,
  FileText,
  CheckSquare,
  Calendar,
  CreditCard,
  BarChart3,
  UserCheck,
  Globe,
  Settings,
  Sparkles,
  Search,
  Bell,
  ShieldCheck,
  Menu,
  X
} from 'lucide-react';
import { cn } from '../../utils/cn';

// Sub views
import AdminDashboard from './AdminDashboard';
import AdminClients from './AdminClients';
import AdminClientDetail from './AdminClientDetail';
import AdminCRMLeads from './AdminCRMLeads';
import AdminDocuments from './AdminDocuments';
import AdminTasks from './AdminTasks';
import AdminTaxCalendar from './AdminTaxCalendar';
import AdminPayments from './AdminPayments';
import AdminReports from './AdminReports';
import AdminStaff from './AdminStaff';
import AdminWebCMS from './AdminWebCMS';
import AdminSettings from './AdminSettings';

export default function AdminLayout() {
  const {
    adminTab,
    setAdminTab,
    setIsAiAssistantOpen,
    setIsCommandPaletteOpen,
    selectedClient
  } = useApp();

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Genel Kokpit', icon: LayoutDashboard },
    { id: 'clients', label: 'Müşteri Portföyü', icon: Users, badge: '48' },
    { id: 'client-detail', label: '360° Müşteri Kartı', icon: Building2, sub: true },
    { id: 'crm', label: 'CRM & Satış Hattı', icon: Briefcase, badge: '3 Yeni' },
    { id: 'documents', label: 'Evrak & OCR Masası', icon: FileText, badge: '2 Kritik' },
    { id: 'tasks', label: 'İş Takip Panosu', icon: CheckSquare, badge: '5' },
    { id: 'calendar', label: 'Vergi ve Beyan Takvimi', icon: Calendar, badge: '4 Gün' },
    { id: 'payments', label: 'Tahsilat & e-SMM', icon: CreditCard },
    { id: 'reports', label: 'Firma Analitiği', icon: BarChart3 },
    { id: 'staff', label: 'SMMM Ekip & Kapasite', icon: UserCheck },
    { id: 'cms', label: 'Web Sitesi CMS', icon: Globe },
    { id: 'settings', label: 'GİB / SGK Ayarları', icon: Settings }
  ];

  const adminNotifications = [
    { id: 1, title: 'Artisan Gıda 2 Eksik Evrak', text: 'KDV-1 beyanı için ihracat GÇB intaç teyidi bekleniyor.', time: '10 dk önce', unread: true },
    { id: 2, title: 'Solvy Enerji Yeni Başvuru', text: 'Web sitesi üzerinden 25 çalışanlı A.Ş. teklif istedi.', time: '1 saat önce', unread: true },
    { id: 3, title: 'E-Defter Şematron Tamam', text: '32 şirketin Mayıs berat dosyaları hatasız doğrulandı.', time: '3 saat önce', unread: false }
  ];

  const badgeStyle = (badge) => {
    if (badge.includes('Kritik')) return 'bg-danger-soft text-danger-deep border border-danger/20';
    if (badge.includes('Gün')) return 'bg-warning-soft text-warning-deep border border-warning/20';
    if (badge.includes('Yeni')) return 'bg-success-soft text-success-deep border border-success/20';
    return 'bg-paper-200 text-ink-500';
  };

  const Sidebar = (
    <div className="flex flex-col h-full">
      {/* SMMM Header */}
      <div className="p-4 border-b border-line">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-pine-800 text-white flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-[13px] text-ink-950 truncate">VELOX DENETİM</h3>
            <p className="text-[10px] text-ink-400 font-mono mt-0.5">SMMM Yönetici Kokpiti</p>
            <span className="inline-flex items-center gap-1 text-[10px] font-mono text-success-deep">
              <span className="w-1.5 h-1.5 rounded-full bg-success"></span>
              GİB & SGK API Aktif
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
        <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-[0.16em] text-ink-400">
          Yönetim Masası
        </div>
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = adminTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                setAdminTab(item.id);
                setMobileSidebarOpen(false);
              }}
              className={cn(
                'nav-item',
                item.sub && 'pl-6',
                isActive && 'nav-item-active'
              )}
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <Icon className="w-3.5 h-3.5 shrink-0" />
                <span className="truncate">{item.label}</span>
              </div>
              {item.badge && (
                <span className={cn(
                  'text-[10px] px-1.5 py-0.5 rounded font-mono font-semibold shrink-0',
                  isActive ? 'bg-white/20 text-white' : badgeStyle(item.badge)
                )}>
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </div>

      {/* SMMM Profile Card */}
      <div className="p-3 m-3 rounded-xl bg-paper-50 border border-line flex items-center gap-3">
        <img
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
          alt="SMMM Kemal Yıldız"
          className="w-9 h-9 rounded-lg object-cover border border-line"
        />
        <div className="min-w-0 flex-1 text-xs">
          <p className="font-bold text-ink-950 truncate">SMMM Kemal Yıldız</p>
          <p className="text-[10px] text-ink-400 font-mono truncate">Yönetici Ortak · 349102</p>
        </div>
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
          <aside className="absolute left-0 top-0 bottom-0 w-72 bg-white shadow-pop">
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

      {/* Main Admin Area */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* Top Navbar */}
        <header className="h-14 bg-white/95 backdrop-blur border-b border-line px-4 sm:px-6 flex items-center justify-between sticky top-11 z-30">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="p-1.5 rounded-lg text-ink-500 lg:hidden hover:bg-paper-100"
              title="Menü"
            >
              <Menu className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-ink-950 text-sm">
                {menuItems.find((m) => m.id === adminTab)?.label}
              </h2>
              {adminTab === 'client-detail' && (
                <span className="badge badge-neutral font-mono">{selectedClient.shortName}</span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="btn btn-outline btn-sm"
            >
              <Search className="w-3.5 h-3.5 text-ink-400" />
              <span className="hidden md:inline">Müşteri / Evrak Ara...</span>
              <kbd className="hidden lg:inline px-1.5 py-0.5 bg-paper-100 rounded border border-line text-[10px] font-mono text-ink-500">
                ⌘K
              </kbd>
            </button>

            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="btn btn-primary btn-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-300" />
              <span className="hidden sm:inline">VELOX AI</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-2 rounded-lg text-ink-500 hover:text-ink-950 hover:bg-paper-100 relative transition-colors"
                title="Bildirimler"
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 bg-danger rounded-full absolute top-1.5 right-1.5"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-xl shadow-pop border border-line p-3 space-y-2 animate-slide-down z-50">
                  <div className="flex items-center justify-between pb-2 border-b border-line">
                    <span className="font-bold text-[13px] text-ink-950">SMMM Bildirimleri</span>
                    <button
                      onClick={() => setShowNotifications(false)}
                      className="text-[11px] font-mono text-ink-400 hover:text-ink-950"
                    >
                      Kapat
                    </button>
                  </div>
                  <div className="space-y-1.5">
                    {adminNotifications.map((n) => (
                      <div key={n.id} className={cn(
                        'p-3 rounded-lg border',
                        n.unread ? 'bg-warning-soft/50 border-warning/20' : 'bg-paper-50 border-line'
                      )}>
                        <p className="font-bold text-[13px] text-ink-950">{n.title}</p>
                        <p className="text-ink-500 text-[11px] mt-1 leading-relaxed">{n.text}</p>
                        <span className="text-[10px] font-mono text-ink-300 mt-1.5 block">{n.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Profile */}
            <div className="flex items-center gap-2 pl-3 border-l border-line">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
                alt="SMMM Kemal Yıldız"
                className="w-8 h-8 rounded-lg object-cover border border-line"
              />
              <span className="hidden md:inline font-medium text-ink-700 text-xs">SMMM Kemal Yıldız</span>
            </div>
          </div>
        </header>

        {/* Active View */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <div className="max-w-[1400px] mx-auto">
            {adminTab === 'dashboard' && <AdminDashboard />}
            {adminTab === 'clients' && <AdminClients />}
            {adminTab === 'client-detail' && <AdminClientDetail />}
            {adminTab === 'crm' && <AdminCRMLeads />}
            {adminTab === 'documents' && <AdminDocuments />}
            {adminTab === 'tasks' && <AdminTasks />}
            {adminTab === 'calendar' && <AdminTaxCalendar />}
            {adminTab === 'payments' && <AdminPayments />}
            {adminTab === 'reports' && <AdminReports />}
            {adminTab === 'staff' && <AdminStaff />}
            {adminTab === 'cms' && <AdminWebCMS />}
            {adminTab === 'settings' && <AdminSettings />}
          </div>
        </main>

      </div>
    </div>
  );
}
