import {SafeAreaView, StyleSheet, TextInput, View} from "react-native";
import InputField from "@/src/components/InputField";
import React, {useRef} from "react";
import useForm from "@/src/hooks/useForm";
import CustomButton from "@/src/components/CustomButton";
import {validateSignup} from "@/src/utils";

function SignupScreen() {
    const passwordRef = useRef<TextInput | null>(null);
    const passwordConfirmRef = useRef<TextInput | null>(null);

    const signup = useForm({
        initialValue: {
            email: "",
            password: "",
            passwordConfirm: "",
        },
        validate: validateSignup
    });

    const handlerSubmit = () => {
        console.log(signup.values)
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.inputContainer}>
                <InputField
                    autoFocus={true}
                    placeholder="이메일"
                    error={signup.errors.email}
                    touched={signup.touched.email}
                    inputMode="email"
                    returnKeyType="next" // 리턴 키 타입 변경
                    // blurOnSubmit={false} // 엔터키 눌러도 키패드 안닫히는속성인데 Deprecated 됨
                    submitBehavior="submit" // 위 속성대신 submitBehavior 사용
                    onSubmitEditing={() => passwordRef.current?.focus()}
                    {...signup.getTextInputProps("email")}
                />
                <InputField
                    ref={passwordRef}
                    placeholder="비밀번호"
                    error={signup.errors.password}
                    touched={signup.touched.password}
                    secureTextEntry={true}
                    returnKeyType="next" // 리턴 키 타입 변경
                    // blurOnSubmit={false} // 엔터키 눌러도 키패드 안닫히는속성인데 Deprecated 됨
                    submitBehavior="submit" // 위 속성대신 submitBehavior 사용
                    onSubmitEditing={() => passwordConfirmRef.current?.focus()}
                    textContentType="oneTimeCode" // Strong Password 안뜨게 해주는거
                    {...signup.getTextInputProps("password")}
                />
                <InputField
                    ref={passwordConfirmRef}
                    placeholder="비밀번호 확인"
                    error={signup.errors.passwordConfirm}
                    touched={signup.touched.passwordConfirm}
                    secureTextEntry={true}
                    textContentType="oneTimeCode" // Strong Password 안뜨게 해주는거
                    onSubmitEditing={handlerSubmit}
                    {...signup.getTextInputProps("passwordConfirm")}
                />
                <CustomButton label="회원가입" onPress={handlerSubmit}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 30
    },
    inputContainer: {
        gap: 20,
        marginBottom: 30,
    }
})

export default SignupScreen;
