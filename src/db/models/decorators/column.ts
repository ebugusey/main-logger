import { strict as assert } from 'assert'
import { DataType } from 'sequelize'
import { Column as DefaultColumn, Model } from 'sequelize-typescript'
import defaultConfig from '../config/column.default'
import { PropertyDecorator } from './types'

type ColumnDecorator = PropertyDecorator<Model>

export function Column(dataType: DataType): ColumnDecorator
export function Column(target: Model, propertyKey: string | symbol): void

export function Column(
    arg: Model | DataType,
    propertyKey?: string | symbol,
): void | ColumnDecorator {
    if (isModel(arg)) {
        const target = arg
        assertDefined(propertyKey, 'propertyKey')

        decorate(target, propertyKey)
        return

    } else {
        const dataType = arg

        const decorator: ColumnDecorator =
            (target, propKey) => decorate(target, propKey, dataType)

        return decorator
    }
}

function decorate(target: Model, propertyKey: string | symbol, dataType?: DataType) {
    let config = defaultConfig
    if (dataType !== undefined) {
        config = { ...defaultConfig, ...{ type: dataType } }
    }

    const defaultDecorator = DefaultColumn(config)
    defaultDecorator(target, propertyKey)
}

function isModel(arg: unknown): arg is Model {
    if (typeof arg === 'function') {
        return arg.prototype instanceof Model
    } else if (typeof arg === 'object' && arg !== null) {
        return arg.constructor.prototype instanceof Model
    } else {
        return false
    }
}

function assertDefined<T>(value: T | undefined, valueName?: string): asserts value is T {
    assert.ok(
        value !== undefined,
        `${valueName ?? 'value'} is undefined`,
    )
}
