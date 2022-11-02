import { View, Text } from 'react-native'
import React, {useEffect, useContext} from 'react'
import { AuthContext } from '../navigation/AuthProvider';

const Logout = () => {
    const {logout} = useContext(AuthContext)
    useEffect(() => {
      logout()
    }, [])
    
  return (
    <View>
      <Text>Logout</Text>
    </View>
  )
}

export default Logout