import { Config, StaticConnectionConfig } from 'knex'
import * as path from 'path'
import { Options } from 'sequelize'
import * as config from './config'

export const development: Config = {
    client: 'mysql2',
    connection: getConnection(config.development),
    migrations: {
        directory: path.resolve(__dirname, '../migrations'),
        loadExtensions: [ '.js' ],
    },
}

function getConnection(options: Options): StaticConnectionConfig {
    const { host, port, database, password } = options
    const result = {
        host,
        port,
        database,
        user: options.username,
        password,
    }

    return result
}
