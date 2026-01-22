import { test, expect } from "@playwright/test";

test.describe("Home page", () => {
  test("renders primary sections and footer links", async ({ page }) => {
    await page.goto("/");

    const nav = page.getByRole("navigation");
    await expect(nav).toBeVisible();
    await expect(nav.getByRole("link", { name: /SelfTutor/i })).toBeVisible();

    await expect(page.locator("#features")).toBeVisible();
    await expect(page.locator("#how-it-works")).toBeVisible();
    await expect(page.locator("#pricing")).toBeVisible();

    const footerHelp = page.getByRole("link", { name: /Help Center/i });
    await expect(footerHelp).toBeVisible();
    await expect(footerHelp).toHaveAttribute("href", "/help");

    const footerFaq = page.getByRole("link", { name: /^FAQ$/i });
    await expect(footerFaq).toBeVisible();
    await expect(footerFaq).toHaveAttribute("href", "/faq");
  });
});
