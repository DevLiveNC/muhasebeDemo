import React from 'react';
import { useApp } from '../../context/AppContext';
import { Star, ShieldCheck } from 'lucide-react';

export default function TestimonialsSection() {
  const { testimonials } = useApp();

  return (
    <section className="py-20 md:py-28 bg-[#090b10] border-b border-white/[0.08] text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="text-[11px] font-mono text-emerald-400 uppercase tracking-widest block">
            Müşteri Deneyimleri ve Güven
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            Girişimciler ve finans direktörleri <br />
            <span className="font-editorial italic font-normal text-slate-200">VELOX hakkında ne diyor?</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test) => (
            <div
              key={test.id}
              className="p-7 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-amber-400">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {test.metric}
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                  "{test.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-3 pt-4 border-t border-white/[0.06]">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-10 h-10 rounded-full object-cover border border-white/10"
                />
                <div className="text-xs">
                  <h4 className="font-bold text-white">{test.name}</h4>
                  <p className="text-slate-400 text-[11px]">{test.role} · <strong className="text-slate-200">{test.company}</strong></p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
