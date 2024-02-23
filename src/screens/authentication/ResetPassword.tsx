import React from "react";
import {Text, View, TextInput, StyleSheet,} from "react-native";
import InputField from "../../components/InputField";
import ButtonComponent from "../../components/Button";

const ResetPassword = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.loginContainer}>
                <Text style={styles.heading}>Reset Password</Text>
                <InputField 
                    placeholder="Enter Password" 
                    label="Password"
                    visibility={true}
                />

                <InputField 
                    placeholder="Re-Enter password" 
                    label="Confirm Password"
                    visibility={true}
                />
                
                <ButtonComponent buttonText="Reset" nextScreen=""/>
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

    container:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 600
    },

    heading:{
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 20,
        color: 'black'
    }
})

export default ResetPassword;