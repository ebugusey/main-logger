import * as Knex from 'knex'
import { addIncrementedId } from './extensions/knex'

export async function up(db: Knex) {
    await db.schema
        .dropTable('commands')
}

export async function down(db: Knex) {
    const builder = db.schema
        .createTable('commands', table => {
            table.string('command')
            table.dateTime('date_insert')
            table.specificType('done', 'tinyint(4)')
            table.string('from')
            table.string('jid')
            table.string('where_to_answer')
        })
    addIncrementedId(builder, 'commands', 'id')

    await builder
}
