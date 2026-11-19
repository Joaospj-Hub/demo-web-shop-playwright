import { test, expect } from "@playwright/test";

test("CT-INS-004 : inscription acceptée avec un mot de passe de 6 caractères", async ({ page }) => {
    const email = `jp.test.s1.004.${Date.now()}@example.com`;

    // 1. Ouvrir la page d'inscription
    await page.goto("https://demowebshop.tricentis.com/register");
    // 2.Saisir email
    await page.locator("#Email").fill(email);
    // 2.Saisir First name 
    await page.locator("#FirstName").fill("Jon");
    // 3.Saisir Last name 
    await page.locator("#LastName").fill("Doe");
    // 4.Cocher gender 
    await page.locator("#gender-male").check();
    // 5.Saisir Password 
    await page.locator("#Password").fill("123456");
    // 6.Saisir confirmation Password 
    await page.locator("#ConfirmPassword").fill("123456");
    // 7.Click Register 
    await page.locator("#register-button").click();
    // 8.Veirifier que message de completed s'affcihe 
    await expect(page.getByText("Your registration completed")).toBeVisible();
    // 9.Verifier que button Continue s'affiche 
    await expect(page.getByRole("button", { name: "Continue" })).toBeVisible();
    // 10.Verifier que email s'affiche en tete 
    await expect(page.getByText(email)).toBeVisible();

});