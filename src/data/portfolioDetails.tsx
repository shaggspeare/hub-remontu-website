import { PortfolioDetailsInfo } from "@/components/PortfolioDetails/PortfolioDetailsContent";

export function getPortfolioDetailsById(
  id: string,
): PortfolioDetailsInfo | undefined {
  const portfolioData: { [key: string]: PortfolioDetailsInfo } = {
    "1": {
      title: "Сонячна квартира у стилі мінімалізм у ЖК Сирецькі Сади",
      mainImage: "/images/new-images/sample-project/10.jpg",
      description: {
        part1: (
          <>
            <p>
              Квартирка, у якій ідеально поєднались лаконічність та комфорт, яка
              підкреслила та доповнила ритм життя наших замовників. Продумане
              планування, світлі кольори стін та акцентні меблі створили
              відчуття простору в оселі. Вийшло дуже затишно! А головне –
              достатньо місця для кожного члена родини.
            </p>
          </>
        ),
        part2: (
          <>
            <p>
              Віримо, що ця квартира подарує нашим замовникам багато позитивних
              та безтурботних моментів, пов’язаних з ремонтом. Можливо, ваша
              оселя буде наступною?
            </p>
          </>
        ),
      },
      servicesCovered: [
        "машинна штукатурка з повною геометрією приміщення",
        "монтаж теплої підлоги по всій квартирі",
        "підлога: нівелірна + покриття керамогранітом та паркетною дошкою",
        "стеля: натяжна + тіньовий профіль",
        "стіни: фарба + фотошпалери",
        "двері та плінтус прихованого монтажу",
        "освітлення комбіноване: трекові системи + світильники + бра",
        "безпека: «розумний будинок» + відеонагляд",
      ],
      projectDetails: {
        client: "Молода сім’я з хлопчиками-близнятами",
        duration: "7 місяців з меблюванням",
        squareMeters: "62 м2",
        services: "Дизайн-проєкт, ремонт",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/sample-project/1.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/sample-project/2.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/sample-project/3.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/sample-project/4.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/sample-project/5.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/sample-project/6.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/sample-project/7.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/sample-project/8.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/sample-project/9.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/sample-project/10.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/sample-project/11.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/sample-project/12.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/sample-project/13.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/sample-project/14.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/sample-project/15.jpg",
        },
        {
          id: "16",
          image: "/images/new-images/sample-project/16.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/sample-project/17.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/sample-project/18.jpg",
        },
        {
          id: "19",
          image: "/images/new-images/sample-project/19.jpg",
        },
        {
          id: "20",
          image: "/images/new-images/sample-project/20.jpg",
        },
        {
          id: "21",
          image: "/images/new-images/sample-project/21.jpg",
        },
        {
          id: "22",
          image: "/images/new-images/sample-project/22.jpg",
        },
      ],
    },
    "2": {
      title: "3-к квартира, 72 м2 у ЖК Файна Таун",
      mainImage: "/images/new-images/past-projects/3k_faynatown-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара ІТ-спеціалістів з малюком",
        duration: "6 місяців",
        squareMeters: "72 м2",
        services: "Дизайн-проєкт, ремонт",
      },
      galleryImages: [],
    },
    "3": {
      title: "3-к квартира, 72 м2 у ЖК Галактика",
      mainImage: "/images/new-images/past-projects/3k_galaktyka-min.png",
      description: {
        part1: (
          <>
            <p>
              Простора, тепла та по-справжньому затишна 2-кімнатна квартира
              площею 72 м2 у ЖК Галактика.
            </p>
          </>
        ),
        part2: (
          <>
            <p>
              Ми виконали комплексний ремонт повного циклу: від демонтажу до
              меблювання. У результаті отримали простір з кухнею-вітальнею,
              спальнею, гостьовою, санвузлом, гардеробною та технічною кімнатою.
            </p>
          </>
        ),
      },
      servicesCovered: [
        "повне перепланування",
        "електромонтажні та сантехнічні роботи",
        "машинна штукатурка",
        "укладання керамограніту та паркетної дошки",
      ],
      projectDetails: {
        client: "Інвестор у нерухомість для здачі в оренду",
        duration: "6 місяців",
        squareMeters: "72 м2",
        services: "Комплексний ремонт",
      },
      galleryImages: [],
    },
    "4": {
      title: "3-к квартира, 100 м2 у ЖК Triiinity",
      mainImage: "/images/new-images/past-projects/3k_trinity-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода сімейна пара з двома дітьми",
        duration: "4 місяці",
        squareMeters: "100 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "5": {
      title: "3-к квартира, 99 м2 у ЖК San Francisco Creative House",
      mainImage: "/images/new-images/past-projects/3k_sanfran-min.png",
      description: {
        part1: <p>Стильна та функціональна квартира у ЖК `San Francisco`.</p>,
        part2: (
          <p>
            Одним із запитів замовників було створити затишок не тільки для них,
            але й для їх домашнього улюбленця, тому місце для котика стало
            родзинкою цього інтер`єру.
          </p>
        ),
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара",
        duration: "4 місяці",
        squareMeters: "99 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "6": {
      title: "2-к квартира, 59 м2 у ЖК Старт",
      mainImage: "/images/new-images/past-projects/2k_start-1-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молодий хлопець, ІТ-спеціаліст",
        duration: "2,5 місяці",
        squareMeters: "59 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "7": {
      title: "2-к квартира, 53 м2 у ЖК Старт",
      mainImage: "/images/new-images/past-projects/2k-start-2-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара з маленькою донькою",
        duration: "3 місяці",
        squareMeters: "53 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "8": {
      title: "2-к квартира, 80 м2 у ЖК Старт",
      mainImage: "/images/new-images/past-projects/2k_start-3-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Сім’я з дорослою донькою",
        duration: "3 місяці",
        squareMeters: "80 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "9": {
      title: "2-к квартира, 71 м2 у ЖК Great",
      mainImage: "/images/new-images/past-projects/2k_great-min.png",
      description: {
        part1: (
          <p>
            ЖК `GREAT` - затишна, стильна та функціональна квартира. Головною
            задачею для HUB remontu було зробити приміщення таким, щоб воно
            повністю відображало замовників.
          </p>
        ),
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара, працюють у ресторанній сфері",
        duration: "2 місяці",
        squareMeters: "71 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "10": {
      title: "2-к квартира, 72 м2 у ЖК Діброва Парк",
      mainImage: "/images/new-images/past-projects/2k_dibrova-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода дівчина, яка працює в сфері маркетингу",
        duration: "3 місяці",
        squareMeters: "72 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "11": {
      title: "2-к квартира, 70 м2 у ЖК Campus",
      mainImage: "/images/new-images/past-projects/2k_campus-min.png",
      description: {
        part1: <p>Квартира, що надихає та має неймовірну атмосферу.</p>,
        part2: (
          <p>
            Виконаний комплексний ремонт: перепланування, оздоблення стін,
            малярні роботи, встановлення обладнання.
          </p>
        ),
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара айтішників",
        duration: "4 місяці",
        squareMeters: "70 м2",
        services: "Комплексний ремонт",
      },
      galleryImages: [],
    },
    "12": {
      title: "2-рівнева квартира, 140 м2 у ЖК Зарічний",
      mainImage: "/images/new-images/past-projects/2lvl_zarichnyi-min.png",
      description: {
        part1: (
          <p>
            Двоповерхова 3-к квартира площею 140 м2. Простора оселя з трьома
            спальнями, великою кухнею-студією, двома санвузлами, гардеробними та
            ігровою кімнатою для дітей.
          </p>
        ),
        part2: (
          <p>
            Кожний квадратний метр продуманий і максимально ергономічний.
            Реалізувати дизайн-проєкт цієї квартири було справжнім задоволенням.
          </p>
        ),
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода сімейна пара з двома дітьми",
        duration: "6 місяців",
        squareMeters: "140 м2",
        services: "Дизайн-проєкт, ремонт",
      },
      galleryImages: [],
    },
    "13": {
      title: "2-кімнатна квартира, 69 м2 у ЖК Great 232",
      mainImage: "/images/new-images/past-projects/2k_zhk-great-232-min.png",
      description: {
        part1: <p>Стильна та функціональна квартира у ЖК Great.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода сім’я з сином",
        duration: "3 місяці",
        squareMeters: "69 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "14": {
      title: "1-кімнатна квартира, 43 м2 у ЖК Кришталеві Джерела",
      mainImage: "/images/new-images/past-projects/1k_crystal_dzherela-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара лікарів",
        duration: "2 місяці",
        squareMeters: "43 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "15": {
      title: "2-кімнатна квартира, 72 м2 у ЖК Great 233",
      mainImage: "/images/new-images/past-projects/2k_zhk-great-233-min.png",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара з двома синами",
        duration: "3 місяці",
        squareMeters: "72 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [],
    },
    "16": {
      title: "Beauty-простір, клініка-косметології 'palamarenko.clinic' ",
      mainImage: "/images/new-images/past-commerce/clinic-palamrenko.png",
      description: {
        part1: (
          <p>
            Hеймовірний проект косметологічної клініки - @palamarenko.clinic. І
            неймовірна та смілива власниця Ксенія - @dr.ksenia_palamarenko. Це
            той випадок, коли повна довіра приводить до крутого результату.
            Власниця клініки цінує та захоплюється природньою красою, тож дизайн
            та оздоблення клініки були виконано з природніх матеріалів які
            наповнили простір теплом та затишком, поєднання дерева, каменю та
            декоративного оздоблення доповнили простір та підкреслили місію та
            бачення власниці.
          </p>
        ),
      },
      servicesCovered: [],
      projectDetails: {
        client:
          "Молода підприємиця, яка в розпал війни продовжує діяти та масштабуватись",
        duration: "",
        squareMeters: "72 м2",
        services: "Реалізація проєкту",
      },
      galleryImages: [],
    },
    "17": {
      title: "Military-магазин",
      mainImage: "/images/new-images/past-commerce/military-shop.png",
      description: {
        part1: (
          <p>
            Простір, що має три рівні, реалізований із дотриманням усіх вимог
            законодавства для магазину зброї. Завдяки наполегливій праці,
            створено якісний та амбіційний мілітарі-простір. Military-простір -
            “yashkina”, простір з амбіціями та впевненістю в перемогу. Площа
            цього приміщення 200кв.м, та має 3 рівні: 1й поверх, цоколь, підвал.
          </p>
        ),
        part2: (
          <p>
            З нашою наполегливістю ми впорались з усім і отримали дуже крутий
            результат - якісно реалізовані будівельно-оздоблювальні роботи та
            крутий, абсолютно новий мілітарі простір!
          </p>
        ),
      },
      servicesCovered: [
        "Генпідряд;",
        "Повний комплекс будівельно-оздоблювальних робіт;",
        "Дотримано всіх норм, постанов, наказів для функціонування магазину зброї;",
        "Кожен квадратний метр простору відповідає всіх вимогам законодавства. ",
      ],
      projectDetails: {
        client: "Підприємиця, власниця мережі магазинів зброї",
        duration: "7 місяців",
        squareMeters: "200 м2",
        services: "Генпідряд, оздоблювальні роботи",
      },
      galleryImages: [],
    },
    "18": {
      title: "Піцерія “Люта Піца”, 75 м2",
      mainImage: "/images/new-images/past-commerce/pizzeria_lyuta_pizza.png",
      description: {
        part1: (
          <p>
            Як показує наш досвід, дизайн та оздоблення приміщень для бізнесу
            завжди характеризує власників, їх амбіції, переконання та доповнює
            місію бренду. Термін реалізації - це один з важливих факторів чому
            обирають саме нашу команду, оскільки при оренді приміщення завжди
            важливо втіснутись в супер короткий термін “орендних канікул”.
          </p>
        ),
      },
      servicesCovered: [],
      projectDetails: {
        client:
          "Молодий підприємець, який переїхав в Київ з Херсону, та почав життя “з нового листа”",
        duration: "2 місяці",
        squareMeters: "75 м2",
        services: "Реалізація проєкту",
      },
      galleryImages: [],
    },
    "19": {
      title: "Офісне приміщення, 700 м2 у ЖК New York Concept House",
      mainImage: "/images/new-images/past-commerce/coworking_ny_zhk.png",
      description: {
        part1: (
          <p>Концептуальне офісне приміщення, створене швидко та якісно.</p>
        ),
        part2: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Міжнародна компанія",
        duration: "3,5 місяці",
        squareMeters: "700 м2",
        services: "Реалізація проєкту",
      },
      galleryImages: [],
    },
    "20": {
      title: "Кав’ярня метро Лівобережна",
      mainImage: "/images/new-images/past-commerce/cafe-livoberezhna.png",
      description: {
        part1: (
          <p>
            Виконано комплексний ремонт: електромонтажні роботи, сантехнічні
            роботи, декоративне оздоблення та монтаж обладнання.
          </p>
        ),
      },
      servicesCovered: [
        "️електромонтажні роботи",
        "️сантехнічні роботи",
        "️вкладання плитки на робочій зоні",
        "️підлогове покриття - керамограніт (плитка)",
        "гіпсокартонні роботи ( стеля + ГКЛ конструкція під рекламну вивіску",
        "️малярні роботи",
        "️оздоблення стін: декоративна штукатурка під бетон, віконний профіль перефарбовувався в чорний колір",
        "️стеля - гіпсокартонна + дерев’яні рейки ",
        "комбіноване освітлення",
        "️монтаж всього обладнання",
        "️встановлення фурнітури та всіх додаткових предметів в інтер'єрі.",
      ],
      projectDetails: {
        client: "Молода сімейна пара підприємців",
        duration: "1 місяць",
        squareMeters: "70 м2",
        services: "Комплексний ремонт",
      },
      galleryImages: [],
    },
  };

  return portfolioData[id];
}
