import { Layout } from '@ui-kitten/components';
import React, { useState, useEffect, useRef } from 'react';
import { View, Image, Dimensions, ScrollView, StyleSheet, Button} from 'react-native';

function People ({navigation})  { 
  
  const windowWidth = Dimensions.get('window').width;
  return (
<ScrollView scrollEnabled={false}
  
  contentContainerStyle={{alignItems: 'center'}}>
    <Image
      style={{maxWidth:windowWidth,
      top:-260}}
      source={require('../People.png')}
      resizeMode='contain'
      />
</ScrollView>
)
};
export default People