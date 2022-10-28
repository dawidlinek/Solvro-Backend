import Encryption from '@ioc:Adonis/Core/Encryption'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Cart from 'App/Models/Cart'
import StoreCartValidator from 'App/Validators/StoreCartValidator'
import Env from '@ioc:Adonis/Core/Env'

export default class CartsController {
  public async show({ session, response }: HttpContextContract) {
    let cartId = session.get('cart_id')

    if (!cartId) {
      response.abort(404)
    }

    let cart: any = await Cart.query() // ps. sorry for using any here
      .where('carts.id', cartId)
      .preload('coupon')
      .preload('shippingMethod')
      .preload('products', (q) => q.pivotColumns(['quantity']))
      .first()

    if (!cart) {
      return response.abort(404)
    }

    cart = cart.serialize()

    cart.cart_sum = cart?.products.reduce((sum, product) => sum + product.price_sum, 0)

    cart.cart_sum += cart.shippingMethod.price

    cart.cart_sum = cart.cart_sum.toFixed(2)

    if (cart.coupon) {
      if (cart.coupon.value_discount) {
        cart.cart_sum_after_discount = cart.cart_sum - cart.coupon.value_discount
      }
      if (cart.coupon.percentage_discount) {
        cart.cart_sum_after_discount = (
          cart.cart_sum *
          (1 - cart.coupon.percentage_discount / 100)
        ).toFixed(2)
      }
    }

    cart.sharable_link = `${process.env.APP_DOMAIN}/api/v1/carts/share/${Encryption.encrypt(
      cart.id
    )}`
    return cart
  }

  public async store({ request, session }: HttpContextContract) {
    let data = await request.validate(StoreCartValidator)
    let cart = await Cart.find(session.get('cart_id') ?? '')

    if (!cart) {
      cart = await Cart.create(data)
    } else {
      cart.merge(data).save()
    }

    let products = {}
    for (let product of data.products.filter((product) => product.quantity > 0)) {
      products[product.id] = { quantity: product.quantity }
    }

    cart.related('products').sync(products)
    session.put('cart_id', cart.id)
    return { message: 'Cart updated' }
  }

  public async share(context: HttpContextContract) {
    let cartId = Encryption.decrypt(context.request.param('cart'))
    let sessionCartId = context.session.get('cart_id')
    let cart = await Cart.findOrFail(cartId)
    let newCart
    if (sessionCartId) {
      newCart = await Cart.find(sessionCartId)
    }
    if (!newCart) {
      newCart = await Cart.create({ shippingMethodId: cart.shippingMethodId })
    }
    await cart.load('products')

    let products = {}
    for (let product of cart.products) {
      products[product.id] = { quantity: product.$extras.pivot_quantity }
    }

    newCart.related('products').sync(products)

    context.session.put('cart_id', newCart.id)

    return { message: 'Cart loaded', data: await this.show(context) }
  }
}
