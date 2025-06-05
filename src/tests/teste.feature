Feature: Compra de produto

  Scenario: Usuário adiciona produto ao carrinho e finaliza compra como guest
    Given que estou na pagina inicial
    And realizo o login
    When navego até a página de laptops
    And seleciono um notebook
    Then devo adicionar o produto no carrinho
    And deve ser finalizado a compra do produto