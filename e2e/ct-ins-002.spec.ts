import { test, expect } from "@playwright/test";

test('CT-INS-002 : Inscription refusée avec un mot de passe vide', async ({ page }) => {
    //1.Ouvrir la page d'inscription 
    await page.goto("https://demowebshop.tricentis.com/register");
    //2.Saisir (jp.test.s1.002@example.com) dans l'email 
    await page.locator("#Email").fill("jp.test.s1.002@example.com");
    //3.Saisir (Jon) dans first name 
    await page.locator("#FirstName").fill("Jon");
    //4.Saisir (Doe) dans last name 
    await page.locator("#LastName").fill("Doe");
    //5.Cocher gender (Male)
    await page.locator("#gender-male").check();
    // 6. Laisser champ Pssword vide 
    await page.locator("#Password").fill("");
    // 7. Laisser Confirm password vide 
    await page.locator("#ConfirmPassword").fill("");
    // 8. Cliquer sur « Register »
    await page.locator("#register-button").click();
    // 9. Vérifier que le message d'erreur s'affiche
    await expect(page.getByText("Password is required.")).toHaveCount(2);
    // 10. Vérifier que le lien « Log in » est visible
    await expect(page.getByText("Log in")).toBeVisible();
    await expect(page.getByText("jp.test.s1.002@example.com")).not.toBeVisible();
});

