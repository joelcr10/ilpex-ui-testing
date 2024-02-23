import React, { useState } from "react";
import {Text, View, TextInput, StyleSheet, TouchableOpacity,} from "react-native";
import InputField from "../../components/InputField";
import ButtonComponent from "../../components/Button";
import {Link, useNavigation} from '@react-navigation/native';
import { loginUser } from "./Authentication";


const Login = () =>{

    const [loginUsername,setEmail] = useState('');
    const [loginPassword, setPassword] = useState('');
    const [invalidLogin, setInvalidLogin] = useState(false);

    const navigation = useNavigation();
    
    const onPressLogin = async () =>{
        console.log(loginUsername, loginPassword)
        const {success, statusCode, loginResp, errorMessage} = await loginUser({loginUsername,loginPassword})
        console.log(success,statusCode);
        if(statusCode=='200'){
            navigation.navigate("Home",{});
        }else{
            setInvalidLogin(true);
        }
       
    }

    return(
        <View style={styles.container}>
            <View style={styles.loginContainer}>
            {invalidLogin && <View style={styles.invalidContainer}><Text style={styles.invalidText}>Invalid Login</Text></View>}

                <Text style={styles.heading}>Login</Text>
                <InputField 
                    placeholder="Enter username" 
                    label="Email"
                    visibility={false}
                    setFunction = {setEmail}
                />

                <InputField 
                    placeholder="Enter password" 
                    label="Password"
                    visibility={true}
                    setFunction = {setPassword}
                />


                <Link to={{ screen: 'ForgotPassword'}}>
                    Forgot Password?
                </Link>
                <ButtonComponent buttonText="Login" nextScreen="" apiFunction={onPressLogin}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    loginContainer:{
        // backgroundColor: 'red',
        width: 300,
        fontFamily: 'cochin',
        
    },

    input:{
        borderWidth: 0,
        borderBottomWidth: 1,
        borderColor: 'black',
        // backgroundColor: 'red',
        height: 40,
        padding: 0,
        margin: 0,
        marginTop: 5,
        marginBottom: 20,
        
    },

    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 700
    },

    heading:{
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        color: 'black'
    },
    invalidContainer:{
        margin: 20,
        // backgroundColor: 'red'
    },

    invalidText:{
        color: 'red',
        textAlign: 'center',
        fontSize: 20
    }
})

export default Login;