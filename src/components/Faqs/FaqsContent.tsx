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
      question: "Хто розробляє дизайн-проєкт квартири?",
      answer:
        "У Hub Remontu працює власний відділ проєктування — архітектори та дизайнери з профільною освітою, які створюють дизайн-проєкти не лише естетичними, а й функціональними.",
    },
    {
      uuid: "b",
      question: "Які види дизайн-проєктів ви розробляєте?",
      answer:
        "Ми розробляємо технічну документацію та повний дизайн-проєкт із 3D-візуалізацією інтер’єру. Детальніше про кожен варіант — у розділі “Дизайн-проєкти”.",
    },
    {
      uuid: "c",
      question: "Як замовити дизайн-проєкт квартири в Hub Remontu?",
      answer: (
        <>
          Дуже просто: залиште заявку на сайті або зателефонуйте нам за
          номером{" "}
          <Link
            style={{ textDecoration: "underline", color: "var(--whiteColor)" }}
            href="tel:380683833888"
          >
            +38(068) 383 38 88
          </Link>{" "}
          — і ми обговоримо деталі майбутньої співпраці.
        </>
      ),
    },
    {
      uuid: "d",
      question: "Скільки часу займає розробка дизайн-проєкту?",
      answer:
        "У середньому технічна документація готується ≈ 14 робочих днів, а повний дизайн-проєкт із візуалізаціями — 1,5-2 місяці.",
    },
    {
      uuid: "e",
      question: "Чи виконуєте ви ремонт у вторинному житлі?",
      answer: "Так, звичайно.",
    },
    {
      uuid: "f",
      question: "Скільки часу триває ремонт квартири під ключ?",
      answer:
        "Термін ремонту залежить від площі приміщення та складності робіт. У середньому ремонт триває від 2 до 10 місяців.",
    },
    {
      uuid: "g",
      question: "Яка вартість ремонту квадратного метра квартири?",
      answer:
        "Вартість ремонту за квадратний метр формується індивідуально — залежно від ваших побажань щодо оздоблення підлоги, стін та стелі, наявності прихованих елементів, а також складності й кількості робіт на об’єкті.",
    },
    {
      uuid: "h",
      question: "Яка мінімальна площа приміщення для ремонту?",
      answer: "Ми беремо в роботу приміщення площею від 35 м2.",
    },
    {
      uuid: "i",
      question: "Чи закуповуєте ви будівельні та оздоблювальні матеріали?",
      answer:
        "За Вашим бажанням ми комплектуємо Ваш об’єкт матеріалами — від чорнових до чистових (від труб та сумішей до міжкімнатних дверей та меблів). З радістю поділимося з Вами нашими партнерськими знижками.",
    },
    {
      uuid: "j",
      question: "Чи дотримуєтесь ви регламенту виконання робіт?",
      answer:
        "Так, ми максимально ефективно плануємо та організовуємо нашу роботу: щотижня оновлюємо графік робіт і закупівель на усіх об’єктах, а також працюємо за техкартами кожного етапу ремонту.",
    },
    {
      uuid: "k",
      question: "Хто контролює якість виконання ремонту?",
      answer:
        "Кожен етап ремонту приймає Ваш персональний керівник проєкту. Він перевіряє дотримання технологій, якість вирівнювання стін, монтаж підлоги, укладання керамограніту, фарбування стін тощо.",
    },
    {
      uuid: "l",
      question: "Як відбувається оплата за послуги ремонту?",
      answer: "Оплата відбувається поетапно, за фактом виконаних нами робіт.",
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
