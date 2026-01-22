export type AppConfig = {
  recaptchaSiteKey: string;
  n8nWebhookUrl: string;
};

type WindowWithConfig = Window & {
  __APP_CONFIG__?: {
    recaptchaSiteKey?: string;
    n8nWebhookUrl?: string;
  };
};

const fallbackConfig: AppConfig = {
  recaptchaSiteKey: "",
  n8nWebhookUrl: "",
};

export const getAppConfig = (): AppConfig => {
  if (typeof window === "undefined") {
    return fallbackConfig;
  }

  const win = window as WindowWithConfig;
  return {
    recaptchaSiteKey: win.__APP_CONFIG__?.recaptchaSiteKey ?? "",
    n8nWebhookUrl: win.__APP_CONFIG__?.n8nWebhookUrl ?? "",
  };
};
