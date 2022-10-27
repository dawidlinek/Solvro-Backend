import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ShippingMethod from 'App/Models/ShippingMethod'

export default class extends BaseSeeder {
  public async run() {
    await ShippingMethod.createMany([
      {
        name: 'Inpost',
        price: 8.99,
      },
      {
        name: 'DHL',
        price: 12,
      },
      {
        name: 'Personal Pickup',
        price: 0,
      },
    ])
  }
}
