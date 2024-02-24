import React, {useState} from 'react';
import MapView , {  Marker,Heatmap  } from 'react-native-maps';
import { StyleSheet, View, Text, Image } from 'react-native';

function Map ({navigation}) {
  return (
      <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text
            onPress={()=>{navigation.navigate("Submit")}}>
              Map
          </Text>
      </Layout>
  )
}
export default function App() {

  const [mapLat, setMapLat] = useState(6.841776681);
  const [mapLong, setMapLong] = useState(79.869319);

  return (
    <><View>
      <Image
          style={{ position: 'absolute', top: -14.67, left: -37.94}}
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