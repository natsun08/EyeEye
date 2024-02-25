// OnboardingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet, useState, Animated } from 'react-native';
import { useEffect } from 'react';


const Onboarding4 = ({ navigation }) => {
  const wiggleAnim1 = new Animated.Value(0);
  const wiggleAnim2 = new Animated.Value(0);

  const handleNext = () => {
    navigation.navigate('Onboarding3'); // Navigate to the next onboarding screen
  };
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(wiggleAnim1, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim1, {
          toValue: -1,
          duration: 400,
          useNativeDriver: true,
        }),
        Animated.timing(wiggleAnim1, {
          toValue: 0,
          duration: 200,
          useNativeDriver: true,
        }),
      ]),
      { iterations: 3 }
    ).start();

    setTimeout(() => {
      Animated.loop(
        Animated.sequence([
          Animated.timing(wiggleAnim2, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
          }),
          Animated.timing(wiggleAnim2, {
            toValue: -1,
            duration: 400,
            useNativeDriver: true,
          }),
          Animated.timing(wiggleAnim2, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
          }),
        ]),
        { iterations: 3 }
      ).start();
    }, 1500); // Delay the animation of the second image by 1500 milliseconds
  }, []);

  const wiggle1 = wiggleAnim1.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  const wiggle2 = wiggleAnim2.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-10deg', '0deg', '10deg'],
  });

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.sub}>Cập nhật liên tục và cảnh báo</Text>
      <Text style={styles.head}>Hiện tượng bất thường</Text>
      <Text style={styles.head1}>kịp thời</Text>
      <Animated.Image
        source={require('../Asset3.png')}
        style={[styles.image1, { transform: [{ rotate: wiggle1 }] }]} />
      <Animated.Image
        source={require('../phone_1.png')}
        style={[styles.image2, { transform: [{ rotate: wiggle2 }] }]} />
    <View style={styles.button}>
        <Button title="Next" onPress={() => navigation.navigate('Login')} color='#ffffff' />
      </View>
      </View></>
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
  image1: {
    top: -100,
    left: 60,
    width: 200,
    height:200,
  },
  image2: {
    top: -200,
    right: -20,
    width: 240,
    height:380,
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
      top: 550,
      left: -40,
      fontWeight: '300',
      fontSize: 16,
      color: '#ffffff',
  },
  head: {
      top: 555,
      left: -20,
      fontWeight: '600',
      fontSize: 24,
      color: '#ffffff',
  },
  head1: {
    top: 560,
    left: -110,
    fontWeight: '600',
    fontSize: 24,
    color: '#ffffff',
},
});

export default Onboarding4