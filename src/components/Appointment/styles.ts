import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 24,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  name: {
    color: theme.colors.heading,
    fontSize: 18,
    fontFamily: theme.fonts.title700,
  },
  category: {
    color: theme.colors.highlight,
    fontSize: 13,
    fontFamily: theme.fonts.text400,
  },
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  dateInfo: {
    flexDirection: 'row',
  },
  calendar: {
    marginRight: 12,
  },
  date: {
    color: theme.colors.heading,
    fontSize: 13,
    fontFamily: theme.fonts.text500,
  },

  playerInfo: {
    flexDirection: 'row',
  },
  player: {
    marginLeft: 6,
  },
})
