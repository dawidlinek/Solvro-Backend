import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Product extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public price: number

  public serializeExtras() {
    if (!this.$extras.pivot_quantity) {
      return {}
    }

    return {
      quantity: this.$extras.pivot_quantity,
      price_sum: this.$extras.pivot_quantity * this.price,
    }
  }

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
