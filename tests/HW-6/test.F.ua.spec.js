import { testFua } from "../../fixtures/page_fixtures";

testFua.describe("F.ua tests", () => {
  testFua("F.ua toolbar is visible", async ({ fUaPage, page }) => {
    await fUaPage.contacts.isVisible();
    await fUaPage.about.isVisible();
    await fUaPage.payment.isVisible();
    await fUaPage.delivery.isVisible();
    await fUaPage.logIn.isVisible();
    await fUaPage.comparison.isVisible();
  });

  testFua("F.ua navigation is visible", async ({ fUaPage, page }) => {
    await fUaPage.logo.isVisible();
    await fUaPage.catalog.isVisible();
    await fUaPage.search.isVisible();
    await fUaPage.searchButton.isVisible();
    await fUaPage.cart.isVisible();
  });

  testFua("F.ua main content is visible", async ({ fUaPage, page }) => {
    await fUaPage.topBanner.isVisible();
    await fUaPage.carouselBanner.isVisible();
    await fUaPage.subcategories.isVisible();
    await fUaPage.topSalesHeader.isVisible();
    await fUaPage.topSalesProducts.isVisible();
  });

  testFua("F.ua support is visible", async ({ fUaPage, page }) => {
    await fUaPage.supportButton.isVisible();
    await fUaPage.supportButton.click();
    await fUaPage.nameInput.isVisible();
    await fUaPage.phonNumnerInput.isVisible();
    await fUaPage.waitCallButton.isVisible();
    await fUaPage.contactSupportButton.isVisible();
    await fUaPage.guaranteeButton.isVisible();
  });

  testFua("F.ua footer is visible", async ({ fUaPage, page }) => {
    await fUaPage.footerSocial.scrollIntoViewIfNeeded();

    await fUaPage.footer.isVisible();
    await fUaPage.footerContacts.isVisible();
    await fUaPage.footerInfo.isVisible();
    await fUaPage.footerLogo.isVisible();
    await fUaPage.footerSocial.isVisible();
  });
});
