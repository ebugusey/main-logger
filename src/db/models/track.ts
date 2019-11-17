import { HasMany, Model } from 'sequelize-typescript'
import { Column, Table } from './decorators'
import { TrackData } from './track-data'

@Table
export class Track extends Model<Track> {
    @Column
    public userId!: string

    @Column
    public trackNumber!: string

    @Column
    public title!: string

    @Column
    public active!: boolean

    @HasMany(() => TrackData)
    public data?: TrackData[]
}

export default Track
