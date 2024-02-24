import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import StackNav from './assets/stackNavigator/stackNavigator';

// import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
// import { EvaIconsPack } from '@ui-kitten/eva-icons';
// import StackNav from './assets/stackNavigator/stackNavigator';

// const Stack = createNativeStackNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <>
//         <IconRegistry icons={EvaIconsPack} />
//         <ApplicationProvider {...eva} theme={eva.light}>
//           <StackNav />
//         </ApplicationProvider>
//       </>
//     </NavigationContainer>
//   );
// }

<<<<<<< Updated upstream
=======
export default function App() {
  return (
    <NavigationContainer>
      <>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={eva.light}>
          <StackNav />
        </ApplicationProvider>
      </>
    </NavigationContainer>
  );
}
