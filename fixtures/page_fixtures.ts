import { test as baseTest } from "@playwright/test";
import { AlloPage } from "../src/pages/alloPage";
import { FuaPage } from "../src/pages/fUaPage";

type FuaType = {
    fUaPage: FuaPage
}

type AlloType = {
    alloPage: AlloPage
}

export const testFua = baseTest.extend<FuaType>({
    fUaPage: async ({ page }, use, testInfo) => {
        let fUaPage = new FuaPage(page)
        await fUaPage.goto()
        await use(fUaPage)
    }
})

export const testAllo = baseTest.extend<AlloType>({
    alloPage: async ({ page }, use, testInfo) => {
        let alloPage = new AlloPage(page)
        await alloPage.goto()
        await use(alloPage)
    }
})