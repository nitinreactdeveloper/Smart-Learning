import { StyleSheet, ScrollView, PixelRatio, TouchableOpacity, Text, View, Image } from 'react-native'
import React from 'react'
import BaseScreen from '../../components/BaseScreen'
import Button from '../../components/Button'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

const themeColor = '#FF9933'

const SchoolProfile = ({ navigation }) => {
    return (
        <BaseScreen title={'School Profile'} navigation={navigation} renderChild={Content({ navigation })}
        />
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


const getStars = (ratings) => {
    let content = [];
    let key = 0
    for (let i = 0; i < ratings; i++) {
        key = key + 1
        content.push(
            <MaterialIcons key={key} name="star" color='#FC9918' size={20} />
        );
    }
    if (ratings < 5) {
        let rem = 5 - ratings;
        for (let i = 0; i < rem; i++) {
            key = key + 1
            content.push(
                <MaterialIcons key={key} name="star" color='#ccc' size={20} />
            );
        }
    }
    return content
}


const Content = ({ navigation }) => {

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>

            {/* <View style={[styles.rowAlign, { marginBottom: 5 }]}>
                <Text style={[styles.regTxt, { color: themeColor }]}>Browse Schools</Text>
            </View> */}
            <Text style={styles.subHeading}>School Name </Text>

            <View style={styles.section}>
                <Image source={require('../../assets/images/school_img.png')} style={styles.bannerImg} />
            </View>


            <View style={[styles.cardWrapper,{flexDirection:'row'}]}>
                <View style={styles.imgWrapper}>
                    <Image source={require('../../assets/images/ratings.png')} style={styles.cardImg} />
                </View>
                <View style={styles.cardDetailsWrapper}>
                    <Text style={styles.subHeading}>Ratings</Text>
                    <View style={[styles.rowAlign,{marginTop:5}]}>
                        {getStars(4)}
                    </View>
                </View>
            </View>

            <View style={[styles.cardWrapper,{flexDirection:'row'}]}>
                <View style={styles.imgWrapper}>
                    <Image source={require('../../assets/images/offers.png')} style={styles.cardImg} />
                </View>
                <View style={styles.cardDetailsWrapper}>
                    <Text style={styles.subHeading}>Offers</Text>
                </View>
            </View>

            <Button title='Continue' onPress={() => {navigation.navigate('Login1')}} />

        </ScrollView>
    )
}

export default SchoolProfile

const styles = StyleSheet.create({
    contentScroll: {
        width: '100%',
        height: '100%',
    },
    section: {
        marginVertical: 15
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
    rowAlign:{
        flexDirection:'row',
        alignItems:'center'
    },

    rowWrap: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 5
    },

    cardWrapper: {
        alignSelf: 'center',
        width: '99%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        padding:10,
        marginBottom: 15,
        elevation: 3,
        shadowColor: '#000',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    imgWrapper: {
        width:PixelRatio.getPixelSizeForLayoutSize(30)
    },
    cardImg:{

    },
    cardDetailsWrapper:{
        flex:1,
        padding:15,
    },

    bannerImg: {
        width: '100%',
        height: PixelRatio.getPixelSizeForLayoutSize(75),
        resizeMode: 'contain'
    },
})