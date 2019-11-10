import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class Source extends Model<Source> {
    @Column
    public description!: string
}

export default Source
