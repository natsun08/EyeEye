import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from '@ui-kitten/components'

import Dashboard from './dashboard';
import People from './people';
import Setting from './setting';

const Tab = createBottomTabNavigator();



function CompNav() {
  return (
    <Tab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown:false
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
        name="People"
        component={People}
        options={{
        tabBarLabel: 'People',
        tabBarIcon: ({focused}) => (
          <Icon 
          name='person-outline'
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

export default CompNav
