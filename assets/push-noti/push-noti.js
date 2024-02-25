import React, {useState} from 'react'
import {  Modal, View, Alert, Image, TouchableOpacity,Text, Pressable } from 'react-native';

function PushNoti ({navigation}) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onPress={() => {
                Alert.alert('Modal has been closed.');
                setModalVisible(!modalVisible);
                }}>
                <View style={{
                    position:'absolute',
                    height:'100%',
                    width:'100%',
                    backgroundColor:'#000000',
                    alignSelf: 'center',
                    opacity: 0.5
                }}>
                    <Text>meo</Text>
                </View>
                <View style={{
                    height: '45%',
                    width: '75%',
                    backgroundColor: '#FFFFFF',
                    alignSelf: 'center',
                    marginTop: 250,
                    borderRadius:15,
                    paddingTop:'10%'
                }}>
                    <Image
                        style={{
                            width:'50%',
                            height:'50%',
                            alignSelf:'center'
                        }}
                        source={require('../eye.png')}    
                    />
                    <Text style={{
                        textAlign:'center',
                        color:"#FF3C3C",
                        fontSize:17,
                        fontWeight: '500',
                    }}>
                        Mắt bạn có dấu hiệu {'\n'}
                        bất thường
                    </Text>
                    <View style={{
                        flexDirection:'row'
                    }}>
                        <TouchableOpacity
                            style={{
                                height:50,
                                width:'50%',
                                borderColor:'#FF3C3C',
                                borderWidth: 0.5,
                                marginTop: 91,
                                borderBottomLeftRadius:15
                            }}
                            onPress={() => setModalVisible(false)}
                        >
                            <View>
                                <Text style={{
                                    textAlign:'center',
                                    paddingTop:15,
                                    color:'#FF3C3C',
                                    fontWeight: '600'
                                }}>
                                    Hủy
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{
                            height:50,
                            width:'50%',
                            borderColor:'#FF3C3C',
                            borderWidth: 0.5,
                            marginTop: 91,
                            borderBottomRightRadius:15
                        }}>
                            <Text style={{
                                textAlign:'center',
                                paddingTop:15,
                                color:'#FF3C3C',
                                fontWeight: '600'
                            }}>
                                Hỗ trợ
                            </Text>
                        </View>

                </View>
        
                
                </View>
            </Modal>
            <Pressable
                onPress={() => setModalVisible(true)}
            >
                <Image
                    style={{
                        height:'100%',
                        width:'100%'
                    }}
                    source={require('../bg.jpg')}
                    
                /> 
            </Pressable>
        </View>
    )
}
export default PushNoti