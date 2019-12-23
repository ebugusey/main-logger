import * as Knex from 'knex'
import { addIncrementedId } from './extensions/knex'

export async function up(db: Knex) {
    await db.schema
        .dropTable('speak')
}

export async function down(db: Knex) {
    const builder = db.schema
        .createTable('speak', table => {
            table.timestamp('date').notNullable()
                .defaultTo(db.raw('current_timestamp()'))
            table.string('nick')
            table.string('jid')
            table.specificType('active', 'tinyint(4)')
        })
    addIncrementedId(builder, 'speak', 'id')

    await builder
}
