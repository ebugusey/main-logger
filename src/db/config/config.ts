import { Options } from 'sequelize'

interface ICliStorageOptions {
    migrationStorageTableName?: string,
}

type Config = Options & ICliStorageOptions

export const development: Config = {
    host: 'localhost',
    port: 13306,
    database: 'main_logger_dev',
    username: 'root',
    password: 'secret',
    dialect: 'mariadb',
    migrationStorageTableName: '_migrations',
}
