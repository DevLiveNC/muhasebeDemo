import React from 'react';
import { useApp } from '../../context/AppContext';
import { CheckCircle2, Clock, BookOpen, Star, Pencil } from 'lucide-react';
import { cn } from '../../utils/cn';

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
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div>
        <span className="badge badge-neutral">Web & CMS Yönetimi</span>
        <h1 className="text-xl sm:text-2xl font-bold text-ink-900 tracking-tight mt-2">
          Web Sitesi & Gelen Talep Masası
        </h1>
        <p className="text-xs text-ink-400 mt-1">
          Gelen ön görüşme randevuları, mevzuat blog makaleleri ve mükellef referansları
        </p>
      </div>

      {/* Consultation Requests */}
      <div className="card overflow-hidden">
        <div className="p-5 border-b border-line flex items-center justify-between">
          <h3 className="font-bold text-ink-900 text-sm">Gelen Ön Görüşme Randevu Talepleri</h3>
          <span className="badge badge-success">2 Yeni Talep</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left min-w-[640px]">
            <thead>
              <tr className="border-b border-line bg-paper-50">
                <th className="th">Şirket</th>
                <th className="th">Yetkili</th>
                <th className="th">Telefon</th>
                <th className="th">Randevu Zamanı</th>
                <th className="th">Durum</th>
                <th className="th text-right">Aksiyon</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {consultationRequests.map((req) => (
                <tr key={req.id} className="hover:bg-paper-50 transition-colors">
                  <td className="td font-semibold text-ink-900 whitespace-nowrap">{req.company}</td>
                  <td className="td text-ink-500 whitespace-nowrap">{req.contact}</td>
                  <td className="td font-mono text-xs text-ink-500 whitespace-nowrap">{req.phone}</td>
                  <td className="td font-mono text-xs text-ink-500 whitespace-nowrap">{req.date}</td>
                  <td className="td">
                    <span className="status text-ink-700">
                      <span className={cn('dot', req.status === 'Onaylandı' ? 'dot-success' : 'dot-warning')}></span>{req.status}
                    </span>
                  </td>
                  <td className="td text-right">
                    <button
                      onClick={() => addToast(
                        req.status === 'Onaylandı' ? 'Randevu Onaylandı' : 'Randevu Beklemeye Alındı',
                        `${req.company} için randevu durumu güncellendi.`,
                        'info'
                      )}
                      className="btn btn-outline btn-sm"
                    >
                      {req.status === 'Onaylandı' ? (
                        <>
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Onaylı</span>
                        </>
                      ) : (
                        <>
                          <Clock className="w-3.5 h-3.5" />
                          <span>Onayla</span>
                        </>
                      )}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Blog Management */}
        <div className="card p-6 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-ink-900 text-sm flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-pine-700" />
              Mevzuat Blog Yönetimi
            </h3>
            <button
              onClick={() => addToast('Yeni Makale Taslağı', 'Editörde yeni mevzuat makalesi taslağı oluşturuldu.', 'info')}
              className="btn btn-outline btn-sm"
            >
              Yeni Makale
            </button>
          </div>

          <div className="space-y-2.5">
            {blogPosts.map((post) => (
              <div key={post.id} className="p-4 rounded-xl border border-line bg-paper-50 space-y-1.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="badge badge-pine">{post.category}</span>
                  <span className="text-[10px] font-mono text-ink-400">{post.date}</span>
                </div>
                <p className="font-semibold text-[13px] text-ink-900 leading-snug line-clamp-2">{post.title}</p>
                <div className="flex items-center justify-between pt-1">
                  <span className="text-[11px] text-ink-400">{post.author}</span>
                  <button
                    onClick={() => addToast('Makale Editörü', `"${post.title}" makalesi editörde açıldı.`, 'info')}
                    className="btn btn-ghost btn-sm"
                  >
                    <Pencil className="w-3 h-3" />
                    <span>Düzenle</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="card p-6 space-y-4 self-start">
          <h3 className="font-bold text-ink-900 text-sm flex items-center gap-2">
            <Star className="w-4 h-4 text-gold-500" />
            Referans & Tanıklık Yönetimi
          </h3>

          <div className="space-y-2.5">
            {testimonials.map((test) => (
              <div key={test.id} className="p-4 rounded-xl border border-line bg-paper-50 space-y-2">
                <div className="flex items-center gap-2.5">
                  <img
                    src={test.image}
                    alt={test.name}
                    className="w-8 h-8 rounded-full object-cover border border-line"
                  />
                  <div className="min-w-0 flex-1">
                    <p className="font-semibold text-[13px] text-ink-900 truncate">{test.name}</p>
                    <p className="text-[11px] text-ink-400 truncate">{test.role} · {test.company}</p>
                  </div>
                  <span className="badge badge-success shrink-0">Yayında</span>
                </div>
                <p className="text-xs text-ink-500 leading-relaxed line-clamp-2">"{test.quote}"</p>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
