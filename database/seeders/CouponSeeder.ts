import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Coupon from 'App/Models/Coupon'

export default class extends BaseSeeder {
  public async run() {
    await Coupon.create({
      name: 'Super coupon for 15zł',
      code: 'Scf15z',
      valueDiscount: 15,
    })

    await Coupon.create({
      name: '10% off all products',
      code: '10oAp',
      percentageDiscount: 10,
    })
  }
}
