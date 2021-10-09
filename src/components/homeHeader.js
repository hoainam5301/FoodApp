import React from "react";
import { View,Text,StyleSheet } from "react-native";
import { Icon,withBadge} from "react-native-elements";
import { colors,parameters } from "../global/styles";


export default function HomeHeader({navigation}){
    const BadgeIcon=withBadge(1)(Icon);
    return(
        <View style={styles.header} >
            <View style={{alignItems:'center',justifyContent:'center',marginLeft:12}}>
                <Icon 
                    type="material-community"
                    name="menu"
                    color={colors.cardbackground}
                    size={32}
                    onPress={()=>{navigation.openDrawer()}}
                />
            </View>
            <View style={{alignItems:'center',justifyContent:'center'}} >
                <Text style={{color:colors.cardbackground,fontSize:25,fontWeight:'bold'}} > Fast Delivery Food </Text>
            </View>
            <View style={{alignItems:'center',justifyContent:'center',marginRight: 24,}} >
                <BadgeIcon 
                    type="material-community"
                    name="cart"
                    color={colors.cardbackground}
                    size={32}
                />
            </View>
        </View>
    )
}

const styles=StyleSheet.create({
    header:{
        flexDirection: 'row',
        backgroundColor:colors.button,
        height:parameters.headerHeight,
        justifyContent:'space-between',
    }
})