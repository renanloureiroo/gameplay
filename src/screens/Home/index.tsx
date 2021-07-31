import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { Appointment } from '../../components/Appointment'
import { ButtonAdd } from '../../components/ButtonAdd'
import { CategorySelect } from '../../components/CategorySelect'
import { ListDivider } from '../../components/ListDivider'
import { ListHeader } from '../../components/ListHeader'

import { Profile } from '../../components/Profile'

import { styles } from './styles'

export const Home = () => {
  const [category, setCategory] = useState('')

  const appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '3',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '4',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
    {
      id: '5',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: '',
        owner: true,
      },
      category: '1',
      date: '22/06 ás 20:40h',
      description:
        'É hoje que vamos chegar ao challenger sem perder uma partida da md10',
    },
  ]

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

      <ListHeader title={'Partidas Agendadas'} total={6} />
      <FlatList
        data={appointments}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <Appointment data={item} />
            <ListDivider />
          </>
        )}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}
