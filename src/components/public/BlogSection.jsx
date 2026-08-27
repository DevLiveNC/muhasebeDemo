import React from 'react';
import { useApp } from '../../context/AppContext';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogSection() {
  const { blogPosts, setSelectedBlogForReader } = useApp();

  return (
    <section id="blog" className="py-20 md:py-28 bg-white border-y border-line scroll-mt-24">
      <div className="container-x">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-line">
          <div className="max-w-2xl space-y-3">
            <p className="mlabel text-pine-700">Yazılar</p>
            <h2 className="font-serif text-ink-900 text-3xl sm:text-4xl md:text-[44px] leading-[1.08] tracking-tight">
              Vergiyi ve mevzuatı <em className="text-pine-700">sade anlatan</em> notlar.
            </h2>
          </div>

          <p className="text-sm text-ink-500 max-w-sm leading-relaxed">
            Mali müşavirlerimizin yazdığı güncel kılavuzlar: indirimler, ihracat KDV, e-Defter.
          </p>
        </div>

        {/* Posts Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              onClick={() => setSelectedBlogForReader(post)}
              className="card card-hover p-6 flex flex-col justify-between cursor-pointer group space-y-5"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="badge badge-pine">{post.category}</span>
                  <span className="flex items-center gap-1 text-[11px] font-mono text-ink-400">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="font-serif text-[20px] leading-snug text-ink-900 group-hover:text-pine-800 transition-colors">
                  {post.title}
                </h3>

                <p className="text-xs text-ink-500 leading-relaxed line-clamp-3">
                  {post.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-line flex items-center justify-between">
                <div className="flex items-center gap-2 min-w-0">
                  <img
                    src={post.authorAvatar}
                    alt={post.author}
                    className="w-7 h-7 rounded-full object-cover border border-line shrink-0"
                  />
                  <div className="min-w-0">
                    <span className="text-xs font-semibold text-ink-800 block truncate">{post.author}</span>
                    <span className="text-[10px] font-mono text-ink-400">{post.date}</span>
                  </div>
                </div>

                <span className="flex items-center gap-1 text-xs font-semibold text-pine-700 group-hover:gap-2 transition-all shrink-0">
                  <span>Oku</span>
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
