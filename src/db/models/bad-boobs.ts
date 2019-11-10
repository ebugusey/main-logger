import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class BadBoobs extends Model<BadBoobs> {
    @Column
    public message!: string
}

export default BadBoobs
