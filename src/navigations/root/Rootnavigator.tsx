import AuthStackNavigator from "@/src/navigations/stack/AuthStackNavigator";
import MainDrawerNavigator from "@/src/navigations/drawer/MainDrawerNavigator";

function RootNavigator() {
    const isLoggedIn = false;

    return <>{isLoggedIn ? <MainDrawerNavigator/> : <AuthStackNavigator/>}</>
}

export default RootNavigator;
