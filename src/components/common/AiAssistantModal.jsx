import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Sparkles,
  X,
  Send,
  Bot,
  User,
  RotateCcw,
  AlertTriangle,
  CheckCircle2,
  Clock,
  Building2,
  SendHorizontal,
  ArrowRight
} from 'lucide-react';
import { AI_PRECONFIGURED_RESPONSES } from '../../data/mockData';
import { cn } from '../../utils/cn';

export default function AiAssistantModal() {
  const {
    isAiAssistantOpen,
    setIsAiAssistantOpen,
    sendMissingDocAlert,
    openClientDetail
  } = useApp();

  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'msg-0',
      sender: 'ai',
      text: 'VELOX asistanı hazır. 48 şirket, vergi takvimi ve belgeler güncel. Ne sormak istersiniz?',
      timestamp: 'Şimdi',
      chips: [
        { label: 'Bu hafta kimden evrak bekliyoruz?', key: 'evrak' },
        { label: 'Geciken işleri ve riskleri göster', key: 'geciken' },
        { label: 'Bugün yapılması gerekenleri listele', key: 'bugun' },
        { label: 'TechVision A.Ş. özet raporu', key: 'techvision' }
      ]
    }
  ]);

  if (!isAiAssistantOpen) return null;

  const closeAndOpenClient = () => {
    setIsAiAssistantOpen(false);
    openClientDetail('cli-1');
  };

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
      } else if (lower.includes('bugün') || lower.includes('bugun') || lower.includes('görev') || lower.includes('yapılacak')) {
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
        text: 'Sohbet sıfırlandı. Şirketleriniz veya vergi işlemleriniz hakkında ne sormak istersiniz?',
        timestamp: 'Şimdi',
        chips: [
          { label: 'Bu hafta kimden evrak bekliyoruz?', key: 'evrak' },
          { label: 'Geciken işleri ve riskleri göster', key: 'geciken' },
          { label: 'Bugün yapılması gerekenleri listele', key: 'bugun' },
          { label: 'TechVision A.Ş. özet raporu', key: 'techvision' }
        ]
      }
    ]);
  };

  const renderDataResponse = (data) => {
    const items = data.items || [];
    return (
      <div className="space-y-3">
        <h4 className="font-bold text-[13px] text-ink-900 leading-snug">{data.title}</h4>
        <p className="text-xs text-ink-500 leading-relaxed">{data.content}</p>

        {items.length > 0 && (
          <div className="space-y-2 pt-1">
            {items.map((item, i) => (
              <div key={i} className="p-3 rounded-lg bg-paper-50 border border-line space-y-1.5">
                {/* evrak_summary */}
                {item.company && item.missing && (
                  <>
                    <p className="font-bold text-xs text-ink-900">{item.company}</p>
                    <p className="text-[11px] text-ink-500 leading-relaxed">{item.missing}</p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                      <span className="badge badge-danger">{item.urgency}</span>
                      <button
                        onClick={() => sendMissingDocAlert(item.company, item.missing)}
                        className="btn btn-outline btn-sm !py-1 !px-2.5 text-[11px]"
                      >
                        <SendHorizontal className="w-3 h-3" />
                        <span>{item.action}</span>
                      </button>
                    </div>
                  </>
                )}

                {/* delay_summary */}
                {item.title && item.company && (
                  <>
                    <div className="flex items-center justify-between gap-2">
                      <p className="font-bold text-xs text-ink-900">{item.title}</p>
                      <Clock className="w-3 h-3 text-ink-300 shrink-0" />
                    </div>
                    <p className="text-[11px] text-ink-500">
                      <span className="font-semibold text-ink-700">{item.company}</span> · {item.status}
                    </p>
                    <p className="text-[10px] font-mono text-ink-400">Sorumlu: {item.assigned}</p>
                  </>
                )}

                {/* today_summary */}
                {item.task && (
                  <div className="flex items-start gap-2.5">
                    <span className="font-mono text-[10px] font-bold text-pine-700 bg-pine-50 border border-pine-100 rounded px-1.5 py-0.5 shrink-0 mt-0.5">
                      {item.time}
                    </span>
                    <div className="min-w-0">
                      <p className="text-[11px] text-ink-700 leading-relaxed">{item.task}</p>
                      <div className="flex items-center gap-1.5 mt-1">
                        <span className={cn(
                          'badge !text-[10px]',
                          item.priority === 'Yüksek' ? 'badge-warning' : 'badge-neutral'
                        )}>
                          {item.priority}
                        </span>
                        <span className={cn(
                          'badge !text-[10px]',
                          item.status === 'Hazır' ? 'badge-success' : 'badge-neutral'
                        )}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* client_summary metrics */}
        {data.metrics && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
            {data.metrics.map((m, i) => (
              <div key={i} className="p-3 rounded-lg bg-pine-50/60 border border-pine-100">
                <span className="kpi-label block">{m.label}</span>
                <span className="text-xs font-bold text-pine-900 block mt-1">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        {/* Footers */}
        {(data.summaryStats || data.recommendation || data.productivityTip || data.notes) && (
          <div className="flex items-start gap-2.5 p-3 rounded-lg bg-gold-50 border border-gold-200 text-[11px] text-gold-700 leading-relaxed">
            {data.recommendation ? (
              <AlertTriangle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            ) : (
              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 mt-0.5" />
            )}
            <span>{data.summaryStats || data.recommendation || data.productivityTip || data.notes}</span>
          </div>
        )}

        {data.type === 'client_summary' && (
          <button
            onClick={closeAndOpenClient}
            className="btn btn-primary btn-sm w-full sm:w-auto"
          >
            <Building2 className="w-3.5 h-3.5" />
            <span>Müşteri kartını aç</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-end sm:items-center justify-center sm:p-4 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col h-[88vh] sm:h-[80vh] max-h-[720px] animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 py-4 bg-pine-700 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-white/10 text-gold-300 flex items-center justify-center border border-white/10">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">VELOX Finansal AI</h3>
              <p className="text-[11px] text-pine-200 font-mono">Finans & Mevzuat Analiz Motoru</p>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              onClick={handleResetChat}
              className="p-1.5 rounded text-pine-200 hover:text-white hover:bg-white/10 transition-colors"
              title="Sohbeti Sıfırla"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsAiAssistantOpen(false)}
              className="p-1.5 rounded text-pine-200 hover:text-white hover:bg-white/10 transition-colors"
              title="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Chat Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-paper-50">
          {messages.map((msg) => (
            <div key={msg.id} className={cn('flex gap-2.5', msg.sender === 'user' && 'flex-row-reverse')}>
              <div className={cn(
                'w-8 h-8 rounded-lg flex items-center justify-center shrink-0 border',
                msg.sender === 'ai'
                  ? 'bg-pine-700 text-white border-pine-700'
                  : 'bg-white text-ink-600 border-line'
              )}>
                {msg.sender === 'ai' ? <Bot className="w-4 h-4" /> : <User className="w-4 h-4" />}
              </div>

              <div className={cn('max-w-[85%] min-w-0', msg.sender === 'user' && 'text-right')}>
                <div className={cn(
                  'inline-block text-left p-4 rounded-xl',
                  msg.sender === 'ai'
                    ? 'bg-white border border-line shadow-card'
                    : 'bg-pine-700 text-white'
                )}>
                  {msg.text && <p className={cn('text-[13px] leading-relaxed', msg.sender === 'ai' ? 'text-ink-700' : '')}>{msg.text}</p>}
                  {msg.data && renderDataResponse(msg.data)}
                </div>

                {msg.chips && (
                  <div className="flex flex-wrap gap-2 mt-2.5">
                    {msg.chips.map((chip) => (
                      <button
                        key={chip.key}
                        onClick={() => handleChipClick(chip.key, chip.label)}
                        className="px-3 py-1.5 rounded-full bg-white border border-line-strong text-[11px] font-medium text-ink-600 hover:border-pine-600 hover:text-pine-800 transition-colors"
                      >
                        {chip.label}
                      </button>
                    ))}
                  </div>
                )}

                <span className="text-[10px] font-mono text-ink-300 mt-1.5 block">
                  {msg.timestamp}
                </span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-pine-700 text-white flex items-center justify-center shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-line rounded-xl p-4 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-ink-300 animate-bounce"></span>
                <span className="w-1.5 h-1.5 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '0.1s' }}></span>
                <span className="w-1.5 h-1.5 rounded-full bg-ink-300 animate-bounce" style={{ animationDelay: '0.2s' }}></span>
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <form onSubmit={handleSendMessage} className="p-3 border-t border-line bg-white">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Soru yazın..."
              value={inputQuery}
              onChange={(e) => setInputQuery(e.target.value)}
              className="input py-2.5 text-[13px]"
            />
            <button
              type="submit"
              className="btn btn-primary btn-md shrink-0 !px-3.5"
              title="Gönder"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
