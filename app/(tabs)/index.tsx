import RootNavigator from "@/src/navigations/root/Rootnavigator";
import {QueryClientProvider} from "@tanstack/react-query";
import queryClient from "@/src/api/queryClient";
// import "react-native-gesture-handler";

export default function HomeScreen() {

    return (
        <QueryClientProvider client={queryClient}>
            <RootNavigator/>
        </QueryClientProvider>
    );
}
