import { expect, type Locator, type Page } from '@playwright/test';

export class FuaPage {
  readonly page: Page;
  readonly catalog: Locator;
  readonly search: Locator;
  readonly searchButton: Locator;
  readonly cart: Locator;
  readonly logo: Locator;
  readonly contacts: Locator;
  readonly about: Locator;
  readonly payment: Locator;
  readonly delivery: Locator;
  readonly logIn: Locator;
  readonly comparison: Locator;
  readonly topBanner: Locator;
  readonly carouselBanner: Locator;
  readonly subcategories: Locator;
  readonly topSalesHeader: Locator;
  readonly topSalesProducts: Locator;
  readonly supportButton: Locator;
  readonly nameInput: Locator;
  readonly phonNumnerInput: Locator;
  readonly waitCallButton: Locator;
  readonly contactSupportButton: Locator;
  readonly guaranteeButton: Locator;
  readonly footer: Locator;
  readonly footerInfo: Locator;
  readonly footerContacts: Locator;
  readonly footerSocial: Locator;
  readonly footerLogo: Locator;

  constructor(page: Page) {
    this.page = page;
    this.catalog = page.locator('#f-header__burger');
    this.search = page.getByPlaceholder('Знайти легко. Пошук товару');
    this.searchButton = page.getByRole('button', { name: 'Submit' });
    this.cart = page.getByText('Кошик Купуйте і збирайте бонуси');
    this.logo = page.locator('.f-logo > svg > path').first();
    this.contacts = page.getByRole('banner').getByRole('link', { name: 'Контакти' });
    this.about = page.getByRole('banner').getByRole('link', { name: 'Контакти' });
    this.payment = page.getByRole('banner').getByRole('link', { name: 'Оплата' });
    this.delivery = page.getByRole('banner').getByRole('link', { name: 'Доставка' });
    this.logIn = page.getByRole('link', { name: 'Увійти в кабінет' });
    this.comparison = page.getByText('Порівняння (0)')
    this.topBanner = page.getByText('Порівняння (0)')
    this.carouselBanner = page.locator('//div[class="swiper-wrapper"]').first()
    this.subcategories = page.locator('//div[class="index_main_subcategories f-container"]')
    this.topSalesHeader = page.getByText('ТОП продажів')
    this.topSalesProducts = page.locator('//div[class="index_top"]')
    this.supportButton = page.locator('.main_btn')
    this.nameInput = page.locator('#callback_aside_form input[name="name"]')
    this.phonNumnerInput = page.getByPlaceholder('+38 (0XX) XXX-XX-XX')
    this.waitCallButton = page.getByRole('button', { name: 'Чекаю дзвінка' })
    this.contactSupportButton = page.getByRole('button', { name: 'Звернення у службу підтримки' })
    this.guaranteeButton = page.getByRole('button', { name: 'Повернення, гарантія та сервіс' })
    this.footer = page.locator('//footer')
    this.footerInfo = page.locator('//div[class="f-footer__col f-footer__col--menu"]')
    this.footerContacts = page.locator('//div[class="f-footer__col f-footer__col--contacts"]')
    this.footerSocial = page.getByRole('contentinfo').getByRole('list').first()
    this.footerLogo = page.locator('a').filter({ hasText: '.st0{clip-path:url(#SVGID_2_' })
  }

  async goto() {
    await this.page.goto('https://f.ua/');
  }
}