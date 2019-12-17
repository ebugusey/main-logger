import { MessageType } from '../models'
import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.bulkInsert('message_types', [
            { id: MessageType.value.Message, description: 'Сообщение' },
            { id: MessageType.value.Command, description: 'Команда' },
            { id: MessageType.value.State, description: 'Состояние' },
        ])
    },

    async down() {
        return
    },
}

export = migration
