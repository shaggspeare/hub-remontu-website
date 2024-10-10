"use client";

import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const OurMissionAndVision: React.FC = () => {
  return (
    <>
      <Accordion
        preExpanded={["a", "b"]}
        className="our-mission-and-vision-accordion"
      >
        <AccordionItem uuid="a">
          <AccordionItemHeading>
            <AccordionItemButton>Місія</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Чути наших замовників – головне вміння нашої команди. Ми не
              боїмось приймати рішення за Вас, якщо Ви не впевнені в якійсь
              деталі, бо ми несемо повну відповідальність за результат.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem uuid="b">
          <AccordionItemHeading>
            <AccordionItemButton>Бачення</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Дім – це місце «сили», місце затишку та комфорту кожної людини, те
              місце де можна сховатись від турбот, віднайти себе, обійняти
              близьку людину та побути на самоті з собою. Дім – це місце де
              кожен сантиметр рідний та надихає, це не просто стіни, не просто
              приміщення в якому є ліжко та TV. Дім – це повне відображення Вас,
              вашого стилю життя, ваших звичок, ваших вподобань та пристрастей,
              тож завжди пам’ятайте в стін дому - є душа. Важливо, щоб ваша
              домівка створювалась з турботою про кожну деталь.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default OurMissionAndVision;
