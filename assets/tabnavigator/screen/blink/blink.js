import React from 'react'
import { Text, Layout } from '@ui-kitten/components'

function Blink ({navigation})  {
  return(
    <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text onPress={()=>{navigation.navigate("App")}}>
        chi tiết g đó meo meo nhớ mầm
      </Text>
    </Layout>
  )
}

export default Blink