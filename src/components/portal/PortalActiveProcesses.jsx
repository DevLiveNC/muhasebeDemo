import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, UserCheck } from 'lucide-react';
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
        { name: 'Son Tahakkuk & Ödeme Fişi', done: false, date: 'Bekliyor' },
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
        { name: 'SGK ve Stopaj Tahakkuku Alımı', done: true, date: '20 Ağustos' },
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
        { name: 'GİB Portalına Yükleme & Berat Alımı', done: false, date: '31 Ağustos' },
      ]
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">Canlı Muhasebe ve Beyanname Süreçleri</h1>
        <p className="text-xs text-slate-400 font-mono">Mali müşavirinizin şirketiniz adına yürüttüğü yasal operasyonel adımlar</p>
      </div>

      <div className="space-y-6">
        {processes.map((proc, idx) => (
          <div key={idx} className="p-6 rounded-2xl obsidian-card border border-white/[0.08] shadow-cinema space-y-5">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="font-bold text-white text-base">{proc.title}</h3>
                <p className="text-xs text-slate-400 flex items-center space-x-2 mt-0.5 font-mono">
                  <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Sorumlu Danışman: <strong className="text-slate-200">{proc.responsible}</strong></span>
                </p>
              </div>

              <span className={cn(
                "px-3 py-1 rounded-full text-xs font-mono font-bold",
                proc.percent === 100 ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" : "bg-white/10 text-slate-200"
              )}>
                {proc.status} ({proc.percent}%)
              </span>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                style={{ width: `${proc.percent}%` }}
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  proc.percent === 100 ? "bg-emerald-400" : "bg-white"
                )}
              />
            </div>

            {/* Sub-stages Stepper */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 pt-2">
              {proc.stages.map((stg, sIdx) => (
                <div
                  key={sIdx}
                  className={cn(
                    "p-3.5 rounded-xl border text-xs space-y-1 transition-all",
                    stg.done 
                      ? "bg-black/40 border-white/10 text-slate-200" 
                      : "bg-black/20 border-white/[0.04] text-slate-500"
                  )}
                >
                  <div className="flex items-center space-x-1.5 font-bold">
                    <CheckCircle2 className={cn("w-3.5 h-3.5", stg.done ? "text-emerald-400" : "text-slate-600")} />
                    <span className={stg.done ? "text-white font-mono text-[11px]" : "text-slate-500 font-mono text-[11px]"}>Adım {sIdx + 1}</span>
                  </div>
                  <p className="text-[11px] leading-tight line-clamp-2">{stg.name}</p>
                  <span className="text-[10px] font-mono text-slate-500 block pt-1">{stg.date}</span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
