import React, { useEffect, useState, useContext } from 'react'
import { View, Text, Image, Dimensions, StyleSheet, AppState, ScrollView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/dist/MaterialIcons'
import DrawerContent from '../components/DrawerContent';
import Chapters from '../screens/appscreens/chapters'
import { AuthContext } from './AuthProvider';
import Home from '../screens/Home';
import Learn from '../screens/Learn';
import Subject from '../screens/Subject';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Test from '../screens/Test';
import CustomDrawer from '../screens/CustomDrawer';
import Logout from '../screens/Logout';
import Account from '../screens/appscreens/Account';
const { width, height } = Dimensions.get('window')

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const activeTabColor =
    '#FFB441'
const nonActiveTabColor =
    '#C4C4C4'
const backgroundTabColor =
    '#fff'

const AppStack = () => {

    const { userToken, userDetails } = useContext(AuthContext)

    return (
        <Stack.Navigator initialRouteName={"BottomTabNav"}>
            <Stack.Screen
                name="BottomTabNav"
                component={BottomTabNav}
                options={{
                    headerShown: false,
                }}>
            </Stack.Screen>
            <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
            <Stack.Screen name='Chapters' component={Chapters} options={{ headerShown: false }} />
            <Stack.Screen name='Learn' component={Learn} options={{ headerShown: false }} />
            <Stack.Screen name='Subject' component={Subject} options={{ headerShown: false }} />
            <Stack.Screen name='Test' component={Test} options={{ headerShown: false }} />


        </Stack.Navigator>
    )
}

export default AppStack
const DrawerNavigator = ({ navigation }) => (

    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />} initialRouteName={"Home"}
        options={{ headerShown: false }}
    >

        <Drawer.Screen name='Home' component={Home} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="user" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='My Account' component={Account} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="user" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='My Bookmark' component={Test} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="bookmark" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='My Tests' component={Test} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="clipboard" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='Susbsription Plan' component={Test} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="file-alt" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='FAQs' component={Test} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="user" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='Terms & conditons' component={Test} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="copy" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='Privacy Policy' component={Test} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="lock" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        <Drawer.Screen name='Rate US' component={Test} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="star" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />
        
        <Drawer.Screen name='Logout' component={Logout} options={{
            headerShown: false,
            drawerIcon: () => (
                <Icon name="sign-out-alt" size={30} color="#FF9933" />
            ),
            drawerActiveBackgroundColor: "white"
        }} />









    </Drawer.Navigator>

)


const BottomTabNav = ({ navigation }) => (

    <Tab.Navigator initialRouteName="Drawer"
        screenOptions={{
            keyboardHidesTabBar: true,
            showLabel: false,
            tabBarShowLabel: false,
            tabBarStyle: {
                position: 'absolute',
                // elevation: 5,
                backgroundColor: "#fff",
                // borderTopWidth: 1,
                // borderTopColor: "#f9f9f9",s
                height: 60,
            }
        }}>
        <Tab.Screen name="Drawer" component={DrawerNavigator}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="home" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></Icon>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Home</Text>
                                : null}
                        </View>
                    )
                },
            }} />
        <Tab.Screen name="subject" component={Subject}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="book-open" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></Icon>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Subject</Text>
                                : null}
                        </View>
                    )
                },
            }} />
        <Tab.Screen name="Learn" component={Learn}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="clipboard" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></Icon>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Learn</Text>
                                : null}
                        </View>
                    )
                },
            }} />
        <Tab.Screen name="Test" component={Test}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    return (
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name="file-alt" size={25}
                                color={focused ? activeTabColor : nonActiveTabColor}
                            ></Icon>
                            {focused ?
                                <Text style={{
                                    color: focused ? activeTabColor : nonActiveTabColor,
                                    fontSize: 12
                                }}>Test</Text>
                                : null}
                        </View>
                    )
                },
            }} />

    </Tab.Navigator>
)


const styles = StyleSheet.create({})