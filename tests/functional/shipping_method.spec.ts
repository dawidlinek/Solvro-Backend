import { test } from '@japa/runner'

test.group('Shipping methods', () => {
    test('Api returns shipping methods', async ({ client }) => {
        const response = await client.get('/api/v1/shipping-methods')

        response.assertStatus(200)
        response.assertBodyContains([
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
    })
})
