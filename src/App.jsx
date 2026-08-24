import React from 'react';
import { useApp } from './context/AppContext';
import GlobalModeBar from './components/common/GlobalModeBar';
import ToastContainer from './components/common/ToastContainer';
import CommandPalette from './components/common/CommandPalette';
import AiAssistantModal from './components/common/AiAssistantModal';
import DocumentPreviewModal from './components/common/DocumentPreviewModal';
import BlogReaderModal from './components/common/BlogReaderModal';
import ServiceDetailModal from './components/common/ServiceDetailModal';
import ConsultationModal from './components/common/ConsultationModal';
import DemoGuideModal from './components/common/DemoGuideModal';
import SmmReceiptModal from './components/common/SmmReceiptModal';

import PublicPage from './components/public/PublicPage';
import ClientPortalLayout from './components/portal/ClientPortalLayout';
import AdminLayout from './components/admin/AdminLayout';

import { Sparkles, Zap } from 'lucide-react';

export default function App() {
  const {
    currentMode,
    setIsAiAssistantOpen,
    isAiAssistantOpen
  } = useApp();

  return (
    <div className="min-h-screen bg-[#07080c] text-slate-100 flex flex-col antialiased selection:bg-white selection:text-black">
      
      {/* Universal Top Switcher Bar */}
      <GlobalModeBar />

      {/* Main View Router */}
      <div className="flex-1">
        {currentMode === 'public' && <PublicPage />}
        {currentMode === 'portal' && <ClientPortalLayout />}
        {currentMode === 'admin' && <AdminLayout />}
      </div>

      {/* Floating AI Assistant Orb Button (Bottom Right) */}
      {!isAiAssistantOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="group relative flex items-center space-x-2.5 px-4 py-2.5 bg-[#0e1119]/90 hover:bg-[#141824] backdrop-blur-xl text-white rounded-full shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
            </div>
            <div className="text-left hidden sm:block">
              <div className="flex items-center space-x-1.5">
                <span className="font-bold text-xs tracking-tight text-white">VELOX AI</span>
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
              </div>
              <p className="text-[9px] text-slate-400 font-mono">Finansal Zeka</p>
            </div>
          </button>
        </div>
      )}

      {/* Global Modals & Overlays */}
      <AiAssistantModal />
      <CommandPalette />
      <DocumentPreviewModal />
      <BlogReaderModal />
      <ServiceDetailModal />
      <ConsultationModal />
      <DemoGuideModal />
      <SmmReceiptModal />
      <ToastContainer />

    </div>
  );
}
