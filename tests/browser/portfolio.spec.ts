import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("recruiters can browse and filter projects, then read a case study", async ({ page }) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Building Better Engineering Teams.");
  await page.getByRole("link", { name: "Explore my work", exact: true }).click();
  await expect(page.locator("#projects")).toBeInViewport();
  await page.getByRole("button", { name: "Tools", exact: true }).click();
  await expect(page.getByRole("heading", { name: "QR Generator", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "CrowHub", exact: true })).toHaveCount(0);
  await page.getByRole("button", { name: "All work", exact: true }).click();
  await page.getByRole("link", { name: "View case study: CrowHub" }).click();
  await expect(page).toHaveURL(/\/projects\/crowhub/);
  await expect(page.getByRole("heading", { name: "Engineering decisions" })).toBeVisible();
  await expect(page.locator('a[href="https://github.com/neiln/crow-app"]')).toHaveCount(0);
  expect(errors).toEqual([]);
});

test("navigation is usable from mobile and keyboard", async ({ page, isMobile }) => {
  await page.goto("/");
  if (isMobile) {
    const toggle = page.getByRole("button", { name: "Open navigation" });
    await toggle.click();
    await expect(page.getByRole("button", { name: "Close navigation" })).toHaveAttribute("aria-expanded", "true");
    await page.keyboard.press("Escape");
    await expect(page.getByRole("button", { name: "Open navigation" })).toBeFocused();
    await page.getByRole("button", { name: "Open navigation" }).click();
    await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Leadership", exact: true }).click();
    await expect(page).toHaveURL(/\/leadership/);
    await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  } else {
    await page.keyboard.press("Tab");
    await expect(page.getByRole("link", { name: "Skip to content" })).toBeFocused();
  }
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});

test("mobile navigation closes when going back or resizing to desktop", async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto("/");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.getByRole("navigation", { name: "Mobile navigation" }).getByRole("link", { name: "Projects", exact: true }).click();
  await expect(page).toHaveURL(/\/projects$/);
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.goBack();
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
  await page.getByRole("button", { name: "Open navigation" }).click();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await expect(page.getByRole("navigation", { name: "Mobile navigation" })).toBeHidden();
  await page.setViewportSize({ width: 375, height: 812 });
  await expect(page.getByRole("button", { name: "Open navigation" })).toHaveAttribute("aria-expanded", "false");
});

test("all routes, contact actions, resume, and the 404 resolve", async ({ page, request }) => {
  for (const path of ["/", "/projects", "/engineering-impact", "/leadership", "/about", "/contact", "/projects/crowhub", "/projects/bizlink", "/projects/qr-generator", "/projects/vendor-hub"]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
  }
  expect((await request.get("/projects/unknown-product")).status()).toBe(404);
  const resume = await request.get("/resume/Neil_Nelson_EM_Resume.docx");
  expect(resume.status()).toBe(200);
  expect((await resume.body()).length).toBeGreaterThan(1000);
  await page.goto("/contact");
  await expect(page.getByRole("link", { name: "Email nelson.neil@gmail.com", exact: true })).toHaveAttribute("href", "mailto:nelson.neil@gmail.com");
});

test("home and case study meet accessibility fundamentals", async ({ page }) => {
  for (const path of ["/", "/projects/crowhub", "/contact"]) {
    await page.goto(path);
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
    expect(results.violations, path).toEqual([]);
  }
});
