import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Globe, Plus, BookOpen, MessageSquare, CheckCircle2, Star, ArrowRight, Video } from 'lucide-react';

export default function AdminWebCMS() {
  const { blogPosts, testimonials, addToast } = useApp();

  const consultationRequests = [
    {
      id: 1,
      company: 'Solvy Enerji Teknolojileri A.Ş.',
      contact: 'Barış Özkan',
      phone: '0532 999 11 22',
      date: '2026-08-27 14:00',
      status: 'Onaylandı'
    },
    {
      id: 2,
      company: 'Karia Lojistik A.Ş.',
      contact: 'Mehmet Ali Vural',
      phone: '0532 444 33 22',
      date: '2026-08-28 10:30',
      status: 'Beklemede'
    }
  ];

  return (
    <div className="space-y-6 animate-fade-in text-xs sm:text-sm">
      
      {/* Header */}
      <div className="pb-4 border-b border-white/[0.06]">
        <div className="flex items-center space-x-2">
          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[10px] uppercase tracking-wider border border-emerald-500/20">
            Web & CMS Yönetimi
          </span>
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1">Web Sitesi & Gelen Talep Masası</h1>
        <p className="text-xs text-slate-400 font-mono">Gelen ön görüşme randevuları, mevzuat blog makaleleri ve mükellef referansları</p>
      </div>

      {/* Incoming Consultation Requests */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4 shadow-cinema">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-white text-sm sm:text-base">Gelen Ön Görüşme Randevu Talepleri</h3>
          <span className="text-xs font-mono text-emerald-400">2 Yeni Talep</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs font-mono">
            <thead className="bg-white/[0.03] text-slate-400 uppercase text-[10px] border-b border-white/[0.06]">
              <tr>
                <th className="p-3">Şirket</th>
                <th className="p-3">Yetkili</th>
                <th className="p-3">Telefon</th>
                <th className="p-3">Randevu Zamanı</th>
                <th className="p-3">Durum</th>
                <th className="p-3 text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {consultationRequests.map((req) => (
                <tr key={req.id} className="hover:bg-white/[0.02]">
                  <td className="p-3 font-bold text-white font-sans">{req.company}</td>
                  <td className="p-3 text-slate-300 font-sans">{req.contact}</td>
                  <td className="p-3 text-slate-400">{req.phone}</td>
                  <td className="p-3 text-white font-bold">{req.date}</td>
                  <td className="p-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                      {req.status}
                    </span>
                  </td>
                  <td className="p-3 text-right">
                    <button
                      onClick={() => addToast('Google Meet Bağlantısı İletildi', `${req.contact} yetkilisine takvim daveti yollandı.`, 'success')}
                      className="px-3 py-1 bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wider rounded text-[11px] inline-flex items-center space-x-1"
                    >
                      <Video className="w-3 h-3 text-black" />
                      <span>Meet Başlat</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Blog & Content Manager */}
      <div className="p-6 rounded-2xl obsidian-card border border-white/[0.08] space-y-4 shadow-cinema">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-white text-sm sm:text-base">Yayındaki Mevzuat ve Blog Makaleleri ({blogPosts.length})</h3>
          <button
            onClick={() => addToast('Mevzuat Editörü Açıldı', 'Markdown ve SEO editörü hazır.', 'info')}
            className="px-3.5 py-1.5 bg-white hover:bg-slate-200 text-black font-bold uppercase tracking-wider rounded-lg text-xs flex items-center space-x-1 shadow-luxury"
          >
            <Plus className="w-3.5 h-3.5 text-black" />
            <span>Yeni Makale Yayınla</span>
          </button>
        </div>

        <div className="divide-y divide-white/[0.04]">
          {blogPosts.map((post) => (
            <div key={post.id} className="py-3 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-xs sm:text-sm">{post.title}</h4>
                <p className="text-xs font-mono text-slate-400">{post.category} · {post.date} · Yazar: {post.author}</p>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                Yayında
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
