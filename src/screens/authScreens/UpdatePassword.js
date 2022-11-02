import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useContext } from 'react'
import { AuthContext } from '../../navigation/AuthProvider';
import AuthBaseScreen from '../../components/AuthBaseScreen';
import Input from '../../components/Input';

const UpdatePassword = ({ navigation }) => (
  <AuthBaseScreen navigation={navigation} renderChild={Content({ navigation })} />
)

const Content = () => {
  const [password, setPassword] = useState("")
  const [confPassword, setconfPassword] = useState()
  const { login } = useContext(AuthContext)
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={styles.verify}>Update Password</Text>
      <Text style={styles.subHead}>
        Enter and confirm your new password
        fields below to update password.
        Your password must be different from
        last 3 passwords used.
      </Text>
      <Input
        mode="outlined"
        label="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Input
        mode="outlined"
        label="Confirm Password"
        secureTextEntry={true}
        value={confPassword}
        // error={true}
        onChangeText={text => setconfPassword(text)}
      />
      <TouchableOpacity
        style={password !== "" && confPassword !== "" ? styles.login : styles.login1}
        onPress={() => login()}
      >
        <Text style={styles.loginTxt}>Update</Text>
      </TouchableOpacity>
    </View>
  )
}

export default UpdatePassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  verify: {
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginBottom: 35,
    color: '#1D5500'
  },
  subHead: {
    fontFamily: 'Roboto-Regular',
    fontSize: 15,
    paddingHorizontal: 40,
    textAlign: 'center',
    color:'#777',
    marginBottom:15
  },
  input: {
    height: 55,
    margin: 18,
    width: '100%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  login: {
    backgroundColor: '#FB8500',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%'
  },
  login1: {
    backgroundColor: '#E7E7E7',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%'
  },
  loginTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'center'
  }
})