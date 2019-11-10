import { BelongsTo, Column, ForeignKey, Model, Table } from 'sequelize-typescript'
import { Track } from './track'

@Table
export class TrackData extends Model<TrackData> {
    @Column
    @ForeignKey(() => Track)
    public trackId!: number

    @BelongsTo(() => Track)
    public track?: Track

    @Column
    public state!: string

    @Column
    public stateTime!: Date
}

export default TrackData
