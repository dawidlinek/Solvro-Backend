import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Product from 'App/Models/Product'

export default class ProductsController {
  public async handle({}: HttpContextContract) {
    return await Product.all()
  }
}
