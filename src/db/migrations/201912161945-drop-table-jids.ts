import * as Knex from 'knex'
import { addIncrementedId } from './extensions/knex'

export async function up(db: Knex) {
    await db.schema
        .dropTable('jids')
}

export async function down(db: Knex) {
    const builder = db.schema
        .createTable('jids', table => {
            table.string('jid')
            table.string('nick')
            table.timestamp('date_insert').notNullable()
                .defaultTo(db.raw('current_timestamp()'))
        })
    addIncrementedId(builder, 'jids', 'id')

    await builder
}
