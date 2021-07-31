import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    marginTop: 42,
  },
  content: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  title: {
    color: theme.colors.heading,
    fontFamily: theme.fonts.title700,
    fontSize: 18,
  },
  total: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.text400,
    fontSize: 13,
  },
})
