import { test, expect } from '@playwright/test';
import * as dotenv from 'dotenv';

dotenv.config();

test('Login exitoso', async ({ page }) => {
    // Ir a la página de login
    await page.goto('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Default.aspx?ReturnUrl=%2falumnosnotas%2fProteccion%2fDefault.aspx');

    // Llenar los campos del formulario
    await page.fill('#ctl00_ContentPlaceHolder1_TextBox1', process.env.USER || '');
    await page.fill('#ctl00_ContentPlaceHolder1_Clave', process.env.PASS || '');


    await page.click('#ctl00_ContentPlaceHolder1_ImageButton1');
    await page.waitForURL('https://sistemacuenca.ucp.edu.ar/alumnosnotas/Proteccion/Inicio.aspx', {timeout: 10000});
    await expect (page.locator('text="Ojeda Mathe, Augusto - Ingeniería en Sistemas de Información(R. M. Nº 556/17) - Central"')).toBeVisible();

});
