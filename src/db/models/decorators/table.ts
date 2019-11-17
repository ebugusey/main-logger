import { Model, Table as DefaultTable, TableOptions } from 'sequelize-typescript'
import defaultConfig from '../config/table.default'
import { ClassDecorator } from './types'

type ModelDecorator = ClassDecorator<typeof Model>

export function Table(options: TableOptions): ModelDecorator
export function Table(target: typeof Model): void

export function Table(arg: typeof Model | TableOptions): void | ModelDecorator {
    if (isModel(arg)) {
        const target = arg
        decorate(target)
        return

    } else {
        const options = arg

        const decorator: ModelDecorator =
            target => decorate(target, options)

        return decorator
    }
}

function decorate(target: typeof Model, options?: TableOptions) {
    let config = defaultConfig
    if (options !== undefined) {
        config = { ...config, ...options }
    }

    const defaultDecorator = DefaultTable(config)
    defaultDecorator(target)
}

function isModel(arg: unknown): arg is typeof Model {
    return (arg as typeof Model).prototype instanceof Model
}
