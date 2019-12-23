import * as Knex from 'knex'
import { MessageType } from '../models'

export async function up(db: Knex) {
    await db.batchInsert('message_types', [
        { id: MessageType.value.Message, description: 'Сообщение' },
        { id: MessageType.value.Command, description: 'Команда' },
        { id: MessageType.value.State, description: 'Состояние' },
    ])
}

export async function down() {
    return
}
