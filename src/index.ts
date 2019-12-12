import * as path from 'path'
import * as readline from 'readline'
import { Sequelize } from 'sequelize-typescript'
import Track from './db/models/track'
import TrackData from './db/models/track-data'

type DeepPartial<T> = {
    [TKey in keyof T]?: T[TKey] extends Array<infer TArrayElement> ?
        Array<DeepPartial<TArrayElement>> :
        DeepPartial<T[TKey]>
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.on('SIGINT', () => process.exit())

rl.pause()

const sequelize = new Sequelize({
    port: 13306,
    database: 'test',
    dialect: 'mariadb',
    username: 'root',
    password: 'secret',
    models: [ path.join(__dirname, 'db/models') ],
})

sequelize.sync({ force: true })
.then(async () => {

    const createdTrack: DeepPartial<Track> = {
        title: 'title',
        trackNumber: '123',
        userId: 'userId',
        active: true,
        data: [
            {
                state: 'state',
                stateTime: new Date(),
            },
        ],
    }

    const createdTrackEntity = Track.build(createdTrack, { include: [ TrackData ] })

    await createdTrackEntity.save()

    const track = await Track.findOne({ include: [ TrackData ] })
    console.log(track)
})
.then(() => {
    console.log('done')
    rl.resume()
})
