import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Subject from '../screens/Subject';
import Learn from '../screens/Learn';
import Test from '../screens/Test';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor: '#FF9933',
            tabBarStyle:{
                height:65,
                paddingBottom: 10,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
            }
        }}
    >
      <Tab.Screen name="Home" component={Home} options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({color, size}) => (
                <Icon name="home" size={size} color={color} />
            )
        }}/>
      <Tab.Screen name="Subjects" component={Subject} options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({color, size}) => (
                <Icon name="book-open" size={size} color={color} />
            )
        }} />
      <Tab.Screen name="Learn" component={Learn} options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({color, size}) => (
                <Icon name="clipboard" size={size} color={color} />
            )
        }}/>
      <Tab.Screen name="Test" component={Test} options={{
            headerTitleAlign: 'center',
            tabBarIcon: ({color, size}) => (
                <Icon name="file-alt" size={size} color={color} />
            )
        }}/>
    </Tab.Navigator>
  )
}

export default TabNavigation