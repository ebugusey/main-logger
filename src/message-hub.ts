import { IMessage } from './message'

export interface IMessageHub {
    push(message: IMessage): Promise<void>
    subscribe(handler: IMessageHandler): void
}

export interface IMessageHandler {
    handle(message: IMessage): Promise<void>
}
