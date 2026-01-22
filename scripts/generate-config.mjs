import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const rootDir = process.cwd();
const envFiles = [".env", ".env.local"];

const loadEnvFile = (envPath) => {
  if (!fs.existsSync(envPath)) {
    return;
  }

  const contents = fs.readFileSync(envPath, "utf8");
  for (const line of contents.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) {
      continue;
    }

    const separatorIndex = trimmed.indexOf("=");
    if (separatorIndex === -1) {
      continue;
    }

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();

    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }

    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
};

for (const file of envFiles) {
  const envPath = path.join(rootDir, file);
  loadEnvFile(envPath);
}

const config = {
  recaptchaSiteKey: process.env.APP_RECAPTCHA_SITE_KEY ?? "",
  n8nWebhookUrl: process.env.APP_N8N_WEBHOOK_URL ?? "",
};

const output = `window.__APP_CONFIG__ = ${JSON.stringify(config, null, 2)};\n`;

fs.mkdirSync(path.join(rootDir, "public"), { recursive: true });
fs.writeFileSync(path.join(rootDir, "public", "config.js"), output, "utf8");
