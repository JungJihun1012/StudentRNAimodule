import React from "react";
import HomeScreen from "../screen/HomeScreen";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const RootNavigation = () => {
    return(
        <>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
            </Stack.Navigator>
        </>
    )
}

export default RootNavigation;