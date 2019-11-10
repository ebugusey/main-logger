import { Column, Model, Table } from 'sequelize-typescript'

@Table
export class MessageType extends Model<MessageType> {
    @Column
    public description!: string
}

export default MessageType
