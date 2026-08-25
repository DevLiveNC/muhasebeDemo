import React from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';

/**
 * Global safety net: if any component throws during render, React would otherwise
 * unmount the whole tree and leave the user staring at an empty dark page.
 * This keeps the failure visible and recoverable instead.
 */
export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    // Surface the real cause in the console so it is never silently swallowed.
    console.error('[VELOX] Render hatası yakalandı:', error, errorInfo);
  }

  render() {
    const { error } = this.state;

    if (!error) return this.props.children;

    return (
      <div className="min-h-screen bg-[#07080c] flex items-center justify-center px-4 py-16 text-slate-100">
        <div className="w-full max-w-xl obsidian-card rounded-2xl p-8 text-center">
          <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center mx-auto mb-5">
            <AlertTriangle className="w-5 h-5 text-red-400" />
          </div>
          <h1 className="text-xl font-bold text-white">Sayfa görüntülenirken bir hata oluştu</h1>
          <p className="text-xs text-slate-400 mt-2 leading-relaxed">
            Uygulamanın bir bölümü beklenmedik şekilde hata verdi. Sayfayı yenileyerek tekrar
            deneyebilir, hata detayını aşağıdan inceleyebilirsiniz.
          </p>

          <div className="mt-6 rounded-lg bg-black/50 border border-white/[0.08] p-4 text-left">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500 block mb-1.5">
              Hata
            </span>
            <code className="block font-mono text-[11px] text-red-300 break-words whitespace-pre-wrap">
              {String((error && error.message) || error)}
            </code>
          </div>

          <button
            onClick={() => window.location.reload()}
            className="mt-6 inline-flex items-center space-x-2 px-5 py-2.5 bg-white hover:bg-slate-200 text-black rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Sayfayı Yenile</span>
          </button>
        </div>
      </div>
    );
  }
}
