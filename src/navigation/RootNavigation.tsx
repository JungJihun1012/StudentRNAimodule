import React from "react";
import createStackNavigator from "@react-navigation/native-stack";
import HomeScreen from "../screen/HomeScreen";

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