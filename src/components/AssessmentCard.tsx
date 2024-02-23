import React from "react";
import { StyleSheet, Text,View } from "react-native";
import { TouchableOpacity } from "react-native";
import ilpex from "../configUI";

type propsType = {assessmentName: string, batchName: string, dueDate: string, status: boolean}
const AssessmentCard = (props: propsType) =>{
    const {assessmentName,batchName,dueDate,status} = props;

    return(
        <View style={styles.assessmentCard}>
            <Text style={styles.mainText}>{assessmentName}</Text>
            <Text style={styles.subText}>{batchName}</Text>
            <View style={styles.bottomContainer}>
                <Text style={styles.date}>{dueDate}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={{color: 'white'}}>Take Test</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      backgroundColor: '#8518ff',
      padding: 5,
      
      color: 'white',
      width: 100,
      borderRadius: 10,
      
    },

    assessmentCard:{
        backgroundColor: 'white',
        // borderWidth: 2,
        borderRadius: 15,
        elevation: 4,
        padding: 20,
        marginTop: 10,
        margin: 10

    },

    mainText:{
        fontSize: ilpex.fontSizeMedium-10,
        fontWeight: 'bold',
        color: 'black'

    },

    subText:{
        fontSize: ilpex.fontSizeSmall-3,
        marginTop: 5
    },

    bottomContainer:{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 10
    },

    date:{
        color: '#8F00FF',
        fontWeight: 'bold',
        fontSize: ilpex.fontSizeSmall-4
    }
})


export default AssessmentCard;