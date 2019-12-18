import { DataTypes } from 'sequelize'
import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.sequelize.transaction(async transaction => {
            await db.renameColumn(
                'logs',
                'message_type', 'old_message_type',
                { transaction },
            )

            await db.addColumn(
                'logs', 'message_type',
                DataTypes.INTEGER,
                { transaction },
            )
        })
    },

    async down(db) {
        await db.sequelize.transaction(async transaction => {
            await db.removeColumn('logs', 'message_type', { transaction })
            await db.renameColumn(
                'logs',
                'old_message_type', 'message_type',
                { transaction },
            )
        })
    },
}

export = migration
