import React from 'react'
import { Text, Layout } from '@ui-kitten/components'
import { Image, FlatList } from 'react-native'

const mockData = [
  { id: '1', text: 'Mam 💙' },
  { id: '2', text: 'Dua' },
  { id: '3', text: 'Na!' }
]

const Map = () => (
  <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Image
          style={{ position: 'absolute', top: -14.67, left: -37.94
          }}
          source={require('../../../assets/map-head.png')}
      />
    <FlatList
      data={mockData}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <Text style={{ fontSize: 22 }}>
          {item.id} - {item.text}
        </Text>
      )}
    />
  </Layout>
)

export default Map