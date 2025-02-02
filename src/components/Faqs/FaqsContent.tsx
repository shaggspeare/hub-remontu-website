"use client";

import React, { useState } from "react";
import Link from "next/link";

const FaqsContent: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>(["a"]);

  const toggleAccordion = (uuid: string) => {
    setOpenItems(
      (prev) =>
        prev.includes(uuid)
          ? prev.filter((item) => item !== uuid) // Close if already open
          : [...prev, uuid], // Open if closed
    );
  };

  const accordionData = [
    {
      uuid: "a",
      question: "Хто робить дизайн-проєкти?",
      answer:
        "Ми маємо власний відділ проєктування, де працюють архітектори та дизайнери, які мають відповідну освіту та роблять проєкти не тільки красивими, а й функціональними.",
    },
    {
      uuid: "b",
      question: "Які дизайн-проєкти Ви пропонуєте?",
      answer:
        "Ми розробляємо технічну документацію та повний дизайн-проєкт з 3D-візуалізаціями. Детальніше про кожен у розділі “Дизайн-проєкти”.",
    },
    {
      uuid: "c",
      question: "Як замовити у Вас дизайн-проєкт?",
      answer: (
        <>
          Все просто! Залиште заявку на нашому сайті або зателефонуйте нам за
          номером{" "}
          <Link
            style={{ textDecoration: "underline", color: "var(--whiteColor)" }}
            href="tel:380683833838"
          >
            +38(068) 383 38 38
          </Link>{" "}
          і ми обговоримо майбутню співпрацю.
        </>
      ),
    },
    {
      uuid: "d",
      question: "Скільки часу створюється дизайн-проєкт?",
      answer:
        "За середніми показниками: технічна документація ≈ 14 робочих днів, повний дизайн-проєкт з візуалізаціями ≈ 1,5-2 місяці.",
    },
    {
      uuid: "e",
      question: "Чи працюєте Ви з вторинним житлом?",
      answer: "Так, звичайно.",
    },
    {
      uuid: "f",
      question: "Скільки часу триває ремонт?",
      answer:
        "Терміни ремонту залежать від складності робіт та площі Вашого приміщення. У середньому від 2 до 10 місяців.",
    },
    {
      uuid: "g",
      question: "Яка вартість ремонту квадратного метра?",
      answer:
        "Ціна роботи за метр квадратний формується на основі ваших побажань у оздобленні підлоги, стін та стелі, наявності прихованих елементів, складності та кількості робіт на вашому об’єкті.",
    },
    {
      uuid: "h",
      question: "Яку мінімальну площу берете у роботу?",
      answer: "Починаємо роботу з приміщеннями від 35 м2.",
    },
    {
      uuid: "i",
      question: "Чи закупляєте ви матеріали?",
      answer:
        "За Вашим бажанням ми комплектуємо Ваш об’єкт від чорнових то чистових матеріалів (від труб та сумішей до міжкімнатних дверей та меблів). З радістю поділимося з Вами нашими партнерськими знижками.",
    },
    {
      uuid: "j",
      question: "Чи є у вас регламент робіт?",
      answer:
        "Ми максимально ефективно плануємо та організовуємо нашу роботу: щотижня ми оновлюємо графік робіт та закупок на усіх об’єктах, а також працюємо за техкартами кожного етапу ремонту.",
    },
    {
      uuid: "k",
      question: "Хто та як контролює якість виконання ремонту?",
      answer:
        "Ремонт приймає поетапно Ваш персональний керівник проєкту. Він перевіряє дотримання технологій, якість вирівнювання стін, монтаж підлоги, укладання керамограніту, фарбування стін тощо.",
    },
    {
      uuid: "l",
      question: "Як відбувається оплата за Ваші послуги?",
      answer: "Оплата відбувається за фактом виконаних нами робіт.",
    },
  ];

  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title-wrap">
            <span>FAQ</span>
            <h1 style={{ color: "var(--whiteColor)" }}>FAQ</h1>
          </div>

          <div style={{ margin: "0 auto" }}>
            {accordionData.map(({ uuid, question, answer }) => (
              <div
                key={uuid}
                style={{
                  borderBottom: "1px solid #ccc",
                  marginBottom: "10px",
                  paddingBottom: "10px",
                }}
              >
                <button
                  onClick={() => toggleAccordion(uuid)}
                  style={{
                    width: "100%",
                    textAlign: "left",
                    background: "var(--whiteColor)",
                    border: "none",
                    fontSize: "18px",
                    cursor: "pointer",
                    padding: "20px ",
                  }}
                >
                  {question}
                </button>
                {openItems.includes(uuid) && (
                  <div
                    style={{
                      padding: "10px 0",
                      color: "var(--whiteColor)",
                      fontSize: "16px",
                    }}
                  >
                    {answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqsContent;
