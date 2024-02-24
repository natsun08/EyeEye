import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login/login'
import Regist from '../regist/registration';
import MyTabs from '../tabnavigator/tab-navigator';
import Blink from '../tabnavigator/screen/blink/blink';
const Stack = createNativeStackNavigator();

function StackNav() {
return(
<Stack.Navigator>
    <Stack.Screen name = "Login" component={Login} options={{ headerShown: false}} />
    <Stack.Screen name = "Regist" component={Regist} options={{ headerShown: false }}/>
    <Stack.Screen name = "App" component={MyTabs} options={{headerShown:false}}/>
    <Stack.Screen name = "Blink" component={Blink} options={{headerShown:false}}/>
</Stack.Navigator>
)
}


export default StackNav
