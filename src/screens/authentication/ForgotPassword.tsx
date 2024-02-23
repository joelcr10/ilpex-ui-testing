import React from "react";
import {View, Text, StyleSheet} from 'react-native';
import InputField from "../../components/InputField";
import ButtonComponent from "../../components/Button";

const ForgotPassword = () =>{
    return(
        <View style={styles.mainContainer}>
            <View style={styles.subContainer}>
                <Text style={styles.heading}>Forgot Password?</Text>
                <Text style={styles.subHeading}>To initiate the password reset process, kindly provide your email address below.</Text>
                <View style={styles.inputContainer}>
                    <InputField placeholder="Enter email" label="Email" visibility={false}/>
                </View>
                <ButtonComponent buttonText="Submit" nextScreen="ResetPassword"/>
            </View> 
        </View>
    )
}


const styles = StyleSheet.create({
    subContainer:{
        width: 300,

    },

    heading:{
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center'
    },

    subHeading:{
        marginTop: 20,
        textAlign: 'center'
    },

    mainContainer:{
        display: 'flex',
        justifyContent: 'center',
        height: 600,
        alignItems: 'center'
    },

    inputContainer:{
        marginTop: 50
    }
})

export default ForgotPassword;