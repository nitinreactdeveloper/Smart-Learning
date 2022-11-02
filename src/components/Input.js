import React, { useState } from 'react'
import { StyleSheet, Text, View, TouchableWithoutFeedback } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import FontAwesome5 from 'react-native-vector-icons/dist/FontAwesome5'
import { TextInput, Checkbox } from 'react-native-paper';

const Input = ({ height, width, error, ...rest }) => {

    return (
        <TextInput
            style={[styles.Input, {
                width: width ? width : '100%', height: height ? height : 46,
                // borderColor: error ? '#FF7171' : '#ccc', 
            }]}
            placeholderTextColor="#aaa"
            outlineColor='#0004'

            activeOutlineColor='#FF9933'
            theme={{ colors: { text: '#000', placeholder: '#aaa' } }}
            error={error}
            {...rest}
        ></TextInput>
    )
}

export default React.memo(Input)

const styles = StyleSheet.create({
    Input: {
        width: '100%',
        height: 50,
        paddingLeft: 10,
        marginBottom: 5,
        fontSize: 14,
        color: '#000',
        backgroundColor: '#fff',
        fontFamily: "Roboto-Regular",
    },
})
