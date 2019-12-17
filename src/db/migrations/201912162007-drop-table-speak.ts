import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.dropTable('speak')
    },

    async down(db, dataType) {
        await db.createTable('speak',
        {
            id: {
                type: dataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            date: {
                type: 'timestamp',
                defaultValue:
                    db.sequelize.Sequelize.literal('current_timestamp'),
            },
            nick: dataType.STRING,
            jid: dataType.STRING,
            active: dataType.TINYINT,
        })
    },
}

export = migration
