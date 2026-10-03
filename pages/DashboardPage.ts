import { Locator, Page, expect } from "@playwright/test";


export class DashboardPage {

    private readonly page: Page

    private readonly profileDropdown: Locator
    private readonly timeAtWorkSection: Locator

    constructor(page: Page) {
        this.page = page
        this.profileDropdown = page.locator('.oxd-userdropdown-tab')
        this.timeAtWorkSection = page.getByText('Time at Work')
    }

    async checkLoginSuccess() {
        await expect (this.profileDropdown).toBeVisible()
    }

    async checkTimeAtWorkSectionDisplayed() {
        await expect(this.timeAtWorkSection).toBeVisible()
    }

    async openPage() {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }

}