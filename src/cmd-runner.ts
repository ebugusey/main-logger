import { ICmd } from './cmd'

export interface ICmdRunner {
    canRun(cmd: ICmd): boolean
    run(cmd: ICmd): Promise<void>
}
