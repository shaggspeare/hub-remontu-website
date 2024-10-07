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
      "Робили ремонт квартири по готовому дизайн-проекту з нуля, включно з переплануванням. Все зробили якісно та оперативно, по ходу проекту пропонували покращення та нові рішення, які успішно втілили в життя. Первинний розрахунок вартості був максимально близьким до реальних витрат - і роботи, і матеріали (відмінності були в основному по погодженим покращенням). Допомогли зі знижками на чорнові матеріали і оздоблення, завжди на звʼязку по питанням під час ремонту і навіть через довгий час після закінчення ремонту. Дякую за чудову співпрацю і гарний результат!",
    name: "Kami",
  },
  {
    id: "2",
    feedbackText:
      "Висловлюю велику подяку за допомогу на всіх етапах ремонту. Все було зроблено якісно, у встановлений термін. Врахували усі мої вимоги. Залишилася дуже задоволена проведеним ремонтом. Тепер рекомендуватиму Вас усім своїм друзям.",
    name: "Марина Предко",
  },
  {
    id: "3",
    feedbackText:
      "Рекомендую команду майстрів!!! Ціна- якість, турбота про людей,відповідальність",
    name: "Ольга Карельска",
  },
  {
    id: "4",
    feedbackText:
      "Звернулась для прорахунку кошторису майбутнього ремонту. Одна з небагатьох компаній, яка реально подивилась на мій дизайн проект та запропонувала цінову пропозицію відповідно до необхідних робіт. Більшість компаній не хочуть витрачати час та просто дають середню ціну робіт/матеріалів за м2. Сподобалась відношення до потенційного клієнта.",
    name: "Ольга Данилець",
  },
  {
    id: "5",
    feedbackText: "Професійна команда! Дякую за співпрацю!!",
    name: "Влад Половець",
  },
  {
    id: "6",
    feedbackText:
      "Технічне завдання - виконати ремонтні роботи в квартирі за кресленнями та дизайн-проекту (не самої кращої деталізації.\n" +
      "1) роботи виконувались на 100% без мого втручання.\n" +
      "2) з боку хлопців поступали раціональні рішення як можливо зробити краще ( по дві сторони: десь зменшуючи собівартість робіт, десь трохи треба додати щоб було добре)\n" +
      "3) всі проектні зміни були з легкістю погоджені та обговорені.\n" +
      "4) хлопці працюють автономно та в узгоджені строки.\n" +
      "5) окреме дякую за те що після майже закінчення ремонту (меблярів, вони були окремі) хлопці виправили деякі дефекти після монтажу шаф та іншого.\n" +
      "Тож можу рекомендувати що проблем не буде, та ваш ремонт пройде максимально без нервів.",
    name: "Ramil As",
  },
  {
    id: "7",
    feedbackText:
      "Випадок звів нас з професіоналами з HuB ремонту. Дизайн-проєкт був зроблений з врахуванням наявного планування та наших побажань.\n" +
      "Ремонт проведено досить швидко. Всі процеси виконувались своєчасно та не вимагали нашого контролю. Якістю задоволені.\n" +
      "Дякуємо Олені та Євгену за високу професійність.",
    name: "Alex K",
  },
];

const ClientsFeedbackSlider: React.FC = () => {
  return (
    <>
      <div className="client-area ptb-100">
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
                delay: 4000,
                disableOnInteraction: true,
                pauseOnMouseEnter: true,
              }}
              modules={[Autoplay, Pagination]}
              className="client-swiper"
            >
              {clientsFeedbackData &&
                clientsFeedbackData.map((value, i) => (
                  <SwiperSlide key={i}>
                    <div className="client-content">
                      <div className="icon">
                        <Image
                          src={quoteIcon}
                          alt="quote"
                          width={56}
                          height={56}
                        />
                      </div>
                      <p>{value.feedbackText}</p>

                      <div className="client-information">
                        {/*<div className="image">*/}
                        {/*  <Image*/}
                        {/*    src={value.image}*/}
                        {/*    alt="image"*/}
                        {/*    width={70}*/}
                        {/*    height={70}*/}
                        {/*  />*/}
                        {/*</div>*/}
                        <div className="title">
                          <h3>{value.name}</h3>
                          {/*<span>{value.designation}</span>*/}
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
