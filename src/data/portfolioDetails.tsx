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
        "/images/projects-details/projects-details1.jpg",
        "/images/projects-details/projects-details1.jpg",
      ],
    },
  };

  return portfolioData[id];
}
