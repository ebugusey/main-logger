import { DataTypes, QueryInterface } from 'sequelize'

export interface IMigration {
    up: (db: QueryInterface, dataType: typeof DataTypes) => Promise<void>
    down: (db: QueryInterface, dataType: typeof DataTypes) => Promise<void>
}
