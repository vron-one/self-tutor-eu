import { test, expect } from "@playwright/test";

test.describe("FAQ page", () => {
  test("shows FAQ heading and expands first answer", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("contentinfo").getByRole("link", { name: /^FAQ$/i }).click();
    await expect(page).toHaveURL(/\/faq/);

    await expect(
      page.getByRole("heading", {
        name: /Frequently Asked Questions|Häufig gestellte Fragen/i,
      })
    ).toBeVisible();

    const firstQuestion = page.getByRole("button", {
      name: /Which languages are supported|Welche Sprachen werden unterstützt/i,
    });
    await firstQuestion.click();

    await expect(
      page.getByText(
        /SelfTutor supports multiple languages|SelfTutor unterstützt mehrere Sprachen/i
      )
    ).toBeVisible();
  });
});
