const { Given, When, Then } = require('@cucumber/cucumber');
const { LoginPage } = require('../pages/loginPage');
const { HomePage } = require('../pages/homePage');
const { CartPage } = require('../pages/cartPage');

Given('que estou na pagina inicial', async function () {
  this.page = await this.browser.newPage();
  await this.page.goto('https://www.demoblaze.com/');
});

Given('realizo o login', async function () {
  const email = 'robbin428@uorak.com';
  const senha = 'senha123';

  this.loginPage = new LoginPage(this.page);
  await this.loginPage.preencherLogin(email, senha);
});

When('navego até a página de laptops', async function () {
  this.homePage = new HomePage(this.page);
  await this.homePage.selecionarMenuCategoria();
});

When('seleciono um notebook', async function () {
  this.cartPage = new CartPage(this.page);

  await this.cartPage.selecionarProduto();
});

Then('devo adicionar o produto no carrinho', async function () {
  this.cartPage = new CartPage(this.page);

  await this.cartPage.adicionarProdutoCarrinho();
  await this.page.once('dialog', (dialog) => dialog.accept());
  await this.page.waitForTimeout(1000);
});

Then('deve ser finalizado a compra do produto', async function () {
  this.cartPage = new CartPage(this.page);

  await this.cartPage.finalizarCompra();
});
