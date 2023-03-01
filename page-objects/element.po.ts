import {Locator, Page} from "@playwright/test";


export class ElementsTextBoxPageObject {
    [x: string]: any;
    readonly page: Page;
    readonly textBoxButton: Locator;
    readonly fullNameInput: Locator;
    readonly emailInput: Locator;
    readonly currentaddressInput: Locator;
    readonly permanentAddressInput: Locator;
    readonly submitButton: Locator;
    
    


    constructor(page: Page) {
        this.page = page;
        this.textBoxButton = this.page.getByRole('listitem').filter({ hasText: 'Text Box' });
        this.fullNameInput = this.page.getByPlaceholder('Full Name');
        this.emailInput = this.page.getByPlaceholder('name@example.com');
        this.currentaddressInput = this.page.getByPlaceholder('Current Address');
        this.permanentAddressInput = this.page.locator('#permanentAddress');
        this.submitButton = this.page.getByRole('button', { name: 'Submit' });
    }

    async goto(): Promise<void>{
        await this.page.goto("https://demoqa.com/elements");

    }

    async textBox(): Promise<void> {
        await this.textBoxButton.click();
        
    }

    async fullName(term: string): Promise<void> {
        await this.fullNameInput.click();
        await this.fullNameInput.fill(term);
    }

    async email(term: string): Promise<void> {
        await this.emailInput.click();
        await this.emailInput.fill(term);
    }

    async currentaddress(term: string): Promise<void> {
        await this.currentaddressInput.click();
        await this.currentaddressInput.fill(term);
    }

    async permanentAddress(term: string): Promise<void> {
        await this.permanentAddressInput.click();
        await this.permanentAddressInput.fill(term);
    }

    async submit(): Promise<void> {
        await this.submitButton.click();
    }
}