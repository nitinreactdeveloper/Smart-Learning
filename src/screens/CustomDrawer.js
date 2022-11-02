import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useContext } from 'react'
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { AuthContext } from '../navigation/AuthProvider'

const CustomDrawer = (props) => {

  const { userToken, userDetails, userType } = useContext(AuthContext)

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
      <Image source={require('../assets/images/logo.png')} resizeMode={'contain'} style={styles.logo}/>
        <Text style={styles.name}>Hello, {userType} {userDetails?.teacher_first_name || userDetails?.stu_first_name} Id:{userToken}</Text>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  )
}

export default CustomDrawer

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Roboto-Regular',
    fontSize: 20,
    fontWeight: '400',
    lineHeight: 28,
    color: '#000000',
    marginLeft: 20,
    marginBottom: 20
  },
  logo:{
    justifyContent: 'center',
    width: '80%',
    marginBottom: 20
},
})