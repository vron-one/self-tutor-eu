import { test, expect } from "@playwright/test";

test.describe("Help Center page", () => {
  test("renders the form and keeps submit disabled", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("contentinfo")
      .getByRole("link", { name: /Help Center/i })
      .click();
    await expect(page).toHaveURL(/\/help/);

    await expect(
      page.getByRole("heading", { name: /Help Center|Hilfe-Center/i })
    ).toBeVisible();

    await expect(
      page.getByRole("heading", { name: /Contact Form|Kontaktformular/i })
    ).toBeVisible();

    await expect(
      page.getByLabel(/First Name|Vorname/i)
    ).toBeVisible();
    await expect(
      page.getByLabel(/Last Name|Nachname/i)
    ).toBeVisible();
    await expect(page.getByLabel(/Email|E-Mail/i)).toBeVisible();
    await expect(
      page.getByLabel(/Confirm Email|E-Mail bestätigen/i)
    ).toBeVisible();
    await expect(page.getByLabel(/Topic|Thema/i)).toBeVisible();
    await expect(page.getByLabel(/Message|Nachricht/i)).toBeVisible();

    const submitButton = page.getByRole("button", { name: /Send|Absenden/i });
    await expect(submitButton).toBeDisabled();
  });
});
