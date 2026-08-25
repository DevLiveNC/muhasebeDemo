# VELOX — Finans & Mali Müşavirlik Platformu

Kurumsal mali müşavirlik, vergi denetimi ve finansal zeka odaklı modern bir demo web platformu. React + Vite + Tailwind CSS ile geliştirilmiştir.

## Özellikler

- **Kurumsal Tanıtım Sitesi (Public):** Hero, Hizmetler, Blog, Vergi Hesaplayıcı, İletişim ve daha fazlası.
- **Müşteri Portalı (Client Portal):** Aktif Süreçler, Belgeler, Raporlar, Tahakkuk Takvimi, Görev & Destek Talepleri, Şirket Profili.
- **Yönetim Paneli (Admin):** Dashboard, Müşteriler, Ödemeler, E-SMM Makbuzları, Belgeler, Personel, Görevler, Vergi Takvimi, Raporlar, Web CMS.
- **VELOX AI Asistanı:** Finansal zeka için yerleşik asistan modalı.
- **Komut Paleti:** Klavye tabanlı hızlı navigasyon.

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
