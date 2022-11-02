import { StyleSheet, ScrollView, Text, View, Image, TouchableOpacity, Dimensions, KeyboardAvoidingView, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput, Checkbox } from 'react-native-paper';
import AuthBaseScreen from '../../../components/AuthBaseScreen';
import Input from '../../../components/Input';
import { AuthContext } from '../../../navigation/AuthProvider';
import Button from '../../../components/Button';

const { width, height } = Dimensions.get('screen')

const TeacherLogin = ({ navigation }) => (
    <AuthBaseScreen navigation={navigation} renderChild={Content({ navigation })} />
)

const Content = ({ navigation }) => {
    const { login, setUserType } = useContext(AuthContext)

    const [email, setemail] = useState("")
    const [password, setPassword] = useState("")
    const [checked, setChecked] = useState(false);

    const [errors, setErrors] = useState({})
    const [isSelected, setIsSelected] = useState(false)

    const validate = () => {
        let errors = {}
        if (!email) {
            errors.email = "Email is required"
            setErrors(errors)
            return false
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            setErrors(errors)
            return false
        }
        else if (!password) {
            errors.password = "Password is required"
            setErrors(errors)
            return false
        }
        // else if (!strongRegex.test(password)) {
        //     errors.password = 'Password must have at least 8 digits, 1 Capital letter, 1 small letter, 1 number and 1 special character.';
        //     setErrors(errors)
        //     return false
        // }
        else {
            setErrors({})
            return true
        }
    }

    const handleSubmit = () => {
        let isValid = validate()
        if (isValid === true) {
            login(email, password)
            // navigation.navigate('Register')
        }
    }


    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <View style={{ paddingTop: 70, alignItems: 'center' }}>
                <Image source={require('../../../assets/rafiki.png')} />
            </View>

            <View style={styles.head}>
                <Text style={styles.StuTxt}>Teacher’s Login</Text>
            </View>
            <Input
                mode="outlined"
                label="User Name/Phone Number"
                value={email}
                onChangeText={text => setemail(text)}
            />
            {errors.email ?
                <Text style={{ color: 'red', marginBottom: 10, }}>{errors.email}</Text>
                : null
            }
            <Input
                mode="outlined"
                label="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            {errors.password ?
                <Text style={{ color: 'red', marginBottom: 10, }}>{errors.password}</Text>
                : null
            }
            <TouchableOpacity
                style={styles.forgot}
            >
                <Text style={styles.forgotTxt}>Forget Password?</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', marginTop: 8, marginBottom: 10 }}>
                <Checkbox
                    status={checked ? 'checked' : 'unchecked'}
                    uncheckedColor={'#0006'}
                    color={'#FF9933'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                />
                <Text style={styles.remTxt}>Remember me</Text>
            </View>
            {/* <TouchableOpacity
                style={user !== "" & password != "" ? styles.login : styles.login1}
                onPress={() => navigation.navigate('VerifyAccount')}
            >
                <Text style={styles.loginTxt}>Login</Text>
            </TouchableOpacity> */}

            <Button title={'Login'} onPress={handleSubmit} />

            <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
                <Text style={styles.subHeading}>Don’t have an Account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate('TeacherSignUp')}>
                    <Text style={[styles.subHeading, { color: '#FB8500', marginLeft: 5 }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default TeacherLogin

const styles = StyleSheet.create({
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
    head: {
        marginVertical: 20,
        alignItems: 'center',
        backgroundColor: '#fff',
        paddingHorizontal: 15,
        paddingVertical: 20,
        marginHorizontal: 80,
        borderRadius: 25,
        elevation: 5
    },
    StuTxt: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#1D5500'
    },
    inputContainer: {
        marginTop: 20,
        marginHorizontal: 30
    },
    forgot: {
        alignItems: 'flex-end'
    },
    forgotTxt: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#0004'
    },
    remTxt: {
        fontFamily: 'Roboto-Regular',
        fontSize: 16,
        color: '#0006',
        textAlignVertical: 'center'
    },
    login: {
        backgroundColor: '#FB8500',
        paddingVertical: 15,
        borderRadius: 10
    },
    login1: {
        backgroundColor: '#E7E7E7',
        paddingVertical: 15,
        borderRadius: 10
    },
    loginTxt: {
        fontFamily: 'Roboto-Regular',
        fontSize: 20,
        fontWeight: '400',
        lineHeight: 23,
        textAlign: 'center'
    }
})