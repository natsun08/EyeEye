import React from 'react'
import {SafeAreaView,Image, StyleSheet,ScrollView, Text, View} from 'react-native';


function DashboardPage({ navigation }) {
  return (
        <ScrollView>
          
          <Text style={{
            alignSelf:'center',
            fontSize: 20,
            fontWeight: '500',
          }}>
              DATE
          </Text>
          <Image
              style={{
                marginTop: 20,
                height:170,
                width:190,
                alignSelf: 'center'
              }}
              source={require('../../../../assets/sad.png')}/>
        </ScrollView>       
)}

export default DashboardPage