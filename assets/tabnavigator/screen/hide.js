import { createStackNavigator } from '@react-navigation/stack';
import Map from './map';

const Stack = createStackNavigator();

function Hide() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Map"
          component={Map}
          options={{ headerShown: false }}
        />
        {/* Other screens */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Hide