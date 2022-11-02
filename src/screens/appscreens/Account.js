import { StyleSheet, ScrollView, PixelRatio, TouchableOpacity, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'
import BaseScreen from '../../components/BaseScreen'
const themeColor = '#FF9933'

const Account = ({ navigation }) => {
    return (
        <BaseScreen

            logo={<View style={{ alignItems: "center", top: 30 }}>
                <Image source={require('../../assets/images/logo.png')} />
            </View>} navigation={navigation} renderChild={Content({ navigation })}
            leftButton={true} />
    )
}







const Content = ({ navigation }) => {

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <View style={{ alignItems: 'center', width: '100%' }}>
                <View style={{
                    width: "90%", borderWidth: 1,
                    borderLeftWidth: 5,
                    borderRightWidth: 5,
                    borderRadius: 8,
                    height: 60,
                    borderColor: '#FFB441',
                    justifyContent: 'center',
                    paddingHorizontal: 20
                }}>
                    <Text style={{ fontSize: 13 }}>Latest News</Text>
                </View>

            </View>
            <View style={{
                alignItems: 'center', width: '100%', flexDirection: 'row', justifyContent: 'space-evenly',
                marginTop: 60
            }}>
                <View style={{
                    width: '40%', borderWidth: 1,
                    borderLeftWidth: 5,
                    borderRightWidth: 5,
                    borderRadius: 8,
                    height: 60,
                    borderColor: '#FFB441',
                    justifyContent: 'center',
                    paddingHorizontal: 20,

                }}>
                    <Text style={{ fontSize: 13 }}>Exam Schedule</Text>
                </View>
                <View style={{
                    width: '40%', borderWidth: 1,
                    borderLeftWidth: 5,
                    borderRightWidth: 5,
                    borderRadius: 8,
                    height: 60,
                    borderColor: '#FFB441',
                    justifyContent: 'center',
                    paddingHorizontal: 20
                }}>
                    <Text style={{ fontSize: 13 }}>Results/Previous Results</Text>
                </View>

            </View>

            <View style={{
                width: "88%", borderWidth: 1,
                borderLeftWidth: 5,
                borderRightWidth: 5,
                borderRadius: 8,

                borderColor: '#FFB441',
                justifyContent: 'center',
                paddingHorizontal: 20,
                height: 200,
                marginTop: 60,
                marginHorizontal: 20
            }}>
                <Text style={{fontSize: 16, 
                bottom: 40,
                left: 8}}>
                    Payment & Fees
                </Text>
                <View style={{
                    alignItems: 'center', width: '100%', flexDirection: 'row', justifyContent: 'space-evenly',

                }}>
                    <View style={{
                        width: '33%', borderWidth: 1,
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        borderRadius: 8,
                        height: 60,
                        borderColor: '#FFB441',
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        marginHorizontal:5

                    }}>
                        <Text style={{ fontSize: 13 }}>past</Text>
                    </View>
                    <View style={{
                        width: '33%', borderWidth: 1,
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        borderRadius: 8,
                        height: 60,
                        borderColor: '#FFB441',
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        marginHorizontal:5

                    }}>
                        <Text style={{ fontSize: 13 }}>Total</Text>
                    </View>
                    <View style={{
                        width: '33%', borderWidth: 1,
                        borderLeftWidth: 5,
                        borderRightWidth: 5,
                        borderRadius: 8,
                        height: 60,
                        borderColor: '#FFB441',
                        justifyContent: 'center',
                        paddingHorizontal: 20,
                        marginHorizontal:5

                    }}>
                        <Text style={{ fontSize: 13 }}>Upcoming</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Account

const styles = StyleSheet.create({
    contentScroll: {
        width: '100%',
        height: '100%',
        top: 30
    },


})