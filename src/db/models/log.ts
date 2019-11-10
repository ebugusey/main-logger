import { Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { MessageType } from './message-type'
import { Source } from './source'

@Table
export class Log extends Model<Log> {
    @Column
    public userId!: string

    @Column
    public nick!: string

    @Column
    public message!: string

    @Column
    public mdate!: Date

    @Column
    @ForeignKey(() => MessageType)
    public messageType!: number

    @Column
    @ForeignKey(() => Source)
    public source!: number

    @Column
    public channel!: string
}

export default Log
