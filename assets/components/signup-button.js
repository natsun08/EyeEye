import React from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';



export default function SignUpButton({ onPress }) {
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>Đăng ký</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 16,
    elevation: 3,
    backgroundColor: '#006BFF',
    marginTop: -10,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});