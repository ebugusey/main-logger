import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db, dataType) {
        await db.sequelize.transaction(async transaction => {
            await db.removeColumn('bad_boobs', 'not_nice', { transaction })
            await db.removeIndex('bad_boobs', 'idx_message', { transaction })
            await db.changeColumn('bad_boobs', 'id', {
                type: dataType.INTEGER,
            }, { transaction })
        })
    },

    async down(db, dataType) {
        await db.sequelize.transaction(async transaction => {
            await db.addColumn('bad_boobs', 'not_nice', {
                type: dataType.TINYINT,
                defaultValue: 0,
            }, { transaction })
            await db.addIndex('bad_boobs', {
                name: 'idx_message',
                fields: [ 'message' ],
                transaction,
            })
            await db.changeColumn('bad_boobs', 'id', {
                type: dataType.BIGINT,
            }, { transaction })
        })
    },
}

export = migration