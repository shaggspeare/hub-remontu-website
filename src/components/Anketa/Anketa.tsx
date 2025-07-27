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
  timing: string;
  housing_type: string;
  phone: string;
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

const MultiPartForm: React.FC = () => {
  const router = useRouter();
  const { utmParams } = useUtmTracker();

  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formValues, setFormValues] = useState<FormValues>({
    "your-name": "",
    building_type: "Квартира",
    design: "Так",
    timing: "Якомога швидше",
    housing_type: "Новобудова",
    phone: "",
  });

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
    const { name, value } = e.target;
    const fieldName = name as keyof FormValues;

    setFormValues((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));

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
      title: "Тип об'єкту",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Тип об&#39;єкту:</h3>
          <OptionCard
            options={["Квартира", "Будинок", "Комерція"]}
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
          <h3 className={styles.stepTitle}>Чи маєте ви дизайн проєкт?</h3>
          <OptionCard
            options={["Так", "Ні", "Планую створити"]}
            name="design"
            value={[formValues.design]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Терміни",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Коли хочете розпочати роботи?</h3>
          <OptionCard
            options={[
              "Якомога швидше",
              "Протягом місяця",
              "Цікавлюсь на майбутнє",
            ]}
            name="timing"
            value={[formValues.timing]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Тип житла",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Тип житла:</h3>
          <OptionCard
            options={[
              {
                label: "Новобудова",
                imgSrc: "/images/new-images/anketa/age/age1.jpg",
              },
              {
                label: "Вторинна нерухомість",
                imgSrc: "/images/new-images/anketa/age/age2.jpg",
              },
            ]}
            name="housing_type"
            value={[formValues.housing_type]}
            handleChange={handleChange}
          />
        </div>
      ),
    },
    {
      title: "Контактні дані",
      component: (
        <div className={styles.formStep}>
          <h3 className={styles.stepTitle}>Ваше ім&#39;я:</h3>
          <input
            className={styles.inputField}
            required
            placeholder="Введіть ваше ім'я"
            value={formValues["your-name"]}
            type="text"
            name="your-name"
            onChange={handleChange}
          />

          <h3 className={styles.stepTitle} style={{ marginTop: "24px" }}>
            Ваш номер телефону:
          </h3>
          <input
            className={styles.inputField}
            required
            placeholder="+ 380 __ ___ __ __"
            value={formValues.phone}
            type="tel"
            name="phone"
            onChange={handleChange}
          />
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
            timing: formValues.timing,
            housing_type: formValues.housing_type,
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
          design: "Так",
          timing: "Якомога швидше",
          housing_type: "Новобудова",
          phone: "",
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
    if (currentStep === 4) {
      return formValues["your-name"].length > 0 && formValues.phone.length > 0;
    }
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
