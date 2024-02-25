import React, {useState} from 'react';
import MapView , {  Marker,Heatmap  } from 'react-native-maps';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

export default function App({navigation}) {
  // Function to handle button press
  const handleButtonPress = () => {
    // Handle button press action here
    console.log('Button pressed!');
  };

  const [mapLat, setMapLat] = useState(6.841776681);
  const [mapLong, setMapLong] = useState(79.869319);

  return (

    <>
   <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          coordinate={{ latitude: 37.78825, longitude: -122.4324 }}
          title="Marker"
          description="This is a marker"
        />
      </MapView>
      <Image
          style={{ position: 'absolute', top: -5.67, left: -20.94,
          width: 500, height: 200
        }}
          source={require('../../../assets/header.png')}
      />
      {/* Button component */}
      <TouchableOpacity style={styles.button1} onPress={()=>{navigation.navigate('Submit')}}>
        <Text style={styles.buttonText1}>Cập nhật chỗ nghỉ mới</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={handleButtonPress}>
        <Text style={styles.buttonText2}>Tìm chỗ nghỉ gần nhất</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button3} onPress={handleButtonPress}>
        <Text style={styles.buttonText3}>Tình huống khẩn cấp</Text>
      </TouchableOpacity>

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
  button1: {
    position: 'absolute',
    width: 120,
    height: 126,
    bottom: 16,
    alignSelf: 'center',
    left: 15,
    backgroundColor: '#3DD34C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center',
  },
  buttonText1: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: 'bold',
    
  },
  button2: {
    position: 'absolute',
    width: 120,
    height: 126,
    bottom: 16,
    alignSelf: 'center',
    backgroundColor: '#FFAC33',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center',
  },
  buttonText2: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: 'bold',
    
  },
  button3: {
    position: 'absolute',
    width: 120,
    height: 126,
    bottom: 16,
    alignSelf: 'center',
    right: 15,
    backgroundColor: '#FF3C3C',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignItems: 'center', // Center text horizontally
    justifyContent: 'center',
  },
  buttonText3: {
    color: 'white',
    fontSize: 14,
    alignSelf: 'center',
    fontWeight: 'bold',
    
  },
});