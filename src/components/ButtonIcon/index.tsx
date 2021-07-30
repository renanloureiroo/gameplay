import React from 'react'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { Text, Image, View } from 'react-native'

import { styles } from './styles'

import DiscordIMG from '../../assets/discord.png'

type ButtonProps = RectButtonProps & {
  title: string
}

export const ButtonIcon = ({ title, ...rest }: ButtonProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      <View style={styles.iconWrapper}>
        <Image source={DiscordIMG} style={styles.icon} />
      </View>
      <Text style={styles.title}>{title}</Text>
    </RectButton>
  )
}
