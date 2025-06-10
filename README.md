# Repositorio de teste automnatizado e2e - Playwright

Este repositório contém testes End-to-End (E2E) desenvolvidos com Playwright e Gherkin (Cucumber). Com o objetivo é validar funcionalidades de uma aplicação web, permitindo que os testes sejam escritos de forma clara em linguagem natural utilizando os cenários de BDD (Behavior-Driven Development). E podemos garantir que os fluxos tenham o comportamento esperado.

Este repositório contém teste e2e utilizando [Playwright](https://playwright.dev/) com JavaScript e para os cenários de testes foi utilizado o cucumber (Gherkin)

### Tecnologias utilizadas
- [Playwright](https://playwright.dev/docs/ci-intro): Framework de automação para testes E2E.
- [Cucumber-JS](https://cucumber.io/docs/installation/javascript/): Ferramenta para BDD arquivos Gherkin.
- [Node.js](https://nodejs.org/): Recomenda-se usar a versão LTS.
- npm(instalado com o Node.js) ou [Yarn](https://classic.yarnpkg.com/en/docs/install#mac-stable): Gerenciadores de pacotes.

## Configuração e Instalação
Siga os passos abaixo para configurar o projeto localmente:

1. Clone do repositório:
   ``` sh
   git clone https://github.com/luizemarin/teste2eplaywright.git
   cd teste2eplaywright
   ```

2. Instalar as dependências
     ```sh
     npm install
     # ou
    yarn install
     ```

### Como executar os testes

- Executar os testes:
  ```sh
  npm test
  # ou
  yarn test
  ```
Obs.: Esse script está configurado no arquivo package.json e irá rodar os testes

### Estrutura do Projeto
A estrutura do projeto é organizada da seguinte forma, com destaque para os arquivos Gherkin:

   ```
   teste2eplaywright/
   ├── node_modules/                # Dependências do projeto
   ├── src/                         # Pasta principal
   │    ├── pages/                  # Funcionalidades utilizados no projeto
   │    │   │   ├── cartPage.js
   │    │   │   ├── homePage.js
   │    │   │   └── loginPage.js
   │    ├── steps/                  # Implementações dos passos Gherkin (step definitions)
   │    │   │   └── test.steps.js
   │    ├── support/                # Scripts a serem utilizados em todo o projeto
   │    │   │   ├── global.js
   │    │   │   └── hooks.js
   │    └── test.feature            # Arquivo com o teste escrito com gherkin(BDD)
   ├── playwright.config.ts         # Configurações do Playwright
   ├── package.json                 # Metadados e scripts do projeto
   ├── README.md                    # Este arquivo
   └── .gitignore                   # Arquivos e pastas a serem ignorados pelo Git
   ```

## Referências
- [Documentação do playwright](https://playwright.dev/docs/intro)
- [Documentação do gherkin](https://cucumber.io/docs/gherkin/)
