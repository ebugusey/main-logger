import { Model } from 'sequelize-typescript'
import { Column, Table } from './decorators'

@Table
export class MessageType extends Model<MessageType> {
    @Column
    public description!: string
}

export default MessageType
