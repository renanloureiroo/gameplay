import React from 'react'

import { Image } from 'react-native'

import { styles } from './styles'

export const GuildIcon = () => {
  return (
    <Image
      source={{
        uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaiMOmKsdGpkfIM8XyJCxZkl4Lzs7Rt071xVnvCRqDedV2NPwTXCqySa_O4cRnjMeUNeI&usqp=CAU',
      }}
      style={styles.image}
      resizeMode={'cover'}
    />
  )
}
