import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Coupon from 'App/Models/Coupon'

export default class CouponsController {
  public async handle({}: HttpContextContract) {
    return await Coupon.all()
  }
}
