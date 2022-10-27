import { test } from '@japa/runner'
import Product from 'App/Models/Product'
import ProductFactory from 'Database/factories/ProductFactory'

test.group('Products', () => {
  test('Factory creates valid product', async ({ assert }) => {
    let product = await ProductFactory.create()
    assert.exists(product.id)
    assert.exists(product.name)
    assert.exists(product.price)
  })

  test('Api returns products', async ({ client }) => {
    const response = await client.get('/api/v1/products')

    response.assertStatus(200)
    response.assertBodyContains([(await Product.first())?.serialize()])
  })
})
