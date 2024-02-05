import { testAllo } from "../../fixtures/page_fixtures";
testAllo.describe('Allo tests', () => {
  testAllo("Allo navigation is visible", async ({ alloPage }) => {
    await alloPage.logo.isVisible();
    await alloPage.catalog.isVisible();
    await alloPage.search.isVisible();
    await alloPage.searchButton.isVisible();
    await alloPage.cart.isVisible();
    await alloPage.favorite.isVisible();
    await alloPage.logIn.isVisible();
  });
  
  testAllo("Allo toolbar is visible", async ({ alloPage }) => {
    await alloPage.offlineShops.isVisible();
    await alloPage.promotions.isVisible();
    await alloPage.alloMoney.isVisible();
    await alloPage.alloSharing.isVisible();
    await alloPage.contacts.isVisible();
  });
  
  testAllo("Allo main content is visible", async ({ alloPage }) => {
    await alloPage.banner.isVisible();
    await alloPage.homeBanner.isVisible();
    await alloPage.homeCategories.isVisible();
    await alloPage.leadersOfSelling.scrollIntoViewIfNeeded();
    await alloPage.leadersOfSelling.isVisible();
    await alloPage.newProducts.scrollIntoViewIfNeeded();
    await alloPage.newProducts.isVisible();
  });
  
  testAllo("Allo footer is visible", async ({ alloPage }) => {
    await alloPage.footerAppsList.scrollIntoViewIfNeeded();
  
    await alloPage.footer.isVisible();
    await alloPage.footerEmail.isVisible();
    await alloPage.footerSubscribe.isVisible();
    await alloPage.footerSocial.isVisible();
    await alloPage.footerAppsList.isVisible();
  });
  
  testAllo("Allo footer info is visible", async ({ alloPage }) => {
    await alloPage.footerAllo.scrollIntoViewIfNeeded();
  
    await alloPage.footerAllo.isVisible();
    await alloPage.footerInfo.isVisible();
    await alloPage.footerBenefits.isVisible();
    await alloPage.footerComfort.isVisible();
    await alloPage.footerBussines.isVisible();
  });
})

