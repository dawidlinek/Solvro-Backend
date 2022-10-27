import { test } from '@japa/runner'

test.group('Coupons', () => {
    test('Api returns coupons', async ({ client }) => {
        const response = await client.get('/api/v1/coupons')

        response.assertStatus(200)
        response.assertBodyContains([
            {
                name: 'Super coupon for 15zł',
                code: 'Scf15z',
                value_discount: 15,
            },
            {
                name: '10% off all products',
                code: '10oAp',
                percentage_discount: 10,
            },
        ])
    })
})
