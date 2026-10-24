import { Locator, Page, expect } from "@playwright/test";


export type User = {
    username: string,
    password: string
}

export class LoginPage {

    private readonly page: Page;

    private readonly usernameTextField: Locator;
    private readonly passwordTextField: Locator;
    private readonly loginButton: Locator;

    private readonly loginErrorMessage: Locator

    constructor(page: Page) {
        this.page = page;

        this.usernameTextField = page.locator('[name="username"]')
        this.passwordTextField = page.locator('[name="password"]')
        this.loginButton = page.locator('[type="submit"]')
        this.loginErrorMessage = page.getByText('Invalid credentials')
    }

    async navigateToOrangeHRM() {
        await this.page.goto('')
    }

    private async enterUserName(username: string) {
        await this.usernameTextField.fill(username)
    }

    private async enterPassword(password: string) {
        await this.passwordTextField.fill(password)
    }

    private async clickOnLoginButton() {
        await this.loginButton.click({timeout: 3000})
    }

    async loginToOrangeHrm(userCredentials: User) {
        await this.enterUserName(userCredentials.username)
        await this.enterPassword(userCredentials.password)
        await this.clickOnLoginButton()
    }

    async loginToOrangeHrmUsingCreds(username: string, password:string) {
        await this.enterUserName(username)
        await this.enterPassword(password)
        await this.clickOnLoginButton()
    }

    async checkLoginError() {
        await expect (this.loginErrorMessage).toBeVisible()
    }
}