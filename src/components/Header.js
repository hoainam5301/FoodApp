import React from "react";
import { StyleSheet, View,Text } from "react-native";
import { parameters, colors } from "../global/styles";
import { Icon } from "react-native-elements";
import { Dimensions } from "react-native";


export default function Header({title,type,navigation}) {
    
    return (
        <View style={styles.header}>
            <View style={{marginLeft:6}}>
                <Icon type="material-commuity" name={type} color={colors.cardbackground} size={36} onPress={() => {navigation.goBack()}} />
            </View>
            <View>
                <Text style={styles.headerText} >
                    {title}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: colors.button,
        flexDirection: 'row',
        height: parameters.headerHeight,
    },
    headerText:{
        textAlign:'center' ,
        fontSize:24,
        color:colors.cardbackground,
        fontWeight:'bold',
        marginLeft:24       
       // width:Dimensions.get('window').width,
    }
})