import {StyleSheet} from 'react-native'
import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    height: 56,
    width: 56,
    borderRightColor: theme.colors.line,
    borderRightWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 24,
    height: 18,
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontFamily: theme.fonts.text500,
  },
})
