import Trollsmile from 'index'
import { Message } from 'types'
import { getPlayers } from 'utils'
export function run (message: Message, [players, ...reason]: string[], bot: Trollsmile) {
  const permission = bot.permission(message.author.UserId)
  getPlayers(players ?? '', message.author).forEach(plr => {
    if (bot.permission(plr.UserId) < permission) {
      plr.Kick(reason.size() ? reason.join(' ') : 'You have been kicked from the game.')
    } else {
      // tell the player that they can't kick this person because their permission is greater than or equal to their permission
    }
  })
}
export const desc = 'Remove someone from the server.'
export const permission = 3
export const aliases = []
