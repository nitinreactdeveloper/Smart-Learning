import React from "react";
import { View, Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import Chapters from "../screens/appscreens/chapters";
const Stack = createNativeStackNavigator();

const StackScreen = () =>{
    return(
     <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Chapter" component={Chapters} />
        
        
        </Stack.Navigator>   
    )
}