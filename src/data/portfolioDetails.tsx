import React from "react";

export interface PortfolioDetailsData {
  id: string;
  image: string;
}

export interface PortfolioDetailsInfo {
  title: string;
  mainImage: string;
  description: {
    part1: React.ReactElement;
    part2?: React.ReactElement;
  };
  servicesCovered: string[];
  projectDetails: {
    client: string;
    duration: string;
    squareMeters: string;
    services: string;
  };
  galleryImages: PortfolioDetailsData[];
}

export function getPortfolioDetailsById(
  id: string,
): PortfolioDetailsInfo | undefined {
  const living = {
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
      mainImage: "/images/new-images/past-projects/3k_faynatown/IMG_5523.jpg",
      description: {
        part1: <p>Стильна квартира у витриманих кольорах у ЖК Файна Таун.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Молода пара ІТ-спеціалістів з малюком",
        duration: "6 місяців",
        squareMeters: "72 м2",
        services: "Дизайн-проєкт, ремонт",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5480.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5482.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5487.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5491.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5501.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5502.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5508.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5509.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5517.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5518.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5523.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5525.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5534.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5535.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5537.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5542.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5543.jpg",
        },
        {
          id: "19",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5548.jpg",
        },
        {
          id: "20",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5549.jpg",
        },
        {
          id: "21",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5552.jpg",
        },
        {
          id: "22",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5555.jpg",
        },
        {
          id: "23",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5557.jpg",
        },
        {
          id: "24",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5564.jpg",
        },
        {
          id: "25",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5567.jpg",
        },
        {
          id: "26",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5569.jpg",
        },
        {
          id: "27",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5580.jpg",
        },
        {
          id: "28",
          image: "/images/new-images/past-projects/3k_faynatown/IMG_5619.jpg",
        },
      ],
    },
    "3": {
      title: "Тепла простора квартира у ЖК Галактика",
      mainImage: "/images/new-images/past-projects/3k_galaktika/IMG_4287.jpg",
      description: {
        part1: (
          <>
            <p>
              Простора, тепла та по-справжньому затишна 2-кімнатна квартира
              площею 72 м2 у ЖК Галактика. Ми виконали комплексний ремонт
              повного циклу повністю дистанційно - від демонтажу до меблювання.
              У результаті отримали простір з кухнею-вітальнею, спальнею,
              гостьовою, санвузлом, гардеробною та технічною кімнатою. Ремонт
              віддалено — це цілком реально і зовсім не складно. Ми зробили усе
              для комфортного його перебігу.
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
        "повне перепланування",
        "електромонтажні та сантехнічні роботи",
        "машинна штукатурка",
        "укладання керамограніту та паркетної дошки",
        "монтаж гіпсокартонної стелі",
        "малярні роботи під фарбування стін",
        "установка фурнітури та обладнання",
      ],
      projectDetails: {
        client: "Інвестор у нерухомість для здачі в оренду",
        duration: "6 місяців",
        squareMeters: "72 м2",
        services: "Комплексний ремонт",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4254.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4261.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4274.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4277.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4281.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4283.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4284.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4287.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4289.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4294.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4296.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4300.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4306.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4307.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4310.jpg",
        },
        {
          id: "16",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4327.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4335.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4346.jpg",
        },
        {
          id: "19",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4351.jpg",
        },
        {
          id: "20",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4355.jpg",
        },
        {
          id: "21",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4363.jpg",
        },
        {
          id: "22",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4371.jpg",
        },
        {
          id: "23",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4376.jpg",
        },
        {
          id: "24",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4387.jpg",
        },
        {
          id: "25",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4398.jpg",
        },
        {
          id: "26",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4402.jpg",
        },
        {
          id: "27",
          image: "/images/new-images/past-projects/3k_galaktika/IMG_4404.jpg",
        },
      ],
    },
    // "4": {
    //   title: "3-к квартира, 100 м2 у ЖК Triiinity",
    //   mainImage: "/images/new-images/past-projects/3k_trinity-min.png",
    //   description: {
    //     part1: <p>Опис проєкту додамо пізніше.</p>,
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молода сімейна пара з двома дітьми",
    //     duration: "4 місяці",
    //     squareMeters: "100 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    // "5": {
    //   title: "3-к квартира, 99 м2 у ЖК San Francisco Creative House",
    //   mainImage: "/images/new-images/past-projects/3k_sanfran-min.png",
    //   description: {
    //     part1: <p>Стильна та функціональна квартира у ЖК `San Francisco`.</p>,
    //     part2: (
    //       <p>
    //         Одним із запитів замовників було створити затишок не тільки для них,
    //         але й для їх домашнього улюбленця, тому місце для котика стало
    //         родзинкою цього інтер`єру.
    //       </p>
    //     ),
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молода пара",
    //     duration: "4 місяці",
    //     squareMeters: "99 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    // "6": {
    //   title: "2-к квартира, 59 м2 у ЖК Старт",
    //   mainImage: "/images/new-images/past-projects/2k_start-1-min.png",
    //   description: {
    //     part1: <p>Опис проєкту додамо пізніше.</p>,
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молодий хлопець, ІТ-спеціаліст",
    //     duration: "2,5 місяці",
    //     squareMeters: "59 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    "7": {
      title: "Простора квартира у ЖК Медовий",
      mainImage: "/images/new-images/past-projects/medovyi/IMG_4846.jpg",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "молода сім’я з сином підлітком",
        duration: "4 місяці",
        squareMeters: "82 м2",
        services: "Дизайн-проєкт, реалізація",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-projects/medovyi/IMG_4710.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-projects/medovyi/IMG_4711.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-projects/medovyi/IMG_4739.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-projects/medovyi/IMG_4746.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-projects/medovyi/IMG_4748.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-projects/medovyi/IMG_4756.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-projects/medovyi/IMG_4762.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-projects/medovyi/IMG_4775.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-projects/medovyi/IMG_4786.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-projects/medovyi/IMG_4805.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/past-projects/medovyi/IMG_4825.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-projects/medovyi/IMG_4845.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-projects/medovyi/IMG_4846.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-projects/medovyi/IMG_4891.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-projects/medovyi/IMG_4898.jpg",
        },
        {
          id: "16",
          image: "/images/new-images/past-projects/medovyi/IMG_4904.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/past-projects/medovyi/IMG_4917.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/past-projects/medovyi/IMG_4960.jpg",
        },
      ],
    },
    // "8": {
    //   title: "2-к квартира, 80 м2 у ЖК Старт",
    //   mainImage: "/images/new-images/past-projects/2k_start-3-min.png",
    //   description: {
    //     part1: <p>Опис проєкту додамо пізніше.</p>,
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Сім’я з дорослою донькою",
    //     duration: "3 місяці",
    //     squareMeters: "80 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    // "9": {
    //   title: "2-к квартира, 71 м2 у ЖК Great",
    //   mainImage: "/images/new-images/past-projects/2k_great-min.png",
    //   description: {
    //     part1: (
    //       <p>
    //         ЖК `GREAT` - затишна, стильна та функціональна квартира. Головною
    //         задачею для HUB remontu було зробити приміщення таким, щоб воно
    //         повністю відображало замовників.
    //       </p>
    //     ),
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молода пара, працюють у ресторанній сфері",
    //     duration: "2 місяці",
    //     squareMeters: "71 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    // "10": {
    //   title: "2-к квартира, 72 м2 у ЖК Діброва Парк",
    //   mainImage: "/images/new-images/past-projects/2k_dibrova-min.png",
    //   description: {
    //     part1: <p>Опис проєкту додамо пізніше.</p>,
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молода дівчина, яка працює в сфері маркетингу",
    //     duration: "3 місяці",
    //     squareMeters: "72 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    "11": {
      title: "Сонячна квартира в ЖК Campus",
      mainImage:
        "/images/new-images/past-projects/2k-campus/IMG_20210905_192322_207.jpg",
      description: {
        part1: (
          <p>
            Квартира що надихає, закохує в себе з першого погляду, захоплює
            гармонією, та має неймовірну атмосферу в кожному сантиметрі.
            Виконаний комплексний‌ ремонт повного циклу,повне перепланування.
          </p>
        ),
        part2: (
          <p>
            За бажанням замовника, стіни виконані із ГКЛ в два слої із
            застосуванням надміцної профільної системи Лаконічне та продумане
            планування: простора кухня-вітальня, візуально відокремленне робоча
            зона, зона спальні відокремлена скляною перегородкою, вмістка
            гардеробна кімната, та великий санвузол.
          </p>
        ),
      },
      servicesCovered: [
        "електромонтажні роботи",
        "сантехнічні роботи",
        "штукатурка машинного нанесення",
        "тепла підлога в санвузлі та на стіні в вітальні (це лайф хак, слугує як додаткове опалення)",
        "вкладання плитки",
        "плитка в санвузлі та в спальній на стіні",
        "підлогове покриття - вінілове покриття в санвузлі керамограніт",
        "малярні роботи",
        "двері прихованого монтажу (під стелю), + плінтус прихованого монтажу",
        "оздоблення стін: всі стіни під фарбування, частково фарбований бетон, частково керамограніт на стіні в спальні",
        "стеля - в стилі лофт, пофарбований бетон",
        "комбіноване освітлення; методом відкритої проводки",
        "монтаж всього обладнання",
        "встановлення фурнітури та всіх додаткових предметів в інтер'єрі",
      ],
      projectDetails: {
        client: "Молода пара айтішників",
        duration: "4 місяці",
        squareMeters: "70 м2",
        services: "Комплексний ремонт",
      },
      galleryImages: [
        {
          id: "1",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192312_766.jpg",
        },
        {
          id: "2",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192322_207.jpg",
        },
        {
          id: "3",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192325_458.jpg",
        },
        {
          id: "4",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192328_684.jpg",
        },
        {
          id: "5",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192333_406.jpg",
        },
        {
          id: "6",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192337_600.jpg",
        },
        {
          id: "7",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192347_039.jpg",
        },
        {
          id: "8",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192405_393.jpg",
        },
        {
          id: "9",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192411_375.jpg",
        },
        {
          id: "10",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192414_347.jpg",
        },
        {
          id: "11",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192416_699.jpg",
        },
        {
          id: "12",
          image:
            "/images/new-images/past-projects/2k-campus/IMG_20210905_192420_158.jpg",
        },
      ],
    },
    "12": {
      title: "2-рівнева квартира для великої родини у ЖК Зарічний",
      mainImage: "/images/new-images/past-projects/zarichnyi/9.jpg",
      description: {
        part1: (
          <p>
            Двоповерхова 3к квартира 140кв.м. Три спальні кімнати, велика
            кухня-студіо, 2 санвузли, 2 великих гардероба, кладова, ігрова
            кімната для дітей. Кожний квадратний метр квартири продуманий та
            максимально ергономічний.
          </p>
        ),
        part2: (
          <p>
            Реалізувати дизайн-проєкт цієї квартири було справжнім задоволенням.
          </p>
        ),
      },
      servicesCovered: [
        "2 санвузли",
        "2 великих гардероба",
        "ігрова кімната для дітей",
      ],
      projectDetails: {
        client: "Молода сімейна пара з двома дітьми",
        duration: "6 місяців",
        squareMeters: "140 м2",
        services: "Дизайн-проєкт, ремонт",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-projects/zarichnyi/1.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-projects/zarichnyi/2.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-projects/zarichnyi/3.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-projects/zarichnyi/4.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-projects/zarichnyi/5.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-projects/zarichnyi/6.jpg",
        },

        {
          id: "11",
          image: "/images/new-images/past-projects/zarichnyi/11.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-projects/zarichnyi/12.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-projects/zarichnyi/13.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-projects/zarichnyi/14.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-projects/zarichnyi/15.jpg",
        },
        {
          id: "16",
          image: "/images/new-images/past-projects/zarichnyi/16.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/past-projects/zarichnyi/17.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-projects/zarichnyi/7.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-projects/zarichnyi/8.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-projects/zarichnyi/9.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-projects/zarichnyi/10.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/past-projects/zarichnyi/18.jpg",
        },
        {
          id: "19",
          image: "/images/new-images/past-projects/zarichnyi/19.jpg",
        },
        {
          id: "20",
          image: "/images/new-images/past-projects/zarichnyi/20.jpg",
        },
        {
          id: "21",
          image: "/images/new-images/past-projects/zarichnyi/21.jpg",
        },
        {
          id: "22",
          image: "/images/new-images/past-projects/zarichnyi/22.jpg",
        },
        {
          id: "23",
          image: "/images/new-images/past-projects/zarichnyi/23.jpg",
        },
        {
          id: "24",
          image: "/images/new-images/past-projects/zarichnyi/24.jpg",
        },
        {
          id: "25",
          image: "/images/new-images/past-projects/zarichnyi/25.jpg",
        },
        {
          id: "26",
          image: "/images/new-images/past-projects/zarichnyi/26.jpg",
        },
        {
          id: "27",
          image: "/images/new-images/past-projects/zarichnyi/27.jpg",
        },
      ],
    },
    // "13": {
    //   title: "2-кімнатна квартира, 69 м2 у ЖК Great 232",
    //   mainImage: "/images/new-images/past-projects/2k_zhk-great-232-min.png",
    //   description: {
    //     part1: <p>Стильна та функціональна квартира у ЖК Great.</p>,
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молода сім’я з сином",
    //     duration: "3 місяці",
    //     squareMeters: "69 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    // "14": {
    //   title: "1-кімнатна квартира, 43 м2 у ЖК Кришталеві Джерела",
    //   mainImage: "/images/new-images/past-projects/1k_crystal_dzherela-min.png",
    //   description: {
    //     part1: <p>Опис проєкту додамо пізніше.</p>,
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молода пара лікарів",
    //     duration: "2 місяці",
    //     squareMeters: "43 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    // "15": {
    //   title: "2-кімнатна квартира, 72 м2 у ЖК Great 233",
    //   mainImage: "/images/new-images/past-projects/2k_zhk-great-233-min.png",
    //   description: {
    //     part1: <p>Опис проєкту додамо пізніше.</p>,
    //     part2: <p>Опис проєкту додамо пізніше.</p>,
    //   },
    //   servicesCovered: [],
    //   projectDetails: {
    //     client: "Молода пара з двома синами",
    //     duration: "3 місяці",
    //     squareMeters: "72 м2",
    //     services: "Дизайн-проєкт",
    //   },
    //   galleryImages: [],
    // },
    "16": {
      title: "Світла та затишна квартира в ЖК Central Park",
      mainImage: "/images/new-images/past-projects/central-park/3.jpg",
      description: {
        part1: (
          <p>
            Cтильна, затишна, функціональна квартирка в центрі міста. Цільове
            призначення - здача в оренду.{" "}
          </p>
        ),
      },
      servicesCovered: [],
      projectDetails: {
        client: "інвестори",
        duration: "3 місяці",
        squareMeters: "48 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-projects/central-park/1.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-projects/central-park/2.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-projects/central-park/3.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-projects/central-park/4.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-projects/central-park/5.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-projects/central-park/6.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-projects/central-park/7.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-projects/central-park/8.jpg",
        },
      ],
    },
    "17": {
      title: "Стильна та функціональна у ЖК Галактика",
      mainImage: "/images/new-images/past-projects/2k-galaktika/IMG_5735.jpg",
      description: {
        part1: <p>Опис проєкту додамо пізніше.</p>,
      },
      servicesCovered: [],
      projectDetails: {
        client: "Mолода сімейна пара",
        duration: "3 місяці",
        squareMeters: "72 м2",
        services: "Дизайн-проєкт",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5651.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5643.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5633.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5632.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5753.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5727.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5671.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5654.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5673.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5669.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5665.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5663.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5653.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5652.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5755.jpg",
        },
        {
          id: "16",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5748.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5745.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5739.jpg",
        },
        {
          id: "19",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5735.jpg",
        },
        {
          id: "20",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5730.jpg",
        },
        {
          id: "21",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5725.jpg",
        },
        {
          id: "22",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5700.jpg",
        },
        {
          id: "23",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5777.jpg",
        },
        {
          id: "24",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5770.jpg",
        },
        {
          id: "25",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5768.jpg",
        },
        {
          id: "26",
          image: "/images/new-images/past-projects/2k-galaktika/IMG_5766.jpg",
        },
      ],
    },
  };

  const commercial = {
    "116": {
      title: "Beauty-простір, клініка-косметології 'palamarenko.clinic' ",
      mainImage: "/images/new-images/past-commerce/med-clinic/IMG_3649.jpg",
      description: {
        part1: (
          <p>
            Hеймовірний проект косметологічної клініки - @palamarenko.clinic. І
            неймовірна та смілива власниця Ксенія - @dr.ksenia_palamarenko. Це
            той випадок, коли повна довіра приводить до крутого результату.
          </p>
        ),
        part2: (
          <p>
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
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3534.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3579.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3581.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3591.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3602.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3605.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3607.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3616.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3617.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3620.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3629.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3630.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3636.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3643.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3645.jpg",
        },
        {
          id: "16",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3647.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3649.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3677.jpg",
        },
        {
          id: "19",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3759.jpg",
        },
        {
          id: "20",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3547.jpg",
        },
        {
          id: "21",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3567.jpg",
        },
        {
          id: "22",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3578.jpg",
        },
        {
          id: "23",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3583.jpg",
        },
        {
          id: "24",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3588.jpg",
        },
        {
          id: "25",
          image: "/images/new-images/past-commerce/med-clinic/IMG_3764.jpg",
        },
      ],
    },
    "117": {
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
    "118": {
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
    "119": {
      title: "Офісне приміщення, 700 м2 у ЖК New York Concept House",
      mainImage: "/images/new-images/past-commerce/ny-office/6-min.jpg",
      description: {
        part1: (
          <p>Концептуальне офісне приміщення, створене швидко та якісно.</p>
        ),
      },
      servicesCovered: [],
      projectDetails: {
        client: "Міжнародна компанія",
        duration: "3,5 місяці",
        squareMeters: "700 м2",
        services: "Реалізація проєкту",
      },
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-commerce/ny-office/1-min.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-commerce/ny-office/2-min.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-commerce/ny-office/3-min.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-commerce/ny-office/4-min.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-commerce/ny-office/5-min.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-commerce/ny-office/6-min.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-commerce/ny-office/7-min.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-commerce/ny-office/8-min.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-commerce/ny-office/9-min.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-commerce/ny-office/10-min.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/past-commerce/ny-office/11-min.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-commerce/ny-office/12-min.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-commerce/ny-office/13-min.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-commerce/ny-office/14-min.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-commerce/ny-office/15-min.jpg",
        },
        {
          id: "16",
          image: "/images/new-images/past-commerce/ny-office/16-min.jpg",
        },
        {
          id: "17",
          image: "/images/new-images/past-commerce/ny-office/17-min.jpg",
        },
        {
          id: "18",
          image: "/images/new-images/past-commerce/ny-office/18-min.jpg",
        },
        {
          id: "19",
          image: "/images/new-images/past-commerce/ny-office/19-min.jpg",
        },
      ],
    },
    "120": {
      title: "Кав’ярня, метро Лівобережна",
      mainImage: "/images/new-images/past-commerce/cafe-livoberezhna/5.jpg",
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
        "гіпсокартонні роботи (стеля + ГКЛ конструкція під рекламну вивіску)",
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
      galleryImages: [
        {
          id: "1",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/1.jpg",
        },
        {
          id: "2",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/2.jpg",
        },
        {
          id: "3",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/3.jpg",
        },
        {
          id: "4",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/4.jpg",
        },
        {
          id: "5",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/5.jpg",
        },
        {
          id: "6",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/6.jpg",
        },
        {
          id: "7",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/7.jpg",
        },
        {
          id: "8",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/8.jpg",
        },
        {
          id: "9",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/9.jpg",
        },
        {
          id: "10",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/10.jpg",
        },
        {
          id: "11",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/11.jpg",
        },
        {
          id: "12",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/12.jpg",
        },
        {
          id: "13",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/13.jpg",
        },
        {
          id: "14",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/14.jpg",
        },
        {
          id: "15",
          image: "/images/new-images/past-commerce/cafe-livoberezhna/15.jpg",
        },
      ],
    },
  };

  const portfolioData: { [key: string]: PortfolioDetailsInfo } = {
    ...living,
    ...commercial,
  };

  return portfolioData[id];
}
