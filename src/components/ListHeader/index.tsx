import React from 'react'

import { Text, View } from 'react-native'

type ListHeaderProps = {
  title: string
  total: number
}

import { styles } from './styles'
export const ListHeader = ({ title, total }: ListHeaderProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.total}>Total {total}</Text>
      </View>
    </View>
  )
}
