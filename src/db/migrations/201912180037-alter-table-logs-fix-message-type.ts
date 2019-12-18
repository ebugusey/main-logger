import { DataTypes } from 'sequelize'
import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.changeColumn('logs', 'message_type', {
            type: new DataTypes.INTEGER(),
            allowNull: false,
        })
        await db.changeColumn('logs', 'message_type', {
            type: DataTypes.INTEGER,
            references: {
                model: 'message_types',
                key: 'id',
            },
        })
    },

    async down(db) {
        await db.changeColumn('logs', 'message_type', {
            type: DataTypes.INTEGER,
            allowNull: true,
        })
    },
}

export = migration
