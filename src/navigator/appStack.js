import React from "react";
import { createStackNavigator, TransitionPresets } from "@react-navigation/stack";
import RestaurantMapScreen from "../screens/restaurantMapScreen";
import DrawerNavigator from "./drawerNavigator";

const appStack = createStackNavigator();

export default function AppStack() {
    return (
        <appStack.Navigator>
            <appStack.Screen
                name="App"
                component={DrawerNavigator}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <appStack.Screen
                name="RestaurantMapScreen"
                component={RestaurantMapScreen}
                options={{
                    headerShown: false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </appStack.Navigator>
    )
}