import React, { useState } from 'react'
import { View } from 'react-native'
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

      <View style={styles.categories}>
        <CategorySelect
          categorySelected={category}
          setCategory={handleCategorySelect}
        />
      </View>
    </View>
  )
}
