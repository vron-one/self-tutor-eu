export type AppConfig = {
  recaptchaSiteKey: string;
  n8nWebhookUrl: string;
};

const fallbackConfig: AppConfig = {
  recaptchaSiteKey: "",
  n8nWebhookUrl: "",
};

export const getAppConfig = (): AppConfig => {
  if (typeof window === "undefined") {
    return fallbackConfig;
  }

  return {
    recaptchaSiteKey: window.__APP_CONFIG__?.recaptchaSiteKey ?? "",
    n8nWebhookUrl: window.__APP_CONFIG__?.n8nWebhookUrl ?? "",
  };
};
