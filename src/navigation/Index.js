import { View, Text } from 'react-native'
import React from 'react'
import { AuthProvider } from './AuthProvider'
import Routes from './Routes'
import { Provider as PaperProvider } from 'react-native-paper';

const Providers = () => {
    return (
        <AuthProvider>
            <PaperProvider>
                <Routes />
            </PaperProvider>
        </AuthProvider>
    )
}

export default Providers