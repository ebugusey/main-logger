import { TableOptions } from 'sequelize-typescript'

const defaultConfig: TableOptions = {
    underscored: true,
    createdAt: false,
    updatedAt: false,
}

export default defaultConfig
