# 🚀 Projeto Newsletter Consent

Este projeto é uma aplicação desenvolvida em **Angular 18**, utilizando o `json-server` como uma API REST fake para simular dados e requisições HTTP e facilitar o desenvolvimento local.

---
## Requisitos

Antes de iniciar, certifique-se de que possui instalado em sua máquina:

- [Node.js](https://nodejs.org/en/) (recomendado: versão 18 ou superior)
- [Angular CLI](https://angular.io/cli)

Se ainda não tiver o Angular CLI instalado, execute:

```bash
npm install -g @angular/cli
```

## Instalação do projeto

1. Clone o Repositório:
    ```bash
    git clone https://github.com/Felipe-ABS/newsletter-consent.git
    cd newsletter-consent
    ```
2. Instale as Dependências
    ```bash
    npm install
    ```

## Iniciando a API fake com Json-server
- Esse projeto utiliza `json-server` para simular uma API Rest, permitindo realizar requisições HTTP. Na raiz do projeto se encontra a pasta `db`, onde se encontrará o arquivo que contém os dados mockados, e é onde será armazenado os dados inseridos durante o uso da aplicação.
- Para iniciar a API, use o seguinte comando que já está configurado na pasta `package.json`:
    ```bash
    npm run database
    ```
- A API ficará disponível no endereço `https://localhost:3000` por padrão.

## Rodando a aplicação ANGULAR.
- Em uma nova aba do terminal, execute o seguinte comando:
    ```bash
    npm start
    ```
- Ao executá-lo, a aplicação ficará disponível no endereço `https://localhost:4200` por padrão.
