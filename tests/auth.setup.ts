import {test as setup,expect} from "@playwright/test"

import path from 'path'


const authFile = path.join(__dirname,"../playwright/.auth/user.json")

setup("authenticate login as setup", async({page})=>{

  await page.goto("https://conduit.bondaracademy.com/");

  await page.getByRole("link", { name: "Sign in" }).click();

  await page.getByRole("textbox", { name: "Email" }).fill("avavtest@test.com");

  await page.getByRole("textbox", { name: "Password" }).fill("testing123");

  await page.getByRole("button", { name: " Sign in " }).click();

 await expect(page.getByRole("link", { name: "New Article" })).toBeVisible();

  await page.context().storageState({path:authFile})

  //await page.waitForTimeout(3000);

})

