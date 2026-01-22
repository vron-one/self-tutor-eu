/// <reference types="vite/client" />

declare global {
  interface Window {
    __APP_CONFIG__?: {
      recaptchaSiteKey?: string;
      n8nWebhookUrl?: string;
    };
    grecaptcha?: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}
