import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { Image } from 'react-native'
import { theme } from '../../global/styles/theme'

import { styles } from './styles'

type AvatarProps = {
  urlImage: string
}

export const Avatar = ({ urlImage }: AvatarProps) => {
  const { secondary70, secondary50 } = theme.colors
  return (
    <LinearGradient
      colors={[secondary50, secondary70]}
      style={styles.container}>
      <Image source={{ uri: urlImage }} style={styles.avatar} />
    </LinearGradient>
  )
}
