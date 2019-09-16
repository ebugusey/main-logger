import { IMessage } from './message'

export interface IMessageHub {
    push(message: IMessage): Promise<void>
}

export interface IMessageSource {
    subscribe(cb: Callback): void
}

type Callback = (message: IMessage) => Promise<void>
