import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Text, SafeAreaView, Image, View, Button } from 'react-native'

import { styles } from './styles'

import IllustrationsIMG from '../../assets/illustration.png'
import { ButtonIcon } from '../../components/ButtonIcon'

export const SignIn = () => {
  const navigation = useNavigation()

  const handleSignIn = () => {
    navigation.navigate('Home')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={IllustrationsIMG}
        style={styles.img}
        resizeMode={'stretch'}
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Conecte-se {'\n'}e organize suas {'\n'}
          jogatinas
        </Text>

        <Text style={styles.subtitle}>
          Crie grupos para jogar seus games{'\n'}
          favoritos com seus amigos
        </Text>

        <ButtonIcon onPress={handleSignIn} title={'Entrar com Discord'} />
      </View>
    </SafeAreaView>
  )
}
