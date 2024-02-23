import React from "react";
import { Image, Text, View } from 'react-native';
import SignButton from "../components/signin-button";
import TextUsername from "../components/username-input";
import TextPassword from "../components/password-input";

function Login({ navigation }) {

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
            Đăng nhập
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
            Chào mừng quay trở lại!
        </Text>
        <TextUsername></TextUsername>
        <TextPassword></TextPassword>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#006BFF',
            margin: 2,
            padding: 50,
            alignSelf: 'flex-end',
        }}>
            Quên mật khẩu?
        </Text>
        <SignButton></SignButton>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#000000',
            margin: 2,
            padding: 50,
        }}>
            Tạo tài khoản mới
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
export default Login;