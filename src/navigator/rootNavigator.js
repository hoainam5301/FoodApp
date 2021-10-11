import React, { useContext } from "react";
import {NavigationContainer} from "@react-navigation/native";
import AuthStack from "./authNavigator";
import AppStack from "./appStack";
import { SignInContext } from "../context/authContext";

export default function RootNavigator(){
    const {signedIn,}=useContext(SignInContext)
    return( 
        <NavigationContainer>
            {
                signedIn.userToken !== 'singed-in' ?(
                    <AuthStack/>
                ) : (
                    <AppStack/>
                )
            }
        </NavigationContainer>
    )
}