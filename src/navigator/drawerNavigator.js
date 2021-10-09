import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import RootClientTabs from "./clientTab";
import { Icon } from "react-native-elements";
import { colors } from "../global/styles";
import BusinessScreen from "../screens/businessScreen";
import DrawerContent from "../components/drawerContent";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator 
            drawerContent={props=><DrawerContent {...props}/>}
        >
            <Drawer.Screen 
                name="RootClientTabs"
                component={RootClientTabs}
                options={{
                    title:"Client",
                    drawerIcon:({focused,size})=>(
                        <Icon 
                            type="material-community"
                            name="home"
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
            <Drawer.Screen 
                name="BusinessScreen"
                component={BusinessScreen}
                options={{
                    title:"Business",
                    drawerIcon:({focused,size})=>(
                        <Icon 
                            type="material"
                            name="business"
                            color={focused ? '#7cc' : colors.grey2}
                            size={size}
                        />
                    )
                }}
            />
        </Drawer.Navigator>
    )
}