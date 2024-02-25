import React, { useEffect, useState } from "react";
import { Image, Text, View } from 'react-native';
import SignButton from "../components/signin-button";
import TextUsername from "../components/username-input";
import TextPassword from "../components/password-input";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase_config";
import { useNavigation } from "@react-navigation/core";
function Login({ navigation }) {

    const [email, setEmail] = React.useState("");
    const [password, setpassword] = useState(""); 

    useEffect(()=>{
        auth.onAuthStateChanged(user =>{
            if(user){
                if(user.email == 'amuchan134@gmail.com')
                {
                    navigation.navigate("CompNav")
                }
                if(user.email != 'amuchan134@gmail.com')
                {
                    navigation.navigate("App")

                }
            }
        })
    }, [])

    const handleLogin = () => {

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("Sai email hoặc password")});

    }

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
        <TextUsername onChangeText={setEmail} email={email}></TextUsername>
        <TextPassword onChangeText={setpassword} password={password}></TextPassword>
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
        <SignButton onPress={handleLogin}></SignButton>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#000000',
            margin: 2,
            padding: 50,
        }} onPress={()=> {navigation.navigate("Regist")}}>
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