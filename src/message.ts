export interface IMessage {
    id: string
    user: IUser
    channel?: IChannel
    message: string
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
