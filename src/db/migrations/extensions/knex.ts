import { ColumnBuilder, CreateTableBuilder, SchemaBuilder } from 'knex'

/**
 * У knex по дебильному сделан .increments(),
 * он создает unsigned int.
 * @param table Билдер таблиц.
 * @param name Имя создаваемой колонки.
 */
export function incrementedId(table: CreateTableBuilder, name: string): ColumnBuilder {
    return table.specificType(name, 'int auto_increment').notNullable()
}

export function addIncrementedId(schema: SchemaBuilder, tableName: string, columnName: string): SchemaBuilder {
    return schema
        .alterTable(tableName, table => {
            table.integer(columnName).notNullable().primary()
        })
        .alterTable(tableName, table => {
            incrementedId(table, columnName).alter()
        })
}
