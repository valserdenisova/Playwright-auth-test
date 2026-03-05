import { test, expect } from '@playwright/test';
import { user } from '../user';

test('Успешная авторизация', async ({ page }) => {

  await page.goto('https://netology.ru');

  await page.click('text=Войти');

  await page.fill('input[name="email"]', user.email);
  await page.fill('input[name="password"]', user.password);

  await page.click('button[type="submit"]');

  await expect(page.locator('h2')).toBeVisible();

});

test('Неуспешная авторизация', async ({ page }) => {

  await page.goto('https://netology.ru');

  await page.click('text=Войти');

  await page.fill('input[name="email"]', 'wrong@email.com');
  await page.fill('input[name="password"]', 'wrongpassword');

  await page.click('button[type="submit"]');

  await expect(page.locator('text=Неправильный email или пароль')).toBeVisible();

});