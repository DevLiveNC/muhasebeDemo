import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Calendar, Clock, BookOpen, Share2, ArrowRight } from 'lucide-react';

export default function BlogReaderModal() {
  const { selectedBlogForReader, setSelectedBlogForReader, setIsConsultationOpen, addToast } = useApp();

  if (!selectedBlogForReader) return null;

  const blog = selectedBlogForReader;

  const handleShare = () => {
    addToast('Makale Bağlantısı Kopyalandı', 'Mevzuat analizi bağlantısı panoya kopyalandı.', 'info');
  };

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in font-sans">
      <div 
        className="w-full max-w-3xl bg-[#0b0d13] rounded-2xl shadow-2xl border border-white/10 overflow-hidden flex flex-col max-h-[90vh] transition-all transform animate-slide-down"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="px-6 py-4 bg-black/60 text-white flex items-center justify-between border-b border-white/[0.08]">
          <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
            <BookOpen className="w-4 h-4 text-emerald-400" />
            <span className="uppercase tracking-wider font-bold">{blog.category}</span>
          </div>

          <div className="flex items-center space-x-1.5">
            <button
              onClick={handleShare}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Paylaş"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              onClick={() => setSelectedBlogForReader(null)}
              className="p-1.5 rounded text-slate-400 hover:text-white hover:bg-white/[0.06] transition-colors"
              title="Kapat"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Article Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-[#0e1119] space-y-6">
          <div>
            <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-white/10 text-slate-300 rounded border border-white/10 inline-block mb-3">
              {blog.category}
            </span>
            <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight leading-snug">
              {blog.title}
            </h1>
            
            <div className="flex items-center space-x-4 mt-4 text-xs font-mono text-slate-400 border-b border-white/[0.06] pb-4">
              <div className="flex items-center space-x-2">
                <img
                  src={blog.authorAvatar}
                  alt={blog.author}
                  className="w-6 h-6 rounded-full object-cover border border-white/10"
                />
                <span className="text-slate-200">{blog.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Calendar className="w-3.5 h-3.5 text-slate-500" />
                <span>{blog.date}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="w-3.5 h-3.5 text-slate-500" />
                <span>{blog.readTime}</span>
              </div>
            </div>
          </div>

          {/* Article Summary Box */}
          <div className="p-4 bg-black/40 rounded-xl border border-white/[0.08] text-xs sm:text-sm text-slate-300 font-mono italic leading-relaxed">
            "{blog.summary}"
          </div>

          {/* Full Content */}
          <div className="text-xs sm:text-sm text-slate-300 leading-relaxed whitespace-pre-line space-y-4 font-sans">
            {blog.content}
          </div>

          {/* Bottom Consultation Box */}
          <div className="p-5 bg-black/60 border border-white/10 rounded-2xl text-white flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
            <div>
              <h4 className="font-bold text-sm sm:text-base text-white">Mali & Vergi Risklerinizi Analiz Edelim</h4>
              <p className="text-xs text-slate-400 mt-1 font-mono">Şirketinize özel istisna ve teşvikleri SMMM ekibimizle 30 dakikada değerlendirin.</p>
            </div>
            <button
              onClick={() => {
                setSelectedBlogForReader(null);
                setIsConsultationOpen(true);
              }}
              className="px-4 py-2 bg-white hover:bg-slate-200 text-black rounded-lg text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0 shadow-luxury transition-all font-mono"
            >
              <span>Ön Görüşme Randevusu Al</span>
              <ArrowRight className="w-3.5 h-3.5 text-black" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
