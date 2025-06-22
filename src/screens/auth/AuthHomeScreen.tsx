import React from "react";
import {SafeAreaView, StyleSheet, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "@/src/navigations/stack/AuthStackNavigator";
import CustomButton from "@/src/components/CustomButton";
import {authNavigations} from "../../constants/navigations";

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
    return (
        <SafeAreaView>
            <View>
                <CustomButton
                    label="로그인 하기"
                    onPress={() => navigation.navigate(authNavigations.LOGIN)}
                />
                <CustomButton
                    label="회원가입하기"
                    variant='outlined'
                    onPress={() => navigation.navigate(authNavigations.LOGIN)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default AuthHomeScreen;
