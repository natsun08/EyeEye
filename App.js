// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider,IconRegistry, Layout, Text  } from '@ui-kitten/components'
import { EvaIconsPack } from '@ui-kitten/eva-icons'
import { mapping, light as lightTheme } from '@eva-design/eva'
import Login from './assets/login/login';
import Regist from './assets/regist/registration';
import MyTabs from './assets/tabnavigator/tab-navigator';
import StackNav from './assets/stackNavigator/stackNavigator';

const Stack = createNativeStackNavigator();


export default () => (
  
  <NavigationContainer>
    <>
      <IconRegistry icons={EvaIconsPack} />
      < ApplicationProvider {...eva} theme={eva.light}>
        <StackNav/>
      </ApplicationProvider>
    </>
  </NavigationContainer>
);
//đống trên để hiện navigation bar + chuyển tab nhé meo meo

// export default function App() {
//   return (
//     <ApplicationProvider mapping={mapping} theme={lightTheme}>
//         <TabNavigator />
//     </ApplicationProvider>
//     <NavigationContainer>
//         <Stack.Navigator>
//             <Stack.Screen name = "Login" component={Login}/>
//             <Stack.Screen name = "Regist" component={Login}/>
//             <Stack.Screen name = "Home" component={Home}/>
//         </Stack.Navigator>
//         {/* <MyTabs /> */}
//     </NavigationContainer>
//   );
// }

 // T comment đống trên để có g m vẫn vô đc 3 cái page login regist home nhé meo meo


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
// này là stylesheet vô dụng vl nhưng k dám xóa lời nguyền của dev 
