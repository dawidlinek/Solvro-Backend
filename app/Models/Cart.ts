import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  ManyToMany,
  manyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Coupon from './Coupon'
import ShippingMethod from './ShippingMethod'
import Product from './Product'

export default class Cart extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public couponId?: number | null

  @belongsTo(() => Coupon)
  public coupon: BelongsTo<typeof Coupon>

  @column()
  public shippingMethodId?: number | null

  @belongsTo(() => ShippingMethod)
  public shippingMethod: BelongsTo<typeof ShippingMethod>

  @manyToMany(() => Product, {
    pivotTable: 'cart_products',
    pivotColumns: ['quantity'],
  })
  public products: ManyToMany<typeof Product>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
