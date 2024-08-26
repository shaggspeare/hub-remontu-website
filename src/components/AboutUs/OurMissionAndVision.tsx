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
        preExpanded={["a"]}
        className="our-mission-and-vision-accordion"
      >
        <AccordionItem uuid="a">
          <AccordionItemHeading>
            <AccordionItemButton>Our Mission</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Our organizational sprit believes that where design meets passion
              & love with space, good architecture happens here. We are a
              leading architecture firm dedicated to creating visionary designs.
            </p>
          </AccordionItemPanel>
        </AccordionItem>

        <AccordionItem uuid="b">
          <AccordionItemHeading>
            <AccordionItemButton>Our Vision</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            <p>
              Our organizational sprit believes that where design meets passion
              & love with space, good architecture happens here. We are a
              leading architecture firm dedicated to creating visionary designs.
            </p>
          </AccordionItemPanel>
        </AccordionItem>
      </Accordion>
    </>
  );
};

export default OurMissionAndVision;
