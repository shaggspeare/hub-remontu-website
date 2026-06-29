export const BUSINESS = {
  name: "Hub Remontu",
  legalName: "Hub Remontu",
  url: "https://hubremontu.ua",
  logo: "https://hubremontu.ua/images/logo_en.svg",
  email: "hubremontu@gmail.com",
  phone: "+380683833888",
  phoneDisplay: "+38 (068) 383 38 88",
  priceRange: "$$$",
  slogan: "Ремонт та дизайн інтерʼєру під ключ у Києві",
  address: {
    streetAddress: "Дніпровська набережна, 15Ж, офіс 5, ЖК Great",
    addressLocality: "Київ",
    addressRegion: "Київська область",
    addressCountry: "UA",
  },
  // TODO(slava): verify exact coordinates from the Google Business Profile pin.
  // Approx (ЖК Great, Дніпровська наб.): 50.398, 30.617 — VERIFY before shipping.
  geo: { latitude: 50.398, longitude: 30.617 },
  sameAs: [
    "https://www.facebook.com/profile.php?id=61555825405999",
    "https://www.instagram.com/hub_remontu",
    "https://t.me/Design_interiors_HUB",
  ],
  areaServed: [
    "Київ",
    "Козин",
    "Конча-Заспа",
    "Лісники",
    "Ходосівка",
    "Романків",
    "Іванковичі",
    "Гатне",
    "Крюківщина",
    "Софіївська Борщагівка",
    "Петропавлівська Борщагівка",
    "Віта-Поштова",
    "Чабани",
    "Стоянка",
    "Буча",
    "Ірпінь",
    "Ворзель",
    "Дмитрівка",
    "Білогородка",
  ],
} as const;

export const SERVICES = [
  {
    slug: "remont-kvartyr-pid-kliuch",
    name: "Ремонт квартир під ключ",
    serviceType: "Apartment renovation",
    metaTitle: "Ремонт квартир під ключ у Києві — Hub Remontu",
    metaDescription:
      "Повний цикл: дизайн, ремонт, комплектація. Фіксована ціна в договорі, гарантія, авторський нагляд. 300+ обʼєктів, 13 років досвіду.",
  },
  {
    slug: "dyzajn-interieru",
    name: "Дизайн інтерʼєру",
    serviceType: "Interior design",
    metaTitle: "Дизайн інтерʼєру під ключ — Київ | Hub Remontu",
    metaDescription:
      "Індивідуальний дизайн-проєкт під ваш стиль і бюджет. 3D-візуалізації, авторський супровід. Реалізація під ключ у Києві та області.",
  },
  {
    slug: "dyzajnerskyj-remont",
    name: "Дизайнерський ремонт",
    serviceType: "Designer renovation",
    metaTitle: "Дизайнерський ремонт під ключ у Києві — Hub Remontu",
    metaDescription:
      "Ремонт за дизайн-проєктом з авторським наглядом. Один підрядник — повний цикл. Фіксована ціна, оплата за фактом робіт.",
  },
  {
    slug: "remont-ofisiv-ta-komertsii",
    name: "Ремонт офісів та комерції",
    serviceType: "Commercial renovation",
    metaTitle: "Ремонт офісів і комерційних приміщень — Київ",
    metaDescription:
      "Офіси, ресторани, клініки, салони, магазини під ключ. Запускаємо бізнес вчасно, мінімізуємо простій. 300+ проєктів.",
  },
  {
    slug: "remont-budynkiv-ta-kotedzhiv",
    name: "Ремонт будинків і котеджів",
    serviceType: "House renovation",
    metaTitle: "Ремонт будинків і котеджів під ключ — Київ та область",
    metaDescription:
      "Ремонт будинків, котеджів і таунхаусів під ключ. Авторський нагляд, прозора звітність. Київ та область.",
  },
  {
    slug: "dyzajn-komertsii",
    name: "Дизайн комерції",
    serviceType: "Commercial interior design",
    metaTitle: "Дизайн комерційних приміщень — Київ | Hub Remontu",
    metaDescription:
      "Дизайн офісів, ресторанів, клінік, шоурумів. Реалістичні 3D-візуалізації, реалізація під ключ.",
  },
] as const;
