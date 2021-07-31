import React from 'react'
import { View, Text } from 'react-native'

import PlayerIcon from '../../assets/player.svg'
import CalendarIcon from '../../assets/calendar.svg'

import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { GuildIcon } from '../GuildIcon'

import { categories } from '../../utils/categories'

import { styles } from './styles'
import { theme } from '../../global/styles/theme'
import { color } from 'react-native-reanimated'
import { ListDivider } from '../ListDivider'

export type GuildProps = {
  id: string
  name: string
  icon: string
  owner: boolean
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}

type Props = RectButtonProps & {
  data: AppointmentProps
}

export const Appointment = ({ data, ...rest }: Props) => {
  const [category] = categories.filter(item => item.id === data.category)

  const { owner } = data.guild
  return (
    <RectButton {...rest}>
      <View style={styles.container}>
        <GuildIcon />
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.name}>{data.guild.name}</Text>
            <Text style={styles.category}>{category.title}</Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarIcon style={styles.calendar} />
              <Text style={styles.date}>{data.date}</Text>
            </View>
            <View style={styles.playerInfo}>
              <PlayerIcon
                fill={owner ? theme.colors.primary : theme.colors.on}
              />

              <Text
                style={[
                  styles.player,
                  { color: owner ? theme.colors.primary : theme.colors.on },
                ]}>
                {owner ? 'Anfitrião' : 'Visitante'}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}
