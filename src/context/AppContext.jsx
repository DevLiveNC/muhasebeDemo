import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  FIRM_INFO,
  MOCK_CLIENTS,
  MOCK_DOCUMENTS,
  MOCK_TASKS,
  MOCK_TAX_CALENDAR,
  MOCK_LEADS,
  MOCK_STAFF,
  MOCK_PAYMENTS,
  MOCK_BLOG_POSTS,
  MOCK_SERVICES,
  MOCK_TESTIMONIALS
} from '../data/mockData';

const AppContext = createContext(null);

export { AppContext };

export function AppProvider({ children }) {
  // Navigation Modes: 'public' | 'portal' | 'admin'
  const [currentMode, setCurrentMode] = useState('public');
  
  // Public sub-page / anchor state
  const [publicView, setPublicView] = useState('home');
  
  // Portal sub-tab
  const [portalTab, setPortalTab] = useState('overview');
  
  // Admin sub-tab
  const [adminTab, setAdminTab] = useState('dashboard');
  
  // Selected Client for detail view in Admin
  const [selectedClientId, setSelectedClientId] = useState('cli-1');
  
  // Active Modals
  const [selectedDocForPreview, setSelectedDocForPreview] = useState(null);
  const [selectedBlogForReader, setSelectedBlogForReader] = useState(null);
  const [selectedServiceDetail, setSelectedServiceDetail] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isAiAssistantOpen, setIsAiAssistantOpen] = useState(false);
  const [isDemoGuideOpen, setIsDemoGuideOpen] = useState(false);
  const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);
  const [isSmmModalOpen, setIsSmmModalOpen] = useState(null); // holds payment data if open

  // Interactive Live Data State
  const [clients, setClients] = useState(MOCK_CLIENTS);
  const [documents, setDocuments] = useState(MOCK_DOCUMENTS);
  const [tasks, setTasks] = useState(MOCK_TASKS);
  const [leads, setLeads] = useState(MOCK_LEADS);
  const [payments, setPayments] = useState(MOCK_PAYMENTS);
  const [taxCalendar, setTaxCalendar] = useState(MOCK_TAX_CALENDAR);

  // Toast notifications
  const [toasts, setToasts] = useState([]);

  const addToast = (title, message, type = 'success') => {
    const id = Date.now() + Math.random().toString();
    const newToast = { id, title, message, type, timestamp: new Date() };
    setToasts((prev) => [newToast, ...prev].slice(0, 5));

    setTimeout(() => {
      removeToast(id);
    }, 4500);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // Keyboard shortcut listener for Cmd+K and ESC
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandPaletteOpen(false);
        setSelectedDocForPreview(null);
        setSelectedBlogForReader(null);
        setSelectedServiceDetail(null);
        setIsConsultationOpen(false);
        setIsDemoGuideOpen(false);
        setIsNewTaskModalOpen(false);
        setIsSmmModalOpen(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Action helpers for interactive demo
  const approveDocument = (docId) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === docId ? { ...doc, status: 'Onaylandı', notes: 'SMMM Kemal Yıldız tarafından onaylandı ve kayda alındı.' } : doc
      )
    );
    addToast('Evrak Onaylandı', 'Belge resmi muhasebe kayıtlarına aktarıldı.', 'success');
  };

  const sendMissingDocAlert = (clientName, missingDocs) => {
    addToast('Eksik Evrak Bildirimi Gönderildi', `${clientName} yetkilisine SMS ve E-Posta ile evrak yükleme linki iletildi.`, 'info');
  };

  const updateTaskStatus = (taskId, newStatus) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
              progress: newStatus === 'Tamamlandı' ? 100 : newStatus === 'İnceleniyor' ? 75 : 30
            }
          : task
      )
    );
    addToast('Görev Güncellendi', `Görev durumu "${newStatus}" olarak kaydedildi.`, 'success');
  };

  const addNewDocument = (newDoc) => {
    const docWithId = {
      ...newDoc,
      id: `doc-${Date.now()}`,
      uploadDate: new Date().toISOString().split('T')[0]
    };
    setDocuments((prev) => [docWithId, ...prev]);
    addToast('Evrak Başarıyla Yüklendi', `${newDoc.name} sisteme yüklendi ve yapay zeka OCR taraması tamamlandı (%99.4).`, 'success');
  };

  const addNewClient = (newClient) => {
    const clientWithId = {
      ...newClient,
      id: `cli-${Date.now()}`,
      status: 'Aktif',
      balance: 0,
      missingDocsCount: 0,
      pendingDocsCount: 0,
      complianceScore: 100
    };
    setClients((prev) => [clientWithId, ...prev]);
    addToast('Yeni Müşteri Eklendi', `${newClient.name} portföye eklendi ve ilk açılış bildirimleri gönderildi.`, 'success');
  };

  const openClientDetail = (clientId) => {
    setSelectedClientId(clientId);
    setCurrentMode('admin');
    setAdminTab('client-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToMode = (mode, subTab = null) => {
    setCurrentMode(mode);
    if (mode === 'portal' && subTab) setPortalTab(subTab);
    if (mode === 'admin' && subTab) setAdminTab(subTab);
    if (mode === 'public' && subTab) setPublicView(subTab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const selectedClient = clients.find((c) => c.id === selectedClientId) || clients[0];

  return (
    <AppContext.Provider
      value={{
        currentMode,
        setCurrentMode,
        publicView,
        setPublicView,
        portalTab,
        setPortalTab,
        adminTab,
        setAdminTab,
        selectedClientId,
        setSelectedClientId,
        selectedClient,
        openClientDetail,
        navigateToMode,

        // Data & Live state
        firmInfo: FIRM_INFO,
        clients,
        documents,
        tasks,
        leads,
        payments,
        taxCalendar,
        services: MOCK_SERVICES,
        blogPosts: MOCK_BLOG_POSTS,
        testimonials: MOCK_TESTIMONIALS,
        staff: MOCK_STAFF,

        // Actions
        approveDocument,
        sendMissingDocAlert,
        updateTaskStatus,
        addNewDocument,
        addNewClient,

        // Modals & Overlays
        selectedDocForPreview,
        setSelectedDocForPreview,
        selectedBlogForReader,
        setSelectedBlogForReader,
        selectedServiceDetail,
        setSelectedServiceDetail,
        isConsultationOpen,
        setIsConsultationOpen,
        isCommandPaletteOpen,
        setIsCommandPaletteOpen,
        isAiAssistantOpen,
        setIsAiAssistantOpen,
        isDemoGuideOpen,
        setIsDemoGuideOpen,
        isNewTaskModalOpen,
        setIsNewTaskModalOpen,
        isSmmModalOpen,
        setIsSmmModalOpen,

        // Toasts
        toasts,
        addToast,
        removeToast,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
