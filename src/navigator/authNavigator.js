import React from "react";
import {createStackNavigator,TransitionPresets} from "@react-navigation/stack";
import WelcomeScreen from "../screens/authScreens/welcomeScreens";
import SignInScreen from "../screens/authScreens/signInScreens";
import SignUpScreen from "../screens/authScreens/signUpScreen";

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
                name="SignUpScreen"
                component={SignUpScreen}
                options={{
                    headerShown:false,
                    ...TransitionPresets.RevealFromBottomAndroid
                }}
            />
        </authStack.Navigator>
    )
}