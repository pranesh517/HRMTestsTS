import {test} from './fixtures/PageFixtures'


test.describe('Verify Login functionality', () => {

    test.beforeEach(async ({loginPage})=> {
        await loginPage.navigateToOrangeHRM()
    })

    test('Verify Login with valid credentials', {tag: '@smoke'} ,async ({ context ,loginPage, dashboardPage }) => {
        await loginPage.loginToOrangeHrm('Admin', 'admin123')
        await dashboardPage.checkLoginSuccess()
        await context.storageState({path: 'state.json'})
    });

    test('Verify Login with invalid credentials', async ({ loginPage }) => {
        await loginPage.loginToOrangeHrm('Admin', 'admin')
        await loginPage.checkLoginError()
    });

})