import { test, expect } from "@playwright/test";
import { FuaPage } from "../src/pages/fUaPage.ts";
import { AlloPage } from "../src/pages/alloPage.ts";

test("F.ua toolbar is visible", async ({ page }) => {
  let fUaPage = new FuaPage(page);
  await fUaPage.goto();

  await fUaPage.contacts.isVisible();
  await fUaPage.about.isVisible();
  await fUaPage.payment.isVisible();
  await fUaPage.delivery.isVisible();
  await fUaPage.logIn.isVisible();
  await fUaPage.comparison.isVisible();
});

test("F.ua navigation is visible", async ({ page }) => {
  let fUaPage = new FuaPage(page);
  await fUaPage.goto();

  await fUaPage.logo.isVisible();
  await fUaPage.catalog.isVisible();
  await fUaPage.search.isVisible();
  await fUaPage.searchButton.isVisible();
  await fUaPage.cart.isVisible();
});

test("F.ua main content is visible", async ({ page }) => {
  let fUaPage = new FuaPage(page);
  await fUaPage.goto();

  await fUaPage.topBanner.isVisible();
  await fUaPage.carouselBanner.isVisible();
  await fUaPage.subcategories.isVisible();
  await fUaPage.topSalesHeader.isVisible();
  await fUaPage.topSalesProducts.isVisible();
});

test("F.ua support is visible", async ({ page }) => {
  let fUaPage = new FuaPage(page);
  await fUaPage.goto();

  await fUaPage.supportButton.isVisible();
  await fUaPage.supportButton.click()
  await fUaPage.nameInput.isVisible();
  await fUaPage.phonNumnerInput.isVisible();
  await fUaPage.waitCallButton.isVisible();
  await fUaPage.contactSupportButton.isVisible();
  await fUaPage.guaranteeButton.isVisible();
});

test("F.ua footer is visible", async ({ page }) => {
  let fUaPage = new FuaPage(page);
  await fUaPage.goto();
  await fUaPage.footerSocial.scrollIntoViewIfNeeded()
  
  await fUaPage.footer.isVisible();
  await fUaPage.footerContacts.isVisible();
  await fUaPage.footerInfo.isVisible();
  await fUaPage.footerLogo.isVisible();
  await fUaPage.footerSocial.isVisible();
});

test("Allo navigation is visible", async ({ page }) => {
  let alloPage = new AlloPage(page);
  await alloPage.goto();

  await alloPage.logo.isVisible();
  await alloPage.catalog.isVisible();
  await alloPage.search.isVisible();
  await alloPage.searchButton.isVisible();
  await alloPage.cart.isVisible();
  await alloPage.favorite.isVisible()
  await alloPage.logIn.isVisible()
});

test("Allo toolbar is visible", async ({ page }) => {
  let alloPage = new AlloPage(page);
  await alloPage.goto();

  await alloPage.offlineShops.isVisible();
  await alloPage.promotions.isVisible();
  await alloPage.alloMoney.isVisible();
  await alloPage.alloSharing.isVisible();
  await alloPage.contacts.isVisible();
});

test("Allo main content is visible", async ({ page }) => {
  let alloPage = new AlloPage(page);
  await alloPage.goto();

  await alloPage.banner.isVisible();
  await alloPage.homeBanner.isVisible();
  await alloPage.homeCategories.isVisible();
  await alloPage.leadersOfSelling.scrollIntoViewIfNeeded()
  await alloPage.leadersOfSelling.isVisible();
  await alloPage.newProducts.scrollIntoViewIfNeeded()
  await alloPage.newProducts.isVisible();
});

test("Allo footer is visible", async ({ page }) => {
  let alloPage = new AlloPage(page);
  await alloPage.goto();
  await alloPage.footerAppsList.scrollIntoViewIfNeeded()

  await alloPage.footer.isVisible();
  await alloPage.footerEmail.isVisible();
  await alloPage.footerSubscribe.isVisible();
  await alloPage.footerSocial.isVisible()
  await alloPage.footerAppsList.isVisible();

});

test("Allo footer info is visible", async ({ page }) => {
  let alloPage = new AlloPage(page);
  await alloPage.goto();
  await alloPage.footerAllo.scrollIntoViewIfNeeded()

  await alloPage.footerAllo.isVisible();
  await alloPage.footerInfo.isVisible();
  await alloPage.footerBenefits.isVisible();
  await alloPage.footerComfort.isVisible()
  await alloPage.footerBussines.isVisible();

});
