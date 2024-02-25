import React from 'react'
import {  TextInput, View, Text, Image, ScrollView, Alert, TouchableOpacity } from 'react-native';
import { Icon } from '@ui-kitten/components';

function Submit ({navigation}) {
    return (
        <ScrollView automaticallyAdjustKeyboardInsets={true}>    
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
        <View style={{
            flexDirection:'row',
            justifyContent: 'space-between',
            paddingTop: '8%'
        }}>
                <View style={{
                    paddingLeft: '10%'
                }}>
                    <Text style={{
                        fontSize:28,
                        color: '#174AFF'
                    }}>
                        Xin chào,
                    </Text>
                    <Text style={{
                        fontSize:32,
                        fontWeight:'bold',
                        color: '#174AFF'
                    }}>
                        La Sắc Mầm
                    </Text>
                </View>

                <View style={{
                    paddingRight: '5%'
                }}>
                    <Image  //ảnh ava người dùng
                        style={{
                        height: 100,
                        width:100,
                        borderRadius: 50,
                        overflow: "hidden",
                        }}
                        source={require('../../../mam.jpg')}
                    />
                </View>
        </View>
        <Text style={{
            textAlign: 'center',
            paddingTop: '10%',
            fontWeight: 'bold',
            fontSize: 20
        }}>
            Cập nhập chỗ nghỉ chân mới
        </Text>
        <Text style={{
            textAlign: 'center',
            paddingTop: '2%',
            fontSize: 12,
            color: '#575F6E'
        }}>
        Sự giúp đỡ của bạn sẽ giúp cộng đồng phát triển hơn.
        {"\n"} Thay mặt cộng đồng, EyeEye xin cảm ơn bạn
        </Text>
        <Text style={{
            textAlign:'center',
            fontWeight: '200',
            color:'#BBBFC1',
            paddingTop: '4%'

        }}>
            __________________________________________
        </Text>
        <Text style={{
            marginLeft: '10%',
            paddingTop: '6%',
            fontWeight: 'bold'
        }}>
            Địa điểm chỗ nghỉ chân
        </Text>
        <Text style={{
            marginLeft: '10%',
            paddingTop: '5%',
        }}>
            Tên địa điểm
        </Text>
        <TextInput style={{
            height: 40,
            width: '80%',
            backgroundColor:'#E9F6FF',
            alignSelf:'center',
            paddingHorizontal: '3%'
        }}placeholder='Tên địa điểm'
            />
        <Text style={{
            marginLeft: '10%',
            paddingTop: '5%',
        }}>
            Địa chỉ
        </Text>
        <TextInput style={{
            height: 40,
            width: '80%',
            backgroundColor:'#E9F6FF',
            alignSelf:'center',
            paddingHorizontal: '3%'
        }}placeholder='Địa chỉ'
        />
            <Text style={{
            marginLeft: '10%',
            paddingTop: '5%',
        }}>
            Thành phố
        </Text>
        <TextInput style={{
            height: 40,
            width: '80%',
            backgroundColor:'#E9F6FF',
            alignSelf:'center',
            paddingHorizontal: '3%'
        }}placeholder='Hải Phòng'
            />
        
        <View style={{
            flexDirection:"row",
            justifyContent: 'center'

        }}>
            <View style={{
                width: '45%'
            }}>
                <Text style={{
                    marginLeft: '10%',
                    paddingTop: '5%',
                }}>
                    Quốc gia
                </Text>
                <TextInput style={{
                    height: 40,
                    width: '80%',
                    backgroundColor:'#E9F6FF',
                    alignSelf:'center',
                    paddingHorizontal: '7%'
                }} placeholder='Việt Nam'
                />
            </View>         
            <View style={{
                width: '45%'
            }}>  
                <Text style={{
                        marginLeft: '10%',
                        paddingTop: '5%',
                    }}>
                        Mã Zip 
                    </Text>
                    <TextInput style={{
                        height: 40,
                        width: '80%',
                        backgroundColor:'#E9F6FF',
                        alignSelf:'center',
                        paddingHorizontal: '7%'
                    }} placeholder='700000'
                    />
            </View>
            
        </View>
        <Text style={{
                marginLeft: '10%',
                paddingTop: '5%',
            }}>
                Chú thích
            </Text>
            <TextInput style={{
                height: 40,
                width: '80%',
                backgroundColor:'#E9F6FF',
                alignSelf:'center',
                paddingHorizontal: '3%',
            }}  
            placeholder='Ghi chú thêm của bạn'
            />
        </View> 

        <TouchableOpacity
            onPress={()=>{navigation.navigate("Thankyou")}}
            title='Đóng góp'
            style={{
                backgroundColor:'#007AFF',
                width: '30%',
                height: '5%',
                alignSelf: 'center',
                borderRadius: 15,
                marginTop: '5%'
            }}
        >
            <Text style={{
                alignSelf:'center',
                textAlign: 'center',
                paddingTop: '9%',
                color: '#FFFFFF',
                fontWeight: '500'
            }}>
                Đóng góp
            </Text>
        </TouchableOpacity>

            
    </ScrollView>
    )
}

export default Submit