import React from 'react'
import { Text, Layout } from '@ui-kitten/components'
import { auth } from '../../../firebase_config';
import { useNavigation } from '@react-navigation/core';

const Dashboard = () => {

  return ( 
  <Layout style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>Dashboard</Text>
  </Layout>
)
};
export default Dashboard