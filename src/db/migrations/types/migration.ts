import { QueryInterface } from 'sequelize'

export interface IMigration {
    up: (db: QueryInterface) => Promise<void>
    down: (db: QueryInterface) => Promise<void>
}
