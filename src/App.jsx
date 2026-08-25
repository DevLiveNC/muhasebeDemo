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

import { Zap } from 'lucide-react';

export default function App() {
  const {
    currentMode,
    isAiAssistantOpen,
    setIsAiAssistantOpen
  } = useApp();

  return (
    <div className="min-h-screen bg-paper-100 text-ink-800 font-sans antialiased flex flex-col">

      {/* Universal Top Switcher Bar */}
      <GlobalModeBar />

      {/* Main View Router */}
      <div className="flex-1">
        {currentMode === 'public' && <PublicPage />}
        {currentMode === 'portal' && <ClientPortalLayout />}
        {currentMode === 'admin' && <AdminLayout />}
      </div>

      {/* Floating AI Assistant Button */}
      {!isAiAssistantOpen && (
        <div className="fixed bottom-6 right-6 z-40 animate-fade-in">
          <button
            onClick={() => setIsAiAssistantOpen(true)}
            className="group flex items-center gap-3 pl-3.5 pr-4 py-3 bg-pine-800 hover:bg-pine-900 text-white rounded-full shadow-pop transition-all duration-200 hover:-translate-y-0.5 active:scale-95"
          >
            <span className="flex items-center gap-2 text-xs font-bold tracking-wide">
              <Zap className="w-4 h-4 text-gold-300" />
              VELOX AI
            </span>
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-gold-300 opacity-60 animate-ping"></span>
              <span className="relative inline-flex w-2 h-2 rounded-full bg-gold-300"></span>
            </span>
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
