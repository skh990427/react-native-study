import {StyleSheet} from 'react-native';
import AuthStackNavigator from "@/src/navigation/AuthStackNavigator";
// import "react-native-gesture-handler";

export default function HomeScreen() {
    // const [name, setName] = useState('');

    // const handleChangeInput = (text: string) => {
    //     console.log(text);
    //     setName(text);
    // };

    return (
        <AuthStackNavigator/>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        flex: 1,
        borderWidth: 2,
        height: 50,
        width: 100
    },
    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
});
