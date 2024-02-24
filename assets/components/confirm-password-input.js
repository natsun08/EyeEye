import React, { useState } from 'react'; 
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const TextConfirmPassword = ({ onChangeText, c_password }) => {
  return (

    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={c_password}
        placeholder='Xác nhận mật khẩu'
        secureTextEntry={true}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 300,
    marginTop: 45,
    marginBottom: -20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E9F6FF',
  },
});

export default TextConfirmPassword;