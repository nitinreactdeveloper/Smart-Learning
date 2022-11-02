import { StyleSheet, Text, View, Dimensions, Image, StatusBar, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import { AuthContext } from '../navigation/AuthProvider'
import Loader from './Loader'
import PopUpAlerts from './PopUpAlerts'

const { width, height } = Dimensions.get('screen')

const AuthSignupBaseScreen = ({ navigation, renderChild, leftButton, paddingHorizontal }) => {

    const { fetching, setFetching } = useContext(AuthContext)

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor={'transparent'} />

            {fetching.loading ? <Loader /> : null}
            {fetching.error ? <PopUpAlerts popUp={fetching.error} heading={fetching.error.heading} type={'error'} data={fetching.error.data}
                onPress={() => {
                    setFetching({ type: 'setError', value: false })
                }} /> : null}

            {fetching.success ? <PopUpAlerts popUp={fetching.success} heading={fetching.success.heading} type={'success'} data={fetching.success.data}
                onPress={() => {
                    setFetching({ type: 'setSuccess', value: false })
                    if (fetching.success?.onPress) fetching.success?.onPress()
                }} /> : null}

            <Image
                style={styles.bgImg}
                source={require('../assets/images/signup_bg.jpeg')}
            >
            </Image>
            {leftButton === false ? null :
                <TouchableOpacity style={styles.menuButton}
                    onPress={() => {
                        navigation.goBack()
                    }}>
                    <MaterialIcons name="keyboard-backspace" size={25} color='#fff'></MaterialIcons>
                </TouchableOpacity>
            }
            <View style={[styles.content, {
                paddingHorizontal: paddingHorizontal === false ? 0 : 10,
            }]}>
                {renderChild}
            </View>
        </View>
    )
}

export default AuthSignupBaseScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        position: 'relative',
    },
    bgImg: {
        width,
        height
    },
    content: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        backgroundColor: 'transparent',
        paddingTop: StatusBar.currentHeight
    },
    menuButton: {
        marginLeft: 10,
        position: 'absolute',
        top: StatusBar.currentHeight,
        left: 0,
        zIndex: 2,
        backgroundColor: '#000',
        borderRadius: 50
    },
})