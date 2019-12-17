import { Source } from '../models'
import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.bulkInsert('sources', [
            { id: Source.value.XMPP, description: 'XMPP' },
            { id: Source.value.Telegram, description: 'Telegram' },
        ])
    },

    async down() {
        return
    },
}

export = migration
