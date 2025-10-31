const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('@playwright/test');


Given('que eu estou na página inicial do Google', async function(){
    await expect(this.page).toHaveTitle('/Google/');
});

When(' eu pesquiso pelo termo "Playwright"', async function(){

const campo_pesquisa = this.page.locator('textarea[name="q"]');
await campo_pesquisa.fill('Playwright')
await campo_pesquisa.press('Enter')
await this.page.waitForLoadState('networkidle');
});
Then ('o resultado da busca deve conter o link "https://playwright.dev/" ', async function () {
  


const link = this.page.locator('a[href="https://playwright.dev/"]')
await expect(link).toBeVisible();
});
/*Scenario: Encontrar o site oficial do Playwright
    Given que eu estou na página inicial do Google
    When eu pesquiso pelo termo "Playwright"
    Then o resultado da busca deve conter o link "https://playwright.dev/" */