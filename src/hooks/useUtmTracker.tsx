import { useEffect, useState } from "react";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

export const useUtmTracker = () => {
  const [utmParams, setUtmParams] = useState<UtmParams>({});

  useEffect(() => {
    const savedUtm = localStorage.getItem("utm_params");
    if (savedUtm) {
      try {
        setUtmParams(JSON.parse(savedUtm));
      } catch (error) {
        console.error("Error parsing saved UTM params:", error);
        localStorage.removeItem("utm_params");
      }
    }

    const urlParams = new URLSearchParams(window.location.search);
    const currentUtm: UtmParams = {};

    [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "utm_term",
    ].forEach((param) => {
      const value = urlParams.get(param);
      if (value) {
        currentUtm[param as keyof UtmParams] = value;
      }
    });

    if (Object.keys(currentUtm).length > 0) {
      localStorage.setItem("utm_params", JSON.stringify(currentUtm));
      setUtmParams(currentUtm);

      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "utm_captured",
          utm_source: currentUtm.utm_source,
          utm_medium: currentUtm.utm_medium,
          utm_campaign: currentUtm.utm_campaign,
          utm_content: currentUtm.utm_content,
          utm_term: currentUtm.utm_term,
        });
      }
    }
  }, []);

  const clearUtmParams = () => {
    localStorage.removeItem("utm_params");
    setUtmParams({});
  };

  return { utmParams, clearUtmParams };
};
