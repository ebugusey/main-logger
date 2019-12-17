import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db, dataType) {
        await db.createTable('sources', {
            id: {
                allowNull: false,
                autoIncrement: true,
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
        await db.dropTable('sources')
    },
}

export = migration
