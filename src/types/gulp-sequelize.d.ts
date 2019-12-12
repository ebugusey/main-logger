declare module 'gulp-sequelize' {
    import { Sequelize } from 'sequelize'
    import { UmzugOptions } from 'umzug'

    interface IGulpSequelize {
        up(): Promise<void>
        down(): Promise<void>
        pending(): Promise<void>
        executed(): Promise<void>
    }

    const gulpSequelize: (sequelize: Sequelize, options: UmzugOptions) => IGulpSequelize

    export = gulpSequelize
}
