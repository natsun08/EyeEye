import React from 'react'
import { StyleSheet, View, Text, Image, ScrollView, Button, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';

import DashboardPage from './dashboard-page.js/dashboard-page';

const Dashboard = () => {
  
  const windowWidth = Dimensions.get('window').width;

  return (
      
        <View>
              <View style={{
              paddingTop: 30,
              marginTop:-20,
              width:420,
              height:200,
              backgroundColor:'#006BFF',
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}> 
            
              <View style={{
                paddingLeft: 30,
                paddingTop: 10
              }}>
                  <Text  style= {{
                      fontSize: 22,
                      color: '#FFFFFF',
                      paddingTop: 40,
                  }}>
                    Xin chào,
                  </Text>
                  <Text style={{
                    fontSize:25,
                    color: '#FFFFFF',
                    fontWeight: 'bold'
                  }}>
                    La Sắc Mầm
                </Text>
                </View>
                <Image  //ảnh ava người dùng
                  style={{
                    height: 100,
                    width:100,
                    marginTop:20,
                    marginRight:40,
                    borderRadius: 70,
                    overflow: "hidden",
                  }}
                  source={require('../../../assets/mam.jpg')}
                />
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-around'
            }}>
                <View style={styles.ButtonContainer}>
                    <Button title="L" onPress={() => { this.scroll.scrollTo({ x: 0 }) }} />
                </View>
                <Text style={{
                    alignSelf:'center'
                  }}>
                    Sức khỏe của bạn
                </Text>
                <View style={styles.ButtonContainer}>
                    <Button title="R" onPress={() => { this.scroll.scrollTo({ x: windowWidth }) }} />
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <ScrollView
                  horizontal={true}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  ref={(node) => this.scroll = node}
                  style={{
                    width: windowWidth
                  }}
              >
                  <View style={{
                      width: windowWidth}}
                    >
                      <DashboardPage/>
                  </View>
                  <View style={{
                      width: windowWidth
                  }}>
                      <DashboardPage/>
                  </View>
                  <View style={{
                      width: windowWidth
                  }}>
                      <DashboardPage/>
                  </View>
                  
              </ScrollView>
            </View>
        </View>
  )
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});

export default Dashboard