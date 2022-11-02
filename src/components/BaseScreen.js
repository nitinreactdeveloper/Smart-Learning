import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, TextInput, ScrollView, ImageBackground, SafeAreaView, Image, StatusBar } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { AuthContext } from '../navigation/AuthProvider'
import Loader from './Loader'
import PopUpAlerts from './PopUpAlerts'

const BaseScreen = ({ navigation, renderChild, header, title, leftButton, rightButton, backTo, logo, paddingTop, paddingHorizontal }) => {

    const { fetching, setFetching } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} />



            {fetching.loading ? <Loader /> : null}
            {fetching.error ? <PopUpAlerts popUp={fetching.error} heading={fetching.error.heading} type={'error'} data={fetching.error.data}
                onPress={() => {
                    setFetching({ type: 'setError', value: false })
                }} /> : null}

            {fetching.success ? <PopUpAlerts popUp={fetching.success} heading={fetching.success.heading} type={'success'} data={fetching.success.data}
                onPress={() => {
                    setFetching({ type: 'setSuccess', value: false })
                    if (fetching.success?.onPress) fetching.success?.onPress()
                }} /> : null}

            {header === false ? null :
                <View style={styles.header}>
                    {leftButton === false ? null :
                        leftButton === 'menu' ?
                            <TouchableOpacity style={styles.menuButton}
                                onPress={() => navigation.openDrawer()}>
                                <MaterialIcons name="menu" size={25} color='#FFB441'></MaterialIcons>
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={styles.menuButton}
                                onPress={() => {
                                    backTo ?
                                        navigation.navigate(backTo)
                                        :
                                        navigation.goBack()
                                }}>
                                <MaterialIcons name="keyboard-backspace" size={25} color='#000'></MaterialIcons>
                            </TouchableOpacity>
                    }
                    {logo ? <View>{logo}</View>
                        :
                        <Text style={styles.headerTxt}>{title}</Text>
                    }
                    <View style={styles.rightButton}>
                        {rightButton}
                    </View>
                </View>
            }


            <View style={[styles.content, {
                paddingHorizontal: paddingHorizontal === false ? 0 : 10,
                paddingTop: paddingTop === false ? 0 : 20, height: header === false ? '100%' : '92%',
            }]}>
                {renderChild}
            </View>
        </View>
    )
}

export default BaseScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: '100%',
        paddingTop: StatusBar.currentHeight,
        // backgroundColor: '#f7f7f7',
        backgroundColor: '#fff',
        position: 'relative',
    },
    header: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '8%',
        backgroundColor: '#fff',

    },
    menuButton: {
        marginLeft: 10,
        color: '#3100E9',
        position: 'absolute',
        left: 0
    },
    rightButton: {
        marginRight: 15,
        color: '#f33',
        position: 'absolute',
        right: 0
    },
    headerTxt: {
        fontSize: 22,
        color: '#000',
        fontFamily: "Roboto-Black",
    },
    content: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
        height: '92%',
        width: '100%',
        paddingHorizontal: 10,
        // paddingBottom: 5,
        // paddingTop:20,
        // backgroundColor: '#f7f7f7',
        // backgroundColor: '#fff',
        // borderTopLeftRadius: 30,
        // borderTopRightRadius: 30,
        // opacity: 0.8,
        // borderTopWidth:1,borderTopColor:'#222'
    },
    bg: {
        position: 'absolute',
        top: 0, bottom: 0, right: 0, left: 0,
        width: '100%', height: '100%',
        // width: 320,
        // height: 200,
        resizeMode: 'cover'
    },
    contentScroll: {
        display: 'flex',
        height: '100%',
        width: '100%',
        // borderWidth: 1, borderColor: '#000'
    },
})
