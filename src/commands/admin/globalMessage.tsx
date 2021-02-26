import { Chat, MessagingService, Players } from '@rbxts/services'
import { message } from 'types'
import { Message } from 'components'
import Roact from '@rbxts/roact'

MessagingService.SubscribeAsync('GlobalMessageTrollsmile', ({ Data: [text, author] }: { Data: [string, string] }) => {
  Players.GetPlayers().forEach(plr => {
    const gui = plr.FindFirstChildWhichIsA('PlayerGui')

    if (gui) {
      Roact.mount(<Message author={author} text={text} />, gui)
    }
  })
})

export function run (message: message, args: string[]) {
  MessagingService.PublishAsync('GlobalMessageTrollsmile', [Chat.FilterStringForBroadcast(args.join(' '), message.author), message.author.Name])
}

export const desc = 'Display a message on every server.'
export const permission = 3
export const aliases = ['ga', 'gm']