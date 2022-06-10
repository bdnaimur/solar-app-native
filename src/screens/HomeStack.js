import React from 'react';
import { View, Text } from 'react-native';
import Home from './home';
import Details from './details';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const RootStack = createNativeStackNavigator();

export default function HomeStack() {


    return (
        <RootStack.Navigator screenOptions={{ headerShown: false }}>
            <RootStack.Screen name="Home" component={Home} />
            <RootStack.Screen name="Details" component={Details} />
        </RootStack.Navigator>
    );
}
