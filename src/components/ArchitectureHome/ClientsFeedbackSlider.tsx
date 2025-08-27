"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

import quoteIcon from "../../../public/images/client/quote.svg";
import shape1 from "../../../public/images/client/shape1.png";
import shape2 from "../../../public/images/client/shape2.png";

const clientsFeedbackData = [
  {
    id: "1",
    feedbackText:
        "Робили ремонт квартири по готовому дизайн-проєкту з нуля, включно з переплануванням. Все зробили якісно та оперативно, по ходу проєкту пропонували покращення та нові рішення, які успішно втілили в життя. Первинний розрахунок вартості був максимально близьким до реальних витрат - і роботи, і матеріали (відмінності були в основному по погодженим покращенням). Допомогли зі знижками на чорнові матеріали і оздоблення, завжди на звʼязку по питанням під час ремонту і навіть через довгий час після закінчення ремонту. Дякую за чудову співпрацю і гарний результат!",
    name: "Kami",
  },
  {
    id: "2",
    feedbackText:
        "Висловлюю велику подяку за допомогу на всіх етапах ремонту. Все було зроблено якісно, у встановлений термін. Врахували усі мої вимоги. Залишилася дуже задоволена проведеним ремонтом. Тепер рекомендуватиму Вас усім своїм друзям. Рекомендую команду майстрів!!! Ціна- якість, турбота про людей,відповідальність. Професійна команда!",
    name: "Марина Предко",
  },
  {
    id: "3",
    feedbackText:
        "Звернулась для прорахунку кошторису майбутнього ремонту. Одна з небагатьох компаній, яка реально подивилась на мій дизайн проєкт та запропонувала цінову пропозицію відповідно до необхідних робіт. Більшість компаній не хочуть витрачати час та просто дають середню ціну робіт/матеріалів за м2. Сподобалась відношення до потенційного клієнта.",
    name: "Ольга Данилець",
  },
  {
    id: "4",
    feedbackText:
        "Технічне завдання - виконати ремонтні роботи в квартирі за кресленнями та дизайн-проєкту (не самої кращої деталізації.\n1) роботи виконувались на 100% без мого втручання.\n2) з боку хлопців поступали раціональні рішення як можливо зробити краще\n3) всі проєктні зміни були з легкістю погоджені та обговорені.\n4) хлопці працюють автономно та в узгоджені строки.\n5) окреме дякую за те що після майже закінчення ремонту хлопці виправили деякі дефекти після монтажу шаф тощо.\nТож можу рекомендувати що проблем не буде, та ваш ремонт пройде максимально без нервів.",
    name: "Ramil As",
  },
  {
    id: "5",
    feedbackText:
        "Випадок звів нас з професіоналами з HuB ремонту. Дизайн-проєкт був зроблений з врахуванням наявного планування та наших побажань.\nРемонт проведено досить швидко. Всі процеси виконувались своєчасно та не вимагали нашого контролю. Якістю задоволені.\nДякуємо Олені та Євгену за високу професійність.",
    name: "Alex K",
  },
];

const ClientsFeedbackSlider: React.FC = () => {
  return (
      <>
        <div className="client-area client-area-redesigned">
          <div className="container">
            <div className="section-title d-flex justify-content-center">
              <h2>
                Наші відгуки <span> говорять за нас</span>
              </h2>
            </div>

            {clientsFeedbackData && (
                <Swiper
                    pagination={{
                      dynamicBullets: true,
                      clickable: true,
                    }}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: true,
                      pauseOnMouseEnter: true,
                    }}
                    spaceBetween={20}
                    modules={[Autoplay, Pagination]}
                    className="client-swiper client-swiper-redesigned"
                >
                  {clientsFeedbackData &&
                      clientsFeedbackData.map((value, i) => (
                          <SwiperSlide key={i}>
                            <div className="client-content client-content-redesigned">
                              <div className="client-card">
                                <div className="icon">
                                  <Image
                                      src={quoteIcon}
                                      alt="quote"
                                      width={56}
                                      height={56}
                                  />
                                </div>
                                <div className="feedback-text">
                                  {value.feedbackText.split('\n').map((paragraph, index) => (
                                      <p key={index}>{paragraph}</p>
                                  ))}
                                </div>
                                <div className="client-information">
                                  <div className="title">
                                    <h3>{value.name}</h3>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                      ))}
                </Swiper>
            )}
          </div>

          {/* Shape Images */}
          <div className="client-shape1">
            <Image src={shape1} alt="shape" width={88} height={125} />
          </div>
          <div className="client-shape2">
            <Image src={shape2} alt="shape" width={116} height={82} />
          </div>
        </div>
      </>
  );
};

export default ClientsFeedbackSlider;