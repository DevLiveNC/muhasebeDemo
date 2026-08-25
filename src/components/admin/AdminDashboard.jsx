import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  Users,
  CheckSquare,
  FileText,
  Calendar,
  CreditCard,
  TrendingUp,
  AlertTriangle,
  Send,
  Sparkles,
  ArrowRight,
  ArrowUpRight
} from 'lucide-react';
import { cn } from '../../utils/cn';

export default function AdminDashboard() {
  const {
    clients,
    documents,
    staff,
    setAdminTab,
    openClientDetail,
    sendMissingDocAlert,
    setIsAiAssistantOpen,
    setSelectedDocForPreview
  } = useApp();

  const kpis = [
    {
      label: 'Toplam Portföy',
      value: '48',
      sub: '+3 Bu Çeyrek Yeni',
      subColor: 'text-success-deep',
      icon: Users,
      tab: 'clients'
    },
    {
      label: 'Açık Görevler',
      value: '19',
      sub: '5 Acil Öncelikli',
      subColor: 'text-warning-deep',
      icon: CheckSquare,
      tab: 'tasks'
    },
    {
      label: 'Eksik Evrak',
      value: '6 Belge',
      valueColor: 'text-danger',
      sub: '2 Mükellefte Kritik',
      subColor: 'text-danger',
      icon: FileText,
      tab: 'documents'
    },
    {
      label: 'Son 4 Gün (KDV)',
      value: '12 Beyan',
      sub: '41/48 Tamamlandı',
      subColor: 'text-success-deep',
      icon: Calendar,
      tab: 'calendar'
    },
    {
      label: 'Aylık Tahsilat',
      value: '%95.1',
      valueColor: 'text-pine-700',
      sub: '₺684K / ₺720K',
      subColor: 'text-ink-400',
      icon: CreditCard,
      tab: 'payments'
    },
    {
      label: 'Satış Hattı (CRM)',
      value: '3 Lead',
      sub: '₺82.5K / Ay Potansiyel',
      subColor: 'text-success-deep',
      icon: TrendingUp,
      tab: 'crm'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Welcome Banner */}
      <div className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-neutral">SMMM Yönetici Kokpiti</span>
            <span className="text-ink-400 font-mono text-xs">Ağustos 2026 Beyan Dönemi</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-[26px] text-ink-900 leading-tight">
            Hoş Geldiniz, SMMM Kemal Yıldız
          </h1>
          <p className="text-[13px] text-ink-500">
            Portföydeki 48 kurumsal mükellefin 44'ünde mizan mutabakatı tamamlandı. Bu hafta 12 KDV-1 beyannamesi onay bekliyor.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="btn btn-primary btn-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-300" />
            <span>AI Masası</span>
          </button>
          <button
            onClick={() => setAdminTab('calendar')}
            className="btn btn-outline btn-sm"
          >
            <Calendar className="w-3.5 h-3.5 text-pine-700" />
            <span>Vergi Takvimi</span>
          </button>
        </div>
      </div>

      {/* KPI Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-3 sm:gap-4">
        {kpis.map((kpi, i) => {
          const Icon = kpi.icon;
          return (
            <div
              key={i}
              onClick={() => setAdminTab(kpi.tab)}
              className="card card-hover p-4 space-y-1.5 cursor-pointer"
            >
              <div className="flex items-center justify-between text-ink-400">
                <span className="kpi-label">{kpi.label}</span>
                <Icon className="w-3.5 h-3.5 text-pine-600" />
              </div>
              <p className={cn('font-mono text-[22px] font-semibold tracking-tight leading-none', kpi.valueColor || 'text-ink-900')}>
                {kpi.value}
              </p>
              <p className={cn('text-[10px] font-mono', kpi.subColor)}>{kpi.sub}</p>
            </div>
          );
        })}
      </div>

      {/* Critical Alert */}
      <div className="p-4 rounded-xl bg-warning-soft border border-warning/30 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="p-2 bg-warning/15 text-warning-deep rounded-lg shrink-0">
            <AlertTriangle className="w-4 h-4" />
          </div>
          <div>
            <h4 className="font-bold text-warning-deep text-sm">Kritik Beyan Öncesi Eksik Evrak Uyarısı</h4>
            <p className="text-xs text-ink-600 mt-1">
              <strong>Artisan Gurme Gıda Ltd.</strong> (İhracat GÇB) ve <strong>Pulse Dijital Medya Ltd.</strong> (Meta 2 No KDV) için evraklar eksiktir.
            </p>
          </div>
        </div>

        <button
          onClick={() => sendMissingDocAlert('Artisan & Pulse', 'Temmuz KDV-1 & Tevkifat Evrakları')}
          className="btn btn-gold btn-sm shrink-0"
        >
          <Send className="w-3.5 h-3.5" />
          <span>Toplu SMS / WhatsApp İlet</span>
        </button>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Clients Portfolio */}
        <div className="lg:col-span-7 card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-ink-900 text-sm">Müşteri Portföyü ve Dönem Durumu</h3>
              <p className="text-[11px] text-ink-400 font-mono mt-0.5">KDV-1, SGK ve mizan tamamlanma hızı</p>
            </div>
            <button
              onClick={() => setAdminTab('clients')}
              className="text-xs font-semibold text-pine-700 hover:text-pine-900 flex items-center gap-1 transition-colors"
            >
              <span>Tümünü Listele (48)</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-2">
            {clients.slice(0, 4).map((cl) => (
              <div
                key={cl.id}
                onClick={() => openClientDetail(cl.id)}
                className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-paper-50 border border-line hover:border-pine-300 hover:bg-pine-50/40 transition-colors cursor-pointer group"
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-pine-50 border border-pine-100 text-pine-800 font-bold text-xs flex items-center justify-center shrink-0">
                    {cl.name.substring(0, 2).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-bold text-[13px] text-ink-900 truncate">{cl.shortName}</h4>
                    <p className="text-[11px] text-ink-400 font-mono truncate">
                      VN: {cl.taxNumber} · Sorumlu: {cl.assignedCPA.name.split(' ').slice(-1)[0]}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <div className="text-right hidden sm:block">
                    <span className={cn(
                      'badge',
                      cl.missingDocsCount > 0 ? 'badge-danger' : 'badge-success'
                    )}>
                      {cl.missingDocsCount > 0 ? `${cl.missingDocsCount} Eksik` : 'Eksiksiz'}
                    </span>
                    <span className="text-[10px] text-ink-400 block mt-1">KDV: {cl.kdvStatus.split(' ')[0]}</span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-ink-300 group-hover:text-pine-700 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Staff Workload */}
        <div className="lg:col-span-5 card p-6 space-y-4 self-start">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-ink-900 text-sm">SMMM Ekip İş Yükü</h3>
              <p className="text-[11px] text-ink-400 font-mono mt-0.5">Kapasite ve şirket dağılımı</p>
            </div>
            <button
              onClick={() => setAdminTab('staff')}
              className="text-xs font-semibold text-pine-700 hover:text-pine-900 transition-colors"
            >
              Yönet
            </button>
          </div>

          <div className="space-y-4">
            {staff.map((st) => (
              <div key={st.id} className="space-y-1.5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={st.avatar} alt={st.name} className="w-5 h-5 rounded-md object-cover" />
                    <span className="font-bold text-[13px] text-ink-900">{st.name}</span>
                  </div>
                  <div className="font-mono text-[11px]">
                    <span className="text-ink-900 font-semibold">{st.clientsCount} Şirket</span>
                    <span className="text-ink-400 ml-1">(%{st.workload})</span>
                  </div>
                </div>
                <div className="progress">
                  <div
                    style={{ width: `${st.workload}%` }}
                    className={cn('progress-bar', st.workload > 80 && 'progress-bar-warning')}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="pt-2 border-t border-line">
            <div className="flex items-center justify-between text-[13px] text-ink-500 bg-paper-50 p-3.5 rounded-xl">
              <span>Toplam Ekip Verimlilik Skoru:</span>
              <span className="font-bold text-success-deep font-mono">%94.2 (Mükemmel)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Central Document Pool */}
      <div className="card p-6 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-ink-900 text-sm">Merkezi Evrak Havuzu ve OCR Kayıtları</h3>
            <p className="text-[11px] text-ink-400 font-mono mt-0.5">Son 24 saatte sisteme iletilen fatura ve ekstreler</p>
          </div>
          <button
            onClick={() => setAdminTab('documents')}
            className="text-xs font-semibold text-pine-700 hover:text-pine-900 flex items-center gap-1 transition-colors"
          >
            <span>Evrak Masasını Aç</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="w-full text-left min-w-[680px]">
            <thead>
              <tr className="border-b border-line">
                <th className="th">Müşteri</th>
                <th className="th">Evrak Adı</th>
                <th className="th">Kategori</th>
                <th className="th text-right">Tutar</th>
                <th className="th">OCR Skoru</th>
                <th className="th">Durum</th>
                <th className="th text-right">İşlem</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {documents.slice(0, 5).map((doc) => (
                <tr key={doc.id} className="hover:bg-paper-50 transition-colors">
                  <td className="td font-semibold text-ink-900 whitespace-nowrap">{doc.client.split(' ')[0]}</td>
                  <td className="td">
                    <span className="block truncate max-w-[200px]">{doc.name}</span>
                  </td>
                  <td className="td text-ink-500 whitespace-nowrap">{doc.category}</td>
                  <td className="td font-mono font-semibold text-ink-900 text-right whitespace-nowrap">{doc.amount}</td>
                  <td className="td"><span className="badge badge-success">{doc.ocrConfidence}</span></td>
                  <td className="td">
                    <span className={cn('badge', doc.status === 'Onaylandı' ? 'badge-success' : 'badge-warning')}>
                      {doc.status}
                    </span>
                  </td>
                  <td className="td text-right">
                    <button
                      onClick={() => setSelectedDocForPreview(doc)}
                      className="btn btn-outline btn-sm"
                    >
                      İncele
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
