# VELOX — Finans & Mali Müşavirlik Platformu

Kurumsal mali müşavirlik, vergi denetimi ve finansal zeka odaklı modern bir demo web platformu. React + Vite + Tailwind CSS ile geliştirilmiştir.

## Özellikler

- **Kurumsal Tanıtım Sitesi (Public):** Hero, Hizmetler, Blog, Vergi Hesaplayıcı, İletişim ve daha fazlası.
- **Müşteri Portalı (Client Portal):** Aktif Süreçler, Belgeler, Raporlar, Tahakkuk Takvimi, Görev & Destek Talepleri, Şirket Profili.
- **Yönetim Paneli (Admin):** Dashboard, Müşteriler, Ödemeler, E-SMM Makbuzları, Belgeler, Personel, Görevler, Vergi Takvimi, Raporlar, Web CMS.
- **VELOX AI Asistanı:** Finansal zeka için yerleşik asistan modalı.
- **Komut Paleti:** Klavye tabanlı hızlı navigasyon.

## Tasarım Skill'i — HALLMARK

Projenin tüm arayüzleri (web sitesi, müşteri konsolu, SMMM paneli, ortak modallar) **HALLMARK** tasarım skill'i ile yeniden tasarlanmıştır. Skill, arayüz geliştirirken referans alınması gereken tek kaynak (tek gerçektir) olarak proje içinde saklanır:

- **Skill dosyası:** [`docs/skills/HALLMARK_SKILL.md`](docs/skills/HALLMARK_SKILL.md)
- Kodlanmış tasarım tokenları: `tailwind.config.js` (renkler, tipografi, gölgeler, animasyonlar) + `src/index.css` (`@layer components` içinde `.card`, `.btn`, `.input`, `.select`, `.badge-*`, `.kpi-card`, `.data-table` vb.)

Skill'in kısa özeti:

| Alan | Karar |
|---|---|
| Zemin | Açık kağıt (`paper-50 #F6F4EE`), kartlar beyaz, 14px yarıçap, `1px line` kenarlık |
| Birincil | `pine-700 #23523E` (butonlar, aktif durumlar, vurgular) |
| Koyu bantlar | `pine-800/900/950` (global mod şeridi, hero, admin kenar çubuğu, footer) |
| Altın | `gold-500 #B9882E` — yalnızca AI vurgusu, yıldız, premium etiket |
| Para/numara | JetBrains Mono, sağ hizalı |
| Başlıklar | Instrument Serif (dizin karakteri *italik pine-700* vurgusuyla) |
| Durum üçlüsü | success `#175C3B/#E6F2EB` · warning `#92400E/#FBF1DF` · danger `#8E2A20/#FBECE8` |
| Ofsetler | Global şerit `top-0 h-11` · site navbar `top-11 h-16` · panel üst çubuklar `sticky top-11 h-14` |

**Kural:** Yeni bir bileşen yazarken önce skill'in §4 (bileşen sözleşmeleri) ve §5 (yüzey kılavuzları) bölümlerine bakılır; `@apply` tabanlı utility sınıflar (`src/index.css`) yeniden icat edilmez. State, veri ve modül yapısı (`src/context`, `src/data`) asla değişmez — yalnızca görünüm katmanı skill'e uyarlanır.

## Çalıştırma

Gereksinimler: Node.js (v18+)

```bash
# Bağımlılıkları kur
npm install

# Geliştirme sunucusu (http://localhost:3000)
npm run dev

# Production build
npm run build

# Production önizleme
npm run preview
```

## Dağıtım (Deploy)

Canlı dağıtım, üretim build'i üzerinden `vite preview` ile `0.0.0.0:3000` portunda sunulur. Uygulama `allowedHosts` olarak tüm origin'lere izin verir.

## Teknoloji Yığını

- React 18 + Vite 5
- Tailwind CSS 3
- lucide-react (ikonlar)
- canvas-confetti (görsel efektler)

## Lisans

Bu proje demo amaçlıdır; üretim verisi içermez.
