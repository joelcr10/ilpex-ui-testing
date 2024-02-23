import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/authentication/Login";
import ForgotPassword from "../screens/authentication/ForgotPassword";
import ResetPassword from "../screens/authentication/ResetPassword";
import Home from "../screens/Home";
import Splash from "../screens/Splash";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';


const BottomTab = createBottomTabNavigator();
const BottomTabNavigation = () =>{
    return(
        <BottomTab.Navigator
            initialRouteName="Batches"
            screenOptions={{
                tabBarActiveTintColor: '#8518FF', // Color when tab is active
                tabBarInactiveTintColor: 'gray', // Color when tab is inactive
                // labelStyle: styles.label, // Style for the label text
            }}
        >
            <BottomTab.Screen
                name="Trainee"
                component={ResetPassword}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <Icon name="user" size={30} color={color} />
                        )
                    }
                }}
            /> 
            <BottomTab.Screen 
                name="Batches"
                component={Home}   
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <Icon name="users" size={30} color={color}/>
                        )
                    }
                }}
            /> 
            <BottomTab.Screen
                name="Assessments"
                component={ForgotPassword}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color}) =>{
                        return(
                            <Icon name="newspaper" size={30} color={color} />
                        )
                    }
                }}
            /> 
            
        </BottomTab.Navigator>
    )
}

const Stack = createNativeStackNavigator();
const AppNavigation = () =>{
    const [splash, setSplash] = useState(true);
    const isSignedIn = false;

    setTimeout(() => {setSplash(false)}, 2000);

    if(splash){
        return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        )
    }

    if(isSignedIn){
        return(
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home"
                    component={BottomTabNavigation}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        )
        
    }else{
        return(
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="ForgotPassword"
                    component={ForgotPassword}
                    options={{
                        headerShown: false
                    }}
                />
                <Stack.Screen 
                    name="ResetPassword"
                    component={ResetPassword}
                    options={{
                        headerShown: false
                    }}
    
                />

                <Stack.Screen 
                    name="Home"
                    component={BottomTabNavigation}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        )
    }
   
}


export default AppNavigation;