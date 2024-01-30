import { test, expect } from '@playwright/test';

test('Foxtrot has navigation', async ({ page }) => {
  await page.goto('https://www.foxtrot.com.ua/uk')

  await page.locator('#user-location-popup').getByText('Так').click()

  await expect(page.locator('.header-logo > a')).toBeVisible();
  await expect(page.getByText('Актуальне')).toBeVisible();
  await expect(page.getByRole('banner').getByText('Покупцям')).toBeVisible();
  await expect(page.getByText('Зв\'язатися')).toBeVisible();
  await expect(page.getByText('Увійдіть в особистий кабінет')).toBeVisible();
  await expect(page.getByText('Увійдіть в особистий кабінет')).toBeVisible();
  await expect(page.getByText('Кошик', { exact: true })).toBeVisible();
  await expect(page.getByText('Ваші бонуси')).toBeVisible();
  await expect(page.locator('#header-favorite-popup i').nth(1)).toBeVisible();
  await expect(page.locator('.header-favorite__icon').first()).toBeVisible();
})

test('Foxtrot search', async ({ page }) => {
  await page.goto('https://www.foxtrot.com.ua/uk')

  await page.locator('#user-location-popup').getByText('Так').click()

  const foxtrotSearch = await page.getByPlaceholder('Я шукаю');
  await foxtrotSearch.fill('Навушники')
  await page.keyboard.press('Enter')
})

test('Foxtrot has categories', async ({ page }) => {
  await page.goto('https://www.foxtrot.com.ua/uk')

  await page.locator('#user-location-popup').getByText('Так').click()

  await expect(page.getByRole('link', { name: 'Смартфони', exact: true }).first()).toBeVisible();
  await expect(page.getByRole('link', { name: 'Техніка для кухні' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Техніка для дому' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Ноутбуки, ПК, планшети' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Телевізори, аудіотехніка' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Для геймерів' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Смарт-гаджети' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Фото, відео, авто' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Дім, сад' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Посуд' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Спорт і туризм' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Інструмент', exact: true })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Товари для дітей' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Всі категорії' })).toBeVisible();
})