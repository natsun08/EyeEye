import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../login/login'
import Regist from '../regist/registration';
import MyTabs from '../tabnavigator/tab-navigator';
import Blink from '../tabnavigator/screen/blink/blink';

import Onboarding1 from '../onboarding/onboarding';
import Onboarding2 from '../onboarding/onboarding2';
import Onboarding3 from '../onboarding/onboarding3';
import Onboarding4 from '../onboarding/onboarding4';

import Submit from '../tabnavigator/screen/submit/submit';
import Thankyou from '../tabnavigator/screen/submit/thankyou';
import PushNoti from '../push-noti/push-noti';

const Stack = createNativeStackNavigator();

function StackNav() {
return(
<Stack.Navigator>
    <Stack.Screen name = "Onboarding1" component={Onboarding1} options={{ headerShown: false}} />
    <Stack.Screen name = "Onboarding2" component={Onboarding2} options={{ headerShown: false}} />
    <Stack.Screen name = "Onboarding3" component={Onboarding3} options={{ headerShown: false}} />
    <Stack.Screen name = "Onboarding4" component={Onboarding4} options={{ headerShown: false}} />
    <Stack.Screen name = "Login" component={Login} options={{ headerShown: false}} />
    <Stack.Screen name = "Regist" component={Regist} options={{ headerShown: false }}/>
    <Stack.Screen name = "App" component={MyTabs} options={{headerShown:false, gestureEnabled:false}}/>
    <Stack.Screen name = "Blink" component={Blink} options={{headerShown:false}}/>
    <Stack.Screen name = "Submit" component={Submit} options={{headerShown:false}}/>
    <Stack.Screen name = "Thankyou" component={Thankyou} options={{headerShown:false}}/>
    <Stack.Screen name = "PushNoti" component={PushNoti} options={{headerShown:false}}/>
</Stack.Navigator>

)
}


export default StackNav
