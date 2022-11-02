import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native'
import React, { useContext, useState } from 'react'
// import { TextInput, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import AuthSignupBaseScreen from '../../../components/AuthSignupBaseScreen';
import Button from '../../../components/Button';
import Input from '../../../components/Input';
import { AuthContext } from '../../../navigation/AuthProvider';

const themeColor = '#FF9933'

const TeacherSignUp = ({ navigation }) => (
    <AuthSignupBaseScreen navigation={navigation} renderChild={Content({ navigation })} />
)


const Content = ({ navigation }) => {

    const { register, setUserType, school, appData } = useContext(AuthContext)

    const { cities, schools, states } = appData

    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [lname, setLName] = useState()
    const [mobile, setmobile] = useState()
    const [password, setPassword] = useState()
    const [confPassword, setconfPassword] = useState()
    const [schoolId, setSchoolId] = useState(school)
    const [city, setcity] = useState()
    const [state, setstate] = useState()

    const [errors, setErrors] = useState({})

    const validate = () => {
        const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})")
        let errors = {}
        if (!name) {
            errors.name = "Name is required"
            setErrors(errors)
            return false
        }
        if (!lname) {
            errors.lname = "Last Name is required"
            setErrors(errors)
            return false
        }
        else if (!email) {
            errors.email = "Email is required"
            setErrors(errors)
            return false
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address';
            setErrors(errors)
            return false
        }
        else if (!mobile) {
            errors.mobile = "Mobile is required"
            setErrors(errors)
            return false
        }
        else if (!/^[0]?[6789]\d{9}$/.test(mobile)) {
            errors.mobile = 'Invalid mobile no';
            setErrors(errors)
            return false
        }
        else if (!password) {
            errors.password = "Password is required"
            setErrors(errors)
            return false
        }
        else if (!strongRegex.test(password)) {
            errors.password = 'Password must have at least 8 digits, 1 Capital letter, 1 small letter, 1 number and 1 special character.';
            setErrors(errors)
            return false
        }
        else if (!confPassword) {
            errors.confPassword = "Confirm Password is required"
            setErrors(errors)
            return false
        }
        else if (password !== confPassword) {
            errors.confPassword = "Password and Confirm Password must be same"
            setErrors(errors)
            return false
        }
        else if (!city) {
            errors.city = "City is required"
            setErrors(errors)
            return false
        }
        else if (!state) {
            errors.state = "State is required"
            setErrors(errors)
            return false
        }
        else if (!schoolId) {
            errors.school = "School is required"
            setErrors(errors)
            return false
        }
        // else if (!isSelected) {
        //     errors.selected = 'Accept the terms and conditions for getting started'
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
            register(name, lname, email, mobile, password, city, state, school, navigation)
            // navigation.navigate('Otp')
        }
    }

    return (

        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            <View style={styles.head}>
                <Text style={styles.StuTxt}>Teacher’s Sign Up</Text>
            </View>
            <Input
                mode="outlined"
                label="First Name"
                baseColor = '#000'
                
                value={name}
                onChangeText={text => setName(text)}
            />
            {errors.name ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.name}</Text>
                : null
            }
            <Input
                mode="outlined"
                label="Last Name"
                value={lname}
                onChangeText={text => setLName(text)}
            />
            {errors.lname ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.lname}</Text>
                : null
            }
            <Input
                mode="outlined"
                label="Phone Number"
                keyboardType='phone-pad'
                value={mobile}
                onChangeText={text => setmobile(text)}
            />
            {errors.mobile ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.mobile}</Text>
                : null
            }
            <Input
                mode="outlined"
                label="Email"
                keyboardType='email-address'
                value={email}
                onChangeText={text => setEmail(text)}
            />
            {errors.email ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.email}</Text>
                : null
            }
            {/* <Text style={styles.helpText}>You can use letters , numbers & priods</Text> */}
            <Input
                mode="outlined"
                label="Password"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
            />
            {errors.password ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.password}</Text>
                : null
            }
            {/* <Text style={styles.helpText}>Password must be of 8 atleast words</Text> */}

            <View style={{ marginBottom: 5 }}>
                <Input
                    mode="outlined"
                    label="Confirm Password"
                    secureTextEntry={true}
                    value={confPassword}
                    // error={true}
                    onChangeText={text => setconfPassword(text)}
                />
                {errors.confPassword ?
                    <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.confPassword}</Text>
                    : null
                }
            </View>
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={city}
                    mode="dropdown"
                    dropdownIconColor={'#000'}
                    onValueChange={(itemValue, itemIndex) =>
                        setcity(itemValue)
                    }
                    style={{}}
                >
                    <Picker.Item label="City" enabled={false} color="grey" />
                    {cities ? cities.map((item, index) =>
                        <Picker.Item key={index} label={item.city_name} value={item.city_id} color={themeColor} />
                    ) : null}
                </Picker>
            </View>
            {errors.city ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.city}</Text>
                : null
            }
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={state}
                    mode="dropdown"
                    dropdownIconColor={'#000'}
                    onValueChange={(itemValue, itemIndex) =>
                        setstate(itemValue)
                    }
                >
                    <Picker.Item label="State" enabled={false} color="grey" />
                    {states ? states.map((item, index) =>
                        <Picker.Item key={index} label={item.state_name} value={item.state_id} color={themeColor} />
                    ) : null}
                </Picker>
            </View>
            {errors.state ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.state}</Text>
                : null
            }
            <View style={styles.pickerWrapper}>
                <Picker
                    selectedValue={schoolId}
                    mode="dropdown"
                    dropdownIconColor={'#000'}
                    onValueChange={(itemValue, itemIndex) =>
                        setSchoolId(itemValue)
                    }
                >
                    <Picker.Item label="School" enabled={false} color="grey" />
                    {schools ? schools.map((item, index) =>
                        <Picker.Item key={index} label={item.school_name} value={item.school_id} color={themeColor} />
                    ) : null}
                </Picker>
            </View>
            {errors.school ?
                <Text style={{ color: 'red', marginBottom: 5, marginTop: -5 }}>{errors.school}</Text>
                : null
            }
            <Button title={'Sign up'} onPress={handleSubmit} />
        </ScrollView>
    )
}

export default TeacherSignUp

const styles = StyleSheet.create({
    contentScroll: {
        width: '100%',
        height: '100%',
    },
    pickerWrapper: {
        height: 47,
        backgroundColor: '#fff',
        marginBottom: 10,
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#0004',
        borderRadius: 4
    },
    head: {
        alignSelf: 'center',
        width: '80%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50,
        marginBottom: 20,
        backgroundColor: '#fff',
        borderRadius: 25,
        elevation: 5
    },
    helpText: {
        marginTop: -5,
        color: '#888'
    },
    StuTxt: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color: '#000'
    },
    inputContainer: {
        marginTop: 20,
        marginHorizontal: 30,
        marginBottom: 50
    },

})