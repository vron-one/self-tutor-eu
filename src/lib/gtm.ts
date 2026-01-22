const GTM_ID = "GTM-NX3GZWF4";
const GTM_SCRIPT_ID = "gtm-script";

export const loadGtm = () => {
  if (typeof window === "undefined") return;
  if (document.getElementById(GTM_SCRIPT_ID)) return;

  (window as any).dataLayer = (window as any).dataLayer || [];
  (window as any).dataLayer.push({
    "gtm.start": new Date().getTime(),
    event: "gtm.js",
  });

  const script = document.createElement("script");
  script.id = GTM_SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  const firstScript = document.getElementsByTagName("script")[0];
  firstScript?.parentNode?.insertBefore(script, firstScript);
};
