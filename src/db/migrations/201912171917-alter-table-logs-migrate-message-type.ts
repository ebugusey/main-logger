import { Op } from 'sequelize'
import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db, dataType) {
        await db.sequelize.transaction(async transaction => {
            await db.renameColumn(
                'logs',
                'message_type', 'old_message_type',
                { transaction },
            )

            await db.addColumn('logs', 'message_type', dataType.INTEGER)

            await db.bulkUpdate(
                'logs',
                {
                    message_type: 0,
                },
                {
                    old_message_type: 'M',
                },
            )

            await db.bulkUpdate(
                'logs',
                { message_type: 0 },
                { old_message_type: 'M' },
                { transaction },
            )
            await db.bulkUpdate(
                'logs',
                { message_type: 2 },
                { old_message_type: 'P' },
                { transaction },
            )
            await db.bulkUpdate(
                'logs',
                { message_type: 0 },
                // tslint:disable-next-line: no-null-keyword
                { message_type: null },
            )
        })
    },

    async down() {
        return
    },
}
