import React, { useState } from "react";
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import { useNavigation } from "@react-navigation/native";
// import { loginUser } from "../screens/authentication/Authentication.tsx";


type propsType = {buttonText: string, nextScreen: string, apiFunction: ()=> any};



const ButtonComponent = (props: propsType) =>{
    // const [count, setCount] = useState<number>(0);
    const {buttonText, nextScreen, apiFunction} = props;

   

    // const navigation = useNavigation();
    
    // const onPress = () =>{
    //     navigation.navigate(nextScreen,{});
    // }

    return(
        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={apiFunction}>
                <Text style={{color: 'white'}}>{buttonText}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#8518ff',
      padding: 10,
      marginTop: 20,
      color: 'white',
      width: 200,
      borderRadius: 10,
      
    },

    buttonContainer:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
 
});

export default ButtonComponent;

