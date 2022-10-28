import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Coupon extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public code: string

  @column()
  public valueDiscount?: number

  @column()
  public percentageDiscount?: number
}
