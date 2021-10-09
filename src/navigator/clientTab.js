import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../screens/homeScreen";
import { colors } from "../global/styles";
import SearchScreen from "../screens/searchScreen";
import MyOrdersScreen from "../screens/myOrders";
import MyAccountScreen from "../screens/myAccount";
import ClientStack from "./clientStack";


const ClientTabs = createBottomTabNavigator();

export default function RootClientTabs() {
    return (
        <ClientTabs.Navigator
            tabBarOptions={{
                activeTintColor: colors.button
            }}
        >
            <ClientTabs.Screen
                name="HomeScreen"
                component={HomeScreen}
                options={{
                    tabBarLabel: "Home",
                    tabBarIcon: ({ colors, sizes }) => (
                        <Icon
                            name="home"
                            type="material"
                            color={colors}
                            size={sizes}
                        />
                    )
                }}
            />
            <ClientTabs.Screen
                name="ClientStack"
                component={ClientStack}
                options={{
                    tabBarLabel: "Search",
                    tabBarIcon: ({ colors, sizes }) => (
                        <Icon
                            name="search"
                            type="material"
                            color={colors}
                            size={sizes}
                        />
                    )
                }}
            />
            <ClientTabs.Screen
                name="MyOrdersScreen"
                component={MyOrdersScreen}
                options={{
                    tabBarLabel: "My Orders",
                    tabBarIcon: ({ colors, sizes }) => (
                        <Icon
                            name="view-list"
                            type="material"
                            color={colors}
                            size={sizes}
                        />
                    )
                }}
            />
             <ClientTabs.Screen
                name="MyAccountScreen"
                component={MyAccountScreen}
                options={{
                    tabBarLabel: "My Account",
                    tabBarIcon: ({ colors, sizes }) => (
                        <Icon
                            name="person"
                            type="material"
                            color={colors}
                            size={sizes}
                        />
                    )
                }}
            />
        </ClientTabs.Navigator>
    )
}