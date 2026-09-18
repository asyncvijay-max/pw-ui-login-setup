import { test, expect } from "@playwright/test";

// test.beforeEach(async ({ page }) => {
//   //Login
//   await page.goto("https://conduit.bondaracademy.com/");

//   await page.getByRole("link", { name: "Sign in" }).click();

//   await page.getByRole("textbox", { name: "Email" }).fill("avavtest@test.com");

//   await page.getByRole("textbox", { name: "Password" }).fill("testing123");

//   await page.getByRole("button", { name: " Sign in " }).click();

//   await page.waitForTimeout(3000);
// });

test.describe("Conduit - smoke test Post Login ", () => {
  test("My first Test - verify New Article link is present or not", async ({
    page,
  }) => {

    await page.goto("https://conduit.bondaracademy.com/")
    await expect(page.getByRole("link", { name: "New Article" })).toBeVisible();
  });

  test("My second Test - click on  New Article link", async ({ page }) => {
    await page.goto("https://conduit.bondaracademy.com/")
    await page.getByRole("link", { name: "New Article" }).click();
  });
});
