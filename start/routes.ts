/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.group(() => {
  Route.get('products', 'v1/ProductsController')
  Route.get('coupons', 'v1/CouponsController')
  Route.get('shipping-methods', 'v1/ShippingMethodsController')
  Route.group(() => {
    Route.get('share/:cart', 'v1/CartsController.share')
    Route.post('', 'v1/CartsController.store')
    Route.get('', 'v1/CartsController.show')
  }).prefix('carts')
}).prefix('api/v1')
