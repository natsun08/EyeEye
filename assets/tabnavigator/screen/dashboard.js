import {React, useRef} from 'react'
import {  StyleSheet, View, Text, Image, ScrollView, Button, Dimensions, Icon } from 'react-native';

import DashboardPage from './dashboard-page.js/dashboard-page';

const DATA = [
  {id: 3,
      score: 4,
      date: '24/02/2024'},
  {id: 2,
      score: 4,
      date: '23/02/2024'},
  {id: 1,
      score: 4,
      date: '22/02/2024'},
]

const Dashboard = () => {
  
  const windowWidth = Dimensions.get('window').width;
  w = windowWidth*2
  
  const scrollRef = useRef()

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
                    //tên ng dùng
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
              justifyContent: 'center'
            }}>
                <View style={{
                  
                }}>
                    <Button title="◄"     
                            color= '#C6DFFF'
                            onPress={() => { this.ScrollView.scrollTo({ x: w-=windowWidth }) }} />
                </View>
                <Text style={{
                    alignSelf:'center'
                  }}>
                    Sức khỏe của bạn
                </Text>
                <View style={styles.ButtonContainer}>
                    <Button title="►"
                            color= '#C6DFFF'
                            onPress={() => { this.ScrollView.scrollTo({ x: w+=windowWidth }) }} />
                </View>
            </View>
            <View style={{flexDirection:'row'}}>
              <ScrollView
                  horizontal={true}
                  pagingEnabled={true}
                  showsHorizontalScrollIndicator={false}
                  // ref={(node) => this.scroll = node}
                  style={{
                    width: windowWidth
                  }}
                  ref={ref => {this.ScrollView = ref}}
                  onContentSizeChange={() => this.ScrollView.scrollToEnd({animated: false})}
              >
                  {DATA.map (item => {
                    return (
                      <View style={{
                        width: windowWidth}}
                      >
                        <DashboardPage/>
                    </View>
                    );
                  })}
                  
                  
                  
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

