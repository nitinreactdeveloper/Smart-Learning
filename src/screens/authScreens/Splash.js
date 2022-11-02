import React, { useEffect, useState, useContext } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Splash = ({ navigation }) => {

    useEffect(() => {

    }, [])

    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} />
            
            {/* <Image source={require('../../assets/splash.png')} style={styles.logo} /> */}
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FF8700'
    },
    logoTxt: {
        fontSize: 40,
        color: '#1D498D',
        fontFamily: 'Roboto-Bold'
    },
    logo: {
        width: 600,
        height: 600,
        
    },
    lightTxt: {
        fontSize: 14,
        color: '#fff',
        marginVertical: 15,
        fontFamily: 'Roboto-Medium'
    }
})