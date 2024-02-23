import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { mapping, light as lightTheme } from '@eva-design/eva'
import { ApplicationProvider } from 'react-native-ui-kitten'
import Home from './assets/Home/Home';
import Login from './assets/login/login';
import Regist from './assets/regist/registration';
import tabNavigator from './assets/tabnavigator/tab-navigator';

const Stack = createNativeStackNavigator();



export default function App() {
  return (
    <ApplicationProvider mapping={mapping} theme={lightTheme}>
        <TabNavigator />
    </ApplicationProvider>
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name = "Login" component={Login}/>
            <Stack.Screen name = "Regist" component={Login}/>
            <Stack.Screen name = "Home" component={Home}/>
        </Stack.Navigator>
        {/* <MyTabs /> */}
    </NavigationContainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
