import React from 'react';
import { useApp } from '../../context/AppContext';
import { X, Clock, BookOpen } from 'lucide-react';

export default function BlogReaderModal() {
  const { selectedBlogForReader, setSelectedBlogForReader, firmInfo } = useApp();

  if (!selectedBlogForReader) return null;

  const post = selectedBlogForReader;

  const renderContent = (content) =>
    content.split('\n').map((line, i) => {
      if (!line.trim()) return <div key={i} className="h-3" />;
      const bolded = line.split(/(\*\*[^*]+\*\*)/g).map((part, j) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={j} className="font-semibold text-ink-900">{part.slice(2, -2)}</strong>
        ) : (
          <span key={j}>{part}</span>
        )
      );
      const isBullet = line.trimStart().startsWith('- ');
      const isNumbered = /^\d+\./.test(line.trimStart());

      return (
        <p
          key={i}
          className={
            isBullet
              ? 'text-[13px] text-ink-600 leading-relaxed pl-4 relative before:content-["•"] before:absolute before:left-0 before:text-pine-700'
              : isNumbered
              ? 'text-[13px] text-ink-600 leading-relaxed pl-1 font-medium'
              : 'text-[13px] text-ink-600 leading-relaxed'
          }
        >
          {bolded}
        </p>
      );
    });

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-3 sm:p-6 bg-ink-950/45 backdrop-blur-sm animate-fade-in">
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-pop border border-line overflow-hidden flex flex-col max-h-[90vh] animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-white flex items-center justify-between border-b border-line">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="p-2 bg-pine-50 text-pine-700 rounded-lg border border-pine-100 shrink-0">
              <BookOpen className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <span className="badge badge-pine">{post.category}</span>
            </div>
          </div>
          <button
            onClick={() => setSelectedBlogForReader(null)}
            className="p-1 rounded text-ink-400 hover:text-ink-900 hover:bg-paper-100 transition-colors"
            title="Kapat"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
          <h2 className="font-serif text-2xl sm:text-[28px] leading-tight text-ink-900">
            {post.title}
          </h2>

          {/* Author meta */}
          <div className="flex items-center gap-3 pb-5 border-b border-line">
            <img
              src={post.authorAvatar}
              alt={post.author}
              className="avatar w-10 h-10 rounded-full border border-line"
            />
            <div>
              <p className="font-bold text-[13px] text-ink-900">{post.author}</p>
              <p className="text-[11px] font-mono text-ink-400 flex items-center gap-2 mt-0.5">
                {post.date}
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {post.readTime} okuma
                </span>
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-3.5">{renderContent(post.content)}</div>

          {/* Footer note */}
          <div className="p-4 rounded-xl bg-paper-50 border border-line text-xs text-ink-500 leading-relaxed pt-4">
            Bu makale genel bilgilendirme amaçlıdır; özel duruma ilişkin kesin vergi görüşü için
            {firmInfo.name} kıdemli SMMM masasıyla iletişime geçiniz.
          </div>
        </div>
      </div>
    </div>
  );
}
