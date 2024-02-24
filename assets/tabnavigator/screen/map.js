// import React from 'react'
// import { Text, Layout } from '@ui-kitten/components'
// import { Image, FlatList, StyleSheet, View } from 'react-native'
// import MapView , { Marker } from 'react-native-maps';
// import React, {useState} from 'react';

// const [mapLat, setMapLat] = useState(6.841776681);
// const [mapLong, setMapLong] = useState(79.869319);


// const Map = () => (
//   <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         initialRegion={{
//           latitude: mapLat,
//           longitude: mapLong,
//           latitudeDelta: 0.0922,
//           longitudeDelta: 0.0421,
//         }}
//       >
//       </MapView>
// </View>
// //   <>
// //   <Layout>
// //     {/* <Image
// //           style={{ position: 'absolute', top: -14.67, left: -37.94
// //           }}
// //           source={require('../../../assets/map-head.png')}
// //       /> */}
// //     <MapView
// //   initialRegion={{
// //     latitude: 37.78825,
// //     longitude: -122.4324,
// //     latitudeDelta: 0.0922,
// //     longitudeDelta: 0.0421,
// //   }}
// // />
// //     {/* <FlatList
// //       data={mockData}
// //       keyExtractor={item => item.id}
// //       renderItem={({ item }) => (
// //         <Text style={{ fontSize: 22 }}>
// //           {item.id} - {item.text}
// //         </Text>
// //       )}
// //     /> */}
// //   </Layout>
// //   </>
// // )

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: '100%',
//     height: '100%',
//   },
// });

// export default Map

import React, {useState} from 'react';
import MapView , {  Marker,Heatmap  } from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function App() {

  const [mapLat, setMapLat] = useState(6.841776681);
  const [mapLong, setMapLong] = useState(79.869319);

  return (
    <><View>
      <Image
          style={{ position: 'absolute', top: -14.67, left: -37.94          }}
          source={require('../../../assets/map-head.png')}
      />
    </View>
   <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: mapLat,
          longitude: mapLong,
          latitudeDelta: 10.82302,
          longitudeDelta: 106.62965,
        }}
      >
      </MapView>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});