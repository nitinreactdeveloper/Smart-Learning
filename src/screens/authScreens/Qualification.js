import { StyleSheet, Text, View, ScrollView, TouchableOpacity, StatusBar, Image, ImageBackground } from 'react-native'
import React, { useState } from 'react'
// import { TextInput, Checkbox } from 'react-native-paper';
import { Picker } from '@react-native-picker/picker';
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import AuthBaseScreen from '../../components/AuthBaseScreen';
import Button from '../../components/Button';
import Input from '../../components/Input';

const Qualification = ({ navigation }) => (
    <AuthBaseScreen navigation={navigation} renderChild={Content({ navigation })} />
)


const Content = ({ navigation }) => {
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [lname, setLName] = useState()
    const [mobile, setmobile] = useState()
    const [password, setPassword] = useState()
    const [confPassword, setconfPassword] = useState()
    const [errors, setErrors] = useState({})
    const [school, setschool] = useState()
    const [city, setcity] = useState()
    const [state, setstate] = useState()

    return (
        <ScrollView style={styles.contentScroll} showsVerticalScrollIndicator={false} keyboardShouldPersistTaps='handled'>
            
                <Text style={styles.StuTxt}> Qualification Details </Text>
           
            <Picker
                selectedValue={city}
                mode="dropdown"
                dropdownIconColor={'#000'}
                onValueChange={(itemValue, itemIndex) =>
                    setcity(itemValue)
                }
                style={{ backgroundColor: '#f5f5f5', marginBottom: 10 }}
            >
                <Picker.Item label="Degree" enabled={false} color="grey" />
                <Picker.Item label="Degree1" value="Degree1" />
                <Picker.Item label="Degree2" value="Degree2" />
            </Picker>
            <Picker
                selectedValue={state}
                mode="dropdown"
                dropdownIconColor={'#000'}
                onValueChange={(itemValue, itemIndex) =>
                    setstate(itemValue)
                }
                style={{ backgroundColor: '#f5f5f5', marginBottom: 10, }}
            >
                <Picker.Item label="University" enabled={false} color="grey" />
                <Picker.Item label="Delhi" value="delhi" />
                <Picker.Item label="UP" value="up" />
            </Picker>
            <Picker
                selectedValue={school}
                mode="dropdown"
                dropdownIconColor={'#000'}
                onValueChange={(itemValue, itemIndex) =>
                    setschool(itemValue)
                }
                style={{ backgroundColor: '#f5f5f5', marginBottom: 10, }}
            >
                <Picker.Item label="Passing year" enabled={false} color="grey" />
                <Picker.Item label="2021" value="2021" />
                <Picker.Item label="2022" value="2022" />
            </Picker>

            <Button title={'Continue'} onPress={() => {navigation.navigate('Experience')}} />
        </ScrollView>
    )
}

export default Qualification

const styles = StyleSheet.create({
    contentScroll: {
        width: '100%',
        height: '100%',
        paddingTop:50
    },
    head: {
        alignSelf:'center',
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
    helpText:{
        marginTop:-10,
        color:'#888'
    },
    StuTxt: {
        fontFamily: 'Roboto-Medium',
        fontSize: 18,
        color:'#000',
        marginBottom:30
    },
    inputContainer: {
        marginTop: 20,
        marginHorizontal: 30,
        marginBottom: 50
    },
})