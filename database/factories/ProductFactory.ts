import Product from 'App/Models/Product'
import Factory from '@ioc:Adonis/Lucid/Factory'

export default Factory.define(Product, ({ faker }) => {
  return {
    name: faker.commerce.productName(),
    price: faker.datatype.number({ min: 1, max: 1000, precision: 0.01 }),
  }
}).build()
