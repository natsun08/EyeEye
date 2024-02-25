// OnboardingScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Onboarding4 = ({ navigation }) => {
  const handleNext = () => {
    navigation.navigate('Onboarding3'); // Navigate to the second onboarding screen
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#006bff' }}>
      <Text>First Onboarding Screen</Text>
      <View style={styles.buttonContainer}>
        <Button title="Next" onPress={() => navigation.navigate('Login')} />
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

export default Onboarding4;
