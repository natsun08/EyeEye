import { Layout } from '@ui-kitten/components';
import React, { useState, useEffect, useRef } from 'react';
import { View, Text, Image, ScrollView, Dimensions} from 'react-native';

function Dashboard ({navigation})  { 
  
  const windowWidth = Dimensions.get('window').width;
  return (
<ScrollView
  
  contentContainerStyle={{alignItems: 'center'}}>
    <Image
      style={{maxWidth:windowWidth,
      top:-windowWidth}}
      source={require('../Dashboard.png')}
      resizeMode='contain'
      />
</ScrollView>
)
};

export default Dashboard