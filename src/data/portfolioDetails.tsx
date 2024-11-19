import { PortfolioDetailsInfo } from "@/components/PortfolioDetails/PortfolioDetailsContent";

export function getPortfolioDetailsById(
  id: string
): PortfolioDetailsInfo | undefined {
  const portfolioData: { [key: string]: PortfolioDetailsInfo } = {
    "1": {
      title: "Сонячна квартира у стилі мінімалізм у ЖК Сирецькі Сади",
      mainImage: "/images/new-images/sample-project/10.jpg",
      description: {
        part1: (
          <>
            <p>
              Квартирка, у якій ідеально поєднались локанічність та комфорт, яка
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
        client: "Молода пара з хлопчиками-близнятами",
        duration: "7 місяців з меблюванням",
        squareMeters: "2-кімнатна квартира, 62 м2",
        services: "Дизайн-проект, ремонт",
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
      ]
    },
  };

  return portfolioData[id];
}
