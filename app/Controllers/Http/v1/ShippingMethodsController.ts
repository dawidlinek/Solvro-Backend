import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import ShippingMethod from 'App/Models/ShippingMethod'

export default class ShippingMethodsController {
  public async handle({}: HttpContextContract) {
    return await ShippingMethod.all()
  }
}
