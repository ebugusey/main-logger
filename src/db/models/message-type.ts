import { Model } from 'sequelize-typescript'
import { Column, Table } from './decorators'

enum Value {
    Message = 1,
    Command = 2,
    State = 3,
}

@Table
export class MessageType extends Model<MessageType> {
    public static value = Value

    @Column
    public description!: string
}

export default MessageType
