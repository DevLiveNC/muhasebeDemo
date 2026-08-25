import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, UserCheck, Circle } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PortalActiveProcesses() {
  const { clients } = useApp();
  const client = clients.find((c) => c.id === 'cli-1') || clients[0];

  const processes = [
    {
      title: 'Temmuz 2026 KDV-1 ve 2 No KDV Beyannamesi',
      responsible: 'SMMM Kemal Yıldız',
      status: 'Mükellef Onayı & GİB Gönderiminde',
      percent: 85,
      stages: [
        { name: 'Evrakların Toplanması & OCR', done: true, date: '18 Ağustos' },
        { name: 'Mizan & Fatura Çapraz Kontrolleri', done: true, date: '21 Ağustos' },
        { name: '4691 Teknopark İstisna Hesaplaması', done: true, date: '22 Ağustos' },
        { name: 'GİB Sistemi Taslak Beyanname', done: true, date: '23 Ağustos' },
        { name: 'Son Tahakkuk & Ödeme Fişi', done: false, date: 'Bekliyor' }
      ]
    },
    {
      title: 'Temmuz 2026 Muhtasar ve Prim Hizmet Beyannamesi (SGK)',
      responsible: 'SMMM Burak Demir',
      status: 'Tamamlandı & Onaylandı',
      percent: 100,
      stages: [
        { name: 'Puantaj ve İzin Tablosu Girişi', done: true, date: '15 Ağustos' },
        { name: '4691 Sayılı Kanun Teşvik Simülasyonu', done: true, date: '16 Ağustos' },
        { name: 'Bordro İcmalinin Onaylanması', done: true, date: '17 Ağustos' },
        { name: 'SGK ve Stopaj Tahakkuku Alımı', done: true, date: '20 Ağustos' }
      ]
    },
    {
      title: 'Mayıs 2026 E-Defter Berat Yüklemesi',
      responsible: 'SMMM Kemal Yıldız',
      status: 'Hazırlık Aşamasında',
      percent: 50,
      stages: [
        { name: 'Yevmiye ve Kebir Kapanış Kontrolleri', done: true, date: '20 Ağustos' },
        { name: 'GİB Şematron XML Doğrulaması', done: true, date: '22 Ağustos' },
        { name: 'Zaman Damgası & Mali Mühür İmza', done: false, date: '28 Ağustos' },
        { name: 'GİB Portalına Yükleme & Berat Alımı', done: false, date: '31 Ağustos' }
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in">

      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight">
          Canlı Muhasebe ve Beyanname Süreçleri
        </h1>
        <p className="text-xs text-ink-400 mt-1">
          Mali müşavirinizin {client.shortName} adına yürüttüğü yasal operasyonel adımlar
        </p>
      </div>

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
