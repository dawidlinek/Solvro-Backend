import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'cart_products'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('cart_id').references('carts.id')
      table.integer('product_id').references('product.id')

      table.integer('quantity')
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
