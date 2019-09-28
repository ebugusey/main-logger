export interface IMessage {
    id: string
    user: IUser
    channel?: IChannel
    message: string
    messageType: MessageType
    source: Source
}

export interface IUser {
    id: string
    nick: string
}

export interface IChannel {
    id: string
}

export enum Source {
    XMPP,
}

export enum MessageType {
    Message = 1,
    Command = 2,
    State = 3
}
