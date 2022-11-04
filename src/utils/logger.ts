import { info } from 'node:console'

export function log(message?: any, ...optionalParams: any[]) {
  info(message, ...optionalParams)
}
