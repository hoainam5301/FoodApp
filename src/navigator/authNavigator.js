import React from "react";
import {createStackNavigator,TransitionPresets} from "@react-navigation/stack";
import WelcomeScreen from "../screens/authScreens/welcomeScreens";
import SignInScreen from "../screens/authScreens/signInScreens";
import HomeScreen from "../screens/homeScreen";
import RootClientTabs from "./clientTab";
import RestaurantMapScreen from "../screens/restaurantMapScreen";
import DrawerNavigator from "./drawerNavigator";

const authStack= createStackNavigator();

export default function AuthStack(){
    return(
        <authStack.Navigator>
            <authStack.Screen 
                name="WelcomeScreen"
                component={WelcomeScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <authStack.Screen 
                name="SignInScreen"
                component={SignInScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <authStack.Screen 
                name="DrawerNavigator"
                component={DrawerNavigator}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
            <authStack.Screen 
                name="RestaurantMapScreen"
                component={RestaurantMapScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </authStack.Navigator>
    )
}