import React, { useState } from 'react'; 
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const TextPassword = ({ onChangeText, password }) => {
  return (

    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={password}
        placeholder='Mật khẩu'
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 300,
    marginTop: 15,
    marginBottom: -20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#6BA9FF',
  },
});

export default TextPassword;