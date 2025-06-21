import React from "react";
import {Button, SafeAreaView, StyleSheet, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "@/src/navigation/AuthStackNavigator";
import {authNavigations} from "@/src/constant";

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
    return (
        <SafeAreaView>
            <View>
                <Button title="로그인 화면으로 이동" onPress={() => navigation.navigate(authNavigations.LOGIN)}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
