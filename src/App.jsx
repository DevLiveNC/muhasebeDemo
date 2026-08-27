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
            aria-label="VELOX asistanını aç"
            title="VELOX asistanı"
            className="w-12 h-12 rounded-full bg-pine-700 hover:bg-pine-800 text-white shadow-pop transition-all duration-200 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center relative"
          >
            <Zap className="w-5 h-5 text-gold-300" />
            <span className="absolute -top-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-gold-400 border-2 border-paper-50"></span>
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
