import React, { useLayoutEffect } from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import SearchScreen from "../screens/searchScreen";
import SearchResultScreen from '../screens/searchResultScreen';
import RestaurantHomeScreen from '../screens/restaureantHomeScreen';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import MenuProductScreen from '../screens/menuProductScreen';


const clientSearchStack = createStackNavigator()

export default function ClientStack({navigation,route}) {
    useLayoutEffect(() => {
        const routeName= getFocusedRouteNameFromRoute(route);
        if(routeName==="RestaurantHomeScreen" || "MenuProductScreen" )
        {
            //navigation.setOptions({tabBarVisible:false})           
        }
        else {
            //navigation.setOptions({tabBarVisible:true}) 
        }
    }, [navigation,route])
    return (
        <clientSearchStack.Navigator>
            <clientSearchStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
            <clientSearchStack.Screen
                name="SearchResultScreen"
                component={SearchResultScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
            <clientSearchStack.Screen
                name="RestaurantHomeScreen"
                component={RestaurantHomeScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
            <clientSearchStack.Screen
                name="MenuProductScreen"
                component={MenuProductScreen}
                options={
                    () => ({
                        headerShown: false
                    })
                }
            />
        </clientSearchStack.Navigator>
    )
}
