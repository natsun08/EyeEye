import React, { Component } from 'react'
import { Image, View, TouchableOpacity } from 'react-native'
import { Text, Layout, Avatar, withStyles, List } from '@ui-kitten/components'

import User from '../../components/leaderboard-comp/user'

const DATA = [
  {
    id: 1,
    username: 'Đào Minh Dưa',
    avatarURI:
      '../../assets/dua.jpg',
    score: '9.8'
    },
  {
    id: 2,
    username: 'La Sắc Mầm',
    avatarURI:
      '../../assets/mam.jpg',
    score: '7.0'    } //số store dạng float int g đó thì convert về nhé meo
]

class _Leaderboard extends Component {
  // ...
}

function Leaderboard() {
  return (
    <List
      style={this.props.themedStyle.container}
      data={DATA}
      renderItem={renderItem}
      keyExtractor={DATA.id}
    />
  )
}

const renderItem = ({ item }) => (
  <View style={this.props.themedStyle.card}>
    <View style={this.props.themedStyle.cardHeader}>
      <Text category="s1" style={this.props.themedStyle.cardTitle}>
        {item.username}
      </Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate('Profile')}
      >
        <Avatar
          source={{ uri: item.avatarURI }}
          size="small"
          style={this.props.themedStyle.cardAvatar}
        />
      </TouchableOpacity>
    </View>
    <View style={this.props.themedStyle.cardContent}>
      <Text category="p2">{item.score}</Text>
    </View>
  </View>
)

export default Leaderboard = withStyles(_Leaderboard, theme => ({
  container: {
    flex: 1
  },
  card: {
    backgroundColor: theme['color-basic-100'],
    marginBottom: 25
  },
  cardImage: {
    width: '100%',
    height: 300
  },
  cardHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cardTitle: {
    color: theme['color-basic-1000']
  },
  cardAvatar: {
    marginRight: 16
  },
  cardContent: {
    padding: 10,
    borderWidth: 0.25,
    borderColor: theme['color-basic-600']
  }
}))