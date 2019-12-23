import * as Knex from 'knex'

export async function up(db: Knex) {
    await db.schema
        .createTable('message_types', table => {
            table.integer('id').notNullable().primary()
            table.string('description').notNullable()
        })
}

export async function down(db: Knex) {
    await db.schema
        .dropTable('message_types')
}
