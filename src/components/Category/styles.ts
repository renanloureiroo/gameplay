import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: 104,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginRight: 8,
  },
  content: {
    width: 100,
    height: 116,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    backgroundColor: theme.colors.secondary70,
    borderRadius: 8,
  },
  checked: {
    width: 10,
    height: 10,
    borderRadius: 9999,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-end',
  },
  check: {
    width: 10,
    height: 10,
    backgroundColor: theme.colors.secondary100,
    alignSelf: 'flex-end',
  },
  title: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    lineHeight: 19,
  },
})
