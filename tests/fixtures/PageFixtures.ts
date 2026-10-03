import { test as base } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPages';
import { DashboardPage } from '../../pages/DashboardPage';



type PageFixtures = {
    loginPage: LoginPage;
    dashboardPage: DashboardPage;
}


export const test = base.extend<PageFixtures>({
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page); // implement the LoginPage class
        await use(loginPage);
    },
    dashboardPage: async ({page}, use) => {
        const dashboardPage = new DashboardPage(page);
        await use(dashboardPage);
    },
})


