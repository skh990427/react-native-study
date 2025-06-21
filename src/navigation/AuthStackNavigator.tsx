import React from "react";
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import AuthHomeScreen from "@/src/screens/AuthHomeScreen";
import LoginScreen from "@/src/screens/LoginScreen";
import {authNavigations} from "@/src/constant";


export type AuthStackParamList = {
    [authNavigations.AUTH_HOME]: undefined;
    [authNavigations.LOGIN]: undefined;
}

function AuthStackNavigator() {
    const Stack = createStackNavigator<AuthStackParamList>();
    return (
        <Stack.Navigator>
            <Stack.Screen name={authNavigations.AUTH_HOME} component={AuthHomeScreen}/>
            <Stack.Screen name={authNavigations.LOGIN} component={LoginScreen}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({})

export default AuthStackNavigator;
