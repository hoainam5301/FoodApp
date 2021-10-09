import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { title, colors, parameters } from "../../global/styles";
import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import { Button, Icon, SocialIcon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import Swiper from "react-native-swiper";

export default function WelcomeScreen({navigation}) {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 3, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 20 }} >
                <Text style={{ fontSize: 26, color: colors.button, fontWeight: 'bold' }} > DISCOVER RESTAURANTS</Text>
                <Text style={{ fontSize: 26, color: colors.button, fontWeight: 'bold' }} > IN YOUR AREA</Text>
            </View>
            <View style={{ flex: 4, justifyContent: 'center' }} >
                <Swiper autoplay={true} >
                    <View style={styles.slide1} >
                        <Image source={{ uri: "https://i.pinimg.com/750x/98/3e/68/983e685e7316ea44c43c83afe8f46833.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View style={styles.slide1} >
                        <Image source={{ uri: "https://i.pinimg.com/750x/06/c1/ff/06c1ffb2093d5a25d3a114c0fec1d904.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                    <View style={styles.slide1} >
                        <Image source={{ uri: "https://i.pinimg.com/750x/e4/b5/e5/e4b5e5946b038dd724873f2e11c0d7d8.jpg" }}
                            style={{ height: "100%", width: "100%" }}
                        />
                    </View>
                </Swiper>
            </View>
            <View style={{ flex: 4, justifyContent: 'flex-end', marginBottom: 24 }} >
                <View style={{ marginHorizontal: 16, marginVertical: 12 }}>
                    <TouchableOpacity style={parameters.buttonStyle} onPress={()=>{ 
                        navigation.navigate("SignInScreen")
                    }} >
                        <Text style={parameters.buttonTitle} >SIGN IN</Text>
                    </TouchableOpacity >
                </View>
                <View style={{  marginTop: 12, }}>
                    <Button
                        title="Create An Account"
                        buttonStyle={styles.buttonCreate}
                        titleStyle={styles.buttonCreateTitle}
                    />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DD6EB'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#97CAE5'
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#92BBD9'
    },
    buttonCreate: {
        backgroundColor: "white",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 42,
        marginHorizontal: 18,
    },
    buttonCreateTitle: {
        color: "#ff8c52",
        fontSize: 17,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 3,
    },

})