import {test} from './fixtures/PageFixtures'
import { User } from '../pages/LoginPages'
import user from './user.json'

const validUser: User = { username: 'Admin', password: 'admin123' }
const invalidUser: User = { username: 'Admin', password: 'admin' }


test.describe('Verify Login functionality', () => {

    test.beforeEach(async ({loginPage})=> {
        await loginPage.navigateToOrangeHRM()
    })

    test('Verify Login with valid credentials',async ({ context ,loginPage, dashboardPage }) => {
        await loginPage.loginToOrangeHrm(validUser)
        await dashboardPage.checkLoginSuccess()
        await context.storageState({path: 'state.json'})
    });

    test('Verify Login with invalid credentials', async ({ loginPage }) => {
        await loginPage.loginToOrangeHrm(invalidUser)
        await loginPage.checkLoginError()
    });

    test('Verify Login with valid credentials from env variable',async ({ context ,loginPage, dashboardPage }) => {
        await loginPage.loginToOrangeHrmUsingCreds(process.env.USERNAME, process.env.PASSWORD)
        await dashboardPage.checkLoginSuccess()
        await context.storageState({path: 'state.json'})
    });

    test('Verify Login with valid credentials from Json file',async ({ context ,loginPage, dashboardPage }) => {
        await loginPage.loginToOrangeHrmUsingCreds(user.username, user.password)
        await dashboardPage.checkLoginSuccess()
        await context.storageState({path: 'state.json'})
    });

})