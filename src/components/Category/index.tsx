import { LinearGradient } from 'expo-linear-gradient'
import React from 'react'
import { View, Text } from 'react-native'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'
import { theme } from '../../global/styles/theme'

import { styles } from './styles'

type CategoryProps = RectButtonProps & {
  title: string
  icon: React.FC<SvgProps>
  checked?: boolean
}

export const Category = ({
  title,
  icon: Icon,
  checked = false,
  ...rest
}: CategoryProps) => {
  const { secondary50, secondary30 } = theme.colors

  return (
    <RectButton {...rest}>
      <LinearGradient
        colors={[secondary30, secondary50]}
        style={styles.container}>
        <View style={[styles.content, { opacity: checked ? 1 : 0.4 }]}>
          <View style={checked ? styles.checked : styles.check} />

          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </View>
      </LinearGradient>
    </RectButton>
  )
}
