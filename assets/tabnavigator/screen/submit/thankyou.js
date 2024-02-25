import React from 'react'
import {  TextInput, View, Text, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';

function Thankyou ({navigation}) {
    return (
        <View>
            <View>
                <View style={{
                    marginTop: '15%',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
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
                    paddingTop:'2%',
                    fontWeight: '500'
                    }}
                    onPress={()=>{navigation.navigate("App")}}
                    >  
                    Trở về
                    </Text>  
                </View>
            </View>
            {/* <Image 
                style={{
                    marginTop: '8%',
                    width:'65%',
                    height:'51%',
                    alignSelf:'center'
                }}
                source={require('../../../ciumam.jpg')}/> */}
            <Text style={{
                alignSelf:'center',
                textAlign: 'center',
                paddingTop: '70%',
                fontSize: 26,
                fontWeight: 'bold',
                color:'#006BFF'
            }}>
                Cảm ơn bạn!
            </Text>
            <Text style={{
                alignSelf:'center',
                textAlign: 'center',
                fontSize: 14,
                color:'#006BFF'
            }}>
                EyeEye thay mặt cộng đồng cảm ơn bạn {"\n"}
                và chúc bạn có một chuyến đi thuận lợi
            </Text>
            <Image  //logo
                        style={{
                        height: 52,
                        width:65,
                        alignSelf: 'center',
                        position: 'absolute',
                        marginTop: 800
                        }}
                        source={require('../../../logo.png')}
                    />
        </View>
    )
}

export default Thankyou