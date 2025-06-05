class CartPage {
  constructor(page) {
    this.page = page;
  }

  async selecionarProduto() {
    const produto = this.page.getByRole('link', { name: /sony vaio i5/i });
    await produto.click();
  }

  async adicionarProdutoCarrinho() {
    const adicionarProdutoCarrinho = this.page.getByRole('link', {
      name: /add to cart/i,
    });
    await adicionarProdutoCarrinho.click();
  }

  async finalizarCompra() {
    await this.page.click('#cartur');
    await this.page.waitForSelector('button:has-text("Place Order")');
    await this.page.click('button:has-text("Place Order")');
    await this.page.fill('#name', 'teste');
    await this.page.fill('#card', 'teste');
    await this.page.click('button:has-text("Purchase")');
  }
}

module.exports = { CartPage };
