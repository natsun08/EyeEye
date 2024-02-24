import {React, useState} from "react";
import { Image, Text, View } from 'react-native';
import SignUpButton from "../components/signup-button";
import TextUsername from "../components/username-input";
import TextPassword from "../components/password-input";
import TextConfirmPassword from "../components/confirm-password-input";
import { auth } from "../../firebase_config";
import { createUserWithEmailAndPassword } from "@firebase/auth";

function Regist({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState(""); 
    const [c_password, setc_password] = useState(""); 


    const handleSignIn = ()=>{
        if (email == ""){
            alert("Phải có email")
            return;
        }
        if (!(email.includes("@"))){
            alert("Email không hợp lệ")
            return;
        }
        if (password.length < 6){
            alert("Mật khẩu phải có ít nhất 6 kí tự")
            return;
        }
        if (c_password != password){
            alert("Mật khẩu không khớp")
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
        })      
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if(errorCode.includes("invalid-email"))
        {
            alert("Email không hợp lệ")
            return;
        }
        if(errorCode.includes("email-already-in-use")){
            alert("Email đã sử dụng")
            return;
        }
        alert("Đã có lỗi xảy ra")
    }
        )
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
        <TextUsername onChangeText={setEmail} email={email}></TextUsername>
        <TextPassword onChangeText={setpassword} password={password}></TextPassword>        
        <TextConfirmPassword onChangeText={setc_password} c_password={c_password}></TextConfirmPassword>
        <View style={{padding: 30}}></View>
        <SignUpButton onPress={handleSignIn}></SignUpButton>
        <Text style={{ 
            fontSize: 14,
            fontWeight:500,
            color: '#000000',
            margin: 2,
            padding: 50,
        }} onPress={()=>{navigation.navigate("Login")}}>
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