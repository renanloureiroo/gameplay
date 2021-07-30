import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'

import { Profile } from '../../components/Profile'

import { styles } from './styles'

export const Home = () => {
  const [category, setCategory] = useState('')

  const handleCategorySelect = (categoryId: string) => {
    categoryId == category ? setCategory('') : setCategory(categoryId)
  }
  return (
    <View>
      <View style={styles.header}>
        <Profile />
        <ButtonAdd />
      </View>

      <View>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>

      <View style={styles.content}>
        <View style={styles.contentInfo}>
          <Text style={styles.title}>Partidas agendadas</Text>
          <Text style={styles.total}>Total 6</Text>
        </View>
      </View>
    </View>
  )
}
