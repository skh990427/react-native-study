import {createDrawerNavigator} from "@react-navigation/drawer";
import MapHomeScreen from "@/src/screens/MapHomeScreen";
import FeedHomeScreen from "@/src/screens/FeedHomeScreen";
import CalendarHomeScreen from "@/src/screens/CalendarHomeScreen";

const Drawer = createDrawerNavigator();

function MainDrawerNavigator() {

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MapHome" component={MapHomeScreen}/>
            <Drawer.Screen name="FeedHome" component={FeedHomeScreen}/>
            <Drawer.Screen name="CalendarHome" component={CalendarHomeScreen}/>
        </Drawer.Navigator>
    )
}

export default MainDrawerNavigator;
