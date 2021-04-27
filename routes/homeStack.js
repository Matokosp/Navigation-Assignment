import { createStackNavigator } from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import Image from '../screens/Image'
import Header from '../shared/header'
import React from 'react'

const screens = {
    Home: {
        screen: Home,
        navigationOptions: ({ navigation }) => {
            return {
                headerTitle: () => <Header navigation={navigation} title={'Home'}/>,
            }
        }
    },
    Image: {
        screen: Image,
        navigationOptions: {
            title: 'Image'
        }
    }
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#000', height: 150 },
    }
})

export default HomeStack
