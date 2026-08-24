import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  ArrowRight,
  AlertTriangle,
  FileText,
  Calendar,
  CheckCircle2,
  PhoneCall,
  Clock,
  RotateCcw,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { AI_PRECONFIGURED_RESPONSES } from '../../data/mockData';
import { cn } from '../../utils/cn';

export default function AiAssistantModal() {
  const {
    isAiAssistantOpen,
    setIsAiAssistantOpen,
    sendMissingDocAlert,
    navigateToMode,
    openClientDetail
  } = useApp();

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'msg-0',
      sender: 'ai',
      text: 'VELOX Finansal AI Motoru devrede. 48 portföy mükellefi, Tekdüzen hesap planı, GİB beyanname takvimi ve e-Defter beratları senkronize edildi. Hangi konuda analiz veya işlem yapmak istersiniz?',
      timestamp: 'Şimdi',
      chips: [
        { label: 'Bu hafta hangi mükelleflerden evrak bekliyoruz?', key: 'evrak' },
        { label: 'Geciken işlemleri ve yasal riskleri göster', key: 'geciken' },
        { label: 'Bugün yapılması gereken SMMM görevlerini listele', key: 'bugun' },
        { label: 'TechVision A.Ş. 360° denetim & mizan raporu', key: 'techvision' }
      ]
    }
  ]);

  if (!isAiAssistantOpen) return null;

  const handleChipClick = (key, label) => {
    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: label,
      timestamp: 'Şimdi'
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const respData = AI_PRECONFIGURED_RESPONSES[key] || AI_PRECONFIGURED_RESPONSES['evrak'];
      const aiMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        data: respData,
        timestamp: 'Şimdi'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputQuery.trim()) return;

    const query = inputQuery.trim();
    setInputQuery('');

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: 'Şimdi'
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      let respKey = 'evrak';
      const lower = query.toLowerCase();
      if (lower.includes('gecik') || lower.includes('risk') || lower.includes('tahsilat')) {
        respKey = 'geciken';
      } else if (lower.includes('bugün') || lower.includes('görev') || lower.includes('yapılacak')) {
        respKey = 'bugun';
      } else if (lower.includes('techvision') || lower.includes('yazılım') || lower.includes('şirket') || lower.includes('mizan')) {
        respKey = 'techvision';
      }

      const respData = AI_PRECONFIGURED_RESPONSES[respKey];
      const aiMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: 'ai',
        data: respData,
        timestamp: 'Şimdi'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 750);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'msg-0',
        sender: 'ai',
        text: 'Finansal oturum sıfırlandı. Portföyünüz veya mevzuat süreçlerinizle ilgili ne analiz etmek istersiniz?',
        timestamp: 'Şimdi',
        chips: [
          { label: 'Bu hafta hangi mükelleflerden evrak bekliyoruz?', key: 'evrak' },
          { label: 'Geciken işlemleri ve yasal riskleri göster', key: 'geciken' },
          { label: 'Bugün yapılması gereken SMMM görevlerini listele', key: 'bugun' },
          { label: 'TechVision A.Ş. 360° denetim & mizan raporu', key: 'techvision' }
        ]
      }
    ]);
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center sm:p-4 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-2xl bg-[#0b0d13] rounded-t-2xl sm:rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col h-[88vh] max-h-[720px] transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-black/60 text-white flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
              <Zap className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-bold text-sm tracking-tight text-white">VELOX Aura AI Finansal Zeka</h3>
                <span className="px-2 py-0.5 text-[9px] font-mono font-bold bg-white/10 text-slate-300 rounded border border-white/10">
                  GİB & VUK v4.2
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-mono">Canlı Portföy, Mizan ve Mevzuat Asistanı</p>
            </div>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleResetChat}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Sohbeti Sıfırla"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsAiAssistantOpen(false)}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Kapat"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-black/40">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={cn(
                "flex items-start space-x-3",
                msg.sender === 'user' ? "justify-end" : "justify-start"
              )}
            >
              {msg.sender === 'ai' && (
                <div className="w-6 h-6 rounded bg-white/10 border border-white/10 text-white flex items-center justify-center shrink-0 mt-1">
                  <Bot className="w-3.5 h-3.5 text-slate-300" />
                </div>
              )}

              <div className={cn(
                "max-w-[85%] rounded-xl p-4 text-xs sm:text-sm leading-relaxed",
                msg.sender === 'user'
                  ? "bg-white text-black font-semibold rounded-tr-none shadow-luxury"
                  : "bg-[#11141d] text-slate-200 rounded-tl-none border border-white/[0.08] shadow-cinema"
              )}>
                {/* Standard Text */}
                {msg.text && (
                  <p className="whitespace-pre-line text-xs font-mono">{msg.text}</p>
                )}

                {/* Structured AI Response Data */}
                {msg.data && (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="border-b border-white/[0.06] pb-2">
                      <h4 className="font-bold text-white text-xs sm:text-sm flex items-center space-x-1.5 font-sans">
                        <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                        <span>{msg.data.title}</span>
                      </h4>
                      <p className="text-xs text-slate-400 mt-1">{msg.data.content}</p>
                    </div>

                    {/* Evrak Items */}
                    {msg.data.type === 'evrak_summary' && (
                      <div className="space-y-2 mt-2">
                        {msg.data.items.map((item, idx) => (
                          <div key={idx} className="p-3 bg-black/50 rounded-lg border border-amber-500/20 text-xs">
                            <div className="flex items-center justify-between font-bold text-white font-sans">
                              <span>{item.company}</span>
                              <span className="text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded text-[10px] border border-amber-500/20 font-mono">
                                {item.urgency}
                              </span>
                            </div>
                            <p className="text-slate-400 mt-1 font-mono text-[11px]">
                              <strong className="text-slate-200">Eksik:</strong> {item.missing}
                            </p>
                            <div className="mt-2 flex items-center space-x-2">
                              <button
                                onClick={() => {
                                  sendMissingDocAlert(item.company, item.missing);
                                }}
                                className="px-2.5 py-1 bg-white hover:bg-slate-200 text-black rounded text-[10px] font-bold uppercase tracking-wider transition-colors flex items-center space-x-1"
                              >
                                <span>{item.action}</span>
                                <ArrowRight className="w-3 h-3 text-black" />
                              </button>
                            </div>
                          </div>
                        ))}
                        {msg.data.summaryStats && (
                          <p className="text-[11px] text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                            ✓ {msg.data.summaryStats}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Geciken Items */}
                    {msg.data.type === 'delay_summary' && (
                      <div className="space-y-2 mt-2">
                        {msg.data.items.map((item, idx) => (
                          <div key={idx} className="p-3 bg-black/50 rounded-lg border border-rose-500/20 text-xs">
                            <div className="flex items-center justify-between font-bold text-white font-sans">
                              <span>{item.title}</span>
                              <span className="text-rose-400 text-[10px]">{item.status}</span>
                            </div>
                            <p className="text-slate-400 mt-0.5 text-[11px]">Mükellef: {item.company} · Denetçi: {item.assigned}</p>
                          </div>
                        ))}
                        <p className="text-[11px] text-slate-300 bg-white/[0.04] p-2 rounded border border-white/[0.08]">
                          💡 <strong className="text-white">Aksiyon Önerisi:</strong> {msg.data.recommendation}
                        </p>
                      </div>
                    )}

                    {/* Today Items */}
                    {msg.data.type === 'today_summary' && (
                      <div className="space-y-2 mt-2">
                        {msg.data.items.map((item, idx) => (
                          <div key={idx} className="p-2.5 bg-black/40 rounded-lg border border-white/[0.06] text-xs flex items-center justify-between">
                            <div className="flex items-center space-x-2">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              <span className="font-bold text-white">{item.time}</span>
                              <span className="text-slate-300 font-sans text-xs">{item.task}</span>
                            </div>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-slate-300 shrink-0">
                              {item.priority}
                            </span>
                          </div>
                        ))}
                        <p className="text-[11px] text-emerald-400 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                          ⚡ {msg.data.productivityTip}
                        </p>
                      </div>
                    )}

                    {/* Client TechVision summary */}
                    {msg.data.type === 'client_summary' && (
                      <div className="space-y-2 mt-2 text-xs">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {msg.data.metrics.map((m, idx) => (
                            <div key={idx} className="p-2 bg-black/40 rounded border border-white/[0.06]">
                              <span className="text-slate-500 block text-[10px] uppercase">{m.label}</span>
                              <span className="text-white font-bold text-xs">{m.value}</span>
                            </div>
                          ))}
                        </div>
                        <p className="text-[11px] text-slate-300 bg-white/[0.04] p-2 rounded border border-white/[0.08]">
                          📌 {msg.data.notes}
                        </p>
                        <button
                          onClick={() => {
                            setIsAiAssistantOpen(false);
                            openClientDetail('cli-1');
                          }}
                          className="w-full py-2 bg-white hover:bg-slate-200 text-black rounded font-bold uppercase tracking-wider text-xs flex items-center justify-center space-x-1.5 transition-colors shadow-luxury"
                        >
                          <span>TechVision A.Ş. 360° Mizan & Detay Ekranını Aç</span>
                          <ArrowRight className="w-3.5 h-3.5 text-black" />
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Prompt Chips */}
                {msg.chips && (
                  <div className="mt-3 pt-3 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                    {msg.chips.map((chip, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleChipClick(chip.key, chip.label)}
                        className="text-left text-[11px] font-mono bg-white/[0.04] hover:bg-white/10 text-slate-300 hover:text-white px-2.5 py-1 rounded border border-white/10 transition-colors"
                      >
                        ⚡ {chip.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {msg.sender === 'user' && (
                <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center shrink-0 mt-1 font-bold text-[10px]">
                  U
                </div>
              )}
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-3 animate-fade-in">
              <div className="w-6 h-6 rounded bg-white/10 text-white flex items-center justify-center shrink-0">
                <Sparkles className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
              </div>
              <div className="bg-[#11141d] border border-white/10 rounded-xl rounded-tl-none p-3 shadow-card flex items-center space-x-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSendMessage} className="p-3 sm:p-4 bg-black/60 border-t border-white/[0.08] flex items-center space-x-2">
          <input
            type="text"
            placeholder="Finansal komut veya soru yazın... (örn: 'Bu ayki beyannameleri özetle')"
            value={inputQuery}
            onChange={(e) => setInputQuery(e.target.value)}
            className="flex-1 bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-xs font-mono text-white placeholder-slate-500 focus:outline-none focus:border-white"
          />
          <button
            type="submit"
            disabled={!inputQuery.trim() || isTyping}
            className="p-2.5 rounded-lg bg-white hover:bg-slate-200 disabled:opacity-40 disabled:cursor-not-allowed text-black shadow-luxury transition-all shrink-0 font-bold"
          >
            <Send className="w-3.5 h-3.5 text-black" />
          </button>
        </form>
      </div>
    </div>
  );
}
