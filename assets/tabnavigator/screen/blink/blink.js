import React from 'react'
import { Icon } from '@ui-kitten/components';
import {  StyleSheet, View, Text, Image, ScrollView, Button, Dimensions } from 'react-native';

function Blink ({navigation})  {
  return(
    <View>
      <View style={{
        marginTop: '15%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
      }}>
        <Icon
          style={{
              width: 30,
              height:30,
              alignSelf: 'flex-start'
          }}
          fill='#000000'
          name='arrow-ios-back-outline'
          onPress={()=>{navigation.navigate("App")}}
        />
        <Text style={{
          textAlign: 'center',
          paddingRight: 10,
          fontWeight: '500'
        }}>  
          Báo cáo chi tiết
        </Text>  
        <View></View>
      </View>
      <ScrollView contentContainerStyle={{ 
        flexGrow: 1,
        minHeight: '90%'}}
      >
        <View style={{
            paddingTop: '10%',
            flexDirection: 'row',
            paddingHorizontal: '9%',
            justifyContent: 'space-between'
        }}>
          <Icon
              style={{
                  width: 80,
                  height:80,
              }}
              fill='#FF3C3C'
              name='eye-outline'
          />
          <View>
              <Text style={{
                textAlign: 'right',
                color:'#FF3C3C'
              }}>
                Nháy mắt
              </Text>
              <Text style={{
                textAlign: 'right',
                color:'#FF3C3C',
                fontSize: 40,
                fontWeight: 'bold',
                padding:5
              }}>
                25 lần
              </Text>
              <Text style={{
                textAlign: 'right',
                color:'#FF3C3C'
              }}>
                (phút)
              </Text>
          </View>
        </View>
        <View style={{
            backgroundColor: '#F3FAFF',
            aspectRatio: 20/22,
            width: '80%',
            alignSelf: 'center',
            borderRadius:20,
            marginTop: 20,
            marginLeft: 10,
            borderColor: "#3C94FF",
            borderWidth: 1,
        }}> 
          <Image  
            style={{
              width: '100%',
              height:'60%',
              alignSelf: 'center',
              marginTop: '20%'
            }}
            source={require('../../../data.png')}
          />
          <Text style={{
            textAlign: 'center',
            fontSize: 12,
            paddingTop: '10%'
          }}>
              So sánh 2 tuần (12/02-19/02 và 19/02-24/02)
          </Text>
        </View>
        <View style={{
            backgroundColor: '#3C94FF',
            height:180,
            width: 390,
            alignSelf: 'center',
            borderRadius:20,
            marginTop: 20
    }}>
        <Text style={{
            color: '#FFFFFF',
            paddingLeft: 20,
            paddingTop: 20,
            fontSize: 17,
            fontWeight: '500'
        }}>
            Bài tập cho
        </Text>
        <Text style={{
            color: '#FFFFFF',
            paddingLeft: 20,
            fontSize: 27,
            fontWeight: 'bold'
        }}>
            Mắt khỏe
        </Text>
        <Image
            style={{
                width:150,
                height:150,
                marginLeft: 200,
                position: 'absolute'
            }}
            source={require('../../../mat.png')}    
        />
        <View style={{
            flexDirection:'row',
            marginTop: 70,
            marginLeft: 20
        }}>
            <Icon
                style={{
                    width: 20,
                    height:20,
                }}
                fill='#FFFFFF'
                name='play-circle-outline' //k chinh dc weight nha phanh
            />
            <Text style={{
                paddingTop: 1,
                paddingLeft: 5,
                fontSize: 12,
                color: '#FFFFFF'
            }}>
                Tìm hiểu thêm
            </Text>
        </View>
    </View>                           
      </ScrollView>
    </View>
  )
}

export default Blink