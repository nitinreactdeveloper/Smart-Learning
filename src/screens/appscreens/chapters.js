import { StyleSheet, Text, View, ScrollView, Dimensions, Image, FlatList, TouchableOpacity, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
// import ImageSlider from '../components/ImageSlider';
import axios from 'react-native-axios'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
import ImageSlider from '../../components/ImageSlider';
const numColumns = 3





const Chapters = ({ navigation }) => {

    const [imgActive, setImgActive] = useState(0)


    const [chapters, setChapters] = useState()
    const [name, setName] = useState({ id: 1, title: 'Nitin' })
    const [mapArray, setMapArray] = useState(false)


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
        getChapters();
    }, [])
    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            <View style={styles.wrap}>
                <ImageSlider />
            </View>
            <StatusBar backgroundColor={"#fff"} />

            <View style={styles.section}>

                <View>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        {chapters ? chapters.map((item, index) =>
                            <TouchableOpacity style={styles.subWrapper} key={index}
                            >
                                <Image source={{ uri: item.chapter_img }} style={styles.subImg} />

                                <Text style={styles.title}>{item.chapter_title}</Text>
                            </TouchableOpacity>
                        ) : null}

                    </View>
                </View>



            </View>
        </ScrollView>
    )
}

export default Chapters

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 45

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
    logo: {
        width: 600,
        height: 600,

    },
    subWrapper: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        width: '31%',
        margin: 12,
        marginBottom: 10,
        elevation: 5,
        marginHorizontal: 10
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