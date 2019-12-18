import { Op } from 'sequelize'
import { MessageType } from '../models'
import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.sequelize.transaction(async transaction => {
            await db.bulkUpdate('logs',
                { message_type: MessageType.value.Message },
                { old_message_type: 'M' },
                { transaction },
            )
            await db.bulkUpdate('logs',
                { message_type: MessageType.value.State },
                { old_message_type: 'P' },
                { transaction },
            )
            await db.bulkUpdate('logs',
                { message_type: MessageType.value.Message },
                // tslint:disable-next-line: no-null-keyword
                { message_type: { [Op.is]: null } },
                { transaction },
            )
        })
    },

    async down(db) {
        await db.sequelize.transaction(async transaction => {
            await db.bulkUpdate('logs',
                { old_message_type: 'M' },
                { message_type: MessageType.value.Message },
                { transaction },
            )
            await db.bulkUpdate('logs',
                { old_message_type: 'P' },
                { message_type: MessageType.value.State },
                { transaction },
            )
            await db.bulkUpdate('logs',
                { old_message_type: 'M' },
                // tslint:disable-next-line: no-null-keyword
                { old_message_type: { [Op.is]: null } },
                { transaction },
            )
        })
    },
}

export = migration
