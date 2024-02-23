import React from "react";
import {StyleSheet, Text, TextInput, View} from 'react-native';


type propsType = {placeholder: string, label: string, visibility: boolean, setFunction: (text: string)=> void}
const InputField = (props: propsType) =>{
    const {placeholder, label, visibility, setFunction} = props;
    return(
        
            <View >
                <Text style={styles.label}>{label}</Text>
                <TextInput 
                    style={styles.input}
                    placeholder={placeholder}
                    secureTextEntry = {visibility}
                    onChangeText={(val) => setFunction(val)}
                    
                 />
            </View>
        
    )
}

const styles = StyleSheet.create({
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

    label:{
        fontSize: 20,
        color: 'black'
        
    }
})


export default InputField;