import {StyleSheet} from 'react-native'

import {theme} from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: '100%',
    height: 360,
  },
  content: {
    marginTop: -40,
    paddingHorizontal: 40,
  },
  title: {
    color: theme.colors.heading,
    fontSize: 40,
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: theme.fonts.title700,
    lineHeight: 40,
  },
  subtitle: {
    color: theme.colors.heading,
    textAlign: 'center',
    fontSize: 15,
    marginBottom: 64,
    fontFamily: theme.fonts.text400,
    lineHeight: 25,
  },
})
