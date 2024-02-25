import React, { useRef, useEffect } from 'react';
import { Animated, View, StyleSheet, Easing, Button, Text } from 'react-native';

const Onboarding3 = ({navigation}) => {
    <View style={styles.buttonContainer}>
        <Button title="Back" style={[styles.back]} onPress={() => navigation.goBack()} />
              <Button title="Next" style={[styles.next]} onPress={() => navigation.navigate('Login')} />
              <Text style={[styles.text]}>Theo dõi tình trạng</Text>
              <Text style={[styles.head]}>Sức khoẻ của mắt</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#006BFF',
    },
})

export default Onboarding3;
