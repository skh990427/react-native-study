import React, {useRef} from "react";
import {SafeAreaView, StyleSheet, TextInput, View} from "react-native";
import InputField from "@/src/components/InputField";
import CustomButton from "@/src/components/CustomButton";
import useForm from "@/src/hooks/useForm";
import {validateLogin} from "@/src/utils";
import useAuth from "@/src/hooks/queries/useAuth";

function LoginScreen() {
    const passwordRef = useRef<TextInput | null>(null);
    const {loginMutation} = useAuth();
    const login = useForm({
        initialValue: {
            email: "",
            password: "",
        },
        validate: validateLogin,
    });

    const handleSubmit = () => {
        loginMutation.mutate(login.values);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <InputField
                    autoFocus={true}
                    placeholder="이메일"
                    error={login.errors.email}
                    touched={login.touched.email}
                    inputMode="email"
                    // value={values.email}
                    // onChangeText={(text) => handleChangeText("email", text)}
                    // onBlur={() => handleBlur("email")}
                    submitBehavior="submit"
                    returnKeyType="next"
                    onSubmitEditing={() => {
                        passwordRef.current?.focus()
                    }}
                    {...login.getTextInputProps("email")}
                />
                <InputField
                    ref={passwordRef}
                    placeholder="비밀번호"
                    error={login.errors.password}
                    touched={login.touched.password}
                    secureTextEntry={true}
                    // value={values.password}
                    // onChangeText={(text) => handleChangeText("password", text)}
                    // onBlur={() => handleBlur("password")}
                    submitBehavior="submit"
                    returnKeyType="join"
                    onSubmitEditing={handleSubmit}
                    {...login.getTextInputProps("password")}
                />
            </View>
            <CustomButton label='로그인'
                          variant='filled'
                          size='large'
                          onPress={handleSubmit}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30,
    },
    inputContainer: {
        gap: 20,
        marginBottom: 30
    }
});

export default LoginScreen;
