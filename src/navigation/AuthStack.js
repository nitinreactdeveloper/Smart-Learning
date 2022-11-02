import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/authScreens/student/Login'
import SignUp from '../screens/authScreens/SignUp';
import TeacherSignUp from '../screens/authScreens/teacher/TeacherSignUp';
import StudentSignUp from '../screens/authScreens/student/StudentSignUp';
import Login1 from '../screens/authScreens/Login1';
import TeacherLogin from '../screens/authScreens/teacher/TeacherLogin';
import OnboardScreen from '../screens/authScreens/OnboardScreen';
import Splash from '../screens/authScreens/Splash';
import VerifyAccount from '../screens/authScreens/VerifyAccount';
import UpdatePassword from '../screens/authScreens/UpdatePassword';
import { AuthContext } from './AuthProvider';
import ChooseSchool from '../screens/authScreens/ChooseSchool';
import SchoolProfile from '../screens/authScreens/SchoolProfile';
import Qualification from '../screens/authScreens/Qualification';
import Experience from '../screens/authScreens/Experience';

const Stack = createNativeStackNavigator();

const AuthStack = () => {

  const { isFirstLaunch, setIsFirstLaunch, } = useContext(AuthContext)

  return (
    <Stack.Navigator
      initialRouteName={isFirstLaunch ? 'OnBoarding' : 'OnBoarding'}
      screenOptions={{
        headerTransparent: true
      }}
    >
      <Stack.Screen
        name="Onboard"
        component={OnboardScreen}
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Login1"
        component={Login1}
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="TeacherLogin"
        component={TeacherLogin}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{
          headerShown: false,
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="TeacherSignUp"
        component={TeacherSignUp}
        options={{
          headerShown:false
        }}
      />
      <Stack.Screen
        name="StudentSignUp"
        component={StudentSignUp}
        options={{
         headerShown:false
        }}
      />
      <Stack.Screen
        name="VerifyAccount"
        component={VerifyAccount}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="UpdatePassword"
        component={UpdatePassword}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen name="ChooseSchool" component={ChooseSchool} options={{ headerShown: false}}/>
      <Stack.Screen name="SchoolProfile" component={SchoolProfile} options={{ headerShown: false}}/>
      <Stack.Screen name="Qualification" component={Qualification} options={{ headerShown: false}}/>
      <Stack.Screen name="Experience" component={Experience} options={{ headerShown: false}}/>
    
    </Stack.Navigator>
  )
}

export default AuthStack