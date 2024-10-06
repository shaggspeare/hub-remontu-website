"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import styles from "./Anketa.module.scss";

interface FormValues {
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
}

type Option = {
  label: string;
  imgSrc?: string;
};

type OptionCardProps = {
  options: (Option | string)[];
  name: keyof FormValues;
  value: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  multiSelect?: boolean;
};

type TextInputProps = {
  label: string;
  placeholder: string;
  name: keyof FormValues;
  value: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const OptionCard: React.FC<OptionCardProps> = ({
  options,
  name,
  value,
  handleChange,
  multiSelect = false,
}) => (
  <div className="row">
    {options.map((option) => (
      <div
        key={typeof option === "string" ? option : option.label}
        className={`col-md-4 mb-3`}
      >
        <label
          className={`card h-100 ${
            value.includes(typeof option === "string" ? option : option.label)
              ? styles.optionSelected
              : ""
          }`}
          style={{
            cursor: "pointer",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <input
            type={multiSelect ? "checkbox" : "radio"}
            className="form-check-input"
            name={name}
            value={typeof option === "string" ? option : option.label}
            checked={value.includes(
              typeof option === "string" ? option : option.label
            )}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          {typeof option !== "string" && option.imgSrc && (
            <img
              src={option.imgSrc}
              className="card-img-top"
              alt={option.label}
            />
          )}
          <div className="card-body text-center flex-grow-1 d-flex align-items-center justify-content-center">
            <h5 className="card-title">
              {typeof option === "string" ? option : option.label}
            </h5>
          </div>
        </label>
      </div>
    ))}
  </div>
);

const TextInput: React.FC<TextInputProps> = ({
  label,
  placeholder,
  name,
  value,
  handleChange,
}) => (
  <label className={styles.inputOtherField}>
    <span>{label}</span>
    <input
      className={styles.inputField}
      placeholder={placeholder}
      value={value}
      type="text"
      name={name}
      onChange={handleChange}
    />
  </label>
);

const MultiPartForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    "your-name": "",
    building_type: "Квартира",
    design: "Так, маю",
    design_detail: ["Технічний"],
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

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    const fieldName = name as keyof FormValues;

    if (type === "checkbox") {
      const checked = e.target.checked;
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
      }
    } else {
      setFormValues((prevState) => ({
        ...prevState,
        [fieldName]: value,
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formValues);
  };

  return (
    <form onSubmit={handleSubmit} className="wpcf7-form">
      {/* Ваше імʼя */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Ваше імʼя:</h3>
        <p>
          <input
            className={styles.inputField}
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
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Тип нерухомості:</h3>
        <OptionCard
          options={["Квартира", "Будинок", "Комерційне приміщення"]}
          name="building_type"
          value={[formValues.building_type]}
          handleChange={handleChange}
        />
      </div>

      {/* Чи маєте дизайн-проєкт? */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Чи маєте дизайн-проєкт?</h3>
        <OptionCard
          options={["Так, маю", "Ні, але планую", "Ні, не планую"]}
          name="design"
          value={[formValues.design]}
          handleChange={handleChange}
        />
      </div>

      {formValues.design === "Ні, але планую" && (
        <div className={`${styles.formStep} ${styles.lightBackground}`}>
          <OptionCard
            options={["Технічний", "Повний"]}
            name="design_detail"
            value={formValues.design_detail}
            handleChange={handleChange}
          />
          <div className={styles.designDetailBox}>
            <h3 className={styles.boldText}>Чим вони відрізняються?</h3>
            <div className="box_show">
              <p className={styles.infoText}>
                <strong>Технічний дизайн-проєкт включає:</strong> усі креслення
                та планування — все що потрібно для виконання ремонту бригадою.
              </p>
              <p className={styles.infoText}>
                <strong>Повний дизайн-проєкт включає:</strong> технічний
                дизайн-проєкт + розгортки по стінам, специфікація по
                оздоблювальним матеріалам, розкладки по підлозі, підбір кольорів
                та чистових матеріалів + 3D-візуалізації.
              </p>
              <p className={styles.infoText}>
                Пройдіть цю анкету до кінця та дізнайтеся вартість не тільки
                дизайн-проєкту за вашими запитами, а й вашого ремонту!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Скільки років будинку */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>
          Скільки років будинку, де знаходиться приміщення?
        </h3>
        <OptionCard
          options={[
            {
              label: "Новобудова",
              imgSrc: "/images/new-images/anketa/age/age1.jpg",
            },
            {
              label: "1-10 років",
              imgSrc: "/images/new-images/anketa/age/age2.jpg",
            },
            {
              label: "11-30 років",
              imgSrc: "/images/new-images/anketa/age/age3.jpg",
            },
            {
              label: "від 30 років і більше",
              imgSrc: "/images/new-images/anketa/age/age4.jpg",
            },
            {
              label: "Пам'ятка архітектури",
              imgSrc: "/images/new-images/anketa/age/age5.jpg",
            },
          ]}
          name="age"
          value={[formValues.age]}
          handleChange={handleChange}
        />
      </div>

      {/* Перепланування */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Перепланування:</h3>
        <OptionCard
          options={["Часткове", "Повне", "Без перепланування"]}
          name="planning"
          value={[formValues.planning]}
          handleChange={handleChange}
        />
      </div>

      {/* Заміна існуючих комунікацій */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Заміна існуючих комунікацій:</h3>
        <OptionCard
          options={[
            "Повна заміна/монтаж з нуля електропроводки та сантехнічних труб",
            "Часткова заміна електропроводки та сантехнічних труб",
            "Все залишаємо як є",
            "Потрібна консультація",
          ]}
          name="constructions"
          value={[formValues.constructions]}
          handleChange={handleChange}
        />
      </div>

      {/* Кількість спалень */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Кількість спалень:</h3>
        <OptionCard
          options={["Одна", "Дві", "Три та більше"]}
          name="bedroom"
          value={[formValues.bedroom]}
          handleChange={handleChange}
        />
      </div>

      {/* Уподобання у стилістиці інтер'єру */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Уподобання у стилістиці інтер`єру:</h3>
        <OptionCard
          options={[
            {
              label: "Класика",
              imgSrc: "/images/new-images/anketa/style/style1.jpg",
            },
            {
              label: "Модерн",
              imgSrc: "/images/new-images/anketa/style/style2.jpg",
            },
            {
              label: "Арт Деко",
              imgSrc: "/images/new-images/anketa/style/style3.jpg",
            },
            {
              label: "Хай-Тек",
              imgSrc: "/images/new-images/anketa/style/style4.jpg",
            },
            {
              label: "Лофт",
              imgSrc: "/images/new-images/anketa/style/style5.jpg",
            },
            {
              label: "Мінімалізм",
              imgSrc: "/images/new-images/anketa/style/style6.jpg",
            },
            {
              label: "Скандинавський",
              imgSrc: "/images/new-images/anketa/style/style7.jpg",
            },
            {
              label: "Бохо",
              imgSrc: "/images/new-images/anketa/style/style8.jpg",
            },
            {
              label: "Джапанді",
              imgSrc: "/images/new-images/anketa/style/style9.jpg",
            },
            {
              label: "Вабі-сабі",
              imgSrc: "/images/new-images/anketa/style/style10.jpg",
            },
          ]}
          name="style"
          value={formValues.style}
          handleChange={handleChange}
          multiSelect
        />
      </div>

      {/* Уподобання по підлозі */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Уподобання по підлозі:</h3>
        <OptionCard
          options={[
            {
              label: "Паркет",
              imgSrc: "/images/new-images/anketa/floor/floor1.jpg",
            },
            {
              label: "Ламінат",
              imgSrc: "/images/new-images/anketa/floor/floor2.jpg",
            },
            {
              label: "Плитка",
              imgSrc: "/images/new-images/anketa/floor/floor3.jpg",
            },
            {
              label: "Вініл",
              imgSrc: "/images/new-images/anketa/floor/floor4.jpg",
            },
          ]}
          name="floor"
          value={formValues.floor}
          handleChange={handleChange}
          multiSelect
        />
        <TextInput
          label="Інше:"
          placeholder="Введіть відповідь"
          name="floor-other"
          value={formValues["floor-other"]}
          handleChange={handleChange}
        />
      </div>

      {/* Уподобання по стінах */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Уподобання по стінах:</h3>
        <OptionCard
          options={[
            {
              label: "Фарбування",
              imgSrc: "/images/new-images/anketa/wall/wall1.jpg",
            },
            {
              label: "Шпалери",
              imgSrc: "/images/new-images/anketa/wall/wall2.jpg",
            },
            {
              label: "Декоративна штукатурка",
              imgSrc: "/images/new-images/anketa/wall/wall3.jpg",
            },
            {
              label: "Художнє оформлення",
              imgSrc: "/images/new-images/anketa/wall/wall4.jpg",
            },
            {
              label: "Гіпсові панелі",
              imgSrc: "/images/new-images/anketa/wall/wall5.jpg",
            },
            {
              label: "Панелі МДФ",
              imgSrc: "/images/new-images/anketa/wall/wall6.jpg",
            },
            {
              label: "Молдинги",
              imgSrc: "/images/new-images/anketa/wall/wall7.jpg",
            },
            {
              label: "Комбінований варіант",
              imgSrc: "/images/new-images/anketa/wall/wall8.jpg",
            },
          ]}
          name="wall"
          value={formValues.wall}
          handleChange={handleChange}
          multiSelect
        />
        <TextInput
          label="Інше:"
          placeholder="Введіть відповідь"
          name="wall-other"
          value={formValues["wall-other"]}
          handleChange={handleChange}
        />
      </div>

      {/* Уподобання по стелі */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Уподобання по стелі:</h3>
        <OptionCard
          options={[
            {
              label: "Гіпсокартонна",
              imgSrc: "/images/new-images/anketa/roof/roof1.jpg",
            },
            {
              label: "Натяжна",
              imgSrc: "/images/new-images/anketa/roof/roof2.jpg",
            },
          ]}
          name="roof"
          value={formValues.roof}
          handleChange={handleChange}
          multiSelect
        />
      </div>

      {/* Кількість санвузлів */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Кількість санвузлів:</h3>
        <OptionCard
          options={["Один", "Два", "Три і більше"]}
          name="bathroom"
          value={[formValues.bathroom]}
          handleChange={handleChange}
        />
      </div>

      {/* Оздоблення санвузла */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Оздоблення санвузла:</h3>
        <OptionCard
          options={[
            {
              label: "Широкоформатна плитка",
              imgSrc: "/images/new-images/anketa/bathroommat/bathroommat1.jpg",
            },
            {
              label: "Дрібноформатна плитка",
              imgSrc: "/images/new-images/anketa/bathroommat/bathroommat2.jpg",
            },
          ]}
          name="bathroommat"
          value={[formValues.bathroommat]}
          handleChange={handleChange}
        />
      </div>

      {/* Тип дверей */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Тип дверей:</h3>
        <OptionCard
          options={[
            {
              label: "Звичайні",
              imgSrc: "/images/new-images/anketa/door/door1.jpg",
            },
            {
              label: "Прихованого монтажу",
              imgSrc: "/images/new-images/anketa/door/door2.jpg",
            },
          ]}
          name="door"
          value={[formValues.door]}
          handleChange={handleChange}
        />
      </div>

      {/* Що для Вас найважливіше в інтер'єрі? */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>
          Що для Вас найважливіше в інтер`єрі?
        </h3>
        <OptionCard
          options={["Простір", "Місткість", "Функціональність", "Дизайн"]}
          name="main"
          value={formValues.main}
          handleChange={handleChange}
          multiSelect
        />
        <TextInput
          label="Інше:"
          placeholder="Введіть відповідь"
          name="main-other"
          value={formValues["main-other"]}
          handleChange={handleChange}
        />
      </div>

      {/* Освітлення */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Освітлення:</h3>
        <OptionCard
          options={[
            "Верхнє світло (люстри, світильники, трекові системи)",
            "Настінне/декоративне (підсвітки, бра, торшери)",
            "І те, і інше",
          ]}
          name="lighting"
          value={[formValues.lighting]}
          handleChange={handleChange}
        />
      </div>

      {/* Ваш номер телефону для зв'язку */}
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Ваш номер телефону для зв`язку:</h3>
        <p>
          <label className={styles.textWhite}>
            <span>Телефон</span>
            <input
              className={styles.inputField}
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
      <div className={styles.formStep}>
        <h3 className={styles.textWhite}>Зручний час для звʼязку:</h3>
        <p>
          <label className={styles.textWhite}>
            <span>Введіть час</span>
            <input
              className={styles.inputField}
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
      <div className={styles.formStep}>
        <p>
          <button className={styles.submitButton} type="submit">
            Відправити форму
          </button>
        </p>
      </div>
    </form>
  );
};

export default MultiPartForm;
