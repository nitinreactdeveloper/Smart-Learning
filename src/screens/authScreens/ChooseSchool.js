import { StyleSheet, ScrollView, PixelRatio, TouchableOpacity, Text, View, Image } from 'react-native'
import React, { useState, useContext } from 'react'
import BaseScreen from '../../components/BaseScreen'
import { AuthContext } from '../../navigation/AuthProvider'

const themeColor = '#FF9933'

const ChooseSchool = ({ navigation }) => {
    return (
        <BaseScreen logo={true} navigation={navigation} renderChild={Content({ navigation })}
            leftButton={false} />
    )
}

const data = [
    { id: 1, title: 'School Name', img: require('../../assets/images/school.png') },
    { id: 2, title: 'School Name', img: require('../../assets/images/school.png') },
    { id: 3, title: 'School Name', img: require('../../assets/images/school.png') },
    { id: 4, title: 'School Name', img: require('../../assets/images/school.png') },
    { id: 5, title: 'School Name', img: require('../../assets/images/school.png') },
    { id: 6, title: 'School Name', img: require('../../assets/images/school.png') },
]

const Content = ({ navigation }) => {

    const { school, setschool, appData } = useContext(AuthContext)

    const { schools } = appData

    const Cards = ({ item }) => (
        <TouchableOpacity style={[styles.cardWrapper,]} onPress={() => {
            navigation.navigate('Login1')
            setschool(item.school_id)
        }}>
            <View style={[styles.imgWrapper, { borderColor: school === item.school_id ? themeColor : '#fff', borderWidth: 1 }]}>
                <Image source={{ uri: item.school_img }} style={styles.cardImg} />
            </View>
            <Text style={styles.regTxt}>{item.school_name}</Text>
        </TouchableOpacity>
    )

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
<Image source={require('../../assets/images/logo.png')} resizeMode={'contain'} style={styles.logo}/>
            <View style={[styles.rowAlign, { marginBottom: 5 }]}>
                <Text style={styles.subHeading}>Select School</Text>
                <TouchableOpacity
                    onPress={() => navigation.navigate('SchoolProfile')}>
                    <Text style={[styles.regTxt, { color: themeColor }]}>Browse Schools</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <View style={[styles.rowWrap, { justifyContent: 'space-between' }]}>
                    {schools ? schools.map((item, index) =>
                        <Cards item={item} key={index} />
                    ) : null}
                </View>
            </View>

        </ScrollView>
    )
}

export default ChooseSchool

const styles = StyleSheet.create({
    contentScroll: {
        width: '100%',
        height: '100%',
    },
    logo:{
        justifyContent: 'center',
        width: '100%',
        marginBottom: 20
    },
    section: {
        marginVertical: 10
    },
    heading: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(7),
        color: '#000',
        fontFamily: "Roboto-Bold",
        marginBottom: 5,
    },
    subHeadingBold: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-SemiBold",
    },
    subHeading: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(6),
        color: '#000',
        fontFamily: "Roboto-Medium",
    },
    smTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(4.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    regTxt: {
        fontSize: PixelRatio.getPixelSizeForLayoutSize(5.5),
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    fontMedium: {
        fontFamily: 'Roboto-Medium'
    },

    rowAlign: {
        flexDirection: "row",
        justifyContent: 'space-between',
        // alignItems:'flex-end',
        width: '100%',
    },
    rowWrap: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 5
    },

    cardWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        // borderRadius: 10,
        width: '30%',
        // marginRight:10,
        marginBottom: 15,
        // elevation: 3,
        // shadowColor: '#000',
        // // for ios below 
        // shadowOffset: { width: 5, height: 5 }
    },
    imgWrapper: {
        width: '100%',
        height: PixelRatio.getPixelSizeForLayoutSize(40),
        alignItems: 'center',
        justifyContent: 'center',
        margin: 3,
        marginBottom: 10,
        backgroundColor: 'white',
        borderRadius: 20,
        // borderWidth:1,
        elevation: 3,
        shadowColor: '#000',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    cardImg: {
        width:'90%',
        height: '90%',
        borderRadius: 15,
        resizeMode: 'contain'
    },
})