import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, UserCheck, Circle } from 'lucide-react';
import { cn } from '../../utils/cn';
import PageIntro from '../common/PageIntro';

export default function PortalActiveProcesses() {
  const { clients } = useApp();
  const client = clients.find((c) => c.id === 'cli-1') || clients[0];

  const processes = [
    {
      title: 'Temmuz 2026 KDV beyannamesi',
      responsible: client.assignedCPA.name,
      status: 'Sizin onayınız ve gönderim bekleniyor',
      percent: 85,
      stages: [
        { name: 'Evrak toplama ve okuma', done: true, date: '18 Ağustos' },
        { name: 'Fatura ve mizan kontrolü', done: true, date: '21 Ağustos' },
        { name: 'Teknopark istisna hesabı', done: true, date: '22 Ağustos' },
        { name: 'Gelir İdaresi taslak beyan', done: true, date: '23 Ağustos' },
        { name: 'Ödeme bildirimi', done: false, date: 'Bekliyor' }
      ]
    },
    {
      title: 'Temmuz 2026 stopaj ve SGK bildirimi',
      responsible: 'SMMM Burak Demir',
      status: 'Tamamlandı',
      percent: 100,
      stages: [
        { name: 'Puantaj ve izin girişi', done: true, date: '15 Ağustos' },
        { name: 'Teknopark indirim hesabı', done: true, date: '16 Ağustos' },
        { name: 'Bordro onayı', done: true, date: '17 Ağustos' },
        { name: 'SGK ve stopaj bildirimi', done: true, date: '20 Ağustos' }
      ]
    },
    {
      title: 'Mayıs 2026 e-Defter yüklemesi',
      responsible: client.assignedCPA.name,
      status: 'Hazırlık',
      percent: 50,
      stages: [
        { name: 'Defter kapanış kontrolü', done: true, date: '20 Ağustos' },
        { name: 'Sistem doğrulaması', done: true, date: '22 Ağustos' },
        { name: 'Zaman damgası ve mali mühür', done: false, date: '28 Ağustos' },
        { name: 'Gelir İdaresi yüklemesi', done: false, date: '31 Ağustos' }
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

        <PageIntro
          title="Süreçler"
          lead={`${client.shortName} için mali müşavirinizin yürüttüğü işlerin adımları.`}
        />

      <div className="space-y-6">
        {processes.map((proc, idx) => (
          <div key={idx} className="card p-6 space-y-5">

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-bold text-ink-900 text-base leading-snug">{proc.title}</h3>
                <p className="text-xs text-ink-400 flex items-center gap-2 mt-1.5">
                  <UserCheck className="w-3.5 h-3.5 text-pine-700" />
                  <span>
                    Sorumlu Danışman: <strong className="text-ink-700 font-semibold">{proc.responsible}</strong>
                  </span>
                </p>
              </div>

              <span className={cn(
                'badge shrink-0',
                proc.percent === 100 ? 'badge-success' : 'badge-pine'
              )}>
                {proc.status} · %{proc.percent}
              </span>
            </div>

            {/* Progress */}
            <div className="progress">
              <div
                style={{ width: `${proc.percent}%` }}
                className={cn('progress-bar', proc.percent === 100 && 'progress-bar-success')}
              />
            </div>

            {/* Stages */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
              {proc.stages.map((stg, sIdx) => (
                <div
                  key={sIdx}
                  className={cn(
                    'p-3.5 rounded-xl border text-xs space-y-1.5',
                    stg.done
                      ? 'bg-pine-50/70 border-pine-200'
                      : 'bg-paper-50 border-line'
                  )}
                >
                  <div className="flex items-center gap-1.5 font-bold">
                    {stg.done ? (
                      <CheckCircle2 className="w-3.5 h-3.5 text-pine-700" />
                    ) : (
                      <Circle className="w-3.5 h-3.5 text-ink-300" />
                    )}
                    <span className={cn('font-mono text-[11px]', stg.done ? 'text-pine-800' : 'text-ink-400')}>
                      Adım {sIdx + 1}
                    </span>
                  </div>
                  <p className={cn('text-[11px] leading-tight', stg.done ? 'text-ink-700' : 'text-ink-400')}>
                    {stg.name}
                  </p>
                  <span className={cn('text-[10px] font-mono block pt-0.5', stg.done ? 'text-ink-400' : 'text-ink-300')}>
                    {stg.date}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
