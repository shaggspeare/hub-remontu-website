"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import Image from "next/image";

import styles from "./Anketa.module.scss";
import { useRouter } from "next/navigation";
import { trackFormSubmission } from "@/utils/gtm";
import { useUtmTracker } from "@/hooks/useUtmTracker";

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

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const OptionCard: React.FC<OptionCardProps> = ({
  options,
  name,
  value,
  handleChange,
  multiSelect = false,
}) => (
  <div className={styles.optionsGrid}>
    {options.map((option) => (
      <div
        key={typeof option === "string" ? option : option.label}
        className={styles.optionWrapper}
      >
        <label
          className={`${styles.optionCard} ${
            value.includes(typeof option === "string" ? option : option.label)
              ? styles.optionSelected
              : ""
          }`}
        >
          <input
            type={multiSelect ? "checkbox" : "radio"}
            className="form-check-input"
            name={name}
            value={typeof option === "string" ? option : option.label}
            checked={value.includes(
              typeof option === "string" ? option : option.label,
            )}
            onChange={handleChange}
            style={{ display: "none" }}
          />
          {typeof option !== "string" && option.imgSrc && (
            <div className={styles.optionImageWrapper}>
              <Image
                src={option.imgSrc}
                className={styles.optionImage}
                alt={option.label}
                width={238}
                height={346}
                layout="responsive"
              />
            </div>
          )}
          <div className={styles.optionLabel}>
            <span>{typeof option === "string" ? option : option.label}</span>
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
  const router = useRouter();
  const { utmParams } = useUtmTracker();

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    lighting: "Верхнє світло (люстри, світільники, трекові системи)",
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

  // GTM tracking function for step progression
  const trackStepProgress = (stepNumber: number, stepTitle: string) => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "form_step_progress",
        form_name: "anketa_form",
        step_number: stepNumber + 1,
        step_title: stepTitle,
        total_steps: steps.length,
      });
    }
  };

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

    // Track field interactions
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "form_field_interaction",
        form_name: "anketa_form",
        field_name: fieldName,
        field_value: value,
        step_number: currentStep + 1,
      });
    }
  };

  const steps = [
    {
      title: "Ваше ім'я",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Ваше ім&#39;я:</h3>
          <input
            className={styles.inputField}
            required
            placeholder="Введіть відповідь"
            value={formValues["your-name"]}
            type="text"
            name="your-name"
            onChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Тип нерухомості",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Тип нерухомості:</h3>
          <OptionCard
            options={["Квартира", "Будинок", "Комерційне приміщення"]}
            name="building_type"
            value={[formValues.building_type]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Дизайн-проєкт",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Чи маєте дизайн-проєкт?</h3>
          <OptionCard
            options={["Так, маю", "Ні, але планую", "Ні, не планую"]}
            name="design"
            value={[formValues.design]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    ...(formValues.design === "Ні, але планую"
      ? [
          {
            title: "Тип дизайн-проєкту",
            component: (
              <div className={styles.formStep}>
                <h3 className={styles.stepTitle}>Тип дизайн-проєкту:</h3>
                <OptionCard
                  options={["Технічний", "Повний"]}
                  name="design_detail"
                  value={formValues.design_detail}
                  handleChange={handleChange}
                />
                <div className={styles.designDetailBox}>
                  <h4 className={styles.boldText}>Чим вони відрізняються?</h4>
                  <div className="box_show">
                    <p className={styles.infoText}>
                      <strong>Технічний дизайн-проєкт включає:</strong> усі
                      креслення та планування — все що потрібно для виконання
                      ремонту бригадою.
                    </p>
                    <p className={styles.infoText}>
                      <strong>Повний дизайн-проєкт включає:</strong> технічний
                      дизайн-проєкт + розгортки по стінам, специфікація по
                      оздоблювальним матеріалам, розкладки по підлозі, підбір
                      кольорів та чистових матеріалів + 3D-візуалізації.
                    </p>
                  </div>
                </div>
              </div>
            ),
          },
        ]
      : []),
    {
      title: "Вік будинку",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>
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
      ),
    },
    {
      title: "Перепланування",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Перепланування:</h3>
          <OptionCard
            options={["Часткове", "Повне", "Без перепланування"]}
            name="planning"
            value={[formValues.planning]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Комунікації",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Заміна існуючих комунікацій:</h3>
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
      ),
    },
    {
      title: "Кількість спалень",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Кількість спалень:</h3>
          <OptionCard
            options={["Одна", "Дві", "Три та більше"]}
            name="bedroom"
            value={[formValues.bedroom]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Стиль інтер'єру",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>
            Уподобання у стилістиці інтер&#39;єру:
          </h3>
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
      ),
    },
    {
      title: "Підлога",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Уподобання по підлозі:</h3>
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
      ),
    },
    {
      title: "Стіни",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Уподобання по стінах:</h3>
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
      ),
    },
    {
      title: "Стеля",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Уподобання по стелі:</h3>
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
      ),
    },
    {
      title: "Санвузли",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Кількість санвузлів:</h3>
          <OptionCard
            options={["Один", "Два", "Три і більше"]}
            name="bathroom"
            value={[formValues.bathroom]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Оздоблення санвузла",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Оздоблення санвузла:</h3>
          <OptionCard
            options={[
              {
                label: "Широкоформатна плитка",
                imgSrc:
                  "/images/new-images/anketa/bathroommat/bathroommat1.jpg",
              },
              {
                label: "Дрібноформатна плитка",
                imgSrc:
                  "/images/new-images/anketa/bathroommat/bathroommat2.jpg",
              },
            ]}
            name="bathroommat"
            value={[formValues.bathroommat]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Тип дверей",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Тип дверей:</h3>
          <OptionCard
            options={[
              {
                label: "Звичайні",
                imgSrc: "/images/new-images/anketa/door/door2.jpg",
              },
              {
                label: "Прихованого монтажу",
                imgSrc: "/images/new-images/anketa/door/door1.jpg",
              },
            ]}
            name="door"
            value={[formValues.door]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Пріоритети",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>
            Що для Вас найважливіше в інтер&#39;єрі?
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
      ),
    },
    {
      title: "Освітлення",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Освітлення:</h3>
          <OptionCard
            options={[
              "Верхнє світло (люстри, світільники, трекові системи)",
              "Настінне/декоративне (підсвітки, бра, торшери)",
              "І те, і інше",
            ]}
            name="lighting"
            value={[formValues.lighting]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Контакти",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>
            Ваш номер телефону для зв&#39;язку:
          </h3>
          <label className={styles.inputLabel}>
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

          <h3 className={styles.stepTitle} style={{ marginTop: "24px" }}>
            Зручний час для зв&#39;язку:
          </h3>
          <label className={styles.inputLabel}>
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
        </div>
      ),
    },
  ];

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Combine form data with UTM parameters
      const submitData = {
        formData: formValues,
        ...utmParams,
      };

      console.log("Submitting anketa form with UTM:", submitData);

      const response = await fetch("/api/sendTelegram", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const result = await response.json();
      console.log("Anketa form response:", result);

      if (response.ok) {
        // Track successful form submission
        trackFormSubmission("anketa_form", true);

        // Push comprehensive conversion event to dataLayer
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "anketa_form_submission_success",
            form_name: "anketa_form",
            user_name: formValues["your-name"],
            user_phone: formValues.phone,
            building_type: formValues.building_type,
            design_preference: formValues.design,
            total_steps_completed: steps.length,
            form_completion_rate: 100,
            keycrm_status: result.keycrm || "unknown",
            keycrm_id: result.keycrm_id || null,
            ...utmParams,
          });
        }

        // Reset form
        setFormValues({
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
          lighting: "Верхнє світло (люстри, світільники, трекові системи)",
          phone: "",
          time: "",
        });
        setCurrentStep(0);

        // Small delay to ensure GTM events are processed
        setTimeout(() => {
          router.push("/thank-you");
        }, 100);
      } else {
        trackFormSubmission("anketa_form", false);
        alert("Помилка при відправці форми");
      }
    } catch (error) {
      console.error("Error submitting form: ", error);
      trackFormSubmission("anketa_form", false);
      alert("Помилка при відправці форми");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      // Track step progression
      trackStepProgress(currentStep + 1, steps[currentStep + 1].title);

      setCurrentStep(currentStep + 1);
      // Scroll to top of form with offset for header
      const formContainer = document.querySelector(`.${styles.formContainer}`);
      if (formContainer) {
        const rect = formContainer.getBoundingClientRect();
        const offset = window.innerWidth <= 768 ? 70 : 100; // 70px mobile, 100px desktop
        window.scrollTo({
          top: rect.top + window.pageYOffset - offset,
          behavior: "smooth",
        });
      }
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      // Track going back
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "form_step_back",
          form_name: "anketa_form",
          from_step: currentStep + 1,
          to_step: currentStep,
          step_title: steps[currentStep - 1].title,
        });
      }

      setCurrentStep(currentStep - 1);
      // Scroll to top of form with offset for header
      const formContainer = document.querySelector(`.${styles.formContainer}`);
      if (formContainer) {
        const rect = formContainer.getBoundingClientRect();
        const offset = window.innerWidth <= 768 ? 70 : 100; // 70px mobile, 100px desktop
        window.scrollTo({
          top: rect.top + window.pageYOffset - offset,
          behavior: "smooth",
        });
      }
    }
  };

  const isStepValid = () => {
    // Add validation logic here based on the current step
    if (currentStep === 0) return formValues["your-name"].length > 0;
    if (currentStep === steps.length - 1) return formValues.phone.length > 0;
    return true;
  };

  const progressPercentage = ((currentStep + 1) / steps.length) * 100;

  // Track form abandonment when component unmounts
  React.useEffect(() => {
    return () => {
      if (currentStep > 0 && currentStep < steps.length - 1) {
        if (typeof window !== "undefined" && window.dataLayer) {
          window.dataLayer.push({
            event: "form_abandonment",
            form_name: "anketa_form",
            abandoned_at_step: currentStep + 1,
            abandonment_rate: ((currentStep + 1) / steps.length) * 100,
          });
        }
      }
    };
  }, [currentStep, steps.length]);

  return (
    <div className={styles.formContainer}>
      {/* Progress Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}>
          <div
            className={styles.progressFill}
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        <div className={styles.progressText}>
          Крок {currentStep + 1} з {steps.length}
        </div>
      </div>

      {/* Show UTM parameters in development mode */}
      {process.env.NODE_ENV === "development" &&
        Object.keys(utmParams).length > 0 && (
          <div
            style={{
              marginBottom: "20px",
              padding: "10px",
              backgroundColor: "rgba(186, 141, 109, 0.1)",
              border: "1px solid var(--primaryColor)",
              borderRadius: "5px",
              fontSize: "12px",
              color: "var(--whiteColor)",
            }}
          >
            <strong>UTM параметри:</strong>
            <pre style={{ fontSize: "11px", margin: "5px 0 0 0" }}>
              {JSON.stringify(utmParams, null, 2)}
            </pre>
          </div>
        )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="wpcf7-form">
        <div className={styles.stepContainer}>
          {steps[currentStep].component}
        </div>

        {/* Navigation Buttons */}
        <div className={styles.navigationButtons}>
          {currentStep > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className={styles.prevButton}
              disabled={isSubmitting}
            >
              Назад
            </button>
          )}

          {currentStep < steps.length - 1 ? (
            <button
              type="button"
              onClick={handleNext}
              className={styles.nextButton}
              disabled={!isStepValid() || isSubmitting}
            >
              Далі
            </button>
          ) : (
            <button
              type="submit"
              className={styles.submitButton}
              disabled={!isStepValid() || isSubmitting}
            >
              {isSubmitting ? "Відправляємо..." : "Відправити форму"}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default MultiPartForm;
