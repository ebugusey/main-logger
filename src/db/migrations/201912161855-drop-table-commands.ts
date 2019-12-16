import { IMigration } from './types/migration'

const migration: IMigration = {
    async up(db) {
        await db.dropTable('commands')
    },

    async down(db, dataType) {
        await db.createTable('commands',
        {
            id: {
                type: dataType.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            command: dataType.STRING,
            date_insert: dataType.DATE,
            done: dataType.TINYINT,
            from: dataType.STRING,
            jid: dataType.STRING,
            where_to_answer: dataType.STRING,
        })
    },
}

export = migration
