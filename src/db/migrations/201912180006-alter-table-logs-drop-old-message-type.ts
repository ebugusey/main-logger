import { DataTypes } from 'sequelize'
import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.removeColumn('logs', 'old_message_type')
    },

    async down(db) {
        await db.addColumn(
            'logs', 'old_message_type',
            DataTypes.STRING(1),
        )
    },
}

export = migration
