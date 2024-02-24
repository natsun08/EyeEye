import React from 'react'
import { Text, Layout } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/core';
import { auth } from '../../../firebase_config';


const Setting = () => {
    const navigation = useNavigation()
    const handleSignOut = () =>{
      auth
      .signOut()
      .then(() =>{
        navigation.navigate("Login")

      })
      .catch(error => alert(error.message))
    };
  return(
  <Layout style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text onPress={handleSignOut}>Meo Log out đi</Text>
  </Layout>
)
}

export default Setting