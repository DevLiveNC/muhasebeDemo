# HALLMARK — VELOX Arayüz Tasarım Skill'i

> **v1.3** — v1.1: palet ~%25 yumuşatıldı. v1.2: profesyonelleşme (§5.12). v1.3: **anlaşılır dil** (§11) — her ekran sade Türkçe ile okunur; jargon ya çevrilir ya da bir cümleyle açıklanır.

> **Skill amacı:** VELOX platformunun (kurumsal site + müşteri paneli + ofis paneli) tüm arayüzlerini tek, tutarlı, premium ve **anlaşılır** bir tasarım diliyle yönetmek.
> **Kırmızı çizgi:** Veri katmanı şemasına (`src/context/AppContext.jsx` alan adları, `src/data/mockData.js` id/status/alanları) ve bileşen sözleşmelerine (dosya adları, export'lar, tab kimlikleri, context aksiyonları) dokunulmaz. HALLMARK yalnızca **sunum katmanını** ve **görünen metinleri** yönetir.

---

## 1. Marka Karakteri

VELOX; TÜRMOB ruhsatlı SMMM/YMM ortaklığı, KGK bağımsız denetim kuruluşu ve GİB özel entegratörü. Müşterisi teknoloji, ihracat ve KOBİ şirketlerinin CFO'larıdır.

**Hissiyat kelime seti:** *güven, ustalık, sakin lüks, editorial, saydam, ölçülebilir.*
**Karakter referansları:** premium yeminli mali müşavirlik ofisi dergisi, özel bankacılık raporu, İsviçre tipografi geleneği.

**HALLMARK üç ilkesi:**
1. **Kâğıt ve mürekkep:** Arayüz sıcak bir kâğıt zemininde (paper) ve koyu çam yeşili mürekkeple (pine) konuşur. Neon, degrade ve parlak yüzey yasak.
2. **Rakam kutsaldır:** Tüm para, yüzde, tarih ve hesap kodları `JetBrains Mono` ile, tablo ve KPI bağlamında gösterilir. Rakam hiçbir zaman sans-serif gövde fontuyla yazılmaz.
3. **Hiçbir şey şansa bırakılmaz:** Durum renkleri (başarılı/uyarı/kritik) her zaman aynı üçlüde (yeşil / amber / kırmızı) ve aynı rozet biçiminde kullanılır; kullanıcı tek bakışta durumu okur.

---

## 2. Renk Sistemi

### 2.1 Temel Palet

| Token | Değer | Kullanım |
|---|---|---|
| `paper-50` | `#FCFBF9` | Kart içi gövde, input zemini |
| `paper-100` | `#F7F5EF` | Sayfa arka planı (portal/admin) |
| `paper-200` | `#F0EEE6` | Dolgulu bölme, segment kontrol zemini |
| `paper-300` | `#E8E5DB` | Pasif ilerleme çubuğu zemini |
| `pine-500` | `#558770` | Soft accent (dot, ince ikon) |
| `pine-600` | `#3F6E57` | **Birincil buton** zemini, hover vurgu |
| `pine-700` | `#33604C` | Koyu buton hover, marka kareleri, koyu bant üstü bileşen |
| `pine-800` | `#275141` | Koyu bantlar (site şeritleri, rapor başlıkları) |
| `pine-900` | `#1F4234` | Footer |
| `pine-950` | `#143027` | Yalnızca çok özel en koyu yüzeyler |
| `gold-300` | `#E0C27E` | Koyu zemin üzerinde vurgu (AI, yıldız) |
| `gold-400` | `#D4AF5E` | Ana altın buton/zemin vurgusu |
| `ink-900` | `#252D28` | Başlıklar (serif display dahil) |
| `ink-700` | `#414E46` | Gövde metin (varsayılan) |
| `ink-500` | `#6B786F` | İkincil metin |
| `ink-400` | `#8A968C` | Üçüncül metin, `.mlabel` etiket |
| `ink-300` | `#A6B0A7` | Soluk mikro metin, `.dot-neutral` |
| `line` | `#E7E4DA` | Varsayılan 1px sınır |
| `line-strong` | `#D9D4C7` | Vurgulu sınır, input border |

> Soft kurallı: tüm renkler nütreye ~%25 kaydırılmıştır. Asla eski keskin hex'leri
> (`#23523E`, `#121815`, `#B9882E` vb.) geri getirme; token'ı kullan.

### 2.2 Durum Renkleri (her yüzeyde aynı)

| Durum | Metin | Zemin | Sınır |
|---|---|---|---|
| Başarılı (`success`) | `#276B4B` (deep) | `#EAF4EE` (soft) | `success/20` |
| Uyarı (`warning`) | `#A25A26` (deep) | `#FBF4E6` (soft) | `warning/20` |
| Kritik (`danger`) | `#A23F32` (deep) | `#FCEFEA` (soft) | `danger/20` |

### 2.3 Kontrast Kuralları
- Gövde metni asgari `ink-600`; hiçbir metin `ink-300`'ün altına inemez (dekoratif mikro etiket hariç).
- Koyu bantlarda (`pine-800`) metin `white` / `pine-100/200` / `gold-300` kullanılabilir.
- Buton: `pine-600` zemin + beyaz metin (4.5:1+ kontrast); hover `pine-700`.

---

## 3. Tipografi

| Katman | Font | Boyut/Ağırlık | Not |
|---|---|---|---|
| Display (hero, bölüm başlığı) | `Instrument Serif` | 44–64px, 400; vurgu kelimeleri `italic` | `text-ink-950`; italik vurgu `text-pine-700` |
| Kart başlığı | `Instrument Serif` | 20–24px, 400 | |
| Sayfa başlığı (panel) | `Plus Jakarta Sans` | 18–22px, 700 | `text-ink-950` |
| Gövde | `Plus Jakarta Sans` | 13–14px, 400/500 | `text-ink-600` |
| Buton/etkinlik | `Plus Jakarta Sans` | 12–13px, 600 | UPPERCACE YASAK; normal büyük harf |
| Etikette (eyebrow) | `JetBrains Mono` | 10–11px, 500, `tracking-[0.16em]`, UPPERCASE | `text-pine-600` |
| Rakam/VKN/tarih/hesap kodu | `JetBrains Mono` | 11–30px, 500–700 | `text-ink-950`; pozitif delta `success-deep` |

Kural: Bir metin bloğunda en fazla 2 font ailesi; serif sadece başlık katmanında.

---

## 4. Yerleşim & Ritim

- **Site:** `max-width: 1220px` (`.container-x`), yatay padding 16/24/32px.
- **Panel:** kenar boşluğu 24–32px; kartlar arası dikey boşluk 20–24px.
- **Boşluk cetveli:** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 px (8px ızgara).
- **Bölüm ritmi (site):** açık zemin → koyu bant (`pine-900`) → açık zemin… Tek sayıfada en fazla iki ardışık koyu bant.
- **Yukarı kaydırmalı sabit çubuklar:** Global mod çubuğu `top-0` (h-11), site navbar `top-11`, panel topbar `top-11`.

---

## 5. Bileşen Spesifikasyonları

### 5.1 Kart (`.card`)
`bg-white`, `border: 1px line`, `border-radius: 14px`, gölge `shadow-card` (çok yumuşak, 2 katmanlı). Hover'larda `shadow-card-hover` + `border-line-strong`. Kart içi padding 20–24px.

### 5.2 Buton
| Varyant | Zemin | Metin | Hover |
|---|---|---|---|
| `btn-primary` | `pine-700` | white | `pine-800` |
| `btn-outline` | white, border `line-strong` | `ink-800` | border `pine-600`, metin `pine-800` |
| `btn-ghost` | transparent | `ink-600` | `ink-900/5` |
| `btn-gold` (nadir, CTA vurgusu) | `gold-500` | white | `gold-600` |

Boyutlar: `btn-sm` (px-3 py-1.5, 12px) · `btn-md` (px-4 py-2.5, 13–14px). Köşe `8px`. Icon + metin arası 8px. UPPERCASE ve `letter-spacing` vurgusu **kullanılmaz**.

### 5.3 Rozet (`.badge`) & Durum Göstergesi (`.status` + `.dot`)
**Kural:** Yoğun tablolarda (müşteri, evrak, tahsilat, iş emri) durum kolonu **piller değil,
`<span className="status"><span className="dot dot-xxx"></span>Metin</span>`** kullanır.
`.badge` yalnızca kategori/konteks rozetlerinde (başlık çipleri, blog kategorisi, "Yayında") kalır.
`rounded-full`, padding 4px 10px, 11px/600. Dört durum: `badge-success` · `badge-warning` · `badge-danger` · `badge-neutral` (`paper-200` zemin, `ink-600` metin). Mono font sadece sayısal rozetlerde (örn. "48").

### 5.4 Tablo
- Header: 10px/600 UPPERCASE, `ink-400`, `tracking-[0.12em]`, alt sınır 1px.
- Gövde hücresi: 13px, dikey padding 14px; satır hover `bg-paper-50`.
- Rakam hücreleri mono ve sağ hizalı.
- Satır içi aksiyon: `btn-outline btn-sm` veya ghost icon buton.

### 5.5 Form
- Label: 12px/600 `ink-700`, 6px üst boşluk.
- Input/Select: `bg-paper-50`, border `line-strong`, radius 8px, 13px; focus: border `pine-600` + 2px `pine-600/15` halka. Placeholder `ink-300`.
- Slider: `accent-pine-700`.

### 5.6 Navigasyon
- **Global mod çubuğu (h-11):** `bg-white/90 backdrop-blur`, alt sınır `line`. Sol: marka karesi (24px, `pine-800`, beyaz "V") + "VELOX MALİ KONSOL" (11px mono, `tracking-widest`). Orta: segment kontrol (3 mod; aktif = `pine-700` + white). Sağ: arama (⌘K), AI butonu, sunum notları.
- **Panel kenar çubuğu (w-64):** `bg-white`, sağ sınır `line`. Üst: şirket/panel kimlik kartı (logo kare 40px). Menü öğesi: 13px/500 `ink-500`; aktif: `bg-pine-700` + white + `shadow-sm`; badge sağda (kritik=amber, yenilik=yeşil, sayı=nötr). Alt: SMMM profil kartı.
- **Site navbar (h-16):** `bg-paper-50/90 backdrop-blur`; aktif değilken underline hover (2px `pine-600`).

### 5.7 Modal
`bg-ink-950/60 + backdrop-blur-sm` perde; kart: `bg-white`, radius 16px, `shadow-pop`, `max-h: 90vh`, `animate-scale-in`. Başlık çubuğu: 40px icon kutusu (`pine-50` zemin, `pine-700` icon) + başlık/alt başlık; sağda ghost icon aksiyonları. Gövde 24px padding, gerekirse `overflow-y-auto`.

### 5.8 Toast
Sağ alt, `bg-white` kart + 3px sol durum bandı (renk), 16px icon, başlık 12px/700, mesaj 11px `ink-500`. Geliş animasyonu `slide-up`.

### 5.9 KPI Kartı
Etiket (10px mono UPPERCASE `ink-400`) + icon (16px) → değer (24–30px mono 600 `ink-950`; iyi metrikte `pine-700` veya `success-deep`) → alt satır (11px `ink-400`, delta `success-deep`/`danger`).

### 5.10 İlerleme & Stepper
Zemin `paper-300`, dolgu `pine-600` (tamamlanmış: `success`), yükseklik 6px, radius full. Stepper adımı: `CheckCircle2` (yapıldı: `pine-700` / bekliyor: `ink-300`).

### 5.11 AI Asistan
Başlık bandı `pine-700` (beyaz başlık, `gold-300` vurgu). Mesaj balonu: AI = `bg-white` kart + `line` border; kullanıcı = `bg-pine-700` white. Yapılandırılmış cevaplar başlık + madde listesi + alt not kutusu (`gold-50` zemin, `gold-700` metin).
Yüzen AI butonu: 48px dairesel `pine-700` buton + `gold-300` ikon + tek statik `gold-400` nokta. **`animate-ping`/`pulse` yok.**

### 5.12 Profesyonelleşme Kuralları (anti-"hazır AI" tells)

Aşağı kalıplar **yapay/zaman damgalı AI çıktısı** okunur; bu projede yasaktır:

1. **Tekrarlayan uppercase mono eyebrow'lar.** Mikro etiketler `mlabel`
   (11px, normal case, sans, `ink-400`) veya `kpi-label`'dir. Uppercase+tracking yalnızca
   nav bölüm başlıkları (sidebar), komut paleti grupları ve **belge estetiği**
   (e-SMM makbuzu, e-Arşiv önizleme) istisnasındadır. Mono yazı tipi **yalnızca
   sayı/tutar/VKN/tarih** içindir.
2. **Pill spam.** Durum bilgisi tablolarda `dot + metin`'dir (§5.3). Bir görünümde
   en fazla 2-3 `.badge` bulunabilir.
3. **İkon karoları.** 36-40px tinted kare içinde ikon yalnızca birincil
   grid'lerde (hizmetler, KPI köşesi 14px düz ikon) kullanılır; sık listelerde
   ikon karola alınmaz.
4. **Süzülen/örtüşen dekoratif kartlar**, nokta dokusu, gradient, glassmorphism: YOK.
5. **Sürekli hareket** (`animate-ping`, `animate-pulse`): YOK. Hareket yalnızca
   kullanıcı olaylarına yanıt verir (§7).
6. **B2B finansal üründe konfeti/emojisi**: YOK. Başarı = temiz onay ekranı.
7. **Ortalanmış hero pill'i**: hero'da merkezi rozet/pill yok; akreditasyon
   tek satır sakin eyebrow olarak H1 üstünde durur.
8. **Gerçek veri.** Footer/iletişim `FIRM_INFO`'dan beslenir; uydurma adres/numara yazılmaz.
9. **Tek birincil aksiyon.** Her görünümde tam `btn-primary` sayısı 1'dir;
   geri kalanlar outline/ghost.

---

## 6. Yüzey Spesifikasyonları

### 6.1 Kurumsal Web Sitesi (public)
Bölüm sırası: Navbar → Hero → Güven Şeridi (koyu bant, 4 metrik) → Hizmetler (numaralı satır listesi) → Neden Velox (karşılaştırma matrisi) → Dijital Konsol Vitrini (koyu bant + canlı mockup) → Vergi Simülatörü (etkileşimli) → Mevzuat & Blog → Müşteri Referansları → Kurumsal & Ekip → İletişim (koyu bant + form kartı) → Footer (`pine-900`, `FIRM_INFO` alanlarıyla gerçek adres/tel/e-posta, mono ruhsat numaraları).
- Hero: sol metin (tek satır sakin eyebrow — HİÇBİR PİL/ROZET yok + serif H1 + lead + 3 CTA + güven işaretleri), sağ "finansal rapor" görsel kartı. Yüzen/örtüşen not kartı YOK; yaklaşıyor yükümlülük satırı rapor kartının içine alt satır olarak girer. Nokta dokusu (dot-grid) zemini YOK.
- Hizmet satırları: 40px mono numara + icon + serif başlık + açıklama + ok; tıklanınca `ServiceDetailModal`.

### 6.2 Müşteri paneli (portal)
- Zemin `paper-100`; kartlar beyaz.
- Ana sayfa: şirket adı + bir cümle durum → 4 KPI (kalan nakit, vergi indirimi, KDV durumu, çeyrek satış) → devam eden işler + yaklaşan ödemeler.
- Belgeler: kesikli yükleme alanı + klasör listesi + tablo.
- Vergi takvimi: acil kartlarda `warning` kenar; tamamlananlarda `success` damga.

### 6.3 Ofis paneli (admin)
Portal ile aynı tasarım dili; veri yoğunluğu daha yüksek: 6 KPI satırı, kritik uyarı bandı (amber), geniş tablolar, kanban (adaylar). Tüm sayfa başlıkları sol üstte; sağda birincil aksiyon butonu. Menü etiketleri kısa: Özet, Müşteriler, Belgeler, İşler.

---

## 7. Hareket (Motion)

- Süre: 150–250 ms; eğri `cubic-bezier(.16,1,.3,1)`.
- Modal `scale-in`, panel içeriği `fade-in`, dropdown `slide-down`, toast `slide-up`.
- `hover: -translate-y` yalnızca yüzen CTA'da; kartlarda sadece gölge/border değişimi.
- Sayı ve bar animasyonları demo amaçlı statik; `transition-all` yalnızca hover bağlamında.

---

## 8. Erişilebilirlik

- Tüm interaktif öğelerde `focus-visible` halkası (2px `pine-600`, offset 2).
- Sadece renkle ifade edilen her durumda metin/ikon eşlik eder.
- Touch hedef asgari 36px.
- Görsellerde `alt`; ikon-only butonlarda `title`.

---

## 9. Uygulama Kuralı (AI için)

1. Önce `tailwind.config.js` + `src/index.css` içindeki token/`@layer components` sınıflarını kullan; inline hex renk kullanma (koyu bantlar hariç: `pine-900/950`).
2. Bileşen yazarken bölüm 5'teki varyantları aynen uygula; yeni renk/boşluk icat etme.
3. Context'ten gelen her veri alanını aynı adla kullan; `mockData.js` alan ek/çıkarma.
4. Sayfa başlık hiyerarşisi: panel sayfası = `h1` 20px/700 sans; site bölümü = serif display.
5. Her ekranı 360px genişlikte test et: sidebar kayar, tablolar yatay kaydırır, grid'ler tek kolona iner.
6. Yeni metin yazarken §11'i uygula: başlık 2–6 kelime, alt satır bir cümle, buton fiil + nesne.

## 10. Doğrulama Listesi

- [ ] `npm run build` hatasız
- [ ] §5.12 anti-tell taraması: `animate-ping|animate-pulse|bg-gradient` = 0 sonuç; tablo durumları `dot` kullanıyor
- [ ] Footer/iletişim `FIRM_INFO` alanlarını kullanıyor; inline uydurma iletişim verisi yok
- [ ] 3 mod (public/portal/admin) arasında geçişte hiçbir state kaybı yok
- [ ] Tüm context aksiyonları (approve, updateTask, addDoc, addClient, toast) çalışıyor
- [ ] Komut paleti (⌘K), AI asistanı ve tüm modallar her modda açılıyor
- [ ] Durum renkleri tüm panellerde tutarlı
- [ ] Mobil (360px) ve masaüstü (1440px) kırılımlar temiz
- [ ] §11 anlaşılır dil: menü etiketleri 1–3 kelime; her panel sayfasında bir cümlelik `page-lead`; kamu metninde "konsol / kokpit / şematron / runway" yok

---

## 11. Anlaşılır Dil (UX yazımı)

Premium görünüm, anlaşılmayan cümleyle bozulur. VELOX metni **sakin, kısa, konuşma Türkçesi** kullanır — dergi başlığı, iç jargon yığını veya İngilizce finans argosu değil.

### 11.1 Üç kural

1. **Başlık ne olduğunu söyler.** Menü ve `h1` 1–6 kelime: *Belgeler*, *Vergi takvimi*, *Müşteriler*. "Mali Kokpit", "360° Müşteri Kartı", "Evrak & OCR Masası" yasak.
2. **Alt satır ne işe yaradığını söyler.** Her panel sayfasında `page-lead`: tek cümle, fiil içerir. "Faturaları buraya yükleyin; sistem okur, muhasebeye işler."
3. **Buton bir iş yapar.** Fiil + nesne: *Görüşme alın*, *Fatura yükle*, *Raporu indir*. "Ön Görüşme Talebini İlet" gibi bürokrasi yok.

### 11.2 Üç ses, üç kitle

| Yüzey | Kitle | Ses |
|---|---|---|
| Site (public) | Şirket sahibi / CFO adayı | Günlük dil. Kanun numarası ancak açıklamayla. |
| Müşteri paneli | Şirket yetkilisi | "Sizin işiniz" dili. KDV/SGK kalır; yanında ne olduğu yazılır. |
| Ofis paneli (admin) | Mali müşavir | Mesleki terim serbest; menü yine kısa. "Mükellef" yerine "müşteri" (ekran etiketi). |

### 11.3 Sözlük (görünen metin)

| Yazma | Yazma |
|---|---|
| Konsol, kokpit, masa, terminal | Panel, özet, ana sayfa |
| OCR | Otomatik okuma / "sistem okur" |
| Yevmiye (menüde) | Muhasebe kaydı — hesap kodu tabloda kalabilir |
| Nakit runway / burn rate | Kalan nakit / aylık harcama |
| Şematron | Sistem kontrolü |
| Tahakkuk (müşteriye) | Ödeme bildirimi |
| Lead | Aday |
| SMMM Yönetim Paneli | Ofis paneli |
| Müşteri Konsolu | Müşteri paneli |
| Mali ön görüşme | Ücretsiz görüşme |

Resmi adlar (KDV, SGK, e-Fatura, e-Defter, GİB) **silinmez**. İlk geçişte kısa açıklama veya `Term` (noktalı alt çizgi + `title`) kullanılır.

### 11.4 Sayfa iskeleti (panel)

```
h1          → 20–22px / 700 / ink-900   "Belgeler"
.page-lead  → 13–14px / ink-500         "Ne yapabileceğinizi bir cümlede."
birincil CTA → sağda, tek btn-primary
```

### 11.5 Yasak kalıplar

- Bir cümlede üç kanun numarası (4691, 5746, 11/1-a) + üç ürün adı
- "Uçtan uca / 360° / yeni nesil / rafine / finansal zeka" pazarlama yığını
- İngilizce bırakılmış terimler: cash runway, due diligence, burn rate, lead (menüde)
- Kullanıcının bilmediği kısaltmayı açıklamasız bırakmak (OCR, GÇB, MPHB)

---
