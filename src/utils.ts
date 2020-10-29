import { Players } from '@rbxts/services'

export const getPlayer = (String = 'N/A') => String === 'all' ? Players.GetPlayers() : Players.GetPlayers().find(plr => !!plr.Name.lower().match('^' + String.lower())[0])
