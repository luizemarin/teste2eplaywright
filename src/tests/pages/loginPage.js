class LoginPage {
  constructor(page) {
    this.page = page;
  }

  async preencherLogin(email, password) {
    const loginButton = this.page.getByRole('link', { name: /log in/i });
    await loginButton.click();
    await this.page.fill('#loginusername', email);
    await this.page.fill('#loginpassword', password);
    await this.page.getByRole('button', { name: /log in/i }).click();
  }
}

module.exports = { LoginPage };
