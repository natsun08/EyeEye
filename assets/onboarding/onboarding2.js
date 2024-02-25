// Onboarding2.js
import React, { useRef, useEffect } from 'react';
import { Animated, Image, View, StyleSheet, Text, Button } from 'react-native';

const Onboarding2 = ({navigation}) => {
    const fish1Position = useRef(new Animated.Value(0)).current;
  const fish2Position = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const duration1 = 4000; // Duration for fish1 animation
    const duration2 = 3000; // Duration for fish2 animation

    Animated.loop(
      Animated.sequence([
        Animated.timing(fish1Position, {
          toValue: 1,
          duration: duration1,
          useNativeDriver: true,
        }),
        Animated.timing(fish1Position, {
          toValue: 0,
          duration: duration1,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(fish2Position, {
          toValue: 1,
          duration: duration2,
          useNativeDriver: true,
        }),
        Animated.timing(fish2Position, {
          toValue: 0,
          duration: duration2,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [fish1Position, fish2Position]);

  return (
    <><View style={styles.container}>
          <Animated.Image
              source={require('../Asset4.png')}
              style={[
                  styles.fish,
                  {
                      transform: [
                          {
                              translateX: fish1Position.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [-100, 400],
                              }),
                          },
                      ],
                  },
              ]} />
          <Animated.Image
              source={require('../Asset6.png')}
              style={[
                  styles.fish,
                  {
                      transform: [
                          {
                              translateX: fish2Position.interpolate({
                                  inputRange: [0, 1],
                                  outputRange: [-100, 400],
                              }),
                          },
                      ],
                  },
              ]} />
      </View><View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', color: '#006bff' }}>
              <Text style={[styles.text]}>Theo dõi tình trạng</Text>
              <Text style={[styles.head]}>Sức khoẻ của mắt</Text>
              <Button title="Back" onPress={() => navigation.goBack()} />
              <Button title="Next" onPress={() => navigation.navigate('Onboarding3')} />
          </View></>
  );
};

///thiet ke
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#006BFF',
    },
    star: {
        position: 'absolute',
        top: 100, // Adjust as needed to position the stars vertically
        left: 50, // Adjust as needed to position the stars horizontally
        width: 300,
        height: 300,

    },
    text: {
        position: 'absolute',
        fontWeight: '300',
        color: '#ffffff',
    },
    next: {
        position: 'absolute',
        alignItems: 'flex-end', // Align button to the left
        paddingLeft: 20, // Add padding from the left edge
        right: 5,
        // height: '100%',
    },
    back: {
        position: 'absolute',
        alignItems: 'flex-start', // Align button to the left
        paddingRight: 20, // Add padding from the left edge
        right: 5, 
    }
  });

export default Onboarding2;
