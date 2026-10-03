import {test} from './fixtures/PageFixtures'

test.describe('Verify Login functionality', () => {

    test.beforeEach(async ({ page ,dashboardPage })=> {
       await page.context().setStorageState('state.json')
       await dashboardPage.openPage()
    })

    test('Verify Dashboard functionality', {tag: '@smoke'} ,async ({ dashboardPage }) => {
        await dashboardPage.checkTimeAtWorkSectionDisplayed()
    });

})