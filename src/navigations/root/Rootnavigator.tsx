import AuthStackNavigator from "@/src/navigations/stack/AuthStackNavigator";
import MainDrawerNavigator from "@/src/navigations/drawer/MainDrawerNavigator";
import useAuth from "@/src/hooks/queries/useAuth";

function RootNavigator() {
    const {isLogin} = useAuth();

    return <>{isLogin ? <MainDrawerNavigator/> : <AuthStackNavigator/>}</>
}

export default RootNavigator;
