import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, Switch, Text, View } from "react-native";
import { Avatar, Icon } from "react-native-elements";
import { colors } from "../global/styles";

export default function DrawerContent(props) {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView{...props}>
                <View style={{ flexDirection: 'row', alignItems: 'center', paddingLeft: 12, backgroundColor: colors.button, paddingVertical: 24 }} >
                    <Avatar rounded
                        avatarStyle={styles.avatar}
                        size={75}
                        source={{ uri: "https://bukasapics.s3.us-east-2.amazonaws.com/plate5.png" }}
                    />
                    <View style={{ marginLeft: 12, }}>
                        <Text style={styles.username}>Hoai Nam</Text>
                        <Text style={{ fontSize: 16, color: colors.cardbackground }}>UIT</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: colors.button, flexDirection: 'row', justifyContent: 'space-evenly', paddingBottom: 6, }}>
                    <View style={{ marginTop: 0, marginHorizontal: 24, }}>
                        <View style={{ marginLeft: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }} >1</Text>
                            <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }} >My favorite</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 0, marginHorizontal: 24, }}>
                        <View style={{ marginLeft: 12, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }} >0</Text>
                            <Text style={{ fontWeight: 'bold', color: colors.cardbackground, fontSize: 18 }} >My Cart</Text>
                        </View>
                    </View>
                </View>
                <DrawerItemList {...props} />
                <DrawerItem label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem label="Payment"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="credit-card-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem label="Promotions"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="tag-heart"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem label="Settings"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="cog-outline"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <DrawerItem label="Help"
                    icon={({ color, size }) => (
                        <Icon
                            type="material-community"
                            name="lifebuoy"
                            color={color}
                            size={size}
                        />
                    )}
                />
                <View style={{ borderTopWidth: 1, borderTopColor: colors.grey5 }} >
                    <Text style={styles.preferences}>Preferences</Text>
                    <View style={styles.switchText}>
                        <Text style={styles.darkthemeText} >Dark Theme</Text>
                        <Switch
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor="#f4f3f4"
                        />
                    </View>
                </View>
            </DrawerContentScrollView>
            <DrawerItem label="Sign Out"
                icon={({ color, size }) => (
                    <Icon
                        type="material-community"
                        name="logout-variant"
                        color={color}
                        size={size}
                    />
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    avatar: {
        borderWidth: 4,
        borderColor: colors.cardbackground,
    },
    username: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.cardbackground
    },
    preferences: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 20,
    },
    switchText: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 20,
        paddingVertical: 5,
        paddingRight: 10
    },
    darkthemeText: {
        fontSize: 16,
        color: colors.grey2,
        paddingTop: 10,
        paddingLeft: 0,
        fontWeight: "bold"
    }
})