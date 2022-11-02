import { StyleSheet, Text, View, ScrollView, FlatList, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../navigation/AuthProvider'

import BaseScreen from '../components/BaseScreen'

const Subject = ({ navigation }) => {
    return (
        <BaseScreen navigation={navigation} renderChild={Content({ navigation })}
            leftButton={true}
            logo={<View style={{ alignItems: "center", top: 30 }}>
                <Image source={require('../assets/images/logo.png')} />
            </View>}
            paddingHorizontal={true}
        />
    )
}

const numColumns = 3

const subjectData = [
    {
        id: 1,
        title: 'Biology',
        subtitle: '4 Sub Subjects',
        image: require('../assets/subject1.png')
    },
    {
        id: 2,
        title: 'Physics',
        subtitle: '4 Sub Subjects',
        image: require('../assets/subject2.png')
    },
    {
        id: 3,
        title: 'Chemistry',
        subtitle: '4 Sub Subjects',
        image: require('../assets/subject3.png')
    },
    {
        id: 4,
        title: 'Mathematics',
        subtitle: '4 Sub Subjects',
        image: require('../assets/subject4.png')
    },
    {
        id: 5,
        title: 'English',
        subtitle: '4 Sub Subjects',
        image: require('../assets/subject5.png')
    },
    {
        id: 6,
        title: 'Accountancy',
        subtitle: '4 Sub Subjects',
        image: require('../assets/subject6.png')
    },
    {
        id: 7,
        title: 'Geography',
        subtitle: '4 Sub Subjects',
        image: require('../assets/subject1.png')
    },
    {
        id: 8,
        title: 'Economics',
        subtitle: '2 Sub Subjects',
        image: require('../assets/subject2.png')
    },
    {
        id: 9,
        title: 'Psychology',
        subtitle: '8 Chapters',
        image: require('../assets/subject3.png')
    },
    {
        id: 10,
        title: 'Computer Science',
        subtitle: '12 Chapters',
        image: require('../assets/subject4.png')
    },
    {
        id: 11,
        title: 'Business Studies',
        subtitle: '3 Sub Subjects',
        image: require('../assets/subject5.png')
    },
    {
        id: 12,
        title: 'Informatics Practices',
        subtitle: '11 Chapters',
        image: require('../assets/subject6.png')
    },
]

const Content = ({ navigation }) => {

    const { appData } = useContext(AuthContext)



    const SubjectWrapper = ({ item }) => (
        <View style={styles.subWrapper}>
            <View style={styles.imgView}>
                <Image source={item.image} style={styles.subImg} />
            </View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subtitle}>{item.subtitle}</Text>
        </View>
    );

    return (
        <View style={styles.container}>
            <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false}>
                <View style={styles.section}>
                    <View style={[styles.rowWrap, { justifyContent: 'space-between' }]}>
                        {subjectData.map((item, index) =>
                            <SubjectWrapper item={item} key={index} />
                        )}
                    </View>
                    <View>





                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Subject

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        height: '100%'

    },
    contentScroll: {
        flex: 1,
        paddingHorizontal: 10,
    },
    rowWrap: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 5,
        // borderWidth:1
    },
    section: {
        marginTop: 15,
        width: '100%'
    },
    subjectText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: 'black',
        marginBottom: 10
    },
    subWrapper: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '31%',
        // marginRight: 10,
        marginBottom: 10,
        elevation: 5
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 11,
        color: 'black',
        paddingBottom: 10
    },
    subtitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 8,
        fontWeight: '400',
        lineHeight: 9,
        color: 'black',
        paddingBottom: 10
    },
    subImg: {
        height: 50,
        width: 50
    },
    imgView: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 50,
        elevation: 10,
        marginVertical: 15,
    },
})