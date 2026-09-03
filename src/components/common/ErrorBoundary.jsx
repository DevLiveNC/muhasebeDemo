import React from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, message: '' };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, message: error.message };
  }

  componentDidCatch(error, info) {
    console.error('liveMuhasebe HALLMARK ErrorBoundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-paper-100 flex items-center justify-center p-6">
          <div className="card max-w-md w-full p-8 text-center space-y-4 animate-scale-in">
            <div className="w-12 h-12 rounded-full bg-danger-soft text-danger-deep flex items-center justify-center mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>
            <h1 className="font-serif text-2xl text-ink-900">Bir şeyler ters gitti</h1>
            <p className="text-sm text-ink-500 leading-relaxed">
              Arayüzde beklenmeyen bir hata oluştu. Verileriniz güvenlidir; sayfayı yenileyerek devam edebilirsiniz.
            </p>
            {this.state.message && (
              <p className="text-[11px] font-mono text-ink-400 bg-paper-100 rounded-lg p-3 text-left">{this.state.message}</p>
            )}
            <button
              onClick={() => window.location.reload()}
              className="btn btn-primary btn-md w-full"
            >
              <RotateCcw className="w-4 h-4" />
              Sayfayı Yenile
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
