import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextUsername = ({ onChangeText, email }) => {
  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder={'Tên người dùng'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 60,
    width: 300,
    marginBottom: 10,
    marginTop: 60,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E9F6FF',
  },
});

export default TextUsername;