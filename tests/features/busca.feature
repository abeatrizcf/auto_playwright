Feature: Busca na web pelo Copera AI

Como uma usuária da internet
Eu quero pesquisar pelo playwrither no navegador
Para receber o link do site oficial da biblioteca

Scenario: Encontrar o site oficial do Playwright
    Given que eu estou na página inicial do Google
    When eu pesquiso pelo termo "Playwright"
    Then o resultado da busca deve conter o link "https://playwright.dev/"