"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqsContent: React.FC = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <div className="section-title-wrap">
            <span>FAQ</span>
            <h2 style={{ color: "var(--whiteColor)" }}>FAQ</h2>
          </div>

          <Accordion
            preExpanded={[
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
            ]}
            className="faq-accordion"
            allowMultipleExpanded
          >
            <AccordionItem uuid="a">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Хто робить дизайн-проєкти?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Ми маємо власний відділ проєктування, де працюють архітектори
                  та дизайнери, які мають відповідну освіту та роблять проєкти
                  не тільки красивими, а й функціональними.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="b">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Які дизайн-проєкти Ви пропонуєте?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Ми розробляємо технічну документацію та повний дизайн-проєкт з
                  3D-візуалізаціями. Детальніше про кожен у розділі
                  “Дизайн-проєкти”.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="c">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Як замовити у Вас дизайн-проєкт?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Все просто! Залиште заявку на нашому сайті або зателефонуйте
                  нам за номером{" "}
                  <a
                    style={{
                      textDecoration: "underline",
                      color: "var(--whiteColor)",
                    }}
                    href="tel:380683833838"
                  >
                    +38(068) 383 38 38
                  </a>{" "}
                  і ми обговоримо майбутню співпрацю.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="d">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Скільки часу створюється дизайн-проєкт?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  За середніми показниками: технічна документація ≈ 14 робочих
                  днів, повний дизайн-проєкт з візуалізаціями ≈ 1,5-2 місяці.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="e">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Чи працюєте Ви з вторинним житлом?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Так, звичайно.</p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="f">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Скільки часу триває ремонт?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Терміни ремонту залежать від складності робіт та площі Вашого
                  приміщення. У середньому від 2 до 10 місяців.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="g">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Яка вартість ремонту квадратного метра?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Ціна роботи за метр квадратний формується на основі ваших
                  побажань у оздобленні підлоги, стін та стелі, наявності
                  прихованих елементів, складності та кількості робіт на вашому
                  об’єкті.
                </p>
              </AccordionItemPanel>
            </AccordionItem>

            <AccordionItem uuid="h">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Яку мінімальну площу берете у роботу?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Починаємо роботу з приміщеннями від 35 м2</p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="h">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Чи закупляєте ви матеріали?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  За Вашим бажанням ми комплектуємо Ваш об’єкт від чорнових то
                  чистових матеріалів (від труб та сумішей до міжкімнатних
                  дверей та меблів). З радістю поділимося з Вами нашими
                  партнерськими знижками.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="i">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Чи є у вас регламент робіт?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Ми максимально ефективно плануємо та організовуємо нашу
                  роботу: щотижня ми оновлюємо графік робіт та закупок на усіх
                  об’єктах, а також працюємо за техкартами кожного етапу
                  ремонту.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="j">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Хто та як контролює якість виконання ремонту?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>
                  Ремонт приймає поетапно Ваш персональний керівник проєкту. Він
                  перевіряє дотримання технологій, якість вирівнювання стін,
                  монтаж підлоги, укладання керамограніту, фарбування стін тощо.
                </p>
              </AccordionItemPanel>
            </AccordionItem>
            <AccordionItem uuid="k">
              <AccordionItemHeading>
                <AccordionItemButton>
                  Як відбувається оплата за Ваші послуги?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p>Оплата відбувається за фактом виконаних нами робіт.</p>
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default FaqsContent;
