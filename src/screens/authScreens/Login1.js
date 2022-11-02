import { StyleSheet, Text, ScrollView, View, Image, TouchableOpacity, TouchableHighlight, ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import AuthBaseScreen from '../../components/AuthBaseScreen'
import { AuthContext } from '../../navigation/AuthProvider'

const Login1 = ({ navigation }) => (
    <AuthBaseScreen navigation={navigation} renderChild={Content({ navigation })}
    // leftButton={false} 
    />
)

const Content = ({ navigation }) => {

    const { setUserType } = useContext(AuthContext)

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <View style={styles.teacher}>
                <Image source={require('../../assets/teacher.png')} />
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#FB8500"
                    onPress={() => {
                        setUserType('teacher')
                        navigation.navigate('TeacherLogin')
                    }
                    }
                    style={styles.head}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.StuTxt}>Teacher’s Login</Text>
                        <Icon name='arrow-forward-circle' color={'#1D5500'} size={30} />
                    </View>
                </TouchableHighlight>
            </View>
            <View style={styles.teacher}>
                <Image source={require('../../assets/rafiki.png')} />
                <TouchableHighlight
                    activeOpacity={0.6}
                    underlayColor="#FB8500"
                    onPress={() => {
                        setUserType('student')
                        navigation.navigate('Login')
                    }}
                    style={styles.head}
                >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.StuTxt}>Student’s Login</Text>
                        <Icon name='arrow-forward-circle' color={'#1D5500'} size={30} />
                    </View>
                </TouchableHighlight>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 30 }}>
                <Text style={styles.subHeading}>Don’t have an Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
                    <Text style={[styles.subHeading, { color: '#FB8500', marginLeft: 5 }]}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default Login1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentScroll: {
        width: '100%',
        height: '100%',
    },
    heading: {
        fontSize: 16,
        color: '#000',
        fontFamily: 'Roboto-Bold'
    },
    subHeading: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto-Medium'
    },
    regTxt: {
        fontSize: 14,
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    smTxt: {
        fontSize: 12,
        color: '#000',
        fontFamily: 'Roboto-Regular'
    },
    teacher: {
        alignItems: 'center',
        position: 'relative',
        marginBottom: 50,
        marginTop: 30,
    },
    head: {
        position: 'absolute',
        top: '90%',
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 35,
        paddingVertical: 15,
        marginHorizontal: 60,
        borderRadius: 25,
        elevation: 5
    },
    StuTxt: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#1D5500',
        marginRight: 5
    },
})