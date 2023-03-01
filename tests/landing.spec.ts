import { test, expect } from '@playwright/test';
import { ElementsTextBoxPageObject } from '../page-objects/element.po';


test('Add data to the fields', async ({ page }) => {

    

    const elementsTextBoxPageObject = new ElementsTextBoxPageObject(page);

    await elementsTextBoxPageObject.goto();
    await elementsTextBoxPageObject.fullName("John Galt");
    await elementsTextBoxPageObject.email("example.com");
    await elementsTextBoxPageObject.currentaddress("Ukraine, Kharkiv, Valentinivska 25a");
    await elementsTextBoxPageObject.permanentAddress("Albania, Vlore, Ruga Gjergj Kastrioti")
    await elementsTextBoxPageObject.submit();

    await expect(page.locator('data-test-id=specialization')).toBeVisible();

});