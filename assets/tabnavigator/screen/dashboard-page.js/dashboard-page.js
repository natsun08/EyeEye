import React from 'react'
import {Box,Image, StyleSheet,ScrollView, Text, View} from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';


function DashboardPage({ navigation }) {
  return (
        <ScrollView contentContainerStyle={{ 
                flexGrow: 1,
                minHeight: '200%'}}>
          
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
                source={require('../../../../assets/sad.png')} //input ảnh dựa trên score của ng dùng (t dead)
            />
            <View style={{
                backgroundColor:'#C6DFFF', //đổi theo score luôn xin designer bảng màu 
                height: 30,
                paddingLeft: 20,
                paddingRight: 20,
                alignSelf: 'center',
                marginTop: 30,
                flexwrap: 'wrap',
                borderRadius: 20
            }}>
                <Text style={{
                    alignSelf:'center',
                    paddingTop: 5,
                    fontWeight: '500'
                }}>
                    Hãy chú ý sức khỏe bạn nhé {/* input text dựa trên score luôn */} 
                </Text>
            </View>
            <Text style={{
                paddingTop: 40,
                alignSelf: 'center',
                fontWeight: '500'
            }}>
                Báo cáo chi tiết
            </Text>
            
                 <View style={{
                    backgroundColor: '#F8E4FF',
                    height:200,
                    width: 350,
                    alignSelf: 'center',
                    borderRadius:20,
                    marginTop: 20
                 }}>
                 </View>
                 <View style={{
                    backgroundColor: '#FFE9C9',
                    height:200,
                    width: 350,
                    alignSelf: 'center',
                    borderRadius:20,
                    marginTop: 20
                 }}> 
                 </View>
                 <View style={{
                    backgroundColor: '#E4EDFF',
                    height:200,
                    width: 350,
                    alignSelf: 'center',
                    borderRadius:20,
                    marginTop: 20
                 }}> 
                 </View>
                 <View style={{
                    backgroundColor: '#F8E4FF',
                    height:200,
                    width: 350,
                    alignSelf: 'center',
                    borderRadius:20,
                    marginTop: 20
                 }}> 
                 </View>
                 <View style={{
                    backgroundColor: '#F3FAFF',
                    height:200,
                    width: 350,
                    alignSelf: 'center',
                    borderRadius:20,
                    marginTop: 20,
                    borderColor: "#3C94FF",
                    borderWidth: 2
                 }}> 
                 </View>

        </ScrollView>     
      
)}

export default DashboardPage