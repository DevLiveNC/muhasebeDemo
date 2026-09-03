# liveMuhasebe — Finans & Mali Müşavirlik Platformu

Kurumsal mali müşavirlik, vergi denetimi ve finansal zeka odaklı modern bir demo web platformu. React + Vite + Tailwind CSS ile geliştirilmiştir.

## Özellikler

- **Kurumsal Tanıtım Sitesi (Public):** Hero, Hizmetler, Blog, Vergi Hesaplayıcı, İletişim ve daha fazlası.
- **Müşteri Portalı (Client Portal):** Aktif Süreçler, Belgeler, Raporlar, Tahakkuk Takvimi, Görev & Destek Talepleri, Şirket Profili.
- **Yönetim Paneli (Admin):** Dashboard, Müşteriler, Ödemeler, E-SMM Makbuzları, Belgeler, Personel, Görevler, Vergi Takvimi, Raporlar, Web CMS.
- **liveMuhasebe asistanı:** Finansal zeka için yerleşik asistan modalı.
- **Komut Paleti:** Klavye tabanlı hızlı navigasyon.

## Tasarım Skill'i — HALLMARK v1.3

Tüm arayüzler **HALLMARK** ile yönetilir. v1.3, önceki palet ve bileşen kurallarına **anlaşılır dil** ekler: menü 1–3 kelime, her panel sayfasında bir cümlelik açıklama, buton fiil + nesne.

- **Skill:** [`docs/skills/HALLMARK_SKILL.md`](docs/skills/HALLMARK_SKILL.md)
- Tokenlar: `tailwind.config.js` + `src/index.css`

**Kural:** Yeni bileşende önce skill §5 (bileşenler) ve §11 (anlaşılır dil). State, id ve context aksiyonları değişmez.

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
