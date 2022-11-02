import React from 'react'
import { View, Text, Button, StyleSheet, Image,ImageBackground, TouchableOpacity, StatusBar, Dimensions } from 'react-native'
import Onboarding from 'react-native-onboarding-swiper';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'

const { width, height } = Dimensions.get('screen')
const imgHeight = Math.round(height * (50 / 100))
const barHeight = 60

const Skip = ({ ...props }) => (
    <TouchableOpacity
        style={[styles.onBoardButton,]} {...props}>
        <Text style={{
            fontSize: 16, color: '#388900',
            fontFamily: "Roboto-Medium",
        }}>Skip</Text>
    </TouchableOpacity>
    // <Button title='skip'></Button>
)
const Done = ({ ...props }) => (
    <TouchableOpacity
        style={styles.onBoardButton} {...props}>
        <Text style={{ fontSize: 16, color: '#388900' }}>Done</Text>
    </TouchableOpacity>
)

const Next = ({ ...props }) => (
    <TouchableOpacity
        style={[styles.onBoardButton,]} {...props}>
        <Text style={{
            fontSize: 16, color: '#388900',
            fontFamily: "Roboto-Medium",
        }}>Next</Text>
    </TouchableOpacity>
)

const Dots = ({ selected }) => {
    let backgroundColor;
    backgroundColor = selected ? '#388900' : '#D9D9D9';
    return (
        <View style={{
            width: 8, height: 8, borderRadius: 4, backgroundColor, marginHorizontal: 3,
        }}></View>
    )
}

const OnboardingScreen = ({ navigation }) => {
    return (
        <Onboarding
            style={styles.container}
            onSkip={() => navigation.replace("ChooseSchool")}
            onDone={() => navigation.replace("ChooseSchool")}
            DotComponent={Dots}
            SkipButtonComponent={Skip}
            NextButtonComponent={Next}
            bottomBarColor="#fff"
            bottomBarHeight={barHeight}
            pages={[
                {
                    backgroundColor: '#fff',
                    image: <></>,
                    title:
                        <View style={styles.onboardingContainer}>
                            {/* <ImageBackground source={require('../../assets/images/onBoarding/bg1.jpeg')} style={{ width: '100%', height: '100%' }}>
                                <Image source={require('../../assets/images/onBoarding/1.jpeg')} style={styles.image} />
                            </ImageBackground> */}
                            <Image source={require('../../assets/images/onBoarding/1.jpeg')} style={styles.image} />
                        </View>,
                    subtitle: <></>

                },
                {
                    backgroundColor: '#fff',
                    image: <></>,
                    title:
                        <View style={styles.onboardingContainer}>
                            <View style={styles.textWrapper}>
                                <Text style={styles.customTitleText}>Home Tuition</Text>

                                <Text style={styles.customSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet justo, at dui vivamus etiam a.
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/onBoarding/2.jpeg')} style={styles.image} />
                        </View>,
                    subtitle: <></>

                },
                {
                    backgroundColor: '#fff',
                    image: <></>,
                    title:
                        <View style={styles.onboardingContainer}>
                            <Image source={require('../../assets/images/onBoarding/3.jpeg')} style={styles.image} />
                            <View style={styles.textWrapper}>
                                <Text style={styles.customTitleText}>Coaching</Text>
                                <Text style={styles.customSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet justo, at dui vivamus etiam a.
                                </Text>
                            </View>
                        </View>,
                    subtitle: <></>

                },
                {
                    backgroundColor: '#fff',
                    image: <></>,
                    title:
                        <View style={styles.onboardingContainer}>
                            <View style={styles.textWrapper}>
                                <Text style={styles.customTitleText}>School</Text>
                                <Text style={styles.customSubtitle}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Laoreet justo, at dui vivamus etiam a.
                                </Text>
                            </View>
                            <Image source={require('../../assets/images/onBoarding/4.jpeg')} style={styles.image} />
                        </View>,
                    subtitle: <></>

                },
                
            ]}
        />
    )
}

export default OnboardingScreen

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        height: '100%',
        backgroundColor: '#000',
        borderWidth: 1,
        // borderColor: 'red'
    },
    onboardingContainer: {
        // flex:1,
        justifyContent: 'space-between',
        position: 'absolute',
        // top: StatusBar.currentHeight - 30,
        top: 0,
        width: '100%',
        height: height - barHeight,
        // borderWidth: 1
    },
    image: {
        width: '100%',
        // height: imgHeight,
        height:'50%',
        resizeMode: 'contain',
    },
    textWrapper: {
        justifyContent: 'center', 
        // alignItems: 'center',
        paddingHorizontal: 15,
        // marginVertical: 30,
        height:'50%',
        width:'100%'
    },
    customTitleText: {
        color: '#FF5900',
        fontSize: 22,
        marginBottom: 10,
        fontFamily: "Roboto-Bold"
        // fontFamily: "baloo-paaji-2-regular",
    },
    customSubtitle: {
        // textAlign: 'center',
        fontSize: 14,
        lineHeight: 28,
        fontFamily: "Roboto-Medium",
        color: '#817E7E'
        // fontWeight: '400'
    },
    onBoardButton: {
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        color: "#fff",
        marginRight: 10,
        borderRadius: 20,
        width: 80,
        height: 35,
        backgroundColor: "transparent"
    },
    skipBtn: {
        backgroundColor: '#3100E9',
        borderRadius: 22,
        marginLeft: 10,
        borderWidth: 1,
        borderColor: '#f7f7f7',
        elevation: 3,
        shadowColor: '#999',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    nextBtn: {
        height: 50,
        width: 50,
        backgroundColor: '#3100E9',
        borderRadius: 25,
        marginRight: 10,
        borderWidth: 1,
        borderColor: '#f7f7f7',
        elevation: 3,
        shadowColor: '#999',
        // for ios below 
        shadowOffset: { width: 5, height: 5 }
    },
    
})