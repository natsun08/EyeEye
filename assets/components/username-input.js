import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

const TextUsername = () => {
  const [text, onChangeText] = React.useState();

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
    backgroundColor: '#6BA9FF',
  },
});

export default TextUsername;