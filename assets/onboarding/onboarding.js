import React, { useRef, useState, useEffect } from 'react';
import { View, Animated, Text, StyleSheet, TouchableOpacity } from 'react-native';


const Onboarding = () => {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const positionAnim = useRef(new Animated.Value(0)).current;
    const [loading, setLoading] = useState(false);
  
    useEffect(() => {
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 500, // Fade in duration
          useNativeDriver: true,
        }
      ).start(() => {
        // Animation completed, trigger next animation
        Animated.timing(
          positionAnim,
          {
            toValue: -50,
            duration: 1000, // Move up duration
            useNativeDriver: true,
          }
        ).start(() => {
          // Animation completed, set loading state after 2 seconds
          setTimeout(() => {
            setLoading(true);
          }, 500);
        });
      });
    }, [fadeAnim, positionAnim]);
  
    return (
      <View style={styles.container}>
        <Animated.Image
          source={require('../logoee.png')}
          style={[styles.logo, { opacity: fadeAnim, transform: [{ translateY: positionAnim }] }]}
        />
        {loading && <Text style={styles.loadingText}>Loading...</Text>}
      </View>
    );
  };

///Thiet ke o day
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#006BFF', // Set the background color if needed
  },
  logo: {
    width: 220, // Adjust the width of the logo
    height: 200, // Adjust the height of the logo
  },
  loadingText: {
    color: 'white', // Set the text color to white
    marginTop: 10, // Adjust margin top if needed
  },
});

export default Onboarding;
