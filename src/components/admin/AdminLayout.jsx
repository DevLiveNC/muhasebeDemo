import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  LayoutDashboard,
  Users,
  Briefcase,
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
  X,
  Building2
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
    { id: 'settings', label: 'GİB / SGK Ayarları', icon: Settings },
  ];

  const adminNotifications = [
    { id: 1, title: 'Artisan Gıda 2 Eksik Evrak', text: 'KDV-1 beyanı için ihracat GÇB intaç teyidi bekleniyor.', time: '10 dk önce', unread: true },
    { id: 2, title: 'Solvy Enerji Yeni Başvuru', text: 'Web sitesi üzerinden 25 çalışanlı A.Ş. teklif istedi.', time: '1 saat önce', unread: true },
    { id: 3, title: 'E-Defter Şematron Tamam', text: '32 şirketin Mayıs berat dosyaları hatasız doğrulandı.', time: '3 saat önce', unread: false }
  ];

  return (
    <div className="min-h-[calc(100vh-2.75rem)] bg-[#08090d] flex flex-col lg:flex-row text-slate-100 font-sans">
      
      {/* Admin Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-[#0a0c12] border-r border-white/[0.08] shrink-0">
        
        {/* SMMM Header */}
        <div className="p-4 border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="w-9 h-9 rounded-lg bg-white text-black flex items-center justify-center font-black text-sm shadow-luxury">
              <ShieldCheck className="w-5 h-5 text-black" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-xs text-white truncate">VELOX DENETİM</h3>
              <p className="text-[10px] text-slate-400 font-mono">SMMM Yönetici Kokpiti</p>
              <span className="inline-flex items-center space-x-1 text-[9px] font-mono text-emerald-400">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                <span>GİB & SGK API Aktif</span>
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
          <div className="px-3 pb-2 text-[10px] font-mono uppercase tracking-widest text-slate-400">
            Yönetim Masası
          </div>
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = adminTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setAdminTab(item.id)}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium transition-all",
                  isActive
                    ? "bg-white text-black font-bold shadow-luxury"
                    : "text-slate-400 hover:text-white hover:bg-white/[0.04]",
                  item.sub && "pl-6 border-l-2 border-white/10 ml-2 w-[calc(100%-0.5rem)]"
                )}
              >
                <div className="flex items-center space-x-2.5">
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.2 rounded font-mono font-bold",
                    item.badge.includes('Kritik') || item.badge.includes('Gün') 
                      ? "bg-rose-500/20 text-rose-300 border border-rose-500/30" 
                      : item.badge.includes('Yeni')
                      ? "bg-emerald-500/20 text-emerald-300 border border-emerald-500/30"
                      : isActive
                      ? "bg-black text-white"
                      : "bg-white/10 text-slate-300"
                  )}>
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* SMMM Profile Card */}
        <div className="p-3 m-3 rounded-xl bg-white/[0.02] border border-white/[0.08] flex items-center space-x-3">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
            alt=""
            className="w-8 h-8 rounded-lg object-cover border border-white/10"
          />
          <div className="min-w-0 flex-1 text-xs">
            <p className="font-bold text-white truncate">SMMM Kemal Yıldız</p>
            <p className="text-[10px] text-slate-400 font-mono truncate">Yönetici Ortak · 349102</p>
          </div>
        </div>

      </aside>

      {/* Main Admin Area */}
      <div className="flex-1 flex flex-col min-w-0">
        
        {/* Top Navbar */}
        <header className="h-14 bg-[#0a0c12] border-b border-white/[0.08] px-4 sm:px-6 flex items-center justify-between sticky top-11 z-30">
          <div className="flex items-center space-x-3">
            <button
              onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
              className="p-1.5 rounded-lg text-slate-400 lg:hidden hover:bg-white/10"
            >
              {mobileSidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <div>
              <div className="flex items-center space-x-2">
                <h2 className="font-bold text-white text-sm">
                  {menuItems.find((m) => m.id === adminTab)?.label}
                </h2>
                {adminTab === 'client-detail' && (
                  <span className="px-2 py-0.5 bg-white/10 text-slate-200 font-mono text-[11px] rounded border border-white/10">
                    {selectedClient.shortName}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-2 sm:space-x-3 text-xs">
            <button
              onClick={() => setIsCommandPaletteOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/[0.08] transition-colors"
            >
              <Search className="w-3.5 h-3.5 text-slate-400" />
              <span className="hidden md:inline">Müşteri / Evrak Ara...</span>
              <kbd className="hidden lg:inline px-1 bg-black/60 rounded border border-white/10 text-[10px] font-mono">⌘K</kbd>
            </button>

            <button
              onClick={() => setIsAiAssistantOpen(true)}
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-white text-black hover:bg-slate-200 font-bold uppercase tracking-wider text-[11px] shadow-luxury transition-all"
            >
              <Sparkles className="w-3.5 h-3.5 text-black" />
              <span className="hidden sm:inline">Aura AI Asistan</span>
            </button>

            {/* Notifications */}
            <div className="relative">
              <button
                onClick={() => setShowNotifications(!showNotifications)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.06] relative"
              >
                <Bell className="w-4 h-4" />
                <span className="w-2 h-2 bg-rose-500 rounded-full absolute top-1 right-1"></span>
              </button>

              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-[#0f121a] rounded-xl shadow-2xl border border-white/10 p-3 space-y-2 text-xs z-50 animate-slide-down">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.08]">
                    <span className="font-bold text-white">SMMM Bildirimleri</span>
                    <button onClick={() => setShowNotifications(false)} className="text-[10px] font-mono text-slate-400">Kapat</button>
                  </div>
                  <div className="space-y-1.5">
                    {adminNotifications.map((n) => (
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
          </div>
        </header>

        {/* Mobile menu dropdown */}
        {mobileSidebarOpen && (
          <div className="lg:hidden bg-[#0c0e16] p-4 space-y-1 border-b border-white/10 text-xs">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  setAdminTab(item.id);
                  setMobileSidebarOpen(false);
                }}
                className={cn(
                  "w-full flex items-center justify-between px-3 py-2 rounded-lg font-medium",
                  adminTab === item.id ? "bg-white text-black font-bold" : "text-slate-300 hover:bg-white/[0.04]"
                )}
              >
                <span>{item.label}</span>
              </button>
            ))}
          </div>
        )}

        {/* Admin Tab View */}
        <main className="p-4 sm:p-6 lg:p-8 flex-1 max-w-7xl">
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
        </main>

      </div>

    </div>
  );
}
