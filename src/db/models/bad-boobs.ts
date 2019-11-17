import { Model } from 'sequelize-typescript'
import { Column, Table } from './decorators'

@Table
export class BadBoobs extends Model<BadBoobs> {
    @Column
    public message!: string
}

export default BadBoobs
