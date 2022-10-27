import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'coupons'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.string('name')
      table.string('code', 200).index().unique()

      table.float('value_discount').nullable()
      table.float('percentage_discount').nullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
