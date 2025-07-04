import { useEffect, useState } from "react";

export interface UtmParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
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

    // Track traditional UTM parameters
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

    // Track click IDs from social platforms and ad networks
    ["fbclid", "gclid"].forEach((param) => {
      const value = urlParams.get(param);
      if (value) {
        currentUtm[param as keyof UtmParams] = value;
      }
    });

    // Auto-detect source based on click IDs if UTM source is not present
    if (!currentUtm.utm_source) {
      if (currentUtm.fbclid) {
        currentUtm.utm_source = "facebook";
        currentUtm.utm_medium = currentUtm.utm_medium || "social";
      } else if (currentUtm.gclid) {
        currentUtm.utm_source = "google";
        currentUtm.utm_medium = currentUtm.utm_medium || "cpc";
      }
    }

    // Only save and update if we have any tracking parameters
    if (Object.keys(currentUtm).length > 0) {
      localStorage.setItem("utm_params", JSON.stringify(currentUtm));
      setUtmParams(currentUtm);

      // Enhanced GTM tracking with click IDs
      if (typeof window !== "undefined" && window.dataLayer) {
        window.dataLayer.push({
          event: "utm_captured",
          utm_source: currentUtm.utm_source,
          utm_medium: currentUtm.utm_medium,
          utm_campaign: currentUtm.utm_campaign,
          utm_content: currentUtm.utm_content,
          utm_term: currentUtm.utm_term,
          fbclid: currentUtm.fbclid,
          gclid: currentUtm.gclid,
          // Add helpful flags for easier filtering
          has_facebook_tracking: !!currentUtm.fbclid,
          has_google_tracking: !!currentUtm.gclid,
          traffic_source_type: currentUtm.fbclid
            ? "social"
            : currentUtm.gclid
              ? "search"
              : "organic",
        });
      }

      // Console log for debugging in development
      if (process.env.NODE_ENV === "development") {
        console.log("📊 Tracking parameters captured:", currentUtm);
      }
    }
  }, []);

  const clearUtmParams = () => {
    localStorage.removeItem("utm_params");
    setUtmParams({});
  };

  // Helper function to get the primary traffic source
  const getPrimarySource = (): string => {
    if (utmParams.utm_source) return utmParams.utm_source;
    if (utmParams.fbclid) return "facebook";
    if (utmParams.gclid) return "google";
    return "direct";
  };

  // Helper function to check if traffic is from paid channels
  const isPaidTraffic = (): boolean => {
    return !!(
      utmParams.gclid ||
      utmParams.utm_medium?.includes("cpc") ||
      utmParams.utm_medium?.includes("paid") ||
      (utmParams.fbclid && utmParams.utm_medium?.includes("social"))
    );
  };

  return {
    utmParams,
    clearUtmParams,
    getPrimarySource,
    isPaidTraffic,
  };
};
