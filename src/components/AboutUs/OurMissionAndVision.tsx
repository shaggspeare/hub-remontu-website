"use client";

import React, { useState } from "react";

const OurMissionAndVision: React.FC = () => {
  const [activePanel, setActivePanel] = useState<string[]>([
    "mission",
    "vision",
  ]);

  const togglePanel = (panel: string) => {
    setActivePanel((prev) =>
      prev.includes(panel)
        ? prev.filter((item) => item !== panel)
        : [...prev, panel],
    );
  };

  const panelStyles = {
    container: {
      marginBottom: "10px",
      padding: "20px",
    },
    heading: {
      padding: "20px",
      color: "black",
      backgroundColor: "#fff",
      fontWeight: "bold",
      marginBottom: "10px",
      cursor: "pointer",
    },
    content: {
      display: "block",
      color: "#ccc",
      lineHeight: "1.6",
    },
    hidden: {
      display: "none",
    },
  };

  return (
    <div>
      {/* Mission Section */}
      <div style={panelStyles.container}>
        <div style={panelStyles.heading} onClick={() => togglePanel("mission")}>
          Місія
        </div>
        <div
          style={
            activePanel.includes("mission")
              ? panelStyles.content
              : panelStyles.hidden
          }
        >
          <p>
            Наші напрацьовані контакти, крута команда спеціалістів та
            вузькопрофільних майстрів, які завжди орієнтуються на якість,
            оперативність та командна робота, надихнули нас створити HUB. Ми
            вирішили стати студією, яка диктує тренди, дбає про потреби
            замовника як про власні, слухає та працює на результат. Це і є нашою
            місією - зробити так, щоб максимально забрати у Вас усі турботи про
            Ваш ремонт.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div style={panelStyles.container}>
        <div style={panelStyles.heading} onClick={() => togglePanel("vision")}>
          Бачення
        </div>
        <div
          style={
            activePanel.includes("vision")
              ? panelStyles.content
              : panelStyles.hidden
          }
        >
          <p>
            Дім – це місце «сили», місце затишку та комфорту кожної людини, те
            місце де можна сховатись від турбот, віднайти себе, обійняти близьку
            людину та побути на самоті з собою. Дім – це місце де кожен
            сантиметр рідний та надихає, це не просто стіни, не просто
            приміщення в якому є ліжко та TV. Дім – це повне відображення Вас,
            вашого стилю життя, ваших звичок, ваших вподобань та пристрастей,
            тож завжди пам’ятайте в стін дому - є душа. Важливо, щоб ваша
            домівка створювалась з турботою про кожну деталь.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurMissionAndVision;
