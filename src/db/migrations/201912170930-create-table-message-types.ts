import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db, dataType) {
        await db.createTable('message_types', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: dataType.INTEGER,
            },
            description: {
                allowNull: false,
                type: dataType.STRING,
            },
        })
    },
    async down(db) {
        await db.dropTable('message_types')
    },
}

export = migration
