// tslint:disable: ban-types
export type ClassDecorator<T extends Function> =
    <TResult extends Function>(target: T) => TResult | void
export type PropertyDecorator<T extends object | Function> =
    (target: T, propertyKey: string | symbol) => void
export type MethodDecorator<T extends object | Function> =
    <TProp>(target: T, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<TProp>) =>
        TypedPropertyDescriptor<TProp> | void
