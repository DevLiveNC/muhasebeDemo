// VELOX Mali Müşavirlik, Vergi Denetimi & Finansal Zeka Platformu
// Yüksek Sadakatli Resmi Veriler & Tekdüzen Hesap Planı

export const FIRM_INFO = {
  name: "VELOX",
  legalName: "Velox Bağımsız Denetim ve Yeminli Mali Müşavirlik A.Ş.",
  tagline: "Kurumsal Vergi Denetimi, E-Dönüşüm ve Finansal Zeka",
  mainSlogan: "Muhasebenizi değil, işinizi büyütmeye odaklanın.",
  subSlogan: "4691 Teknopark, 5746 Ar-Ge teşvikleri, ihracat KDV iadesi ve uçtan uca dijital defter yönetimini tek bir rafine finans konsolunda birleştiren yeni nesil kurumsal müşavirlik.",
  phone: "+90 (212) 809 45 00",
  email: "partner@veloxfinans.com",
  hq: "Büyükdere Cad. No: 195 Kanyon Ofis K:12, Levent / İstanbul",
  technoparkOffice: "İTÜ ARI Teknokent 3 No: 402, Maslak / İstanbul",
  licenses: [
    { title: "TÜRMOB Ruhsatlı SMMM & YMM Ortaklığı", no: "349102" },
    { title: "KGK Bağımsız Denetim Kuruluşu Yetkisi", no: "BDK/2018-41" },
    { title: "GİB Özel Entegratör ve E-Defter Akreditasyonu", no: "GİB-E-2026" }
  ],
  stats: {
    clientsCount: 48,
    managedCapital: "₺1.84 Milyar",
    taxAuditAccuracy: "%99.98",
    avgSlaMinutes: "11.4 dk",
    totalTaxSavings: "₺46.2 Milyon"
  }
};

export const MOCK_CLIENTS = [
  {
    id: "cli-1",
    name: "TechVision Bilişim ve Yapay Zeka A.Ş.",
    shortName: "TechVision A.Ş.",
    type: "Anonim Şirket (A.Ş.)",
    sector: "Yazılım, SaaS & Yapay Zeka",
    taxOffice: "Maslak V.D.",
    taxNumber: "8290192831",
    tradeRegisterNo: "948201-5",
    mersisNo: "0829019283100001",
    foundedDate: "14.03.2021",
    address: "İTÜ Ayazağa Kampüsü ARI Teknokent 3 No: 402, Maslak / İstanbul",
    authorizedPerson: {
      name: "Kerem Aksu",
      title: "Yönetim Kurulu Başkanı & CEO",
      email: "kerem@techvision.io",
      phone: "+90 (533) 456 78 90",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
    },
    assignedCPA: {
      name: "SMMM Kemal Yıldız",
      title: "Kıdemli Vergi & Teknopark Direktörü",
      email: "kemal.yildiz@veloxfinans.com",
      phone: "+90 (212) 809 45 11",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    employeeCount: 34,
    monthlyFee: 26500,
    balance: 0,
    status: "Aktif",
    documentStatus: "Eksiksiz",
    missingDocsCount: 0,
    pendingDocsCount: 2,
    eInvoice: true,
    eLedger: true,
    kdvStatus: "Taslak Onaylandı (GİB Bekliyor)",
    sgkStatus: "4691 Teşvikli Onaylandı",
    quarterlyRevenue: "₺5,420,000",
    monthlyBurnRate: "₺845,000",
    cashRunwayMonths: "18.4 Ay",
    netMargin: "%36.8",
    applicableIncentives: [
      "4691 Sayılı TGB Kanunu (Kurumlar Vergisi %100 İstisna)",
      "Ar-Ge Personeli Gelir Vergisi & SGK Terkin Teşviki",
      "KDV Kanunu Geçici 20/1 Yazılım Teslimi İstisnası"
    ],
    recentLedgerEntries: [
      { yevmiyeNo: "2026/001892", date: "2026-08-22", debitAcc: "770.01 Bulut Sunucu", creditAcc: "320.04 Amazon EMEA", amount: "₺142,850.00", desc: "AWS EMEA Temmuz bulut altyapı faturası ve 2 No KDV tahakkuku" },
      { yevmiyeNo: "2026/001891", date: "2026-08-20", debitAcc: "102.01 Garanti Ticari", creditAcc: "120.18 Enterprise Client", amount: "₺650,000.00", desc: "Q3 Kurumsal SaaS yazılım lisansı tahsilatı" },
      { yevmiyeNo: "2026/001890", date: "2026-08-17", debitAcc: "770.02 Personel Ücret", creditAcc: "361.01 SGK Prim Borcu", amount: "₺645,000.00", desc: "Temmuz 2026 34 personel bordro icmali tahakkuku" }
    ],
    notes: "Q3 KDV iade mahsup dosyası YMM tasdik raporuyla bağlandı. Şirketin vergi uyum endeksi %99.4 seviyesinde."
  },
  {
    id: "cli-2",
    name: "Artisan Gurme Gıda ve Dış Ticaret Ltd. Şti.",
    shortName: "Artisan Gıda Ltd.",
    type: "Limited Şirket (Ltd. Şti.)",
    sector: "E-İhracat & Gurme Gıda",
    taxOffice: "Kadıköy V.D.",
    taxNumber: "1209384756",
    tradeRegisterNo: "830192-2",
    mersisNo: "0120938475600001",
    foundedDate: "20.10.2019",
    address: "Moda Cad. No: 88/B, Kadıköy / İstanbul",
    authorizedPerson: {
      name: "Selin Yılmaz",
      title: "Genel Müdür",
      email: "selin@artisangurme.com",
      phone: "+90 (532) 890 12 34",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
    },
    assignedCPA: {
      name: "SMMM Elif Kaya",
      title: "E-Dönüşüm & Dış Ticaret Sorumlusu",
      email: "elif.kaya@veloxfinans.com",
      phone: "+90 (212) 809 45 14",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80"
    },
    employeeCount: 18,
    monthlyFee: 18500,
    balance: 8500,
    status: "Aktif",
    documentStatus: "2 Eksik Belge",
    missingDocsCount: 2,
    pendingDocsCount: 3,
    eInvoice: true,
    eLedger: true,
    kdvStatus: "GÇB İntaç Bekleniyor",
    sgkStatus: "Onaylandı",
    quarterlyRevenue: "₺3,120,000",
    monthlyBurnRate: "₺420,000",
    cashRunwayMonths: "14.2 Ay",
    netMargin: "%24.1",
    applicableIncentives: [
      "KDV Kanunu 11/1-a (Mal İhracatı %0 KDV İstisnası)",
      "Hizmet İhracatı Gelir Vergisi %80 Kazanç İstisnası",
      "5510 Sayılı Kanun %5 SGK Prim İndirimi"
    ],
    recentLedgerEntries: [
      { yevmiyeNo: "2026/001420", date: "2026-08-21", debitAcc: "120.05 Yurt Dışı Alıcı", creditAcc: "601.01 İhracat Satış", amount: "₺380,000.00", desc: "Almanya distribütör sevkiyatı (GÇB 08912 kapanış kontrolü)" }
    ],
    notes: "VEDOP üzerinden 2 adet gümrük beyannamesinin kapanış tarihi teyit edilecek. POS slip dökümleri bekleniyor."
  },
  {
    id: "cli-3",
    name: "Nexus Entegre Lojistik ve Taşımacılık A.Ş.",
    shortName: "Nexus Lojistik A.Ş.",
    type: "Anonim Şirket (A.Ş.)",
    sector: "Uluslararası Filo & Taşımacılık",
    taxOffice: "Marmara Kurumlar V.D.",
    taxNumber: "4930291847",
    tradeRegisterNo: "772910-1",
    mersisNo: "0493029184700001",
    foundedDate: "05.02.2017",
    address: "Büyükdere Cad. Sun Plaza Kat 18, Maslak / İstanbul",
    authorizedPerson: {
      name: "Murat Demirkan",
      title: "Mali İşler Direktörü (CFO)",
      email: "murat.demirkan@nexusglobal.com",
      phone: "+90 (533) 112 33 44",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
    },
    assignedCPA: {
      name: "SMMM Kemal Yıldız",
      title: "Kıdemli Vergi & Teknopark Direktörü",
      email: "kemal.yildiz@veloxfinans.com",
      phone: "+90 (212) 809 45 11",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
    },
    employeeCount: 64,
    monthlyFee: 34000,
    balance: 0,
    status: "Aktif",
    documentStatus: "Eksiksiz",
    missingDocsCount: 0,
    pendingDocsCount: 1,
    eInvoice: true,
    eLedger: true,
    kdvStatus: "Tahakkuk Alındı",
    sgkStatus: "Tahakkuk Alındı",
    quarterlyRevenue: "₺19,800,000",
    monthlyBurnRate: "₺2,150,000",
    cashRunwayMonths: "26.0 Ay",
    netMargin: "%19.5",
    applicableIncentives: [
      "KDV Kanunu 14/1 Uluslararası Taşımacılık İstisnası",
      "7103 Sayılı İstihdam Teşviki",
      "Yatırım Teşvik Belgesi Kapsamında KDV Tevkifatı"
    ],
    recentLedgerEntries: [
      { yevmiyeNo: "2026/002401", date: "2026-08-23", debitAcc: "102.04 İş Bankası Euro", creditAcc: "601.02 Uluslararası Navlun", amount: "₺1,450,000.00", desc: "Trieste - Trieste intermodal hat navlun bedeli tahakkuku" }
    ],
    notes: "Mayıs 2026 E-Defter beratları zaman damgasıyla GİB sistemine hatasız yüklendi."
  },
  {
    id: "cli-4",
    name: "Pulse Dijital Medya ve Performans Ajansı Ltd.",
    shortName: "Pulse Medya Ltd.",
    type: "Limited Şirket (Ltd. Şti.)",
    sector: "Dijital Reklam & Pazarlama",
    taxOffice: "Beyoğlu V.D.",
    taxNumber: "6729103847",
    tradeRegisterNo: "612093-4",
    mersisNo: "0672910384700001",
    foundedDate: "11.11.2020",
    address: "Büyükdere Cad. No: 185 Kanyon Ofis K:7, Levent / İstanbul",
    authorizedPerson: {
      name: "Canberk Eren",
      title: "Yönetici Ortak",
      email: "canberk@pulsecreative.co",
      phone: "+90 (535) 777 88 99",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80"
    },
    assignedCPA: {
      name: "SMMM Burak Demir",
      title: "Bordro & Teşvik Uzmanı",
      email: "burak.demir@veloxfinans.com",
      phone: "+90 (212) 809 45 16",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80"
    },
    employeeCount: 14,
    monthlyFee: 15500,
    balance: 15500,
    status: "Aktif",
    documentStatus: "4 Eksik Belge",
    missingDocsCount: 4,
    pendingDocsCount: 5,
    eInvoice: true,
    eLedger: false,
    kdvStatus: "2 No KDV Tevkifatı Bekliyor",
    sgkStatus: "Taslak Hazır",
    quarterlyRevenue: "₺1,940,000",
    monthlyBurnRate: "₺310,000",
    cashRunwayMonths: "8.5 Ay",
    netMargin: "%18.2",
    applicableIncentives: [
      "Genç Girişimci Kazanç İstisnası (193 Sayılı GVK Mük. 20)",
      "Yurt Dışı Reklam Hizmetlerinde KDV-2 Stopaj Uygulaması"
    ],
    recentLedgerEntries: [
      { yevmiyeNo: "2026/000982", date: "2026-08-19", debitAcc: "760.01 Reklam Gideri", creditAcc: "360.02 Sorumlu Sıfatıyla KDV", amount: "₺84,000.00", desc: "Meta Ireland Temmuz harcaması 2 No KDV tevkifat karşılığı" }
    ],
    notes: "Google & Meta faturaları için KDV-2 matrah beyannamesi acil onay bekliyor."
  },
  {
    id: "cli-5",
    name: "Nova Biyoteknoloji ve Sağlık Ürünleri A.Ş.",
    shortName: "Nova Biyo A.Ş.",
    type: "Anonim Şirket (A.Ş.)",
    sector: "Biyoteknoloji & Klinik Araştırma",
    taxOffice: "Gebze İhtisas V.D.",
    taxNumber: "9102837465",
    tradeRegisterNo: "440192-3",
    mersisNo: "0910283746500001",
    foundedDate: "18.06.2022",
    address: "TÜBİTAK MAM Teknoloji Geliştirme Bölgesi No: 12, Gebze / Kocaeli",
    authorizedPerson: {
      name: "Dr. Aylin Çetin",
      title: "Ar-Ge Direktörü & Kurucu",
      email: "aylin@novabio.com.tr",
      phone: "+90 (530) 222 33 44",
      avatar: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80"
    },
    assignedCPA: {
      name: "SMMM Zeynep Aydın",
      title: "5746 Ar-Ge & Proje Denetçisi",
      email: "zeynep.aydin@veloxfinans.com",
      phone: "+90 (212) 809 45 18",
      avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80"
    },
    employeeCount: 28,
    monthlyFee: 31000,
    balance: 0,
    status: "Aktif",
    documentStatus: "Eksiksiz",
    missingDocsCount: 0,
    pendingDocsCount: 2,
    eInvoice: true,
    eLedger: true,
    kdvStatus: "Tamamlandı",
    sgkStatus: "5746 Teşvikli Tamamlandı",
    quarterlyRevenue: "₺6,850,000",
    monthlyBurnRate: "₺920,000",
    cashRunwayMonths: "22.0 Ay",
    netMargin: "%42.5",
    applicableIncentives: [
      "5746 Sayılı Kanun Ar-Ge İndirimi (%100 Matrah Düşümü)",
      "TÜBİTAK 1507 & 1501 Proje Harcama Muafiyeti",
      "Doktoralı Personel SGK %50 Hazine Desteği"
    ],
    recentLedgerEntries: [
      { yevmiyeNo: "2026/003102", date: "2026-08-20", debitAcc: "750.01 Laboratuvar Sarf", creditAcc: "320.09 ThermoFisher", amount: "₺285,000.00", desc: "TÜBİTAK Proje 224B kapsamında ithal kit alımı ve KDV istisnası" }
    ],
    notes: "5746 Sayılı kanun kapsamındaki YMM tasdik raporu ve dönem sonu Ar-Ge bilançosu hazırlandı."
  }
];

export const MOCK_DOCUMENTS = [
  {
    id: "doc-101",
    name: "AWS_EMEA_SARL_Temmuz_2026_Faturasi.pdf",
    category: "Alış Faturası",
    client: "TechVision Bilişim ve Yapay Zeka A.Ş.",
    clientId: "cli-1",
    uploadDate: "2026-08-20",
    amount: "₺142,850.00",
    vatAmount: "₺28,570.00",
    vatRate: "%20",
    status: "Onaylandı",
    ocrConfidence: "%99.9",
    fileSize: "1.4 MB",
    supplier: "Amazon Web Services EMEA SARL (Lüksemburg)",
    assignedAccount: "770.01.002 Bulut Sunucu ve Altyapı",
    gibStatus: "2 No KDV Tevkifatı İşlendi",
    taxCode: "0015",
    notes: "Yurt dışı hizmet faturası, sorumlu sıfatıyla KDV-2 ve stopaj matrahına dahil edildi."
  },
  {
    id: "doc-102",
    name: "Garanti_BBVA_Maslak_Ticari_Ekstre_07_2026.pdf",
    category: "Banka Ekstresi",
    client: "TechVision Bilişim ve Yapay Zeka A.Ş.",
    clientId: "cli-1",
    uploadDate: "2026-08-19",
    amount: "₺1,840,200.00",
    vatAmount: "-",
    vatRate: "-",
    status: "Onaylandı",
    ocrConfidence: "%100.0",
    fileSize: "3.2 MB",
    supplier: "Garanti BBVA Maslak Ticari Şubesi",
    assignedAccount: "102.01.001 TL Ticari Mevduat Hesabı",
    gibStatus: "Mutabakat Sağlandı",
    taxCode: "-",
    notes: "Tüm gelen EFT/SWIFT transferleri 120 hesaplarıyla kur farkı hesaplanarak kapatıldı."
  },
  {
    id: "doc-103",
    name: "Temmuz_2026_4691_Personel_Bordro_Icmali.xlsx",
    category: "Bordro / SGK",
    client: "TechVision Bilişim ve Yapay Zeka A.Ş.",
    clientId: "cli-1",
    uploadDate: "2026-08-18",
    amount: "₺645,000.00",
    vatAmount: "-",
    vatRate: "-",
    status: "Onaylandı",
    ocrConfidence: "%100.0",
    fileSize: "850 KB",
    supplier: "TechVision İK & Bordro Departmanı",
    assignedAccount: "770.02.001 Ar-Ge ve Yazılım Personel Gideri",
    gibStatus: "SGK E-Bildirge v2 İletildi",
    taxCode: "0003",
    notes: "34 yazılımcı için 4691 sayılı kanun kapsamındaki ₺38,400 gelir vergisi terkin indirimi uygulandı."
  },
  {
    id: "doc-104",
    name: "GCB_Ihracat_Beyannamesi_2026_08912_Kapandi.pdf",
    category: "Gümrük / İhracat",
    client: "Artisan Gurme Gıda ve Dış Ticaret Ltd. Şti.",
    clientId: "cli-2",
    uploadDate: "2026-08-22",
    amount: "₺380,000.00",
    vatAmount: "₺0.00 (İstisna)",
    vatRate: "%0",
    status: "İncelemede",
    ocrConfidence: "%96.4",
    fileSize: "2.1 MB",
    supplier: "Ambarlı Gümrük Müdürlüğü",
    assignedAccount: "601.01.001 Yurt Dışı Mal Satışları",
    gibStatus: "VEDOP İntaç Teyidi Bekleniyor",
    taxCode: "301",
    notes: "3065 Sayılı KDV Kanunu 11/1-a istisnası gereği döviz alım belgesi eşleştirilecek."
  },
  {
    id: "doc-105",
    name: "Meta_Platforms_Ireland_Temmuz_Reklam_Harcamasi.pdf",
    category: "Alış Faturası",
    client: "Pulse Dijital Medya ve Performans Ajansı Ltd.",
    clientId: "cli-4",
    uploadDate: "2026-08-21",
    amount: "₺84,000.00",
    vatAmount: "₺16,800.00",
    vatRate: "%20",
    status: "Eksik / Talep Edildi",
    ocrConfidence: "%92.0",
    fileSize: "620 KB",
    supplier: "Meta Platforms Ireland Ltd.",
    assignedAccount: "760.01.005 Dijital Reklam ve Pazarlama",
    gibStatus: "KDV-2 Stopaj Bildirimi Bekliyor",
    taxCode: "0015",
    notes: "Vergi kesintisi ve tevkifat dekontu bekleniyor."
  }
];

export const MOCK_TAX_CALENDAR = [
  {
    id: "tax-1",
    title: "Temmuz 2026 KDV-1 ve KDV-2 Beyannameleri",
    type: "KDV Beyannamesi",
    code: "Beyanname Kod: 0015 / 0015-B",
    deadline: "2026-08-28",
    remainingDays: 4,
    status: "Kritik Süreç",
    totalClients: 48,
    completedClients: 41,
    criticalClients: 3,
    legalBasis: "3065 Sayılı Katma Değer Vergisi Kanunu",
    description: "Katma Değer Vergisi beyannamelerinin GİB e-Beyanname sistemine paketlenerek tahakkuk fişlerinin alınması."
  },
  {
    id: "tax-2",
    title: "Temmuz 2026 Muhtasar ve Prim Hizmet Beyannamesi (SGK)",
    type: "Muhtasar & SGK",
    code: "Beyanname Kod: 0003 / MPHB",
    deadline: "2026-08-26",
    remainingDays: 2,
    status: "Acil Onay",
    totalClients: 48,
    completedClients: 44,
    criticalClients: 2,
    legalBasis: "193 Sayılı GVK Madde 94 & 5510 Sayılı Kanun",
    description: "Personel gelir vergisi stopajları, kira tevkifatları ve SGK aylık prim bildirimlerinin resmi onayı."
  },
  {
    id: "tax-3",
    title: "2026 / 2. Dönem Geçici Vergi Beyannamesi (Kurumlar & Gelir)",
    type: "Geçici Vergi",
    code: "Beyanname Kod: 0033 / 0032",
    deadline: "2026-08-17",
    remainingDays: 0,
    status: "Tamamlandı",
    totalClients: 48,
    completedClients: 48,
    criticalClients: 0,
    legalBasis: "5520 Sayılı Kurumlar Vergisi Kanunu Madde 32",
    description: "Nisan-Mayıs-Haziran dönemi kurum geçici vergi beyanları %100 doğrulukla kapatıldı."
  },
  {
    id: "tax-4",
    title: "Mayıs 2026 E-Defter Berat Dosyaları Yüklemesi",
    type: "E-Defter Berat",
    code: "GİB E-Defter v2.1",
    deadline: "2026-08-31",
    remainingDays: 7,
    status: "Şematron Doğrulama",
    totalClients: 32,
    completedClients: 26,
    criticalClients: 0,
    legalBasis: "VUK 509 Sıra No'lu Genel Tebliği",
    description: "Yevmiye ve Kebir defter beratlarının mali mühürle imzalanıp GİB portalına zaman damgasıyla aktarımı."
  }
];

export const MOCK_STAFF = [
  {
    id: "stf-1",
    name: "SMMM Kemal Yıldız",
    role: "Yönetici Ortak & Vergi Direktörü",
    title: "Kıdemli SMMM & Bağımsız Denetçi",
    license: "TÜRMOB Ruhsat No: 349102",
    email: "kemal.yildiz@veloxfinans.com",
    phone: "+90 (212) 809 45 11",
    clientsCount: 16,
    activeTasks: 6,
    workload: 85,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    specialty: "Kurumlar Vergisi, 4691 Teknopark Mevzuatı & Bilanço Analitiği"
  },
  {
    id: "stf-2",
    name: "SMMM Elif Kaya",
    role: "Kıdemli Ortak & Dış Ticaret Sorumlusu",
    title: "Mali Müşavir & KDV İade Uzmanı",
    license: "TÜRMOB Ruhsat No: 381290",
    email: "elif.kaya@veloxfinans.com",
    phone: "+90 (212) 809 45 14",
    clientsCount: 14,
    activeTasks: 4,
    workload: 72,
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    specialty: "E-Fatura, E-Defter, E-İhracat KDV İadesi ve Transfer Fiyatlandırması"
  },
  {
    id: "stf-3",
    name: "SMMM Burak Demir",
    role: "Bordrolama & İş Hukuku Direktörü",
    title: "Vergi & SGK Danışmanı",
    license: "TÜRMOB Ruhsat No: 412093",
    email: "burak.demir@veloxfinans.com",
    phone: "+90 (212) 809 45 16",
    clientsCount: 11,
    activeTasks: 5,
    workload: 80,
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    specialty: "İstihdam Teşvikleri, Muhtasar ve Prim Hizmet Beyannamesi"
  },
  {
    id: "stf-4",
    name: "SMMM Zeynep Aydın",
    role: "Ar-Ge & Finansal Raporlama Danışmanı",
    title: "5746 Mevzuat Uzmanı & YMM Denetçisi",
    license: "TÜRMOB Ruhsat No: 439102",
    email: "zeynep.aydin@veloxfinans.com",
    phone: "+90 (212) 809 45 18",
    clientsCount: 7,
    activeTasks: 4,
    workload: 64,
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&auto=format&fit=crop&q=80",
    specialty: "TÜBİTAK, 5746 Ar-Ge İndirimi, Sanal CFO & Nakit Akış Modelleme"
  }
];

export const MOCK_PAYMENTS = [
  {
    id: "pay-1",
    client: "TechVision Bilişim ve Yapay Zeka A.Ş.",
    clientId: "cli-1",
    period: "Ağustos 2026",
    amount: "₺26,500.00",
    vatAmount: "₺5,300.00",
    totalAmount: "₺31,800.00",
    smmNo: "SMM2026-000491",
    issueDate: "2026-08-01",
    dueDate: "2026-08-15",
    paidDate: "2026-08-03",
    status: "Ödendi",
    method: "Garanti BBVA Kurumsal Havale"
  },
  {
    id: "pay-2",
    client: "Artisan Gurme Gıda ve Dış Ticaret Ltd. Şti.",
    clientId: "cli-2",
    period: "Ağustos 2026",
    amount: "₺18,500.00",
    vatAmount: "₺3,700.00",
    totalAmount: "₺22,200.00",
    smmNo: "SMM2026-000492",
    issueDate: "2026-08-01",
    dueDate: "2026-08-15",
    paidDate: null,
    status: "Gecikmede",
    method: "Kredi Kartı / Bekliyor"
  },
  {
    id: "pay-3",
    client: "Nexus Entegre Lojistik ve Taşımacılık A.Ş.",
    clientId: "cli-3",
    period: "Ağustos 2026",
    amount: "₺34,000.00",
    vatAmount: "₺6,800.00",
    totalAmount: "₺40,800.00",
    smmNo: "SMM2026-000493",
    issueDate: "2026-08-01",
    dueDate: "2026-08-15",
    paidDate: "2026-08-05",
    status: "Ödendi",
    method: "İş Bankası Kurumsal Transfer"
  },
  {
    id: "pay-4",
    client: "Pulse Dijital Medya ve Performans Ajansı Ltd.",
    clientId: "cli-4",
    period: "Ağustos 2026",
    amount: "₺15,500.00",
    vatAmount: "₺3,100.00",
    totalAmount: "₺18,600.00",
    smmNo: "SMM2026-000494",
    issueDate: "2026-08-01",
    dueDate: "2026-08-25",
    paidDate: null,
    status: "Beklemede",
    method: "EFT / Havale"
  },
  {
    id: "pay-5",
    client: "Nova Biyoteknoloji ve Sağlık Ürünleri A.Ş.",
    clientId: "cli-5",
    period: "Ağustos 2026",
    amount: "₺31,000.00",
    vatAmount: "₺6,200.00",
    totalAmount: "₺37,200.00",
    smmNo: "SMM2026-000495",
    issueDate: "2026-08-01",
    dueDate: "2026-08-15",
    paidDate: "2026-08-02",
    status: "Ödendi",
    method: "Yapı Kredi Otomatik Talimat"
  }
];

export const MOCK_SERVICES = [
  {
    id: "srv-1",
    number: "01",
    title: "E-Dönüşüm & GİB Defter Entegrasyonu",
    subtitle: "Uçtan Uca Dijital Mali Altyapı",
    shortDesc: "GİB regülasyonlarına %100 uyumlu e-Fatura, e-Arşiv ve e-Defter berat yönetimi. Sıfır kağıt, anlık şematron doğrulaması.",
    features: [
      "GİB Özel Entegratör ve E-Defter Berat Doğrulama",
      "Yapay Zeka Destekli 2.1 Sn OCR Fatura Okuma",
      "Tekdüzen Hesap Planına Otomatik Yevmiye Kodlaması",
      "Uluslararası ERP & Banka API Entegrasyonları"
    ],
    fullDesc: "Şirketinizin tüm muhasebe akışını geleneksel kağıt karmaşasından kurtarıyoruz. Faturaların yevmiyeye dönüştürülmesinden berat dosyalarının zaman damgalı GİB yüklemesine kadar tüm süreci dijital bir saat mekanizması gibi işletiyoruz."
  },
  {
    id: "srv-2",
    number: "02",
    title: "Kurumlar Vergisi & Stratejik Vergi Planlaması",
    subtitle: "Yasal Çerçevede Maksimum Vergi Optimizasyonu",
    shortDesc: "KDV, Muhtasar, Geçici Vergi ve Kurumlar Vergisi süreçlerinin cezai risklerden arındırılarak yönetilmesi.",
    features: [
      "Aylık KDV-1, KDV-2 ve Muhtasar Beyan Kontrolü",
      "Geçici ve Yıllık Kurumlar Vergisi Hesaplaması",
      "Mizan, Bilanço ve Gelir Tablosu Çift SMM Onayı",
      "Transfer Fiyatlandırması ve Örtülü Sermaye Denetimi"
    ],
    fullDesc: "Vergi bir ceza riski değil, doğru yönetildiğinde nakit akışını güçlendiren bir stratejidir. Mevzuatın sunduğu tüm indirim, istisna ve amortisman haklarınızı şirketinizin kârlılığına yansıtıyoruz."
  },
  {
    id: "srv-3",
    number: "03",
    title: "4691 & 5746 Ar-Ge Teşvik Danışmanlığı",
    subtitle: "Teknoloji ve Yazılım Şirketlerine Özel Muafiyetler",
    shortDesc: "Teknopark kurumlar vergisi muafiyeti, personel gelir vergisi stopaj terkini ve YMM tasdik raporlama süreçleri.",
    features: [
      "Teknopark Kurumlar Vergisi %100 İstisna Dosyası",
      "Ar-Ge Personeli SGK ve Stopaj Hazine Desteği",
      "TÜBİTAK 1501 / 1507 Harcama Denetim Raporları",
      "KDV Geçici 20/1 Yazılım Satış İstisnası Uygulaması"
    ],
    fullDesc: "Teknoloji şirketlerinin en büyük maliyet kalemi olan bordro ve vergi yükünü, 4691 ve 5746 sayılı teşvik kanunları kapsamında optimize ederek her ay yüzbinlerce liralık net nakit avantajı sağlıyoruz."
  },
  {
    id: "srv-4",
    number: "04",
    title: "Sanal CFO & Finansal Karar Konsolu",
    subtitle: "Geçmişi Kaydeden Değil, Geleceği Yöneten Finans",
    shortDesc: "90 günlük nakit akış (cash runway) simülasyonu, birim ekonomi analitiği ve yatırımcı hazır mali tablolar.",
    features: [
      "Canlı Nakit Akış ve Burn Rate Modellemesi",
      "Dönemsel EBITDA ve Faaliyet Kâr Marjı Raporları",
      "Yatırım Turu & Due Diligence Finansal Hazırlığı",
      "Aylık Yönetim Kurulu ve Finans Direktörü Masası"
    ],
    fullDesc: "Geleneksel muhasebe geriye bakar; VELOX Sanal CFO hizmeti ise şirketinizin önündeki 12 ayı simüle eder. Yatırımcı görüşmelerinde, kredi müzakerelerinde ve büyüme planlarında finansal kokpitiniz oluyoruz."
  },
  {
    id: "srv-5",
    number: "05",
    title: "İhracat & Yatırım KDV İadesi",
    subtitle: "Hızlı Nakit ve Mahsuben İade Dosyaları",
    shortDesc: "Mal ve hizmet ihracatı KDV istisnası, indirimli oran ve tevkifattan doğan alacakların GİB'den hızlı tahsili.",
    features: [
      "3065 Sayılı Kanun 11/1-a Mal İhracatı İade Dosyası",
      "Yurtdışı Yazılım ve Mühendislik %80 Kazanç İndirimi",
      "VEDOP GÇB İntaç Teyitleri ve Karşıt İnceleme",
      "Yeminli Mali Müşavir (YMM) Tasdik Raporu"
    ],
    fullDesc: "Devletten alacaklı olduğunuz KDV tutarlarını bürokrasiye takılmadan, karşıt inceleme ve YMM raporlarıyla hızla şirket kasanıza geri kazandırıyoruz."
  },
  {
    id: "srv-6",
    number: "06",
    title: "Bordrolama & İstihdam Teşvikleri",
    subtitle: "Hatasız Bordro ve Maksimum SGK Teşviki",
    shortDesc: "Kişiye özel e-imzalı bordrolar, kıdem-ihbar fonu yönetimi ve otomatik SGK teşvik optimizasyonu.",
    features: [
      "5510, 6111 ve 7103 SGK Teşvik Algoritması",
      "KVKK Uyumlu Şifreli Dijital Bordro Dağıtımı",
      "İşe Giriş / Çıkış ve İcra/BES Süreç Takibi",
      "İş Hukuku ve İş Sözleşmeleri Denetimi"
    ],
    fullDesc: "Her ay personelleriniz için en yüksek tasarruf sağlayan SGK teşvik kodunu tarayarak bordro maliyetlerinde %18 ile %35 arasında değişen sürdürülebilir avantaj elde ediyoruz."
  }
];

export const MOCK_BLOG_POSTS = [
  {
    id: "post-1",
    title: "Teknoloji Şirketlerinde 4691 ve 5746 Sayılı Kanun Uygulamaları: 2026 Vergi Kılavuzu",
    slug: "teknoloji-sirketleri-2026-vergi-muafiyeti",
    category: "Vergi Mevzuatı",
    readTime: "5 dk",
    date: "18 Ağustos 2026",
    author: "SMMM Kemal Yıldız",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    summary: "Teknopark sınırları içinde üretilen yazılım kazançlarının kurumlar vergisinden %100 istisnası ve yazılımcı bordrolarındaki stopaj terkininin incelikleri.",
    content: `Teknoloji Geliştirme Bölgeleri (TGB) ve Ar-Ge Merkezleri, yüksek katma değerli üretim yapan girişimlerin küresel rekabet gücünü artırmak amacıyla önemli mali avantajlarla donatılmıştır.

2026 yılı itibarıyla dikkat edilmesi gereken kritik başlıklar:
1. **Kurumlar Vergisi İstisnası:** Teknopark içinde geliştirilen patent, yazılım ve algoritma satışından elde edilen net kazanç kurumlar vergisinden muaftır.
2. **KDV Geçici 20/1 İstisnası:** TGB'de üretilen sistem yönetimi, veri yönetimi ve iş uygulamaları yazılımlarının satışı KDV'den istisnadır.
3. **Bordro Stopaj Terkini:** Ar-Ge ve destek personelinin fiilen projede harcadığı süreye isabet eden gelir vergisi muhtasar beyannamesinde terkin edilir.

VELOX olarak her ay mükelleflerimizin YMM tasdik dosyalarını eksiksiz hazırlıyor, olası vergi incelemelerinde %100 güvence sağlıyoruz.`
  },
  {
    id: "post-2",
    title: "E-İhracat ve Hizmet İhracatında KDV İstisnası ile %80 Kazanç İndirimi",
    slug: "e-ihracat-kdv-istisnasi-80-kazanc-indirimi",
    category: "Dış Ticaret & Finans",
    readTime: "4 dk",
    date: "12 Ağustos 2026",
    author: "SMMM Elif Kaya",
    authorAvatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    summary: "Yurtdışına yazılım, tasarım, mühendislik veya veri analitiği ihraç eden şirketlerin Kurumlar Vergisi Kanunu Madde 10/1-ğ kapsamındaki avantajları.",
    content: `Türkiye'de yerleşik şirketlerin yurt dışındaki müşterilerine sundukları mimarlık, mühendislik, tasarım, yazılım, veri saklama ve çağrı merkezi hizmetlerinden elde ettikleri kazançların %80'i kurumlar vergisi matrahından indirilebilir.

Temel Şartlar:
- Faturanın yurt dışındaki mukim kişi veya kuruma düzenlenmesi.
- Hizmetten yurt dışında faydalanılması.
- Bedelin döviz olarak Türkiye'deki banka hesaplarına transfer edilmesi.

Bu düzenleme ile fiili kurumlar vergisi yükü %25'ten %5 seviyelerine kadar gerilemektedir.`
  },
  {
    id: "post-3",
    title: "E-Defter Berat Yüklemelerinde Şematron Hataları ve Mücbir Sebep Süreçleri",
    slug: "e-defter-berat-yukleme-kriterleri-2026",
    category: "E-Dönüşüm",
    readTime: "6 dk",
    date: "04 Ağustos 2026",
    author: "SMMM Kemal Yıldız",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    summary: "GİB e-Defter portalında berat onaylama süreçlerinde karşılaşılan XML format uyuşmazlıkları ve cezai yaptırımlardan korunma yöntemleri.",
    content: `Yevmiye ve Kebir defterlerinin yasal süresinde GİB sistemine aktarılması, VUK 359 ve 353 uyarınca özel usulsüzlük cezalarının önüne geçmek için kritik önem taşır.

VELOX platformu, berat dosyalarını yüklemeden önce yapay zeka ön şematron testine tabi tutar ve hesap planındaki kuruş hatalarını anında tespit eder.`
  }
];

export const MOCK_TESTIMONIALS = [
  {
    id: "test-1",
    name: "Kerem Aksu",
    role: "Yönetim Kurulu Başkanı",
    company: "TechVision Bilişim A.Ş.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Teknopark'ta 34 kişilik mühendislik ekibimizin bordro teşviklerini ve yıllık kurumlar vergisi muafiyetini VELOX ekibiyle sıfır hatayla yönetiyoruz. Finansal raporlama kaliteleri yatırımcı müzakerelerimizde elimizi çok güçlendirdi.",
    rating: 5,
    tag: "Yazılım / Teknopark",
    metric: "₺460K+ Yıllık Tasarruf"
  },
  {
    id: "test-2",
    name: "Murat Demirkan",
    role: "Mali İşler Direktörü (CFO)",
    company: "Nexus Entegre Lojistik A.Ş.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    quote: "60+ araçlık filomuzun uluslararası navlun KDV istisna süreçlerini ve aylık e-defter beratlarını saat gibi işleyen bir dijital disiplinle yürütüyorlar. SMMM Kemal Bey'in mevzuat hakimiyeti birinci sınıf.",
    rating: 5,
    tag: "Lojistik & Taşımacılık",
    metric: "%100 Zamanında Uyum"
  },
  {
    id: "test-3",
    name: "Dr. Aylin Çetin",
    role: "Kurucu & Ar-Ge Direktörü",
    company: "Nova Biyoteknoloji A.Ş.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=150&auto=format&fit=crop&q=80",
    quote: "TÜBİTAK projelerimizin mali raporlamasında ve 5746 Ar-Ge indirimlerinde SMMM Zeynep Hanım ile çalışmak büyük bir konfor. Muhasebeyi arkamıza bakmadan emanet ettiğimiz tek iş ortağımız.",
    rating: 5,
    tag: "Biyoteknoloji & Ar-Ge",
    metric: "TÜBİTAK Tam Uyum"
  }
];

export const MOCK_TASKS = [
  {
    id: "tsk-1",
    title: "Temmuz 2026 KDV-1 Beyannamelerinin GİB Sistemine Paketlenmesi",
    client: "TechVision Bilişim ve Yapay Zeka A.Ş.",
    clientId: "cli-1",
    assignedTo: "SMMM Kemal Yıldız",
    dueDate: "2026-08-26",
    priority: "Acil",
    status: "İnceleniyor",
    category: "KDV Beyannamesi",
    progress: 85,
    description: "4691 sayılı kanun istisnaları mizanla mutabık. GİB e-Beyanname taslağı hazırlandı."
  },
  {
    id: "tsk-2",
    title: "Artisan Gıda İhracat GÇB İntaç Doğrulaması & KDV İstisna Dosyası",
    client: "Artisan Gurme Gıda ve Dış Ticaret Ltd. Şti.",
    clientId: "cli-2",
    assignedTo: "SMMM Elif Kaya",
    dueDate: "2026-08-25",
    priority: "Acil",
    status: "Müşteri Onayında",
    category: "İhracat KDV İadesi",
    progress: 60,
    description: "VEDOP üzerinden gümrük beyannameleri intaç kontrolü tamamlandı, 2 eksik slip talep edildi."
  },
  {
    id: "tsk-3",
    title: "Nexus Lojistik Mayıs E-Defter Berat Şematron Testi",
    client: "Nexus Entegre Lojistik ve Taşımacılık A.Ş.",
    clientId: "cli-3",
    assignedTo: "SMMM Kemal Yıldız",
    dueDate: "2026-08-30",
    priority: "Normal",
    status: "Yapılacak",
    category: "E-Defter Berat",
    progress: 30,
    description: "Yevmiye ve Kebir berat dosyaları şematron kontrolünden geçirilecek."
  },
  {
    id: "tsk-4",
    title: "Pulse Medya 2 No'lu KDV Tevkifat Analizi & Stopaj Matrahı",
    client: "Pulse Dijital Medya ve Performans Ajansı Ltd.",
    clientId: "cli-4",
    assignedTo: "SMMM Burak Demir",
    dueDate: "2026-08-24",
    priority: "Acil",
    status: "Yapılacak",
    category: "Vergi İncelemesi",
    progress: 20,
    description: "Meta ve Google yurt dışı faturalarının KDV-2 stopaj matrahları hesaplanacak."
  },
  {
    id: "tsk-5",
    title: "Nova Biyo TÜBİTAK 1507 Dönem Harcama YMM Tasdik Raporu",
    client: "Nova Biyoteknoloji ve Sağlık Ürünleri A.Ş.",
    clientId: "cli-5",
    assignedTo: "SMMM Zeynep Aydın",
    dueDate: "2026-08-28",
    priority: "Normal",
    status: "Tamamlandı",
    category: "5746 Ar-Ge Raporu",
    progress: 100,
    description: "Ar-Ge personel zaman dağılımları ve laboratuvar sarf faturaları tasdik edildi."
  }
];

export const MOCK_LEADS = [
  {
    id: "lead-1",
    companyName: "Solvy Enerji Teknolojileri A.Ş.",
    contactPerson: "Barış Özkan",
    title: "Kurucu Ortak",
    email: "baris@solvyenergy.com",
    phone: "+90 (532) 999 11 22",
    companyType: "Anonim Şirket (A.Ş.)",
    sector: "Yenilenebilir Enerji & SaaS",
    estimatedMonthly: "₺32,000",
    employeeCount: "25+ Personel",
    stage: "Teklif Gönderildi",
    appliedDate: "2026-08-22",
    notes: "Teknopark şubesi açılışı ve Ar-Ge teşvik danışmanlığı talep ediyor. Teklif inceleniyor."
  },
  {
    id: "lead-2",
    companyName: "Lumina Tasarım & E-İhracat Ltd.",
    contactPerson: "Ece Tuncer",
    title: "CEO",
    email: "ece@lumina.design",
    phone: "+90 (533) 888 44 55",
    companyType: "Limited Şirket (Ltd. Şti.)",
    sector: "E-İhracat & Mimari Tasarım",
    estimatedMonthly: "₺22,500",
    employeeCount: "14 Personel",
    stage: "Sözleşme Aşaması",
    appliedDate: "2026-08-20",
    notes: "Shopify ve Etsy entegrasyonlu ihracat KDV iadesi istiyor. Sözleşme taslağı iletildi."
  },
  {
    id: "lead-3",
    companyName: "Hyperion Robotics & Otomasyon A.Ş.",
    contactPerson: "Kaan Sezgin",
    title: "Yönetici Ortak",
    email: "kaan@hyperion.co",
    phone: "+90 (530) 111 77 88",
    companyType: "Anonim Şirket (A.Ş.)",
    sector: "Robotik & Yapay Zeka",
    estimatedMonthly: "₺28,000",
    employeeCount: "9 Personel",
    stage: "Ön Görüşme Yapıldı",
    appliedDate: "2026-08-23",
    notes: "Tohum yatırım turu öncesi finansal modelleme ve Sanal CFO desteği istiyorlar."
  }
];

export const AI_PRECONFIGURED_RESPONSES = {
  "evrak": {
    title: "Haftalık Kritik Evrak & Beyanname Denetim Raporu",
    type: "evrak_summary",
    content: "Temmuz 2026 KDV-1 ve Muhtasar beyan dönemi için 2 mükellefte kritik evrak eksiği bulunmaktadır:",
    items: [
      {
        company: "Artisan Gurme Gıda Ltd.",
        missing: "2 Adet İhracat Gümrük Beyannamesi (GÇB) & POS Z Raporları",
        urgency: "Kritik (KDV Beyanına 4 Gün Kaldı)",
        action: "SMS / WhatsApp Hatırlatması Gönder"
      },
      {
        company: "Pulse Dijital Medya Ltd.",
        missing: "Meta Reklam Faturası & 2 No KDV Dekontları (4 Evrak)",
        urgency: "Kritik (KDV-2 Stopaj Riski)",
        action: "Mükellef ile Doğrudan Görüş"
      }
    ],
    summaryStats: "Toplam 48 kurumsal mükellefin 44'ünde (%91.6) tüm mizan evrakları eksiksiz kapandı."
  },
  "geciken": {
    title: "Gecikme & Risk Matrisi Analizi",
    type: "delay_summary",
    content: "Sistemde öncelikli aksiyon bekleyen 3 operasyon tespit edildi:",
    items: [
      {
        title: "Temmuz 2026 KDV-1 Beyanname Taslağı",
        company: "Pulse Dijital Medya Ltd.",
        status: "Evrak Eksiği Nedeniyle Bekliyor (Termin: 28 Ağustos)",
        assigned: "SMMM Burak Demir"
      },
      {
        title: "Ağustos Müşavirlik Ücreti Tahsilatı",
        company: "Artisan Gurme Gıda Ltd.",
        status: "8 Gün Gecikmede (₺22,200.00)",
        assigned: "Finans Masası"
      },
      {
        title: "İhracat KDV İade Beyan Formu",
        company: "Artisan Gıda Ltd.",
        status: "GÇB İntaç Teyidi Bekleniyor",
        assigned: "SMMM Elif Kaya"
      }
    ],
    recommendation: "Pulse Medya yetkilisi Canberk Eren'e 2 No'lu KDV tevkifat cezai riskleri hakkında resmi e-posta bildirimi yapılması önerilir."
  },
  "bugun": {
    title: "Bugünün Yasal İş Planı (24 Ağustos 2026)",
    type: "today_summary",
    content: "Bugünkü takvimde 4 kritik mali işlem yer almaktadır:",
    items: [
      {
        task: "TechVision A.Ş. Temmuz KDV-1 beyanını GİB sisteminde onayla",
        time: "11:00",
        priority: "Yüksek",
        status: "Hazır"
      },
      {
        task: "Solvy Enerji A.Ş. Teknopark müşavirlik teklifini ilet (CRM Lead)",
        time: "14:30",
        priority: "Orta",
        status: "Taslak"
      },
      {
        task: "Mayıs ayı E-Defter berat ön şematron testlerini çalıştır (32 Şirket)",
        time: "16:00",
        priority: "Yüksek",
        status: "Bekliyor"
      },
      {
        task: "Ağustos ayı e-SMM makbuzlarının resmi GİB onaylarını tamamla",
        time: "17:30",
        priority: "Normal",
        status: "Hazırlanıyor"
      }
    ],
    productivityTip: "KDV beyannamelerinin %85'i hazırlandı; kalan 3 beyanname tamamlandığında haftalık hedef %100 olacak."
  },
  "techvision": {
    title: "TechVision Bilişim ve Yapay Zeka A.Ş. — 360° Finansal Durum",
    type: "client_summary",
    content: "TechVision A.Ş. için mali ve vergisel göstergeler üst düzeydedir:",
    metrics: [
      { label: "Vergi Uyum Skoru", value: "%99.4 (Kusursuz)" },
      { label: "KDV-1 Durumu", value: "Taslak Onaylandı (GİB Bekliyor)" },
      { label: "Bordro Teşviki", value: "34 Personel / 4691 İstisna Uygulandı" },
      { label: "Nakit Runway", value: "18.4 Ay (Güçlü Nakit Akışı)" },
      { label: "Cari Bakiye", value: "₺0.00 (Borcu Yok)" }
    ],
    notes: "Teknopark kurumlar vergisi muafiyeti eksiksiz işletildi. Q3 KDV iade mahsup dosyası YMM tasdik raporuyla hazırlandı."
  }
};
