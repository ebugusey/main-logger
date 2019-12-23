import * as Knex from 'knex'
import { incrementedId } from './extensions/knex'

export async function up(db: Knex) {
    await db.schema
        .alterTable('bad_boobs', table => {
            incrementedId(table, 'id').alter()
            table.dropColumn('not_nice')
            table.dropIndex('message', 'idx_message')
        })
}

export async function down(db: Knex) {
    await db.schema
        .alterTable('bad_boobs', table => {
            table.specificType('id', 'bigint auto_increment').notNullable().alter()
            table.specificType('not_nice', 'tinyint(4)').defaultTo(0)
            table.index('message', 'idx_message')
        })
}
