import React from "react";
import { Image, Text, View } from 'react-native';
import SignUpButton from "../components/signup-button";
import TextUsername from "../components/username-input";
import TextPassword from "../components/password-input";
import TextConfirmPassword from "../components/confirm-password-input";

function Regist({ navigation }) {

  return (
    <View style ={{
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',

    }}>
        <Text style={{ 
            fontSize: 24,
            fontWeight:700,
            color: '#006BFF',
            textAlign: 'center',
            margin: 0,
            alignItems: 'center',
        }}>
            Đăng ký
        </Text>
        <Text style={{ 
            fontSize: 14,
            fontWeight:300,
            color: '#000000',
            textAlign: 'center',
            margin: 2,
            padding: 10,
            alignItems: 'center',
        }}>
            Mời bạn tạo tài khoản nhé
        </Text>
        <TextUsername></TextUsername>
        <TextPassword></TextPassword>        
        <TextConfirmPassword></TextConfirmPassword>
        <View style={{padding: 30}}></View>
        <SignUpButton></SignUpButton>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#000000',
            margin: 2,
            padding: 50,
        }}>
            Đã có tài khoản
        </Text>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#006BFF',
            margin: 2,
            padding: 10,
        }}>
            Đăng nhập bằng
        </Text>
        <Image source={require('../socialmedia.png')}/>
        
    </View>
  )
}
export default Regist;