import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.dropTable('jids')
    },

    async down(db, dataType) {
        await db.createTable('jids',
        {
            id: {
                type: dataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            jid: dataType.STRING,
            nick: dataType.STRING,
            date_insert: {
                type: 'timestamp',
                defaultValue:
                    db.sequelize.Sequelize.literal('current_timestamp'),
            },
        })
    },
}

export = migration
