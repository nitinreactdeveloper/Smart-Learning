import { StyleSheet, ScrollView, PixelRatio, TouchableOpacity, Text, View, Image, Dimensions, FlatList } from 'react-native'
import React, { useState, useContext, useEffect } from 'react'
import BaseScreen from '../components/BaseScreen'
import axios from 'react-native-axios'
const themeColor = '#FF9933'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Learn = ({ navigation }) => {
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


const Content = ({ navigation }) => {
    const [imgActive, setImgActive] = useState(0)
    const [chapters, setChapters] = useState()

    const getChapters = async () => {

        let form = new FormData()


        form.append("subject_id", '1')
        form.append("chapter_id", '2')

        await axios.post("https://shopninja.in/smart_learning/api2/public/index.php/get_chapters", form, {
            headers: { "Content-type": "multipart/form-data" }
        })
            .then((response) => {
                console.log(response.data, 'subject api')
                if (response.data.status === 200) {
                    setChapters(response.data.msg,)

                }
            })
            .catch((error) => {
                setMessage('Network issue.')
                console.log(error, 'error while fetching getcart api')
                setLoading(false)
            })
    }



    const onChange = (nativeEvent) => {
        if (nativeEvent) {
            const slide = Math.ceil(nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width);

            if (slide != imgActive) {
                setImgActive(slide)
            }
        }
    }

    const SubjectWrapper = ({ item }) => (
        <View style={item.chapter_id % 2 ? styles.chap : styles.chap1}>
            <View style={{ flexDirection: 'row', marginRight: 10 }}>
                <Text style={styles.title}>{item.chapter_id}</Text>
                <Text style={styles.title1}>{item.chapter_title}</Text>
            </View>
            <View>
                <Text style={styles.title}>{'>'}</Text>
            </View>
        </View>
    );


    useEffect(() => {
        getChapters();
    }, [])

    return (
        <View style={styles.container}>

            <View style={styles.wrap}>
                <ScrollView
                    onScroll={({ nativeEvent }) => onChange(nativeEvent)}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled
                    horizontal
                    style={styles.wrap}
                >
                    {chapters ? chapters.map((item, index) =>
                        <View key={index}>
                            <Image
                                key={index}
                                source={{ uri: item.chapter_img }}
                                resizeMode="stretch"
                                style={styles.wrap}
                            />
                            <View style={{ position: 'absolute', alignSelf: 'center', top: '50%' }}>
                                <Text style={styles.bookTitle}>{item.chapter_title}</Text>


                            </View>
                        </View>
                    ) : null}
                </ScrollView>


            </View>
            <View style={styles.subject}>
                <Text style={styles.subjectText}>Chapters</Text>
                <View>

                    <FlatList
                        data={chapters}
                        renderItem={SubjectWrapper}
                        keyExtractor={(item, index) => item.id}
                    />
                </View>
            </View>
        </View>
    )
}

export default Learn

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 30
    },
    logo: {
        width: 600,
        height: 600,

    },
    wrap: {
        width: 370,
        height: 250,

    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center',
        backgroundColor: 'green'
    },
    dotActive: {
        margin: 3,
        color: '#FF5900',
        fontSize: 30,
    },
    dot: {
        margin: 3,
        color: 'white',
        fontSize: 30
    },
    bookTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 32,
        fontWeight: '700',
        lineHeight: 37,
        color: 'white',
        top: 50
    },
    subject: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 17,
    },
    subjectText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 19,
        color: 'black',
        marginBottom: 10
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 18,
        color: '#000',
        marginRight: 5
    },
    title1: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 18,
        color: '#000',
    },
    chap: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderColor: '#51B800',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 5
    },
    chap1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        borderColor: '#FF9933',
        borderWidth: 1,
        marginBottom: 10,
        
        paddingHorizontal: 5
    }

})