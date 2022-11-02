import { StyleSheet, Text, View, FlatList, Image, Dimensions, Animated, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef, useCallback } from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

const { width, height } = Dimensions.get('screen')

const ImageSlider = ({ navigation, data }) => {

    // const { data } = route.params

    const [index, setIndex] = useState(0)
    const [slide, setSlide] = useState(1)

    const products = [
        { id: '1', name: "Dimond Ring", img: require('../assets/slider.png'), },
        { id: '2', name: "Dimond Ring", img: require('../assets/slider.png'), },
        { id: '3', name: "Dimond Chain", img: require('../assets/slider.png'), },
        { id: '4', name: "Dimond Earing", img: require('../assets/slider.png'), },
    ]

    const itemRef = useRef()
    const timerId = useRef()
    const onItemIndexChange = useCallback(setIndex, [])

    useEffect(() => {
        let arr = data ? data : products
        if (index < arr.length) {
            itemRef.current?.scrollToIndex({
                index: index,
                animated: true,
                viewPosition: 0, //percentange from the viewport left side
                viewOffset: 0 // space in pixels from viewport sides
            })
        }
    }, [index])

    const autoScroll = (slide) => {
        itemRef.current?.scrollToIndex({
            index: slide,
            animated: true,
            viewPosition: 0, //percentange from the viewport left side
            viewOffset: 0 // space in pixels from viewport sides
        })
    }

    // useEffect(() => {
    //     let maxIndex = data ? data.length - 1 : products.length - 1
    //     let current = index
    //     let timer = setInterval(() => {
    //         if (current === maxIndex) current = 0
    //         else current += 1
    //         autoScroll(current)
    //         setIndex(current)
    //     }, 2500)

    //     return () => clearInterval(timer)
    // }, [])

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                ref={itemRef}
                style={{ width: width, height: height }}
                data={data ? data : products}
                horizontal={true}
                initialScrollIndex={index}
                onScrollToIndexFailed={info => {
                    const wait = new Promise(resolve => setTimeout(resolve, 500));
                    wait.then(() => {
                        itemRef.current?.scrollToIndex({ index: info.index, animated: true });
                    });
                }}
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                onMomentumScrollEnd={(event) => {
                    const newIndex = Math.round(event.nativeEvent.contentOffset.x / width)
                    if (onItemIndexChange) {
                        onItemIndexChange(newIndex)
                    }
                }}
                keyExtractor={(item, index) => index}
                renderItem={({ item, index: fIndex }) =>
                    <View style={{
                        width: width,
                        // height: height,
                        alignItems: 'center', justifyContent: 'center',
                        backgroundColor: '#fff'
                        // backgroundColor: fIndex === index ? '#c4c4c4' : '#fff'
                    }}
                    >
                        {/* {data ?
                            <Image source={{ uri: item }} style={{ width: width, height, resizeMode: 'contain' }} />
                            : <Image source={item.img} style={{ width: width, resizeMode: 'contain' }} />
                        } */}
                        <Image source={item.img} style={{ width: width, height: '100%', resizeMode: 'contain' }} />
                    </View>
                }
            />

            {/* <Text>index {index}</Text> */}

            {/* <TouchableOpacity
                style={[styles.addBtn, { position: 'absolute', top: 10, left: 10 }]}
                onPress={() => { navigation.goBack() }}>
                <MaterialIcons name="close" size={30} color={'#000'} style={{
                }} ></MaterialIcons>
            </TouchableOpacity> */}

            <View style={[styles.rowAlign, { position: 'absolute', bottom: '8%', width: width }]}>
                {/* <TouchableOpacity
                    style={[styles.addBtn]}
                    onPress={() => {
                        if (index > 0) {
                            setIndex(index - 1)
                        }
                    }}>
                    <MaterialIcons name="chevron-left" size={30} color={'#000'} style={{
                    }} ></MaterialIcons>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.addBtn]}
                    onPress={() => {
                        if (index < products.length - 1) {
                            setIndex(index + 1)
                        }
                    }}>
                    <MaterialIcons name="chevron-right" size={30} color={'#000'} style={{
                    }} ></MaterialIcons>
                </TouchableOpacity> */}

                {
                    data ?
                        data.map((item, idx) =>
                            <Text
                                key={idx}
                                style={{ color: index === idx ? '#FF5900' : '#fff', marginLeft: 2 }}
                            >
                                ●
                            </Text>
                        )
                        :
                        products.map((item, idx) =>
                            <Text
                                key={idx}
                                style={{ color: index === idx ? '#FF5900' : '#fff', marginLeft: 2 }}
                            >
                                ●
                            </Text>
                        )
                }
            </View>

        </View>
    )
}

export default ImageSlider

const styles = StyleSheet.create({
    rowAlign: {
        display: 'flex', flexDirection: 'row',
        // width: '100%',
        // justifyContent: 'space-between',
        justifyContent: 'center',
        alignItems: 'center'
    },
    addBtn: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        height: 35,
        width: 35,
        backgroundColor: '#fff8',
        borderRadius: 2,
        // elevation: 3,
        // shadowColor: '#000',
        // // for ios below 
        // shadowOffset: { width: 5, height: 5 }
    },
})