import React from 'react';
import { useApp } from '../../context/AppContext';
import { Star } from 'lucide-react';

export default function TestimonialsSection() {
  const { testimonials } = useApp();

  return (
    <section className="py-20 md:py-28 bg-paper-100 scroll-mt-24">
      <div className="container-x">

        {/* Header */}
        <div className="section-head text-center mx-auto">
          <p className="mlabel text-pine-700">Kurumsal referanslar</p>
          <h2>
            Müşteri <em>değerlendirmeleri</em>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div key={test.id} className="card card-hover p-7 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-gold-500">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                    ))}
                  </div>
                  <span className="badge badge-pine">{test.metric}</span>
                </div>

                <p className="text-[13px] text-ink-600 leading-relaxed">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-line">
                <img
                  src={test.image}
                  alt={test.name}
                  className="avatar w-10 h-10 rounded-full border border-line"
                />
                <div className="text-xs min-w-0">
                  <h4 className="font-bold text-ink-900">{test.name}</h4>
                  <p className="text-ink-400 text-[11px] truncate">
                    {test.role} · <strong className="text-ink-600 font-semibold">{test.company}</strong>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
