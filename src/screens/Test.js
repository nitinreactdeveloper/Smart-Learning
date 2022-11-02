import { StyleSheet, ScrollView, PixelRatio, TouchableOpacity, Text, View, Image, FlatList } from 'react-native'
import React, { useState, useContext } from 'react'
import BaseScreen from '../components/BaseScreen'
import ImageSlider from '../components/ImageSlider'
const themeColor = '#FF9933'

const Test = ({ navigation }) => {
    return (
        <BaseScreen logo={<View style={{ alignItems: "center", top: 30 }}>
            <Image source={require('../assets/images/logo.png')} />
        </View>} navigation={navigation} renderChild={Content({ navigation })}
            leftButton={true} />
    )
}


const Concept = [
    { id: 1, title: 'Human Genome Project', img: require('../assets/project.png') },
    { id: 2, title: 'Human Genome Project', img: require('../assets/project.png') },
    { id: 3, title: 'Human Genome Project', img: require('../assets/project.png') },
    { id: 4, title: 'Human Genome Project', img: require('../assets/project.png') },
    { id: 5, title: 'Human Genome Project', img: require('../assets/project.png') },
    { id: 6, title: 'Human Genome Project', img: require('../assets/project.png') },

]


const Conceptitem = ({ item }) => {
    return (
        <View style={{ marginTop: 10 }}>
            <View
                style={styles.imgView}
            >
                <Image source={item.img} style={{
                    width: 200,
                    height: 100,
                }} />
                <View style={{
                    position: 'absolute', top: 70

                }}>
                    <Text style={{
                        fontFamily: 'Roboto',
                        fontSize: 14,
                        fontWeight: '500',
                        lineHeight: 18.75,
                        color: '#fff',

                        marginLeft: 10,
                    }}>{item.title}</Text>
                </View>
            </View>
        </View>
    )
}


const Content = ({ navigation }) => {

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <View style={styles.imgView}>
                <Image source={require('../assets/Tests.png')} style={styles.img} />
                <View style={{
                    position: 'absolute', top: 170

                }}>
                    <Text style={styles.bookTitle}>Molecular Basis of Inheritance</Text>
                </View>
            </View>

            <Text style={{ marginTop: 10, fontSize: 24, lineHeight: 28.13, fontWeight: '400', fontFamily: 'Roboto', color: "#000", left: 10 }}>
                concepts
            </Text>
            <View style={{}}>
                <FlatList
                    data={Concept}
                    renderItem={Conceptitem}
                    keyExtractor={item => item.id}
                    horizontal
                    showsHorizontalScrollIndicator={false}

                />
            </View>
        </ScrollView>
    )
}

export default Test

const styles = StyleSheet.create({
    contentScroll: {
        width: '100%',
        height: '100%',
        top: 30
    },
    img: {
        width: 370,
        height: 200,
        borderRadius: 10,
        borderTopRightRadius: 10
    },
    imgView: {
        paddingHorizontal: 2,


    },
    bookTitle: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 18.75,
        color: '#fff',

        marginLeft: 10,

    },

})