// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as eva from '@eva-design/eva';
import { ApplicationProvider,IconRegistry, Layout, Text  } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'

import Login from './assets/login/login';
import Regist from './assets/regist/registration';
import MyTabs from './assets/tabnavigator/tab-navigator';

const Stack = createNativeStackNavigator();

export default () => (
  
  <NavigationContainer>
    <>
      <IconRegistry icons={EvaIconsPack} />
      < ApplicationProvider {...eva} theme={eva.light}>
          <MyTabs />
      </ApplicationProvider>
    </>
  </NavigationContainer>
);
