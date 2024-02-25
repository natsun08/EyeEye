// OnboardingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, useState, Animated, Easing } from 'react-native';
import { useEffect } from 'react';


const Onboarding3 = ({ navigation }) => {
  const wiggleAnim = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim, {
          toValue: 1,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: -1,
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim, {
          toValue: 0,
          duration: 100,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 5 } // Adjust the number of iterations as needed
    ).start();
  }, []);

  const wiggle = wiggleAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  return (
    <View style={styles.container}>
      <Text style={styles.sub}>Kính theo dõi sức khoẻ</Text>
      <Text style={styles.head}>Eye Eye</Text>
      <Animated.Image
        source={require('../eyeglass.png')} // Replace 'yourImage.png' with your image path
        style={[styles.image, { transform: [{ rotate: wiggle }] }]}
      />
      <View style={styles.button}>
        <Button title="Next" onPress={() => navigation.navigate('Onboarding4')} color='#006BFF' />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006BFF'
  },
  logo: {
    width: 220,
    height: 200,
  },
  image: {
    top: -200,
    left: 0,
    width: 300,
    height:300,
  },
  loadingText: {
    color: 'white'
  },
  button: {
      position: 'absolute',
      alignItems: 'flex-end', // Align button to the left
      paddingLeft: 20, // Add padding from the left edge
      right: 5,
      
      // height: '100%',
    },
  sub: {
      top: 350,
      left: -70,
      fontWeight: '300',
      fontSize: 16,
      color: '#ffffff',
  },
  head: {
      top: 355,
      left: -70,
      fontWeight: '600',
      fontSize: 48,
      color: '#ffffff',
  },
});

export default Onboarding3