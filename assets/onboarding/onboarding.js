import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Animated, PanResponder, StyleSheet, Button} from 'react-native';

const Onboarding1 = ({navigation}) => {
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
  
    const panResponder = useRef(
      PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: (evt, gestureState) => {
          // Check if swipe gesture is horizontal and to the right
          if (gestureState.dx > 50) {
            // Swipe is to the right, navigate to next screen
            navigation.navigate('Onboarding2');
          }
        },
      })
    ).current;
  
    return (
      <View style={styles.container} {...panResponder.panHandlers}>
        <Animated.Image
          source={require('../logoee.png')}
          style={[styles.logo, { opacity: fadeAnim, transform: [{ translateY: positionAnim }] }]}
        />
        {loading && <Text style={styles.loadingText}>Loading...</Text>}
        <View style={styles.buttonContainer}>
        <Button title="Next" color={'#006BFF'} onPress={() => navigation.navigate('Onboarding2')} />
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
    loadingText: {
      color: 'white'
    },
    buttonContainer: {
        position: 'absolute',
        alignItems: 'flex-end', // Align button to the left
        paddingLeft: 20, // Add padding from the left edge
        right: 5,
        // height: '100%',
      },
  });
  
  export default Onboarding1;