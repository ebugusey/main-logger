import { Model } from 'sequelize-typescript'
import { Column, Table } from './decorators'

@Table
export class Source extends Model<Source> {
    @Column
    public description!: string
}

export default Source
