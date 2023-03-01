import { test, expect } from '@playwright/test';
import { ElementsTextBoxPageObject } from '../page-objects/element.po';


test('Add data to the fields', async ({ page }) => {

    

    const elementsTextBoxPageObject = new ElementsTextBoxPageObject(page);

    await elementsTextBoxPageObject.goto();
    await elementsTextBoxPageObject.textBox();
    
    await elementsTextBoxPageObject.fullName("John Galt");
    await elementsTextBoxPageObject.email("example@example.com");
    await elementsTextBoxPageObject.currentaddress("Ukraine, Kharkiv, Valentinivska 25a");
    await elementsTextBoxPageObject.permanentAddress("Albania, Vlore, Ruga Gjergj Kastrioti")
    await elementsTextBoxPageObject.submit();

    await expect(page.getByText('Name:John Galt')).toBeVisible();
    await expect(page.getByText('Email:example@example.com')).toBeVisible();
    await expect(page.getByText('Current Address :Ukraine, Kharkiv, Valentinivska 25a')).toBeVisible();
    await expect(page.getByText('Permananet Address :Albania, Vlore, Ruga Gjergj Kastrioti')).toBeVisible();
});