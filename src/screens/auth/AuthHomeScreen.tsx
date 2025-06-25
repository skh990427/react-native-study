import React from "react";
import {Dimensions, SafeAreaView, StyleSheet, View} from "react-native";
import {StackScreenProps} from "@react-navigation/stack";
import {AuthStackParamList} from "@/src/navigations/stack/AuthStackNavigator";
import CustomButton from "@/src/components/CustomButton";
import {authNavigations} from "@/src/constants";
import {Image} from "expo-image";

type AuthHomeScreenProps = StackScreenProps<AuthStackParamList>;

function AuthHomeScreen({navigation}: AuthHomeScreenProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require("../../assets/matzip.png")}/>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton
                    label="로그인 하기"
                    onPress={() => navigation.navigate(authNavigations.LOGIN)}
                />
                <CustomButton
                    label="회원가입하기"
                    variant='outlined'
                    onPress={() => navigation.navigate(authNavigations.SIGNUP)}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
        alignItems: "center",
    },
    imageContainer: {
        flex: 1.5,
        width: Dimensions.get("screen").width / 2
    },
    image: {
        width: "100%",
        height: "100%",
    },
    buttonContainer: {
        flex: 1,
        gap: 10
    }
});

export default AuthHomeScreen;
