import React from "react";
import ilpex from "../configUI";
import { View, Text, StyleSheet, FlatList } from "react-native";
import AssessmentCard from "../components/AssessmentCard";


const assessmentList = [
    {
        id: 1,
        name: "MySQL",
        batch: "ILP 2023-24 Batch",
        date: 'Sept 23 22',
        status: true
    },
    {
        id: 2,
        name: "Communication",
        batch: "ILP 2023-24 Batch",
        date: 'Oct 23 22',
        status: true
    }
]

const Home = () =>{
    return(
        <View style={styles.homeContainer}>
            <View style={styles.topPart}>
                <Text style={styles.whiteText}>Welcome back,</Text>
                <Text style={[styles.whiteText, styles.textSize]}>Elena Maria</Text> 
            </View>
            <View style={styles.contentContainer}>
                <View>
                    <Text style={styles.heading}>Assessment</Text>
                    <FlatList
                        data={assessmentList}
                      
                        renderItem={({item}) => <AssessmentCard assessmentName={item.name} batchName={item.batch} dueDate={item.date} status={item.status}/>}
                      
                    />
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    homeContainer:{
        backgroundColor: ilpex.primaryColor,
        height: '100%'
    },

    topPart:{
        margin: 30,
    },

    whiteText:{
        color: ilpex.textColorWhite,
        fontSize: ilpex.fontSizeMedium-8,
        fontWeight: 'bold'
    },

    textSize:{
        fontSize: ilpex.fontSizeBig,
    },

    contentContainer:{
        height: '100%',
        backgroundColor: ilpex.textColorWhite,
        borderTopEndRadius: 40,
        borderTopLeftRadius: 40,
        marginTop: 10,
        padding: 20
    },

    heading:{
        fontSize: ilpex.fontSizeMedium-5,
        fontWeight: 'bold',
        color: 'black',
        margin: 10

    }
})


export default Home;