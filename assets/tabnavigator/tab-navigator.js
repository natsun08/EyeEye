import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ui-kitten/components'

import Dashboard from './screen/dashboard';
import Map from './screen/map';
import Leaderboard from './screen/leaderboard';
import Setting from './screen/setting';

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({focused}) => (
             <Icon 
             name='home-outline'
             width={25}
             height={25}
             fill={focused ? '#111' : '#939393'}
             />
          )
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
        tabBarLabel: 'Map',
        tabBarIcon: ({focused}) => (
          <Icon 
          name='navigation-outline'
          width={25}
          height={25}
          fill={focused ? '#111' : '#939393'}
          />
        )  
        }}
      />
      <Tab.Screen
        name="Leaderboard"
        component={Leaderboard}
        options={{
        tabBarLabel: 'Leaderboard',
        tabBarIcon: ({focused}) => (
          <Icon 
          name='bar-chart-2-outline'
          width={25}
          height={25}
          fill={focused ? '#111' : '#939393'}
          />
        )    
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({focused}) => (
          <Icon 
          name='settings-2-outline'
          width={25}
          height={25}
          fill={focused ? '#111' : '#939393'}
          />
        )
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs
