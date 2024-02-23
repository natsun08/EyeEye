import React, { useState } from 'react'; 
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';


const TextPassword = () => {
  const [text, onChangeText] = React.useState();
  const [password, setPassword] = useState(''); 

  const [showPassword, setShowPassword] = useState(false); 

  return (

    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder='Mật khẩu'
        secureTextEntry={!showPassword}
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