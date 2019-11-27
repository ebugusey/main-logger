import { promises as fs } from 'fs'
import * as path from 'path'
import { IMigration } from './migration'

const migration: IMigration = {
    async up(db) {
        const baseline = path.resolve(__dirname, 'baseline.sql')
        const baselineQuery = await fs.readFile(baseline, { encoding: 'utf8' })

        await db.sequelize.transaction(async transaction => {
            await db.sequelize.query(baselineQuery, { transaction })
        })
    },
    async down(db) {
        await db.dropAllTables()
    },
}

export = migration
