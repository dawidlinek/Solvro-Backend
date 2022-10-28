# Solvro-Backend

[![made-with-adonisjs](https://img.shields.io/badge/Made%20with-AdonisJS-5a45ff.svg)](https://adonisjs.com/)
[![made-for-Solvro](https://img.shields.io/badge/Made%20for-Solvro-80B3FF.svg)](https://github.com/Solvro/Rekrutacja2022)
![Testing](https://github.com/dawidlinek123/Solvro-Backend/actions/workflows/CI&CD.yml/badge.svg)

<img src="https://raw.githubusercontent.com/Solvro/Rekrutacja2022/master/assets/logo_solvro.png" align="right"
     alt="SolVro" width="120" height="120">

## Functionalities:

- Add product to cart
- Remove product from cart
- Change quantity of product in the cart
- Add coupon
- Display cart information
- Share cart by link

</p>

## Used technologies

- Adonis js - fullstack framework for node js.
- MySql database - for storing carts, products and coupons.

## Project structure

<pre>
📦Solvro-Backend
 ┣ 📂.github
 ┃ ┗ 📂workflows
 ┃ ┃ ┗ 📜CI&CD.yml - test and deploy workflow
 ┣ 📂app
 ┃ ┣ 📂<b> Controllers </b>
 ┃ ┃ ┗ 📂Http
 ┃ ┃ ┃ ┗ 📂v1
 ┃ ┃ ┃ ┃ ┣ 📜CartsController.ts
 ┃ ┃ ┃ ┃ ┣ 📜CouponsController.ts
 ┃ ┃ ┃ ┃ ┣ 📜ProductsController.ts
 ┃ ┃ ┃ ┃ ┗ 📜ShippingMethodsController.ts
 ┃ ┣ 📂<b> Models </b>
 ┃ ┃ ┣ 📜Cart.ts
 ┃ ┃ ┣ 📜Coupon.ts
 ┃ ┃ ┣ 📜Product.ts
 ┃ ┃ ┗ 📜ShippingMethod.ts
 ┃ ┗ 📂<b> Validators </b>
 ┃ ┃ ┗ 📜StoreCartValidator.ts
 ┣ 📂commands
 ┃ ┗ 📜index.ts
 ┣ 📂config
 ┃ ┣ 📜app.ts
 ┃ ┣ 📜bodyparser.ts
 ┃ ┣ 📜cors.ts
 ┃ ┣ 📜database.ts
 ┃ ┣ 📜drive.ts
 ┃ ┣ 📜hash.ts
 ┃ ┗ 📜session.ts
 ┣ 📂contracts
 ┃ ┣ 📜drive.ts
 ┃ ┣ 📜env.ts
 ┃ ┣ 📜events.ts
 ┃ ┣ 📜hash.ts
 ┃ ┗ 📜tests.ts
 ┣ 📂database
 ┃ ┣ 📂factories
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜ProductFactory.ts
 ┃ ┣ 📂<b> migrations </b>
 ┃ ┃ ┣ 📜1666883185132_products.ts
 ┃ ┃ ┣ 📜1666885711897_coupons.ts
 ┃ ┃ ┣ 📜1666886361017_shipping_methods.ts
 ┃ ┃ ┣ 📜1666892374004_carts.ts
 ┃ ┃ ┗ 📜1666892457435_cart_products.ts
 ┃ ┗ 📂<b> seeders</b>
 ┃ ┃ ┣ 📜CouponSeeder.ts
 ┃ ┃ ┣ 📜ProductSeeder.ts
 ┃ ┃ ┗ 📜ShippingMethodSeeder.ts
 ┣ 📂Exceptions
 ┃ ┗ 📜Handler.ts
 ┣ 📂providers
 ┃ ┗ 📜AppProvider.ts
 ┣ 📂start
 ┃ ┣ 📜kernel.ts
 ┃ ┗ 📜routes.ts
 ┣ 📂<b>tests</b>
 ┃ ┣ 📂functional
 ┃ ┃ ┣ 📜cart.spec.ts
 ┃ ┃ ┣ 📜coupon.spec.ts
 ┃ ┃ ┣ 📜product.spec.ts
 ┃ ┃ ┗ 📜shipping_method.spec.ts
 ┃ ┣ 📜.editorconfig
 ┃ ┗ 📜bootstrap.ts
 ┣ 📜.adonisrc.json
 ┣ 📜.editorconfig
 ┣ 📜.env
 ┣ 📜.env.example
 ┣ 📜.env.test
 ┣ 📜.gitignore
 ┣ 📜.prettierignore
 ┣ 📜ace
 ┣ 📜ace-manifest.json
 ┣ 📜env.ts
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜server.ts
 ┣ 📜test.ts
 ┗ 📜tsconfig.json
  </pre>

## Installation

First install application:

```bash
npm install
```

Then copy rename .env.example file to .env and put your config inside.

Migrate and seed database:

```bash
node ace migration:run
node ace db:seed
```

## Using

In development:

```bash
node ace serve --watch
```

In production:

```bash
node ace build
node dist/server.js
```

## Testing

```bash
node ace test
```

## Documentation 

API documentation can be found here:
https://documenter.getpostman.com/view/23919868/2s8YK9KkZQ

## Live demo

This application is deployed on https://api.solvro.linek.dev
