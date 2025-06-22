import {Dimensions, Pressable, StyleSheet, Text, TextInput, TextInputProps, View} from "react-native";
import {colors} from "@/src/constants";
import {useRef} from "react";

const deviceHeight = Dimensions.get("screen").height;

interface InputFiledProps extends TextInputProps {
    disabled?: boolean;
    error?: string;
    touched?: boolean;
}

function InputFiled({disabled = false, error, touched, ...props}: InputFiledProps) {
    const innerRef = useRef<TextInput | null>(null);

    const handlePressInput = () => {
        innerRef.current?.focus()
    }
    return (
        <Pressable onPress={handlePressInput}>
            <View style={[
                styles.container,
                disabled && styles.disabled,
                touched && Boolean(error) && styles.inputError]}>
                <TextInput
                    ref={innerRef}
                    editable={!disabled}
                    placeholderTextColor={colors.GRAY_500}
                    style={[styles.input, disabled && styles.disabled]}
                    autoCapitalize="none" // 자동 대문자 방지
                    spellCheck={false} // 스펠 체크 방지
                    autoCorrect={false} // 키보드의 자동수정 방지
                    {...props}/>
                {touched && Boolean(error) && <Text style={styles.error}>{error}</Text>}
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: colors.GRAY_200,
        padding: deviceHeight > 700 ? 15 : 10
    },
    input: {
        fontSize: 16,
        color: colors.BLACK,
        padding: 0,
    },
    disabled: {
        backgroundColor: colors.GRAY_200,
        color: colors.GRAY_700,
    },
    inputError: {
        borderWidth: 1,
        borderColor: colors.RED_300
    },
    error: {
        color: colors.RED_500,
        fontSize: 12,
        paddingTop: 5,
    }
})

export default InputFiled;
