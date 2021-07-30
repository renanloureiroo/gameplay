import React from 'react'
import { View } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'

import { Entypo } from '@expo/vector-icons'

import { styles } from './styles'

export const ButtonAdd = ({}: RectButtonProps) => {
  return (
    <RectButton style={styles.container}>
      <Entypo
        name="plus"
        size={styles.icon.fontSize}
        color={styles.icon.color}
      />
    </RectButton>
  )
}
