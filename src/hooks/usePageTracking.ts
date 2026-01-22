import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { isAnalyticsAllowed, getCookieConsent } from "@/components/CookieBanner";

type PageViewEvent = {
  page: string;
  title: string;
  timestamp: string;
  referrer: string;
  userAgent: string;
  language: string;
  screenWidth: number;
  screenHeight: number;
};

// Track page views - sends to n8n webhook if configured
export const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    // Only track if analytics cookies are allowed
    if (!isAnalyticsAllowed()) {
      console.log("[Tracking] Analytics not allowed by cookie consent");
      return;
    }

    const pageViewEvent: PageViewEvent = {
      page: location.pathname,
      title: document.title,
      timestamp: new Date().toISOString(),
      referrer: document.referrer,
      userAgent: navigator.userAgent,
      language: navigator.language,
      screenWidth: window.innerWidth,
      screenHeight: window.innerHeight,
    };

    // Log for development
    console.log("[Tracking] Page view:", pageViewEvent);

    // Send to n8n webhook if configured
    const webhookUrl = import.meta.env.VITE_TRACKING_WEBHOOK_URL;
    if (webhookUrl) {
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "page_view",
          ...pageViewEvent,
        }),
      }).catch((err) => console.error("[Tracking] Failed to send:", err));
    }

    // If Google Analytics is configured, send pageview
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "page_view", {
        page_path: location.pathname,
        page_title: document.title,
      });
    }
  }, [location.pathname]);
};

// Track specific events like downloads, form submissions
export const trackEvent = (eventName: string, eventData?: Record<string, any>) => {
  if (!isAnalyticsAllowed()) {
    console.log("[Tracking] Event blocked - analytics not allowed:", eventName);
    return;
  }

  const event = {
    type: "custom_event",
    event: eventName,
    data: eventData,
    page: window.location.pathname,
    timestamp: new Date().toISOString(),
  };

  console.log("[Tracking] Custom event:", event);

  // Send to n8n webhook if configured
  const webhookUrl = import.meta.env.VITE_TRACKING_WEBHOOK_URL;
  if (webhookUrl) {
    fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }).catch((err) => console.error("[Tracking] Failed to send event:", err));
  }

  // Google Analytics
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", eventName, eventData);
  }
};
