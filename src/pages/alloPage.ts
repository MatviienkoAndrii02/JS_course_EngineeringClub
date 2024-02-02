import { expect, type Locator, type Page } from '@playwright/test';

export class AlloPage {
  readonly page: Page;
  readonly catalog: Locator;
  readonly search: Locator;
  readonly searchButton: Locator;
  readonly cart: Locator;
  readonly logo: Locator;
  readonly contacts: Locator;
  readonly alloMoney: Locator;
  readonly promotions: Locator;
  readonly offlineShops: Locator;
  readonly logIn: Locator;
  readonly favorite: Locator;
  readonly alloSharing: Locator;
  readonly banner: Locator;
  readonly homeBanner: Locator;
  readonly homeCategories: Locator;
  readonly leadersOfSelling: Locator;
  readonly newProducts: Locator;
  readonly footer: Locator;
  readonly footerEmail: Locator;
  readonly footerSubscribe: Locator;
  readonly footerSocial: Locator;
  readonly footerAppsList: Locator;

  readonly footerAllo: Locator;
  readonly footerInfo: Locator;
  readonly footerBenefits: Locator;
  readonly footerComfort: Locator;
  readonly footerBussines: Locator;

  constructor(page: Page) {
    this.page = page;
    this.catalog = page.getByText('Каталог', { exact: true })
    this.search = page.getByPlaceholder('Пошук товарів')
    this.searchButton = page.locator('//form[class="search-form__form"]/button[type="submit"]')
    this.cart = page.getByLabel('Кошик')
    this.logo = page.getByRole('banner').getByRole('link', { name: 'Интернет-Магазин Allo' })
    this.contacts = page.getByText("Зв'язатися з нами");
    this.alloSharing = page.locator('//a[href="https://allo.ua/ua/tradein/"]')
    this.alloMoney = page.locator('//a[href="https://allo.ua/ua/loyalty-program/"]')
    this.promotions = page.locator('//a[href="https://allo.ua/ua/events-and-discounts/"]')
    this.offlineShops = page.getByText("Магазини");
    this.logIn = page.getByLabel('Профіль')
    this.favorite = page.getByLabel('Обране')
    this.banner = page.locator('//picture[class="home-tiny-banner__image"]')
    this.homeBanner = page.locator('//picture[div="home-banner"]')
    this.homeCategories = page.locator('//picture[div="h-cat snap-slider"]')
    this.leadersOfSelling = page.getByRole('heading', { name: 'Новинки' })
    this.newProducts = page.getByRole('heading', { name: 'Краща цiна' })
    this.footer = page.locator('//div[class="footer footer--home"]')
    this.footerEmail = page.getByPlaceholder('Електронна пошта')
    this.footerSubscribe = page.getByRole('button', { name: 'Підписатися' })
    this.footerSocial = page.locator('.social-list__content')
    this.footerAppsList = page.locator('.footer__apps-list')
    this.footerAllo = page.getByText('АЛЛО Вакансії Новини Про нас Мережа магазинів Контакти')
    this.footerInfo = page.getByText('Інформація Доставка та оплата Гарантія та сервіс Блог Питання та відповіді Умови')
    this.footerBenefits = page.getByText('Вигода АЛЛО Гроші Fishka')
    this.footerComfort = page.getByText('Комфорт АЛЛО Експерт Онлайн АЛЛО Сервіси Аудіокниги АЛЛО Бібліотека')
    this.footerBussines = page.getByText('Бізнес АЛЛО Маркетплейс Стати партнером Кабінет партнера Корпоративний відділ')

    
  }

  async goto() {
    await this.page.goto('https://allo.ua/');
  }
}