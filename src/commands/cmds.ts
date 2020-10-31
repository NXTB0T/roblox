
import { Message, Bot } from 'types'

export const desc = 'A list of commands.'
export const permission = 0
export const aliases = ['help', 'commands']
export function run (_: Message, __: string[], bot: Bot, permission: number) {
  return [...bot.commands.entries()].filter(([, { permission: cmdpermission = 0}]) => permission >= cmdpermission).map(([name, { desc = 'Command without a description.'}]) => {
    return `${name} - ${desc}`
  }).join('\n')
}
