import { test, expect } from "@playwright/test";

test("CT-INS-005 : inscription refusée avec une confirmation de mot de passe différente", async ({ page }) => {
    // 1. Ouvrir la page d'inscription
    await page.goto("https://demowebshop.tricentis.com/register");
    // 2. Saisir « jp.test.s1.005@example.com » dans Email
    await page.locator("#Email").fill("jp.test.s1.005@example.com");
    // 3. Saisir « Jon » dans First name
    await page.locator("#FirstName").fill("Jon");
    // 4. Saisir « Doe » dans Last name
    await page.locator("#LastName").fill("Doe");
    // 5. Cocher Male
    await page.locator("#gender-male").check();
    // 6. Saisir « 123456 » dans Password
    await page.locator("#Password").fill("123456");
    // 7. Saisir « 123457 » dans Confirm password
    await page.locator("#ConfirmPassword").fill("123457");
    // 8. Cliquer sur « Register »
    await page.locator("#register-button").click();
    // 9. Vérifier que le message d'erreur contient « do not match »
    await expect(page.locator(".field-validation-error")).toContainText("do not match");
    // 10. Vérifier que le lien « Log in » est visible
    await expect(page.getByRole("link", {name: "Log in"})).toBeVisible();
    await expect(page.getByText("jp.test.s1.005@example.com")).not.toBeVisible();
});