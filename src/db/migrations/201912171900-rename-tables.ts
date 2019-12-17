import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.sequelize.transaction(async transaction => {
            await db.renameTable('log', 'logs', { transaction })
            await db.renameTable('track', 'tracks', { transaction })
        })
    },

    async down(db) {
        await db.sequelize.transaction(async transaction => {
            await db.renameTable('logs', 'log', { transaction })
            await db.renameTable('tracks', 'track', { transaction })
        })
    },
}

export = migration
