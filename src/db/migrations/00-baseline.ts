import { promises as fs } from 'fs'
import * as Knex from 'knex'
import * as path from 'path'

export async function up(db: Knex) {
    const baseline = path.resolve(__dirname, 'scripts/baseline.sql')
    const baselineQuery = await fs.readFile(baseline, { encoding: 'utf8' })

    await db.schema.raw(baselineQuery)
}

export async function down(db: Knex) {
    await db.schema
        .dropTable('bad_boobs')
        .dropTable('commands')
        .dropTable('jids')
        .dropTable('log')
        .dropTable('speak')
        .dropTable('track')
        .dropTable('track_data')
}
