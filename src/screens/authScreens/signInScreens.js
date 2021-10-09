import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { title, colors, parameters } from "../../global/styles";
import React, { useRef, useState } from "react";
import Header from "../../components/Header";
import { Button, Icon, SocialIcon } from "react-native-elements";
import * as Animatable from 'react-native-animatable';
import { Formik } from 'formik';
import { values } from "lodash";
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
GoogleSignin.configure({
    webClientId: '874777116491-j6eo9n6pnq0r6p7nijfjp4jjl8rf5fap.apps.googleusercontent.com',
});


export default function SignInScreen({ navigation }) {

    const [textInput2Focused, setTextInput2Focused] = useState(false)
    const textInput1 = useRef(1)
    const textInput2 = useRef(2)

    async function SignIn(data) {
        try {
            const {email,password}=data
        const user = await auth().signInWithEmailAndPassword(email,password)
        if(user){
            console.log("USER SIGN IN SUCCED")
        }
        } catch (error) {
            Alert.alert(
                error.name,
                error.message
            )
        }          
    }

    async function SignInGoogle() {  
        try {
            const { idToken } = await GoogleSignin.signIn();
        } catch (error) {
            console.log("Loiiiiiiiiiiiiiiiiiiiiiiiiiiiii",error)
        }  
    }

    return (
        <View style={styles.container}>

            <Header title={"My Account"} type={"arrow-back"} navigation={navigation} />
            <View style={{ marginLeft: 24, marginTop: 12 }}>
                <Text style={title} >Sign-In</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 6 }} >
                <Text style={styles.text1} > Please enter the email and password !!! </Text>
                <Text style={styles.text1} > registered with your account </Text>
            </View>
            <Formik initialValues={{ email: '', password: '' }}
                onSubmit={(values) => {
                    SignIn(values)
                }} >
                {
                    (props) => (
                        <View>
                            <View style={{ marginTop: 20 }}>
                                <View>
                                    <TextInput
                                        style={styles.textInput}
                                        placeholder="Email"
                                        ref={textInput1}
                                        onChangeText={props.handleChange('email')}
                                        value={props.values.email}
                                    />
                                </View>



                                <View style={styles.textInput2}>
                                    <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400} >
                                        <Icon
                                            name="lock"
                                            iconStyle={{ color: colors.grey3 }}
                                            type="material"
                                            style={{}}
                                        />
                                    </Animatable.View>

                                    <TextInput
                                        style={{ flex: 1 }}
                                        placeholder="Password"
                                        ref={textInput2}
                                        onFocus={() => {
                                            setTextInput2Focused(false)
                                        }}

                                        onBlur={() => {
                                            setTextInput2Focused(true)
                                        }}
                                        onChangeText={props.handleChange('password')}
                                        value={props.values.password}
                                    />

                                    <Animatable.View animation={textInput2Focused ? "" : "fadeInLeft"} duration={400} >

                                        <Icon
                                            name="visibility-off"
                                            iconStyle={{ color: colors.grey3 }}
                                            type="material"
                                            style={{ marginRight: 10 }}

                                        />

                                    </Animatable.View>
                                </View>

                            </View>

                            <View style={{ marginHorizontal: 20, marginTop: 30 }}>
                                <Button
                                    title="SIGN IN"
                                    buttonStyle={parameters.buttonStyle}
                                    titleStyle={parameters.buttonTitle}
                                    onPress={props.handleSubmit}
                                />
                            </View>
                        </View>
                    )
                }
            </Formik>

            <View style={{ alignItems: "center", marginTop: 0, }} >
                <Text style={{ ...styles.text1, textDecorationLine: 'underline' }} >Forgot Password</Text>
            </View>
            <View style={{ alignItems: 'center', marginTop: 9, marginBottom: 18 }} >
                <Text style={{ fontSize: 20, fontWeight: "bold" }} >OR</Text>
            </View>
            <View style={{ marginHorizontal: 12, marginTop: 6 }} >
                <SocialIcon
                    title="Sign In With Facebook"
                    button
                    type="facebook"
                    style={styles.SocialIcon}
                    onPress={() => { }}
                />
            </View>
            <View style={{ marginHorizontal: 12, marginTop: 6 }} >
                <SocialIcon
                    title="Sign In With Google"
                    button
                    type="google"
                    style={styles.SocialIcon}
                    onPress={() => SignInGoogle()}
                />
            </View>
            <View style={{ marginLeft: 24, marginTop: 24 }} >
                <Text style={styles.text1} > New on Fast Delivery ?</Text>
            </View>
            <View style={{ alignItems: "flex-end", marginTop: 12, }}>
                <Button
                    title="Create An Account"
                    buttonStyle={styles.buttonCreate}
                    titleStyle={styles.buttonCreateTitle}
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text1: {
        color: colors.grey3,
        fontSize: 18,
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        fontSize: 18,
        borderRadius: 12,
        marginBottom: 20,
        paddingLeft: 12
    },
    textInput2: {
        borderWidth: 1,
        borderColor: "#86939e",
        marginHorizontal: 20,
        borderRadius: 12,
        marginBottom: 20,
        fontSize: 18,
        paddingLeft: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    SocialIcon: {
        borderRadius: 12,
        height: 50,
    },
    buttonCreate: {
        backgroundColor: "white",
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#ff8c52",
        height: 45,
        marginHorizontal: 20,
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