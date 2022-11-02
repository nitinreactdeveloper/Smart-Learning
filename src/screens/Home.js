import { StyleSheet, Text, View, ScrollView, Dimensions, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import ImageSlider from '../components/ImageSlider';
import axios from 'react-native-axios'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import BaseScreen from '../components/BaseScreen';
import SimpleLineIcons from 'react-native-vector-icons/dist/SimpleLineIcons';
const numColumns = 3


const Home = ({ navigation }) => {
    return (
        <BaseScreen logo={<View style={{ alignItems: "center", top: 50, flexDirection: 'row', }}>
            <View style={{
                left: -80, borderWidth: 1, padding: 10,
                borderRadius: 50
            }}>
                <SimpleLineIcons name="camera" size={30} />
            </View>
            <Image source={require('../assets/images/logo.png')} />
        </View>} navigation={navigation} renderChild={Content({ navigation })}
            leftButton={'menu'} />
    )
}


const sliderData = [
    {
        id: 1,
        img: require('../assets/slider.png')
    },
    {
        id: 2,
        img: require('../assets/learn1.png')
    },
    {
        id: 3,
        img: require('../assets/slider.png')
    },
    {
        id: 4,
        img: require('../assets/learn1.png')
    },
]


const bookmarksData = [
    {
        id: 1,
        title: 'Bookmarked Videos',
        subtitle: '0',
        image: require('../assets/bookmarks.png')
    },
    {
        id: 2,
        title: 'Bookmarked Videos',
        subtitle: '10',
        image: require('../assets/bookmarks.png')
    },
    {
        id: 3,
        title: 'Bookmarked Videos',
        subtitle: '10',
        image: require('../assets/bookmarks.png')
    },
    {
        id: 4,
        title: 'Bookmarked Videos',
        subtitle: '0',
        image: require('../assets/bookmarks.png')
    },
]

const Content = ({ navigation }) => {

    const [imgActive, setImgActive] = useState(0)


    const [subjects, setSubjects] = useState()

    const [mapArray, setMapArray] = useState(false)


    const getSubjects = async () => {

        let form = new FormData()

        form.append("school_id", '1')
        form.append("class_id", '1')
        form.append("subject_id", '1')
        await axios.post("https://shopninja.in/smart_learning/api2/public/index.php/get_subjects", form, {
            headers: { "Content-type": "multipart/form-data" }
        })
            .then((response) => {
                console.log(response.data, 'subject api')
                if (response.data.status === 200) {
                    setSubjects(response.data.msg,)

                }
            })
            .catch((error) => {
                setMessage('Network issue.')
                console.log(error, 'error while fetching getcart api')
                setLoading(false)
            })
    }




    const renderItem1 = ({ item }) => (
        <View style={styles.book}>
            <View>
                <Image source={item.image} style={styles.bookImg} />
            </View>
            <View style={{ position: 'absolute', bottom: 0 }}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookTitle}>{item.subtitle}</Text>
            </View>
        </View>
    )
    useEffect(() => {
        getSubjects();
    }, [])
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <StatusBar backgroundColor={'#fff'} />
            <View style={styles.wrap}>
                <ImageSlider data={sliderData} />
            </View>
            <View style={styles.section}>
                <Text style={styles.subjectText}>Subjects</Text>
                <View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {subjects ? subjects.map((item, index) =>
                            <TouchableOpacity style={styles.subWrapper} key={index} onPress={() =>
                                navigation.navigate("Learn")
                            }>
                                <View style={styles.imgView}>
                                    <Image source={{ uri: item.subject_img }} style={styles.subImg} />
                                </View>
                                <Text style={styles.title}>{item.subject_name}</Text>
                            </TouchableOpacity>
                        ) : null}

                    </View>
                </View>

            </View>
            <View style={styles.section}>
                <Text style={styles.subjectText}>Bookmarks</Text>
                <View>
                    <FlatList
                        data={bookmarksData}
                        renderItem={renderItem1}
                        keyExtractor={item => item.id}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
            </View>

        </ScrollView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 45,
        height: '100%'

    },
    rowWrap: {
        flexDirection: "row",
        flexWrap: 'wrap',
        width: '100%',
        paddingHorizontal: 5
    },
    wrap: {
        width: windowWidth,
        height: 250,
    },
    wrapDot: {
        position: 'absolute',
        bottom: 0,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    dotActive: {
        margin: 3,
        color: '#FF5900'
    },
    dot: {
        margin: 3,
        color: 'white'
    },
    section: {
        flex: 1,
        paddingHorizontal: 10,
        marginTop: 17,

    },
    subjectText: {
        fontFamily: 'Roboto',
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

        marginBottom: 10,
        marginHorizontal: 6,
        paddingTop: 6,
        elevation: 5
    },
    title: {
        fontFamily: 'Roboto-Regular',
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 16,
        color: '#000',
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
        marginHorizontal: 50,
    },
    book: {
        marginRight: 10,
        marginBottom: 20
    },
    bookImg: {
        width: 150,
        height: 100,
        borderRadius: 6
    },
    bookTitle: {
        fontFamily: 'Roboto-Regular',
        fontSize: 13,
        fontWeight: '600',
        lineHeight: 13,
        color: 'white',
        marginLeft: 5,
    },
})