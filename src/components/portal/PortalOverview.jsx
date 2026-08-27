import React from 'react';
import { useApp } from '../../context/AppContext';
import {
  TrendingUp,
  Sparkles,
  FileText,
  CreditCard,
  UploadCloud,
  ArrowRight,
  Calendar,
  MessageSquare,
  Download
} from 'lucide-react';
import { cn } from '../../utils/cn';
import Term from '../common/Term';

export default function PortalOverview() {
  const {
    clients,
    taxCalendar,
    setPortalTab,
    setIsAiAssistantOpen,
    addToast
  } = useApp();

  const client = clients.find((c) => c.id === 'cli-1') || clients[0];

  const processes = [
    {
      title: 'Temmuz 2026 KDV beyannamesi',
      desc: 'Teknopark yazılım KDV istisnası kontrol edildi. Taslak onayda.',
      percent: 85,
      label: '%85 tamamlandı'
    },
    {
      title: 'Stopaj ve SGK bildirimi',
      desc: '34 personel bordrosu onaylandı, ödeme bildirimi alındı.',
      percent: 100,
      label: '%100 ödendi'
    },
    {
      title: 'Mayıs 2026 e-Defter yüklemesi',
      desc: 'Defter dosyaları zaman damgası hazırlığında.',
      percent: 50,
      label: '%50 kontrolde'
    }
  ];

  const urgentTaxes = taxCalendar
    .filter((t) => t.status !== 'Tamamlandı')
    .sort((a, b) => a.remainingDays - b.remainingDays)
    .slice(0, 3);

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Top Banner */}
      <div className="card p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="space-y-1.5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="badge badge-pine">
              <span className="w-1.5 h-1.5 rounded-full bg-pine-600"></span>
              Teknopark vergi indirimi açık
            </span>
            <span className="text-ink-400 font-mono text-xs">{client.taxOffice}</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-[28px] text-ink-900 leading-tight">
            {client.name}
          </h1>
          <p className="text-[13px] text-ink-500">
            Ağustos 2026 dönemi tamam. Çeyrek KDV iade dosyası yeminli mali müşavire gönderildi.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setPortalTab('documents')}
            className="btn btn-primary btn-sm"
          >
            <UploadCloud className="w-3.5 h-3.5" />
            <span>Evrak Yükle</span>
          </button>
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="btn btn-outline btn-sm"
          >
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
            <span>AI Analizi</span>
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

        <div className="card p-5 space-y-2">
          <div className="flex items-center justify-between text-ink-400">
            <span className="kpi-label">Kalan nakit</span>
            <TrendingUp className="w-3.5 h-3.5 text-success" />
          </div>
          <div className="font-mono text-[26px] font-semibold text-ink-900 tracking-tight leading-none">
            {client.cashRunwayMonths}
          </div>
          <p className="text-[11px] text-ink-400">Aylık harcama: {client.monthlyBurnRate}</p>
        </div>

        <div className="card p-5 space-y-2">
          <div className="flex items-center justify-between text-ink-400">
            <span className="kpi-label">Teknopark bordro indirimi</span>
            <Sparkles className="w-3.5 h-3.5 text-gold-500" />
          </div>
          <div className="font-mono text-[26px] font-semibold text-pine-700 tracking-tight leading-none">
            ₺38.400 / Ay
          </div>
          <p className="text-[11px] text-ink-400">34 mühendis stopaj indirimi</p>
        </div>

        <div className="card p-5 space-y-2">
          <div className="flex items-center justify-between text-ink-400">
            <span className="kpi-label">Temmuz <Term meaning="Katma Değer Vergisi — satış vergisinin aylık beyannamesi">KDV</Term> beyannamesi</span>
            <FileText className="w-3.5 h-3.5 text-pine-600" />
          </div>
          <div className="text-lg font-bold text-ink-900 leading-tight">Taslak Onaylandı</div>
          <p className="text-[11px] text-success-deep font-semibold">Gelir İdaresi onayına 4 gün</p>
        </div>

        <div className="card p-5 space-y-2">
          <div className="flex items-center justify-between text-ink-400">
            <span className="kpi-label">Çeyrek net satış</span>
            <CreditCard className="w-3.5 h-3.5 text-ink-400" />
          </div>
          <div className="font-mono text-[26px] font-semibold text-ink-900 tracking-tight leading-none">
            {client.quarterlyRevenue}
          </div>
          <p className="text-[11px] text-ink-400">Faaliyet kâr marjı: {client.netMargin}</p>
        </div>
      </div>

      {/* Two Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Left: Process Pipeline */}
        <div className="lg:col-span-7 card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-ink-900 text-sm">Devam eden işler</h3>
              <p className="text-[11px] text-ink-400 mt-0.5">Ağustos 2026</p>
            </div>
            <button
              onClick={() => setPortalTab('processes')}
              className="text-xs font-semibold text-pine-700 hover:text-pine-900 flex items-center gap-1 transition-colors"
            >
              <span>Tüm süreçler</span>
              <ArrowRight className="w-3 h-3" />
            </button>
          </div>

          <div className="space-y-3">
            {processes.map((proc, i) => (
              <div key={i} className="p-4 rounded-xl bg-paper-50 border border-line space-y-2.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-bold text-[13px] text-ink-900">{proc.title}</span>
                  <span className={cn(
                    'badge shrink-0',
                    proc.percent === 100 ? 'badge-success' : 'badge-neutral'
                  )}>
                    {proc.label}
                  </span>
                </div>
                <p className="text-xs text-ink-500 leading-relaxed">{proc.desc}</p>
                <div className="progress">
                  <div
                    style={{ width: `${proc.percent}%` }}
                    className={cn('progress-bar', proc.percent === 100 && 'progress-bar-success')}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Deadlines + Quick Actions */}
        <div className="lg:col-span-5 space-y-6">
          <div className="card p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-ink-900 text-sm">Yaklaşan ödemeler</h3>
              <span className="text-[10px] text-ink-400">Vergi takvimi</span>
            </div>

            <div className="space-y-2.5">
              {urgentTaxes.map((tax) => {
                const urgent = tax.remainingDays <= 4 && tax.remainingDays > 0;
                return (
                  <div key={tax.id} className={cn(
                    'p-4 rounded-xl border space-y-1.5',
                    urgent ? 'bg-warning-soft/50 border-warning/30' : 'bg-paper-50 border-line'
                  )}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="font-bold text-[13px] text-ink-900 leading-snug">{tax.title}</span>
                      <span className={cn('badge shrink-0', urgent ? 'badge-warning' : 'badge-success')}>
                        {tax.remainingDays > 0 ? `${tax.remainingDays} gün` : 'Kapandı'}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-mono text-ink-400">
                      <span>Termin: {tax.deadline}</span>
                      <button
                        onClick={() => setPortalTab('tax-schedule')}
                        className="text-pine-700 font-semibold hover:text-pine-900 transition-colors"
                      >
                        İncele →
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="card p-6 space-y-3">
            <h3 className="font-bold text-ink-900 text-sm">Hızlı işlemler</h3>
            <button
              onClick={() => setPortalTab('documents')}
              className="btn btn-outline btn-sm w-full justify-start"
            >
              <UploadCloud className="w-3.5 h-3.5 text-pine-700" />
              <span>Fatura yükle</span>
            </button>
            <button
              onClick={() => setPortalTab('tasks')}
              className="btn btn-outline btn-sm w-full justify-start"
            >
              <MessageSquare className="w-3.5 h-3.5 text-pine-700" />
              <span>Mali müşavire yaz</span>
            </button>
            <button
              onClick={() => addToast('Rapor indirildi', 'Ağustos 2026 özeti PDF olarak indirildi.', 'success')}
              className="btn btn-outline btn-sm w-full justify-start"
            >
              <Download className="w-3.5 h-3.5 text-pine-700" />
              <span>Aylık raporu indir</span>
            </button>
            <button
              onClick={() => setPortalTab('tax-schedule')}
              className="btn btn-outline btn-sm w-full justify-start"
            >
              <Calendar className="w-3.5 h-3.5 text-pine-700" />
              <span>Tüm son günleri gör</span>
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}
