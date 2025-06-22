import {createDrawerNavigator} from "@react-navigation/drawer";
import MapHomeScreen from "@/src/screens/map/MapHomeScreen";
import FeedHomeScreen from "@/src/screens/feed/FeedHomeScreen";
import CalendarHomeScreen from "@/src/screens/calendar/CalendarHomeScreen";

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
