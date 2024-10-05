"use client";

import React from "react";
import Image from "next/image";

// Знайомство
// Зв'яжіться з нами будь-яким зручним для Вас способом: за телефоном, залишивши заявку вище або завітайте до нашої студії у ЖК Great (можна зробити клікабельно і перенести на гугл карту). Ми з радістю обговоримо деталі та побажання щодо Вашого ремонту.
//
// Виїзд спеціаліста
// Наш спеціаліст оперативно приїде до Вас на об'єкт, щоб оцінити поточний стан, скласти план та узгодити план майбутніх робіт.
//
// Дизайн-проєкт та кошторис
// Після замірів складаємо детальний кошторис, а за потреби наші дизайнери зроблять для Вас дизайн-проєкт. Далі підписуємо договір та приступаємо до реалізації, згідно графіку робіт.
//
//   Початок робіт
// Закуповуємо необхідні чорнові та оздоблювальні матеріали. Завозимо інструменти та обладнання на об'єкт. Наші майстри приїжджають на Ваш об’єкт та приступають до ремонтно-оздоблювальних робіт.

const processData = [
  {
    id: "1",
    number: "1",
    image: "/images/process/process1.jpg",
    title: "Знайомство",
    text:
      "Зв'яжіться з нами будь-яким зручним для Вас способом: за телефоном, залишивши заявку вище або завітайте до нашої студії у ЖК Great",
    aosDelay: "100",
  },
  {
    id: "2",
    number: "2",
    image: "/images/process/process2.jpg",
    title: "Виїзд спеціаліста",
    text: "Наш спеціаліст оперативно приїде до Вас на об'єкт, щоб оцінити поточний стан, скласти план та узгодити план майбутніх робіт.",
    aosDelay: "200",
  },
  {
    id: "3",
    number: "3",
    image: "/images/process/process3.jpg",
    title: "Дизайн-проєкт та кошторис",
    text: "Після замірів складаємо детальний кошторис, а за потреби наші дизайнери зроблять для Вас дизайн-проєкт. " +
      "Далі підписуємо договір та приступаємо до реалізації, згідно графіку робіт.",
    aosDelay: "300",
  },
  {
    id: "4",
    number: "4",
    image: "/images/process/process4.jpg",
    title: "Початок робіт",
    text: "Закуповуємо необхідні чорнові та оздоблювальні матеріали. Завозимо інструменти та обладнання на об'єкт. " +
      "Наші майстри приїжджають на Ваш об’єкт та приступають до ремонтно-оздоблювальних робіт.",
    aosDelay: "400",
  },
];

const Process: React.FC = () => {
  return (
    <>
      <div className="process-area pt-100 pb-75">
        <div className="container">
          <div
            className="section-title d-flex justify-content-center"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="600"
            data-aos-once="true"
          >
            <h2>
              <span>Принцип</span> роботи
            </h2>
          </div>

          {processData && (
            <div className="row justify-content-center">
              {processData &&
                processData.map((value, i) => (
                  <div
                    className="col-xl-3 col-sm-6"
                    data-aos="fade-up"
                    data-aos-delay={value.aosDelay}
                    data-aos-duration="600"
                    data-aos-once="true"
                    key={i}
                  >
                    <div className="process-card">
                      <div className="process-image">
                        <Image
                          src={value.image}
                          alt="image"
                          width={540}
                          height={310}
                        />
                        <span>{value.number}</span>
                      </div>
                      <div className="process-content">
                        <h3>{value.title}</h3>
                        <p>{value.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Process;
