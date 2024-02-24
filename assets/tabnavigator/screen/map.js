import React from 'react'
import { Text, Layout } from '@ui-kitten/components'

function Map ({navigation}) {
  return (
      <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text
            onPress={()=>{navigation.navigate("Submit")}}>
              Map
          </Text>
      </Layout>
  )
}

export default Map