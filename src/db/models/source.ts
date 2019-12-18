import { Model } from 'sequelize-typescript'
import { Column, Table } from './decorators'

enum Value {
    XMPP = 1,
    Telegram = 2,
}

@Table
export class Source extends Model<Source> {
    public static value = Value

    @Column
    public description!: string
}

export default Source
