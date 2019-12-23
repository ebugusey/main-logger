import * as Knex from 'knex'
import { Source } from '../models'

export async function up(db: Knex) {
    await db.batchInsert('sources', [
        { id: Source.value.XMPP, description: 'XMPP' },
        { id: Source.value.Telegram, description: 'Telegram' },
    ])
}

export async function down() {
    return
}
