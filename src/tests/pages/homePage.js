class HomePage {
  constructor(page) {
    this.page = page;
  }

  async selecionarMenuCategoria() {
    const loginButton = this.page.getByRole('link', { name: /laptops/i });
    await loginButton.click();
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
}

module.exports = { HomePage };
