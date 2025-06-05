// utils/gtm.ts

declare global {
    interface Window {
        dataLayer: any[];
    }
}

export const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;

export const pageview = (url: string) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'page_view',
            page_title: document.title,
            page_location: url,
            page_path: window.location.pathname
        });
    }
};

export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: eventName,
            ...parameters
        });
    }
};

export const trackFormSubmission = (formName: string, success: boolean = true) => {
    if (typeof window !== 'undefined' && window.dataLayer) {
        window.dataLayer.push({
            event: 'form_submit',
            form_name: formName,
            form_submit_success: success
        });
    }
};