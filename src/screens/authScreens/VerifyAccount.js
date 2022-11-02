import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import React, { useState, useContext, useRef } from 'react'
import AuthBaseScreen from '../../components/AuthBaseScreen'
import { AuthContext } from '../../navigation/AuthProvider'

// backgroundColor: 'white',
// justifyContent: 'center',
// alignItems: 'center'

const VerifyAccount = ({ navigation, route }) => (
  <AuthBaseScreen navigation={navigation} renderChild={Content({ navigation, route })} />
)

const Content = ({ navigation, route }) => {

  const { mobile } = route.params

  const { verifyOtp } = useContext(AuthContext)

  const [number, onChangeNumber] = useState("");
  const [errors, setErrors] = useState({})

  const ref1 = useRef()

  const validate = () => {
    let errors = {}
    if (!number) {
      errors.number = "otp is required"
      setErrors(errors)
      ref1.current.focus()
      return false
    }
    else if (number.length !== 4) {
      errors.number = "4 digits otp is required"
      setErrors(errors)
      ref1.current.focus()
      return false
    }
    else {
      setErrors({})
      return true
    }
  }

  const handleSubmit = () => {
    let isValid = validate()
    if (isValid) {
      verifyOtp(mobile, number)
      // 
    }
  }

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
      <Text style={styles.verify}>Verify Account</Text>
      <Text style={styles.subHead}>Enter 6 digit OTP sent to ******6655</Text>
      <TextInput
        ref={ref1}
        style={[styles.input, { borderColor: errors.otp1 ? 'red' : '#C4C4C4' }]}
        onChangeText={onChangeNumber}
        value={number}
        keyboardType="numeric"
      />
      {errors.otp ?
        <Text style={{ color: 'red', marginBottom: 10, }}>{errors.otp}</Text>
        : null
      }
      <TouchableOpacity
        style={number !== "" ? styles.login : styles.login1}
        onPress={() => navigation.navigate('Qualification')}
      >
        <Text style={styles.loginTxt}>Verify OTP</Text>
      </TouchableOpacity>
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
        <Text style={styles.subHeading}>Did not receive the OTP? </Text>
        <TouchableOpacity
        //onPress={() => navigation.navigate('SignUp')}
        >
          <Text style={[styles.subHeading, { color: '#FB8500', marginLeft: 5 }]}>Resend</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default VerifyAccount

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  subHeading: {
    fontSize: 14,
    color: '#000',
    fontFamily: 'Roboto-Medium'
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
    color: '#000'
  },
  input: {
    height: 45,
    margin: 18,
    width: '50%',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10
  },
  login: {
    backgroundColor: '#FB8500',
    paddingVertical: 15,
    borderRadius: 10,
    width: '90%'
  },
  login1: {
    backgroundColor: '#E7E7E7',
    paddingVertical: 15,
    borderRadius: 10,
    width: '90%'
  },
  loginTxt: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 23,
    textAlign: 'center'
  }
})