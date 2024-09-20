"use client";

import React, { useState } from "react";

type FormValues = {
  "your-name": string;
  building_type: string;
  design: string;
  design_detail: string[];
  age: string;
  planning: string;
  constructions: string;
  bedroom: string;
  style: string[];
  floor: string[];
  "floor-other": string;
  wall: string[];
  "wall-other": string;
  roof: string[];
  bathroom: string;
  bathroommat: string;
  door: string;
  main: string[];
  "main-other": string;
  lighting: string;
  phone: string;
  time: string;
};

const MultiPartForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    "your-name": "",
    building_type: "Квартира",
    design: "Так, маю",
    design_detail: [],
    age: "Новобудова",
    planning: "Часткове",
    constructions:
      "Повна заміна/монтаж з нуля електропроводки та сантехнічних труб",
    bedroom: "Одна",
    style: [],
    floor: [],
    "floor-other": "",
    wall: [],
    "wall-other": "",
    roof: [],
    bathroom: "Один",
    bathroommat: "Широкоформатна плитка",
    door: "Звичайні",
    main: [],
    "main-other": "",
    lighting: "Верхнє світло (люстри, світильники, трекові системи)",
    phone: "",
    time: "",
  });

  const arrayFields: (keyof FormValues)[] = [
    "design_detail",
    "style",
    "floor",
    "wall",
    "roof",
    "main",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;
    const fieldName = name as keyof FormValues;

    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      if (arrayFields.includes(fieldName)) {
        setFormValues((prevState) => {
          const prevArray = prevState[fieldName] as string[];
          if (checked) {
            return {
              ...prevState,
              [fieldName]: [...prevArray, value],
            };
          } else {
            return {
              ...prevState,
              [fieldName]: prevArray.filter((item) => item !== value),
            };
          }
        });
      } else {
        // Handle error or ignore if fieldName is not expected to be an array
      }
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formValues);
  };

  // Common style for labels and headings to make text white
  const textWhiteStyle = { color: "#FFFFFF" };

  return (
    <form onSubmit={handleSubmit} className="wpcf7-form">
      {/* Ваше імʼя */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Ваше імʼя:
        </h3>
        <p>
          <input
            style={{
              width: "100%",
              border: "1px solid #D1D5DB",
              borderRadius: "4px",
              padding: "8px",
            }}
            required
            placeholder="Введіть відповідь"
            value={formValues["your-name"]}
            type="text"
            name="your-name"
            onChange={handleChange}
          />
        </p>
      </div>

      {/* Тип нерухомості */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Тип нерухомості:
        </h3>
        <p>
          {["Квартира", "Будинок", "Комерційне приміщення"].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="building_type"
                value={option}
                checked={formValues.building_type === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Чи маєте дизайн-проєкт? */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Чи маєте дизайн-проєкт?
        </h3>
        <p>
          {["Так, маю", "Ні, але планую", "Ні, не планую"].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="design"
                value={option}
                checked={formValues.design === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Design Details */}
      {formValues.design === "Ні, але планую" && (
        <div
          className="form_step"
          style={{
            backgroundColor: "#F9FAFB",
            padding: "16px",
            borderRadius: "4px",
            marginBottom: "32px",
          }}
        >
          <p style={{ marginBottom: "16px" }}>
            {["Технічний", "Повний"].map((option) => (
              <label
                key={option}
                style={{ display: "block", ...textWhiteStyle }}
              >
                <input
                  type="checkbox"
                  name="design_detail"
                  value={option}
                  checked={formValues.design_detail.includes(option)}
                  onChange={handleChange}
                  style={{ marginRight: "8px" }}
                />
                <span>{option}</span>
              </label>
            ))}
          </p>
          <div
            className="design_detail_box"
            style={{
              backgroundColor: "#FFFFFF",
              padding: "16px",
              borderRadius: "4px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
            }}
          >
            <p
              style={{
                fontWeight: "bold",
                marginBottom: "8px",
                color: "#000000",
              }}
            >
              Чим вони відрізняються?
            </p>
            <div className="box_show">
              <p style={{ marginTop: "8px", color: "#000000" }}>
                <strong>Технічний дизайн-проєкт включає:</strong> усі креслення
                та планування — все що потрібно для виконання ремонту бригадою.
              </p>
              <p style={{ marginTop: "8px", color: "#000000" }}>
                <strong>Повний дизайн-проєкт включає:</strong> технічний
                дизайн-проєкт + розгортки по стінам, специфікація по
                оздоблювальним матеріалам, розкладки по підлозі, підбір кольорів
                та чистових матеріалів + 3D-візуалізації.
              </p>
              <p style={{ marginTop: "8px", color: "#000000" }}>
                Пройдіть цю анкету до кінця та дізнайтеся вартість не тільки
                дизайн-проєкту за вашими запитами, а й вашого ремонту!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Скільки років будинку */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Скільки років будинку, де знаходиться приміщення?
        </h3>
        <p>
          {[
            "Новобудова",
            "1-10 років",
            "11-30 років",
            "від 30 років і більше",
            "Пам'ятка архітектури",
          ].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                marginTop: "8px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="age"
                value={option}
                checked={formValues.age === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Перепланування */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Перепланування:
        </h3>
        <p>
          {["Часткове", "Повне", "Без перепланування"].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="planning"
                value={option}
                checked={formValues.planning === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Заміна існуючих комунікацій */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Заміна існуючих комунікацій:
        </h3>
        <p>
          {[
            "Повна заміна/монтаж з нуля електропроводки та сантехнічних труб",
            "Часткова заміна електропроводки та сантехнічних труб",
            "Все залишаємо як є",
            "Потрібна консультація",
          ].map((option) => (
            <label
              key={option}
              style={{
                display: "block",
                marginBottom: "8px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="constructions"
                value={option}
                checked={formValues.constructions === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Кількість спалень */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Кількість спалень:
        </h3>
        <p>
          {["Одна", "Дві", "Три та більше"].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="bedroom"
                value={option}
                checked={formValues.bedroom === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Уподобання у стилістиці інтер'єру */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Уподобання у стилістиці інтер`єру:
        </h3>
        <p>
          {[
            "Класика",
            "Модерн",
            "Арт Деко",
            "Хай-Тек",
            "Лофт",
            "Мінімалізм",
            "Скандинавський",
            "Бохо",
            "Джапанді",
            "Вабі-сабі",
          ].map((style) => (
            <label
              key={style}
              style={{
                display: "block",
                marginBottom: "8px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="checkbox"
                name="style"
                value={style}
                checked={formValues.style.includes(style)}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{style}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Уподобання по підлозі */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Уподобання по підлозі:
        </h3>
        <p>
          {["Паркет", "Ламінат", "Плитка", "Вініл"].map((floorType) => (
            <label
              key={floorType}
              style={{
                display: "block",
                marginBottom: "8px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="checkbox"
                name="floor"
                value={floorType}
                checked={formValues.floor.includes(floorType)}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{floorType}</span>
            </label>
          ))}
          <label
            style={{ display: "block", marginTop: "8px", ...textWhiteStyle }}
          >
            <span style={{ fontWeight: 500 }}>Інше:</span>
            <input
              style={{
                width: "100%",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "4px",
              }}
              placeholder="Введіть відповідь"
              value={formValues["floor-other"]}
              type="text"
              name="floor-other"
              onChange={handleChange}
            />
          </label>
        </p>
      </div>

      {/* Уподобання по стінах */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Уподобання по стінах:
        </h3>
        <p>
          {[
            "Фарбування",
            "Шпалери",
            "Декоративна штукатурка",
            "Художнє оформлення",
            "Гіпсові панелі",
            "Панелі МДФ",
            "Молдинги",
            "Комбінований варіант",
          ].map((wallType) => (
            <label
              key={wallType}
              style={{
                display: "block",
                marginBottom: "8px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="checkbox"
                name="wall"
                value={wallType}
                checked={formValues.wall.includes(wallType)}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{wallType}</span>
            </label>
          ))}
          <label
            style={{ display: "block", marginTop: "8px", ...textWhiteStyle }}
          >
            <span style={{ fontWeight: 500 }}>Інше:</span>
            <input
              style={{
                width: "100%",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "4px",
              }}
              placeholder="Введіть відповідь"
              value={formValues["wall-other"]}
              type="text"
              name="wall-other"
              onChange={handleChange}
            />
          </label>
        </p>
      </div>

      {/* Уподобання по стелі */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Уподобання по стелі:
        </h3>
        <p>
          {["Гіпсокартонна", "Натяжна"].map((roofType) => (
            <label
              key={roofType}
              style={{
                display: "block",
                marginBottom: "8px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="checkbox"
                name="roof"
                value={roofType}
                checked={formValues.roof.includes(roofType)}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{roofType}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Кількість санвузлів */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Кількість санвузлів:
        </h3>
        <p>
          {["Один", "Два", "Три і більше"].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="bathroom"
                value={option}
                checked={formValues.bathroom === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Оздоблення санвузла */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Оздоблення санвузла:
        </h3>
        <p>
          {["Широкоформатна плитка", "Мілкоформатна плитка"].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="bathroommat"
                value={option}
                checked={formValues.bathroommat === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Тип дверей */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Тип дверей:
        </h3>
        <p>
          {["Звичайні", "Прихованого монтажу"].map((option) => (
            <label
              key={option}
              style={{
                display: "inline-flex",
                alignItems: "center",
                marginRight: "16px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="door"
                value={option}
                checked={formValues.door === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Що для Вас найважливіше в інтер'єрі? */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Що для Вас найважливіше в інтер`єрі?
        </h3>
        <p>
          {["Простір", "Місткість", "Функціональність", "Дизайн"].map(
            (mainOption) => (
              <label
                key={mainOption}
                style={{
                  display: "block",
                  marginBottom: "8px",
                  ...textWhiteStyle,
                }}
              >
                <input
                  type="checkbox"
                  name="main"
                  value={mainOption}
                  checked={formValues.main.includes(mainOption)}
                  onChange={handleChange}
                  style={{ marginRight: "8px" }}
                />
                <span>{mainOption}</span>
              </label>
            )
          )}
          <label
            style={{ display: "block", marginTop: "8px", ...textWhiteStyle }}
          >
            <span style={{ fontWeight: 500 }}>Інше:</span>
            <input
              style={{
                width: "100%",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "4px",
              }}
              placeholder="Введіть відповідь"
              value={formValues["main-other"]}
              type="text"
              name="main-other"
              onChange={handleChange}
            />
          </label>
        </p>
      </div>

      {/* Освітлення */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Освітлення:
        </h3>
        <p>
          {[
            "Верхнє світло (люстри, світильники, трекові системи)",
            "Настінне/декоративне (підсвітки, бра, торшери)",
            "І те, і інше",
          ].map((option) => (
            <label
              key={option}
              style={{
                display: "block",
                marginBottom: "8px",
                ...textWhiteStyle,
              }}
            >
              <input
                type="radio"
                name="lighting"
                value={option}
                checked={formValues.lighting === option}
                onChange={handleChange}
                style={{ marginRight: "8px" }}
              />
              <span>{option}</span>
            </label>
          ))}
        </p>
      </div>

      {/* Ваш номер телефону для зв'язку */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Ваш номер телефону для зв`язку:
        </h3>
        <p>
          <label style={textWhiteStyle}>
            <span style={{ fontWeight: 500 }}>Телефон</span>
            <input
              style={{
                width: "100%",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "4px",
              }}
              required
              placeholder="+ 380 __ ___ __ __"
              value={formValues.phone}
              type="tel"
              name="phone"
              onChange={handleChange}
            />
          </label>
        </p>
      </div>

      {/* Зручний час для звʼязку */}
      <div className="form_step" style={{ marginBottom: "32px" }}>
        <h3
          style={{
            fontSize: "1.25rem",
            fontWeight: 600,
            marginBottom: "8px",
            ...textWhiteStyle,
          }}
        >
          Зручний час для звʼязку:
        </h3>
        <p>
          <label style={textWhiteStyle}>
            <span style={{ fontWeight: 500 }}>Введіть час</span>
            <input
              style={{
                width: "100%",
                border: "1px solid #D1D5DB",
                borderRadius: "4px",
                padding: "8px",
                marginTop: "4px",
              }}
              placeholder="10:00"
              value={formValues.time}
              type="text"
              name="time"
              onChange={handleChange}
            />
          </label>
        </p>
      </div>

      {/* Submit button */}
      <div className="form_step">
        <p>
          <button
            type="submit"
            style={{
              backgroundColor: "#3B82F6",
              color: "#FFFFFF",
              padding: "8px 24px",
              borderRadius: "4px",
              border: "none",
              cursor: "pointer",
            }}
            onMouseOver={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#2563EB";
            }}
            onMouseOut={(e) => {
              (e.target as HTMLButtonElement).style.backgroundColor = "#3B82F6";
            }}
          >
            Відправити форму
          </button>
        </p>
      </div>
    </form>
  );
};

export default MultiPartForm;
