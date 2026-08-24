import React from 'react';
import { useApp } from '../../context/AppContext';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const { blogPosts, setSelectedBlogForReader } = useApp();

  return (
    <section id="blog" className="py-20 md:py-28 bg-[#08090d] border-b border-white/[0.08] scroll-mt-16 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/[0.08]">
          <div className="max-w-2xl space-y-3">
            <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
              Mevzuat & Vergi Analizleri
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Şirketinizi geleceğe taşıyacak <br />
              <span className="font-editorial italic font-normal text-slate-200">mali ve vergisel kılavuzlar.</span>
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
            Kıdemli SMMM ve YMM danışmanlarımız tarafından hazırlanan vergi teşvikleri ve e-dönüşüm rehberleri.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedBlogForReader(post)}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 hover:bg-white/[0.04] transition-all flex flex-col justify-between group cursor-pointer space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-slate-300 border border-white/[0.08]">
                    {post.category}
                  </span>
                  <span className="text-slate-400 flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{post.readTime}</span>
                  </span>
                </div>

                <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs text-slate-400 line-clamp-3 leading-relaxed">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-6 h-6 rounded-full object-cover border border-white/10"
                  />
                  <span className="text-xs text-slate-300 font-medium">{post.author}</span>
                </div>

                <span className="text-xs font-mono text-white flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                  <span>İncele</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
