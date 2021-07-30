import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 20,
  },
  categories: {
    marginTop: 40,
  },
})
