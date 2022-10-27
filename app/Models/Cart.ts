import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Coupon from './Coupon'
import ShippingMethod from './ShippingMethod'
import Product from './Product'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public couponId: number

  @hasOne(() => Coupon)
  public coupon: HasOne<typeof Coupon>

  @column()
  public shippingMethodId: number

  @hasOne(() => ShippingMethod)
  public shippingMethod: HasOne<typeof ShippingMethod>

  @manyToMany(() => Product, {
    pivotTable: 'cart_products',
  })
  public products: ManyToMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
